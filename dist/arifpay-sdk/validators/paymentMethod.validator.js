"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPaymentMethod = void 0;
const class_validator_1 = require("class-validator");
function IsPaymentMethod(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsPaymentMethod',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const validPaymentMethods = ['method1', 'method2', 'method3'];
                    return value.every((method) => validPaymentMethods.includes(method));
                },
            },
        });
    };
}
exports.IsPaymentMethod = IsPaymentMethod;
//# sourceMappingURL=paymentMethod.validator.js.map