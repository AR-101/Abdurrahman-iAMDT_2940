var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question('Enter your city ', function (cities) {
    if (cities.toLowerCase() == "colombo" || cities.toLowerCase() == "galle" || cities.toLowerCase() == "gampaha") {
        if (cities == "gampaha") {
            console.log("High Risk Area");
        } else {
            console.log("Low Risk Area");
        }
    } else {
        console.log("City is incorrect");
    }
    console.log('Stay Safe');
    readline.close();
});

// Use 'toLowerCase()' method to convert the user's input to lowercase
//  So that we can compare it with the city names in lowercase.