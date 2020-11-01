/*
// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

let array1 = [1, 2, 3, 4, 5];
console.log(array1);

let array2 = ["one", "two", "three", "four", "five"];
console.log(array2);

let array3 = [];
array3[0] = "first";
array3[1] = "2";
array3[2] = true;
array3[3] = false;
array3[4] = 5;
console.log(array3);*/

/*
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let mas = [];
mas[0] = 5;
mas[1] = 4;
mas[2] = 3;
mas[4] = 1
mas[3] = 2;
console.log(mas);*/

/*
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for(let i = 0; i < 10; i++) {
    document.write("<div style='font-weight: bold'>JavaScript<div>");
}*/

/*
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for(let j = 1; j <= 10; j++) {
    document.write(`<div>String №${j}</div>`);
}*/

/*// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let n = 20;
while(n > 0) {
    document.write(`<h1>Number ${n}</h1>`);
    n--;
}*/

/*
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let k = 1;
while(k < 21) {
    document.write("<h1>Text: " + k + "</h1>");
    ++k;
}*/

/*
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i < 10; i++) {
    console.log(array[i]);
}*/

/*
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let list = ["zero", "one", "two", "three", "four", "five", "6", "7", "8", "9"];
for(let k = 0; k < 10; k++) {
    console.log(list[k]);
}*/

/*
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arraynew = [];
arraynew[9] = "1";
arraynew[8] = "2";
arraynew[7] = "3";
arraynew[6] = "4";
arraynew[5] = "5";
arraynew[4] = "6";
arraynew[3] = "7";
arraynew[2] = 8;
arraynew[1] = "9";
arraynew[0] = 10;
let j = 9;
while(j > -1) {
    console.log(arraynew[j]);
    j--;
}*/

/*// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let array = ["1", "2", '3', 4, 5, true, true, 8, false, 10];
for(i = 0; i < array.length; i++) {
    if(typeof array[i] == "boolean") console.log(array[i]);
}*/

/*// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let array = ["1", "2", '3', 4, 5, true, true, 8, false, 10];
let i = 0;
while(array.length > i) {
    if(typeof array[i] == "number") console.log(array[i]);
    i++;
}*/

/*// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let array = ["1", "2", '3', 4, 5, true, true, 8, false, 10];

for(let i = 0; i <array.length; i++) {
    if(typeof array[i] == "string") {
        console.log(array[i]);
    }
}*/

/*
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let masiv = [];
masiv[10] = 10;
masiv[11] = 9;
masiv[12] = 8;
masiv[13] = 7;
masiv[14] = 9;
masiv[15] = 5;
masiv[19] = 1;
masiv[16] = 4;
masiv[17] = 3;
masiv[18] = 2;
for(let i = 0; i < masiv.length; i++) {
    console.log(masiv[i]);
}*/

/*// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for(let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i + "<br/>");
}*/

/*
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for(let k = 100; k > 0; k--) {
    console.log(k);
    document.write(k + "</br>");
}*/

/*
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 200; j += 2) {
    console.log(j/2);
    document.write("<br/>" + j/2);
}*/

/*
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for(let i = 0; i < 100; i++) {
    if(i % 2 == 0) {
        console.log(i);
        document.write(`${i}<br>`);
    }
}*/

/*
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for(let i = 1; i <= 100; i++) {
    if(i % 2 != 0) {
        console.log(i);
        document.write(i + "<br/>")
    }
}*/

/*// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 60; j++) {
        console.log(i + " " + j);
    }
    if(i == 1) console.log(i + 1 + " " + 0);
}*/

/*// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for(let hour = 0; hour < 3; hour++) {
    for(let minute = 0; minute < 60; minute++) {
        if(hour == 2 && minute == 20) {
            document.write(`${hour}:${minute}:0<br/>`);
            break;
        }
        for(let second = 0; second < 60; second++) {
            document.write(`${hour}:${minute}:${second}<br/>`);
        }
    }
}*/

/*// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let array = ['a', 'b', 'c'];
let word = "";
for(let i = 0; i < array.length; i++) {
    word += array[i];
}
console.log(word);*/

/*// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let array1 = ['a', 'b', 'c'];
let word = "";
let i = 0;
while (i < 3) {
    word += array1[i];
    i++;
}
console.log(word);*/

/*// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let array2 = ["a", "b", "c"];
let word = "";
for(letters of array2) {
    word += letters;
}
console.log(word);*/

/*
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while(i < array.length) {
    console.log(array[i]);
    i++;
}*/

/*// 2. перебрати його циклом for

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}*/

/*
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 1;
while (i < array.length) {
    console.log(array[i]);
    i += 2;
}*/

/*
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for(let i = 0; i < array.length; i++) {
    if(i % 2 != 0) console.log(array[i]);
}*/

/*// 5. перебрати циклом while та вивести  числа тільки парні  значення

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while(i < array.length) {
    if(i % 2 == 0) console.log(array[i]);
    i++;
}*/

/*
// 6. перебрати циклом for та вивести  числа тільки парні  значення

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for(let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
}*/

/*// 7. замінити кожне число кратне 3 на слово "okten"

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for(let i = 0; i < array.length; i++) {
    if(i % 3 == 0 && i != 0) array[i] = "okten";
}
console.log(array);*/

/*// 8. вивести масив в зворотньому порядку.

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    let j = array.length - 1;
    for(let i = 0; i < (array.length/2); i++) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            j--;
    }
    console.log(array);*/

/*// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = array.length - 1;
while (i > -1) {
    console.log(array[i]);
    i--;
}*/

/*// 2. перебрати його циклом for

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = array.length - 1; i > -1; i--) {
    console.log(array[i]);
}*/

/*// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = array.length - 1;
while (i > 0) {
    console.log(array[i])
    i -= 2;
}*/

/*// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for(let i = array.length -1; i > -1; i--) {
    if(i % 2 != 0) console.log(array[i]);
}*/

/*// 5. перебрати циклом while та вивести  числа тільки парні  значення

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = array.length - 1;
while(i > -1) {
    if(i % 2 == 0 && i != 0) console.log(array[i]);
    i--;
}*/

/*// 6. перебрати циклом for та вивести  числа тільки парні  значення

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for(let i = array.length - 1; i > -1; i--) {
    if(i != 0 && i % 2 == 0) console.log(array[i]);
}*/

/*// 7. замінити кожне число кратне 3 на слово "okten"

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for(let i = array.length - 1; i > -1; i--) {
    if(i != 0 && i % 3 == 0) {
        array[i] = "okten";
    }
}
console.log(array);*/

/*
// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.

let array = [];
j = 2;
for (let i = 0; i < 50; i++) {
    array[i] = j;
    j += 2;
}
console.log(array);*/

/*// - заповнити його 50 непарними числами за допомоги циклу.

let array = [];
let i = 1;
let j = 0;
while(i < 100) {
    array[j] = i;
    i += 2;
    j++;
}
console.log(array);*/
