// hw-1
// const user = [
//     {
//         name: "Stepan",
//         age: 14,
//     },
//     {
//         name: "Tolik",
//         age: 12,
//     },
//     {
//         name: "Max",
//         age: 14,
//     },
// ];

// const names = user.map(name2 => name2.name);
// console.log(names);



// hw-2
// const user = [
//     {
//         name: "Stepan",
//         age: 14,
//         eyeColor: "Bly",
//     },
//     {
//         name: "Tolik",
//         age: 12,
//         eyeColor: "Red",
//     },
//     {
//         name: "Max",
//         age: 14,
//         eyeColor: "Blaud",
//     },
// ];
// const eyeColor = user.filter(users => users.eyeColor === "Blaud");
// console.log(eyeColor);


// hw-3
// const users = [
//     {
//         name: "Stepania",
//         age: 14,
//         eyeColor: "Bly",
//         gender: "wumen",
//     },
//     {
//         name: "Toliksia",
//         age: 12,
//         eyeColor: "Red",
//         gender: "wumen",
//     },
//     {
//         name: "Max",
//         age: 14,
//         eyeColor: "Blaud",
//         gender: "man",
//     },
// ];

// const gender1 = users.filter(userss => userss.gender === "man");
// console.log(gender1);
// const gender2 = users.filter(userss => userss.gender === "wumen");
// console.log(gender2);



// hw-4
// const users = [
//     {
//         name: "Stepania",
//         age: 14,
//         eyeColor: "Bly",
//         gender: "wumen",
//         isActive: true,
//     },
//     {
//         name: "Toliksia",
//         age: 12,
//         eyeColor: "Red",
//         gender: "wumen",
//         isActive: true,
//     },
//     {
//         name: "Max",
//         age: 14,
//         eyeColor: "Blaud",
//         gender: "man",
//         isActive: false,
//     },
// ];

// const isActive1 = users.filter(isActive1 => isActive1.isActive === true);
// console.log(isActive1);
// const isActive2 = users.filter(userss => userss.isActive === false);
// console.log(isActive2);



// hw-5
const users = {
    user: {
        name: "Stepan",
        email: "amailStepan@gmail.com",
    },
    user: {
        name: "Max",
        email: "amailMax@gmail.com",
    },
    user: {
        name: "Tolik",
        email: "amailTolik@gmail.com",
    }
};
const email = users.filter(emails => emails.email === "amailTolik@gmail.com");
console.log(email);

// hw-6
// const max = 20;
// const min = 10;
// const users = [
//     {
//         name: "Stepania",
//         age: 14,
//         eyeColor: "Bly",
//         gender: "wumen",
//         isActive: true,
//     },
//     {
//         name: "Toliksia",
//         age: 3,
//         eyeColor: "Red",
//         gender: "wumen",
//         isActive: true,
//     },
//     {
//         name: "Max",
//         age: 78,
//         eyeColor: "Blaud",
//         gender: "man",
//         isActive: false,
//     },
//     {
//         name: "Nadia",
//         age: 18,
//         eyeColor: "Red",
//         gender: "wumen",
//         isActive: false,
//     },
// ];

// const age = users.filter(
//     ({ age }) => age >= min && age < max
//   );
//   console.log(age);










