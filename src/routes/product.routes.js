const express = require("express");
const Route = express.Router();

const productController = require("../controllers/product.controller");
const Validation = require("../validator");
const SchemaValidator = require("../validator/product.validator");






// Route.get("/product", productController.findAll);
Route.get('/products', productController.findAll)
Route.post("/product/create",Validation.validate(SchemaValidator.CreatesProductchema), productController.create);
Route.get("/product/:id", productController.findOne);
Route.put("/product/:id",Validation.validate(SchemaValidator.CreatesProductchema), productController.update);
Route.delete("/product/:id", productController.delete);




module.exports = Route;