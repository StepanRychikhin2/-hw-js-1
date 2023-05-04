// hw5-1
let lang = "ua";
switch (lang) {
    case "fr":
        lang = "Janvier";

        break;

    case "ua":
        lang = "Ukrainian";
        break;

    case "en":
        lang = "english";
        break;
    default:
        lang = "error виберіть мову";
}
console.log(lang);

// hw5-2
let shoptea = prompt("Що бажаєте придбати");

switch (shoptea) {
    case "Чай":
        alert("до сплати 123.50$");

        break;

    case "Кава":
        alert("до сплати 432.50$");
        break;

    case "Сік":
        alert("до сплати 34.99$");
        break;
    default:
        alert("ВИ НЕ ВИБРАЛИ НАПІЙ");
}



// hw5-3
let dey = prompt("якиий сьогодні день?");

switch (dey) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
        alert("робочий");
        break;
    case "6":
    case "7":
        alert("вихідний");
        break;
    default:
        alert("ERROR");
}


// hw5-4
let mont = prompt("якиий зараз місяць");

switch (mont) {
    case "Лютий":
    case "Січень":
    case "Грудень":
        alert("ЗИМА");
        break;
    case "Листопад":
    case "Жовтень":
    case "Вересень":
        alert("ОСІНЬ");
        break;

    case "Серпень":
    case "Липень":
    case "Червень":
        alert("ЛІТО");
        break;

    case "Березень":
    case "Квітень":
    case "Травень":
        alert("ВЕСНЕ");
        break;
    default:
        alert("ERROR");
}


// hw5-5
const minni = 1;
const maxxi = 10;
for (let i = minni; i < maxxi; i += 1) {
   console.log(`Число ${i} * 7 = ${i * 7}`);
}



// hw5-6
const minnn = 11;
const maxxx = 28;
let total = 0;
for (let i = minnn; i < maxxx; i += 1) {

  console.log(total += i); 
}


// hw5-7
const mint = 2;
const maxt = 10;
let totali = 0;
for (let i = mint; i < maxt; i += 1) {
  if (i % 3 === 0) {
    totali += i;
  }

  console.log(total); 
}


// hw5-8
const mini = 0;
const maxi = 101;
for (let i = mini; i < maxi; i += 1) {
    if (i === 49) {
        console.log(i);
        break;
    } else{
        continue;
    }
}




// hw5-9
const min = 9;
const max = 31;
for (let i = min; i < max; i += 1) {
    if (i === 15) {
        continue;
    } 
    console.log(i);
}


// hw5-10
const goods = 3;
const ran1 = 499;
const ran2 = 5001;
const randoms = Math.random() * (ran2 - ran1) + ran1;
const randoms2 = Math.random() * (ran2 - ran1) + ran1;
const randoms3 = Math.random() * (ran2 - ran1) + ran1;
const totalPrice = randoms + randoms2 + randoms3;
console.log(totalPrice);


// hw5-11
const minn = 0;
const maxx = 6;
for (let i = minn; i < maxx; i += 1) {
   console.log(` ${i + 0}`);
}


// hw5-12
let password = "";

do {
  password = prompt("Введіть пароль", "");
} while (password > 100);

console.log("Ввели пароль: ", password);
