// Debounce

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const searchInput = document.getElementById("search");
const debounceOutput = document.getElementById("debounceOutput");

function fetchResults(query) {
  debounceOutput.innerHTML = "API Request for: " + query;
}

const debouncedSearch = debounce(fetchResults, 500);

searchInput.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});

// Throttle

function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const throttleOutput = document.getElementById("throttleOutput");
const btn = document.getElementById("submit");

const throttledClick = throttle(() => {
  throttleOutput.innerHTML = "Button clicked at " + new Date().toLocaleTimeString();
}, 1000);

btn.addEventListener("click", throttledClick);

// JSON.stringify

const jsonStringifyOutput = document.getElementById("jsonStringifyOutput");

const user = { name: "Anubhav", age: 24 };
jsonStringifyOutput.innerHTML = JSON.stringify(user);


// JSON.parse

const jsonParseOutput = document.getElementById("jsonParseOutput");

const json = '{"name":"Anubhav","age":24}';
jsonParseOutput.innerHTML = JSON.parse(json).name;


// LocalStorage Example

const localOutput = document.getElementById("localOutput");
const saveBtn = document.getElementById("saveData");
const loadBtn = document.getElementById("loadData");

saveBtn.addEventListener("click", () => {
  localStorage.setItem("game", JSON.stringify({ score: 100 }));
  localOutput.innerHTML = "Saved score = 100";
});

loadBtn.addEventListener("click", () => {
  const game = JSON.parse(localStorage.getItem("game"));
  localOutput.innerHTML = "Loaded score = " + game.score;
});
