//  n1
const str = 'Привіт';
console.log(typeof str);
const num = 123;
console.log(typeof num);
const flag = true;
console.log(typeof flag);
const txt = true;
console.log(typeof txt);




//  n2
const neme1 =   true;
console.log(neme1);

const neme2 =  false;
console.log(neme2);

const neme3 =   true;
console.log(neme3);

const neme4 =   true;
console.log(neme4);

const neme5 =  false;
console.log(neme5);

let neme6 =  0.8;
console.log(neme6);

let neme7 =  4;
console.log(neme7);
let neme8 =  3775.8;
console.log(neme8);

let neme9 =  3596.8;
console.log(neme9);

let neme10 =  45000;
console.log(neme10);




//  n3
const userneme = prompt("Введіть ваше і'мя");
console.log(userneme);


//  n4
const frendsAge = 13;
const meAge = 13;
const opAge = frendsAge + meAge;
alert(opAge);

//  n5
const content = "Я навчаюся в GoITeens в групі:";
const group = "FE1y_1 менші";
console.log(content,group);


//  dp

const neme = 'MacBook Pro 13';
const prise = 10000;
console.log(`Обрано ${neme}, ціна за штуку ${prise} кредитів`);




// nn1
console.log(Number.parseInt("5px"));
console.log(Number.parseInt("12djd334"));
console.log(Number.parseInt("12.45asdwe12"));
console.log(Number.parseInt("qwqweeewq"));



// nn2
console.log(Number.parseFloat("5px"));
console.log(Number.parseFloat("12djd334"));
console.log(Number.parseFloat("12.45asdwe12"));
console.log(Number.parseFloat("qwqweeewq"));


// nn3
const max = Math.max(2, 34, 99, 3, 22, 36, 733, 18);
console.log(max);

const min = Math.min(2, 34, 99, 3, 22, 36, 733, 18);
console.log(min);

// nn4
const ran1 = 0;
const ran2 = 20;
const randoms = Math.random() * (ran2 - ran1) + ran1;
console.log(randoms);






// nnn1
const prisePerItem = 3500;
const orderGuantitu = 4;
const totalPrrise = (prisePerItem * orderGuantitu);
console.log(totalPrrise);


// nnn2
const pased = prompt("Скільки вам років?");
const isAduse = pased > 18 && pased === 18;
console.log(isAduse);


// nnn3

const SAVED_PASSWORD = "gt4090";
const passwordSeve = promp("Введіть пароль");
const isMath = SAVED_PASSWORD === passwordSeve;
console.log(isMath);

// nnn4

let a = 5;
let b = 10;
let c = 15;
let d = 20;

a = a += 2;
b = b -= 4;
c = c *= 3;
d = d /= 10;
console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 




// ЬЬ1
const emeil ="linnikadd@gmail.com";
const provsrca1 = "@";
const provsrcaemail = "email";
const oma = emeil.length;
console.log(emeil.includes(provsrca1));
console.log(emeil.includes(provsrcaemail));
console.log(oma);




// ЬЬ2
const myyy = "My";
const nameeee = "name";
const isssss = "is";
const fullName =  myyy +  " "  + nameeee + " " +  isssss  + " " + "Victor";
console.log(fullName);

// ЬЬ3
const userName = "Stepan";
const payment = 100;
const rrr = alert(`Дякуємо, ${userName} До сплати ${payment} гривень`);
// ЬЬ4
let meName = "Stepan";
const ralase = "@";
const relesee = meName.replace("S","@");
console.log(relesee);

// ЬЬ5
const nemeMe = "Степан Ричіхін";
const checneme = nemeMe.indexOf(" ");
console.log(checneme);

// ЬЬ6
let nile = "ТУТ ЗАРА БУДУ 10 НУЛІВ";
nile = nile.padEnd(32, "0");
console.log(nile);
const enile = nile.length;
console.log(enile);

// ЬЬ7
const  result = 5+5+"5";
console.log(result);
// ЬЬ8
const productName = "Droid";
const pricePerItem = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// ЬЬ9
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const infomessage = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(infomessage);
// ЬЬ10
const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopicLength - 1];
console.log(courseTopic);
console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);
// ЬЬ11
const string = "promocode Pro22812";
const length = 9;
const sudddd = string.slice(0, length);
console.log(sudddd);
