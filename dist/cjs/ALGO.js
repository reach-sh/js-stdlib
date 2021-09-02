"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
exports.__esModule = true;
exports.fundFromFaucet = exports.canFundFromFaucet = exports.createAccount = exports.balanceOf = exports.connectAccount = exports.transfer = exports.setFaucet = exports.getFaucet = exports.setProviderByName = exports.providerEnvByName = exports.setProviderByEnv = exports.setProvider = exports.getProvider = exports.walletFallback = exports.setWalletFallback = exports.hasRandom = exports.randomUInt = exports.T_Token = exports.T_Struct = exports.T_Digest = exports.T_Address = exports.T_Bytes = exports.T_Data = exports.T_Object = exports.T_Array = exports.T_Tuple = exports.T_UInt = exports.T_Bool = exports.T_Null = exports.digest = exports.tokenEq = exports.addressEq = exports.setQueryLowerBound = exports.getQueryLowerBound = exports.digestEq = exports.bytesEq = exports.lt = exports.le = exports.gt = exports.ge = exports.eq = exports.Array_set = exports.assert = exports.protect = exports.div = exports.mul = exports.mod = exports.sub = exports.add = exports.connector = void 0;
exports.reachStdlib = exports.launchToken = exports.formatAddress = exports.verifyContract = exports.wait = exports.waitUntilSecs = exports.waitUntilTime = exports.getNetworkSecs = exports.getNetworkTime = exports.newAccountFromSecret = exports.newAccountFromMnemonic = exports.getDefaultAccount = exports.formatCurrency = exports.minimumBalance = exports.parseCurrency = exports.atomicUnit = exports.standardUnit = exports.newTestAccounts = exports.newTestAccount = void 0;
exports.connector = 'ALGO';
var algosdk_1 = __importDefault(require("algosdk"));
var ethers_1 = require("ethers");
var await_timeout_1 = __importDefault(require("await-timeout"));
var buffer_1 = __importDefault(require("buffer"));
var Buffer = buffer_1["default"].Buffer;
var version_1 = require("./version");
var shared_impl_1 = require("./shared_impl");
var shared_user_1 = require("./shared_user");
var waitPort_1 = __importDefault(require("./waitPort"));
var ALGO_compiled_1 = require("./ALGO_compiled");
var shim_1 = require("./shim");
exports.add = ALGO_compiled_1.stdlib.add, exports.sub = ALGO_compiled_1.stdlib.sub, exports.mod = ALGO_compiled_1.stdlib.mod, exports.mul = ALGO_compiled_1.stdlib.mul, exports.div = ALGO_compiled_1.stdlib.div, exports.protect = ALGO_compiled_1.stdlib.protect, exports.assert = ALGO_compiled_1.stdlib.assert, exports.Array_set = ALGO_compiled_1.stdlib.Array_set, exports.eq = ALGO_compiled_1.stdlib.eq, exports.ge = ALGO_compiled_1.stdlib.ge, exports.gt = ALGO_compiled_1.stdlib.gt, exports.le = ALGO_compiled_1.stdlib.le, exports.lt = ALGO_compiled_1.stdlib.lt, exports.bytesEq = ALGO_compiled_1.stdlib.bytesEq, exports.digestEq = ALGO_compiled_1.stdlib.digestEq;
__exportStar(require("./shared_user"), exports);
var reachBackendVersion = 1;
var reachAlgoBackendVersion = 2;
// Helpers
// Parse CBR into Public Key
var cbr2algo_addr = function (x) {
    return algosdk_1["default"].encodeAddress(Buffer.from(x.slice(2), 'hex'));
};
function uint8ArrayToStr(a, enc) {
    if (enc === void 0) { enc = 'utf8'; }
    if (!(a instanceof Uint8Array)) {
        console.log(a);
        throw Error("Expected Uint8Array, got " + a);
    }
    return Buffer.from(a).toString(enc);
}
// TODO: read token from scripts/devnet-algo/algorand_data/algod.token
var rawDefaultToken = 'c87f5580d7a866317b4bfe9e8b8d1dda955636ccebfa88c12b414db208dd9705';
var rawDefaultItoken = 'reach-devnet';
var waitForConfirmation = function (txId, untilRound) { return __awaiter(void 0, void 0, void 0, function () {
    var doOrDie, checkTooLate, dhead, client, checkAlgod, checkIndexer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                doOrDie = function (p) { return __awaiter(void 0, void 0, void 0, function () {
                    var e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, p];
                            case 1: return [2 /*return*/, _a.sent()];
                            case 2:
                                e_1 = _a.sent();
                                return [2 /*return*/, { 'exn': e_1 }];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                checkTooLate = function (lastLastRound) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, c, msg, lastRound;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = lastLastRound > 0 ?
                                    [client.statusAfterBlock(lastLastRound),
                                        "waiting until after " + lastLastRound] :
                                    [client.status(),
                                        "looking up current round"], c = _a[0], msg = _a[1];
                                shared_impl_1.debug.apply(void 0, __spreadArray(__spreadArray([], dhead), [msg]));
                                return [4 /*yield*/, c["do"]()];
                            case 1:
                                lastRound = (_b.sent())['last-round'];
                                if (untilRound && untilRound < lastRound) {
                                    throw Error("waitForConfirmation: Too late: " + lastRound + " > " + untilRound);
                                }
                                else {
                                    return [2 /*return*/, lastRound];
                                }
                                return [2 /*return*/];
                        }
                    });
                }); };
                dhead = ['waitForConfirmation', txId];
                return [4 /*yield*/, getAlgodClient()];
            case 1:
                client = _a.sent();
                checkAlgod = function (lastLastRound) { return __awaiter(void 0, void 0, void 0, function () {
                    var lastRound, info;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, checkTooLate(lastLastRound)];
                            case 1:
                                lastRound = _a.sent();
                                return [4 /*yield*/, doOrDie(client.pendingTransactionInformation(txId)["do"]())];
                            case 2:
                                info = _a.sent();
                                shared_impl_1.debug.apply(void 0, __spreadArray(__spreadArray([], dhead), ['info', info]));
                                if (!info['exn']) return [3 /*break*/, 4];
                                shared_impl_1.debug.apply(void 0, __spreadArray(__spreadArray([], dhead), ['switching to indexer on error']));
                                return [4 /*yield*/, checkIndexer(lastRound)];
                            case 3: return [2 /*return*/, _a.sent()];
                            case 4:
                                if (!(info['confirmed-round'] > 0)) return [3 /*break*/, 5];
                                shared_impl_1.debug.apply(void 0, __spreadArray(__spreadArray([], dhead), ['confirmed']));
                                return [2 /*return*/, info];
                            case 5:
                                if (!(info['pool-error'] === '')) return [3 /*break*/, 7];
                                shared_impl_1.debug.apply(void 0, __spreadArray(__spreadArray([], dhead), ['still in pool, trying again']));
                                return [4 /*yield*/, checkAlgod(lastRound)];
                            case 6: return [2 /*return*/, _a.sent()];
                            case 7: throw Error("waitForConfirmation: error confirming: " + JSON.stringify(info));
                        }
                    });
                }); };
                checkIndexer = function (lastLastRound) { return __awaiter(void 0, void 0, void 0, function () {
                    var lastRound, indexer, q, res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, checkTooLate(lastLastRound)];
                            case 1:
                                lastRound = _a.sent();
                                return [4 /*yield*/, getIndexer()];
                            case 2:
                                indexer = _a.sent();
                                q = indexer.lookupTransactionByID(txId);
                                return [4 /*yield*/, doOrDie(doQuery_(JSON.stringify(dhead), q))];
                            case 3:
                                res = _a.sent();
                                shared_impl_1.debug.apply(void 0, __spreadArray(__spreadArray([], dhead), ['indexer', res]));
                                if (!res['exn']) return [3 /*break*/, 5];
                                shared_impl_1.debug.apply(void 0, __spreadArray(__spreadArray([], dhead), ['indexer failed, trying again']));
                                return [4 /*yield*/, checkIndexer(lastRound)];
                            case 4: return [2 /*return*/, _a.sent()];
                            case 5: return [2 /*return*/, res['transaction']];
                        }
                    });
                }); };
                return [4 /*yield*/, checkAlgod(0)];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var decodeB64Txn = function (ts) {
    var tb = Buffer.from(ts, 'base64');
    return algosdk_1["default"].decodeUnsignedTransaction(tb);
};
var doSignTxnToB64 = function (t, sk) {
    var sb = Buffer.from(t.signTxn(sk));
    return sb.toString('base64');
};
var doSignTxn = function (ts, sk) {
    return doSignTxnToB64(decodeB64Txn(ts), sk);
};
var signSendAndConfirm = function (acc, txns) { return __awaiter(void 0, void 0, void 0, function () {
    var p, e_2, t0, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (acc.sk !== undefined) {
                    txns.forEach(function (t) {
                        // XXX this comparison is probably wrong, because the addresses are the
                        // wrong type
                        if (acc.sk !== undefined && !t.stxn && t.signers !== undefined && t.signers.length === 1 && t.signers[0] === acc.addr) {
                            shared_impl_1.debug('signSendAndConfirm', 'signing one');
                            t.stxn = doSignTxn(t.txn, acc.sk);
                        }
                    });
                }
                return [4 /*yield*/, exports.getProvider()];
            case 1:
                p = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, p.signAndPostTxns(txns)];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                e_2 = _a.sent();
                throw { type: 'signAndPost', e: e_2 };
            case 5:
                t0 = decodeB64Txn(txns[0].txn);
                _a.label = 6;
            case 6:
                _a.trys.push([6, 8, , 9]);
                return [4 /*yield*/, waitForConfirmation(t0.txID(), t0.lastRound)];
            case 7: return [2 /*return*/, _a.sent()];
            case 8:
                e_3 = _a.sent();
                throw { type: 'waitForConfirmation', e: e_3 };
            case 9: return [2 /*return*/];
        }
    });
}); };
var encodeUnsignedTransaction = function (t) {
    return Buffer.from(algosdk_1["default"].encodeUnsignedTransaction(t)).toString('base64');
};
var toWTxn = function (t) {
    return {
        txn: encodeUnsignedTransaction(t),
        signers: [algosdk_1["default"].encodeAddress(t.from.publicKey)]
    };
};
// Backend
var compileTEAL = function (label, code) { return __awaiter(void 0, void 0, void 0, function () {
    var s, r, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                shared_impl_1.debug('compile', label);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, getAlgodClient()];
            case 2: return [4 /*yield*/, (_a.sent()).compile(code)["do"]()];
            case 3:
                r = _a.sent();
                s = 200;
                return [3 /*break*/, 5];
            case 4:
                e_4 = _a.sent();
                s = typeof e_4 === 'object' ? e_4.statusCode : 'not object';
                r = e_4;
                return [3 /*break*/, 5];
            case 5:
                if (s == 200) {
                    shared_impl_1.debug('compile', label, 'succeeded:', r);
                    r.src = code;
                    r.result = base64ToUI8A(r.result);
                    // debug('compile transformed:', r);
                    return [2 /*return*/, r];
                }
                else {
                    throw Error("compile " + label + " failed: " + s + ": " + JSON.stringify(r));
                }
                return [2 /*return*/];
        }
    });
}); };
var getTxnParams = function () { return __awaiter(void 0, void 0, void 0, function () {
    var client, params;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                shared_impl_1.debug("fillTxn: getting params");
                return [4 /*yield*/, getAlgodClient()];
            case 1:
                client = _a.sent();
                _a.label = 2;
            case 2:
                if (!true) return [3 /*break*/, 5];
                return [4 /*yield*/, client.getTransactionParams()["do"]()];
            case 3:
                params = _a.sent();
                shared_impl_1.debug('fillTxn: got params:', params);
                if (params.firstRound !== 0) {
                    return [2 /*return*/, params];
                }
                shared_impl_1.debug("...but firstRound is 0, so let's wait and try again.");
                return [4 /*yield*/, client.statusAfterBlock(1)["do"]()];
            case 4:
                _a.sent();
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}); };
var sign_and_send_sync = function (label, acc, txn) { return __awaiter(void 0, void 0, void 0, function () {
    var e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, signSendAndConfirm(acc, [txn])];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                e_5 = _a.sent();
                console.log(e_5);
                throw Error(label + " txn failed:\n" + JSON.stringify(txn) + "\nwith:\n" + JSON.stringify(e_5));
            case 3: return [2 /*return*/];
        }
    });
}); };
// XXX I'd use x.replaceAll if I could (not supported in this node version), but it would be better to extend ConnectorInfo so these are functions
var replaceAll = function (orig, what, whatp) {
    var once = orig.replace(what, whatp);
    if (once === orig) {
        return orig;
    }
    else {
        return replaceAll(once, what, whatp);
    }
};
function must_be_supported(bin) {
    var algob = bin._Connectors.ALGO;
    var unsupported = algob.unsupported;
    if (unsupported.length > 0) {
        var reasons = unsupported.map(function (s) { return " * " + s; }).join('\n');
        throw Error("This Reach application is not supported on Algorand for the following reasons:\n" + reasons);
    }
}
// Get these from stdlib
// const MaxTxnLife = 1000;
var LogicSigMaxSize = 1000;
var MaxAppProgramLen = 2048;
var MaxAppTxnAccounts = 4;
var MaxExtraAppProgramPages = 3;
function compileFor(bin, info) {
    return __awaiter(this, void 0, void 0, function () {
        var ApplicationID, algob, appApproval, appClear, escrow, subst_appid, checkLen, appApproval_bin, appClear_bin, escrow_bin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    shared_impl_1.debug("compileFor", info, typeof (info), Number.isInteger(info));
                    if (!Number.isInteger(info)) {
                        throw Error("This Reach standard library cannot communicate with this contract, because it was deployed with an earlier version of Reach.");
                    }
                    ApplicationID = info;
                    must_be_supported(bin);
                    algob = bin._Connectors.ALGO;
                    appApproval = algob.appApproval, appClear = algob.appClear, escrow = algob.escrow;
                    subst_appid = function (x) {
                        return replaceAll(x, '{{ApplicationID}}', "" + ApplicationID);
                    };
                    checkLen = function (label, actual, expected) {
                        shared_impl_1.debug("checkLen", { label: label, actual: actual, expected: expected });
                        if (actual > expected) {
                            throw Error("This Reach application is not supported by Algorand: " + label + " length is " + actual + ", but should be less than " + expected + ".");
                        }
                    };
                    return [4 /*yield*/, compileTEAL('appApproval_subst', appApproval)];
                case 1:
                    appApproval_bin = _a.sent();
                    return [4 /*yield*/, compileTEAL('appClear', appClear)];
                case 2:
                    appClear_bin = _a.sent();
                    checkLen("App Program Length", (appClear_bin.result.length + appApproval_bin.result.length), (1 + MaxExtraAppProgramPages) * MaxAppProgramLen);
                    return [4 /*yield*/, compileTEAL('escrow_subst', subst_appid(escrow))];
                case 3:
                    escrow_bin = _a.sent();
                    checkLen("Escrow Contract", escrow_bin.result.length, LogicSigMaxSize);
                    return [2 /*return*/, {
                            ApplicationID: ApplicationID,
                            appApproval: appApproval_bin,
                            appClear: appClear_bin,
                            escrow: escrow_bin
                        }];
            }
        });
    });
}
var ui8h = function (x) { return Buffer.from(x).toString('hex'); };
var base64ToUI8A = function (x) { return Uint8Array.from(Buffer.from(x, 'base64')); };
var base64ify = function (x) { return Buffer.from(x).toString('base64'); };
var format_failed_request = function (e) {
    var ep = JSON.parse(JSON.stringify(e));
    var db64 = ep.req ?
        (ep.req.data ? base64ify(ep.req.data) :
            "no data, but " + JSON.stringify(Object.keys(ep.req))) :
        "no req, but " + JSON.stringify(Object.keys(ep));
    var msg = e.text ? JSON.parse(e.text) : e;
    return "\n" + db64 + "\n" + JSON.stringify(msg);
};
function looksLikeAccountingNotInitialized(e) {
    var _a;
    var responseText = ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.text) || null;
    // TODO: trust the response to be json and parse it?
    // const json = JSON.parse(responseText) || {};
    // const msg: string = (json.message || '').toLowerCase();
    var msg = (responseText || '').toLowerCase();
    return msg.includes("accounting not initialized");
}
var doQuery_ = function (dhead, query, alwaysRetry) {
    if (alwaysRetry === void 0) { alwaysRetry = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var retries, res, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    shared_impl_1.debug(dhead, '--- QUERY =', query);
                    retries = 10;
                    _a.label = 1;
                case 1:
                    if (!(retries > 0)) return [3 /*break*/, 7];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 6]);
                    return [4 /*yield*/, query["do"]()];
                case 3:
                    res = _a.sent();
                    return [3 /*break*/, 7];
                case 4:
                    e_6 = _a.sent();
                    if ((e_6 === null || e_6 === void 0 ? void 0 : e_6.errno) === -111 || (e_6 === null || e_6 === void 0 ? void 0 : e_6.code) === "ECONNRESET") {
                        shared_impl_1.debug(dhead, 'NO CONNECTION');
                    }
                    else if (looksLikeAccountingNotInitialized(e_6)) {
                        shared_impl_1.debug(dhead, 'ACCOUNTING NOT INITIALIZED');
                    }
                    else if (!alwaysRetry || retries <= 0) {
                        throw Error(dhead + " --- QUERY FAIL: " + JSON.stringify(e_6)); // `
                    }
                    shared_impl_1.debug(dhead, 'RETRYING', retries--, { e: e_6 });
                    return [4 /*yield*/, await_timeout_1["default"].set(500)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 1];
                case 7:
                    if (!res) {
                        throw Error("impossible: query res is empty");
                    }
                    shared_impl_1.debug(dhead, '--- RESULT =', res);
                    return [2 /*return*/, res];
            }
        });
    });
};
// ****************************************************************************
// Event Cache
// ****************************************************************************
var chooseMinRoundTxn = function (ptxns) {
    return shared_impl_1.argMin(ptxns, function (x) { return x['confirmed-round']; });
};
var chooseMaxRoundTxn = function (ptxns) {
    return shared_impl_1.argMax(ptxns, function (x) { return x['confirmed-round']; });
};
var _d = shared_impl_1.replaceableThunk(function () { return 0; }), _getQueryLowerBound = _d[0], _setQueryLowerBound = _d[1];
function getQueryLowerBound() {
    return shared_user_1.bigNumberify(_getQueryLowerBound());
}
exports.getQueryLowerBound = getQueryLowerBound;
function setQueryLowerBound(networkTime) {
    networkTime = typeof networkTime === 'number' ? networkTime
        : networkTime._isBigNumber ? networkTime.toNumber()
            : networkTime;
    if (!(typeof networkTime === 'number')) {
        throw Error("Expected number or BigNumber, but got " + networkTime + " : " + typeof networkTime);
    }
    _setQueryLowerBound(networkTime);
}
exports.setQueryLowerBound = setQueryLowerBound;
var EventCache = /** @class */ (function () {
    function EventCache() {
        this.cache = [];
        this.currentRound = _getQueryLowerBound();
        this.cache = [];
    }
    EventCache.prototype.query = function (dhead, ApplicationID, roundInfo, pred) {
        return __awaiter(this, void 0, void 0, function () {
            var minRound, timeoutAt, specRound, h, maxRound, maxSecs, filterRound, filterFn, initPtxns, txn_1, indexer, query, res, ptxns, txn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        minRound = roundInfo.minRound, timeoutAt = roundInfo.timeoutAt, specRound = roundInfo.specRound;
                        h = function (mode) { return timeoutAt && timeoutAt[0] === mode ? shared_user_1.bigNumberToNumber(timeoutAt[1]) : undefined; };
                        maxRound = h('time');
                        maxSecs = h('secs');
                        shared_impl_1.debug(dhead, "EventCache.query", { ApplicationID: ApplicationID, minRound: minRound, specRound: specRound, timeoutAt: timeoutAt, maxRound: maxRound, maxSecs: maxSecs }, this.currentRound);
                        filterRound = minRound !== null && minRound !== void 0 ? minRound : specRound;
                        this.cache = this.cache.filter(function (x) { return x['confirmed-round'] >= filterRound; });
                        filterFn = function (x) { return pred(x)
                            && (maxRound ? x['confirmed-round'] <= maxRound : true)
                            && (maxSecs ? x['round-time'] <= maxSecs : true)
                            && (specRound ? x['confirmed-round'] == specRound : true); };
                        initPtxns = this.cache.filter(filterFn);
                        if (initPtxns.length != 0) {
                            shared_impl_1.debug("Found transaction in Event Cache");
                            txn_1 = chooseMinRoundTxn(initPtxns);
                            return [2 /*return*/, { succ: true, txn: txn_1 }];
                        }
                        shared_impl_1.debug("Transaction not in Event Cache. Querying network...");
                        return [4 /*yield*/, getIndexer()];
                    case 1:
                        indexer = _a.sent();
                        query = indexer.searchForTransactions()
                            .applicationID(ApplicationID)
                            .txType('appl');
                        if (filterRound) {
                            // If cache has: [100, 200]
                            // & querying  : [150, 1000]
                            // We already searched cache for [150, 200] so query network for [201, 1000]
                            query = query.minRound(Math.max(this.currentRound + 1, filterRound));
                        }
                        return [4 /*yield*/, doQuery_(dhead, query)];
                    case 2:
                        res = _a.sent();
                        this.cache = res.transactions;
                        // Update current round
                        this.currentRound =
                            (res.transactions.length == 0)
                                ? (maxRound ? Math.min(res['current-round'], maxRound) : res['current-round'])
                                : chooseMaxRoundTxn(res.transactions)['confirmed-round'];
                        ptxns = this.cache.filter(filterFn);
                        if (ptxns.length == 0) {
                            return [2 /*return*/, { succ: false, round: this.currentRound }];
                        }
                        txn = chooseMinRoundTxn(ptxns);
                        return [2 /*return*/, { succ: true, txn: txn }];
                }
            });
        });
    };
    return EventCache;
}());
// ****************************************************************************
// Common Interface Exports
// ****************************************************************************
exports.addressEq = ALGO_compiled_1.stdlib.addressEq, exports.tokenEq = ALGO_compiled_1.stdlib.tokenEq, exports.digest = ALGO_compiled_1.stdlib.digest;
exports.T_Null = ALGO_compiled_1.typeDefs.T_Null, exports.T_Bool = ALGO_compiled_1.typeDefs.T_Bool, exports.T_UInt = ALGO_compiled_1.typeDefs.T_UInt, exports.T_Tuple = ALGO_compiled_1.typeDefs.T_Tuple, exports.T_Array = ALGO_compiled_1.typeDefs.T_Array, exports.T_Object = ALGO_compiled_1.typeDefs.T_Object, exports.T_Data = ALGO_compiled_1.typeDefs.T_Data, exports.T_Bytes = ALGO_compiled_1.typeDefs.T_Bytes, exports.T_Address = ALGO_compiled_1.typeDefs.T_Address, exports.T_Digest = ALGO_compiled_1.typeDefs.T_Digest, exports.T_Struct = ALGO_compiled_1.typeDefs.T_Struct, exports.T_Token = ALGO_compiled_1.typeDefs.T_Token;
exports.randomUInt = (_a = shared_impl_1.makeRandom(8), _a.randomUInt), exports.hasRandom = _a.hasRandom;
function waitIndexerFromEnv(env) {
    return __awaiter(this, void 0, void 0, function () {
        var ALGO_INDEXER_SERVER, ALGO_INDEXER_PORT, ALGO_INDEXER_TOKEN;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ALGO_INDEXER_SERVER = env.ALGO_INDEXER_SERVER, ALGO_INDEXER_PORT = env.ALGO_INDEXER_PORT, ALGO_INDEXER_TOKEN = env.ALGO_INDEXER_TOKEN;
                    return [4 /*yield*/, waitPort_1["default"](ALGO_INDEXER_SERVER, ALGO_INDEXER_PORT)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, new algosdk_1["default"].Indexer(ALGO_INDEXER_TOKEN, ALGO_INDEXER_SERVER, ALGO_INDEXER_PORT)];
            }
        });
    });
}
function waitAlgodClientFromEnv(env) {
    return __awaiter(this, void 0, void 0, function () {
        var ALGO_SERVER, ALGO_PORT, ALGO_TOKEN;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ALGO_SERVER = env.ALGO_SERVER, ALGO_PORT = env.ALGO_PORT, ALGO_TOKEN = env.ALGO_TOKEN;
                    return [4 /*yield*/, waitPort_1["default"](ALGO_SERVER, ALGO_PORT)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, new algosdk_1["default"].Algodv2(ALGO_TOKEN, ALGO_SERVER, ALGO_PORT)];
            }
        });
    });
}
// This function should be provided by the indexer, but it isn't so we simulate
// something decent. This function is allowed to "fail" by not really waiting
// until the round
var indexer_statusAfterBlock = function (round) { return __awaiter(void 0, void 0, void 0, function () {
    var client, now;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getAlgodClient()];
            case 1:
                client = _a.sent();
                now = shared_user_1.bigNumberify(0);
                _a.label = 2;
            case 2: return [4 /*yield*/, exports.getNetworkTime()];
            case 3:
                if (!(now = _a.sent()).lt(round)) return [3 /*break*/, 6];
                return [4 /*yield*/, client.statusAfterBlock(round)];
            case 4:
                _a.sent();
                // XXX Get the indexer to index one and wait
                return [4 /*yield*/, await_timeout_1["default"].set(500)];
            case 5:
                // XXX Get the indexer to index one and wait
                _a.sent();
                return [3 /*break*/, 2];
            case 6: return [2 /*return*/, now];
        }
    });
}); };
;
var makeProviderByWallet = function (wallet) { return __awaiter(void 0, void 0, void 0, function () {
    var enabled, algodClient, indexer, getDefaultAddress, signAndPostTxns, isIsolatedNetwork;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                shared_impl_1.debug("making provider with wallet");
                return [4 /*yield*/, wallet.enable({ 'network': shim_1.process.env['ALGO_NETWORK'] })];
            case 1:
                enabled = _a.sent();
                return [4 /*yield*/, wallet.getAlgodv2()];
            case 2:
                algodClient = _a.sent();
                return [4 /*yield*/, wallet.getIndexer()];
            case 3:
                indexer = _a.sent();
                getDefaultAddress = function () { return enabled.accounts[0]; };
                signAndPostTxns = wallet.signAndPostTxns;
                isIsolatedNetwork = shared_impl_1.truthyEnv(shim_1.process.env['REACH_ISOLATED_NETWORK']);
                return [2 /*return*/, { algodClient: algodClient, indexer: indexer, getDefaultAddress: getDefaultAddress, isIsolatedNetwork: isIsolatedNetwork, signAndPostTxns: signAndPostTxns }];
        }
    });
}); };
var setWalletFallback = function (wf) {
    if (!shim_1.window.algorand) {
        shim_1.window.algorand = wf();
    }
};
exports.setWalletFallback = setWalletFallback;
var doWalletFallback_signOnly = function (opts, getAddr, signTxns) {
    var p = undefined;
    var enable = function (eopts) { return __awaiter(void 0, void 0, void 0, function () {
        var base, baseEnv, addr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    void (eopts);
                    base = opts['providerEnv'];
                    baseEnv = shim_1.process.env;
                    if (!base) return [3 /*break*/, 3];
                    if (!(typeof base === 'string')) return [3 /*break*/, 2];
                    return [4 /*yield*/, providerEnvByName(base)];
                case 1:
                    // @ts-ignore
                    baseEnv = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    baseEnv = base;
                    _a.label = 3;
                case 3: return [4 /*yield*/, makeProviderByEnv(baseEnv)];
                case 4:
                    p = _a.sent();
                    return [4 /*yield*/, getAddr()];
                case 5:
                    addr = _a.sent();
                    return [2 /*return*/, { accounts: [addr] }];
            }
        });
    }); };
    var getAlgodv2 = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!p) {
                throw new Error("must call enable");
            }
            ;
            return [2 /*return*/, p.algodClient];
        });
    }); };
    var getIndexer = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!p) {
                throw new Error("must call enable");
            }
            ;
            return [2 /*return*/, p.indexer];
        });
    }); };
    var signAndPostTxns = function (txns, sopts) { return __awaiter(void 0, void 0, void 0, function () {
        var to_sign, signed, stxns, bs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!p) {
                        throw new Error("must call enable");
                    }
                    ;
                    void (sopts);
                    shared_impl_1.debug("fallBack: signAndPostTxns", { txns: txns });
                    to_sign = [];
                    txns.forEach(function (txn) {
                        if (!txn.stxn) {
                            to_sign.push(txn.txn);
                        }
                    });
                    shared_impl_1.debug("fallBack: signAndPostTxns", { to_sign: to_sign });
                    return [4 /*yield*/, signTxns(to_sign)];
                case 1:
                    signed = _a.sent();
                    shared_impl_1.debug("fallBack: signAndPostTxns", { signed: signed });
                    stxns = txns.map(function (txn) {
                        if (txn.stxn) {
                            return txn.stxn;
                        }
                        var s = signed.shift();
                        if (!s) {
                            throw new Error("txn not signed");
                        }
                        return s;
                    });
                    bs = stxns.map(function (stxn) { return Buffer.from(stxn, 'base64'); });
                    shared_impl_1.debug("fallBack: signAndPostTxns", bs);
                    return [4 /*yield*/, p.algodClient.sendRawTransaction(bs)["do"]()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, {}];
            }
        });
    }); };
    return { enable: enable, getAlgodv2: getAlgodv2, getIndexer: getIndexer, signAndPostTxns: signAndPostTxns };
};
var walletFallback_mnemonic = function (opts) { return function () {
    shared_impl_1.debug("using mnemonic wallet fallback");
    var getAddr = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, shim_1.window.prompt("Please paste the address of your account:")];
        });
    }); };
    var signTxns = function (txns) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, txns.map(function (ts) {
                    var t = decodeB64Txn(ts);
                    var addr = algosdk_1["default"].encodeAddress(t.from.publicKey);
                    var mn = shim_1.window.prompt("Please paste the mnemonic for the address, " + addr + ". It will not be saved.");
                    var acc = algosdk_1["default"].mnemonicToSecretKey(mn);
                    return doSignTxnToB64(t, acc.sk);
                })];
        });
    }); };
    return doWalletFallback_signOnly(opts, getAddr, signTxns);
}; };
var walletFallback_MyAlgoWallet = function (MyAlgoConnect, opts) { return function () {
    shared_impl_1.debug("using MyAlgoWallet wallet fallback");
    // @ts-ignore
    var mac = new MyAlgoConnect();
    var getAddr = function () { return __awaiter(void 0, void 0, void 0, function () {
        var accts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mac.connect({ shouldSelectOneAccount: true })];
                case 1:
                    accts = _a.sent();
                    return [2 /*return*/, accts[0].address];
            }
        });
    }); };
    var signTxns = function (txns) { return __awaiter(void 0, void 0, void 0, function () {
        var stxns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    shared_impl_1.debug("MAW signTransaction ->", txns);
                    return [4 /*yield*/, mac.signTransaction(txns)];
                case 1:
                    stxns = _a.sent();
                    shared_impl_1.debug("MAW signTransaction <-", stxns);
                    return [2 /*return*/, stxns.map(function (sts) { return Buffer.from(sts.blob).toString('base64'); })];
            }
        });
    }); };
    return doWalletFallback_signOnly(opts, getAddr, signTxns);
}; };
var walletFallback = function (opts) {
    shared_impl_1.debug("using wallet fallback with", opts);
    var mac = opts.MyAlgoConnect;
    if (mac) {
        return walletFallback_MyAlgoWallet(mac, opts);
    }
    // This could be implemented with walletFallback_signOnly and the residue
    // from the old version.
    //  return walletFallback_AlgoSigner(opts);
    return walletFallback_mnemonic(opts);
};
exports.walletFallback = walletFallback;
exports.getProvider = (_b = shared_impl_1.replaceableThunk(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!shim_1.window.algorand) return [3 /*break*/, 2];
                return [4 /*yield*/, makeProviderByWallet(shim_1.window.algorand)];
            case 1: 
            // @ts-ignore
            return [2 /*return*/, _a.sent()];
            case 2:
                shared_impl_1.debug("making default provider based on process.env");
                return [4 /*yield*/, makeProviderByEnv(shim_1.process.env)];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); }), _b[0]), exports.setProvider = _b[1];
var getAlgodClient = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, exports.getProvider()];
        case 1: return [2 /*return*/, (_a.sent()).algodClient];
    }
}); }); };
var getIndexer = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, exports.getProvider()];
        case 1: return [2 /*return*/, (_a.sent()).indexer];
    }
}); }); };
var localhostProviderEnv = {
    ALGO_SERVER: 'http://localhost',
    ALGO_PORT: '4180',
    ALGO_TOKEN: rawDefaultToken,
    ALGO_INDEXER_SERVER: 'http://localhost',
    ALGO_INDEXER_PORT: '8980',
    ALGO_INDEXER_TOKEN: rawDefaultItoken,
    REACH_ISOLATED_NETWORK: 'yes'
};
function envDefaultsALGO(env) {
    var denv = localhostProviderEnv;
    // @ts-ignore
    var ret = {};
    for (var _i = 0, _a = ['ALGO_SERVER', 'ALGO_PORT', 'ALGO_TOKEN', 'ALGO_INDEXER_SERVER', 'ALGO_INDEXER_PORT', 'ALGO_INDEXER_TOKEN', 'REACH_ISOLATED_NETWORK']; _i < _a.length; _i++) {
        var f = _a[_i];
        // @ts-ignore
        ret[f] = shared_impl_1.envDefault(env[f], denv[f]);
    }
    return ret;
}
;
function makeProviderByEnv(env) {
    return __awaiter(this, void 0, void 0, function () {
        var fullEnv, algodClient, indexer, isIsolatedNetwork, lab, getDefaultAddress, signAndPostTxns;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    shared_impl_1.debug("makeProviderByEnv", env);
                    fullEnv = envDefaultsALGO(env);
                    shared_impl_1.debug("makeProviderByEnv defaulted", fullEnv);
                    return [4 /*yield*/, waitAlgodClientFromEnv(fullEnv)];
                case 1:
                    algodClient = _a.sent();
                    return [4 /*yield*/, waitIndexerFromEnv(fullEnv)];
                case 2:
                    indexer = _a.sent();
                    isIsolatedNetwork = shared_impl_1.truthyEnv(fullEnv.REACH_ISOLATED_NETWORK);
                    lab = "Providers created by environment";
                    getDefaultAddress = function () {
                        throw new Error(lab + " do not have default addresses");
                    };
                    signAndPostTxns = function (txns, opts) { return __awaiter(_this, void 0, void 0, function () {
                        var stxns, bs;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    void (opts);
                                    stxns = txns.map(function (txn) {
                                        if (txn.stxn) {
                                            return txn.stxn;
                                        }
                                        throw new Error(lab + " cannot interactively sign");
                                    });
                                    bs = stxns.map(function (stxn) { return Buffer.from(stxn, 'base64'); });
                                    shared_impl_1.debug("signAndPostTxns", bs);
                                    return [4 /*yield*/, algodClient.sendRawTransaction(bs)["do"]()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    return [2 /*return*/, { algodClient: algodClient, indexer: indexer, isIsolatedNetwork: isIsolatedNetwork, getDefaultAddress: getDefaultAddress, signAndPostTxns: signAndPostTxns }];
            }
        });
    });
}
;
function setProviderByEnv(env) {
    exports.setProvider(makeProviderByEnv(env));
}
exports.setProviderByEnv = setProviderByEnv;
;
function randlabsProviderEnv(net) {
    var prefix = net === 'MainNet' ? '' : net.toLowerCase() + ".";
    var RANDLABS_BASE = "https://" + prefix + "algoexplorerapi.io";
    return {
        ALGO_SERVER: RANDLABS_BASE,
        ALGO_PORT: '',
        ALGO_TOKEN: '',
        ALGO_INDEXER_SERVER: RANDLABS_BASE + "/idx2",
        ALGO_INDEXER_PORT: '',
        ALGO_INDEXER_TOKEN: '',
        REACH_ISOLATED_NETWORK: 'no'
    };
}
function providerEnvByName(providerName) {
    switch (providerName) {
        case 'MainNet': return randlabsProviderEnv('MainNet');
        case 'TestNet': return randlabsProviderEnv('TestNet');
        case 'BetaNet': return randlabsProviderEnv('BetaNet');
        case 'randlabs/MainNet': return randlabsProviderEnv('MainNet');
        case 'randlabs/TestNet': return randlabsProviderEnv('TestNet');
        case 'randlabs/BetaNet': return randlabsProviderEnv('BetaNet');
        case 'LocalHost': return localhostProviderEnv;
        default: throw Error("Unrecognized provider name: " + providerName);
    }
}
exports.providerEnvByName = providerEnvByName;
function setProviderByName(providerName) {
    return setProviderByEnv(providerEnvByName(providerName));
}
exports.setProviderByName = setProviderByName;
// eslint-disable-next-line max-len
var rawFaucetDefaultMnemonic = 'around sleep system young lonely length mad decline argue army veteran knee truth sell hover any measure audit page mammal treat conduct marble above shell';
exports.getFaucet = (_c = shared_impl_1.replaceableThunk(function () { return __awaiter(void 0, void 0, void 0, function () {
    var FAUCET;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                FAUCET = algosdk_1["default"].mnemonicToSecretKey(shared_impl_1.envDefault(shim_1.process.env.ALGO_FAUCET_PASSPHRASE, rawFaucetDefaultMnemonic));
                return [4 /*yield*/, exports.connectAccount(FAUCET)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); }), _c[0]), exports.setFaucet = _c[1];
var str2note = function (x) { return new Uint8Array(Buffer.from(x)); };
var NOTE_Reach_str = "Reach " + version_1.VERSION;
var NOTE_Reach = str2note(NOTE_Reach_str);
var NOTE_Reach_tag = function (tag) { return tag ? str2note(NOTE_Reach_str + (" " + tag + ")")) : NOTE_Reach; };
var makeTransferTxn = function (from, to, value, token, ps, closeTo, tag) {
    if (closeTo === void 0) { closeTo = undefined; }
    if (tag === void 0) { tag = undefined; }
    var valuen = shared_impl_1.bigNumberToBigInt(value);
    var note = NOTE_Reach_tag(tag);
    var txn = token ?
        algosdk_1["default"].makeAssetTransferTxnWithSuggestedParams(from, to, closeTo, undefined, valuen, note, shared_user_1.bigNumberToNumber(token), ps)
        :
            algosdk_1["default"].makePaymentTxnWithSuggestedParams(from, to, valuen, closeTo, note, ps);
    return txn;
};
var transfer = function (from, to, value, token, tag) {
    if (token === void 0) { token = undefined; }
    if (tag === void 0) { tag = undefined; }
    return __awaiter(void 0, void 0, void 0, function () {
        var sender, receiver, valuebn, ps, txn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sender = from.networkAccount;
                    receiver = to.networkAccount.addr;
                    valuebn = shared_user_1.bigNumberify(value);
                    return [4 /*yield*/, getTxnParams()];
                case 1:
                    ps = _a.sent();
                    txn = toWTxn(makeTransferTxn(sender.addr, receiver, valuebn, token, ps, undefined, tag));
                    return [4 /*yield*/, sign_and_send_sync("transfer " + JSON.stringify(from) + " " + JSON.stringify(to) + " " + valuebn, sender, txn)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.transfer = transfer;
var makeIsMethod = function (i) { return function (txn) {
    return txn['application-transaction']['application-args'][0] === base64ify([i]);
}; };
/** @description base64->hex->arrayify */
var reNetify = function (x) {
    var s = Buffer.from(x, 'base64').toString('hex');
    return ethers_1.ethers.utils.arrayify('0x' + s);
};
var connectAccount = function (networkAccount) { return __awaiter(void 0, void 0, void 0, function () {
    function setDebugLabel(newLabel) {
        label = newLabel;
        // @ts-ignore
        return this;
    }
    function tokenAccept(token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shared_impl_1.debug("tokenAccept", token);
                        // @ts-ignore
                        return [4 /*yield*/, exports.transfer(this, this, 0, token)];
                    case 1:
                        // @ts-ignore
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    var thisAcc, shad, label, pks, selfAddress, iam, attachP, deployP, implNow, attach, deploy, tokenMetadata;
    return __generator(this, function (_a) {
        thisAcc = networkAccount;
        shad = thisAcc.addr.substring(2, 6);
        label = shad;
        pks = exports.T_Address.canonicalize(thisAcc);
        shared_impl_1.debug(shad, ': connectAccount');
        selfAddress = function () {
            return pks;
        };
        iam = function (some_addr) {
            if (some_addr === pks) {
                return some_addr;
            }
            else {
                throw Error("I should be " + some_addr + ", but am " + pks);
            }
        };
        attachP = function (bin, ctcInfoP, eventCache) {
            if (eventCache === void 0) { eventCache = new EventCache(); }
            return __awaiter(void 0, void 0, void 0, function () {
                var ctcInfo, getInfo, _a, compiled, ApplicationID, allocRound, ctorRound, Deployer, realLastRound, escrowAddr, escrow_prog, _b, viewSize, viewKeys, mapDataKeys, mapDataSize, hasMaps, mapDataTy, emptyMapDataTy, emptyMapData, getLocalState, didOptIn, doOptIn, ensuredOptIn, ensureOptIn, sendrecv, recv, creationTime, creationSecs, recoverSplitBytes, viewlib, views_bin, getView1, getViews;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, ctcInfoP];
                        case 1:
                            ctcInfo = _c.sent();
                            getInfo = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, ctcInfo];
                            }); }); };
                            return [4 /*yield*/, verifyContract_(ctcInfo, bin, eventCache)];
                        case 2:
                            _a = _c.sent(), compiled = _a.compiled, ApplicationID = _a.ApplicationID, allocRound = _a.allocRound, ctorRound = _a.ctorRound, Deployer = _a.Deployer;
                            shared_impl_1.debug(shad, 'attach', { ApplicationID: ApplicationID, allocRound: allocRound, ctorRound: ctorRound });
                            realLastRound = ctorRound;
                            escrowAddr = compiled.escrow.hash;
                            escrow_prog = algosdk_1["default"].makeLogicSig(compiled.escrow.result, []);
                            _b = bin._Connectors.ALGO, viewSize = _b.viewSize, viewKeys = _b.viewKeys, mapDataKeys = _b.mapDataKeys, mapDataSize = _b.mapDataSize;
                            hasMaps = mapDataKeys > 0;
                            mapDataTy = bin._getMaps({ reachStdlib: ALGO_compiled_1.stdlib }).mapDataTy;
                            emptyMapDataTy = exports.T_Bytes(mapDataTy.netSize);
                            emptyMapData = 
                            // This is a bunch of Nones
                            mapDataTy.fromNet(emptyMapDataTy.toNet(emptyMapDataTy.canonicalize('')));
                            shared_impl_1.debug({ emptyMapData: emptyMapData });
                            getLocalState = function (a) { return __awaiter(void 0, void 0, void 0, function () {
                                var client, ai, als;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, getAlgodClient()];
                                        case 1:
                                            client = _a.sent();
                                            return [4 /*yield*/, client.accountInformation(a)["do"]()];
                                        case 2:
                                            ai = _a.sent();
                                            shared_impl_1.debug("getLocalState", ai);
                                            als = ai['apps-local-state'].find(function (x) { return (x.id === ApplicationID); });
                                            shared_impl_1.debug("getLocalState", als);
                                            return [2 /*return*/, als ? als['key-value'] : undefined];
                                    }
                                });
                            }); };
                            didOptIn = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, getLocalState(thisAcc.addr)];
                                    case 1: return [2 /*return*/, ((_a.sent()) !== undefined)];
                                }
                            }); }); };
                            doOptIn = function () { return __awaiter(void 0, void 0, void 0, function () {
                                var _a, _b, _c, _d, _e, _f, _g;
                                return __generator(this, function (_h) {
                                    switch (_h.label) {
                                        case 0:
                                            _a = sign_and_send_sync;
                                            _b = ['ApplicationOptIn',
                                                thisAcc];
                                            _c = toWTxn;
                                            _e = (_d = algosdk_1["default"]).makeApplicationOptInTxn;
                                            _f = [thisAcc.addr];
                                            return [4 /*yield*/, getTxnParams()];
                                        case 1: return [4 /*yield*/, _a.apply(void 0, _b.concat([_c.apply(void 0, [_e.apply(_d, _f.concat([_h.sent(),
                                                        ApplicationID,
                                                        undefined, undefined, undefined, undefined,
                                                        NOTE_Reach]))])]))];
                                        case 2:
                                            _h.sent();
                                            _g = exports.assert;
                                            return [4 /*yield*/, didOptIn()];
                                        case 3:
                                            _g.apply(void 0, [_h.sent(), "didOptIn after doOptIn"]);
                                            return [2 /*return*/];
                                    }
                                });
                            }); };
                            ensuredOptIn = false;
                            ensureOptIn = function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!!ensuredOptIn) return [3 /*break*/, 4];
                                            return [4 /*yield*/, didOptIn()];
                                        case 1:
                                            if (!!(_a.sent())) return [3 /*break*/, 3];
                                            return [4 /*yield*/, doOptIn()];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            ensuredOptIn = true;
                                            _a.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); };
                            sendrecv = function (srargs) { return __awaiter(void 0, void 0, void 0, function () {
                                var funcNum, evt_cnt, tys, args, pay, out_tys, onlyIf, soloSend, timeoutAt, sim_p, doRecv, value, toks, funcName, dhead, _a, svs, msg, _b, svs_tys, msg_tys, fake_res, sim_r, isHalt, mapRefs, mapAccts, mapAcctsReal, _loop_1, state_1;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            funcNum = srargs.funcNum, evt_cnt = srargs.evt_cnt, tys = srargs.tys, args = srargs.args, pay = srargs.pay, out_tys = srargs.out_tys, onlyIf = srargs.onlyIf, soloSend = srargs.soloSend, timeoutAt = srargs.timeoutAt, sim_p = srargs.sim_p;
                                            doRecv = function (waitIfNotPresent) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, recv({ funcNum: funcNum, evt_cnt: evt_cnt, out_tys: out_tys, waitIfNotPresent: waitIfNotPresent, timeoutAt: timeoutAt })];
                                                    case 1: return [2 /*return*/, _a.sent()];
                                                }
                                            }); }); };
                                            if (!!onlyIf) return [3 /*break*/, 2];
                                            return [4 /*yield*/, doRecv(true)];
                                        case 1: return [2 /*return*/, _c.sent()];
                                        case 2:
                                            value = pay[0], toks = pay[1];
                                            void (toks); // <-- rely on simulation because of ordering
                                            funcName = "m" + funcNum;
                                            dhead = shad + ": " + label + " sendrecv " + funcName + " " + timeoutAt;
                                            shared_impl_1.debug(dhead, '--- START');
                                            _a = shared_impl_1.argsSplit(args, evt_cnt), svs = _a[0], msg = _a[1];
                                            _b = shared_impl_1.argsSplit(tys, evt_cnt), svs_tys = _b[0], msg_tys = _b[1];
                                            fake_res = {
                                                didTimeout: false,
                                                data: msg,
                                                time: shared_user_1.bigNumberify(0),
                                                secs: shared_user_1.bigNumberify(0),
                                                value: value,
                                                from: pks,
                                                getOutput: (function (o_mode, o_lab, o_ctc) { return __awaiter(void 0, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        void (o_mode);
                                                        void (o_lab);
                                                        void (o_ctc);
                                                        throw Error("Algorand does not support remote calls, and Reach should not have generated a call to this function");
                                                    });
                                                }); })
                                            };
                                            return [4 /*yield*/, sim_p(fake_res)];
                                        case 3:
                                            sim_r = _c.sent();
                                            shared_impl_1.debug(dhead, '--- SIMULATE', sim_r);
                                            isHalt = sim_r.isHalt;
                                            mapRefs = sim_r.mapRefs;
                                            mapAccts = [];
                                            mapRefs.forEach(function (caddr) {
                                                var addr = cbr2algo_addr(caddr);
                                                if (exports.addressEq(thisAcc.addr, addr)) {
                                                    return;
                                                }
                                                var addrIdx = mapAccts.findIndex(function (other) { return exports.addressEq(other, addr); });
                                                var present = addrIdx !== -1;
                                                if (present) {
                                                    return;
                                                }
                                                mapAccts.push(addr);
                                            });
                                            if (mapAccts.length > MaxAppTxnAccounts) {
                                                throw Error("Application references too many local state cells in one step. Reach should catch this problem statically.");
                                            }
                                            shared_impl_1.debug(dhead, 'MAP', { mapAccts: mapAccts });
                                            if (!hasMaps) return [3 /*break*/, 5];
                                            return [4 /*yield*/, ensureOptIn()];
                                        case 4:
                                            _c.sent();
                                            _c.label = 5;
                                        case 5:
                                            mapAcctsReal = (mapAccts.length === 0) ? undefined : mapAccts;
                                            _loop_1 = function () {
                                                var params, extraFees, txnExtraTxns, sim_i, processSimTxn, actual_args, actual_tys, safe_args, whichAppl, txnAppl, rtxns, wtxns, res, e_7, _d, _e;
                                                return __generator(this, function (_f) {
                                                    switch (_f.label) {
                                                        case 0: return [4 /*yield*/, getTxnParams()];
                                                        case 1:
                                                            params = _f.sent();
                                                            // We add one, because the firstRound field is actually the current
                                                            // round, which we couldn't possibly be in, because it already
                                                            // happened.
                                                            shared_impl_1.debug(dhead, '--- TIMECHECK', { params: params, timeoutAt: timeoutAt });
                                                            return [4 /*yield*/, shared_impl_1.checkTimeout(getTimeSecs, timeoutAt, params.firstRound + 1)];
                                                        case 2:
                                                            if (_f.sent()) {
                                                                shared_impl_1.debug(dhead, '--- FAIL/TIMEOUT');
                                                                return [2 /*return*/, { value: { didTimeout: true } }];
                                                            }
                                                            shared_impl_1.debug(dhead, '--- ASSEMBLE w/', params);
                                                            extraFees = 0;
                                                            txnExtraTxns = [];
                                                            sim_i = 0;
                                                            processSimTxn = function (t) {
                                                                var escrow = true;
                                                                var txn;
                                                                if (t.kind === 'tokenNew') {
                                                                    processSimTxn({
                                                                        kind: 'to',
                                                                        amt: exports.minimumBalance,
                                                                        tok: undefined
                                                                    });
                                                                    var zaddr = undefined;
                                                                    var ap = shared_impl_1.bigNumberToBigInt(t.p);
                                                                    shared_impl_1.debug("tokenNew", t.p, ap);
                                                                    txn = algosdk_1["default"].makeAssetCreateTxnWithSuggestedParams(escrowAddr, NOTE_Reach_tag(sim_i++), ap, 6, false, escrowAddr, zaddr, zaddr, zaddr, t.s, t.n, t.u, t.m, params);
                                                                }
                                                                else if (t.kind === 'tokenBurn') {
                                                                    // There's no burning on Algorand
                                                                    return;
                                                                }
                                                                else if (t.kind === 'tokenDestroy') {
                                                                    txn = algosdk_1["default"].makeAssetDestroyTxnWithSuggestedParams(escrowAddr, NOTE_Reach_tag(sim_i++), shared_user_1.bigNumberToNumber(t.tok), params);
                                                                    // XXX We could get the minimum balance back after
                                                                }
                                                                else {
                                                                    var tok = t.tok;
                                                                    var always = false;
                                                                    var amt = shared_user_1.bigNumberify(0);
                                                                    var from = escrowAddr;
                                                                    var to = escrowAddr;
                                                                    var closeTo = undefined;
                                                                    if (t.kind === 'from') {
                                                                        from = escrowAddr;
                                                                        // @ts-ignore
                                                                        to = cbr2algo_addr(t.to);
                                                                        amt = t.amt;
                                                                    }
                                                                    else if (t.kind === 'init') {
                                                                        processSimTxn({
                                                                            kind: 'to',
                                                                            amt: exports.minimumBalance,
                                                                            tok: undefined
                                                                        });
                                                                        from = escrowAddr;
                                                                        to = escrowAddr;
                                                                        always = true;
                                                                        amt = t.amt;
                                                                    }
                                                                    else if (t.kind === 'halt') {
                                                                        from = escrowAddr;
                                                                        to = Deployer;
                                                                        closeTo = Deployer;
                                                                        always = true;
                                                                    }
                                                                    else if (t.kind === 'to') {
                                                                        from = thisAcc.addr;
                                                                        to = escrowAddr;
                                                                        amt = t.amt;
                                                                        escrow = false;
                                                                    }
                                                                    else {
                                                                        exports.assert(false, 'sim txn kind');
                                                                    }
                                                                    if (!always && amt.eq(0)) {
                                                                        return;
                                                                    }
                                                                    txn = makeTransferTxn(from, to, amt, tok, params, closeTo, sim_i++);
                                                                }
                                                                extraFees += txn.fee;
                                                                txn.fee = 0;
                                                                txnExtraTxns.push({ txn: txn, escrow: escrow });
                                                            };
                                                            sim_r.txns.forEach(processSimTxn);
                                                            shared_impl_1.debug(dhead, 'txnExtraTxns', txnExtraTxns);
                                                            shared_impl_1.debug(dhead, '--- extraFee =', extraFees);
                                                            actual_args = [svs, msg];
                                                            actual_tys = [exports.T_Tuple(svs_tys), exports.T_Tuple(msg_tys)];
                                                            shared_impl_1.debug(dhead, '--- ARGS =', actual_args);
                                                            safe_args = actual_args.map(
                                                            // @ts-ignore
                                                            function (m, i) { return actual_tys[i].toNet(m); });
                                                            safe_args.unshift(new Uint8Array([funcNum]));
                                                            safe_args.forEach(function (x) {
                                                                if (!(x instanceof Uint8Array)) {
                                                                    // The types say this is impossible now,
                                                                    // but we'll leave it in for a while just in case...
                                                                    throw Error("expect safe program argument, got " + JSON.stringify(x));
                                                                }
                                                            });
                                                            shared_impl_1.debug(dhead, '--- PREPARE:', safe_args.map(ui8h));
                                                            whichAppl = isHalt ?
                                                                // We are treating it like any party can delete the application, but the docs say it may only be possible for the creator. The code appears to not care: https://github.com/algorand/go-algorand/blob/0e9cc6b0c2ddc43c3cfa751d61c1321d8707c0da/ledger/apply/application.go#L589
                                                                algosdk_1["default"].makeApplicationDeleteTxn :
                                                                algosdk_1["default"].makeApplicationNoOpTxn;
                                                            txnAppl = whichAppl(thisAcc.addr, params, ApplicationID, safe_args, mapAcctsReal, undefined, undefined, NOTE_Reach);
                                                            txnAppl.fee += extraFees;
                                                            rtxns = __spreadArray(__spreadArray([], txnExtraTxns), [{ txn: txnAppl, escrow: false }]);
                                                            shared_impl_1.debug(dhead, "assigning", { rtxns: rtxns });
                                                            algosdk_1["default"].assignGroupID(rtxns.map(function (x) { return x.txn; }));
                                                            wtxns = rtxns.map(function (pwt) {
                                                                var txn = pwt.txn, escrow = pwt.escrow;
                                                                if (escrow) {
                                                                    var stxn = algosdk_1["default"].signLogicSigTransactionObject(txn, escrow_prog);
                                                                    return {
                                                                        txn: encodeUnsignedTransaction(txn),
                                                                        signers: [],
                                                                        stxn: Buffer.from(stxn.blob).toString('base64')
                                                                    };
                                                                }
                                                                else {
                                                                    return toWTxn(txn);
                                                                }
                                                            });
                                                            shared_impl_1.debug(dhead, 'signing', { wtxns: wtxns });
                                                            res = void 0;
                                                            _f.label = 3;
                                                        case 3:
                                                            _f.trys.push([3, 5, , 8]);
                                                            return [4 /*yield*/, signSendAndConfirm(thisAcc, wtxns)];
                                                        case 4:
                                                            res = _f.sent();
                                                            // XXX we should inspect res and if we failed because we didn't get picked out of the queue, then we shouldn't error, but should retry and let the timeout logic happen.
                                                            shared_impl_1.debug(dhead, '--- SUCCESS:', res);
                                                            return [3 /*break*/, 8];
                                                        case 5:
                                                            e_7 = _f.sent();
                                                            if (e_7.type == 'sendRawTransaction') {
                                                                shared_impl_1.debug(dhead, '--- FAIL:', format_failed_request(e_7.e));
                                                            }
                                                            else {
                                                                shared_impl_1.debug(dhead, '--- FAIL:', e_7);
                                                            }
                                                            if (!!soloSend) return [3 /*break*/, 7];
                                                            _d = {};
                                                            return [4 /*yield*/, doRecv(false)];
                                                        case 6: return [2 /*return*/, (_d.value = _f.sent(), _d)];
                                                        case 7:
                                                            if (timeoutAt) {
                                                                return [2 /*return*/, "continue"];
                                                            }
                                                            else {
                                                                // Otherwise, something bad is happening
                                                                throw Error(dhead + " --- ABORT");
                                                            }
                                                            return [3 /*break*/, 8];
                                                        case 8:
                                                            _e = {};
                                                            return [4 /*yield*/, doRecv(false)];
                                                        case 9: return [2 /*return*/, (_e.value = _f.sent(), _e)];
                                                    }
                                                });
                                            };
                                            _c.label = 6;
                                        case 6:
                                            if (!true) return [3 /*break*/, 8];
                                            return [5 /*yield**/, _loop_1()];
                                        case 7:
                                            state_1 = _c.sent();
                                            if (typeof state_1 === "object")
                                                return [2 /*return*/, state_1.value];
                                            return [3 /*break*/, 6];
                                        case 8: return [2 /*return*/];
                                    }
                                });
                            }); };
                            recv = function (rargs) { return __awaiter(void 0, void 0, void 0, function () {
                                var funcNum, evt_cnt, out_tys, waitIfNotPresent, timeoutAt, indexer, funcName, dhead, _loop_2, state_2;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            funcNum = rargs.funcNum, evt_cnt = rargs.evt_cnt, out_tys = rargs.out_tys, waitIfNotPresent = rargs.waitIfNotPresent, timeoutAt = rargs.timeoutAt;
                                            return [4 /*yield*/, getIndexer()];
                                        case 1:
                                            indexer = _a.sent();
                                            funcName = "m" + funcNum;
                                            dhead = shad + ": " + label + " recv " + funcName + " " + timeoutAt;
                                            shared_impl_1.debug(dhead, '--- START');
                                            _loop_2 = function () {
                                                var correctStep, res, currentRound, txn, theRound, theSecs, all_txns, get_all_txns, ctc_args_all, argMsg, ctc_args_s, msgTy, ctc_args, args_un, fromAddr, from, oldLastRound, tokenNews, getOutput;
                                                return __generator(this, function (_b) {
                                                    switch (_b.label) {
                                                        case 0:
                                                            correctStep = makeIsMethod(funcNum);
                                                            return [4 /*yield*/, eventCache.query(dhead, ApplicationID, { minRound: realLastRound + 1, timeoutAt: timeoutAt }, correctStep)];
                                                        case 1:
                                                            res = _b.sent();
                                                            shared_impl_1.debug("EventCache res: ", res);
                                                            if (!!res.succ) return [3 /*break*/, 7];
                                                            currentRound = res.round;
                                                            return [4 /*yield*/, shared_impl_1.checkTimeout(getTimeSecs, timeoutAt, currentRound)];
                                                        case 2:
                                                            if (_b.sent()) {
                                                                shared_impl_1.debug(dhead, '--- RECVD timeout', { timeoutAt: timeoutAt, currentRound: currentRound });
                                                                return [2 /*return*/, { value: { didTimeout: true } }];
                                                            }
                                                            if (!waitIfNotPresent) return [3 /*break*/, 4];
                                                            return [4 /*yield*/, exports.waitUntilTime(shared_user_1.bigNumberify(currentRound + 1))];
                                                        case 3:
                                                            _b.sent();
                                                            return [3 /*break*/, 6];
                                                        case 4: return [4 /*yield*/, indexer_statusAfterBlock(currentRound + 1)];
                                                        case 5:
                                                            _b.sent();
                                                            _b.label = 6;
                                                        case 6: return [2 /*return*/, "continue"];
                                                        case 7:
                                                            txn = res.txn;
                                                            shared_impl_1.debug(dhead, '--- txn =', txn);
                                                            theRound = txn['confirmed-round'];
                                                            return [4 /*yield*/, getTimeSecs(shared_user_1.bigNumberify(theRound - 1))];
                                                        case 8:
                                                            theSecs = _b.sent();
                                                            all_txns = undefined;
                                                            get_all_txns = function () { return __awaiter(void 0, void 0, void 0, function () {
                                                                var all_query, all_res, same_group, all_txns_raw, group_order;
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0:
                                                                            if (all_txns) {
                                                                                return [2 /*return*/];
                                                                            }
                                                                            all_query = indexer.searchForTransactions()
                                                                                .txType('acfg')
                                                                                .assetID(0)
                                                                                .round(theRound);
                                                                            return [4 /*yield*/, doQuery_(dhead, all_query)];
                                                                        case 1:
                                                                            all_res = _a.sent();
                                                                            same_group = (function (x) { return x.group === txn.group && x['asset-config-transaction']['asset-id'] === 0; });
                                                                            all_txns_raw = all_res.transactions.filter(same_group);
                                                                            group_order = (function (x, y) { return x['intra-round-offset'] - y['intra-round-offset']; });
                                                                            all_txns = all_txns_raw.sort(group_order);
                                                                            shared_impl_1.debug(dhead, 'all_txns', all_txns);
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); };
                                                            ctc_args_all = txn['application-transaction']['application-args'];
                                                            shared_impl_1.debug(dhead, { ctc_args_all: ctc_args_all });
                                                            argMsg = 2;
                                                            ctc_args_s = ctc_args_all[argMsg];
                                                            shared_impl_1.debug(dhead, '--- out_tys =', out_tys);
                                                            msgTy = exports.T_Tuple(out_tys);
                                                            ctc_args = msgTy.fromNet(reNetify(ctc_args_s));
                                                            shared_impl_1.debug(dhead, { ctc_args: ctc_args });
                                                            args_un = shared_impl_1.argsSlice(ctc_args, evt_cnt);
                                                            shared_impl_1.debug(dhead, '--- args_un =', args_un);
                                                            fromAddr = txn['sender'];
                                                            from = exports.T_Address.canonicalize({ addr: fromAddr });
                                                            shared_impl_1.debug(dhead, '--- from =', from, '=', fromAddr);
                                                            oldLastRound = realLastRound;
                                                            realLastRound = theRound;
                                                            shared_impl_1.debug(dhead, '--- RECVD updating round from', oldLastRound, 'to', realLastRound);
                                                            tokenNews = 0;
                                                            getOutput = function (o_mode, o_lab, o_ctc) { return __awaiter(void 0, void 0, void 0, function () {
                                                                var tn_txn;
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0:
                                                                            if (!(o_mode === 'tokenNew')) return [3 /*break*/, 2];
                                                                            return [4 /*yield*/, get_all_txns()];
                                                                        case 1:
                                                                            _a.sent();
                                                                            tn_txn = all_txns[tokenNews++];
                                                                            shared_impl_1.debug(dhead, "tn_txn", tn_txn);
                                                                            return [2 /*return*/, tn_txn['created-asset-index']];
                                                                        case 2:
                                                                            void (o_lab);
                                                                            void (o_ctc);
                                                                            throw Error("Algorand does not support remote calls");
                                                                    }
                                                                });
                                                            }); };
                                                            return [2 /*return*/, { value: {
                                                                        didTimeout: false,
                                                                        data: args_un,
                                                                        time: shared_user_1.bigNumberify(realLastRound),
                                                                        secs: shared_user_1.bigNumberify(theSecs),
                                                                        from: from, getOutput: getOutput
                                                                    } }];
                                                    }
                                                });
                                            };
                                            _a.label = 2;
                                        case 2:
                                            if (!true) return [3 /*break*/, 4];
                                            return [5 /*yield**/, _loop_2()];
                                        case 3:
                                            state_2 = _a.sent();
                                            if (typeof state_2 === "object")
                                                return [2 /*return*/, state_2.value];
                                            return [3 /*break*/, 2];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); };
                            creationTime = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, shared_user_1.bigNumberify(ctorRound)];
                            }); }); };
                            creationSecs = function () { return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = getTimeSecs;
                                        return [4 /*yield*/, creationTime()];
                                    case 1: return [4 /*yield*/, _a.apply(void 0, [_b.sent()])];
                                    case 2: return [2 /*return*/, _b.sent()];
                                }
                            }); }); };
                            recoverSplitBytes = function (prefix, size, howMany, src) {
                                var bs = new Uint8Array(size);
                                var offset = 0;
                                var _loop_3 = function (i) {
                                    shared_impl_1.debug({ prefix: prefix, i: i });
                                    var ik = base64ify(new Uint8Array([i]));
                                    shared_impl_1.debug({ ik: ik });
                                    var st = (src.find(function (x) { return x.key === ik; })).value;
                                    shared_impl_1.debug({ st: st });
                                    var bsi = base64ToUI8A(st.bytes);
                                    shared_impl_1.debug({ bsi: bsi });
                                    if (bsi.length == 0) {
                                        return { value: undefined };
                                    }
                                    bs.set(bsi, offset);
                                    offset += bsi.length;
                                };
                                for (var i = 0; i < howMany; i++) {
                                    var state_3 = _loop_3(i);
                                    if (typeof state_3 === "object")
                                        return state_3.value;
                                }
                                return bs;
                            };
                            viewlib = {
                                viewMapRef: function (mapi, a) { return __awaiter(void 0, void 0, void 0, function () {
                                    var ls, mbs, md, mr;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                shared_impl_1.debug('viewMapRef', { mapi: mapi, a: a });
                                                return [4 /*yield*/, getLocalState(cbr2algo_addr(a))];
                                            case 1:
                                                ls = _a.sent();
                                                exports.assert(ls !== undefined, 'viewMapRef ls undefined');
                                                mbs = recoverSplitBytes('m', mapDataSize, mapDataKeys, ls);
                                                shared_impl_1.debug('viewMapRef', { mbs: mbs });
                                                md = mapDataTy.fromNet(mbs);
                                                shared_impl_1.debug('viewMapRef', { md: md });
                                                mr = md[mapi];
                                                exports.assert(mr !== undefined, 'viewMapRef mr undefined');
                                                return [2 /*return*/, mr];
                                        }
                                    });
                                }); }
                            };
                            views_bin = bin._getViews({ reachStdlib: ALGO_compiled_1.stdlib }, viewlib);
                            getView1 = function (vs, v, k, vim) {
                                return function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    return __awaiter(void 0, void 0, void 0, function () {
                                        var decode, client, appInfo, e_8, appSt, vvn, vin, vi, vtys, vty, vvs, vres, e_9;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    shared_impl_1.debug('getView1', v, k, args);
                                                    decode = vim.decode;
                                                    return [4 /*yield*/, getAlgodClient()];
                                                case 1:
                                                    client = _a.sent();
                                                    _a.label = 2;
                                                case 2:
                                                    _a.trys.push([2, 4, , 5]);
                                                    return [4 /*yield*/, client.getApplicationByID(ApplicationID)["do"]()];
                                                case 3:
                                                    appInfo = _a.sent();
                                                    return [3 /*break*/, 5];
                                                case 4:
                                                    e_8 = _a.sent();
                                                    shared_impl_1.debug('getApplicationById', e_8);
                                                    return [2 /*return*/, ['None', null]];
                                                case 5:
                                                    appSt = appInfo['params']['global-state'];
                                                    vvn = recoverSplitBytes('v', viewSize, viewKeys, appSt);
                                                    if (vvn === undefined) {
                                                        return [2 /*return*/, ['None', null]];
                                                    }
                                                    vin = exports.T_UInt.fromNet(vvn.slice(0, exports.T_UInt.netSize));
                                                    vi = shared_user_1.bigNumberToNumber(vin);
                                                    shared_impl_1.debug({ vi: vi });
                                                    vtys = vs[vi];
                                                    shared_impl_1.debug({ vtys: vtys });
                                                    if (!vtys) {
                                                        return [2 /*return*/, ['None', null]];
                                                    }
                                                    vty = exports.T_Tuple(__spreadArray([exports.T_UInt], vtys));
                                                    shared_impl_1.debug({ vty: vty });
                                                    vvs = vty.fromNet(vvn);
                                                    shared_impl_1.debug({ vvs: vvs });
                                                    _a.label = 6;
                                                case 6:
                                                    _a.trys.push([6, 8, , 9]);
                                                    return [4 /*yield*/, decode(vi, vvs.slice(1), args)];
                                                case 7:
                                                    vres = _a.sent();
                                                    shared_impl_1.debug({ vres: vres });
                                                    return [2 /*return*/, ['Some', vres]];
                                                case 8:
                                                    e_9 = _a.sent();
                                                    shared_impl_1.debug("getView1", v, k, 'error', e_9);
                                                    return [2 /*return*/, ['None', null]];
                                                case 9: return [2 /*return*/];
                                            }
                                        });
                                    });
                                };
                            };
                            getViews = shared_impl_1.getViewsHelper(views_bin, getView1);
                            return [2 /*return*/, { getInfo: getInfo, creationTime: creationTime, creationSecs: creationSecs, sendrecv: sendrecv, recv: recv, waitTime: exports.waitUntilTime, waitSecs: exports.waitUntilSecs, iam: iam, selfAddress: selfAddress, getViews: getViews, stdlib: ALGO_compiled_1.stdlib }];
                    }
                });
            });
        };
        deployP = function (bin) { return __awaiter(void 0, void 0, void 0, function () {
            var algob, viewKeys, mapDataKeys, _a, appApproval, appClear, extraPages, createRes, _b, _c, _d, _e, _f, _g, ApplicationID, ctcInfo, escrow, escrowAddr, params, ctor_args, txnCtor, e_10, getInfo, eventCache;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        must_be_supported(bin);
                        shared_impl_1.debug(shad, 'deploy');
                        algob = bin._Connectors.ALGO;
                        viewKeys = algob.viewKeys, mapDataKeys = algob.mapDataKeys;
                        return [4 /*yield*/, compileFor(bin, 0)];
                    case 1:
                        _a = _h.sent(), appApproval = _a.appApproval, appClear = _a.appClear;
                        extraPages = Math.ceil((appClear.result.length + appApproval.result.length) / MaxAppProgramLen) - 1;
                        shared_impl_1.debug("deploy", { extraPages: extraPages });
                        _b = sign_and_send_sync;
                        _c = ['ApplicationCreate',
                            thisAcc];
                        _d = toWTxn;
                        _f = (_e = algosdk_1["default"]).makeApplicationCreateTxn;
                        _g = [thisAcc.addr];
                        return [4 /*yield*/, getTxnParams()];
                    case 2: return [4 /*yield*/, _b.apply(void 0, _c.concat([_d.apply(void 0, [_f.apply(_e, _g.concat([_h.sent(),
                                    algosdk_1["default"].OnApplicationComplete.NoOpOC,
                                    appApproval.result,
                                    appClear.result,
                                    appLocalStateNumUInt, appLocalStateNumBytes + mapDataKeys,
                                    appGlobalStateNumUInt, appGlobalStateNumBytes + viewKeys,
                                    undefined, undefined, undefined, undefined,
                                    NOTE_Reach, undefined, undefined, extraPages]))])]))];
                    case 3:
                        createRes = _h.sent();
                        ApplicationID = createRes['application-index'];
                        if (!ApplicationID) {
                            throw Error("No application-index in " + JSON.stringify(createRes));
                        }
                        shared_impl_1.debug("created", { ApplicationID: ApplicationID });
                        ctcInfo = ApplicationID;
                        return [4 /*yield*/, compileFor(bin, ctcInfo)];
                    case 4:
                        escrow = (_h.sent()).escrow;
                        escrowAddr = escrow.hash;
                        shared_impl_1.debug("funding escrow");
                        // @ts-ignore
                        return [4 /*yield*/, exports.transfer({ networkAccount: thisAcc }, { networkAccount: { addr: escrow.hash } }, exports.minimumBalance)];
                    case 5:
                        // @ts-ignore
                        _h.sent();
                        shared_impl_1.debug("call ctor");
                        return [4 /*yield*/, getTxnParams()];
                    case 6:
                        params = _h.sent();
                        ctor_args = [new Uint8Array([0]),
                            exports.T_Address.toNet(exports.T_Address.canonicalize(escrowAddr)),
                            exports.T_Tuple([]).toNet([])];
                        shared_impl_1.debug({ ctor_args: ctor_args });
                        txnCtor = toWTxn(algosdk_1["default"].makeApplicationNoOpTxn(thisAcc.addr, params, ApplicationID, ctor_args, undefined, undefined, undefined, NOTE_Reach));
                        shared_impl_1.debug({ txnCtor: txnCtor });
                        _h.label = 7;
                    case 7:
                        _h.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, signSendAndConfirm(thisAcc, [txnCtor])];
                    case 8:
                        _h.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        e_10 = _h.sent();
                        throw Error("deploy: " + JSON.stringify(e_10));
                    case 10:
                        getInfo = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, ctcInfo];
                        }); }); };
                        eventCache = new EventCache();
                        return [4 /*yield*/, waitCtorTxn(shad, ctcInfo, eventCache)];
                    case 11:
                        _h.sent();
                        shared_impl_1.debug(shad, 'application created');
                        return [4 /*yield*/, attachP(bin, getInfo(), eventCache)];
                    case 12: return [2 /*return*/, _h.sent()];
                }
            });
        }); };
        implNow = { stdlib: ALGO_compiled_1.stdlib };
        attach = function (bin, ctcInfoP) {
            shared_impl_1.ensureConnectorAvailable(bin, 'ALGO', reachBackendVersion, reachAlgoBackendVersion);
            return shared_impl_1.deferContract(false, attachP(bin, ctcInfoP), implNow);
        };
        deploy = function (bin) {
            shared_impl_1.ensureConnectorAvailable(bin, 'ALGO', reachBackendVersion, reachAlgoBackendVersion);
            return shared_impl_1.deferContract(false, deployP(bin), implNow);
        };
        ;
        tokenMetadata = function (token) { return __awaiter(void 0, void 0, void 0, function () {
            var client, tokenRes, tokenInfo, p, name, symbol, url, metadata, supply;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shared_impl_1.debug("tokenMetadata", token);
                        return [4 /*yield*/, getAlgodClient()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.getAssetByID(shared_user_1.bigNumberToNumber(token))["do"]()];
                    case 2:
                        tokenRes = _a.sent();
                        shared_impl_1.debug({ tokenRes: tokenRes });
                        tokenInfo = tokenRes['params'];
                        shared_impl_1.debug({ tokenInfo: tokenInfo });
                        p = function (n, x) {
                            return x ? exports.T_Bytes(n).fromNet(reNetify(x)) : undefined;
                        };
                        name = p(32, tokenInfo['name-b64']);
                        symbol = p(8, tokenInfo['unit-name-b64']);
                        url = p(96, tokenInfo['url-b64']);
                        metadata = p(32, tokenInfo['metadata-hash']);
                        supply = shared_user_1.bigNumberify(tokenInfo['total']);
                        return [2 /*return*/, { name: name, symbol: symbol, url: url, metadata: metadata, supply: supply }];
                }
            });
        }); };
        return [2 /*return*/, { deploy: deploy, attach: attach, networkAccount: networkAccount, getAddress: selfAddress, stdlib: ALGO_compiled_1.stdlib, setDebugLabel: setDebugLabel, tokenAccept: tokenAccept, tokenMetadata: tokenMetadata }];
    });
}); };
exports.connectAccount = connectAccount;
var balanceOf = function (acc, token) {
    if (token === void 0) { token = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var networkAccount, client, info, _i, _a, ai;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    networkAccount = acc.networkAccount;
                    if (!networkAccount) {
                        throw Error("acc.networkAccount missing. Got: " + acc);
                    }
                    return [4 /*yield*/, getAlgodClient()];
                case 1:
                    client = _b.sent();
                    return [4 /*yield*/, client.accountInformation(networkAccount.addr)["do"]()];
                case 2:
                    info = _b.sent();
                    if (!token) {
                        return [2 /*return*/, shared_user_1.bigNumberify(info.amount)];
                    }
                    else {
                        for (_i = 0, _a = info.assets; _i < _a.length; _i++) {
                            ai = _a[_i];
                            if (ai['asset-id'] === token) {
                                return [2 /*return*/, ai['amount']];
                            }
                        }
                        return [2 /*return*/, shared_user_1.bigNumberify(0)];
                    }
                    return [2 /*return*/];
            }
        });
    });
};
exports.balanceOf = balanceOf;
var createAccount = function () { return __awaiter(void 0, void 0, void 0, function () {
    var networkAccount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                networkAccount = algosdk_1["default"].generateAccount();
                return [4 /*yield*/, exports.connectAccount(networkAccount)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createAccount = createAccount;
var canFundFromFaucet = function () { return __awaiter(void 0, void 0, void 0, function () {
    var faucet, fbal;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.getFaucet()];
            case 1:
                faucet = _a.sent();
                shared_impl_1.debug('canFundFromFaucet');
                return [4 /*yield*/, exports.balanceOf(faucet)];
            case 2:
                fbal = _a.sent();
                return [2 /*return*/, exports.gt(fbal, 0)];
        }
    });
}); };
exports.canFundFromFaucet = canFundFromFaucet;
var fundFromFaucet = function (account, value) { return __awaiter(void 0, void 0, void 0, function () {
    var faucet, tag;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.getFaucet()];
            case 1:
                faucet = _a.sent();
                shared_impl_1.debug('fundFromFaucet');
                tag = Math.round(Math.random() * (Math.pow(2, 32)));
                return [4 /*yield*/, exports.transfer(faucet, account, value, undefined, tag)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.fundFromFaucet = fundFromFaucet;
var newTestAccount = function (startingBalance) { return __awaiter(void 0, void 0, void 0, function () {
    var account;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.createAccount()];
            case 1:
                account = _a.sent();
                return [4 /*yield*/, exports.fundFromFaucet(account, startingBalance)];
            case 2:
                _a.sent();
                return [2 /*return*/, account];
        }
    });
}); };
exports.newTestAccount = newTestAccount;
exports.newTestAccounts = shared_impl_1.make_newTestAccounts(exports.newTestAccount);
/** @description the display name of the standard unit of currency for the network */
exports.standardUnit = 'ALGO';
/** @description the display name of the atomic (smallest) unit of currency for the network */
exports.atomicUnit = 'μALGO';
/**
 * @description  Parse currency by network
 * @param amt  value in the {@link standardUnit} for the network.
 * @returns  the amount in the {@link atomicUnit} of the network.
 * @example  parseCurrency(100).toString() // => '100000000'
 */
function parseCurrency(amt) {
    // @ts-ignore
    var numericAmt = shared_user_1.isBigNumber(amt) ? amt.toNumber()
        : typeof amt === 'string' ? parseFloat(amt)
            : typeof amt === 'bigint' ? Number(amt)
                : amt;
    return shared_user_1.bigNumberify(algosdk_1["default"].algosToMicroalgos(numericAmt));
}
exports.parseCurrency = parseCurrency;
// XXX get from SDK
var raw_minimumBalance = 100000;
exports.minimumBalance = shared_user_1.bigNumberify(raw_minimumBalance);
// lol I am not importing leftpad for this
/** @example lpad('asdf', '0', 6); // => '00asdf' */
function lpad(str, padChar, nChars) {
    var padding = padChar.repeat(Math.max(nChars - str.length, 0));
    return padding + str;
}
/** @example rdrop('asfdfff', 'f'); // => 'asfd' */
function rdrop(str, char) {
    while (str[str.length - 1] === char) {
        str = str.slice(0, str.length - 1);
    }
    return str;
}
/** @example ldrop('007', '0'); // => '7' */
function ldrop(str, char) {
    while (str[0] === char) {
        str = str.slice(1);
    }
    return str;
}
/**
 * @description  Format currency by network
 * @param amt  the amount in the {@link atomicUnit} of the network.
 * @param decimals  up to how many decimal places to display in the {@link standardUnit}.
 *   Trailing zeros will be omitted. Excess decimal places will be truncated (not rounded).
 *   This argument defaults to maximum precision.
 * @returns  a string representation of that amount in the {@link standardUnit} for that network.
 * @example  formatCurrency(bigNumberify('100000000')); // => '100'
 * @example  formatCurrency(bigNumberify('9999998799987000')); // => '9999998799.987'
 */
function formatCurrency(amt, decimals) {
    if (decimals === void 0) { decimals = 6; }
    if (!(Number.isInteger(decimals) && 0 <= decimals)) {
        throw Error("Expected decimals to be a nonnegative integer, but got " + decimals + ".");
    }
    var amtStr = shared_user_1.bigNumberify(amt).toString();
    var splitAt = Math.max(amtStr.length - 6, 0);
    var lPredropped = amtStr.slice(0, splitAt);
    var l = ldrop(lPredropped, '0') || '0';
    if (decimals === 0) {
        return l;
    }
    var rPre = lpad(amtStr.slice(splitAt), '0', 6);
    var rSliced = rPre.slice(0, decimals);
    var r = rdrop(rSliced, '0');
    return r ? l + "." + r : l;
}
exports.formatCurrency = formatCurrency;
function getDefaultAccount() {
    return __awaiter(this, void 0, void 0, function () {
        var addr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.getProvider()];
                case 1:
                    addr = (_a.sent()).getDefaultAddress();
                    return [4 /*yield*/, exports.connectAccount({ addr: addr })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getDefaultAccount = getDefaultAccount;
/**
 * @param mnemonic 25 words, space-separated
 */
var newAccountFromMnemonic = function (mnemonic) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.connectAccount(algosdk_1["default"].mnemonicToSecretKey(mnemonic))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.newAccountFromMnemonic = newAccountFromMnemonic;
/**
 * @param secret a Uint8Array, or its hex string representation
 */
var newAccountFromSecret = function (secret) { return __awaiter(void 0, void 0, void 0, function () {
    var sk, mnemonic;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sk = ethers_1.ethers.utils.arrayify(secret);
                mnemonic = algosdk_1["default"].secretKeyToMnemonic(sk);
                return [4 /*yield*/, exports.newAccountFromMnemonic(mnemonic)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.newAccountFromSecret = newAccountFromSecret;
var getNetworkTime = function () { return __awaiter(void 0, void 0, void 0, function () {
    var indexer, hc;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getIndexer()];
            case 1:
                indexer = _a.sent();
                return [4 /*yield*/, indexer.makeHealthCheck()["do"]()];
            case 2:
                hc = _a.sent();
                return [2 /*return*/, shared_user_1.bigNumberify(hc['round'])];
        }
    });
}); };
exports.getNetworkTime = getNetworkTime;
var getTimeSecs = function (now_bn) { return __awaiter(void 0, void 0, void 0, function () {
    var now, indexer, info;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                now = shared_user_1.bigNumberToNumber(now_bn);
                return [4 /*yield*/, getIndexer()];
            case 1:
                indexer = _a.sent();
                return [4 /*yield*/, indexer.lookupBlock(now)["do"]()];
            case 2:
                info = _a.sent();
                return [2 /*return*/, shared_user_1.bigNumberify(info['timestamp'])];
        }
    });
}); };
var getNetworkSecs = function () { return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
    switch (_b.label) {
        case 0:
            _a = getTimeSecs;
            return [4 /*yield*/, exports.getNetworkTime()];
        case 1: return [4 /*yield*/, _a.apply(void 0, [_b.sent()])];
        case 2: return [2 /*return*/, _b.sent()];
    }
}); }); };
exports.getNetworkSecs = getNetworkSecs;
var stepTime = function (target) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, exports.getProvider()];
            case 1:
                if (!(_b.sent()).isIsolatedNetwork) return [3 /*break*/, 4];
                _a = exports.fundFromFaucet;
                return [4 /*yield*/, exports.getFaucet()];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent(), 0])];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4: return [4 /*yield*/, indexer_statusAfterBlock(shared_user_1.bigNumberToNumber(target))];
            case 5: return [2 /*return*/, _b.sent()];
        }
    });
}); };
exports.waitUntilTime = shared_impl_1.make_waitUntilX('time', exports.getNetworkTime, stepTime);
var stepSecs = function (target) { return __awaiter(void 0, void 0, void 0, function () {
    var now, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                void (target);
                _a = stepTime;
                return [4 /*yield*/, exports.getNetworkTime()];
            case 1: return [4 /*yield*/, _a.apply(void 0, [(_b.sent()).add(1)])];
            case 2:
                now = _b.sent();
                return [4 /*yield*/, getTimeSecs(now)];
            case 3: return [2 /*return*/, _b.sent()];
        }
    });
}); };
exports.waitUntilSecs = shared_impl_1.make_waitUntilX('secs', exports.getNetworkSecs, stepSecs);
var wait = function (delta, onProgress) { return __awaiter(void 0, void 0, void 0, function () {
    var now;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.getNetworkTime()];
            case 1:
                now = _a.sent();
                return [4 /*yield*/, exports.waitUntilTime(now.add(delta), onProgress)];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.wait = wait;
var appLocalStateNumUInt = 0;
var appLocalStateNumBytes = 0;
var appGlobalStateNumUInt = 0;
var appGlobalStateNumBytes = 1;
function queryCtorTxn(dhead, ApplicationID, eventCache) {
    return __awaiter(this, void 0, void 0, function () {
        var isCtor, icr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isCtor = makeIsMethod(0);
                    return [4 /*yield*/, eventCache.query(dhead + " ctor", ApplicationID, { minRound: 0 }, isCtor)];
                case 1:
                    icr = _a.sent();
                    shared_impl_1.debug({ icr: icr });
                    return [2 /*return*/, icr];
            }
        });
    });
}
function waitCtorTxn(shad, ApplicationID, eventCache) {
    return __awaiter(this, void 0, void 0, function () {
        var maxTries, icr, tries, waitMs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    maxTries = 14;
                    icr = null;
                    tries = 1;
                    _a.label = 1;
                case 1:
                    if (!(tries <= maxTries)) return [3 /*break*/, 5];
                    waitMs = Math.pow(2, tries);
                    shared_impl_1.debug(shad, 'waitCtorTxn waiting (ms)', waitMs);
                    return [4 /*yield*/, await_timeout_1["default"].set(waitMs)];
                case 2:
                    _a.sent();
                    shared_impl_1.debug(shad, 'waitCtorTxn trying attempt #', tries, 'of', maxTries);
                    return [4 /*yield*/, queryCtorTxn(shad + " deploy", ApplicationID, eventCache)];
                case 3:
                    icr = _a.sent();
                    if (icr && icr.txn)
                        return [2 /*return*/];
                    _a.label = 4;
                case 4:
                    tries++;
                    return [3 /*break*/, 1];
                case 5: throw Error("Indexer could not find application " + ApplicationID + ".");
            }
        });
    });
}
var verifyContract = function (info, bin) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, verifyContract_(info, bin, new EventCache())];
    });
}); };
exports.verifyContract = verifyContract;
var verifyContract_ = function (info, bin, eventCache) { return __awaiter(void 0, void 0, void 0, function () {
    var compiled, ApplicationID, appApproval, appClear, _a, mapDataKeys, viewKeys, dhead, chk, chkeq, fmtp, client, appInfo, appInfo_p, Deployer, appInfo_LocalState, appInfo_GlobalState, indexer, ilq, ilr, appInfo_i, allocRound, iar, iat, iatat, icr, ict, ctorRound, ictat, aescrow_b64, aescrow_ui8, aescrow_cbr, aescrow_algo;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, compileFor(bin, info)];
            case 1:
                compiled = _b.sent();
                ApplicationID = compiled.ApplicationID, appApproval = compiled.appApproval, appClear = compiled.appClear;
                _a = bin._Connectors.ALGO, mapDataKeys = _a.mapDataKeys, viewKeys = _a.viewKeys;
                dhead = "verifyContract";
                chk = function (p, msg) {
                    if (!p) {
                        throw Error("verifyContract failed: " + msg);
                    }
                };
                chkeq = function (a, e, msg) {
                    var as = JSON.stringify(a);
                    var es = JSON.stringify(e);
                    chk(as === es, msg + ": expected " + es + ", got " + as);
                };
                fmtp = function (x) { return uint8ArrayToStr(x.result, 'base64'); };
                return [4 /*yield*/, getAlgodClient()];
            case 2:
                client = _b.sent();
                return [4 /*yield*/, client.getApplicationByID(ApplicationID)["do"]()];
            case 3:
                appInfo = _b.sent();
                appInfo_p = appInfo['params'];
                shared_impl_1.debug(dhead, { appInfo_p: appInfo_p });
                chk(appInfo_p, "Cannot lookup ApplicationId");
                chkeq(appInfo_p['approval-program'], fmtp(appApproval), "Approval program does not match Reach backend");
                chkeq(appInfo_p['clear-state-program'], fmtp(appClear), "ClearState program does not match Reach backend");
                Deployer = appInfo_p['creator'];
                appInfo_LocalState = appInfo_p['local-state-schema'];
                chkeq(appInfo_LocalState['num-byte-slice'], appLocalStateNumBytes + mapDataKeys, "Num of byte-slices in local state schema does not match Reach backend");
                chkeq(appInfo_LocalState['num-uint'], appLocalStateNumUInt, "Num of uints in local state schema does not match Reach backend");
                appInfo_GlobalState = appInfo_p['global-state-schema'];
                chkeq(appInfo_GlobalState['num-byte-slice'], appGlobalStateNumBytes + viewKeys, "Num of byte-slices in global state schema does not match Reach backend");
                chkeq(appInfo_GlobalState['num-uint'], appGlobalStateNumUInt, "Num of uints in global state schema does not match Reach backend");
                return [4 /*yield*/, getIndexer()];
            case 4:
                indexer = _b.sent();
                ilq = indexer.lookupApplications(ApplicationID).includeAll();
                return [4 /*yield*/, doQuery_(dhead + " app lookup", ilq, true)];
            case 5:
                ilr = _b.sent();
                shared_impl_1.debug(dhead, { ilr: ilr });
                appInfo_i = ilr.application;
                shared_impl_1.debug(dhead, { appInfo_i: appInfo_i });
                chkeq(appInfo_i['deleted'], false, "Application must not be deleted");
                allocRound = appInfo_i['created-at-round'];
                return [4 /*yield*/, eventCache.query(dhead, ApplicationID, { specRound: allocRound }, function (_) { return true; })];
            case 6:
                iar = _b.sent();
                iat = iar.txn;
                chk(iat, "Cannot query for allocation transaction");
                shared_impl_1.debug({ iat: iat });
                iatat = iat['application-transaction'];
                shared_impl_1.debug({ iatat: iatat });
                chkeq(iatat['approval-program'], appInfo_p['approval-program'], "ApprovalProgram unchanged since creation");
                chkeq(iatat['clear-state-program'], appInfo_p['clear-state-program'], "ClearStateProgram unchanged since creation");
                return [4 /*yield*/, queryCtorTxn(dhead, ApplicationID, eventCache)];
            case 7:
                icr = _b.sent();
                ict = icr.txn;
                chk(ict, "Cannot query for constructor transaction");
                shared_impl_1.debug({ ict: ict });
                ctorRound = ict['confirmed-round'];
                ictat = ict['application-transaction'];
                shared_impl_1.debug({ ictat: ictat });
                aescrow_b64 = ictat['application-args'][1];
                aescrow_ui8 = reNetify(aescrow_b64);
                aescrow_cbr = exports.T_Address.fromNet(aescrow_ui8);
                aescrow_algo = cbr2algo_addr(aescrow_cbr);
                chkeq(aescrow_algo, compiled.escrow.hash, "Must be constructed with proper escrow account address");
                // Note: (after deployMode:firstMsg is implemented)
                // 1. (above) attach initial args to ContractInfo
                // 2. verify contract storage matches expectations based on initial args
                return [2 /*return*/, { compiled: compiled, ApplicationID: ApplicationID, allocRound: allocRound, ctorRound: ctorRound, Deployer: Deployer }];
        }
    });
}); };
/**
 * Formats an account's address in the way users expect to see it.
 * @param acc Account, NetworkAccount, base32-encoded address, or hex-encoded address
 * @returns the address formatted as a base32-encoded string with checksum
 */
function formatAddress(acc) {
    return ALGO_compiled_1.addressFromHex(exports.T_Address.canonicalize(acc));
}
exports.formatAddress = formatAddress;
function launchToken(accCreator, name, sym) {
    return __awaiter(this, void 0, void 0, function () {
        var addr, caddr, zaddr, algod, dotxn, ctxn_p, id, mint, optOut;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Launching token, " + name + " (" + sym + ")");
                    addr = function (acc) { return acc.networkAccount.addr; };
                    caddr = addr(accCreator);
                    zaddr = caddr;
                    return [4 /*yield*/, getAlgodClient()];
                case 1:
                    algod = _a.sent();
                    dotxn = function (mktxn, acc) {
                        if (acc === void 0) { acc = accCreator; }
                        return __awaiter(_this, void 0, void 0, function () {
                            var sk, params, t, s, r;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        sk = acc.networkAccount.sk;
                                        if (!sk) {
                                            throw new Error("can only launchToken with account with secret key");
                                        }
                                        return [4 /*yield*/, getTxnParams()];
                                    case 1:
                                        params = _a.sent();
                                        t = mktxn(params);
                                        s = t.signTxn(sk);
                                        return [4 /*yield*/, algod.sendRawTransaction(s)["do"]()];
                                    case 2:
                                        r = (_a.sent());
                                        return [4 /*yield*/, waitForConfirmation(r.txId)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, algod.pendingTransactionInformation(r.txId)["do"]()];
                                    case 4: return [2 /*return*/, _a.sent()];
                                }
                            });
                        });
                    };
                    return [4 /*yield*/, dotxn(function (params) {
                            return algosdk_1["default"].makeAssetCreateTxnWithSuggestedParams(caddr, undefined, Math.pow(2, 48), 6, false, zaddr, zaddr, zaddr, zaddr, sym, name, '', '', params);
                        })];
                case 2:
                    ctxn_p = _a.sent();
                    id = ctxn_p["asset-index"];
                    console.log(sym + ": asset is " + id);
                    mint = function (accTo, amt) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(sym + ": transferring " + amt + " " + sym + " for " + addr(accTo));
                                    return [4 /*yield*/, exports.transfer(accCreator, accTo, amt, id)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    optOut = function (accFrom, accTo) {
                        if (accTo === void 0) { accTo = accCreator; }
                        return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, dotxn(function (params) {
                                            return algosdk_1["default"].makeAssetTransferTxnWithSuggestedParams(addr(accFrom), addr(accTo), addr(accTo), undefined, 0, undefined, id, params);
                                        }, accFrom)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    };
                    return [2 /*return*/, { name: name, sym: sym, id: id, mint: mint, optOut: optOut }];
            }
        });
    });
}
exports.launchToken = launchToken;
;
exports.reachStdlib = ALGO_compiled_1.stdlib;
//# sourceMappingURL=ALGO.js.map