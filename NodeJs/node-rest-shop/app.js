const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongooes = require('mongooes');


const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

mongooes.connect('mongodb+srv://Nasib:'+ process.env.MONGO_ATLAS_PW +'@node-rest-shop-lhutx.mongodb.net/test?retryWrites=true&w=majority',
{
    useMongoClient: true
}
);


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-allow-Origin","*");
    res.header("Access-Control-allow-Header","*");

    if(res.method == 'OPTIONS'){
        res.header('Access-Control-allow-Methods','PUT,POST,PATCH,DELETE.GET');
        return res.status(200).json({});
    }

    next();
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) =>{
    const error = new Error('NOT FOUND');
    error.status = 404;
    next(error);

});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});
 
module.exports = app;