const Joi = require("joi");

class SchemaValidator {
  // Create Product Validation
    static  CreatesProductchema = Joi.object({
      name: Joi.string()
        .trim()
        .min(3)
        .max(100)
        .required()
        .messages({
          "string.empty": "Product name is required",
          "string.min": "Product name must be at least 3 characters",
          "any.required": "Product name is required",
        }),

      description: Joi.string()
        .allow("")
        .optional(),

      category: Joi.string()
        .trim()
        .required()
        .messages({
          "string.empty": "Category is required",
          "any.required": "Category is required",
        }),

      price: Joi.number()
        .positive()
        .required()
        .messages({
          "number.base": "Price must be a number",
          "number.positive": "Price must be greater than 0",
          "any.required": "Price is required",
        }),

      quantity: Joi.number()
        .integer()
        .min(0)
        .required()
        .messages({
          "number.base": "Quantity must be a number",
          "number.min": "Quantity cannot be negative",
          "any.required": "Quantity is required",
        }),

      image: Joi.string()
        .uri()
        .allow("")
        .optional(),

      status: Joi.boolean().optional(),
    });

   

}

module.exports = SchemaValidator;

