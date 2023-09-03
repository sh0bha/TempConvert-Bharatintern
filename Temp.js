function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(inputTemp)) {
        resultDiv.innerHTML = "Please enter a valid temperature.";
        return;
    }

    let result = "";

    if (inputUnit === "celsius") {
        result = `${inputTemp}°C is equal to ${convertCtoF(inputTemp)}°F and ${convertCtoK(inputTemp)}K.`;
    } else if (inputUnit === "fahrenheit") {
        result = `${inputTemp}°F is equal to ${convertFtoC(inputTemp)}°C and ${convertFtoK(inputTemp)}K.`;
    } else if (inputUnit === "kelvin") {
        result = `${inputTemp}K is equal to ${convertKtoC(inputTemp)}°C and ${convertKtoF(inputTemp)}°F.`;
    }

    resultDiv.innerHTML = result;
}

function convertCtoF(celsius) {
    return (celsius * 9/5) + 32;
}

function convertCtoK(celsius) {
    return celsius + 273.15;
}

function convertFtoC(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertFtoK(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function convertKtoC(kelvin) {
    return kelvin - 273.15;
}

function convertKtoF(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}
