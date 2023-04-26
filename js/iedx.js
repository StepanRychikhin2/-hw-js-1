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


// ДД5



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



// ДД6
const hmmm = prompt("Діапазон 55-99");
const min = 54;
const max = 100;
if(hmmm >= max || hmmm < min) { 
    alert("Число не потрапляє в діапазон");
}
if(hmmm >= min){
alert("Число потрапляє в діапазон");
}



// ДД7



// ДД8



// ДД9



// ДД10
if ("0") {
    console.log( 'Привіт');
   }

// ДД11