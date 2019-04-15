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
console.log(Nasib.nationality);