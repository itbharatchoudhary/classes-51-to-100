// Exercise 1

function afterDelay(time, calback) {

    setTimeout(function () {
        calback();
    }, time);
}
afterDelay(2000, function () {
    console.log("2 seconds have passed");
});

// Exercise 2

function getUser(username, callback) {
    console.log("Fetching user from database...");
    setTimeout(() => {
        callback({ id: 1, username: "bharat" });
    }, 1000);
}

function getUserPosts(id, callback) {
    console.log("Fetching posts for user id:", id); 
    setTimeout(() => {
        callback(["post1", "post2", "post3"]);
    }, 2000);
}

getUser("bharat", function (data){
    getUserPosts(data.id, function (posts) {
        console.log(data.username, posts);
    });
});

// Exercise 3

function loginUser(username, callback) {
    console.log("Logging in user...");
    setTimeout(() => {
        callback({ id: 1, username: "bharat" });
    }, 1000);
}
function fetchPermissions(id, callback) {
    console.log("Fetching permissions for user id:", id);
    setTimeout(() => {
        callback(["read", "write", "delete"]);
    }, 2000);
}
function loadDashboard(permissions, callback) {
    console.log("Loading dashboard with permissions:", permissions);
    setTimeout(() => {
        callback();
    }, 1000);
}

loginUser("bharat", function (userdata) {
    fetchPermissions(userdata.id, function (permissions) {
        loadDashboard(permissions, function () {
            console.log("Dashboard loaded");
        });
    });
});


// Exercise 4

// Function 1: Fetch product after 1 second
function fetchProduct(productId, callback) {
    console.log("Fetching product...");
    setTimeout(() => {
        callback({ id: productId, name: "Laptop" });
    }, 1000);
}

// Function 2: Fetch reviews after 1 second
function fetchReviews(productId, callback) {
    console.log("Fetching reviews for product id:", productId);
    setTimeout(() => {
        callback(["Excellent!", "Good value", "Battery life could be better"]);
    }, 1000);
}

// Function 3: Display product details after 1 second
function displayProductDetails(product, reviews, callback) {
    console.log("Displaying product details...");
    setTimeout(() => {
        console.log("Product:", product.name);
        console.log("Reviews:", reviews);
        if (callback) callback();
    }, 1000);
}

// Callback chaining
fetchProduct(101, function (product) {
    fetchReviews(product.id, function (reviews) {
        displayProductDetails(product, reviews, function () {
            console.log("All done!");
        });
    });
});
