import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsPaymentMethod(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsPaymentMethod',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          // Define your valid payment methods here
          const validPaymentMethods = ['method1', 'method2', 'method3'];

          // Check if all provided payment methods are valid
          return value.every((method: string) =>
            validPaymentMethods.includes(method),
          );
        },
      },
    });
  };
}
