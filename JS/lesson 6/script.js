/*// - создать массив с 20 числами.
let array =[];
for(let i = 0; i < 20; i++) {
    array.push(Math.round(Math.random() * (20 - 0) + 0));
}
console.log(array);

/!*!// -- при помощи метода sort и колбека  отсортировать массив.

array.sort((a, b) => a - b );*!/

/!*!// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

array.sort((a, b) => b - a );*!/

/!*!// -- при помощи filter получить числа кратные 3

filter = array.filter((number, index) => {
    if (number % 3 || number == 0) return false;
    return true;
});*!/

/!*!// -- при помощи filter получить числа кратные 10

filter = array.filter((value, index) => value % 10 == 0 && value != 0);*!/

/!*!// -- перебрать (проитерировать) массив при помощи foreach()
let i = 1
array.forEach(value => {
    console.log(`${value} ${i}-ий`);
    i++;
})*!/

/!*!// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let newArray = array.map(value => value * 3);*!/*/

/*// - создать массив со словами на 15-20 элементов.
wordArray = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen"];

/!*!// -- отсортировать его по алфавиту в восходящем порядке.

wordArray.sort((a, b) => a > b);*!/

/!*!// -- отсортировать его по алфавиту  в нисходящем порядке.

wordArray.sort((a, b) => b > a);*!/

/!*!// -- отфильтровать слова длиной менее 4х символов

let filtWord = wordArray.filter(value => value.length < 4);*!/

/!*!// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let newWord = wordArray.map(value => value + "!")*!/*/

/*// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
console.log(users);

let tempUsers = JSON.stringify(users);
let newUsers = JSON.parse(tempUsers);

/!*!// - відсортувати його за  віком (зростання , а потім окремо спадання)

// newUsers.sort((a, b) => a.age > b.age);
newUsers.sort((a, b) => b.age > a.age);
console.log(newUsers);*!/

/!*!// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

newUsers.sort((a, b) => a.name.length - b.name.length);
newUsers.sort((a, b) => - a.name.length + b.name.length);
console.log(newUsers);*!/

/!*!// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
newUsers.map((value, index) => {
    value.id = index;
    return value;
});


// - відсортувати його за індентифікатором

newUsers.sort((a, b) => b.id - a.id);

console.log(newUsers);*!/*/

/*// -- наисать функцию калькулятора с 2мя числами и колбеком

let number1 = +prompt("Put number 1:");
let sign = prompt("Put sign:");
let number2 = +prompt("Put number 2:");
let calc = (num1, sign, num2) => {
    if(sign == "+") return num1 + num2;
    else if(sign == "-") return num1 - num2;
    else if(sign == "/") return num1 / num2;
    else if( sign == "*") return num1 * num2;
    else return 'Знак может быть "+", "-", "/", "*"';
};
console.log(calc(number1, sign, number2));*/

/*// -- наисать функцию калькулятора с 3мя числами и колбеком

let value = prompt("Enter the task:");
let arrayNumbers = [];
let arraySign = [];
let i = 0;
let stroka = "";
function check() {
    while(i <= value.length) {
        if (value[i] != "+" && value[i] != "-" && value[i] != "*" && value[i] != "/") {
            stroka += value[i];
            i++;
            if(i == value.length) arrayNumbers.push(stroka);
            check();
        } else {
            arraySign.push(value[i]);
            arrayNumbers.push(stroka);
            stroka = "";
            i++;
            check();
        }
    }

}

check();

k = 0;
let temp = +arrayNumbers[k];
let equal = arraySign.forEach((sign) => {
    if(sign == "+") {
        k++;
        temp += +arrayNumbers[k];
    }
    if(sign == "-") {
        k++;
        temp -= +arrayNumbers[k];
    }
    if(sign == "*") {
        k++;
        temp *= +arrayNumbers[k];
    }
    if(sign == "/") {
        k++;
        temp /= +arrayNumbers[k];
    }
})
console.log(temp);*/

/*// Найти сумму примитивных элементов:

// let array = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// let flatArray = array.flat(3);
// let sum = 0;
// flatArray.forEach(value => {
//     sum += value;
// })
// console.log(sum);

/!*let array = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

let temp = 0;

let sum = function(arrayNew) {
    arrayNew.forEach(value => {
        if(typeof value == "object") sum(value);
        else temp += value;
    })
}

sum(array);
console.log(temp);*!/*/

/*let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

console.log(cars);
let temp = JSON.stringify(cars);
let carsArray = JSON.parse(temp);

/!*!// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

let sorted = carsArray.filter(value => value.volume > 3);
console.log(sorted);*!/

/!*!// - двигун = 2л

let sorted = carsArray.filter(value => value.volume == 2);
console.log(sorted);*!/

/!*!// - виробник мерс
let sorted = carsArray.filter(value => value.producer == "mercedes");
console.log(sorted);*!/

/!*!// - двигун більше 3х літрів + виробник мерседес
let sorted = carsArray.filter(value => value.producer == "mercedes" && value.volume > 3);
console.log(sorted);*!/

/!*!// - двигун більше 3х літрів + виробник субару

let sorted = carsArray.filter(value => value.volume > 3 && value.producer == "subaru");
console.log(sorted);*!/

/!*!// - сили більше ніж 300

let sorted = carsArray.filter(value => value.power > 300);
console.log(sorted);*!/

/!*!// - сили більше ніж 300 + виробник субару

let sorted = carsArray.filter(value => value.power > 300 && value.producer == "subaru");
console.log(sorted);*!/

/!*!// - мотор серіі ej

let sorted = carsArray.filter(value => value.engine.includes("ej"));
console.log(sorted);*!/

/!*!// - сили більше ніж 300 + виробник субару + мотор серіі ej

let sorted = carsArray.filter(value => value.power > 300 && value.producer == "subaru" && value.engine.includes("ej"));
console.log(sorted);*!/

/!*!// - двигун меньше 3х літрів + виробник мерседес

let sorted = carsArray.filter(value => value.volume < 3 && value.producer == "mercedes");
console.log(sorted);*!/

/!*!// - двигун більше 2л + сили більше 250

let sorted = carsArray.filter(value => value.volume > 2 && value.power > 250);
console.log(sorted);*!/

/!*!// - сили більше 250  + виробник бмв

let sorted = carsArray.filter(value => value.power > 250 && value.producer == "bmw");
console.log(sorted);*!/*/

/*// - взять слдующий массив

let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

console.log(usersWithAddress);

let temp = JSON.stringify(usersWithAddress);
let array = JSON.parse(temp);


/!*!// -- отсортировать его по id пользователей

array.sort((a, b) => a.id - b.id);

console.log(array);*!/

/!*!// -- отсортировать его по id пользователей в обратном опрядке

array.sort((a, b) => b.id - a.id);
console.log(array);*!/

/!*!// -- отсортировать его по возрасту пользователей

array.sort((a, b) => a.age - b.age);
console.log(array); *!/

/!*!// -- отсортировать его по возрасту пользователей в обратном порядке

array.sort((a, b) => b.age - a.age);
console.log(array);*!/

/!*!// -- отсортировать его по имени пользователей

array.sort((a, b) => a.name > b.name);
console.log(array);*!/

/!*!// -- отсортировать его по имени пользователей в обратном порядке

array.sort((a, b) => b.name > a.name);
console.log(array);*!/

/!*!// -- отсортировать его по названию улицы  в алфавитном порядке

array.sort((a, b) => a.address.street > b.address.street);
console.log(array);*!/

/!*!// -- отсортировать его по номеру дома по возрастанию

array.sort((a, b) => a.address.number - b.address.number);
console.log(array);*!/

/!*!// -- отфильтровать (оставить) тех кто младше 30

let filtered = array.filter(value => value.age < 30);
console.log(filtered)*!/

/!*!// -- отфильтровать (оставить) тех у кого отрицательный статус

let filtered = array.filter(value => !value.status);
console.log(filtered);*!/

/!*!// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

let filtered = array.filter(value => !value.status && value.age < 30);
console.log(filtered);*!/

/!*!// -- отфильтровать (оставить) тех у кого номер дома четный

let filtered = array.filter(value => value.address.number % 2 == 0);
console.log(filtered);*!/*/

/*// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let car1 = {mark : "bmw", power: 150, owner: {name: "Pasha", age: 29, experience: 5}, price: 7000, year: 2005,};
let car2 = {mark : "mercedes", power: 250, owner: {name: "Misha", age: 19, experience: 1}, price: 5000, year: 2003,};
let car3 = {mark : "audi", power: 350, owner: {name: "Dasha", age: 18, experience: 0}, price: 15000, year: 2020,};
let car4 = {mark : "lexus", power: 500, owner: {name: "Lena", age: 50, experience: 25}, price: 7500, year: 2015,};
let car5 = {mark : "skoda", power: 80, owner: {name: "Leha", age: 35, experience: 10}, price: 8000, year: 2008,};
let car6 = {mark : "daewoo", power: 70, owner: {name: "Igor", age: 44, experience: 15}, price: 5000, year: 2004,};
let car7 = {mark : "renault", power: 120, owner: {name: "Vova", age: 29, experience: 6}, price: 6500, year: 207,};

let arrayCar = [car1, car2, car3, car4, car5, car6, car7];

console.log(arrayCar);

let cars = JSON.parse(JSON.stringify(arrayCar));

let i = 0;
let sumPrice = 0;
cars.map(value => {
    if(i % 2 == 0) {
        value.power *= 1.1;
        value.price *= 1.05;
    }
    i++;
    if(value.owner.experience > 5 && value.owner.age > 25) value.owner.experience += 1;
    sumPrice += value.price;
});

console.log(cars);
console.log(sumPrice);*/

/*// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let array = [];
let value = 0;
for(let i = 0; i < 10; i++) {
    Math.random() < 0.5 ? value = Math.round(Math.random() * (10 - 0) + 0) * (-1) : value = Math.round(Math.random() * (10 - 0) + 0);
    array[i] = value;
}
array.sort((a, b) => a - b);
console.log(array);

let key = +prompt("Put your key:");
let arraySorted = [];
let first = array.find((val, index) => {
    if(val === key) arraySorted.push(index);
});
console.log(`Key = ${key}`);
let minimum = -1;
let maximum = -1;
for(let i = 0; i < arraySorted.length; i++) {
    minimum = arraySorted[0];
    maximum = arraySorted[(arraySorted.length - 1)];
}
console.log(`Answer: MinIndex = ${minimum}, MaxIndex = ${maximum}.`);*/

