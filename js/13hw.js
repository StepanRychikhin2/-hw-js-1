// завд-1-11hw
// fohh1
// const logItems = (array) => {
//     for(let i = 0; i < array.length; i += 1){
//         const index = i + 1;
//         console.log(`${index}-${array[i]}`);
//         }
//   };

// logItems(['h', 't', 'v']);


// fohh2
//   const calculateEngravingPrice = (message, pricePerWord) => {
//     const mass = message.split(" ");
//     const totalPrise = mass.length * pricePerWord;
//     console.log(totalPrise);
//   };

//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80

//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20), ); // 120


// fohh3
//   const findLongestWord = (string) => {
//     let id = string.split(" ")
//     let faseid = id[0];
//     for(let i = 0; i < id.length; i++){
//         if(id[i].length > faseid.length){
//             faseid = id[i];
//         }
//     }
//     return faseid;
//   };
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

//   console.log(findLongestWord('Google do a roll')); // 'Google'

//   console.log(findLongestWord('May the force be with you')); // 'force'




// fohh4
// const formatString = (string) => {
//    if(string < 40){
//     return string;
//    } else{
//     const srongi = string.slice(0, 40) + "...";
//     return srongi;
//    }
// };

//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // повернеться оригінальний рядок

//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // повернеться форматований рядок

//   console.log(formatString('Curabitur ligula sapien.'));
//   // повернеться оригінальний рядок

//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );




// fohh5
// const checkForSpam = (message) => {
//     const word1 = "sale";
//     const word2 = "spam";
//     console.log(message.includes(word1));
//     console.log(message.includes(word2));
//   };

//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(checkForSpam('Latest technology news')); // false

//   console.log(checkForSpam('JavaScript weekly newsletter')); // false

//   console.log(checkForSpam('Get best sale offers now!')); // true

//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


// fohh6
// let input = prompt("Введи чисоло");
// const numbers = [];
// let total = 0;

// do {
//   input = prompt("Введи чисоло", "");
// if((Number.isNaN(input))){
//     continue;
// } else if(input !== null){
//     break;
// } else{
//     break;
// }

// //   numbers.push(input);
// } while (input !== null);

// console.log(numbers);
// console.log(input);

// ЗАВД-2-12hw




// завдання-1
// const makePizza = () => {
//     return "Your pizza is being prepared, please wait.";
// };
// // Change code below this line
// const result = null;
// const res = result.push(makePizza);
// const pointer = null;
// console.log(result);

// завдання-2
// const deliverPizza = (pizzaName) => {
//     return `Delivering ${pizzaName} pizza.`;
// };

// const makePizza = (pizzaName) => {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// };
// // Chande code below this line
// const makeMessage = (pizzaName) => {
//     return;
// };




// завдання-3
// const makePizza = (pizzaName) => {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);

//     callback(pizzaName);
// };

//   makePizza("Royal Grand", function deliverPizza(pizzaName) {

//     console.log(`Delivering pizza ${pizzaName}.`);

//   });

//   const eitPizza = (pizzaName) => {
//     const eating = "banana";
// };

  // Change code below this line

//   makePizza("Ultracheese", eitPizza);
//   makePizza("Ultracheese", function eitPizza(pizzaName){
// console.log(`Зїдання пітци ${pizzaName}`);
//   })

// завдання-4
// const buttonData = document.querySelector("[button-data]");
// buttonData.addEventListener("click", showInfo);

// const showInfo = () => {
//     console.log(alert("Hello World!"));
// };

// function showInfo(){
//     console.log(alert("Hello World!"));
// }



// завдання-5
// const buttonData = document.querySelector("[button-data2]");
// buttonData.addEventListener("click", showInfo);

// const showInfo = (rety) => {
//     console.log("Hello World!", rety);
//     function showInfo2() {
//         let rety = 0;
//         for (let i = 0; i < 999; i++) {
//             rety + i;
//         }
//     } 
// } ;


// function showInfo(rety) {

//     console.log("Hello World!", rety);
//     function showInfo2() {
//         let rety = 0;
//         for (let i = 0; i < 999; i++) {
//             rety + i;
//         }
//     }
// }




// завдання-6
// const applyCallbackToEachElement = (arr, callback) => {
//     const reuls = [];
//     for (let i = 0; i < arr.length; i++) {
//         reuls.push(callback(arr[i]));
//     }
//     return reuls;
// } ;

// const applyCallbackToEachElement = function (arr, callback) {
//     const reuls = [];
//     for (let i = 0; i < arr.length; i++) {
//         reuls.push(callback(arr[i]));
//     }
//     return reuls;

// }

// const squareCallback = (arr) => {
//     return arr * arr;
// } ;

;

// const arr = [1, 2, 3, 4, 5];

// const result = applyCallbackToEachElement(arr, squareCallback);

// console.log(result); // [1, 4, 9, 16, 25]

// завдання-7

// const calculateDiscountedPrice = (price, discount, callback) => {

// } ;


// const showDiscountedPrice = 0;

// calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90







