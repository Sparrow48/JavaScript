calculateAge(1995);

function calculateAge(year)
{
    console.log(2019-year);
    console.log(this);
}

var Nasib = {
    name : 'Nasib',
    yearofBirth : '1995',
    calculateAge : function() {
        console.log(this);
        console.log(2019-this.yearofBirth);

        /*function innerFunction(){
            console.log(this);
        }
        innerFunction();*/
    }
}

var Imran = {
    name : 'Imran',
    yearofBirth : 2000
}

Imran.calculateAge = Nasib.calculateAge;
Imran.calculateAge();