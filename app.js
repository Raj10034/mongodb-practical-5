const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/products', require('./routes/productRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/cart', require('./routes/cartRoutes'));
app.use('/orders', require('./routes/orderRoutes'));


// Error Handling Middleware
app.use((err, req, res, next) => {

    res.status(500).json({
        message: err.message
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});