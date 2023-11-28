"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUrls = void 0;
var TransactionUrls;
(function (TransactionUrls) {
    TransactionUrls["CANCEL"] = "https://gateway.arifpay.net/v0/sandbox/checkout/session/cancel/";
    TransactionUrls["ERROR"] = "http://error.com";
    TransactionUrls["NOTIFY"] = "https://gateway.arifpay.net/test/callback";
    TransactionUrls["SUCCESS"] = "http://example.com";
    TransactionUrls["PAYMENT"] = "https://checkout.arifpay.org/checkout/";
    TransactionUrls["CHECKOUT"] = "http://196.189.44.37:2000/api/sandbox/checkout/session";
})(TransactionUrls || (exports.TransactionUrls = TransactionUrls = {}));
//# sourceMappingURL=transactionUrls.enum.js.map