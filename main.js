// if ("serviceWorker" in navigator) {
//   window
//     .addEventListener("load", async () => {
//       await navigator.serviceWorker.register("./sw.js");
//     })
//     .catch((error) => {
//       console.log("Registration Failed: " + error);
//     });

const { createLog } = require("gatsby-cli/lib/reporter/redux/actions")

//   navigator.seviceWorker
//     .register("sw.js")
//     .then((registration) => {
//       console.log("SW Régistered!");
//       console.log(object);
//     })
//     .catch((error) => {
//       console.log("Registration Failed: " + error);
//     });
// } else {
// }


// let image_slider = document.getElementByClassName('image_slider');
// console.log(image_slider)

// let etape = 0;

// let nbr_img = image_slider.length;

// let precedent = document.querySelector('.precedent');
// let suivant = document.querySelector('.suivant')

// function enleverActiveImages() {
// for(let i=0; i<nbr_img;  i++) {
//     image_slider[i].classList.remove('active');
//     }
// }

// suivant.addEventListener('click', function() {
//     etape++;
//     enleverActiveImages();
//     image_slider[etape].classList.add('active');
// })