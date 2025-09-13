// type conversion
/* const inputYear = '1992';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18 );

console.log(Number('Yehor'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');

console.log('23' - '10' - '3');
*/

// 5 falsy values: 0, '', undefined, null, Nan
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
*/

/*
const money = 0;
if(money) {
    console.log("Don't spend at all ;)");
} else {
    console.log('You should get a job!');
}

let height; 
if (height) {
    console.log('YAY! height is defined');
} else {
    console.log ('Height is UNDEFINED');
}
*/

/* const age = 18;
if (age === 18) console.log('You just became an adult');

const favorite = prompt("what's your favorite number?");
console.log('Cool! 23 is an amazing number!');*/

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// // if(hasDriversLicense && hasGoodVision) {
// //     console.log('Sarah is able to drive!');
// // } else {
// //     console.log('Someone else should drive...');
// // }

// const isTired = false;
// console.group(hasDriversLicense || hasGoodVision|| isTired);



// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// const day = 'wednesday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         brake;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         brake;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         brake;
//     case 'friday':
//         console.log('record videos');
//         brake;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         brake;
//     default:
//         console.log('Not valid day');
// }

// const day = 'sunday';

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy your weekend');
// } else {
//     console.log('Not valid day');
// }

// const age = 22;
// age >= 18 ? console.log('I like to drink wine') : 
// console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if(age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' :
//  'water'}`);

//  const bill = 600;

// /* Write your code below. Good luck! 🙂 */

// var tip;

// if (0 < bill < 50 || bill > 300) {
//     tip = bill * 0.20;
// } else if (50 <= bill <= 300){
//     tip = bill * 0.15;
// }
// var total = bill + tip;

// console.log(`The bill was ${bill}, the tip was 
//     ${tip}, and the total value ${total}`)

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15
// : bill * 0.2;

// console.log(`the bill was ${bill}, the tip was ${tip}
//     and total was ${bill + tip}`);