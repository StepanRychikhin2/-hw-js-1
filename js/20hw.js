// homeworc-1
// const topBalance = [
//     {
//         balance: 200,
//     },
//     {
//         balance: 300,
//     },
//     {
//         balance: 500,
//     },
//     {
//         balance: 1400,
//     },
// ];

// const totalBalance = topBalance.reduce((totalPrise, {balance}) =>  (totalPrise + balance), 0);
// console.log(totalBalance);


// homeworc-2
const topFrend = [
    {
        name: "Tom",
        balance: 200,
        frendsName: "Toliks",
    },
    {
        name: "Tolik",
        balance: 300,
        frendsName: "Stepans",
    },
    {
        name: "Stepan",
        balance: 500,
        frendsName: "Toms",
    },
    {
        name: "Tom2",
        balance: 1000,
        frendsName: "Toms",
    },
];

const frendName = topFrend.reduce((totalFrend, {frendsName, name}) => {  
if (frendsName === "Toms") {
    totalFrend.push(name);
} 
return totalFrend;
     }, []);

console.log(frendName);



// homeworc-3
const frend = [
    { name: "Tom", frends: 4, },
    { name: "Tolik", frends: 10, },
    { name: "Stepan", frends: 5, },
    { name: "Tom2", frends: 7, },
];

const frends = frend.sort(
    (firfstName, frend) => firfstName.frends - frend.frends
);
console.log(frends);

const nameMe = frends.reduce((totalName, { name }) => {
    totalName.push(name);

return totalName;
}, []);
console.log(nameMe);

// homeworc-4
// const topBalance = [
//     {
//         name: "Tom",
//         slils: "soft",
//     },
//     {
//         name: "Tolik",
//         slils: "Minecrafter",
//     },
//     {
//         name: "Stepan",
//         slils: "YouTuber",
//     },
//     {
//         name: "Tom2",
//         slils: "YouTuber",
//     },
// ];
// const reduse = topBalance.reduce((totalSkils, {slils}, index, topBalance) => {
//     for (const skil of topBalance) {
//         if (topBalance.includes(skil.slils)) {
// return;

//         }  else {
//             totalSkils.push(skil.slils); 
//         }
        
//     }
//    return totalSkils;
// }, []);


// console.log(reduse);

// const sort = [...reduse].sort((a, b) => a.localeCompare(b));
// console.log(sort);


// const sort = [...topBalance].sort(a, d) => a.LocalSort((d));


























