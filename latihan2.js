const express = require('express');
const app = express();

const product = express.Router();
product.use(function (req, res, next) {
    console.log('Product called');
    next();
});

product.get('/product', function (req, res) {
    res.send('Ini adalah halaman produk');
});

const detailProduct = express.Router();
detailProduct.use(function (req, res, next) {
    console.log('Detail product called');
    next();
});

detailProduct.get('/detailproduct', function (req, res) {
    res.send('Ini adalah halaman detail produk');
});

app.get('/', function(req, res) {
    res.send('Ini adalah halaman Home');
});

app.use(product);
app.use(detailProduct);

app.listen(8000, function() {
    console.log('Application running at port 8000');
});