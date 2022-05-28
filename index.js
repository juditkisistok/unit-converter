function lengthConv(number) {
    const output = document.getElementById('length-conversion');
    const feet = (number*3.28084).toFixed(3);
    const meters = (number*0.3048).toFixed(3);
    output.textContent = number + " meters = " + feet
        + " feet | " + number + " feet = " + meters + " meters";
}

function volConv(number) {
    const output = document.getElementById('volume-conversion');
    const gallon = (number*3.785411784).toFixed(3);
    const liter = (number*0.26417205).toFixed(3);
    output.textContent = number + " liters = " + liter + " gallons | " +
        number + " gallons = " + gallon + " liters";
}

function massConv(number) {
    const output = document.getElementById('mass-conversion');
    const pound = (number*2.20462).toFixed(3);
    const kilo = (number*0.453592).toFixed(3);
    output.textContent = number + " kilos = " + pound + " pounds | " +
        number + " pounds = " + kilo + " kilos";
}

// a wrapper to make it easier to call all 3 functions in one
function allConv(number) {
    lengthConv(number);
    volConv(number);
    massConv(number);
}

// initialize converter with a default value of 20
const number = document.getElementById('number-data').value;
allConv(number);