"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.__esModule = true;
var shared_impl_1 = require("./shared_impl");
function ALGO_MakeWalletConnect(WalletConnect, QRCodeModal) {
    return /** @class */ (function () {
        function WalletConnect_(wc) {
            if (wc === void 0) { wc = false; }
            console.log("AWC ctor");
            this.wc = wc;
            this.connected = new shared_impl_1.Signal();
        }
        WalletConnect_.prototype.ensureWC = function () {
            return __awaiter(this, void 0, void 0, function () {
                var me, onConnect;
                return __generator(this, function (_a) {
                    console.log("AWC ensureWC");
                    if (this.wc) {
                        return [2 /*return*/];
                    }
                    this.wc = new WalletConnect({
                        bridge: "https://bridge.walletconnect.org",
                        qrcodeModal: QRCodeModal
                    });
                    me = this;
                    onConnect = function (err, payload) {
                        console.log("AWC onConnect", { err: err, payload: payload });
                        if (err) {
                            throw err;
                        }
                        me.connected.notify();
                    };
                    this.wc.on("session_update", onConnect);
                    this.wc.on("connect", onConnect);
                    console.log("AWC ensureWC", { me: me });
                    return [2 /*return*/];
                });
            });
        };
        ;
        WalletConnect_.prototype.disconnect = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("AWC killSession");
                            return [4 /*yield*/, this.wc.killSession()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        WalletConnect_.prototype.ensureSession = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureWC()];
                        case 1:
                            _a.sent();
                            if (!!this.wc.connected) return [3 /*break*/, 3];
                            console.log("AWC createSession");
                            return [4 /*yield*/, this.wc.createSession()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            console.log("AWC session exists");
                            this.connected.notify();
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        WalletConnect_.prototype.getAddr = function () {
            return __awaiter(this, void 0, void 0, function () {
                var accts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureSession()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.connected.wait()];
                        case 2:
                            _a.sent();
                            accts = this.wc.accounts;
                            console.log("AWC getAddr", accts);
                            return [2 /*return*/, accts[0]];
                    }
                });
            });
        };
        WalletConnect_.prototype.signTxns = function (txns) {
            return __awaiter(this, void 0, void 0, function () {
                var req, res, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureSession()];
                        case 1:
                            _a.sent();
                            req = {
                                method: "algo_signTxn",
                                params: [txns.map(function (txn) { return ({ txn: txn }); })]
                            };
                            console.log("AWC signTxns ->", req);
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.wc.sendCustomRequest(req)];
                        case 3:
                            res = _a.sent();
                            console.log("AWC signTxns <-", res);
                            return [2 /*return*/, res];
                        case 4:
                            e_1 = _a.sent();
                            console.log("AWC signTxns err", e_1);
                            throw e_1;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        return WalletConnect_;
    }());
}
exports["default"] = ALGO_MakeWalletConnect;
//# sourceMappingURL=ALGO_MakeWalletConnect.js.map