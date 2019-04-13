console.log("Hello World!!!");

var firstName = 'Abu';
console.log(firstName);

var lastName = 'Nasib';
var age = 22;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

// single line comment;

/*
multiline comment;

*/
job = 'Student';
console.log(job);

console.log(lastName + ' '+ age);

var job2, isMarried;
job2 = 'student';
isMarried = false ;

console.log(lastName + ' is a '+ age + ' years old '+ job2 +'. Is he married? '+ isMarried);

age = 'twenty two';
job2 = 'developer';
console.log(lastName + ' is a '+ age + ' years old '+ job2 +'. Is he married? '+ isMarried);

//var lastName = prompt('what is his last name?');
//console.log(firstName + ' ' + lastName);


// Math operators
var year = 2019;
var yearNasib = year-22;
console.log('False birth year: ' + yearNasib);
console.log( year + 19);
console.log( year * 2);
console.log( year / 2);

//logical operator

var ageNasib, ageImran;
ageNasib=24;
ageImran=17;

var nasibOlder= ageNasib>ageImran;
console.log(nasibOlder);

//type of operator
console.log('type of operator:');

console.log(typeof nasibOlder);
console.log(typeof ageNasib);
console.log(typeof lastName);

// Operator precedence

var now = 2019;
var yearNasib = 1995;
var fullAge = 23;

var isFullAge = now - yearNasib >= fullAge;
console.log(isFullAge);

// Grouping
 var ageNasib = now - yearNasib;
 var ageImran = 17;
 var average = (ageNasib + ageImran) /2;
 console.log(average);

 //multiple assignment

 var x,y;
 x=y= (3+5)*4-6; //8*4-6 // 32-6 = 26
 console.log(x,y);

 
 // if-else

 var firstName = 'Nasib';
 var civilStatus = 'single';

 if(civilStatus === 'married'){
     console.log(firstName + ' is married');
 } else{
    console.log(firstName + ' is not married');
 }

 var isMarried = true;

 if(isMarried){
    console.log(firstName + ' is married');
} else{
   console.log(firstName + ' is not married');
}

/*** 
 * boolean logic
 */

 var firstName ='Nasib';
 var age= 24;

 if(age<13){
     console.log(firstName + ' is a boy.');
 } else if(age>12 && age<20){
     console.log(firstName + ' is a teenager');
 } else {
     console.log(firstName + ' is a man');
 }

// coding challenge-2

var scoreNasib = (89+ 120 + 103)/3;
var scoreImran = (116 + 94 + 123)/3;
console.log(scoreNasib,scoreImran);

if(scoreNasib > scoreImran)
{
    console.log('Nasib\'s team winns with ' + scoreNasib + ' points');
} else if(scoreImran> scoreNasib)
{
    console.log('Imran\'s team winns with ' + scoreImran + ' points');
} else {
    console.log('Match draw.');
}

/* function*/

function calculateAge(birthYear)
{
    return 2019-birthYear;
}

var ageNasib= calculateAge(1996);
var ageImran = calculateAge(1999);

console.log(ageNasib, ageImran);

function yearsUntilRetirement(year , firstName){
    var age = calculateAge(year);
    var retirement = 65-age;

    if(retirement > 0)
    {
        console.log( firstName + ' retires in ' + retirement + ' years.');
    } else
    {
        console.log(firstName + ' is already retired.');
    }

    
}

yearsUntilRetirement(1995,'Nasib');
yearsUntilRetirement(2000,'Imran');
yearsUntilRetirement(1952,'Salman');

// Array

var names = ['Nasib','Imran','Rakib'];
var years = new Array(1995,1999,1997);

console.log(names[2]);
console.log(names.length);

names[1] = 'Roni';
names[names.length] = 'Akash';
console.log(names);


var Nasib = ['Abu','Nasib',1995,'student',false];

Nasib.push('blue');
Nasib.unshift('Md');
console.log(Nasib);

Nasib.pop();
console.log(Nasib);

Nasib.shift();
console.log(Nasib);

console.log(Nasib.indexOf(23));

var isDesigner = Nasib.indexOf('designer') === -1 ?'Nasib is NOT a designer' : 'Nasib is a designer';
console.log(isDesigner);

/* object and properties */

var Nasib = {
    firstName : 'Abu',
    lastName : 'Nasib',
    birthYear : 1995,
    family : ['a','b','c','d'],
    isMarried : false,
    job : 'student'
    

};

console.log(Nasib.isMarried);

console.log(Nasib);

console.log(Nasib.firstName);
console.log(Nasib['lastName']);
 var x= 'birthYear';
 console.log(Nasib[x]);

 Nasib.job = 'designer';
 Nasib['isMarried']= true;
 console.log(Nasib);

 var a= new Object();
 a.firstName = 'a';
 a.birthYear = 1997;
 a['lastName'] = 'x';
 console.log(a);


 /* objects and methods*/
 var Nasib = {
    firstName : 'Abu',
    lastName : 'Nasib',
    birthYear : 1995,
    family : ['a','b','c','d'],
    isMarried : false,
    job : 'student' ,
    
    calAge : function(birthYear){
        return 2019 - birthYear;
    }
};

console.log(Nasib.calAge(1995));


var Nasib = {
    firstName : 'Abu',
    lastName : 'Nasib',
    birthYear : 1995,
    family : ['a','b','c','d'],
    isMarried : false,
    job : 'student' ,
    
    calAge : function(){
        this.age = 2019 - this.birthYear;
    }
};

Nasib.calAge();
console.log(Nasib);


/* loops and iteration*/

for(var i=0; i<10;i++)
{
    console.log(i);
}