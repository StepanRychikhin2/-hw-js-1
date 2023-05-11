// mas1
let mas1 = [12, 34, 567];
mas1[1] = 1;
console.log(mas1);

// mas2
let mas2 = ["Привіт", "Helo", "hi"];
mas2[3] = "hahaha";
console.log(mas2);






// mas4
let mas4 = [24, 45, 67, 78, 90];
for (let i = 0; i < mas4.length; i += 1) {
    console.log(mas4[i]);
}
console.log(mas4);



// mas5
let mas5 = ["pro", "toppro", "hi", "car", "fugggot"];
for (let i = 0; i < mas5.length; i += 1) {
        if(mas5[i].length > 5){
            console.log(mas5[i]);
        }
    

    }
    console.log(mas5);



// mas6

let mas6 = [12, 23,34, 45, 56, 67, 500, 78, 89, 90, 123];
console.log(mas6);
let maxMas6 = mas6[0];
for(let i = 0; i < mas6.length; i++ ){
if(mas6[i] > maxMas6){
maxMas6 = mas6[i];
}
}
console.log(maxMas6);


// mas7
let mas7 = [15, 26,38, 47, 58, 67, 79, 94, 98, 145];
let total = 0;
for (let i = 0; i < mas7.length; i += 1) {
  if (mas7[i] % 2 === 0) {
    console.log(mas7[i]);
  }
}
console.log();