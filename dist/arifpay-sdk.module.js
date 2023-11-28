"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ArifpaySDKModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArifpaySDKModule = void 0;
const common_1 = require("@nestjs/common");
const arifpay_service_1 = require("./arifpay.service");
const axios_1 = require("@nestjs/axios");
let ArifpaySDKModule = ArifpaySDKModule_1 = class ArifpaySDKModule {
    static register(apiKey, expiryDate) {
        return {
            module: ArifpaySDKModule_1,
            providers: [
                {
                    provide: arifpay_service_1.ArifPayService,
                    useFactory: (httpService) => {
                        return new arifpay_service_1.ArifPayService(apiKey, expiryDate, httpService);
                    },
                    inject: [axios_1.HttpService],
                },
            ],
            exports: [arifpay_service_1.ArifPayService],
        };
    }
};
exports.ArifpaySDKModule = ArifpaySDKModule;
exports.ArifpaySDKModule = ArifpaySDKModule = ArifpaySDKModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
    })
], ArifpaySDKModule);
//# sourceMappingURL=arifpay-sdk.module.js.map