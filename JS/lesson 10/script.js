/*// Реалізувати друкарську машинку.
//     У вас є текст "Hello World". (або юудь який інший на ваш розсуд)
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let i = 0;
let text = "";
let div = document.createElement("div");
document.body.appendChild(div);

function typeWriter(wordForTyping) {
    let array = wordForTyping.split("");
        return new Promise(() => {
                 setTimeout(() => {
                     text += array[i];
                     div.innerText = text;
                     if(i < array.length - 1) {
                         i++;
                         typeWriter(wordForTyping);
                     }
                }, Math.random()*(1000 - 100) + 100);
        });
}

typeWriter("Вите теперь 25!!!");*/

// доп таска:
//     отсортировать с помощью setTimeout() массив  чисел [4,1,3,2,5] -> [1,2,3,4,5] (массив может быть любой длины)
// условие: нельзя пользоваться методами массивов
// debugger

/*// For insignificant numbers:

let arrayForSort = [4,1,3,2,5,1,1];
let newArray = [];

for(let i = 0; i < arrayForSort.length; i++) {
    setTimeout(() => {
        newArray.push(arrayForSort[i]);
    }, arrayForSort[i]);
}

sum = 0;
for(flow of arrayForSort) {
    sum += flow + 10;
}

setTimeout(() => {
    console.log(newArray);
}, sum);*/

/*// For big numbers:

let arrayForSort = [5,5,5,4,2000,100,2,2,1, 5000000];
let arrayTimeout = [];
count = 0;

function sort(array) {
    let delay = 0;
    for(let i = 0; i < arrayForSort.length; i++) {
        arrayTimeout[i] = delay;
        delay += 5;
    }

    for(let j = 0; j < array.length - 1; j++) {
        if(array[j] > array[j + 1]) {
            let temp = arrayTimeout[j];
            arrayTimeout[j] = arrayTimeout[j + 1];
            arrayTimeout[j + 1] = temp;
        }
    }

    let newArray = [];
    for (let k = 0; k < array.length; k++) {
        setTimeout(() => {
            newArray.push(array[k]);
            }, arrayTimeout[k]);
    }

    setTimeout(() => {
        if(count < array.length - 1) {
            console.log(newArray);
            sort(newArray);
            count++;
        }
    }, (array.length * 5));
}

sort(arrayForSort);*/

/*// Знайти найбільший існуючий поліндром який може утворитися завдяки добутку двох простих пятизначних чисел.

primeNumber = [1];

for(let i = 2; i < 100000; i++) {
    let count = 0;
        for(flow of primeNumber){
            if(i % flow == 0) count++;
        }
            if(count == 1) primeNumber.push(i);
}

console.log("Prime numbers:")
console.log(primeNumber);

///////////////////////////////////////////////////////////////////////////////

necessaryArray = []
for(flow of primeNumber) {
    if(flow / 10000 > 1) necessaryArray.push(flow);
}

console.log("Five-digit numbers:");
console.log(necessaryArray);

//////////////////////////////////////////////////////////////////////////////

let arrayPalindrom = [];

function findPalindrom(number) {
    let string = number.toString();
    let arrayDigit = string.split("");
    let count = 0;
    for(let i = 0; i < Math.floor(arrayDigit.length / 2); i++) {
        if(arrayDigit[i] == arrayDigit[(arrayDigit.length - 1 - i)]) count++;
    }
    if(count == Math.floor(arrayDigit.length / 2)) arrayPalindrom.push(number);
}

//////////////////////////////////////////////////////////////////////////////

for(let i = 0; i < necessaryArray.length; i++){
    for(let j = i; j < necessaryArray.length; j++){
        let result = necessaryArray[i] * necessaryArray[j];
        findPalindrom(result);
    }
}

    console.log("Palindrom array:")
    console.log(arrayPalindrom.sort((a, b) => a - b));

    console.log("max palindrom value:");
    console.log(arrayPalindrom[arrayPalindrom.length - 1]);

//////////////////////////////////////////////////////////////////////////////*/





