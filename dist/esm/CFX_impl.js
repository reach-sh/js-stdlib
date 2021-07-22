var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
import * as cfxers from './cfxers';
import * as ethLikeCompiled from './CFX_compiled';
import { debug, envDefault, memoizeThunk, replaceableThunk, } from './shared_impl';
import { process, window } from './shim';
import waitPort from './waitPort';
import cfxsdk from 'js-conflux-sdk';
import Timeout from 'await-timeout';
var Conflux = cfxsdk.Conflux;
function notYetSupported(label) {
    throw Error(label + " not yet supported on CFX");
}
// XXX incorporate these into setProviderByEnv
var DEFAULT_CFX_NODE_URI = 'http://localhost:12537';
var DEFAULT_CFX_NETWORK_ID = '999';
var CFX_NODE_URI = envDefault(process.env.CFX_NODE_URI, DEFAULT_CFX_NODE_URI);
var CFX_NETWORK_ID = envDefault(process.env.CFX_NETWORK_ID, DEFAULT_CFX_NETWORK_ID);
var networkId = parseInt(CFX_NETWORK_ID);
export function isIsolatedNetwork() {
    return true; // XXX
}
export function isWindowProvider() {
    return true; // XXX
}
// /**
//  * Strategies for deciding what getDefaultAccount returns.
//  */
// type SignStrategy
//   = 'secret'   // window.prompt for secret
//   | 'mnemonic' // window.prompt for mnemonic
//   | 'faucet'   // use the faucet account
//   | 'window'   // use window.conflux
//   | 'ConfluxPortal' // same as 'window'
export var getSignStrategy = (_a = replaceableThunk(function () {
    // XXX make window.conflux the default at some point
    // if (window.conflux) {
    //   // XXX this should be more lenient about letting cp load later
    //   return 'window';
    // }
    if (window.prompt) {
        return 'secret';
    }
    else {
        // XXX this should only work on the devnet
        return 'faucet';
    }
}), _a[0]), setSignStrategy = _a[1];
export function _getDefaultNetworkAccount() {
    return __awaiter(this, void 0, void 0, function () {
        var provider, promptFor, ss, w, _a, skMay, sk, mnemonic, cp, addr;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getProvider()];
                case 1:
                    provider = _b.sent();
                    promptFor = function (s) {
                        if (!window.prompt) {
                            throw Error("Can't prompt user with window.prompt");
                        }
                        return window.prompt("Please paste your account's " + s + ", or click cancel to generate a new one.");
                    };
                    ss = getSignStrategy();
                    w = null;
                    _a = ss.toLowerCase();
                    switch (_a) {
                        case 'secret': return [3 /*break*/, 2];
                        case 'mnemonic': return [3 /*break*/, 3];
                        case 'window': return [3 /*break*/, 4];
                        case 'confluxportal': return [3 /*break*/, 4];
                        case 'faucet': return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 9];
                case 2:
                    skMay = promptFor('secret key');
                    if (skMay) {
                        sk = skMay.slice(0, 2) == '0x' ? skMay : '0x' + skMay;
                        w = new cfxers.Wallet(sk);
                    }
                    else {
                        w = cfxers.Wallet.createRandom();
                    }
                    return [3 /*break*/, 10];
                case 3:
                    mnemonic = promptFor('mnemonic');
                    w = mnemonic
                        ? cfxers.Wallet.fromMnemonic(mnemonic)
                        : cfxers.Wallet.createRandom();
                    return [3 /*break*/, 10];
                case 4: return [4 /*yield*/, getConfluxPortal()];
                case 5:
                    cp = _b.sent();
                    return [4 /*yield*/, cp.enable()];
                case 6:
                    addr = (_b.sent())[0];
                    w = new cfxers.BrowserWallet(cp, addr);
                    return [3 /*break*/, 10];
                case 7: return [4 /*yield*/, _getDefaultFaucetNetworkAccount()];
                case 8:
                    w = _b.sent();
                    return [3 /*break*/, 10];
                case 9: throw Error("Sign strategy not recognized: '" + ss + "'");
                case 10:
                    if (!w)
                        throw Error("impossible: no account found for sign strategy '" + ss + "'");
                    if (!w.provider)
                        w = w.connect(provider);
                    return [2 /*return*/, w];
            }
        });
    });
}
// from /scripts/devnet-cfx/default.toml
var mining_key = '0xc72b8b13c6256b54ce428f6f67725d47194bc4ef97552867d037acd4fe6e86f3';
var defaultFaucetWallet = new cfxers.Wallet(mining_key);
export var _getDefaultFaucetNetworkAccount = memoizeThunk(function () { return __awaiter(void 0, void 0, void 0, function () {
    var provider;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!!defaultFaucetWallet.provider) return [3 /*break*/, 2];
                return [4 /*yield*/, getProvider()];
            case 1:
                provider = _a.sent();
                // Async things can cause this state to change...
                if (!defaultFaucetWallet.provider)
                    defaultFaucetWallet.connect(provider);
                _a.label = 2;
            case 2: return [2 /*return*/, defaultFaucetWallet];
        }
    });
}); });
function waitCaughtUp(provider) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var maxTries, waitMs, err, tries, faddr, fbal, failMsg, w, txn, t, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, waitPort(CFX_NODE_URI)];
                case 1:
                    _b.sent();
                    if (!isIsolatedNetwork()) return [3 /*break*/, 11];
                    // XXX this doesn't work with setFaucet; requires the default faucet to be used
                    // But we can't call getFaucet() or _getDefaultFaucetNetworkAccount() here because
                    // those (if left to defaults) call getProvider which calls this fn (waitCaughtUp).
                    // TODO: disentangle
                    if (!defaultFaucetWallet.provider)
                        defaultFaucetWallet.connect(provider);
                    maxTries = 20;
                    waitMs = 1000;
                    err = null;
                    tries = 0;
                    _b.label = 2;
                case 2:
                    if (!(tries < maxTries)) return [3 /*break*/, 10];
                    if (!err) return [3 /*break*/, 4];
                    debug("waitCaughtUp: waiting some more", { waitMs: waitMs, tries: tries, maxTries: maxTries, err: err });
                    return [4 /*yield*/, Timeout.set(waitMs)];
                case 3:
                    _b.sent(); // wait 1s between tries
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 8, , 9]);
                    faddr = defaultFaucetWallet.getAddress();
                    return [4 /*yield*/, ((_a = defaultFaucetWallet.provider) === null || _a === void 0 ? void 0 : _a.conflux.getBalance(faddr))];
                case 5:
                    fbal = _b.sent();
                    debug("Faucet bal", fbal);
                    // @ts-ignore
                    if (fbal == 0) {
                        failMsg = "Faucet balance is 0 (" + faddr + ")";
                        debug(failMsg);
                        throw Error(failMsg);
                    }
                    w = cfxers.Wallet.createRandom().connect(provider);
                    txn = { to: w.getAddress(), value: '1' };
                    debug("sending dummy txn", txn);
                    return [4 /*yield*/, defaultFaucetWallet.sendTransaction(txn)];
                case 6:
                    t = _b.sent();
                    return [4 /*yield*/, t.wait()];
                case 7:
                    _b.sent();
                    return [2 /*return*/];
                case 8:
                    e_1 = _b.sent();
                    // TODO: only loop again if we detect that it's the "not caught up yet" error
                    //   err: RPCError: Request rejected due to still in the catch up mode.
                    //   { code: -32077 }
                    err = e_1;
                    return [3 /*break*/, 9];
                case 9:
                    tries++;
                    return [3 /*break*/, 2];
                case 10:
                    if (err)
                        throw err;
                    _b.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
}
var _b = replaceableThunk(function () { return __awaiter(void 0, void 0, void 0, function () {
    var conflux, provider;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                conflux = new Conflux({
                    url: CFX_NODE_URI,
                    // logger: console,
                    networkId: networkId
                });
                provider = new cfxers.providers.Provider(conflux);
                // XXX is there a better place to wait for this
                // such that toying with things at the repl doesn't hang if no connection is available?
                return [4 /*yield*/, waitCaughtUp(provider)];
            case 1:
                // XXX is there a better place to wait for this
                // such that toying with things at the repl doesn't hang if no connection is available?
                _a.sent();
                return [2 /*return*/, provider];
        }
    });
}); }), getProvider = _b[0], setProvider = _b[1];
function setProviderByEnv(env) {
    void (env);
    return notYetSupported("setProviderByEnv");
}
function setProviderByName(providerName) {
    void (providerName);
    return notYetSupported("setProviderByName");
}
function providerEnvByName(providerName) {
    void (providerName);
    return notYetSupported("providerEnvByName");
}
function getConfluxPortal() {
    return __awaiter(this, void 0, void 0, function () {
        var maxTries, tries;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    maxTries = 10;
                    tries = 1;
                    _a.label = 1;
                case 1:
                    if (!(tries <= maxTries)) return [3 /*break*/, 4];
                    if (window.conflux)
                        return [2 /*return*/, window.conflux];
                    return [4 /*yield*/, Timeout.set(100)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    tries++;
                    return [3 /*break*/, 1];
                case 4: throw Error("Couldn't find window.conflux");
            }
        });
    });
}
export { ethLikeCompiled };
export { cfxers as ethers };
export var providerLib = {
    getProvider: getProvider,
    setProvider: setProvider,
    setProviderByName: setProviderByName,
    setProviderByEnv: setProviderByEnv,
    providerEnvByName: providerEnvByName,
    getSignStrategy: getSignStrategy,
    setSignStrategy: setSignStrategy
};
export var _warnTxNoBlockNumber = false; // XXX ?
export var standardUnit = 'CFX';
export var atomicUnit = 'Drip';
//# sourceMappingURL=CFX_impl.js.map