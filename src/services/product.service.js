const ProductRepository = require("../repositories/product.repository");

class ProductService {

    async create(data) {

        const exists = await ProductRepository.findAll();

        const duplicate = exists.find(
            product =>
                product.name.toLowerCase() === data.name.toLowerCase()
        );
        if (duplicate) {
            throw new Error("Product already exists");
        }

        return await ProductRepository.create(data);
    }

    async findAll() {
        return await ProductRepository.findAll();
    }

    async findOne(id) {

        const product = await ProductRepository.findById(id);

        if (!product) {
            throw new Error("Product not found");
        }

        return product;
    }

    async update(id, data) {

        const product = await ProductRepository.findById(id);

        if (!product) {
            throw new Error("Product not found");
        }

        return await ProductRepository.update(id, data);
    }

    async delete(id) {

        const product = await ProductRepository.findById(id);

        if (!product) {
            throw new Error("Product not found");
        }

        return await ProductRepository.delete(id);
    }

}

module.exports = new ProductService();