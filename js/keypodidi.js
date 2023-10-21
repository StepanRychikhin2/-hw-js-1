const gallery = document.querySelector(".gallery");
const gallereyLi = gallery.querySelectorAll("li");
const image = document.querySelectorAll(".image");
console.log(gallery);
console.log(gallereyLi);
console.log(image);



for (let i = 0; i < image.length; i++) {
        const oneli = image[i];
        document.addEventListener("keydown", (e) => {
            if (e.code === "ArrowLeft") {
                 i--;
                 oneli.classList.toggle("full-image-container")
                 oneli.classList.toggle("full-image")
                console.log(e.code);
                } else if (e.code === "ArrowRight") {
                    i++;
                    oneli.classList.toggle("full-image-container")
                 oneli.classList.toggle("full-image")
                } else {
                    console.log("error");
                }
    
        })
        oneli.addEventListener("click", () => {
            oneli.classList.toggle("full-image-container")
            oneli.classList.toggle("full-image")
        })
        
        
    }




// WORC-2

// const button1 = document.querySelector("[data-action1]");
// const button2 = document.querySelector("[data-action]");


// button1.addEventListener("click", create)
// button2.addEventListener("click", remove)



//     function randomColor() {
//         const r = Math.floor(Math.random() * 256);
//         const g = Math.floor(Math.random() * 256);
//         const b = Math.floor(Math.random() * 256);
//         return `rgb(${r}, ${g}, ${b})`;
//       }
  
//       function create() {
//         const amoun = document.getElementById('inputAmount').value;
//         const konteiner = document.getElementById('boxes');
  
//         // Очищення попередніх елементів
//         konteiner.innerHTML = '';
  
//         let size = 30;
  
//         for (let i = 0; i < amoun; i++) {
//           const box = document.createElement('div');
//           box.classList.add('box');
//           box.style.backgroundColor = randomColor();
//           box.style.width = size + 'px';
//           box.style.height = size + 'px';
//           konteiner.appendChild(box);
  
//           size += 10;
//         }
//       }
  
//       function remove() {
//         const konteiner = document.getElementById('boxes');
//         konteiner.innerHTML = '';
//       }















