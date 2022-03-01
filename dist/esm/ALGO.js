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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b, _c;
export var connector = 'ALGO';
import algosdk from 'algosdk';
export { default as algosdk } from 'algosdk';
import { ethers } from 'ethers';
import Timeout from 'await-timeout';
import buffer from 'buffer';
import * as RHC from './ALGO_ReachHTTPClient';
// @ts-ignore // XXX Dan FIXME pls
import * as UTBC from './ALGO_UTBC';
var Buffer = buffer.Buffer;
import { VERSION } from './version';
import { apiStateMismatchError, stdContract, stdVerifyContract, stdABIFilter, stdAccount, debug, envDefault, argsSplit, makeRandom, replaceableThunk, ensureConnectorAvailable, bigNumberToBigInt, make_newTestAccounts, make_waitUntilX, checkTimeout, truthyEnv, Lock, retryLoop, makeEventQueue, makeEventStream, makeSigningMonitor, j2sf, j2s, } from './shared_impl';
import { isBigNumber, bigNumberify, bigNumberToNumber, } from './shared_user';
import waitPort from './waitPort';
import { addressFromHex, stdlib, typeDefs, extractAddr, bytestringyNet, } from './ALGO_compiled';
import { window, process, updateProcessEnv } from './shim';
import { sha512_256 } from 'js-sha512';
export var add = stdlib.add, sub = stdlib.sub, mod = stdlib.mod, mul = stdlib.mul, div = stdlib.div, protect = stdlib.protect, assert = stdlib.assert, Array_set = stdlib.Array_set, eq = stdlib.eq, ge = stdlib.ge, gt = stdlib.gt, le = stdlib.le, lt = stdlib.lt, bytesEq = stdlib.bytesEq, digestEq = stdlib.digestEq;
export * from './shared_user';
import { setQueryLowerBound, getQueryLowerBound, handleFormat, formatWithDecimals } from './shared_impl';
export { setQueryLowerBound, getQueryLowerBound, addressFromHex, formatWithDecimals };
var _d = __read(makeSigningMonitor(), 2), setSigningMonitor = _d[0], notifySend = _d[1];
export { setSigningMonitor };
var reachBackendVersion = 10;
var reachAlgoBackendVersion = 9;
// module-wide config
var customHttpEventHandler = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, undefined];
}); }); };
export function setCustomHttpEventHandler(h) {
    customHttpEventHandler = h;
}
/**
 * @description client-side rate limiting.
 *  Setting this to any positive number will also prevent requests from being sent in parallel.
 *  Rate limiting is applied to all outgoing http requests, even if they are to different servers.
 */
var minMillisBetweenRequests = 0;
export function setMinMillisBetweenRequests(n) {
    minMillisBetweenRequests = n;
}
var reqLock = new Lock();
var currentReqNum = undefined;
var currentReqLabel = undefined;
var lastReqSentAt = undefined; // ms
function httpEventHandler(e) {
    return __awaiter(this, void 0, void 0, function () {
        var en, waitMs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    en = e.eventName;
                    if (!(minMillisBetweenRequests > 0)) return [3 /*break*/, 5];
                    if (!(en === 'before')) return [3 /*break*/, 4];
                    return [4 /*yield*/, reqLock.acquire()];
                case 1:
                    _a.sent();
                    if (!lastReqSentAt) return [3 /*break*/, 3];
                    waitMs = Math.max(0, lastReqSentAt + minMillisBetweenRequests - Date.now());
                    debug("waiting ".concat(waitMs, "ms due to minMillisBetweenRequests=").concat(minMillisBetweenRequests));
                    return [4 /*yield*/, Timeout.set(waitMs)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    lastReqSentAt = Date.now();
                    currentReqNum = e.reqNum;
                    currentReqLabel = e.label;
                    _a.label = 4;
                case 4:
                    if (en === 'success' || en === 'error') {
                        if (currentReqNum === e.reqNum && currentReqLabel == e.label) {
                            currentReqNum = undefined;
                            currentReqLabel = undefined;
                            reqLock.release();
                        }
                        else {
                            throw Error('impossible: multiple requests in flight');
                        }
                    }
                    _a.label = 5;
                case 5: return [4 /*yield*/, customHttpEventHandler(e)];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// Helpers
// Parse CBR into Public Key
var cbr2algo_addr = function (x) {
    return algosdk.encodeAddress(Buffer.from(x.slice(2), 'hex'));
};
var txnFromAddress = function (t) {
    return algosdk.encodeAddress(t.from.publicKey);
};
function uint8ArrayToStr(a, enc) {
    if (enc === void 0) { enc = 'utf8'; }
    if (!(a instanceof Uint8Array)) {
        console.log(a);
        throw Error("Expected Uint8Array, got ".concat(a));
    }
    return Buffer.from(a).toString(enc);
}
// TODO: read token from scripts/devnet-algo/algorand_data/algod.token
var rawDefaultToken = 'c87f5580d7a866317b4bfe9e8b8d1dda955636ccebfa88c12b414db208dd9705';
var rawDefaultItoken = 'reach-devnet';
var indexerTxn2RecvTxn = function (txn) {
    var ait = txn['application-transaction'] || {};
    var aargs = ait['application-args'] || [];
    var aidx = ait['application-id'] || 0;
    return {
        'confirmed-round': txn['confirmed-round'],
        'sender': txn['sender'],
        'approval-program': ait['approval-program'],
        'clear-state-program': ait['clear-state-program'],
        'logs': (txn['logs'] || []),
        'application-args': aargs,
        'application-index': aidx,
        'created-application-index': txn['created-application-index'],
        'created-asset-index': txn['created-asset-index']
    };
};
var waitForConfirmation = function (txId) { return __awaiter(void 0, void 0, void 0, function () {
    var doOrDie, dhead, client, checkAlgod, checkIndexer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                doOrDie = function (p) { return __awaiter(void 0, void 0, void 0, function () {
                    var e_1;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                _a = {};
                                return [4 /*yield*/, p];
                            case 1: return [2 /*return*/, (_a.val = _b.sent(), _a)];
                            case 2:
                                e_1 = _b.sent();
                                return [2 /*return*/, { 'exn': e_1 }];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                dhead = "waitForConfirmation ".concat(txId);
                return [4 /*yield*/, getAlgodClient()];
            case 1:
                client = _a.sent();
                checkAlgod = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var q, infoM, info, cr, l, dtxn, uToS;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                q = client.pendingTransactionInformation(txId)["do"]();
                                return [4 /*yield*/, doOrDie(q)];
                            case 1:
                                infoM = _a.sent();
                                debug(dhead, 'info', infoM);
                                if (!('exn' in infoM)) return [3 /*break*/, 3];
                                debug(dhead, 'switching to indexer on error');
                                return [4 /*yield*/, checkIndexer()];
                            case 2: return [2 /*return*/, _a.sent()];
                            case 3:
                                info = infoM.val;
                                cr = info['confirmed-round'];
                                if (!(cr !== undefined && cr > 0)) return [3 /*break*/, 4];
                                l = info['logs'] === undefined ? [] : info['logs'];
                                debug(dhead, 'confirmed');
                                dtxn = algosdk.Transaction.from_obj_for_encoding(info['txn']['txn']);
                                debug(dhead, 'confirmed', dtxn);
                                uToS = function (a) { return (a || []).map(function (x) { return uint8ArrayToStr(x, 'base64'); }); };
                                return [2 /*return*/, {
                                        'confirmed-round': cr,
                                        'created-asset-index': info['asset-index'],
                                        // @ts-ignore
                                        'logs': uToS(l),
                                        'created-application-index': info['application-index'],
                                        'sender': txnFromAddress(dtxn),
                                        'application-args': uToS(dtxn.appArgs)
                                    }];
                            case 4:
                                if (!(info['pool-error'] === '')) return [3 /*break*/, 6];
                                debug(dhead, 'still in pool, trying again');
                                return [4 /*yield*/, checkAlgod()];
                            case 5: return [2 /*return*/, _a.sent()];
                            case 6: throw Error("waitForConfirmation: error confirming: ".concat(j2s(info)));
                        }
                    });
                }); };
                checkIndexer = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var indexer, q, res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getIndexer()];
                            case 1:
                                indexer = _a.sent();
                                q = indexer.lookupTransactionByID(txId);
                                return [4 /*yield*/, doQuery_(dhead, q)];
                            case 2:
                                res = _a.sent();
                                debug(dhead, 'indexer', res);
                                return [2 /*return*/, indexerTxn2RecvTxn(res['transaction'])];
                        }
                    });
                }); };
                return [4 /*yield*/, nodeCanRead()];
            case 2:
                if (!_a.sent()) return [3 /*break*/, 4];
                return [4 /*yield*/, checkAlgod()];
            case 3: return [2 /*return*/, _a.sent()];
            case 4: return [4 /*yield*/, checkIndexer()];
            case 5: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var decodeB64Txn = function (ts) {
    var tb = Buffer.from(ts, 'base64');
    return algosdk.decodeUnsignedTransaction(tb);
};
var doSignTxnToB64 = function (t, sk) {
    var sb = Buffer.from(t.signTxn(sk));
    return sb.toString('base64');
};
var doSignTxn = function (ts, sk) {
    return doSignTxnToB64(decodeB64Txn(ts), sk);
};
export var signSendAndConfirm = function (acc, txns) { return __awaiter(void 0, void 0, void 0, function () {
    var p, sapt_res, notifyComplete, e_2, es, r, N, tN, e_3, es;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (acc.sk !== undefined) {
                    txns.forEach(function (t) {
                        // XXX this comparison is probably wrong, because the addresses are the
                        // wrong type
                        if (acc.sk !== undefined && !t.stxn && t.signers !== undefined && t.signers.length === 1 && t.signers[0] === acc.addr) {
                            debug('signSendAndConfirm', 'signing one');
                            t.stxn = doSignTxn(t.txn, acc.sk);
                        }
                    });
                }
                return [4 /*yield*/, getProvider()];
            case 1:
                p = _b.sent();
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, notifySend(txns, p.signAndPostTxns(txns))];
            case 3:
                _a = __read.apply(void 0, [_b.sent(), 2]), sapt_res = _a[0], notifyComplete = _a[1];
                return [3 /*break*/, 5];
            case 4:
                e_2 = _b.sent();
                es = "".concat(e_2);
                if ('response' in e_2) {
                    r = e_2.response;
                    if ('body' in r) {
                        e_2.response = r.body;
                    }
                    else if ('text' in r) {
                        e_2.response = r.text;
                    }
                    else {
                        delete r.request;
                        delete r.req;
                    }
                }
                throw { type: 'signAndPost', e: e_2, es: es };
            case 5:
                debug({ sapt_res: sapt_res });
                N = txns.length - 1;
                tN = decodeB64Txn(txns[N].txn);
                _b.label = 6;
            case 6:
                _b.trys.push([6, 8, , 9]);
                return [4 /*yield*/, notifyComplete(waitForConfirmation(tN.txID()))];
            case 7: return [2 /*return*/, _b.sent()]; // tN.lastRound
            case 8:
                e_3 = _b.sent();
                es = "".concat(e_3);
                throw { type: 'waitForConfirmation', e: e_3, es: es };
            case 9: return [2 /*return*/];
        }
    });
}); };
var encodeUnsignedTransaction = function (t) {
    return Buffer.from(algosdk.encodeUnsignedTransaction(t)).toString('base64');
};
export var toWTxn = function (t) {
    return {
        txn: encodeUnsignedTransaction(t),
        signers: [txnFromAddress(t)]
    };
};
// Backend
var stdWait = function () { return Timeout.set(1000); };
export var getTxnParams = function (label) { return __awaiter(void 0, void 0, void 0, function () {
    var dhead, client, params;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dhead = "".concat(label, " fillTxn");
                debug(dhead, "getting params");
                return [4 /*yield*/, getAlgodClient()];
            case 1:
                client = _a.sent();
                _a.label = 2;
            case 2:
                if (!true) return [3 /*break*/, 5];
                return [4 /*yield*/, client.getTransactionParams()["do"]()];
            case 3:
                params = _a.sent();
                debug(dhead, 'got params:', params);
                if (params.firstRound !== 0) {
                    return [2 /*return*/, params];
                }
                debug(dhead, "...but firstRound is 0, so let's wait and try again.");
                return [4 /*yield*/, stdWait()];
            case 4:
                _a.sent();
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}); };
var sign_and_send_sync = function (label, acc, txn) { return __awaiter(void 0, void 0, void 0, function () {
    var e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, signSendAndConfirm(acc, [txn])];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                e_4 = _a.sent();
                console.log(e_4);
                throw Error("".concat(label, " txn failed:\n").concat(j2s(txn), "\nwith:\n").concat(j2s(e_4)));
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
    var unsupported = algob.unsupported, warnings = algob.warnings;
    var render = function (x) { return x.map(function (s) { return " * ".concat(s); }).join('\n'); };
    if (warnings.length > 0) {
        console.error("This Reach application is dangerous to run on Algorand for the following reasons:\n".concat(render(warnings)));
    }
    if (unsupported.length > 0) {
        throw Error("This Reach application is not supported on Algorand for the following reasons:\n".concat(render(unsupported)));
    }
}
// Get these from stdlib
// const MaxTxnLife = 1000;
export var MinTxnFee = 1000;
var MaxAppTxnAccounts = 4;
var MinBalance = 100000;
var SchemaMinBalancePerEntry = 25000;
var SchemaBytesMinBalance = 25000;
var SchemaUintMinBalance = 3500;
var AppFlatParamsMinBalance = 100000;
var AppFlatOptInMinBalance = 100000;
var ui8h = function (x) { return Buffer.from(x).toString('hex'); };
var base64ToUI8A = function (x) { return Uint8Array.from(Buffer.from(x, 'base64')); };
var base64ify = function (x) { return Buffer.from(x).toString('base64'); };
function looksLikeAccountingNotInitialized(e) {
    var _a;
    var responseText = ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.text) || null;
    // TODO: trust the response to be json and parse it?
    // const json = JSON.parse(responseText) || {};
    // const msg: string = (json.message || '').toLowerCase();
    var msg = (responseText || '').toLowerCase();
    return msg.includes("accounting not initialized");
}
var doQueryM_ = function (dhead, query) { return __awaiter(void 0, void 0, void 0, function () {
    var val, exn_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, query["do"]()];
            case 1:
                val = _a.sent();
                debug(dhead, 'RESULT', val);
                return [2 /*return*/, { val: val }];
            case 2:
                exn_1 = _a.sent();
                return [2 /*return*/, { exn: exn_1 }];
            case 3: return [2 /*return*/];
        }
    });
}); };
var doQuery_ = function (dhead, query, howMany) {
    if (howMany === void 0) { howMany = 0; }
    return __awaiter(void 0, void 0, void 0, function () {
        var res, e;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    debug(dhead, query.query);
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 5];
                    if (!(howMany > 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, stdWait()];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3: return [4 /*yield*/, doQueryM_(dhead, query)];
                case 4:
                    res = _b.sent();
                    if ('exn' in res) {
                        e = res.exn;
                        if ((e === null || e === void 0 ? void 0 : e.errno) === -111 || (e === null || e === void 0 ? void 0 : e.code) === "ECONNRESET") {
                            debug(dhead, 'NO CONNECTION');
                        }
                        else if (looksLikeAccountingNotInitialized(e)) {
                            debug(dhead, 'ACCOUNTING NOT INITIALIZED');
                        }
                        if ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.text) {
                            e = e.response.text;
                        }
                        debug(dhead, 'RETRYING', { e: e });
                        howMany++;
                    }
                    else {
                        return [2 /*return*/, res.val];
                    }
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
};
export function getValidQueryWindow() {
    return true;
}
export function setValidQueryWindow(n) {
    if (typeof n === 'number') {
        throw Error("Only setValidQueryWindow(true) is supported on Algorand");
    }
}
var isCreateTxn = function (txn) {
    var at = txn['application-transaction'];
    return at ? at['application-id'] === 0 : false;
};
var emptyOptIn = function (txn) {
    var at = txn['application-transaction'];
    var ataa = at && at['application-args'] || [];
    return at ?
        (at['on-completion'] === 'optin' && ataa.length == 0)
        : false;
};
var newEventQueue = function () {
    var getTxns = function (dhead, initArgs, ctime, howMany) { return __awaiter(void 0, void 0, void 0, function () {
        var ApplicationID, indexer, mtime, query, q, res, txns, gtime;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ApplicationID = initArgs.ApplicationID;
                    return [4 /*yield*/, getIndexer()];
                case 1:
                    indexer = _a.sent();
                    mtime = bigNumberToNumber(ctime) + 1;
                    debug(dhead, { ctime: ctime, mtime: mtime });
                    query = indexer.searchForTransactions()
                        .applicationID(ApplicationID)
                        //.txType('appl')
                        .minRound(mtime);
                    q = query;
                    return [4 /*yield*/, doQuery_(dhead, q, howMany)];
                case 2:
                    res = _a.sent();
                    txns = res.transactions.filter(function (x) { return x['tx-type'] === 'appl'; });
                    gtime = bigNumberify(res['current-round']);
                    return [2 /*return*/, { txns: txns, gtime: gtime }];
            }
        });
    }); };
    var getTxnTime = function (x) { return bigNumberify(x['confirmed-round']); };
    return makeEventQueue({
        raw2proc: indexerTxn2RecvTxn,
        alwaysIgnored: emptyOptIn,
        getTxns: getTxns,
        getTxnTime: getTxnTime
    });
};
export var addressEq = stdlib.addressEq, tokenEq = stdlib.tokenEq, digest = stdlib.digest;
export var T_Null = typeDefs.T_Null, T_Bool = typeDefs.T_Bool, T_UInt = typeDefs.T_UInt, T_Tuple = typeDefs.T_Tuple, T_Array = typeDefs.T_Array, T_Contract = typeDefs.T_Contract, T_Object = typeDefs.T_Object, T_Data = typeDefs.T_Data, T_Bytes = typeDefs.T_Bytes, T_Address = typeDefs.T_Address, T_Digest = typeDefs.T_Digest, T_Struct = typeDefs.T_Struct, T_Token = typeDefs.T_Token;
export var randomUInt = (_a = makeRandom(8), _a.randomUInt), hasRandom = _a.hasRandom;
function waitIndexerFromEnv(env) {
    return __awaiter(this, void 0, void 0, function () {
        var ALGO_INDEXER_SERVER, ALGO_INDEXER_PORT, ALGO_INDEXER_TOKEN, port, utbc, rhc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ALGO_INDEXER_SERVER = env.ALGO_INDEXER_SERVER, ALGO_INDEXER_PORT = env.ALGO_INDEXER_PORT, ALGO_INDEXER_TOKEN = env.ALGO_INDEXER_TOKEN;
                    return [4 /*yield*/, waitPort(ALGO_INDEXER_SERVER, ALGO_INDEXER_PORT)];
                case 1:
                    _a.sent();
                    port = ALGO_INDEXER_PORT || undefined;
                    utbc = new UTBC.URLTokenBaseHTTPClient({ 'X-Indexer-API-Token': ALGO_INDEXER_TOKEN }, ALGO_INDEXER_SERVER, port);
                    rhc = new RHC.ReachHTTPClient(utbc, 'indexer', httpEventHandler);
                    return [2 /*return*/, [rhc, new algosdk.Indexer(rhc)]];
            }
        });
    });
}
function waitAlgodClientFromEnv(env) {
    return __awaiter(this, void 0, void 0, function () {
        var ALGO_SERVER, ALGO_PORT, ALGO_TOKEN, port, utbc, rhc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ALGO_SERVER = env.ALGO_SERVER, ALGO_PORT = env.ALGO_PORT, ALGO_TOKEN = env.ALGO_TOKEN;
                    return [4 /*yield*/, waitPort(ALGO_SERVER, ALGO_PORT)];
                case 1:
                    _a.sent();
                    port = ALGO_PORT || undefined;
                    utbc = new UTBC.URLTokenBaseHTTPClient({ 'X-Algo-API-Token': ALGO_TOKEN }, ALGO_SERVER, port);
                    rhc = new RHC.ReachHTTPClient(utbc, 'algodv2', httpEventHandler);
                    return [2 /*return*/, [rhc, new algosdk.Algodv2(rhc)]];
            }
        });
    });
}
;
var makeProviderByWallet = function (wallet) { return __awaiter(void 0, void 0, void 0, function () {
    var walletOpts, enabledNetwork, enabledAccounts, enabled, algod_bc, indexer_bc, algodClient, indexer, getDefaultAddress, signAndPostTxns, isIsolatedNetwork, nodeWriteOnly;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                debug("making provider with wallet");
                walletOpts = { 'network': process.env['ALGO_NETWORK'] };
                if (!(wallet.enableNetwork === undefined && wallet.enableAccounts === undefined)) return [3 /*break*/, 2];
                return [4 /*yield*/, wallet.enable(walletOpts)];
            case 1:
                enabled = _a.sent();
                enabledNetwork = enabled;
                enabledAccounts = enabled;
                return [3 /*break*/, 5];
            case 2:
                if (!(wallet.enableNetwork === undefined || wallet.enableAccounts === undefined)) return [3 /*break*/, 3];
                throw new Error('must have enableNetwork AND enableAccounts OR neither');
            case 3: return [4 /*yield*/, wallet.enableNetwork(walletOpts)];
            case 4:
                enabledNetwork = _a.sent();
                _a.label = 5;
            case 5:
                void enabledNetwork;
                return [4 /*yield*/, wallet.getAlgodv2Client()];
            case 6:
                algod_bc = _a.sent();
                return [4 /*yield*/, wallet.getIndexerClient()];
            case 7:
                indexer_bc = _a.sent();
                algodClient = new algosdk.Algodv2(algod_bc);
                indexer = new algosdk.Indexer(indexer_bc);
                getDefaultAddress = function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(enabledAccounts === undefined)) return [3 /*break*/, 2];
                                if (wallet.enableAccounts === undefined) {
                                    throw new Error('impossible: no wallet.enableAccounts');
                                }
                                return [4 /*yield*/, wallet.enableAccounts(walletOpts)];
                            case 1:
                                enabledAccounts = _a.sent();
                                if (enabledAccounts === undefined) {
                                    throw new Error('Could not enable accounts');
                                }
                                _a.label = 2;
                            case 2: return [2 /*return*/, enabledAccounts.accounts[0]];
                        }
                    });
                }); };
                signAndPostTxns = wallet.signAndPostTxns;
                isIsolatedNetwork = truthyEnv(process.env['REACH_ISOLATED_NETWORK']);
                nodeWriteOnly = truthyEnv(process.env.ALGO_NODE_WRITE_ONLY);
                return [2 /*return*/, { algod_bc: algod_bc, indexer_bc: indexer_bc, indexer: indexer, algodClient: algodClient, nodeWriteOnly: nodeWriteOnly, getDefaultAddress: getDefaultAddress, isIsolatedNetwork: isIsolatedNetwork, signAndPostTxns: signAndPostTxns }];
        }
    });
}); };
export var setWalletFallback = function (wf) {
    if (!window.algorand) {
        window.algorand = wf();
    }
};
var doWalletFallback_signOnly = function (opts, getAddr, signTxns) {
    var p = undefined;
    var enableNetwork = function (eopts) { return __awaiter(void 0, void 0, void 0, function () {
        var base;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    void (eopts);
                    base = opts['providerEnv'];
                    if (base) {
                        // XXX Is it a bad idea to update the process.env? This is to get
                        // ALGO_NODE_WRITE_ONLY from here to makeProviderByWallet
                        if (typeof base === 'string') {
                            // @ts-ignore
                            updateProcessEnv(providerEnvByName(base));
                        }
                        else {
                            updateProcessEnv(base);
                        }
                    }
                    return [4 /*yield*/, makeProviderByEnv(process.env)];
                case 1:
                    p = _a.sent();
                    return [2 /*return*/, {}];
            }
        });
    }); };
    var enableAccounts = function (eopts) { return __awaiter(void 0, void 0, void 0, function () {
        var addr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    void (eopts);
                    return [4 /*yield*/, getAddr()];
                case 1:
                    addr = _a.sent();
                    return [2 /*return*/, { accounts: [addr] }];
            }
        });
    }); };
    var enable = function (eopts) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, enableNetwork(eopts)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, enableAccounts(eopts)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getAlgodv2Client = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!p) {
                throw new Error("must call enable");
            }
            ;
            return [2 /*return*/, p.algod_bc];
        });
    }); };
    var getIndexerClient = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!p) {
                throw new Error("must call enable");
            }
            ;
            return [2 /*return*/, p.indexer_bc];
        });
    }); };
    var signAndPostTxns = function (txns, sopts) { return __awaiter(void 0, void 0, void 0, function () {
        var to_sign, signed, _a, stxns, bs;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!p) {
                        throw new Error("must call enable");
                    }
                    ;
                    void (sopts);
                    debug("fallBack: signAndPostTxns", { txns: txns });
                    to_sign = [];
                    txns.forEach(function (txn) {
                        if (!txn.stxn) {
                            to_sign.push(txn.txn);
                        }
                    });
                    debug("fallBack: signAndPostTxns", { to_sign: to_sign });
                    if (!(to_sign.length == 0)) return [3 /*break*/, 1];
                    _a = [];
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, signTxns(to_sign)];
                case 2:
                    _a = _b.sent();
                    _b.label = 3;
                case 3:
                    signed = _a;
                    debug("fallBack: signAndPostTxns", { signed: signed });
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
                    debug("fallBack: signAndPostTxns", bs);
                    return [4 /*yield*/, p.algodClient.sendRawTransaction(bs)["do"]()];
                case 4:
                    _b.sent();
                    return [2 /*return*/, {}];
            }
        });
    }); };
    return { enable: enable, enableNetwork: enableNetwork, enableAccounts: enableAccounts, getAlgodv2Client: getAlgodv2Client, getIndexerClient: getIndexerClient, signAndPostTxns: signAndPostTxns };
};
var walletFallback_mnemonic = function (opts) { return function () {
    debug("using mnemonic wallet fallback");
    var getAddr = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, window.prompt("Please paste the address of your account:")];
        });
    }); };
    var signTxns = function (txns) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, txns.map(function (ts) {
                    var t = decodeB64Txn(ts);
                    var addr = txnFromAddress(t);
                    var mn = window.prompt("Please paste the mnemonic for the address, ".concat(addr, ". It will not be saved."));
                    var acc = algosdk.mnemonicToSecretKey(mn);
                    return doSignTxnToB64(t, acc.sk);
                })];
        });
    }); };
    return doWalletFallback_signOnly(opts, getAddr, signTxns);
}; };
var walletFallback_MyAlgoWallet = function (MyAlgoConnect, opts) { return function () {
    debug("using MyAlgoWallet wallet fallback");
    // Workaround for known webpack issue w/ MAW 1.1.2 & earlier
    // https://github.com/randlabs/myalgo-connect/issues/27
    if (!window.Buffer)
        window.Buffer = Buffer;
    // @ts-ignore
    var mac = new MyAlgoConnect();
    // MyAlgoConnect uses a global popup object for managing, so we need to
    // guarantee there is only one in flight at a time.
    var lock = new Lock();
    var getAddr = function () { return __awaiter(void 0, void 0, void 0, function () {
        var accts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lock.runWith(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, mac.connect({ shouldSelectOneAccount: true })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
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
                    debug("MAW signTransaction ->", txns);
                    return [4 /*yield*/, lock.runWith(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, mac.signTransaction(txns)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                case 1:
                    stxns = _a.sent();
                    debug("MAW signTransaction <-", stxns);
                    return [2 /*return*/, stxns.map(function (sts) { return Buffer.from(sts.blob).toString('base64'); })];
            }
        });
    }); };
    return doWalletFallback_signOnly(opts, getAddr, signTxns);
}; };
var walletFallback_WalletConnect = function (WalletConnect, opts) { return function () {
    debug("using WalletConnect wallet fallback");
    var wc = new WalletConnect();
    return doWalletFallback_signOnly(opts, (function () { return wc.getAddr(); }), (function (ts) { return wc.signTxns(ts); }));
}; };
export var walletFallback = function (opts) {
    debug("using wallet fallback with", opts);
    var mac = opts.MyAlgoConnect;
    if (mac) {
        return walletFallback_MyAlgoWallet(mac, opts);
    }
    var wc = opts.WalletConnect;
    if (wc) {
        return walletFallback_WalletConnect(wc, opts);
    }
    // This could be implemented with walletFallback_signOnly and the residue
    // from the old version.
    //  return walletFallback_AlgoSigner(opts);
    return walletFallback_mnemonic(opts);
};
export var getProvider = (_b = __read(replaceableThunk(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!window.algorand) return [3 /*break*/, 2];
                return [4 /*yield*/, makeProviderByWallet(window.algorand)];
            case 1: 
            // @ts-ignore
            return [2 /*return*/, _a.sent()];
            case 2:
                debug("making default provider based on process.env");
                return [4 /*yield*/, makeProviderByEnv(process.env)];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); }), 2), _b[0]), setProvider = _b[1];
var getAlgodClient = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, getProvider()];
        case 1: return [2 /*return*/, (_a.sent()).algodClient];
    }
}); }); };
var getIndexer = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, getProvider()];
        case 1: return [2 /*return*/, (_a.sent()).indexer];
    }
}); }); };
var nodeCanRead = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, getProvider()];
        case 1: return [2 /*return*/, ((_a.sent()).nodeWriteOnly === false)];
    }
}); }); };
var ensureNodeCanRead = function () { return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
    switch (_b.label) {
        case 0:
            _a = assert;
            return [4 /*yield*/, nodeCanRead()];
        case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent(), "node can read"])];
    }
}); }); };
var localhostProviderEnv = {
    ALGO_SERVER: 'http://localhost',
    ALGO_PORT: '4180',
    ALGO_TOKEN: rawDefaultToken,
    ALGO_INDEXER_SERVER: 'http://localhost',
    ALGO_INDEXER_PORT: '8980',
    ALGO_INDEXER_TOKEN: rawDefaultItoken,
    REACH_ISOLATED_NETWORK: 'yes',
    ALGO_NODE_WRITE_ONLY: 'no'
};
function envDefaultsALGO(env) {
    var e_5, _a;
    var denv = localhostProviderEnv;
    // @ts-ignore
    var ret = {};
    try {
        for (var _b = __values(['ALGO_SERVER', 'ALGO_PORT', 'ALGO_TOKEN', 'ALGO_INDEXER_SERVER', 'ALGO_INDEXER_PORT', 'ALGO_INDEXER_TOKEN', 'REACH_ISOLATED_NETWORK', 'ALGO_NODE_WRITE_ONLY']), _c = _b.next(); !_c.done; _c = _b.next()) {
            var f = _c.value;
            // @ts-ignore
            ret[f] = envDefault(env[f], denv[f]);
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return ret;
}
;
function makeProviderByEnv(env) {
    return __awaiter(this, void 0, void 0, function () {
        var fullEnv, _a, algod_bc, algodClient, _b, indexer_bc, indexer, isIsolatedNetwork, nodeWriteOnly, errmsg, getDefaultAddress, signAndPostTxns;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    debug("makeProviderByEnv", env);
                    fullEnv = envDefaultsALGO(env);
                    debug("makeProviderByEnv defaulted", fullEnv);
                    return [4 /*yield*/, waitAlgodClientFromEnv(fullEnv)];
                case 1:
                    _a = __read.apply(void 0, [_c.sent(), 2]), algod_bc = _a[0], algodClient = _a[1];
                    return [4 /*yield*/, waitIndexerFromEnv(fullEnv)];
                case 2:
                    _b = __read.apply(void 0, [_c.sent(), 2]), indexer_bc = _b[0], indexer = _b[1];
                    isIsolatedNetwork = truthyEnv(fullEnv.REACH_ISOLATED_NETWORK);
                    nodeWriteOnly = truthyEnv(fullEnv.ALGO_NODE_WRITE_ONLY);
                    errmsg = function (s) {
                        return "Providers created by environment ".concat(s, ". Calling setProviderByEnv or setProviderByName removes this capability. Try removing calls to those functions.");
                    };
                    getDefaultAddress = function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            throw new Error(errmsg("do not have default addresses"));
                        });
                    }); };
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
                                        throw new Error(errmsg("cannot interactively sign"));
                                    });
                                    bs = stxns.map(function (stxn) { return Buffer.from(stxn, 'base64'); });
                                    debug("signAndPostTxns", bs);
                                    return [4 /*yield*/, algodClient.sendRawTransaction(bs)["do"]()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    return [2 /*return*/, { algod_bc: algod_bc, indexer_bc: indexer_bc, algodClient: algodClient, indexer: indexer, nodeWriteOnly: nodeWriteOnly, isIsolatedNetwork: isIsolatedNetwork, getDefaultAddress: getDefaultAddress, signAndPostTxns: signAndPostTxns }];
            }
        });
    });
}
;
export function setProviderByEnv(env) {
    setProvider(makeProviderByEnv(env));
}
;
function randlabsProviderEnv(net) {
    var prefix = net === 'MainNet' ? '' : "".concat(net.toLowerCase(), ".");
    var RANDLABS_BASE = "".concat(prefix, "algoexplorerapi.io");
    return {
        ALGO_SERVER: "https://node.".concat(RANDLABS_BASE),
        ALGO_PORT: '',
        ALGO_TOKEN: '',
        // TODO: update to just indexer.
        ALGO_INDEXER_SERVER: "https://algoindexer.".concat(RANDLABS_BASE),
        ALGO_INDEXER_PORT: '',
        ALGO_INDEXER_TOKEN: '',
        REACH_ISOLATED_NETWORK: 'no',
        ALGO_NODE_WRITE_ONLY: 'yes'
    };
}
export function providerEnvByName(pn) {
    switch (pn) {
        case 'MainNet': return randlabsProviderEnv('MainNet');
        case 'TestNet': return randlabsProviderEnv('TestNet');
        case 'BetaNet': return randlabsProviderEnv('BetaNet');
        case 'randlabs/MainNet': return randlabsProviderEnv('MainNet');
        case 'randlabs/TestNet': return randlabsProviderEnv('TestNet');
        case 'randlabs/BetaNet': return randlabsProviderEnv('BetaNet');
        case 'LocalHost': return localhostProviderEnv;
        default: throw Error("Unrecognized provider name: ".concat(pn));
    }
}
export function setProviderByName(pn) {
    return setProviderByEnv(providerEnvByName(pn));
}
// eslint-disable-next-line max-len
var rawFaucetDefaultMnemonic = 'frown slush talent visual weather bounce evil teach tower view fossil trip sauce express moment sea garbage pave monkey exercise soap lawn army above dynamic';
export var getFaucet = (_c = __read(replaceableThunk(function () { return __awaiter(void 0, void 0, void 0, function () {
    var FAUCET;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                FAUCET = algosdk.mnemonicToSecretKey(envDefault(process.env.ALGO_FAUCET_PASSPHRASE, rawFaucetDefaultMnemonic));
                return [4 /*yield*/, connectAccount(FAUCET)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); }), 2), _c[0]), setFaucet = _c[1];
var str2note = function (x) { return new Uint8Array(Buffer.from(x)); };
var NOTE_Reach_str = "Reach ".concat(VERSION);
var NOTE_Reach = str2note(NOTE_Reach_str);
var NOTE_Reach_tag = function (tag) { return tag ? str2note(NOTE_Reach_str + " ".concat(tag, ")")) : NOTE_Reach; };
export var makeTransferTxn = function (from, to, value, token, ps, closeTo, tag) {
    if (closeTo === void 0) { closeTo = undefined; }
    if (tag === void 0) { tag = undefined; }
    var valuen = bigNumberToBigInt(value);
    var note = NOTE_Reach_tag(tag);
    var txn = token ?
        algosdk.makeAssetTransferTxnWithSuggestedParams(from, to, closeTo, undefined, valuen, note, bigNumberToNumber(token), ps)
        :
            algosdk.makePaymentTxnWithSuggestedParams(from, to, valuen, closeTo, note, ps);
    return txn;
};
export var transfer = function (from, to, value, token, tag) {
    if (token === void 0) { token = undefined; }
    if (tag === void 0) { tag = undefined; }
    return __awaiter(void 0, void 0, void 0, function () {
        var sender, receiver, valuebn, ps, txn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sender = from.networkAccount;
                    receiver = extractAddr(to);
                    valuebn = bigNumberify(value);
                    return [4 /*yield*/, getTxnParams('transfer')];
                case 1:
                    ps = _a.sent();
                    txn = toWTxn(makeTransferTxn(sender.addr, receiver, valuebn, token, ps, undefined, tag));
                    return [4 /*yield*/, sign_and_send_sync("transfer ".concat(j2s(from), " ").concat(j2s(to), " ").concat(valuebn), sender, txn)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
;
var makeLogRep = function (evt, tys) {
    var hLen = 4;
    var tyns = tys.map(function (ty) { return ty.netName; });
    var sig = "".concat(evt, "(").concat(tyns.join(','), ")");
    var hu = sha512_256(sig);
    var hp = hu.slice(0, hLen * 2); // hu is hex nibbles
    var trunc = function (x) { return ui8h(base64ToUI8A(x).slice(0, hLen)); };
    debug("makeLogRep", { evt: evt, tyns: tyns, sig: sig, hu: hu, hp: hp });
    var parse = function (log) {
        if (trunc(log) !== hp) {
            return undefined;
        }
        debug("parse", { log: log });
        // @ts-ignore
        var _a = __read(T_Tuple(__spreadArray([bytestringyNet(hLen)], __read(tys), false)).fromNet(reNetify(log))), logb = _a[0], pd = _a.slice(1);
        debug("parse", { logb: logb, pd: pd });
        return pd;
    };
    var parse0 = function (txn) {
        if (txn.logs.length == 0) {
            return undefined;
        }
        var log = txn.logs[0];
        return parse(log);
    };
    var parse0b = function (txn) { return parse0(txn) !== undefined; };
    return { parse: parse, parse0: parse0, parse0b: parse0b };
};
var reachEvent = function (i) { return "_reach_e".concat(i); };
var makeHasLogFor = function (i, tys) {
    debug("hasLogFor", i, tys);
    var lr = makeLogRep(reachEvent(i), tys);
    return lr.parse0b;
};
/** @description base64->hex->arrayify */
var reNetify = function (x) {
    var s = Buffer.from(x, 'base64').toString('hex');
    return ethers.utils.arrayify('0x' + s);
};
var getAccountInfo = function (a) { return __awaiter(void 0, void 0, void 0, function () {
    var dhead, client, res_1, e_6, indexer, q, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dhead = 'getAccountInfo';
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, ensureNodeCanRead()];
            case 2:
                _a.sent();
                return [4 /*yield*/, getAlgodClient()];
            case 3:
                client = _a.sent();
                return [4 /*yield*/, client.accountInformation(a)["do"]()];
            case 4:
                res_1 = (_a.sent());
                debug(dhead, 'node', res_1);
                return [2 /*return*/, res_1];
            case 5:
                e_6 = _a.sent();
                debug(dhead, 'node err', e_6);
                return [3 /*break*/, 6];
            case 6: return [4 /*yield*/, getIndexer()];
            case 7:
                indexer = _a.sent();
                q = indexer.lookupAccountByID(a);
                return [4 /*yield*/, doQuery_(dhead, q)];
            case 8:
                res = _a.sent();
                debug(dhead, res);
                return [2 /*return*/, res.account];
        }
    });
}); };
var getAssetInfo = function (a) { return __awaiter(void 0, void 0, void 0, function () {
    var dhead, indexer, q, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dhead = 'getAssetInfo';
                return [4 /*yield*/, getIndexer()];
            case 1:
                indexer = _a.sent();
                q = indexer.lookupAssetByID(a);
                return [4 /*yield*/, doQuery_(dhead, q)];
            case 2:
                res = _a.sent();
                debug(dhead, res);
                return [2 /*return*/, res.asset];
        }
    });
}); };
var getApplicationInfoM = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var dhead, client, res_2, e_7, indexer, q, res;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                dhead = 'getApplicationInfo';
                _c.label = 1;
            case 1:
                _c.trys.push([1, 5, , 6]);
                return [4 /*yield*/, ensureNodeCanRead()];
            case 2:
                _c.sent();
                return [4 /*yield*/, getAlgodClient()];
            case 3:
                client = _c.sent();
                return [4 /*yield*/, client.getApplicationByID(id)["do"]()];
            case 4:
                res_2 = (_c.sent());
                debug(dhead, 'node', res_2);
                return [2 /*return*/, { val: res_2 }];
            case 5:
                e_7 = _c.sent();
                debug(dhead, 'node err', e_7);
                if (((_b = (_a = e_7 === null || e_7 === void 0 ? void 0 : e_7.response) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.message) === 'application does not exist') {
                    return [2 /*return*/, { exn: e_7 }];
                }
                return [3 /*break*/, 6];
            case 6: return [4 /*yield*/, getIndexer()];
            case 7:
                indexer = _c.sent();
                q = indexer.lookupApplications(id);
                return [4 /*yield*/, doQueryM_(dhead, q)];
            case 8:
                res = _c.sent();
                debug(dhead, 'indexer', res);
                return [2 /*return*/, 'exn' in res ? res : { val: res.val.application }];
        }
    });
}); };
export var connectAccount = function (networkAccount) { return __awaiter(void 0, void 0, void 0, function () {
    function setDebugLabel(newLabel) {
        label = newLabel;
        // @ts-ignore
        return this;
    }
    var thisAcc, label, pks, selfAddress, iam, contract, me_na, tokenAccepted, tokenAccept, tokenMetadata;
    return __generator(this, function (_a) {
        thisAcc = networkAccount;
        label = thisAcc.addr.substring(2, 6);
        pks = T_Address.canonicalize(thisAcc);
        debug(label, 'connectAccount');
        selfAddress = function () {
            return pks;
        };
        iam = function (some_addr) {
            if (some_addr === pks) {
                return some_addr;
            }
            else {
                throw Error("I should be ".concat(some_addr, ", but am ").concat(pks));
            }
        };
        contract = function (bin, givenInfoP) {
            ensureConnectorAvailable(bin, 'ALGO', reachBackendVersion, reachAlgoBackendVersion);
            must_be_supported(bin);
            var _a = bin._Connectors.ALGO, stateSize = _a.stateSize, stateKeys = _a.stateKeys, mapDataKeys = _a.mapDataKeys, mapDataSize = _a.mapDataSize, ABI = _a.ABI;
            var hasMaps = mapDataKeys > 0;
            var mapDataTy = bin._getMaps({ reachStdlib: stdlib }).mapDataTy;
            var emptyMapDataTy = T_Bytes(mapDataTy.netSize);
            var emptyMapData = 
            // This is a bunch of Nones
            mapDataTy.fromNet(emptyMapDataTy.toNet(emptyMapDataTy.canonicalize('')));
            debug({ emptyMapData: emptyMapData });
            var makeGetC = function (setupViewArgs, eq) {
                var getInfo = setupViewArgs.getInfo;
                var _theC = undefined;
                return function () { return __awaiter(void 0, void 0, void 0, function () {
                    var ctcInfo, _a, ApplicationID, Deployer, ctcAddr, getLocalState, didOptIn, doOptIn, ensuredOptIn, ensureOptIn, getAppState, getGlobalState, canIWin, isin, isIsolatedNetwork, viewMapRef;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                debug(label, 'getC');
                                if (_theC) {
                                    debug(label, 'getC', 'ret');
                                    return [2 /*return*/, _theC];
                                }
                                debug(label, 'getC', 'wait');
                                return [4 /*yield*/, getInfo()];
                            case 1:
                                ctcInfo = _b.sent();
                                return [4 /*yield*/, stdVerifyContract(setupViewArgs, (function () { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, verifyContract_(label, ctcInfo, bin, eq)];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        });
                                    }); }))];
                            case 2:
                                _a = _b.sent(), ApplicationID = _a.ApplicationID, Deployer = _a.Deployer;
                                if (!eq.isInited()) {
                                    eq.init({ ApplicationID: ApplicationID });
                                    eq.pushIgnore(isCreateTxn);
                                }
                                debug(label, 'getC', { ApplicationID: ApplicationID });
                                ctcAddr = algosdk.getApplicationAddress(ApplicationID);
                                debug(label, 'getC', { ctcAddr: ctcAddr });
                                getLocalState = function (a) { return __awaiter(void 0, void 0, void 0, function () {
                                    var ai, alss, als;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, getAccountInfo(a)];
                                            case 1:
                                                ai = _a.sent();
                                                debug("getLocalState", ai);
                                                alss = ai['apps-local-state'] || [];
                                                als = alss.find(function (x) { return (x.id === ApplicationID); });
                                                debug("getLocalState", als);
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
                                    var dhead, _a, _b, _c, _d, _e, _f;
                                    return __generator(this, function (_g) {
                                        switch (_g.label) {
                                            case 0:
                                                dhead = "".concat(label, " doOptIn");
                                                debug(dhead);
                                                _a = sign_and_send_sync;
                                                _b = [dhead,
                                                    thisAcc];
                                                _c = toWTxn;
                                                _e = (_d = algosdk).makeApplicationOptInTxn;
                                                _f = [thisAcc.addr];
                                                return [4 /*yield*/, getTxnParams(dhead)];
                                            case 1: return [4 /*yield*/, _a.apply(void 0, _b.concat([_c.apply(void 0, [_e.apply(_d, _f.concat([_g.sent(), ApplicationID,
                                                            undefined, undefined, undefined, undefined,
                                                            NOTE_Reach]))])]))];
                                            case 2:
                                                _g.sent();
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
                                getAppState = function () { return __awaiter(void 0, void 0, void 0, function () {
                                    var lab, appInfoM, appInfo, appSt;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                lab = "getAppState";
                                                return [4 /*yield*/, getApplicationInfoM(ApplicationID)];
                                            case 1:
                                                appInfoM = _a.sent();
                                                if ('exn' in appInfoM) {
                                                    debug(lab, { e: appInfoM.exn });
                                                    return [2 /*return*/, undefined];
                                                }
                                                appInfo = appInfoM.val;
                                                appSt = appInfo['params']['global-state'];
                                                debug(lab, { appSt: appSt });
                                                return [2 /*return*/, appSt];
                                        }
                                    });
                                }); };
                                getGlobalState = function (appSt_g) { return __awaiter(void 0, void 0, void 0, function () {
                                    var appSt, _a, gsbs, gty;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                _a = appSt_g;
                                                if (_a) return [3 /*break*/, 2];
                                                return [4 /*yield*/, getAppState()];
                                            case 1:
                                                _a = (_b.sent());
                                                _b.label = 2;
                                            case 2:
                                                appSt = _a;
                                                if (!appSt) {
                                                    return [2 /*return*/, undefined];
                                                }
                                                gsbs = readStateBytes('', [], appSt);
                                                if (!gsbs) {
                                                    return [2 /*return*/, undefined];
                                                }
                                                gty = T_Tuple([T_UInt, T_UInt, T_Address]);
                                                // @ts-ignore
                                                return [2 /*return*/, gty.fromNet(gsbs)];
                                        }
                                    });
                                }); };
                                canIWin = function (lct) { return __awaiter(void 0, void 0, void 0, function () {
                                    var gs, r;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (lct.eq(0)) {
                                                    return [2 /*return*/, true];
                                                }
                                                return [4 /*yield*/, getGlobalState()];
                                            case 1:
                                                gs = _a.sent();
                                                r = !gs || lct.eq(gs[1]);
                                                debug("canIWin", { lct: lct, gs: gs, r: r });
                                                return [2 /*return*/, r];
                                        }
                                    });
                                }); };
                                return [4 /*yield*/, getProvider()];
                            case 3:
                                isin = (_b.sent()).isIsolatedNetwork;
                                isIsolatedNetwork = function () { return isin; };
                                viewMapRef = function (mapi, a) { return __awaiter(void 0, void 0, void 0, function () {
                                    var ls, mbs, md, mr;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                debug('viewMapRef', { mapi: mapi, a: a });
                                                return [4 /*yield*/, getLocalState(cbr2algo_addr(a))];
                                            case 1:
                                                ls = _a.sent();
                                                if (ls === undefined) {
                                                    return [2 /*return*/, ['None', null]];
                                                }
                                                debug('viewMapRef', { ls: ls });
                                                mbs = recoverSplitBytes('m', mapDataSize, mapDataKeys, ls);
                                                debug('viewMapRef', { mbs: mbs });
                                                if (mbs === undefined) {
                                                    return [2 /*return*/, ['None', null]];
                                                }
                                                md = mapDataTy.fromNet(mbs);
                                                debug('viewMapRef', { md: md });
                                                mr = md[mapi];
                                                assert(mr !== undefined, 'viewMapRef mr undefined');
                                                return [2 /*return*/, mr];
                                        }
                                    });
                                }); };
                                return [2 /*return*/, (_theC = { ApplicationID: ApplicationID, ctcAddr: ctcAddr, Deployer: Deployer, getAppState: getAppState, getGlobalState: getGlobalState, ensureOptIn: ensureOptIn, canIWin: canIWin, isIsolatedNetwork: isIsolatedNetwork, viewMapRef: viewMapRef })];
                        }
                    });
                }); };
            };
            var getState_ = function (getC, lookup) { return __awaiter(void 0, void 0, void 0, function () {
                var _a, getAppState, getGlobalState, appSt, gs, vvn, vi, vtys, vty, vvs;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, getC()];
                        case 1:
                            _a = _b.sent(), getAppState = _a.getAppState, getGlobalState = _a.getGlobalState;
                            return [4 /*yield*/, getAppState()];
                        case 2:
                            appSt = _b.sent();
                            if (!appSt) {
                                throw Error("getState: no appSt");
                            }
                            return [4 /*yield*/, getGlobalState(appSt)];
                        case 3:
                            gs = _b.sent();
                            if (!gs) {
                                throw Error("getState: no gs");
                            }
                            vvn = recoverSplitBytes('v', stateSize, stateKeys, appSt);
                            if (vvn === undefined) {
                                throw Error("getState: no vvn");
                            }
                            vi = gs[0];
                            vtys = lookup(vi);
                            vty = T_Tuple(vtys);
                            vvs = vty.fromNet(vvn);
                            debug("getState_", { vvn: vvn, vvs: vvs });
                            return [2 /*return*/, vvs];
                    }
                });
            }); };
            var _setup = function (setupArgs) {
                var setInfo = setupArgs.setInfo, setTrustedVerifyResult = setupArgs.setTrustedVerifyResult;
                var eq = newEventQueue();
                var getC = makeGetC(setupArgs, eq);
                // Returns address of a Reach contract
                var getContractAddress = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var ctcAddr;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getC()];
                            case 1:
                                ctcAddr = (_a.sent()).ctcAddr;
                                return [2 /*return*/, T_Address.canonicalize(ctcAddr)];
                        }
                    });
                }); };
                var getContractInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var ApplicationID;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getC()];
                            case 1:
                                ApplicationID = (_a.sent()).ApplicationID;
                                return [2 /*return*/, ApplicationID];
                        }
                    });
                }); };
                var getState = function (vibne, vtys) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                debug('getState');
                                return [4 /*yield*/, getState_(getC, function (vibna) {
                                        if (vibne.eq(vibna)) {
                                            return vtys;
                                        }
                                        throw apiStateMismatchError(bin, vibne, vibna);
                                    })];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); };
                var apiMapRef = function (i, ty) { return function (f) { return __awaiter(void 0, void 0, void 0, function () {
                    var viewMapRef;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                void (ty);
                                return [4 /*yield*/, getC()];
                            case 1:
                                viewMapRef = (_a.sent()).viewMapRef;
                                return [4 /*yield*/, viewMapRef(i, f)];
                            case 2: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); }; };
                var sendrecv = function (srargs) { return __awaiter(void 0, void 0, void 0, function () {
                    var funcNum, evt_cnt, lct, tys, args, pay, out_tys, onlyIf, soloSend, timeoutAt, sim_p, isCtor, doRecv, funcName, dhead, trustedRecv, _a, appApproval, appClear, extraPages, Deployer_1, createRes, _b, _c, _d, _e, _f, _g, ApplicationID_1, ctcInfo, _h, ApplicationID, ctcAddr, Deployer, ensureOptIn, canIWin, isIsolatedNetwork, _j, value, toks, _k, _svs, msg, _l, _svs_tys, msg_tys, fake_res, sim_r, isHalt, mapRefs, _loop_1, state_1;
                    return __generator(this, function (_m) {
                        switch (_m.label) {
                            case 0:
                                funcNum = srargs.funcNum, evt_cnt = srargs.evt_cnt, lct = srargs.lct, tys = srargs.tys, args = srargs.args, pay = srargs.pay, out_tys = srargs.out_tys, onlyIf = srargs.onlyIf, soloSend = srargs.soloSend, timeoutAt = srargs.timeoutAt, sim_p = srargs.sim_p;
                                isCtor = (funcNum === 0);
                                doRecv = function (didSend, waitIfNotPresent, msg) { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                debug(dhead, "doRecv", msg);
                                                if (!didSend && lct.eq(0)) {
                                                    throw new Error("API call failed: ".concat(msg));
                                                }
                                                return [4 /*yield*/, recv({ funcNum: funcNum, evt_cnt: evt_cnt, out_tys: out_tys, didSend: didSend, waitIfNotPresent: waitIfNotPresent, timeoutAt: timeoutAt })];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); };
                                funcName = "m".concat(funcNum);
                                dhead = "".concat(label, ": sendrecv ").concat(funcName, " ").concat(timeoutAt);
                                if (!!onlyIf) return [3 /*break*/, 2];
                                return [4 /*yield*/, doRecv(false, true, "onlyIf false")];
                            case 1: return [2 /*return*/, _m.sent()];
                            case 2:
                                trustedRecv = function (txn) { return __awaiter(void 0, void 0, void 0, function () {
                                    var didSend, correctStep;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                didSend = true;
                                                correctStep = makeHasLogFor(funcNum, out_tys);
                                                eq.pushIgnore(function (x) { return correctStep(indexerTxn2RecvTxn(x)); });
                                                return [4 /*yield*/, recvFrom({ dhead: dhead, out_tys: out_tys, didSend: didSend, funcNum: funcNum, txn: txn })];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); };
                                if (!isCtor) return [3 /*break*/, 5];
                                debug(dhead, 'deploy');
                                must_be_supported(bin);
                                _a = bin._Connectors.ALGO, appApproval = _a.appApproval, appClear = _a.appClear, extraPages = _a.extraPages;
                                debug(dhead, "deploy", { extraPages: extraPages });
                                Deployer_1 = thisAcc.addr;
                                _b = sign_and_send_sync;
                                _c = ['ApplicationCreate',
                                    thisAcc];
                                _d = toWTxn;
                                _f = (_e = algosdk).makeApplicationCreateTxn;
                                _g = [Deployer_1];
                                return [4 /*yield*/, getTxnParams(dhead)];
                            case 3: return [4 /*yield*/, _b.apply(void 0, _c.concat([_d.apply(void 0, [_f.apply(_e, _g.concat([_m.sent(), algosdk.OnApplicationComplete.NoOpOC,
                                            base64ToUI8A(appApproval),
                                            base64ToUI8A(appClear),
                                            appLocalStateNumUInt, appLocalStateNumBytes + mapDataKeys,
                                            appGlobalStateNumUInt, appGlobalStateNumBytes + stateKeys,
                                            undefined, undefined, undefined, undefined,
                                            NOTE_Reach, undefined, undefined, extraPages]))])]))];
                            case 4:
                                createRes = _m.sent();
                                ApplicationID_1 = createRes['created-application-index'];
                                if (!ApplicationID_1) {
                                    throw Error("No created-application-index in ".concat(j2s(createRes)));
                                }
                                debug(label, "created", { ApplicationID: ApplicationID_1 });
                                ctcInfo = ApplicationID_1;
                                setTrustedVerifyResult({ ApplicationID: ApplicationID_1, Deployer: Deployer_1 });
                                setInfo(ctcInfo);
                                _m.label = 5;
                            case 5: return [4 /*yield*/, getC()];
                            case 6:
                                _h = _m.sent(), ApplicationID = _h.ApplicationID, ctcAddr = _h.ctcAddr, Deployer = _h.Deployer, ensureOptIn = _h.ensureOptIn, canIWin = _h.canIWin, isIsolatedNetwork = _h.isIsolatedNetwork;
                                _j = __read(pay, 2), value = _j[0], toks = _j[1];
                                void (toks); // <-- rely on simulation because of ordering
                                debug(dhead, '--- START');
                                _k = __read(argsSplit(args, evt_cnt), 2), _svs = _k[0], msg = _k[1];
                                _l = __read(argsSplit(tys, evt_cnt), 2), _svs_tys = _l[0], msg_tys = _l[1];
                                void (_svs);
                                void (_svs_tys);
                                fake_res = {
                                    didSend: true,
                                    didTimeout: false,
                                    data: msg,
                                    time: bigNumberify(0),
                                    secs: bigNumberify(0),
                                    value: value,
                                    from: pks,
                                    getOutput: (function (o_mode, o_lab, o_ctc, o_val) { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            void (o_mode);
                                            void (o_lab);
                                            void (o_ctc);
                                            return [2 /*return*/, o_val];
                                        });
                                    }); })
                                };
                                return [4 /*yield*/, sim_p(fake_res)];
                            case 7:
                                sim_r = _m.sent();
                                debug(dhead, '--- SIMULATE', sim_r);
                                if (isCtor) {
                                    sim_r.txns.unshift({
                                        kind: 'to',
                                        amt: minimumBalance,
                                        tok: undefined
                                    });
                                }
                                isHalt = sim_r.isHalt;
                                if (!hasMaps) return [3 /*break*/, 9];
                                return [4 /*yield*/, ensureOptIn()];
                            case 8:
                                _m.sent();
                                _m.label = 9;
                            case 9:
                                mapRefs = sim_r.mapRefs;
                                _loop_1 = function () {
                                    var params, _o, _p, _q, mapAccts, recordAccount_, recordAccount, assetsArr, recordAsset, extraFees, howManyMoreFees, txnExtraTxns, sim_i, processSimTxn, mapAcctsVal, assetsVal, actual_args, actual_tys, safe_args, whichAppl, txnAppl, rtxns, wtxns, res, e_8, jes, _r, _s;
                                    return __generator(this, function (_t) {
                                        switch (_t.label) {
                                            case 0: return [4 /*yield*/, getTxnParams(dhead)];
                                            case 1:
                                                params = _t.sent();
                                                // We add one, because the firstRound field is actually the current
                                                // round, which we couldn't possibly be in, because it already
                                                // happened.
                                                debug(dhead, '--- TIMECHECK', { params: params, timeoutAt: timeoutAt });
                                                return [4 /*yield*/, checkTimeout(isIsolatedNetwork, getTimeSecs, timeoutAt, params.firstRound + 1)];
                                            case 2:
                                                if (!_t.sent()) return [3 /*break*/, 4];
                                                _o = {};
                                                return [4 /*yield*/, doRecv(false, false, "timeout")];
                                            case 3: return [2 /*return*/, (_o.value = _t.sent(), _o)];
                                            case 4:
                                                _p = !soloSend;
                                                if (!_p) return [3 /*break*/, 6];
                                                return [4 /*yield*/, canIWin(lct)];
                                            case 5:
                                                _p = !(_t.sent());
                                                _t.label = 6;
                                            case 6:
                                                if (!_p) return [3 /*break*/, 8];
                                                _q = {};
                                                return [4 /*yield*/, doRecv(false, false, "cannot win ".concat(lct))];
                                            case 7: return [2 /*return*/, (_q.value = _t.sent(), _q)];
                                            case 8:
                                                debug(dhead, '--- ASSEMBLE w/', params);
                                                mapAccts = [];
                                                recordAccount_ = function (addr) {
                                                    if (addressEq(thisAcc.addr, addr)) {
                                                        return;
                                                    }
                                                    var addrIdx = mapAccts.findIndex(function (other) { return addressEq(other, addr); });
                                                    var present = addrIdx !== -1;
                                                    if (present) {
                                                        return;
                                                    }
                                                    mapAccts.push(addr);
                                                };
                                                recordAccount = function (caddr) {
                                                    debug("recordAccount", { caddr: caddr });
                                                    var addr = cbr2algo_addr(caddr);
                                                    debug("recordAccount", { addr: addr });
                                                    recordAccount_(addr);
                                                };
                                                mapRefs.forEach(recordAccount);
                                                assetsArr = [];
                                                recordAsset = function (tok) {
                                                    if (tok) {
                                                        var tokn = bigNumberToNumber(tok);
                                                        if (!assetsArr.includes(tokn)) {
                                                            assetsArr.push(tokn);
                                                        }
                                                    }
                                                };
                                                extraFees = 0;
                                                howManyMoreFees = 0;
                                                txnExtraTxns = [];
                                                sim_i = 0;
                                                processSimTxn = function (t) {
                                                    var txn;
                                                    if (t.kind === 'tokenNew') {
                                                        processSimTxn({
                                                            kind: 'to',
                                                            amt: minimumBalance,
                                                            tok: undefined
                                                        });
                                                        howManyMoreFees++;
                                                        return;
                                                    }
                                                    else if (t.kind === 'tokenBurn') {
                                                        // There's no burning on Algorand
                                                        return;
                                                    }
                                                    else if (t.kind === 'tokenDestroy') {
                                                        recordAsset(t.tok);
                                                        howManyMoreFees++;
                                                        return;
                                                    }
                                                    else {
                                                        var tok = t.tok;
                                                        var amt = bigNumberify(0);
                                                        var from = ctcAddr;
                                                        var to = ctcAddr;
                                                        var closeTo = undefined;
                                                        if (t.kind === 'from') {
                                                            recordAsset(tok);
                                                            recordAccount(t.to);
                                                            howManyMoreFees++;
                                                            return;
                                                        }
                                                        else if (t.kind === 'init') {
                                                            processSimTxn({
                                                                kind: 'to',
                                                                amt: minimumBalance,
                                                                tok: undefined
                                                            });
                                                            recordAsset(tok);
                                                            howManyMoreFees++;
                                                            return;
                                                        }
                                                        else if (t.kind === 'halt') {
                                                            if (t.tok) {
                                                                recordAsset(t.tok);
                                                            }
                                                            recordAccount_(Deployer);
                                                            howManyMoreFees++;
                                                            return;
                                                        }
                                                        else if (t.kind === 'to') {
                                                            from = thisAcc.addr;
                                                            to = ctcAddr;
                                                            amt = t.amt;
                                                        }
                                                        else if (t.kind === 'info') {
                                                            var tok_1 = t.tok;
                                                            recordAsset(tok_1);
                                                            return;
                                                        }
                                                        else {
                                                            assert(false, 'sim txn kind');
                                                        }
                                                        if (amt.eq(0)) {
                                                            return;
                                                        }
                                                        txn = makeTransferTxn(from, to, amt, tok, params, closeTo, sim_i++);
                                                    }
                                                    extraFees += txn.fee;
                                                    txn.fee = 0;
                                                    txnExtraTxns.push(txn);
                                                };
                                                sim_r.txns.forEach(processSimTxn);
                                                debug(dhead, 'txnExtraTxns', txnExtraTxns);
                                                debug(dhead, { howManyMoreFees: howManyMoreFees, extraFees: extraFees });
                                                extraFees += MinTxnFee * howManyMoreFees;
                                                debug(dhead, { extraFees: extraFees });
                                                debug(dhead, 'MAP', { mapAccts: mapAccts });
                                                if (mapAccts.length > MaxAppTxnAccounts) {
                                                    throw Error("Application references too many local state cells in one step. Reach should catch this problem statically.");
                                                }
                                                mapAcctsVal = (mapAccts.length === 0) ? undefined : mapAccts;
                                                assetsVal = (assetsArr.length === 0) ? undefined : assetsArr;
                                                debug(dhead, { assetsArr: assetsArr, assetsVal: assetsVal });
                                                actual_args = [lct, msg];
                                                actual_tys = [T_UInt, T_Tuple(msg_tys)];
                                                debug(dhead, '--- ARGS =', actual_args);
                                                safe_args = actual_args.map(
                                                // @ts-ignore
                                                function (m, i) { return actual_tys[i].toNet(m); });
                                                safe_args.unshift(new Uint8Array([funcNum]));
                                                safe_args.unshift(new Uint8Array([0]));
                                                safe_args.forEach(function (x) {
                                                    if (!(x instanceof Uint8Array)) {
                                                        // The types say this is impossible now,
                                                        // but we'll leave it in for a while just in case...
                                                        throw Error("expect safe program argument, got ".concat(j2s(x)));
                                                    }
                                                });
                                                debug(dhead, '--- PREPARE:', safe_args.map(ui8h));
                                                whichAppl = isHalt ?
                                                    // We are treating it like any party can delete the application, but the docs say it may only be possible for the creator. The code appears to not care: https://github.com/algorand/go-algorand/blob/0e9cc6b0c2ddc43c3cfa751d61c1321d8707c0da/ledger/apply/application.go#L589
                                                    algosdk.makeApplicationDeleteTxn :
                                                    algosdk.makeApplicationNoOpTxn;
                                                txnAppl = whichAppl(thisAcc.addr, params, ApplicationID, safe_args, mapAcctsVal, undefined, assetsVal, NOTE_Reach);
                                                txnAppl.fee += extraFees;
                                                rtxns = __spreadArray(__spreadArray([], __read(txnExtraTxns), false), [txnAppl], false);
                                                debug(dhead, "assigning", { rtxns: rtxns });
                                                algosdk.assignGroupID(rtxns);
                                                wtxns = rtxns.map(toWTxn);
                                                debug(dhead, 'signing', { wtxns: wtxns });
                                                res = void 0;
                                                _t.label = 9;
                                            case 9:
                                                _t.trys.push([9, 11, , 14]);
                                                return [4 /*yield*/, signSendAndConfirm(thisAcc, wtxns)];
                                            case 10:
                                                res = _t.sent();
                                                return [3 /*break*/, 14];
                                            case 11:
                                                e_8 = _t.sent();
                                                jes = j2s(e_8);
                                                debug(dhead, 'FAIL', e_8, jes);
                                                if (!!soloSend) return [3 /*break*/, 13];
                                                // If there is no soloSend, then someone else "won", so let's
                                                // listen for their message
                                                debug(dhead, 'LOST');
                                                _r = {};
                                                return [4 /*yield*/, doRecv(false, false, jes)];
                                            case 12: return [2 /*return*/, (_r.value = _t.sent(), _r)];
                                            case 13:
                                                if (timeoutAt) {
                                                    // If there can be a timeout, then keep waiting for it
                                                    debug(dhead, "CONTINUE");
                                                    return [2 /*return*/, "continue"];
                                                }
                                                else {
                                                    // Otherwise, something bad is happening
                                                    throw Error("".concat(label, " failed to call ").concat(funcName, ": ").concat(jes));
                                                }
                                                return [3 /*break*/, 14];
                                            case 14:
                                                debug(dhead, 'SUCCESS', res);
                                                _s = {};
                                                return [4 /*yield*/, trustedRecv(res)];
                                            case 15: return [2 /*return*/, (_s.value = _t.sent(), _s)];
                                        }
                                    });
                                };
                                _m.label = 10;
                            case 10:
                                if (!true) return [3 /*break*/, 12];
                                return [5 /*yield**/, _loop_1()];
                            case 11:
                                state_1 = _m.sent();
                                if (typeof state_1 === "object")
                                    return [2 /*return*/, state_1.value];
                                return [3 /*break*/, 10];
                            case 12: return [2 /*return*/];
                        }
                    });
                }); };
                var recvFrom = function (rfargs) { return __awaiter(void 0, void 0, void 0, function () {
                    var dhead, funcNum, out_tys, didSend, txn, theRound, theSecs, lr, ctc_args, fromAddr, from, getOutput;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                dhead = rfargs.dhead, funcNum = rfargs.funcNum, out_tys = rfargs.out_tys, didSend = rfargs.didSend, txn = rfargs.txn;
                                debug(dhead, 'txn', txn);
                                theRound = txn['confirmed-round'];
                                return [4 /*yield*/, retryLoop([dhead, 'getTimeSecs'], function () { return getTimeSecs(bigNumberify(theRound - 0)); })];
                            case 1:
                                theSecs = _a.sent();
                                lr = makeLogRep(reachEvent(funcNum), out_tys);
                                ctc_args = lr.parse0(txn);
                                debug(dhead, { ctc_args: ctc_args });
                                if (ctc_args === undefined) {
                                    throw Error("impossible: txn doesn't have right log as first");
                                }
                                fromAddr = txn['sender'];
                                from = T_Address.canonicalize({ addr: fromAddr });
                                debug(dhead, { from: from, fromAddr: fromAddr });
                                getOutput = function (o_mode, o_lab, o_ctc, o_val) { return __awaiter(void 0, void 0, void 0, function () {
                                    var f_ctc, _a, _b, l, lb, ln, ls, ld, o;
                                    var e_9, _c;
                                    return __generator(this, function (_d) {
                                        debug("getOutput", { o_mode: o_mode, o_lab: o_lab, o_ctc: o_ctc, o_val: o_val });
                                        f_ctc = T_Tuple([T_UInt, o_ctc]);
                                        try {
                                            for (_a = __values(txn['logs']), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                l = _b.value;
                                                lb = reNetify(l);
                                                ln = T_UInt.fromNet(lb);
                                                ls = "v".concat(ln);
                                                debug("getOutput", { l: l, lb: lb, ln: ln, ls: ls });
                                                if (ls === o_lab) {
                                                    ld = f_ctc.fromNet(lb);
                                                    o = ld[1];
                                                    debug("getOutput", { ld: ld, o: o });
                                                    return [2 /*return*/, o];
                                                }
                                            }
                                        }
                                        catch (e_9_1) { e_9 = { error: e_9_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                                            }
                                            finally { if (e_9) throw e_9.error; }
                                        }
                                        throw Error("no log for ".concat(o_lab));
                                    });
                                }); };
                                return [2 /*return*/, {
                                        didSend: didSend,
                                        didTimeout: false,
                                        data: ctc_args,
                                        time: bigNumberify(theRound),
                                        secs: bigNumberify(theSecs),
                                        from: from,
                                        getOutput: getOutput
                                    }];
                        }
                    });
                }); };
                var recv = function (rargs) { return __awaiter(void 0, void 0, void 0, function () {
                    var funcNum, out_tys, didSend, timeoutAt, waitIfNotPresent, funcName, dhead, isIsolatedNetwork, didTimeout, res, correctStep, good, txn;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                funcNum = rargs.funcNum, out_tys = rargs.out_tys, didSend = rargs.didSend, timeoutAt = rargs.timeoutAt, waitIfNotPresent = rargs.waitIfNotPresent;
                                funcName = "m".concat(funcNum);
                                dhead = "".concat(label, ": recv ").concat(funcName, " ").concat(timeoutAt);
                                debug(dhead, 'start');
                                return [4 /*yield*/, getC()];
                            case 1:
                                isIsolatedNetwork = (_a.sent()).isIsolatedNetwork;
                                didTimeout = function (cr_bn) { return __awaiter(void 0, void 0, void 0, function () {
                                    var cr, crp, r;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                cr = bigNumberToNumber(cr_bn);
                                                debug(dhead, 'TIMECHECK', { timeoutAt: timeoutAt, cr_bn: cr_bn, cr: cr });
                                                crp = cr + 1;
                                                return [4 /*yield*/, checkTimeout(isIsolatedNetwork, getTimeSecs, timeoutAt, crp)];
                                            case 1:
                                                r = _a.sent();
                                                debug(dhead, 'TIMECHECK', { r: r, waitIfNotPresent: waitIfNotPresent });
                                                if (!(!r && waitIfNotPresent)) return [3 /*break*/, 3];
                                                return [4 /*yield*/, waitUntilTime(bigNumberify(crp))];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3: return [2 /*return*/, r];
                                        }
                                    });
                                }); };
                                return [4 /*yield*/, eq.peq(dhead, didTimeout)];
                            case 2:
                                res = _a.sent();
                                debug(dhead, "res", res);
                                correctStep = makeHasLogFor(funcNum, out_tys);
                                good = (!res.timeout) && correctStep(res.txn);
                                if (!good) return [3 /*break*/, 5];
                                return [4 /*yield*/, eq.deq(dhead)];
                            case 3:
                                _a.sent();
                                txn = res.txn;
                                return [4 /*yield*/, recvFrom({ dhead: dhead, out_tys: out_tys, didSend: didSend, funcNum: funcNum, txn: txn })];
                            case 4: return [2 /*return*/, _a.sent()];
                            case 5:
                                if (timeoutAt) {
                                    debug(dhead, "timeout");
                                    return [2 /*return*/, { didTimeout: true }];
                                }
                                else {
                                    throw Error("".concat(dhead, ": impossible: not good, but no timeout"));
                                }
                                _a.label = 6;
                            case 6: return [2 /*return*/];
                        }
                    });
                }); };
                var getBalance = function (mtok) {
                    if (mtok === void 0) { mtok = false; }
                    return __awaiter(void 0, void 0, void 0, function () {
                        var ctcAddr, bal, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getC()];
                                case 1:
                                    ctcAddr = (_a.sent()).ctcAddr;
                                    return [4 /*yield*/, balanceOf({ addr: ctcAddr }, mtok)];
                                case 2:
                                    bal = _a.sent();
                                    result = bal.lt(minimumBalance) ? bigNumberify(0) : bal.sub(minimumBalance);
                                    debug("Balance of contract:", result);
                                    return [2 /*return*/, result];
                            }
                        });
                    });
                };
                return { getContractInfo: getContractInfo, getContractAddress: getContractAddress, getBalance: getBalance, getState: getState, sendrecv: sendrecv, recv: recv, apiMapRef: apiMapRef };
            };
            var readStateBytes = function (prefix, key, src) {
                debug({ prefix: prefix, key: key });
                var ik = base64ify(new Uint8Array(key));
                debug({ ik: ik });
                var ste = src.find(function (x) { return x.key === ik; });
                debug({ ste: ste });
                if (ste === undefined) {
                    return undefined;
                }
                ;
                var st = ste.value;
                debug({ st: st });
                if (st.bytes === undefined) {
                    return undefined;
                }
                ;
                var bsi = base64ToUI8A(st.bytes);
                debug({ bsi: bsi });
                return bsi;
            };
            var recoverSplitBytes = function (prefix, size, howMany, src) {
                debug('recoverSplitBytes', { prefix: prefix, size: size, howMany: howMany, src: src });
                var bs = new Uint8Array(size);
                var offset = 0;
                for (var i = 0; i < howMany; i++) {
                    var bsi = readStateBytes(prefix, [i], src);
                    if (!bsi || bsi.length == 0) {
                        // We are at a state where we don't need all the keys, so they
                        // haven't all been set, bs is initialized to 0, so this should be
                        // fine.
                        return bs;
                    }
                    bs.set(bsi, offset);
                    offset += bsi.length;
                }
                return bs;
            };
            var setupView = function (setupViewArgs) {
                var eq = newEventQueue();
                var getC = makeGetC(setupViewArgs, eq);
                var viewLib = {
                    viewMapRef: function (mapi, a) { return __awaiter(void 0, void 0, void 0, function () {
                        var viewMapRef;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getC()];
                                case 1:
                                    viewMapRef = (_a.sent()).viewMapRef;
                                    return [4 /*yield*/, viewMapRef(mapi, a)];
                                case 2: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); }
                };
                var getView1 = function (vs, v, k, vim, isSafe) {
                    if (isSafe === void 0) { isSafe = true; }
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return __awaiter(void 0, void 0, void 0, function () {
                            var decode, vi_1, vvs, vres, e_10;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        debug('getView1', v, k, args);
                                        decode = vim.decode;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 4, , 5]);
                                        vi_1 = 0;
                                        return [4 /*yield*/, getState_(getC, function (vibna) {
                                                vi_1 = bigNumberToNumber(vibna);
                                                var vtys = vs[vi_1];
                                                if (!vtys) {
                                                    throw Error("no views for state ".concat(vibna));
                                                }
                                                return vtys;
                                            })];
                                    case 2:
                                        vvs = _a.sent();
                                        return [4 /*yield*/, decode(vi_1, vvs, args)];
                                    case 3:
                                        vres = _a.sent();
                                        debug({ vres: vres });
                                        return [2 /*return*/, isSafe ? ['Some', vres] : vres];
                                    case 4:
                                        e_10 = _a.sent();
                                        debug("getView1", v, k, 'error', e_10);
                                        if (isSafe) {
                                            return [2 /*return*/, ['None', null]];
                                        }
                                        else {
                                            throw Error("View ".concat(v, ".").concat(k, " is not set."));
                                        }
                                        return [3 /*break*/, 5];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        });
                    };
                };
                return { getView1: getView1, viewLib: viewLib };
            };
            var setupEvents = function (setupArgs) {
                var createEventStream = function (evt, tys) {
                    var eq = newEventQueue();
                    var getC = makeGetC(setupArgs, eq);
                    var getTxnTime = function (r) { return bigNumberify(r['confirmed-round']); };
                    var sync = function () { return __awaiter(void 0, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, getC()];
                                case 1:
                                    _a = _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    var getLogs = function (r) { return r['logs']; };
                    var lr = makeLogRep(evt, tys);
                    var parseLog = lr.parse;
                    return makeEventStream({
                        eq: eq,
                        getTxnTime: getTxnTime,
                        sync: sync,
                        getNetworkTime: getNetworkTime,
                        getLogs: getLogs,
                        parseLog: parseLog
                    });
                };
                return { createEventStream: createEventStream };
            };
            var ABI_sigs = ABI.sigs;
            var getABI = function (isFull) { return ({
                sigs: (isFull ? ABI_sigs : ABI_sigs.map(function (name) { return ({ name: name }); }).filter(stdABIFilter).map(function (_a) {
                    var name = _a.name;
                    return name;
                }))
            }); };
            return stdContract({ bin: bin, getABI: getABI, waitUntilTime: waitUntilTime, waitUntilSecs: waitUntilSecs, selfAddress: selfAddress, iam: iam, stdlib: stdlib, setupView: setupView, setupEvents: setupEvents, _setup: _setup, givenInfoP: givenInfoP });
        };
        me_na = { networkAccount: networkAccount };
        tokenAccepted = function (token) { return __awaiter(void 0, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debug("tokenAccepted", token);
                        return [4 /*yield*/, balanceOfM(me_na, token)];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, (r !== false)];
                }
            });
        }); };
        tokenAccept = function (token) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, tokenAccepted(token)];
                    case 1:
                        if (!!(_a.sent())) return [3 /*break*/, 3];
                        debug("tokenAccept", token);
                        // @ts-ignore
                        return [4 /*yield*/, transfer(me_na, me_na, 0, token)];
                    case 2:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        tokenMetadata = function (token) { return __awaiter(void 0, void 0, void 0, function () {
            var tokenRes, tokenInfo, p_t, p, name, symbol, url, metadata, supply, decimals;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debug("tokenMetadata", token);
                        return [4 /*yield*/, getAssetInfo(bigNumberToNumber(token))];
                    case 1:
                        tokenRes = _a.sent();
                        debug({ tokenRes: tokenRes });
                        tokenInfo = tokenRes['params'];
                        debug({ tokenInfo: tokenInfo });
                        p_t = function (t, x) {
                            return x ? t.fromNet(reNetify(x)) : undefined;
                        };
                        p = function (n, x) {
                            return p_t(T_Bytes(n), x);
                        };
                        name = p(32, tokenInfo['name-b64']);
                        symbol = p(8, tokenInfo['unit-name-b64']);
                        url = p(96, tokenInfo['url-b64']);
                        metadata = (function () {
                            var mh = tokenInfo['metadata-hash'];
                            try {
                                return p(32, mh);
                            }
                            catch (e) {
                                debug("tokenMetadata metadata-hash", "".concat(e));
                                return p_t(T_Digest, mh);
                            }
                        })();
                        supply = bigNumberify(tokenInfo['total']);
                        decimals = bigNumberify(tokenInfo['decimals']);
                        return [2 /*return*/, { name: name, symbol: symbol, url: url, metadata: metadata, supply: supply, decimals: decimals }];
                }
            });
        }); };
        return [2 /*return*/, stdAccount({ networkAccount: networkAccount, getAddress: selfAddress, stdlib: stdlib, setDebugLabel: setDebugLabel, tokenAccepted: tokenAccepted, tokenAccept: tokenAccept, tokenMetadata: tokenMetadata, contract: contract })];
    });
}); };
export var minimumBalanceOf = function (acc) { return __awaiter(void 0, void 0, void 0, function () {
    var addr, ai, createdAppCount, optinAppCount, numByteSlice, numUInt, assetCount, accMinBalance;
    var _a, _b, _c, _d, _e, _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                addr = extractAddr(acc);
                return [4 /*yield*/, getAccountInfo(addr)];
            case 1:
                ai = _h.sent();
                if (ai.amount === 0) {
                    return [2 /*return*/, bigNumberify(0)];
                }
                createdAppCount = bigNumberify(((_a = ai['created-apps']) !== null && _a !== void 0 ? _a : []).length);
                optinAppCount = bigNumberify(((_b = ai['apps-local-state']) !== null && _b !== void 0 ? _b : []).length);
                numByteSlice = bigNumberify((_d = ((_c = ai['apps-total-schema']) !== null && _c !== void 0 ? _c : {})['num-byte-slice']) !== null && _d !== void 0 ? _d : 0);
                numUInt = bigNumberify((_f = ((_e = ai['apps-total-schema']) !== null && _e !== void 0 ? _e : {})['num-uint']) !== null && _f !== void 0 ? _f : 0);
                assetCount = bigNumberify(((_g = ai.assets) !== null && _g !== void 0 ? _g : []).length);
                accMinBalance = bigNumberify(0)
                    .add(assetCount.mul(appFlatOptInMinBalance))
                    .add(schemaMinBalancePerEntry.add(schemaUintMinBalance).mul(numUInt))
                    .add(schemaMinBalancePerEntry.add(schemaBytesMinBalance).mul(numByteSlice))
                    .add(appFlatParamsMinBalance.mul(createdAppCount))
                    .add(appFlatOptInMinBalance.mul(optinAppCount))
                    .add(minimumBalance);
                debug("minBalance", accMinBalance);
                return [2 /*return*/, accMinBalance];
        }
    });
}); };
var balancesOfM = function (acc, tokens) { return __awaiter(void 0, void 0, void 0, function () {
    var addr, accountInfo, accountAssets, balanceOfSingleToken;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                addr = extractAddr(acc);
                return [4 /*yield*/, getAccountInfo(addr)];
            case 1:
                accountInfo = _a.sent();
                accountAssets = accountInfo.assets || [];
                balanceOfSingleToken = function (token) {
                    if (token) {
                        var tokenId_1 = bigNumberify(token);
                        var tokenAsset = accountAssets.find(function (asset) { return tokenId_1.eq(asset['asset-id']); });
                        return tokenAsset ? bigNumberify(tokenAsset['amount']) : false;
                    }
                    else {
                        return bigNumberify(accountInfo.amount);
                    }
                };
                return [2 /*return*/, tokens.map(balanceOfSingleToken)];
        }
    });
}); };
export var balancesOf = function (acc, tokens) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, balancesOfM(acc, tokens)];
            case 1: return [2 /*return*/, (_a.sent()).map(function (bal) {
                    if (bal === false) {
                        return bigNumberify(0);
                    }
                    else {
                        return bal;
                    }
                })];
        }
    });
}); };
var balanceOfM = function (acc, token) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, balancesOfM(acc, [token || null])];
            case 1: return [2 /*return*/, (_a.sent())[0]];
        }
    });
}); };
export var balanceOf = function (acc, token) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, balancesOf(acc, [token || null])];
            case 1: return [2 /*return*/, (_a.sent())[0]];
        }
    });
}); };
export var createAccount = function () { return __awaiter(void 0, void 0, void 0, function () {
    var networkAccount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                networkAccount = algosdk.generateAccount();
                return [4 /*yield*/, connectAccount(networkAccount)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var canFundFromFaucet = function () { return __awaiter(void 0, void 0, void 0, function () {
    var faucet, dhead, txnParams, act, exp, fbal;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getFaucet()];
            case 1:
                faucet = _a.sent();
                dhead = 'canFundFromFaucet';
                debug(dhead, 'check genesis');
                return [4 /*yield*/, getTxnParams(dhead)];
            case 2:
                txnParams = _a.sent();
                act = txnParams.genesisID;
                exp = 'devnet-v1';
                if (act !== exp) {
                    debug(dhead, "expected '".concat(exp, "' !== actual '").concat(act, "'"));
                    return [2 /*return*/, false];
                }
                debug(dhead, 'check balance');
                return [4 /*yield*/, balanceOf(faucet)];
            case 3:
                fbal = _a.sent();
                debug(dhead, "faucet balance = ".concat(formatCurrency(fbal, 4), " ").concat(standardUnit));
                return [2 /*return*/, gt(fbal, 0)];
        }
    });
}); };
export var fundFromFaucet = function (account, value) { return __awaiter(void 0, void 0, void 0, function () {
    var faucet, tag;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getFaucet()];
            case 1:
                faucet = _a.sent();
                debug('fundFromFaucet');
                tag = Math.round(Math.random() * (Math.pow(2, 32)));
                return [4 /*yield*/, transfer(faucet, account, value, undefined, tag)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
export var newTestAccount = function (startingBalance) { return __awaiter(void 0, void 0, void 0, function () {
    var account;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, createAccount()];
            case 1:
                account = _a.sent();
                return [4 /*yield*/, fundFromFaucet(account, startingBalance)];
            case 2:
                _a.sent();
                return [2 /*return*/, account];
        }
    });
}); };
export var newTestAccounts = make_newTestAccounts(newTestAccount).parallel;
/** @description the display name of the standard unit of currency for the network */
export var standardUnit = 'ALGO';
/** @description the display name of the atomic (smallest) unit of currency for the network */
export var atomicUnit = 'μALGO';
/**
 * @description  Parse currency by network
 * @param amt  value in the {@link standardUnit} for the token.
 * @returns  the amount in the {@link atomicUnit} of the token.
 * @example  parseCurrency(100).toString() // => '100000000'
 * @example  parseCurrency(100, 3).toString() // => '100000'
 */
export function parseCurrency(amt, decimals) {
    if (decimals === void 0) { decimals = 6; }
    if (!(Number.isInteger(decimals) && 0 <= decimals)) {
        throw Error("Expected decimals to be a nonnegative integer, but got ".concat(decimals, "."));
    }
    // @ts-ignore
    var numericAmt = isBigNumber(amt) ? amt.toNumber()
        : typeof amt === 'string' ? parseFloat(amt)
            : typeof amt === 'bigint' ? Number(amt)
                : amt;
    var value = numericAmt * (Math.pow(10, decimals));
    return bigNumberify(Math.floor(value));
}
export var minimumBalance = bigNumberify(MinBalance);
var schemaMinBalancePerEntry = bigNumberify(SchemaMinBalancePerEntry);
var schemaBytesMinBalance = bigNumberify(SchemaBytesMinBalance);
var schemaUintMinBalance = bigNumberify(SchemaUintMinBalance);
var appFlatParamsMinBalance = bigNumberify(AppFlatParamsMinBalance);
var appFlatOptInMinBalance = bigNumberify(AppFlatOptInMinBalance);
/**
 * @description  Format currency by network
 */
export function formatCurrency(amt, decimals) {
    if (decimals === void 0) { decimals = 6; }
    return handleFormat(amt, decimals, 6);
}
export function getDefaultAccount() {
    return __awaiter(this, void 0, void 0, function () {
        var addr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getProvider()];
                case 1: return [4 /*yield*/, (_a.sent()).getDefaultAddress()];
                case 2:
                    addr = _a.sent();
                    return [4 /*yield*/, connectAccount({ addr: addr })];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
/**
 * @param mnemonic 25 words, space-separated
 */
export var newAccountFromMnemonic = function (mnemonic) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, connectAccount(algosdk.mnemonicToSecretKey(mnemonic))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
/**
 * @param secret a Uint8Array, or its hex string representation
 */
export var newAccountFromSecret = function (secret) { return __awaiter(void 0, void 0, void 0, function () {
    var sk, mnemonic;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sk = ethers.utils.arrayify(secret);
                mnemonic = algosdk.secretKeyToMnemonic(sk);
                return [4 /*yield*/, newAccountFromMnemonic(mnemonic)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var getNetworkTime = function () { return __awaiter(void 0, void 0, void 0, function () {
    var indexer, hc;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getIndexer()];
            case 1:
                indexer = _a.sent();
                return [4 /*yield*/, indexer.makeHealthCheck()["do"]()];
            case 2:
                hc = _a.sent();
                return [2 /*return*/, bigNumberify(hc['round'])];
        }
    });
}); };
var getTimeSecs = function (now_bn) { return __awaiter(void 0, void 0, void 0, function () {
    var now, client, binfo, e_11, indexer, info;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                now = bigNumberToNumber(now_bn);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 8]);
                return [4 /*yield*/, ensureNodeCanRead()];
            case 2:
                _a.sent();
                return [4 /*yield*/, getAlgodClient()];
            case 3:
                client = _a.sent();
                return [4 /*yield*/, client.block(now)["do"]()];
            case 4:
                binfo = _a.sent();
                //debug(`getTimeSecs`, `node`, binfo);
                return [2 /*return*/, bigNumberify(binfo.block.ts)];
            case 5:
                e_11 = _a.sent();
                debug("getTimeSecs", "node failed", e_11);
                return [4 /*yield*/, getIndexer()];
            case 6:
                indexer = _a.sent();
                return [4 /*yield*/, indexer.lookupBlock(now)["do"]()];
            case 7:
                info = _a.sent();
                debug("getTimeSecs", "indexer", info);
                return [2 /*return*/, bigNumberify(info['timestamp'])];
            case 8: return [2 /*return*/];
        }
    });
}); };
export var getNetworkSecs = function () { return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
    switch (_b.label) {
        case 0:
            _a = getTimeSecs;
            return [4 /*yield*/, getNetworkTime()];
        case 1: return [4 /*yield*/, _a.apply(void 0, [_b.sent()])];
        case 2: return [2 /*return*/, _b.sent()];
    }
}); }); };
var stepTime = function (target) { return __awaiter(void 0, void 0, void 0, function () {
    var now, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!true) return [3 /*break*/, 8];
                return [4 /*yield*/, getNetworkTime()];
            case 1:
                now = _b.sent();
                debug("stepTime", { target: target, now: now });
                if (target.lte(now)) {
                    return [2 /*return*/, now];
                }
                return [4 /*yield*/, getProvider()];
            case 2:
                if (!(_b.sent()).isIsolatedNetwork) return [3 /*break*/, 5];
                _a = fundFromFaucet;
                return [4 /*yield*/, getFaucet()];
            case 3: return [4 /*yield*/, _a.apply(void 0, [_b.sent(), 0])];
            case 4:
                _b.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, stdWait()];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7: return [3 /*break*/, 0];
            case 8: return [2 /*return*/];
        }
    });
}); };
export var waitUntilTime = make_waitUntilX('time', getNetworkTime, stepTime);
var stepSecs = function (target) { return __awaiter(void 0, void 0, void 0, function () {
    var now, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                void (target);
                _a = stepTime;
                return [4 /*yield*/, getNetworkTime()];
            case 1: return [4 /*yield*/, _a.apply(void 0, [(_b.sent()).add(1)])];
            case 2:
                now = _b.sent();
                return [4 /*yield*/, getTimeSecs(now)];
            case 3: return [2 /*return*/, _b.sent()];
        }
    });
}); };
export var waitUntilSecs = make_waitUntilX('secs', getNetworkSecs, stepSecs);
export var wait = function (delta, onProgress) { return __awaiter(void 0, void 0, void 0, function () {
    var now;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getNetworkTime()];
            case 1:
                now = _a.sent();
                return [4 /*yield*/, waitUntilTime(now.add(delta), onProgress)];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var appLocalStateNumUInt = 0;
var appLocalStateNumBytes = 0;
var appGlobalStateNumUInt = 0;
var appGlobalStateNumBytes = 1;
export var verifyContract = function (info, bin) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, verifyContract_('', info, bin, newEventQueue())];
    });
}); };
var verifyContract_ = function (label, info, bin, eq) { return __awaiter(void 0, void 0, void 0, function () {
    var ai_bn, ApplicationID, _a, appApproval, appClear, mapDataKeys, stateKeys, dhead, chk, chkeq, appInfoM, appInfo, appInfo_p, Deployer, appInfo_LocalState, appInfo_GlobalState, iat, allocRound;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                must_be_supported(bin);
                ai_bn = protect(T_Contract, info);
                ApplicationID = bigNumberToNumber(ai_bn);
                _a = bin._Connectors.ALGO, appApproval = _a.appApproval, appClear = _a.appClear, mapDataKeys = _a.mapDataKeys, stateKeys = _a.stateKeys;
                dhead = "".concat(label, ": verifyContract");
                chk = function (p, msg) {
                    if (!p) {
                        throw Error("".concat(dhead, " failed: ").concat(msg));
                    }
                };
                chkeq = function (a, e, msg) {
                    var as = j2sf(a);
                    var es = j2sf(e);
                    chk(as === es, "".concat(msg, ": expected ").concat(es, ", got ").concat(as));
                };
                return [4 /*yield*/, getApplicationInfoM(ApplicationID)];
            case 1:
                appInfoM = _b.sent();
                if ('exn' in appInfoM) {
                    throw Error("".concat(dhead, " failed: failed to lookup application (").concat(ApplicationID, "): ").concat(j2s(appInfoM.exn)));
                }
                appInfo = appInfoM.val;
                appInfo_p = appInfo['params'];
                debug(dhead, { appInfo_p: appInfo_p });
                chk(appInfo_p !== undefined, "Cannot lookup ApplicationId");
                chkeq(appInfo_p['approval-program'], appApproval, "Approval program does not match Reach backend");
                chkeq(appInfo_p['clear-state-program'], appClear, "ClearState program does not match Reach backend");
                Deployer = appInfo_p['creator'];
                appInfo_LocalState = appInfo_p['local-state-schema'];
                chkeq(appInfo_LocalState['num-byte-slice'], appLocalStateNumBytes + mapDataKeys, "Num of byte-slices in local state schema does not match Reach backend");
                chkeq(appInfo_LocalState['num-uint'], appLocalStateNumUInt, "Num of uints in local state schema does not match Reach backend");
                appInfo_GlobalState = appInfo_p['global-state-schema'];
                chkeq(appInfo_GlobalState['num-byte-slice'], appGlobalStateNumBytes + stateKeys, "Num of byte-slices in global state schema does not match Reach backend");
                chkeq(appInfo_GlobalState['num-uint'], appGlobalStateNumUInt, "Num of uints in global state schema does not match Reach backend");
                chkeq(appInfo['deleted'] === true, false, "Application must not be deleted");
                eq.init({ ApplicationID: ApplicationID });
                return [4 /*yield*/, eq.deq(dhead)];
            case 2:
                iat = _b.sent();
                debug({ iat: iat });
                chkeq(iat['created-application-index'], ApplicationID, 'app created');
                chkeq(iat['application-index'], 0, 'app created');
                allocRound = appInfo['created-at-round'];
                if (allocRound) {
                    chkeq(iat['confirmed-round'], allocRound, 'created on correct round');
                }
                chkeq(iat['approval-program'], appInfo_p['approval-program'], "ApprovalProgram unchanged since creation");
                chkeq(iat['clear-state-program'], appInfo_p['clear-state-program'], "ClearStateProgram unchanged since creation");
                return [2 /*return*/, { ApplicationID: ApplicationID, Deployer: Deployer }];
        }
    });
}); };
/**
 * Formats an account's address in the way users expect to see it.
 * @param acc Account, NetworkAccount, base32-encoded address, or hex-encoded address
 * @returns the address formatted as a base32-encoded string with checksum
 */
export function formatAddress(acc) {
    return addressFromHex(T_Address.canonicalize(acc));
}
export function unsafeGetMnemonic(acc) {
    // @ts-ignore
    var networkAccount = acc.networkAccount || acc;
    if (!networkAccount.sk) {
        throw Error("unsafeGetMnemonic: Secret key not accessible for account");
    }
    return algosdk.secretKeyToMnemonic(networkAccount.sk);
}
var makeAssetCreateTxn = function (creator, supply, decimals, symbol, name, url, metadataHash, clawback, params) {
    return algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
        from: creator,
        total: bigNumberToBigInt(supply),
        decimals: decimals,
        defaultFrozen: false,
        unitName: symbol,
        assetName: name,
        assetURL: url,
        assetMetadataHash: metadataHash,
        clawback: clawback,
        suggestedParams: params
    });
};
export var launchToken = function (accCreator, name, sym, opts) {
    if (opts === void 0) { opts = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var addrCreator, supply, decimals, url, metadataHash, clawback, params, txnResult, assetIndex, id, mint, optOut;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    addrCreator = accCreator.networkAccount.addr;
                    supply = opts.supply ? bigNumberify(opts.supply) : bigNumberify(2).pow(64).sub(1);
                    decimals = (_a = opts.decimals) !== null && _a !== void 0 ? _a : 6;
                    url = (_b = opts.url) !== null && _b !== void 0 ? _b : '';
                    metadataHash = (_c = opts.metadataHash) !== null && _c !== void 0 ? _c : '';
                    clawback = opts.clawback ? cbr2algo_addr(protect(T_Address, opts.clawback)) : undefined;
                    return [4 /*yield*/, getTxnParams('launchToken')];
                case 1:
                    params = _d.sent();
                    return [4 /*yield*/, sign_and_send_sync("launchToken ".concat(j2s(accCreator), " ").concat(name, " ").concat(sym), accCreator.networkAccount, toWTxn(makeAssetCreateTxn(addrCreator, supply, decimals, sym, name, url, metadataHash, clawback, params)))];
                case 2:
                    txnResult = _d.sent();
                    assetIndex = txnResult['created-asset-index'];
                    if (!assetIndex)
                        throw Error("".concat(sym, " no asset-index!"));
                    id = bigNumberify(assetIndex);
                    mint = function (accTo, amt) { return transfer(accCreator, accTo, amt, id); };
                    optOut = function (accFrom, accTo) {
                        if (accTo === void 0) { accTo = accCreator; }
                        return __awaiter(void 0, void 0, void 0, function () {
                            var addrFrom, addrTo, params, optOutTxn;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        addrFrom = accFrom.networkAccount.addr;
                                        addrTo = accTo.networkAccount.addr;
                                        return [4 /*yield*/, getTxnParams('token.optOut')];
                                    case 1:
                                        params = _a.sent();
                                        optOutTxn = makeTransferTxn(addrFrom, addrTo, bigNumberify(0), id, params, addrTo);
                                        return [4 /*yield*/, sign_and_send_sync("token.optOut ".concat(j2s(accFrom), " ").concat(name), accFrom.networkAccount, toWTxn(optOutTxn))];
                                    case 2:
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
};
export var reachStdlib = stdlib;
//# sourceMappingURL=ALGO.js.map