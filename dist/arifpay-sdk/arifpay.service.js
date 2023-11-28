"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArifPayService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const checkout_session_dto_1 = require("./dto/checkout-session.dto");
const transactionUrls_enum_1 = require("./enums/transactionUrls.enum");
const axios_1 = require("@nestjs/axios");
let ArifPayService = class ArifPayService {
    constructor(arifpayApiKey, httpService) {
        this.arifpayApiKey = arifpayApiKey;
        this.httpService = httpService;
    }
    async generateNewNonce() {
        return (0, uuid_1.v4)();
    }
    async validateUserInput(checkoutObj) {
        const result = checkout_session_dto_1.CreateCheckOutSessionDto.safeParse(checkoutObj);
        if (result.success === false) {
            const error = result.error;
            throw new common_1.BadRequestException({
                success: false,
                message: 'Validation failed',
                errors: error.flatten().fieldErrors,
            });
        }
        const data = result.data;
        return data;
    }
    async createCheckoutSession(createCheckoutSession) {
        var _a, _b, _c, _d, _e, _f, _g;
        try {
            await this.validateUserInput(createCheckoutSession);
            let { phone, email, paymentMethods, items, beneficiaries, expireDate } = createCheckoutSession;
            let data = {
                cancelUrl: transactionUrls_enum_1.TransactionUrls.CANCEL,
                phone: phone,
                email: email,
                nonce: await this.generateNewNonce(),
                errorUrl: transactionUrls_enum_1.TransactionUrls.ERROR,
                notifyUrl: transactionUrls_enum_1.TransactionUrls.NOTIFY,
                successUrl: transactionUrls_enum_1.TransactionUrls.SUCCESS,
                paymentMethods: paymentMethods,
                expireDate: expireDate,
                items: items,
                beneficiaries: beneficiaries,
                lang: 'EN',
            };
            const response = await this.httpService.axiosRef.post(transactionUrls_enum_1.TransactionUrls.CHECKOUT, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-arifpay-key': this.arifpayApiKey,
                },
            });
            return response === null || response === void 0 ? void 0 : response.data;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.data.msg) === 'Validation Error') {
                    throw new common_1.HttpException({
                        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                        error: 'There was an error processing the request',
                        message: (_c = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.msg,
                        data: (_e = (_d = error.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.data,
                    }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                }
                else {
                    throw new common_1.HttpException({
                        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                        error: 'There was an error processing the request',
                        message: (_g = (_f = error.response) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.msg,
                    }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        }
    }
};
exports.ArifPayService = ArifPayService;
exports.ArifPayService = ArifPayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String, axios_1.HttpService])
], ArifPayService);
//# sourceMappingURL=arifpay.service.js.map