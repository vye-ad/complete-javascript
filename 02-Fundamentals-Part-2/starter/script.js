'use strict';


// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = "Audio";
// const private = 534;
// const if = 12;

// function logger() {
//     console.log('My name is Yehor');
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and 
//     ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


//function declaration
// function calcAge(birthYear) {
//      return 2025 - birthYear;;
// }
// const age1 = calcAge1(2002);
// console.log(age1);

// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 -birthYear;
// }

// const age2 = calcAge2(1923);

// console.log(age1, age2);

//Arrow function

// birthYear => 2037 - birthYear;

// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 -birthYear;
//     const retirement = 65 - age;
     // return retirement;
//     return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(2002, 'Yehor'));
// console.log(yearsUntilRetirement(1992, 'Bob'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples pieces and 
//     ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log (`${firstName} retires in ${retirement} years`);
//     return retirement;
//     } else {
//         console.log(`${firstName} has already retired!`)
//         return -1;
//     }
//     // return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(2002, 'Yehor'));
// console.log(yearsUntilRetirement(1950, 'Bob'));



// const calcAverage = (game1, game2, game3) => (game1 + game2 + game3)/3; 

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (scoreKoalas > (scoreDolphins * 2)) {
//         console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}!`);
//     }   else if (scoreDolphins > (scoreKoalas * 2)) {
//         console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}!`);
//     } else {
//         console.log('No team wins...');
//     }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const year = new Array(1991, 1984, 208, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';

// console.log(friends);

// const firstName = 'Yehor'
// const yehor = [firstName, 'Vasylchenko', 2025-2002, 'student', friends];

// console.log(yehor);

// function calcAge(birthYear) {
//      return 2025 - birthYear;;
// }

// const years = [1990, 2000, 2002, 2008, 2013, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);



//ADD ELEMENTS 
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// //REMOVE ELEMENT
// friends.pop(); //Last
// const popped = friends.pop(); //Last
// console.log(popped);
// console.log(friends);


// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// friends.push(23);
// console.log(friends.includes('23')); //False
// console.log(friends.includes(23)); //True

// if (friends.includes('Steven')){
//     console.log('You have a friend named Steven');
// }