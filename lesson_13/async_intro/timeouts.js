// асинхронный код / синхронный код
console.log("apple");

setTimeout(() => {
    console.log("orange");
}, 5000);
console.log("banana");
// JS - однопоточный язык программирования

function getSix() {
    setTimeout(() => {
        return 6
    }, 4000)
}
let x = getSix();
console.log(x);

function printClap() {
    console.log("clap");
}

function printBravo() {
    console.log("bravo");
}

function clapHands() {
    setTimeout(printClap, 2000);
    setTimeout(printBravo, 3000);
}
clapHands();