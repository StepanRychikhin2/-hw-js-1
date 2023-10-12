// WORC-1
// const openButtonModal = document.querySelector("[data-action]");
// const closeButtonModal = document.querySelector(`button[data-action="close-modal"]`);

// console.log(openButtonModal);
// console.log(closeButtonModal);

// // if (closeButtonModal.dataset.action === "close-modal") {
//     openButtonModal.addEventListener("click", openModel)
//     closeButtonModal.addEventListener("click", closeModel)
// // }
// function closeModel() {
//     document.body.classList.remove("show-modal");
// }


// function openModel() {
//     document.body.classList.add("show-modal");
// }




// WORC-2
// const divButtonModal = document.querySelector(`div[data-action="div-modal"]`);

// divButtonModal.addEventListener("click", closeModeldiv)

// function closeModeldiv() {
//     document.body.classList.remove("show-modal");
// }




// WORC-3
// const inputRed = document.querySelector(`input[value="red"]`);
// const inputWhite = document.querySelector(`input[value="white"]`);
// const inputGreen = document.querySelector(`input[value="green"]`);


// inputRed.addEventListener("input", redBody)
// inputWhite.addEventListener("input", whiteBody)
// inputGreen.addEventListener("input", greenBody)
// function redBody() {
//    document.body.style.backgroundColor = "red";
    
// }

// function whiteBody() {
//     document.body.style.backgroundColor = "white";
    
// }

// function greenBody() {
//     document.body.style.backgroundColor = "green";
    
// }





// WORC-4
// const input = document.querySelector("[data-input]");
// const span = document.querySelector("[data-span]");
// const inputText = input.textContent;
// console.log(input);
// console.log(span);
// console.log(inputText);



// input.addEventListener("input", (event) => {
//     if (event.currentTarget.value === "") {
//         span.textContent = "Незнайомець"
//     } else {
//         span.textContent = event.currentTarget.value;
//     }
    
    
    
//   });






// WORC-5
// const inputlength = document.querySelector("[data-length]");

// // const inputLenth = input.length;

// // input.addEventListener("blur", maxLenhtf)


// inputlength.addEventListener("blur", () => {
// if (inputlength.value.length > 6) {
//     input.classList.add("invalid")
//     input.classList.remove("valid")
// } else {
//     input.classList.add("valid")
//     input.classList.remove("invalid")
// }
// })



// function maxLenhtf() {
//     if (inputLenth < 6) {
//         input.classList.add("valid")
//     } else {
//         input.classList.add("invalid")
//     }
    
//     // input.classList.add("invalid")
// }

// function minLenhtf() {
//     input.classList.add("valid")
// }

// if (input.length < 6) {
//     input.classList.add("valid")
// } else {
//     input.classList.add("invalid")
// }


// WORC-6
// const inputLentht = document.querySelector("[data-input]");
// const size = document.querySelector("[data-input-size]");
// const span = document.querySelector("[data-span]");
// const spanText = span.textContent;
// console.log(spanText);
// console.log(size);

// size.addEventListener("input", (e) => {
//     spanText.style.fontsize = `${e.currentTarget.value} px`
// })





