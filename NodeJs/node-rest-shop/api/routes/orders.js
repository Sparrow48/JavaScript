const express = require('express');
const router = express.Router();

router.post('/', (req,res,next) =>{
    res.status(200).json({
        message: 'Orders werw fetches'
    });
});

router.post('/', (req,res,next) =>{
    res.status(201).json({
        message: 'Orders was created'
    });
});

router.get('/:orderId', (req,res,next) =>{
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req,res,next) =>{
    res.status(200).json({
        message: 'Ordee deleted',
        orderId: req.params.orderId
    });
});


module.exports = router;