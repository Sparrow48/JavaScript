/*
var Nasib = {
    firstName : 'Abu',
    lastName : 'Nasib',
    yearOfBirth : 1995,
    job : 'student'

};

var person = function(firstName,lastName,yearOfBirth,job){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};


var Nasib = new person ('Abu','Nasib',1995,'student');
var Imran = new person ('Imran','Khan',2001,'Student');
var Rakib = new person ('Rakib','Hasan',1997,'student');
var Tarif = new person('Tarif','Hasan',1999,'student');

person.prototype.nationality = 'Bangladeshi';



Imran.calculateAge();
console.log(Imran.nationality);
console.log(Nasib.nationality); */

// object.creat

/*var personProto = {
    calculateAge : function (){
        console.log(2019 - this.calculateAge);

    }
};

var Nasib = Object.create(personProto);

Nasib.name = 'Nasib';
Nasib.yearOfBirth = 1995;
Nasib.job = 'student';

var Imran = Object.create(personProto, {
    name : { value : 'Imran'},
    yearOfBirth : { value : 2000},
    job : { value : 'student'}

});


var marks = 94;

var Nasib = {
    name :'Nasib',
    department : 'ECE',
    major : 'CSE'
};

console.log(marks);
console.log(Nasib.major);

function change(a,b){
    a=95;
    b.major ='ETE';
}

change(marks,Nasib);

console.log(marks);
console.log(Nasib.major);

var marks = [88,87,75,86,79];

function shortMarks(arr , fun){
    var arrayResult = [];

    for(var i=0; i< arr.length ; i++){
        arrayResult.push(fun(arr[i]));
    }

    return arrayResult;

}

function shortFromA(mark){
    return 93 - mark;
}

var result = shortMarks(marks,shortFromA);
console.log(result);*/


(function(){
    var score = Math.random() * 10;
    console.log(score);
    console.log(score>= 5);

})();

(function(sub){
    var score = Math.random() * 10;
    console.log(score);
    console.log(score>= 5-sub);

})(5);

















