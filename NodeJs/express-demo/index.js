const express = require('express');
const app = express();

const courses = [
    {id:1, name: 'Cse482'},
    {id:2, name: 'Cse411'},
    {id:3, name: 'Cse434'}
];

/*app.get('/', (req, res) =>{
    res.send('Hello world!');
});

app.get('/api/array', (req, res) =>{
    res.send([1,2,3,4]);
});

app.get('/api/number/:id',(req,res) =>{
    res.send(req.params.id);
});

app.get('/api/post/:year/:month',(req,res) =>{
    res.send(req.params);
});*/

app.get('/api/courses/:id',(req,res) =>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The given id was not found!');
    res.send(course);
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`port ${port} is working`));