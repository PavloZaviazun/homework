// Реалізувати друкарську машинку.
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
    let array = wordForTyping.slice("");
        return new Promise(() => {
                 setTimeout(() => {
                     text += array[i];
                     div.innerText = text;
                     if(i < array.length - 1) {
                         typeWriter(wordForTyping);
                         i++;
                     }
                }, Math.random()*(1000 - 100) + 100);
        });
}

typeWriter("Вите теперь 25!!!")

