// prak-1
// const person = {
//     neme: "Nelly",
//     surname: "Laroi",
//     age: 25,
// };

// function textNeme(nemee, surnamee, agge) {
// console.log(`Мене звати ${nemee} ${surnamee} і мені ${agge}`);
// }
// const {neme: name1, surname, age} = person;
// textNeme(name1, surname,age);


// prak-2
// const student = {
//     name: "Bruce",
//     surname: "Lee",
//     grades: [4, 5, 3],
// };
// const { grades: [number1, number2, number3]} = student;
// function calculateAverageGrade(number1, number2, number3) {
//     const test = (number1 + number2 + number3) / 3;
//  console.log(test);   
// }
// calculateAverageGrade(number1, number2, number3)

// prak-3
// const person = {
//     name: "John",
//     emails: ["1meemeil@gmail.com", "2meemeil@gmail.com", "3meemeil@gmail.com"],
// };
// const {name: neme, emails: [email1, email2, email3]} = person;
// function getFirstemeil(email1, email2, email3) {
// console.log(email1);
// };
// getFirstemeil(email1, email2, email3);


// prak-4
const data = {
    users: [
        { name: "John", age: 25 },
        { name: "Jane", age: 17 },
        { name: "Bob", age: 30 },
        { name: "Alice", age: 20 },
    ]
};

const {
    users: [{ name: nene1, age: age1 },
        { name: nene2, age: age2 },
        { name: nene3, age: age3 },
        { name: nene4, age: age4 }],
} = data;

// if (age1 < 18) {
// console.log("ttt");
// } else {
//     console.log(age1);

// };
function test(number1, number2, number3, number4) {
    if (number1 > 18 || number2 > 18 || number3 > 18 || number4 > 18) {
        return number1 && number2 && number3 && number4;
    } else {
        console.log("no 18");

    };
}
test(age1, age2, age3, age4);
// prak-5
const musikLibrary = {
    count: 2,
    arrist: [
        {
            name: "the Beasles",
            albums: [
                {
                    title: "Sgt. Pepper\'s Loney Hearts Club Band",
                    year: 1967,
                    tracks: [
                        {
                            title: "With a Little Help from My Friends",
                            duration: "2:44",
                        },
                        {
                            title: "Lucy in the Sky with Diamonds",
                            duration: "3:28",
                        },
                        {
                            title: "A Day in the Life",
                            duration: "5:33",
                        },

                    ]
                },
                {
                    title: "Abbey Road",
                    year: 1969,
                    tracks: [
                        { title: "Come Together", duration: "4:19" },
                        { title: "Come Together", duration: "4:19" },
                        { title: "Come Together", duration: "4:19" },
                    ]
                }
            ]
        },
        {
            name: "Pink Floyd",
            albums: [
                {
                    title: "The Wall",
                    year: 1979,
                    tracks: [
                        { title: "Another Brick in the Wall Part 2", duration: "3:59" },
                        { title: "Comfortably Numb", duration: "6:23" },
                        { title: "Hey You", duration: "4:40" },
                    ]
                },
                {
                    title: "Darc Side of the Moon",
                    year: 1973,
                    tracks: [
                        { title: "Speak to Me/Breathe", duration: "3:58" },
                        { title: "Time", duration: "7:06" },
                        { title: "Money", duration: "6:22" },
                    ]
                }
            ]
        }
    ]
};



const { arrist: [
    {
        name: Beasles,
        albums: [
            {
                title: BeaslesTitle,
                year: BeaslesYear,
                tracks: [
                    {
                        title: titleBeasles,
                        duration: durationBeasles,
                    },
                    {
                        title: titleBeasles2,
                        duration: durationBeasles2,
                    },
                    {
                        title: titleBeasles3,
                        duration: durationBeasles3,
                    },
                ]
            },
            {
                title: titleBeaslesFormForm2,
                year: yearBeaslesForm2,
                tracks: [
                    { title: titleBeaslesForm2,
                     duration: duration, 
                    },
                    { title: titleBeaslesForm3,
                     duration: duration2 ,
                    },
                    { title: titleBeaslesForm4,
                     duration: duration3 ,
                    },
                ]
            }

        ] },
    { name: Floyd, albums: [
        {
            title: FloydTitle,
            year: FloydYear,
            tracks: [
                {
                    title: titleFloyd,
                    duration: durationFloyd,
                },
                {
                    title: titleFloyds2,
                    duration: durationFloyd2,
                },
                {
                    title: titleFloyd3,
                    duration: durationFloyd3,
                },
            ]
        },
        {
            title: titleFloydFormForm2,
            year: yearFloydForm2,
            tracks: [
                { title: titleFloydForm2,
                 duration: FloydDuration, 
                },
                { title: titleFloydForm3,
                 duration: FloydDuration2 ,
                },
                { title: titleFloydForm4,
                 duration: FloydDuration3 ,
                },
            ]
        }

    
    ] }
] } = musikLibrary;



















