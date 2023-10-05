// WORC_1

// const categoriesList = document.querySelectorAll(".categories");
// const categoryItems = document.querySelectorAll('.item');

// console.log(categoriesList);
// console.log(categoryItems);

// const work = categoriesList.length;
// console.log(`є всього ${work} категорій`);


// const nameAnimal = ["КІТ", "СОБАКА", "КІНЬ", "ХОМ'ЯК"];
// const list = document.querySelector(".categories");

// const names = nameAnimal
//   .map((nameAnimal) => `<li class="list-item"><h2 class="list-h2">${nameAnimal}</h2></li>`)
//   .join("");

// list.innerHTML = names;

// const categoryItems2 = list.querySelectorAll('li');
// const categiryText = document.querySelectorAll(".list-h2");

// for (let i = 0; i < categiryText.length; i++) {
//     const element = categiryText[i];
//     console.log(element.textContent);
// }


// const works = categoryItems2.length;
// console.log(`У категорії Тварини ${works} елементів`);

// WORC_2

// const ingredients = [
//     'Картопля',
//     'Гриби',
//     'Часник',
//     'Помідори',
//     'Зелень',
//     'Приправи',
//   ];
  
//   const ulElement = document.getElementById('ingredients');

//   for (let i = 0; i < ingredients.length; i++) {
//     const element = ingredients[i];
    
//     const liElement = document.createElement('li');
//   liElement.textContent = ingredients[i];
//   ulElement.appendChild(liElement);
//   }



 


// WORC_3



//   const images = [
//     {
//       url:
//         'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'White and Black Long Fur Cat',
//     },
//     {
//       url:
//         'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//       url:
//         'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Group of Horses Running',
//     },
//   ];
  
//   const gallery = document.getElementById('gallery');
  
//   const galleryHTML = images.map((image) => `
//     <li>
//       <img src="${image.url}" alt="${image.alt}" width = "200px">
//     </li>`).join('');
  
//     gallery.insertAdjacentHTML('beforeend', galleryHTML);





// WORC_4

// const buttton1 = document.querySelector(".decrement");
// const buttton2 = document.querySelector(".increment");
// const value = document.querySelector(".value");
// let keypressCounter = 0;
// value.textContent = keypressCounter;

// buttton2.addEventListener("click", ClickPlus1);
// buttton1.addEventListener("click", ClickMinus1);
// function ClickPlus1() {
//     keypressCounter +=  1;
//     value.textContent  = keypressCounter;
// }


// function ClickMinus1() {
//     keypressCounter -=  1;
//     value.textContent  = keypressCounter;
// }

// console.log(buttton2);
// console.log(value);




