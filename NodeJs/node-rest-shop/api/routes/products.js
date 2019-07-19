const express = require('express');
const router = express.Router();
const mongooes = require('mongooes');
const mongooes = require('mongooes');

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'handling GET requests to /products'

    });
});

router.post('/', (req, res, next) => {
    const product = {
            name: req.body.name,
            price: req.body.price
    };

    const product = new Product({
        _id: new mongooes.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    
    product.save().then(result => {
        console.log(result);
    })
    .catch(err=> console.log(err));
    res.status(201).json({
        message : 'handling GET requests to /products',
        createProduct: product

    });
});

router.get('/:productId', (req,res,next)=>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message : 'Special ID',
            id: id
    
        });
    }else {
        res.status(200).json({
            message: 'You passed an id'
        });

    }

});

router.patch('/:productId', (req,res,next)=>{
    res.status(200).json({
        message: 'Updated product!'

    });

});

router.delete('/:productId', (req,res,next)=>{
    res.status(200).json({
        message: 'Deleted product!'

    });

});


module.exports = router;