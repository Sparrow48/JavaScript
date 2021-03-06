const helmet = require('helmet');
const morgan = require('morgan');
const Joi = require('joi');
const express = require('express');
const satrupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const app = express();




app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(helmet());

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    satrupDebugger('morgan enable');

}

dbDebugger('connected to the database......');

const courses = [
    {id:1, name: 'Cse482'},
    {id:2, name: 'Cse411'},
    {id:3, name: 'Cse434'}
];

app.get('/', (req, res) =>{
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
});

app.get('/api/gotit', (req,res) =>{
    res.send(['Nasib','Abir','Nayeem']);
});

app.get('/api/courses',(req,res) =>{
    res.send(courses);
});


app.get('/api/courses/:id',(req,res) =>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The given id was not found!');
    res.send(course);
});

app.post('/api/course', (req,res)=>{

    const { error } = validateCourse(req.body);

    if(error) return res.status(400).send(result.details[0].message);

    const course ={
        id : courses.length +1,
        name: req.body.name

    }

    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id', (req,res)=>{

    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The given id was not found!');

    const { error } = validateCourse(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);

});

function validateCourse(course){
    const schema = {
        name : Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
};

app.delete('/api/courses/:id', (req,res)=>{

    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The given id was not found!');

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);


})


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`port ${port} is working`));