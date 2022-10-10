// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


const row = document.querySelector(".row");

for (var i=1; i <= 100; i++) {

    let result = i;

    if (i % 15 == 0) {
        result = "fizzbuzz";
    } else if (i % 3 == 0) {
        result = "fizz"; 
    } else if (i % 5 == 0) {
        result = "buzz";
    } 

    console.log(result);

    const cell = `<div class="cell ${result}">${i}</div>`;
    row.innerHTML += cell;
}



