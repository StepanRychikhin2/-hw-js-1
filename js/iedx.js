// ДД1
const costFruit = 850000;
let fruitShop = "???????";
if (costFruit > 849999) {
    fruitShop = "Можеш купити фрукт";
} else {
    fruitShop = "Недостатньо беілі";
}
console.log(fruitShop);

// ДД2

const point = prompt("Яка “офіційна” назва JavaScript?");
if (point === "ECMAScript") {
    alert("Правильно!");
} else {
    alert("Ви не знаєте? ECMAScript!");
}

// ДД3
const x1 = 10;
const x2 = 30;
const number = 45;
if(number < x1){
    alert("Менше 10");
} else if (number > x2){
    alert("Більше 30");
} else if (number > x1 && number < x2){
    alert("Входить");
}



// ДД4


const isOnline = false;
const isFriend = true; 
const isDnd = false;
// const canOpenChat = isFriend && isOnline && isDnd;
// console.log(canOpenChat);
if(isFriend && isOnline && isDnd === true){
    alert("Можна поговорити");
} else {
    alert("Не можеш поговорити");
}


// // ДД5

const free = 0;
const pro = 10;
const vip = 50;
const mestatus = 1;
if(mestatus >= vip){
    alert("Вітаю ти vip ти маєш доступ");
}
else if (mestatus >= pro){
    alert("Вітаю ти pro ти маєш доступ");
}
else if (mestatus >= free){
alert("Ти не маєш доступу");
}



// // ДД6

const hmmm = prompt("Діапазон 55-99");
const min = 54;
const max = 100;
if(hmmm >= max || hmmm < min) { 
    alert("Число не потрапляє в діапазон");
}
if(hmmm >= min){
alert("Число потрапляє в діапазон");
}



// // ДД7
// const dets = діти(0-16);
// const dorols = дорослі(17-60);
// const pensioners = пенсіонери(61-100);



// // ДД8
const meName = "Stepan";
const meneNeme = "Rychikhin";
const meNameage = meName.length;
const meneNemeage = meneNeme.length;
if(meNameage > 4 && meneNemeage > 5){
alert(meNameage + meneNemeage);
} else {
 alert("ОЙ, неможливо виконати умову"); 
}

// // ДД9
let result;
const a = 1;
const b = 2;
const resulseUn = a + b > 4 ? 'Вище' : 'Нижче';
if (a + b < 4) {
 result = 'Нижче';
} else {
 result = 'Вище';
}
console.log(result);
console.log(resulseUn);


// ДД10
if ("0") {
    console.log( 'Привіт');
   }

// // ДД11