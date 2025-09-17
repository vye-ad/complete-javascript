// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const yehor = {
    firstName: 'Yehor',
    lastName: 'Vasylchenko',
    age: 2025-2002,
    job: 'student',
    friends: ['Pablo', 'Anton', 'Arthur']
};

//console.log(yehor);

//console.log(yehor.firstName);
//console.log(yehor['lastName']);

const nameKey = 'Name';
//console.log(yehor['first' + nameKey]);
//console.log(yehor['last' + nameKey]);


//const interestedIn = prompt(
    'What do you want to know about Yehor? Choose between firstName, lastName, job, age, friends'
//);
//console.log(yehor[interestedIn]);

//if(yehor[interestedIn]) {
   // console.log(yehor[interestedIn]);
//} else {
   // console.log("Wrong request! Choose between firstName, lastName, job, age, friends");
//}

yehor.location = "Canada";
yehor['inst'] = '@yehor';
//console.log(yehor);

console.log(
    yehor.firstName + ' has ' + yehor.friends.length + ' friends, and his best friend is called ' + yehor.friends[0]
);
*/


const yehor = {
    firstName: 'Yehor',
    lastName: 'Vasylchenko',
    birthYear: 2002,
    job: 'student',
    friends: ['Pablo', 'Anton', 'Arthur'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2025 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2025 - this.birthYear;
    // }
  
    calcAge: function() {
        this.age = 2025 - this.birthYear;
        return this.age;
    }
};

//console.log(yehor.calcAge(2002));
//console.log(yehor['calcAge'](2002));
//console.log(yehor.calcAge(yehor.birthYear));
//console.log(yehor.calcAge());
console.log(yehor.calcAge());
console.log(yehor.age);


//Challenge
// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
 
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();


if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}

