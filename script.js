// Temperature conversion: Celsius to Fahrenheit
document.getElementById('convertTemperature').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } else {
        alert('Please enter a valid number for Celsius');
    }
});

// Weight conversion: Kilograms to Pounds
document.getElementById('convertWeight').addEventListener('click', function() {
    const kilograms = parseFloat(document.getElementById('kilograms').value);
    if (!isNaN(kilograms)) {
        const pounds = kilograms * 2.205;
        document.getElementById('pounds').value = pounds.toFixed(2);
    } else {
        alert('Please enter a valid number for Kilograms');
    }
});

// Distance conversion: Kilometers to Miles 
document.getElementById('convertDistance').addEventListener('click', function() {
    const kilometers = parseFloat(document.getElementById('kilometers').value);
    if (!isNaN(kilometers)) {
        const miles = kilometers / 1.609;
        document.getElementById('miles').value = miles.toFixed(2);
    } else {
        alert('Please enter a valid number for Kilometers');
    }
});