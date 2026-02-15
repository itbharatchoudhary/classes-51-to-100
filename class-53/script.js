const para = document.querySelector("p");
const Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

let iteration = 0;

function randomText() {
    const str = text.split('').map((char, index) => {
        if (index < iteration) {
            return char;
        }
        return Characters[Math.floor(Math.random() * Characters.length)];
    }).join("");

    para.innerText = str;

    if (iteration < text.length) {
        iteration++;
    }
}

setInterval(randomText, 50);
