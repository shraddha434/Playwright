let statusCode = 600;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";



console.log(`Status ${statusCode}: ${category}`);


// 36_IQ.JS
let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);


//37 
console.log(typeof "hello");
console.log(typeof 123); // number
console.log(typeof 31.4); // number

// typeof true
//typeof undefined
// typeof null -> object