// fohh1

// const logItems = function (array) {
//     for(let i = 0; i < array.length; i += 1){
//         const index = i + 1;
//         console.log(`${index}-${array[i]}`);
//         }
//   };
  
// logItems(['h', 't', 'v']);
   

// fohh2

// const calculateEngravingPrice = function (message, pricePerWord) {
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

// const findLongestWord = function (string) {
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
// const formatString = function (string) {
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
// const checkForSpam = function (message) {
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



