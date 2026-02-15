// 1. Promises :

const orderFood = new Promise((resolve, reject) => {
    let restaurantOpen = true;

    if (restaurantOpen) resolve("Food delivered");
    else reject("Order cancelled");
});

// 2. Async/Await :

async function bookUber() {
    let cab = await getUber(); 
    console.log("Cab arrived:", cab);
}

// 3.1. setTimeout :

setTimeout(() => {
    console.log("Alarm ringing!");
}, 6000); 

// 3.2. setInterval :

setInterval(() => {
    console.log("1 second passed");
}, 1000);

// 4. Fetch API :

fetch("https://api.com/product/1")
    .then(res => res.json())       
    .then(data => console.log(data));
