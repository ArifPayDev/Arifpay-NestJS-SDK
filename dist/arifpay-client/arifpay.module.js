"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArifpayModule = void 0;
const common_1 = require("@nestjs/common");
const arifpay_controller_1 = require("./arifpay.controller");
const arifpay_sdk_module_1 = require("../arifpay-sdk.module");
let ArifpayModule = class ArifpayModule {
};
exports.ArifpayModule = ArifpayModule;
exports.ArifpayModule = ArifpayModule = __decorate([
    (0, common_1.Module)({
        imports: [
            arifpay_sdk_module_1.ArifpaySDKModule.register('m2ocgQ8pADsYlM4KUz7x2TKM6FEj5J6F', '2025-02-01T03:45:27'),
        ],
        controllers: [arifpay_controller_1.ArifpayController],
    })
], ArifpayModule);
//# sourceMappingURL=arifpay.module.js.map