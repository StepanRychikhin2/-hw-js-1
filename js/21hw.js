// worcs-1
const truee = [
    {
      studentName: "Stepan",
      age: 44,
      studentWorkCategory: "JS",
    },
    {
      studentName: "Oleg",
      age: 98,
      studentWorkCategory: "JS",
    },
  {
      studentName: "Andry",
      age: 11,
      studentWorkCategory: "JS",
    },
    {
      studentName: "Stepan",
      age: 670,
      studentWorkCategory: "JS",
    },
  ];
const frends = truee.sort(
    (maxx, age) => maxx.frends - age.frends
);
console.log(frends);
 

const students = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Ківі", score: 94 },
    { name: "Х'юстон", score: 64 },
  ];
  
  // Назва акумулятора може бути довільною, це просто параметр функції
  const totalScore = frends.reduce((total, frends) => {
    return total + frends.age;
  }, 0);
  
  console.log(totalScore);
  
  
  
  



























