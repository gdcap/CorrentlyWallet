/**
 * Ethereum Blockchain Wallet implementing Green Energy semantics for Corrently based decentralized capacity market.
 *
 * @module CorrentlyWallet
 */

const ethers = require('ethers');
const request = require('request');

if (typeof ethers.providers.getDefaultProvider === 'undefined') {
  if (typeof ethers.getDefaultProvider !== 'undefined') {
    ethers.providers.getDefaultProvider = ethers.getDefaultProvider;
  }
}
/**
 * @const CORRENTLY
 * @desc Core Constants for semantics used in decentralized capacity market
 */
ethers.CORRENTLY = {
  ERC20ABI: require('./ERC20ABI.json'),
  CORI_ADDRESS: '0x725b190bc077ffde17cf549aa8ba25e298550b18',
  API: 'https://api.corrently.de/',
};

/**
 * @function CorrentlyAccount
  *@desc Digital twin of consensus driven account identified by address
 * @param {string} address Address of a twinable account
 * @return {Object} Digital twin identified by address
 */
ethers.CorrentlyAccount = function(address) {
  return new Promise(function(resolve, reject) {
    ethers.utils._retrieveCoriAccount(address).then(function(twin) {
      twin.getCoriEquity = function() {
        const cori_contract = new ethers.Contract(ethers.CORRENTLY.CORI_ADDRESS, ethers.CORRENTLY.ERC20ABI, ethers.providers.getDefaultProvider('homestead'));

        return new Promise(function(resolve2, reject) {
          cori_contract.balanceOf(address).then(function(balance) {
            resolve2(balance / 100);
          });
        });
      };
      resolve(twin);
    });
  });
};

/**
 * @function deleteData
  *@desc GDPR compliance to delete personal and private data from OTC transactions
 * @param {string} address Address of wallet
 */
ethers.Wallet.prototype.deleteData = function(address) {
  let parent = this;
  return new Promise(function(resolve, reject) {
    let transaction = {};
    transaction.timeStamp = new Date().getTime();

    let hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(JSON.stringify(transaction)));
    let signature = parent.sign({data: hash});

    const options = {
      url: ethers.CORRENTLY.API + 'deleteTwin?&signature=' + signature + '&hash=' + hash + '&transaction=' + encodeURI(JSON.stringify(transaction)),
      timeout: 20000,
    };
    request(options, function(e, r, b) {
      let results = JSON.parse(b);
      resolve(results);
    });

  });
};

/**
 * @function buyCapacity
  *@desc OTC buy capacity from market
 * @param {string} asset Address Contract to buy from
 * @param {number} quantity Amount of capacity to buy
 */
ethers.Wallet.prototype.buyCapacity = function(asset, quantity) {
  let parent = this;
  return new Promise(function(resolve, reject) {
    parent._retrieveCoriAccount().then(function(account) {
      ethers.Market().then(function(market) {
        let transaction = {};
        transaction.cori = quantity;
        for (let i = 0; i < market.length; i++) {
          if (market[i].asset === asset.asset) {
            transaction.corrently = market[i].cori * quantity;
          }
        }
        transaction.timeStamp = new Date().getTime();
        transaction.asset = asset.contract;
        transaction.eth = 0;
        transaction.nonce = account.txs.length;

        let hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(JSON.stringify(transaction)));
        let signature = parent.sign({data: hash});

        delete parent.twin;
        const options = {
          url: ethers.CORRENTLY.API + 'signedTransaction?transaction=' + encodeURI(JSON.stringify(transaction)) + '&hash=' + hash + '&signature=' + signature,
          timeout: 20000,
        };
        request(options, function(e, r, b) {
          let results = JSON.parse(b);
          resolve(results.result);
        });
      });
    });
  });
};

/**
 * Link confirmed consumption source to wallet.
 * Any provider or authority might create new demand links. Typical use of this function is after receiving
 * a demandLink from a provider/utility.
 *
 * @function linkDemand
 * @param {string} ethereumAddress Address to link with
 */
ethers.Wallet.prototype.linkDemand = function(ethereumAddress) {
  let parent = this;
  return new Promise(function(resolve, reject) {
    let transaction = {};
    transaction.link = ethereumAddress;
    let hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(JSON.stringify(transaction)));
    let signature = parent.sign({data: hash});

    const options = {
      url: ethers.CORRENTLY.API + 'link?transaction=' + encodeURI(JSON.stringify(transaction)) + '&hash=' + hash + '&signature=' + signature,
      timeout: 20000,
    };
    request(options, function(e, r, b) {
      let results = JSON.parse(b);
      resolve(results.result);
    });
  });
};

/**
 * Request new Demand Link - This method might be used to tell an energy provider to publish a new deman link for this account.
 * Typical usage is to set email and provider in options. The given energy provider will get in contact with you to negotiate an offer.
 * As soon as an energy contract is in place a demanLink will be published and could be used with the function `linkDemand`.
 *
 * Typical Options:
 *  - email: communication address for contract, offer negotiation. Only allowed to be used for this Communication
 *  - provider: Might be 'stromdao' as contact persion (request will be routed to this provider)
 *  - yearlyDemand: Kilo-Watt-Hours per Year requested
 *  - address: Geo-Coded Address for point of consumption
 *
 * @function newDemand
 * @param {object} options Options required for energy  provider to create a demandLink
 */
ethers.Wallet.prototype.newDemand = function(data) {
  let parent = this;
  return new Promise(function(resolve, reject) {
    let email = data.email;
    delete data.email;
    let transaction = {};
    if (typeof data.provider === 'undefined') data.provider = 'STROMDAO';
    transaction.email = email;
    transaction.options = JSON.stringify(data);
    let hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(JSON.stringify(transaction)));
    let signature = parent.sign({data: hash});

    const options = {
      url: ethers.CORRENTLY.API + 'requestLink?transaction=' + encodeURI(JSON.stringify(transaction)) + '&hash=' + hash + '&signature=' + signature,
      timeout: 20000,
    };
    request(options, function(e, r, b) {
      let results = JSON.parse(b);
      resolve(results.result);
    });
  });
};


/**
 * @function transferCapacity
  *@desc Transfer generation capacity to another ethereum account
 * @param {string} ethereumAddress Address to receive capacity
 * @param {number} kilowatthours Kilo-Watt-Hours per year to transfer
 */
ethers.Wallet.prototype.transferCapacity = function(ethereumAddress, kilowatthours) {
  return new Promise(function(resolve, reject) {
    const cori_contract = new ethers.Contract(ethers.CORRENTLY.CORI_ADDRESS, ethers.CORRENTLY.ERC20ABI, ethers.providers.getDefaultProvider('homestead'));
    cori_contract.transfer(ethereumAddress, Math.round(kilowatthours * 100)).then(function(tx) {
      resolve(tx);
    });
  });
};

ethers.Wallet.prototype.transferCORI = ethers.Wallet.prototype.transferCapacity;

/**
 * @function deletePending
  *@desc Delete a pending transaction from q
 * @param {string} nonce nonce of a pending transaction
 */
ethers.Wallet.prototype.deletePending = function(nonce) {
  let parent = this;
  return new Promise(function(resolve, reject) {
    parent._retrieveCoriAccount().then(function(account) {
      let transaction = {};
      transaction.nonce = nonce;

      let hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(JSON.stringify(transaction)));
      let signature = parent.sign({data: hash});

      delete parent.twin;
      const options = {
        url: ethers.CORRENTLY.API + 'deletePending?transaction=' + encodeURI(JSON.stringify(transaction)) + '&hash=' + hash + '&signature=' + signature,
        timeout: 20000,
      };
      request(options, function(e, r, b) {
        let results = JSON.parse(b);
        resolve(results.result);
      });
    });
  });
};

ethers.Wallet.prototype._retrieveCoriAccount = function() {
  let parent = this;
  return new Promise(function(resolve, reject) {
    if (typeof parent.account === 'undefined') {
      ethers.CorrentlyAccount(parent.address).then(function(twin) {
        parent.twin = twin;
        resolve(twin);
      });
    } else {
      resolve(parent.twin);
    }
  });
};

ethers.utils._retrieveCoriAccount = function(address) {
  return new Promise(function(resolve, reject) {
    request(ethers.CORRENTLY.API + 'totalSupply?account=' + address, function(e, r, b) {
      resolve(JSON.parse(b).result);
    });
  });
};

/**
 * @function Market
  *@desc Retrieve market data OTC (Over the counter trade) as provided by Corrently Corp
 * @return {Object} Market data of all assets
 */
ethers.Market = function() {
  return new Promise(function(resolve, reject) {
    request(ethers.CORRENTLY.API + 'market', function(e, r, b) {
      resolve(JSON.parse(b).results);
    });
  });
};

export default ethers;
