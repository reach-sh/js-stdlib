var __assign = (this && this.__assign) || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
  return new(P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = (this && this.__generator) || function(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] },
    f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;

  function verb(n) { return function(v) { return step([n, v]); }; }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
          if (op[0] === 6 && _.label < t[1]) { _.label = t[1];
            t = op; break; }
          if (t && _.label < t[2]) { _.label = t[2];
            _.ops.push(op); break; }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) { op = [6, e];
      y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
import ethers from 'ethers';
import url from 'url';
import http from 'http';
import { canonicalizeConnectorMode } from './ConnectorMode.mjs';
import * as ethLikeCompiled from './ETH_compiled.mjs';
import { debug, envDefault, getDEBUG, truthyEnv, replaceableThunk } from './shared_impl.mjs';
import { process, window } from './shim.mjs';
import waitPort from './waitPort.mjs';
export { ethLikeCompiled };
// TODO: types on these
export function _getDefaultNetworkAccount() {
  return __awaiter(this, void 0, void 0, function() {
    var provider, signer;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          debug("_getDefaultAccount");
          return [4 /*yield*/ , getProvider()];
        case 1:
          provider = _a.sent();
          signer = provider.getSigner();
          return [2 /*return*/ , signer];
      }
    });
  });
}
// TODO: types on these
export function _getDefaultFaucetNetworkAccount() {
  return __awaiter(this, void 0, void 0, function() {
    var p;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (!isIsolatedNetwork()) return [3 /*break*/ , 2];
          if (isWindowProvider()) {
            p = new ethers.providers.JsonRpcProvider('http://localhost:8545');
            return [2 /*return*/ , p.getSigner()];
          }
          return [4 /*yield*/ , _getDefaultNetworkAccount()];
        case 1:
          // XXX this may break if users call setProvider?
          // On isolated networks, the default account is assumed to be the faucet.
          // Furthermore, it is assumed that the faucet Signer is "unlocked",
          // so no further secrets need be provided in order to access its funds.
          // This is true of reach-provided devnets.
          // TODO: allow the user to set the faucet via mnemnonic.
          return [2 /*return*/ , _a.sent()];
        case 2:
          throw Error("getFaucet not supported in this context.");
      }
    });
  });
}
// Not an async fn because it throws some errors synchronously, rather than in the Promise thread
function waitProviderFromEnv(env) {
  var _this = this;
  if ('ETH_NODE_URI' in env && env.ETH_NODE_URI) {
    var ETH_NODE_URI_1 = env.ETH_NODE_URI,
      REACH_DO_WAIT_PORT_1 = env.REACH_DO_WAIT_PORT;
    return (function() {
      return __awaiter(_this, void 0, void 0, function() {
        var provider;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!truthyEnv(REACH_DO_WAIT_PORT_1)) return [3 /*break*/ , 2];
              return [4 /*yield*/ , waitPort(ETH_NODE_URI_1)];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              return [4 /*yield*/ , doHealthcheck(ETH_NODE_URI_1)];
            case 3:
              _a.sent();
              provider = new ethers.providers.JsonRpcProvider(ETH_NODE_URI_1);
              // TODO: make polling interval configurable?
              provider.pollingInterval = 500; // ms
              return [2 /*return*/ , provider];
          }
        });
      });
    })();
  } else if ('ETH_NET' in env && env.ETH_NET) {
    var ETH_NET = env.ETH_NET;
    // TODO: support more
    if (ETH_NET === 'homestead' || ETH_NET === 'ropsten') {
      // No waitPort for these, just go
      return Promise.resolve(ethers.getDefaultProvider(ETH_NET));
    } else if (ETH_NET === 'window') {
      var ethereum_1 = window.ethereum;
      if (ethereum_1) {
        return (function() {
          return __awaiter(_this, void 0, void 0, function() {
            var provider;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  provider = new ethers.providers.Web3Provider(ethereum_1);
                  // The proper way to ask MetaMask to enable itself is eth_requestAccounts
                  // https://eips.ethereum.org/EIPS/eip-1102
                  return [4 /*yield*/ , provider.send('eth_requestAccounts', [])];
                case 1:
                  // The proper way to ask MetaMask to enable itself is eth_requestAccounts
                  // https://eips.ethereum.org/EIPS/eip-1102
                  _a.sent();
                  return [2 /*return*/ , provider];
              }
            });
          });
        })();
      } else {
        throw Error("window.ethereum is not defined");
      }
    } else {
      throw Error("ETH_NET not recognized: '" + ETH_NET + "'");
    }
  } else {
    // This branch should be impossible, but just in case...
    throw Error("non-empty ETH_NET or ETH_NODE_URI is required, got: " + Object.keys(env));
  }
}

function setProviderByEnv(env) {
  var fullEnv = envDefaultsETH(env);
  setProviderEnv(fullEnv);
  setProvider(waitProviderFromEnv(fullEnv));
}
export function setProviderByName(providerName) {
  var env = providerEnvByName(providerName);
  setProviderByEnv(env);
}
var localhostProviderEnv = {
  ETH_NODE_URI: 'http://localhost:8545',
  REACH_CONNECTOR_MODE: 'ETH-test-dockerized-geth',
  REACH_DO_WAIT_PORT: 'yes',
  REACH_ISOLATED_NETWORK: 'yes'
};

function windowProviderEnv(REACH_ISOLATED_NETWORK) {
  if (REACH_ISOLATED_NETWORK === void 0) { REACH_ISOLATED_NETWORK = 'no'; }
  return {
    ETH_NET: 'window',
    REACH_CONNECTOR_MODE: 'ETH-browser',
    REACH_ISOLATED_NETWORK: REACH_ISOLATED_NETWORK
  };
}

function ethersProviderEnv(network) {
  return {
    ETH_NET: network,
    REACH_CONNECTOR_MODE: 'ETH-live',
    REACH_ISOLATED_NETWORK: 'no'
  };
}

function providerEnvByName(providerName) {
  switch (providerName) {
    case 'LocalHost':
      return localhostProviderEnv;
    case 'window':
      return windowProviderEnv();
    case 'MainNet':
      return providerEnvByName('homestead');
    case 'TestNet':
      return providerEnvByName('ropsten');
    case 'homestead':
      return ethersProviderEnv('homestead');
    case 'ropsten':
      return ethersProviderEnv('ropsten');
    default:
      throw Error("Unrecognized provider name: " + providerName);
  }
}
// Avoid using _providerEnv directly; use get/set
// We don't use replaceableThunk because slightly more nuanced inspection needs to be possible.
var _providerEnv;

function getProviderEnv() {
  if (!_providerEnv) {
    // We only fall back on process.env if there no setProviderEnv occurrs
    var env = envDefaultsETH(process.env);
    _providerEnv = env;
  }
  return _providerEnv;
}

function setProviderEnv(env) {
  if (_providerEnv) {
    throw Error("setProviderEnv called after it was already set");
  }
  _providerEnv = env;
}
export function isIsolatedNetwork() {
  return truthyEnv(getProviderEnv().REACH_ISOLATED_NETWORK);
}
export function isWindowProvider() {
  var env = getProviderEnv();
  return 'ETH_NET' in env && env.ETH_NET === 'window' && !!window.ethereum;
}

function windowLooksIsolated() {
  if (!window.ethereum)
    return false;
  // XXX this is a hacky way of checking if we're on a devnet
  // @ts-ignore // 0x539 = 1337
  return (window.ethereum.chainId === '0xNaN' || window.ethereum.chainId == '0x539');
}

function connectorModeIsolatedNetwork(connectorMode) {
  switch (connectorMode) {
    case 'ETH-test-dockerized-geth':
      return 'yes';
    default:
      return 'no';
  }
}

function guessConnectorMode(env) {
  if ('ETH_NODE_URI' in env && env.ETH_NODE_URI) {
    // take a guess if ETH_NODE_URI is set
    return env.ETH_NODE_URI.toLowerCase().includes('localhost') ? 'ETH-test-dockerized-geth' : 'ETH-live';
  } else {
    // abstain from guessing
    return undefined;
  }
}

function envDefaultsETH(env) {
  var ETH_NET = env.ETH_NET,
    ETH_NODE_URI = env.ETH_NODE_URI;
  var cm = envDefault(env.REACH_CONNECTOR_MODE, guessConnectorMode(env));
  var REACH_CONNECTOR_MODE = envDefault(cm, canonicalizeConnectorMode(env.REACH_CONNECTOR_MODE || 'ETH'));
  var isolatedDefault = ETH_NET && ETH_NET !== 'window' ? 'no' :
    ETH_NET === 'window' || window.ethereum ? (windowLooksIsolated() ? 'yes' : 'no') :
    connectorModeIsolatedNetwork(REACH_CONNECTOR_MODE);
  var REACH_ISOLATED_NETWORK = envDefault(env.REACH_ISOLATED_NETWORK, isolatedDefault);
  if (truthyEnv(ETH_NET)) {
    return { ETH_NET: ETH_NET, REACH_CONNECTOR_MODE: REACH_CONNECTOR_MODE, REACH_ISOLATED_NETWORK: REACH_ISOLATED_NETWORK };
  } else if (truthyEnv(ETH_NODE_URI)) {
    var REACH_DO_WAIT_PORT = envDefault(env.REACH_DO_WAIT_PORT, 'no');
    return { ETH_NODE_URI: ETH_NODE_URI, REACH_CONNECTOR_MODE: REACH_CONNECTOR_MODE, REACH_DO_WAIT_PORT: REACH_DO_WAIT_PORT, REACH_ISOLATED_NETWORK: REACH_ISOLATED_NETWORK };
  } else {
    if (window.ethereum) {
      return windowProviderEnv(REACH_ISOLATED_NETWORK);
    } else {
      var REACH_DO_WAIT_PORT = env.REACH_DO_WAIT_PORT;
      if (truthyEnv(REACH_DO_WAIT_PORT)) {
        return __assign(__assign({}, localhostProviderEnv), { REACH_DO_WAIT_PORT: REACH_DO_WAIT_PORT });
      } else {
        return localhostProviderEnv;
      }
    }
  }
}
var _a = replaceableThunk(function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var fullEnv;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            fullEnv = getProviderEnv();
            return [4 /*yield*/ , waitProviderFromEnv(fullEnv)];
          case 1:
            return [2 /*return*/ , _a.sent()];
        }
      });
    });
  }),
  getProvider = _a[0],
  _setProvider = _a[1];
export { getProvider };
export function setProvider(provider) {
  // TODO: define ETHProvider to be {provider: Provider, isolated: boolean} ?
  // Maybe also {window: boolean}
  _setProvider(provider);
  if (!_providerEnv) {
    // this circumstance is weird and maybe we should handle it better
    // process.env isn't available in browser so we try to avoid relying on it here.
    setProviderEnv({
      ETH_NET: '__custom_unspecified__',
      REACH_CONNECTOR_MODE: 'ETH-unspecified',
      REACH_ISOLATED_NETWORK: 'no'
    });
  }
};
// XXX: doesn't even retry, just returns the first attempt
var doHealthcheck = function(theUrl) {
  return __awaiter(void 0, void 0, void 0, function() {
    var urlObj;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          debug('doHealthcheck');
          urlObj = url && url.parse && url.parse(theUrl);
          // XXX the code below only supports http
          if (!urlObj || urlObj.protocol !== 'http:') {
            return [2 /*return*/ ];
          }
          return [4 /*yield*/ , new Promise(function(resolve, reject) {
            var data = JSON.stringify({
              jsonrpc: '2.0',
              method: 'web3_clientVersion',
              params: [],
              id: 67
            });
            debug('Sending health check request...');
            var opts = __assign(__assign({}, urlObj), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
              }
            });
            var req = http.request(opts, function(res) {
              debug("statusCode:", res.statusCode);
              res.on('data', function(d) {
                debug('rpc health check succeeded');
                if (getDEBUG()) {
                  process.stdout.write(d);
                }
                resolve({ res: res, d: d });
              });
            });
            req.on('error', function(e) {
              console.log('rpc health check failed');
              console.log(e);
              reject(e);
            });
            req.write(data);
            debug('attached all the handlers...');
            req.end();
            debug('req.end...');
          })];
        case 1:
          _a.sent();
          return [2 /*return*/ ];
      }
    });
  });
};
export { ethers };
export var providerLib = {
  getProvider: getProvider,
  setProvider: setProvider,
  setProviderByName: setProviderByName,
  setProviderByEnv: setProviderByEnv,
  providerEnvByName: providerEnvByName
};
export var standardUnit = 'ETH';
export var atomicUnit = 'WEI';
//# sourceMappingURL=ETH_impl.js.map
