const request = require("supertest");
const app = require("../src/app");

describe("Product CRUD API", () => {

    let id;

    beforeEach(async () => {

        const response = await request(app)
            .post("/api/product/create")
            .send({
                name: "Laptop",
                description: "HP Laptop",
                category: "Electronics",
                price: 50000,
                quantity: 10
            });

        id = response.body.data._id;

    });

    // Get All Products
    test("Should get all products", async () => {

        const response = await request(app)
            .get("/api/product");

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.length).toBeGreaterThan(0);

    });

    // Get By ID
    test("Should get product by id", async () => {

        const response = await request(app)
            .get(`/api/product/${id}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data._id).toBe(id);

    });

    // Update
    test("Should update product", async () => {

        const response = await request(app)
            .put(`/api/product/${id}`)
            .send({
                name: "Gaming Laptop",
                description: "Dell Laptop",
                category: "Electronics",
                price: 70000,
                quantity: 5
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.name).toBe("Gaming Laptop");

    });

    // Delete
    test("Should delete product", async () => {

        const response = await request(app)
            .delete(`/api/product/${id}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);

    });

});