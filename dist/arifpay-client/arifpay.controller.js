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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArifpayController = void 0;
const common_1 = require("@nestjs/common");
const arifpay_service_1 = require("../arifpay-sdk/arifpay.service");
let ArifpayController = class ArifpayController {
    constructor(arifPayService) {
        this.arifPayService = arifPayService;
    }
    async createCheckoutSession(createCheckoutSession) {
        return this.arifPayService.createCheckoutSession(createCheckoutSession);
    }
};
exports.ArifpayController = ArifpayController;
__decorate([
    (0, common_1.Post)('create-checkout-session'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArifpayController.prototype, "createCheckoutSession", null);
exports.ArifpayController = ArifpayController = __decorate([
    (0, common_1.Controller)('arifpay'),
    __metadata("design:paramtypes", [arifpay_service_1.ArifPayService])
], ArifpayController);
//# sourceMappingURL=arifpay.controller.js.map