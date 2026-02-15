addEventListener("mousemove", (e) =>{
    // console.log(e.clientX,e.clientY)

   document.body.style.setProperty("--x", e.clientX + 'px');
      document.body.style.setProperty("--y", e.clientY + 'px');

})

const para = document.querySelector("p");
const Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

let iteration = 0

function randomText() {
    const str = text.split('').map((char, index) => {
        if (index < iteration) {
            return char
        }
        return Characters.split("")[Math.floor(Math.random() * 52)]
    }).join("")
    para.innerText = str;

    iteration += 0.1;
}

setInterval(randomText, 30);


// const para = document.querySelector("p");
// const Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// const text = para.innerText;

// let iteration = 0;

// function randomText() {
//     const str = text.split('').map((char, index) => {
//         if (index < iteration) {
//             return char;
//         }
//         return Characters[Math.floor(Math.random() * Characters.length)];
//     }).join("");

//     para.innerText = str;

//     if (iteration < text.length) {
//         iteration++;
//     }
// }

// setInterval(randomText, 50);
