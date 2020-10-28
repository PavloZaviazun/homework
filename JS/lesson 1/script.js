/* // - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
Вывести каждую при помощи console.log , alert, document.write
let greeting = "hello";
let companyName = "owu";
let internationalDomain = "com";
let ukrainianDomain = "ua";
let initialNumber = 1;
let decadeNumber = 10;
let minimumNumber = -999;
let randomNumber1 = 123;
let piNumber = 3.14;
let floatNumber = 2.7;
let randomNumber2 = 16;
let booleanNumber1 = true;
let booleanNumber2 = false;

console.log(greeting + " " + companyName);
console.log(internationalDomain + " " + ukrainianDomain);
console.log(initialNumber + " " + decadeNumber + " " + minimumNumber + " " + randomNumber1 + " " + randomNumber2);
console.log(piNumber + " " + floatNumber);
console.log(booleanNumber1 + " or " + booleanNumber2 + "?");

alert(greeting + " " + companyName);
alert(internationalDomain + " " + ukrainianDomain);
alert(initialNumber + " " + decadeNumber + " " + minimumNumber + " " + randomNumber1 + " " + randomNumber2);
alert(piNumber + " " + floatNumber);
alert(booleanNumber1 + " or " + booleanNumber2 + "?");

document.write(greeting + " " + companyName + "<br>");
document.write(internationalDomain + " " + ukrainianDomain + "<br>");
document.write(initialNumber + " " + decadeNumber + " " + minimumNumber + " " + randomNumber1 + " " + randomNumber2 + "<br>");
document.write(piNumber + " " + floatNumber + "<br>");
document.write(booleanNumber1 + " or " + booleanNumber2 + "?" + "<br>");*/

/* // - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
greeting = Math.random() * (10 - 1) + 1;
let greetingNew = Math.round(greeting);
// Включно від 1 до 10
companyName = "infocom";
internationalDomain = "gov";
ukrainianDomain = "com.ua";
initialNumber = 5;
decadeNumber = 100;
minimumNumber = -500;
randomNumber1 = 555;
piNumber = 3.14159;
floatNumber = 7.7;
randomNumber2 = 11;
booleanNumber1 = false;
booleanNumber2 = false;

console.log(greetingNew);
console.log(companyName);
console.log(internationalDomain + " " + ukrainianDomain);
console.log(initialNumber + " " + decadeNumber + " " + minimumNumber + " " + randomNumber1 + " " + randomNumber2);
console.log(piNumber + " " + floatNumber);
console.log(booleanNumber1 + " or " + booleanNumber2 + "?");

alert(greeting + " " + companyName);
alert(internationalDomain + " " + ukrainianDomain);
alert(initialNumber + " " + decadeNumber + " " + minimumNumber + " " + randomNumber1 + " " + randomNumber2);
alert(piNumber + " " + floatNumber);
alert(booleanNumber1 + " or " + booleanNumber2 + "?");

document.write(greeting + " " + companyName + "<br>");
document.write(internationalDomain + " " + ukrainianDomain + "<br>");
document.write(initialNumber + " " + decadeNumber + " " + minimumNumber + " " + randomNumber1 + " " + randomNumber2 + "<br>");
document.write(piNumber + " " + floatNumber + "<br>");
document.write(booleanNumber1 + " or " + booleanNumber2 + "?" + "<br>");*/

/* // - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const number1 = 7;
const number2 = 14;
const number3 = 21;
const string1 = "String1";
const string2 = "String2";
const string3 = "String3";

console.log(number1);
console.log(number2);
console.log(number3);
console.log(string1);
console.log(string2);
console.log(string3);

alert(number1);
alert(number2);
alert(number3);
alert(string1);
alert(string2);
alert(string3);

document.write(number1 + "<br>");
document.write(number2 + "<br>");
document.write(number3 + "<br>");
document.write(string1 + "<br>");
document.write(string2 + "<br>");
document.write(string3 + "<br>");*/

/*//- при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

let firstName, secondName, otchestvo;
firstName = prompt("Введите имя:");
secondName = prompt("Введите фамилию:");
otchestvo = prompt("Введите отчество:");
console.log(firstName.toUpperCase() + " " + secondName + " " + otchestvo);
alert(firstName.toUpperCase() + " " + secondName + " " + otchestvo);
document.write(firstName.toUpperCase() + " " + secondName + " " + otchestvo);*/

/*// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let person = firstName + " " +  secondName + " " +  otchestvo;
console.log(person);*/

/*
// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

let husbandFirstName, husbandLastName, husbandOtchestvo, wifeFirstName, wifeLastName, wifeOtchestvo;
husbandFirstName = prompt("Введите имя мужа:");
husbandLastName = prompt("Введите фамилию мужа:");
husbandOtchestvo = prompt("Введите отчество мужа:");
wifeFirstName = prompt("Введите имя жены:");
wifeLastName = prompt("Введите фамилию жены:");
wifeOtchestvo = prompt("Введите отчество жены:");
let wifeFullName = wifeLastName + " " + wifeFirstName + " " + wifeOtchestvo;
let husbandFullName = husbandLastName + " " + husbandOtchestvo + " " + husbandOtchestvo;
console.log(wifeFullName);
console.log(husbandFullName);*/

/*// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль

let chislo1 = +prompt("Введите чсло №1");
let chislo2 = +prompt("Введите чсло №2");
let chislo3 = +prompt("Введите чсло №3");

console.log(chislo1);
console.log(chislo2);
console.log(chislo3);*/

/*// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let number1 = parseInt(prompt("Put the first number:"));
let number2 = parseInt(prompt("Put the second number:"));
let number3 = parseInt(prompt("Put the third number:"));
let number4 = parseInt(prompt("Put the fourth number:"));

let result = number1 + number2 + number3 + number4;
console.log(result);*/

/*// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let num1 = parseFloat(prompt("Float #1:"));
let num2 = parseFloat(prompt("Float #2:"));
let num3 = parseFloat(prompt("Float #3:"));

let result = num1 + num2 + num3;
console.log(result);*/

/*// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

let firstOne = Math.round(prompt("Writedown FirstOne:"));
let secondOne = Math.round(prompt("Writedown SecondOne:"));
let thirdOne = Math.round(prompt("Writedown ThirdOne:"));

let result = firstOne + secondOne + thirdOne;
console.log(result);*/

/*// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.

let root = +prompt("Ввести число:");
let degree = +prompt("Ввести степень:");

let res = Math.pow(root, degree);
console.log(res);*/

/*// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

let a = 100;
let b = '100';
let c = true;
let d = undefined;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));*/

/*// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

let one = 5 < 6;
let two = 5 > 6;
let three = 5 === 6;
let four = (5 == 6);
let five = (10 == 10);
let six = (10 === 10);
let seven = 10 < 10;
let eight = 10 > 10;
let nine = (10 !== 10);
let ten = (123 === '123');
let eleven = (123 == '123');

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(seven);
console.log(eight);
console.log(nine);
console.log(ten);
console.log(eleven);*/

/*// Дополнительно:
//     - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
console.log(132 > 100 && 45 < 12 );
console.log(34 > 33 && 23 < 90 );
console.log(99 > 100 && 45 > 12 );
console.log(132 > 100 || 45 < 12 );
console.log(111 > 11 || 45 < 111 );
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
console.log(!!'-1');
console.log(!!-1);
console.log(!!'0');
console.log(!!'null');
console.log(!!'undefined');
console.log(!!(3/'owu'));
console.log((111 > 11 || 45 < 111) ||  !!'0');
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));*/




