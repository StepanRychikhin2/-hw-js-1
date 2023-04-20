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
