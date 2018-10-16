# CorrentlyWallet
**Ethereum Blockchain Wallet implementing Green Energy semantics for Corrently based decentralized capacity market.**

[![npm version](https://badge.fury.io/js/correntlywallet.svg)](https://badge.fury.io/js/correntlywallet) [![Greenkeeper badge](https://badges.greenkeeper.io/energychain/CorrentlyWallet.svg)](https://greenkeeper.io/)
[ ![Codeship Status for energychain/CorrentlyWallet](https://app.codeship.com/projects/1851a8e0-aa17-0136-d403-2eaeeac4cf7b/status?branch=master)](https://app.codeship.com/projects/309008)
[![Build Status](https://travis-ci.org/energychain/CorrentlyWallet.svg?branch=master)](https://travis-ci.org/energychain/CorrentlyWallet)
[![CircleCI](https://circleci.com/gh/energychain/CorrentlyWallet.svg?style=svg)](https://circleci.com/gh/energychain/CorrentlyWallet)
[![CodeFactor](https://www.codefactor.io/repository/github/energychain/correntlywallet/badge)](https://www.codefactor.io/repository/github/energychain/correntlywallet)
[![HitCount](http://hits.dwyl.io/energychain/CorrentlyWallet.svg)](http://hits.dwyl.io/energychain/CorrentlyWallet)
[![Join the chat at https://gitter.im/corrently/Wallet](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/corrently/Wallet)
[![Coverage Status](https://coveralls.io/repos/github/energychain/CorrentlyWallet/badge.svg?branch=master)](https://coveralls.io/github/energychain/CorrentlyWallet?branch=master)

## Motivation
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzAyIiBoZWlnaHQ9IjI3NyIgdmVyc2lvbj0iMS4xIj48ZGVmcz48ZmlsdGVyIGlkPSJkcm9wU2hhZG93Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiBzdGREZXZpYXRpb249IjEuNyIgcmVzdWx0PSJibHVyIi8+PGZlT2Zmc2V0IGluPSJibHVyIiBkeD0iMyIgZHk9IjMiIHJlc3VsdD0ib2Zmc2V0Qmx1ciIvPjxmZUZsb29kIGZsb29kLWNvbG9yPSIjM0Q0NTc0IiBmbG9vZC1vcGFjaXR5PSIwLjQiIHJlc3VsdD0ib2Zmc2V0Q29sb3IiLz48ZmVDb21wb3NpdGUgaW49Im9mZnNldENvbG9yIiBpbjI9Im9mZnNldEJsdXIiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJvZmZzZXRCbHVyIi8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0ib2Zmc2V0Qmx1ciIvPjwvZmlsdGVyPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUsMC41KSIgZmlsdGVyPSJ1cmwoI2Ryb3BTaGFkb3cpIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNjk1IiBoZWlnaHQ9IjI3MCIgcng9IjQwLjUiIHJ5PSI0MC41IiBmaWxsPSIjZmZmMmNjIiBzdHJva2U9IiNkNmI2NTYiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PHJlY3QgeD0iNDAiIHk9IjE5MCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSI2MCIgcng9IjkiIHJ5PSI5IiBmaWxsPSIjYmVkY2JkIiBzdHJva2U9IiNiODU0NTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjc3LjUsMjA2LjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjE0NCIgaGVpZ2h0PSIyNiIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiAxNDRweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgd29yZC13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7Ij48Yj5FeHRlbmRzIEV0aGVyZXVtIFdhbGxldDwvYj48YnIgLz5ldGhlcnMuanM8YnIgLz48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNzIiIHk9IjE5IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEycHgiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiPiZsdDtiJmd0O0V4dGVuZHMgRXRoZXJldW0gV2FsbGV0Jmx0Oy9iJmd0OyZsdDticiZndDtldGhlcnMuanMmbHQ7YnImZ3Q7PC90ZXh0Pjwvc3dpdGNoPjwvZz48cGF0aCBkPSJNIDQ1MCA5MCBMIDQ1MCA3My41IFEgNDUwIDYwIDQzNi41IDYwIEwgMjYzLjUgNjAgUSAyNTAgNjAgMjUwIDczLjUgTCAyNTAgOTAiIGZpbGw9IiNlNmU2ZTYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PHBhdGggZD0iTSAyNTAgOTAgTCAyNTAgMTY2LjUgUSAyNTAgMTgwIDI2My41IDE4MCBMIDQzNi41IDE4MCBRIDQ1MCAxODAgNDUwIDE2Ni41IEwgNDUwIDkwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ibm9uZSIvPjxwYXRoIGQ9Ik0gMjUwIDkwIEwgNDUwIDkwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ibm9uZSIvPjxnIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTRweCI+PHRleHQgeD0iMzQ5IiB5PSI4MC41Ij5FbmVyZ3k8L3RleHQ+PC9nPjxnIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCI+PHRleHQgeD0iMjU1LjUiIHk9IjEwNy41Ij4rIENhcGFjaXR5IFRyYWRpbmc8L3RleHQ+PHRleHQgeD0iMjU1LjUiIHk9IjEyMS41Ij4rIEJhbGFuY2luZyBhbmQgQWdncmVnYXRpb248L3RleHQ+PHRleHQgeD0iMjU1LjUiIHk9IjEzNS41Ij4rIERpc3BhdGNoPC90ZXh0Pjx0ZXh0IHg9IjI1NS41IiB5PSIxNDkuNSI+KyBUZWNobmljYWwgRHVlIERpbGlnZW5jZTwvdGV4dD48L2c+PHBhdGggZD0iTSA2NjAgOTAgTCA2NjAgNzMuNSBRIDY2MCA2MCA2NDYuNSA2MCBMIDQ3My41IDYwIFEgNDYwIDYwIDQ2MCA3My41IEwgNDYwIDkwIiBmaWxsPSIjZTZlNmU2IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ibm9uZSIvPjxwYXRoIGQ9Ik0gNDYwIDkwIEwgNDYwIDE2Ni41IFEgNDYwIDE4MCA0NzMuNSAxODAgTCA2NDYuNSAxODAgUSA2NjAgMTgwIDY2MCAxNjYuNSBMIDY2MCA5MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48cGF0aCBkPSJNIDQ2MCA5MCBMIDY2MCA5MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48ZyBmaWxsPSIjMzMwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE0cHgiPjx0ZXh0IHg9IjU1OSIgeT0iODAuNSI+RmluYW5jaWFsPC90ZXh0PjwvZz48ZyBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiPjx0ZXh0IHg9IjQ2NS41IiB5PSIxMDcuNSI+KyBNaWNybyBJbnZlc3RtZW50IChDYXBhY2l0eSk8L3RleHQ+PHRleHQgeD0iNDY1LjUiIHk9IjEyMS41Ij4rIENyeXB0byBDdXJyZW5jeSAoQ09SSS9Db3JyZW50bHkpwqA8L3RleHQ+PHRleHQgeD0iNDY1LjUiIHk9IjEzNS41Ij4rIERpZ2l0YWwgQXNzZXQgTWFuYWdlbWVudDwvdGV4dD48L2c+PGltYWdlIHg9IjM0LjUiIHk9IjkuNSIgd2lkdGg9Ijk4IiBoZWlnaHQ9IjQyIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdJQUFBQXFDQVlBQUFCSXJvNFBBQUFOUkVsRVFWUjRYdTJiZTNUVTFiWEhQL3ZNVERLOHBFaTFTN0VXOUlxTFd4UUlZSDBncGVxVlcwb21BU3dJbFFwS1FQQlI0Q3BrZ3RWb0pROThBejRJV092MWRVc1VBZ0VzOVFHMVhtK1ZKaUF0RkpXbHJkNHJZcXRFSkpESHpObDNuVjltd2lUTUpEelhzb1R6MzZ6ek8vdjNPL3Q3OXV1N3p3Z254dGRDQTNLa1h6RmtBc0VxQ0taMXdGY1R4ZWVyUlNOQkl1MzlSUGQ4U3MyV1V1cU85QjF0WWYwaEE5RjNBdC93KytocERkMEZ6aFNobXlyZlVxR0RnYlNvWWtXb0ZtV2ZDcCtxOEtFUGRvaGwrNGJGYkFXMExTajJVUGQ0MEVDY1A1VnpBMUZHQzF5czBCUG9EcGlEZk9FK1lMc3FXeXlzUGFlS3AwdExpUjdrMmpieFdLdEFuRCtlRG9FZ1AwZjRNZkFkd0hlRW10bWp3cnRZNWxZdVp2a1J5anB1bHJjSXhJQ3BuS3RSZmczME9RWTdya05aVkxHWVc0NkI3SDg2a1NtQnlKaEtmNG53TzRRT3gzSlhBc3M2dnNlWTlldUpITXYzZk4xbEp3V2lidzU5amZBSGdmU0QzSUNMQVRWQVBXQ0JBTkFlYUhjdzZ4VWVFcGhWVWVLdGI1UGpBQ0Q2VCtZMFZkNFU4WUp4aTBQZ2p4WTJpN0pKWVdkVXFBb1k2aUlST3Z0OG5BbWNwMHBmZ1lHdGlLcFRaWHpsWXBhMjlzN2pkZjRBSVBwTjRsbGpHTmZLaGoreVNtRlVXYnQ1Q1IrMjlHei95WnlONVVvTVB3UE9UZldzd21hdDU0cU5UL0wzNDFYWkxlMnJDUkFEY3ZpaEN2OEpmRE9sd3BSdDFoRGF0SWozRDBWaEE2Nm50L3A1R09XeVZPdXM1ZHFOUzNpNkxkWWFUWURJbU13dkJTYTJjR3AzQ2ZTb0tPSExRd0VoL216RzlmeUwrRmptWEZiUzljcldUdDNvc3o2LzdRWHVSaUQ2VGFHUEtNOEw5RXFtSkZjT0N3eXRLT0czaHdOQ2ZFMi9ISzR6d256d3NqRVhuRjFoOTRYQ2F5amxsZDE0Z1h3djRMZXAwUWpFZ0VtTVZjTnpMYmlrMWJ1RGpOcStnTm9qMVZDZlNieUVvVjR0cjFWRitlMUhUM3JVUjVzZUhoRDlKeE93Y0xlQjNCYUFHRk81bU5Kay9udDVJZDM5bHJPdDBObXRGNkdxM3ZLWFVYUFlFWmUzTkorT3dYUXVOdEQ1S3lYWUs4ak82aWlCUFpaQXJWSXJodTJac3hyaXpycDgvSHVDWEtqS3Q1R21WSWlGZlJMbGI3WG5zR1gwNklhNVZZWDB0NDUyYWZhc203T0tpTEFqSzVmWFY5NUxEeUprS0JnVnRtWG44cWY0OTYwcXBFc0Vya1Q1cWk3SXVtQXRsMXJvWWlRNU42WktvTnZKTE4xUlJUK3I5RVRaa2hWbVk2TCsxdVJ6VW4wN2hxalMwYSs4TkR6TXJ2ajhpbUk2aWVVaVZVNkxCbmpKQStLQ0cra2FxZmZpUXlpRjc5Nmh5dVdWUy9oTDgvbXlJc1lKakVMcERad2lpcXJ3R2NKV1kzazZNNDh5dDhZcFFldDVES0dQcTA4VS9ERlp6ZzN0VW5qUEtBdENlYXdxejZjOTZUeHFZWmdvUGhXdkxuSERlY2l2SEc5bDRKbU90VHp6ZzN4cVZoWlRwSmJyWXpXTXExOFNpVVUvd2t0WnVZd3FMMlNNVmVZaXBLTzhHYXBqck1UYzRJcDdPWjhJdndFK2FHY1lYV3NwdGRBdjVqcGRuZVE4Z2ZzTzUxS2QvRTZCRG5TMmU4bVBLam1pUEJESzQ4NUUvYnhjUk9kOWxtSVZyaEhsOWxBZUQ4WG55d29ZSnNJQ2hDcUV6TGhGbkttd1d2Q1VlZUFRWHJQMWpOLzRTejVKblBRMkp1U0tZMStkVzdPOG9qNk1pVEpDNFRLRnZUN0w5TXc1dkxyNlByNFRqZkNRS2hjaFRNZnlzU2ZMUjNzc0k0Ri9CM2JYMW5JSkp4RU4xdkdnS3RraXpCZkxPdXNJUmg5cFdBWWhURVNwOTFsR0RaL0RuMWNWY1ZkVXVVNkVsNDN5aURXTndDRUdRZGlWZVN2YnlvdTV5bHJ1UUdtUFVHMmdJRFBzVVRnc20wdHZuMkc1Q24vTHp1V0sxVVdjWjMxMEZLSE8xdk5UZFlkVXFEU0d1YXFraWVLdnFPSE5qSFlVcU9WYWhZWFpZZVkyVjk3S1lpNVV5LzBDWFgwK2h2eG9GcDh1emVmazlIUWVRQmlHWlZJb2ovSUdpOGloWjFSNHc1M29aRGdvTEJLWVdWSEMzdmo4bW1MT2lGanVVeGlzd3Z6T05kdzM1TTZZR3luRnJIeWZSekZlcXJvaks4emdCQ0F1TmNxZ3pEeTJ4V1V0SzZhWHozSS8wRmNDWlBuVDJCelp5OE9xakJMaHhsRHUva0p2VFFHblJJUUNoV3g4VE11YVJXa01DR2NSejJXRm1aWDBNQUV4SVBKRlBCZllSNVUvUkpXYlIrYnhlWE1nbWh5NEluS3RNbFdFVjBPNVhKYzRGN1BHbEVCNDNxQ1FleFIrWW1IRmlERFRWeGJ4UTFXZUZHRk54SEtiZTc4SHhJQWI2RzB0bXlRRnM2b3c3NlRUbVpPWVZwWVZjYkVvanp0ekRTaURoK1UxTGNSV3p1UDdhbmtBcFZQVU1qS2c3RkkvQzFXNUZNTWxXYk41TnhrUVBzUGxwaDBmSEF3UVJyazJNNDgxaHdqRVhTai9iWlIvV0I5WEs5eWVuY3R6eHhRSTU1YWpQS0hLV1NoalJEd1gxa1BoNXV3d3J6ZzllRUJrVE9KOE1ieVQ2aVNoM0ZteG1Mc1Q1OHVLR0NyS1V3SnYrMnU1WmxnK3V4UG5WeFJ6dWxwZWNDYUpjcHZmejl0UnkyT3FIb0RYRytXdjNnY0lIU0tHcTFVWkFieDd4c2tNLzZBYWY4dzFPUmRYaExMV3J4Z002VkVZZ25BanlrN3hNeTUwR3grMjZKckFwaG4rT3ZRMlBvdGJoTUlHWDVUYnJZOTFBcHZUL1V5cmpYS0tLbVZ4MTNRMExjTEpLaXZnRm1mZENIdFU2U3JDaXlmVk1NZkZ1RVlnWEExaGxFMnBnSEJ4WU9NaWlwc291dER6NlUvaFhKb3dJV3UyRjBRYlIvbDlmRE5hejBvSGhBaXpmSWEzWWtDNE9OUTFGdmhjMEhNZjhxVkFoUWlGbWJtOHMvUUIybmxBTkdReEx2akdHZUFhaFdxQlA2dXdvTzRzWG5HWlV3eUluOFo2SlYwU2dyVTdhSHNFd3FFd3Ywb0VJanZNeEJXRmhJRVpJdHlrVWJaaGVQRllBZUV5d2QzcGxOUFFWTnNoTUNNVVprTmNZWTBXZ2VHZFZKeTRRbjVsQ1hjMXNZZ0NMaFZoc1ZPa3JXWElpSHlxRXVkZFNobUZ4NEF1MXZKajQrY3pVUjVSNVFLQitRcC9Gd2hhdkl6aVZKL2haOE56V2Uxa05BS2hoQVF2WmQ2b0xoc3pqQmRMZC9mZVVIai93WWhiaE11RWdGK0xhY3pJVUV2RUoyd2FIdWFENWtDc21rdnZxUEcrVVZIQ0NMODZWa0I0c2FLQVc5VXd6ZTNIWlhHSit2SjBQekNINzFxaEVraExaaFVDOTNZOG5iekVHTEg4RjV4dC9GNDZsb0dTbDVYSFUwMkNXQUYzcVhqK3NEcVVTLy95SWx4bTVnSndZNHpJejhka3BERlJoVUtVVndOMVRIRXVMZ0VJOTdIVHNzSWVHSGh4cDZGUjlhZW80WmFSc3h2UzZSZ1FreFNlemc2bnJvV2FBeEVMcExNVnBpRzhnSktwd2tjdWF6cFUxK1JTMFZBdUJTbmRPN0Npa0pzUVpxcFNtUjNtcWdPQWNCd1FodGRGT0MycElPV0ptZ0RUdHp6S25tYktucTdpSWF3K1lhRVJsa2NWbzhwWWhiRXVDek9HR3pOblU1WXFhM3F4bURQOHlvTW9nMFNabFJubW1kSUhDY1ppUkpPc2FWMCt3ZDNwM0F2ZUpoYlZwbE04ZWliN0VvTDFmMldGdVhYcDBxWUg2cXhkNklBcDFDY0RvbndlNTlnSWp5QWViUzhxZkh3NFFBQ1Bobks1cDdSMGYrcnNkTFYxSzVIOFdLMnljaTQzcTQ4WktZRVlPSkZ2Ui8yVWlaQ1JGQWpoOS80bzQ5NWF3djhtemkvTkp5MDkzVHNGVjdvbWtFSkFHb29keHlHcGMwV2hQSTlYSWc0RWxzRUNseVNtcjJVRlhDWENMNXdpZ240R3AxV3orNnQyUEt6V1MxK25KYWF2WlFYOGE4ejlkRkRMMk93ODNuSkFSSlJyUlltd3YvaUxmNnE3NFBDaFVTWWo5TEp3RDdBaEs4eUUrQU5sUmVRYTlXb0ZWMlIrbkJYbThpUVdNVTJFVjFLa3IrN1F1UTVqdkVpTkwzZng2WTVRbUJjOTYzTkFHR2E2ZWlTcGEvS3V5S1R4dU1LWUZLYmxlZ1NYVjVUc3B3U2FXRVlobDZrd0ZFZEpOSkI0MjFWWWxrZ2gvR1l1cDlYNW1PbXExYnA2Y2tiL2ZIOGZJMWFCemtMb2F3MXJOKzFqWWI5MnpNWnlHWVo1V2JONU9mNitOZk5Kait4bGdsVkdDdnpQeGxydXpnaVNnL0lqbFNRZFBrZHh3QTVmZ0htMm5oNnVIbkJWZjFaNGY4eGJWa0JYbjNBL1FpY3NPN1B5UEN0dkhDc0xtYUF3U29VTjJibE5zOGZ5WW02eWxxRklrdnRieWw0TFQ0d0lzOTRKOHdwZ0dJZXdMU3VYMlFlNEpweXYvb1N3Tkp5VzVON0pNcjd5REo0N0dzeG9yMGxjMkY0WlpBMGJqTERwY0duMWx2eHhhM1Bhd0VFbHZXTjF1SE10dmJPNXpPYS85OVBnT1lTTWVJRXdtRXlnV2w0WHd4VkhvNitjTVptMTB1RE9kcUFlVWZhR0txc3JsN0M1TlFVZXIvT05RQXk4anJPc2orY1JMbWpCS3E2dVhOTEF6Unp1eUpqQ0dGR1dBQjBUWkxpWXNsUGhmV080KzQrUE41aHlXeHBOU29mK09aNmZuTm1DQXZiNkFwejU5aU44ZmpoS2luWG9YQ3JhTjZuVnFSZGd6bjFuTWU4ZGp2eC81alZOZ0JpWVExOHJYaXV6UjBxclVQNVBoSXNyU3Zqb1VEYmU1d2E2K2FPVWVJeGpxamlrTEszc3h0aWpFWWNPNWR1K0RzOGVVRXhuVEdhZXdLMXhIaXJaUjFyWWllVW1ZMWhmVWNJL1d0cUl5OGdrNE4wVW5HZGFjSHV1ejZDV1FXMDFUaVM3MXhSUTVXVVJ2dC9xU1ZIV3FYamRwYTFxK1Z3TTFSS2hMaG9nS0ZHNnFuaDB4TDhCWTZTQllJeTF2ZytVckpZWlozL0pnclo2T1RuNVRiOGI2TzZ6SGtIbENMcVV5a3RRcDJOZXZ3Q3F3Y3VuWGVibHJ1UWs3VzhrQWZncGZ6VzN2UFZzVXdhMzFZTndIRDJRK3U2cm96MkU1OFV3NEZqdVY2QzhLcDFydGk5b3V5QTQvYlo0Ry94N2svaFdSRmlJTkNXb2poWXdLanhjK1FYL3dZbi9TclFNUkV6aDBpK0hLVWE0SStacW12TXBoNHFMbzBBK2ljTFVUU1VOdFBlSjBZcEZKQ3JvdktsMENkUjdmZHZSQ0tjQ0ozUHd0OFZkM1BqY0toOGI0ZG1La2dZaThNVFlyNEZXL3pHVVRGa1prN3ltMFBjdzlNUnlxZ3JmTU5EQnNhOGVsUXkxNHE2ZnVLc2lyaHVsYkJmbGpRMkx2Y2JOaVpGRUE0Y0ZSS0tjaTJiUXJ1Wkx1b2g0VjFRQzZrT01VdXUzMU81Sm82cDVEK01FQ3NrMWNNUkFuRkRzMGRIQUNTQ09qaDZQV01yL0EraVAxUmxUQ3IzUUFBQUFBRWxGVGtTdVFtQ0MiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjczLjUsOC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSIxNTIiIGhlaWdodD0iMjIiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDUxLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDE1NHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyB3b3JkLXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDsiPjxkaXYgc3R5bGU9InRleHQtYWxpZ246IGxlZnQiPjxzcGFuIHN0eWxlPSJmb250LXNpemU6IDIwcHgiPjxiPkNvcnJlbnRseSBXYWxsZXQ8L2I+PC9zcGFuPjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI3NiIgeT0iMTciIGZpbGw9IiMzMzAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTJweCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSI+W05vdCBzdXBwb3J0ZWQgYnkgdmlld2VyXTwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSAyNDAgOTAgTCAyNDAgNzMuNSBRIDI0MCA2MCAyMjYuNSA2MCBMIDUzLjUgNjAgUSA0MCA2MCA0MCA3My41IEwgNDAgOTAiIGZpbGw9IiNlNmU2ZTYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PHBhdGggZD0iTSA0MCA5MCBMIDQwIDE2Ni41IFEgNDAgMTgwIDUzLjUgMTgwIEwgMjI2LjUgMTgwIFEgMjQwIDE4MCAyNDAgMTY2LjUgTCAyNDAgOTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PHBhdGggZD0iTSA0MCA5MCBMIDI0MCA5MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48ZyBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE0cHgiPjx0ZXh0IHg9IjEzOSIgeT0iODAuNSI+Q29yZTwvdGV4dD48L2c+PGcgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4Ij48dGV4dCB4PSI0NS41IiB5PSIxMDcuNSI+KyBJRCAmYW1wOyBLZXkgTWFuYWdlbWVudDwvdGV4dD48dGV4dCB4PSI0NS41IiB5PSIxMjEuNSI+KyBNYXJrZXQgQWNjZXNzPC90ZXh0Pjx0ZXh0IHg9IjQ1LjUiIHk9IjEzNS41Ij4rIFJlZ3VsdG9yeSBDb21wbGlhbmNlIChHRFBSKcKgPC90ZXh0Pjx0ZXh0IHg9IjQ1LjUiIHk9IjE0OS41Ij4rIFNpZ25lZCBNZXRhIEluZm9ybWF0aW9uPC90ZXh0PjwvZz48L2c+PC9zdmc+" style="max-width:100%;" />

Using distributed ledger technology it should be easy to buy energy generation capacity (parts of PV plants, Windparks, etc...) and gain value (electricity) from this digital this property.  Aim of CorrentlyWallet is to have a library that takes advantage of Blockchain, Renewable Energy Generation and modern WebTechnology.

## Features
### No Registration or Identification
A *wallet* could be generated localy (even in browser) during runtime. Provides access to latest crypto wallets and privacy protection tactics.

### OTC/P2P Assignment of generation capacity
Moving parts (shares) from one entity to another does not require a middleman. Provides ability to trade locally produced electricity as capacity backed by contracts.

### Decentralized asset registry for energy assets (cadastral)
A decentralized device registry capable of registering a generation facility with attributes like OEM, capacity,
operating specs, calibration criterion.
Providing a reputation score based on the device performance (see performance monitoring);
Provides mechanism to create blacklist of rogue devices.

### GDPR compliance (Right to be forgotten)
Using 'wallet.deleteData(address)' allows to delete all referenced data and destroy bindings.  It requires to have access to privateKey of account. It might be obvious, but this function has **no undo**.

## Installation

### via Package Manager npm
```
npm -i correntlywallet
```

## Concepts

### Corrently
Households receive 1 Corrently (digital currency) per 1 Kilo-Watt-Hour consumption.

### CORI
A CORI is a ERC20-Token [0x725b190bc077ffde17cf549aa8ba25e298550b18](https://etherscan.io/token/0x725b190bc077ffde17cf549aa8ba25e298550b18) backed by 1 Kilo-Watt-Hour generation per year.

## [API Documentation/Getting Started](https://energychain.github.io/CorrentlyWallet/)

## Contributing
- https://stromdao.de/
- https://gitter.im/corrently/Token
