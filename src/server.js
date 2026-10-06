require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3006;

async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Nodejs Server running on port ${PORT}`);
        });

    } catch (error) {
        console.log(error.message);
    }
}

startServer();