const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const appError = require('./utils/appError');
const globalError = require('./controllers/errorController');

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
};
app.use(express.json());
app.use(express.static(`${__dirname}/public`));


app.use((req,res,next) =>{
    req.requestTime = new Date().toISOString();
    next();
});



// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour );
// app.post('/api/v1/tours', addTour); 
// app.patch('/api/v1/tours/:id', updateTour);


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req,res,next)=>{
    next(new appError(`can't find ${req.originalUrl} on this server!`,404));
});

app.use(globalError);

module.exports = app;