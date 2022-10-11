// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


const row = document.querySelector(".row");

for (let i=1; i <= 100; i++) {

    let result = i;
    let numberClass = "";

    if (i % 15 === 0) {
        result = "fizzbuzz";
        numberClass = "bg-lime"
    } else if (i % 3 === 0) {
        result = "fizz"; 
        numberClass = "bg-pink"
    } else if (i % 5 === 0) {
        result = "buzz";
        numberClass = "bg-seagreen"
    } 

    // console.log(result);

    const box = `<div class="box ${numberClass}">${result}</div>`;
    row.innerHTML += box;

    // const box = document.createElement("div");
    // box.innerHTML = result;
    // box.classList.add("box");
    // if (numberClass !== ""){

    //     box.classList.add(numberClass);
    // }
    // row.append(box);
}



