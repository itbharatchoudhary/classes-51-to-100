class ExtremeTemperatureError extends Error {
    constructor(message) {
        super(message);
        this.name = "ExtremeTemperatureError";
    }
}

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const output = document.getElementById("output");

    if (!city) {
        output.textContent = "Please enter a city name.";
        return;
    }

    try {
        const apikey = "e785c84fe28a8cb9afaea2fcfbf0fee3";

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        );

        if (!res.ok) {
            throw new Error("❌ City not found or API error");
        }

        const data = await res.json();
        const temp = data.main.temp;

        // extreme temp check  
        if (temp < -10 || temp > 45) {
            throw new ExtremeTemperatureError(` Extreme temperature detected: ${temp}°C`);
        }

        output.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${temp}°C</p>
            <p>Condition: ${data.weather[0].main}</p>
        `;

    } catch (error) {
        if (error instanceof ExtremeTemperatureError) {
            output.textContent = error.message;
        } else {
            output.textContent = "❌ Error: " + error.message;
        }
    }
}

document.getElementById("getWeatherBtn").addEventListener("click", getWeather);
