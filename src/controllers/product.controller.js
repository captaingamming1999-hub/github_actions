const ProductService = require("../services/product.service");


class ProductController {

    async create(req, res, next) {
        try {

            const product = await ProductService.create(req.body);

            res.status(201).json({
                success: true,
                message: "Product created successfully",
                data: product
            });

        } catch (error) {
            next(error);
        }
    }

    async findAll(req, res, next) {
        try {

            const products = await ProductService.findAll();
            res.status(200).json({
                success: true,
                data: products
            });

        } catch (error) {
            next(error);
        }
    }

    async findOne(req, res, next) {
        try {

            const product = await ProductService.findOne(req.params.id);

            res.status(200).json({
                success: true,
                data: product
            });

        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {

            const product = await ProductService.update(
                req.params.id,
                req.body
            );

            res.status(200).json({
                success: true,
                message: "Product updated successfully",
                data: product
            });

        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {

            await ProductService.delete(req.params.id);

            res.status(200).json({
                success: true,
                message: "Product deleted successfully"
            });

        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ProductController();