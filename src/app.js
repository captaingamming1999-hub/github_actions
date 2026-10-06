const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const errorMiddleware = require("./middlewars/error.middleware");


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Routes
const productRoutes = require("./routes/product.routes");
 app.use("/api", productRoutes);

app.get('/aboutpage', (req, res) => {
  res.send('This is the about page');
});


module.exports = app;