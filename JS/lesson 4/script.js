/*// - створити функцію яка виводить масив

let array = [1, 2, 3, 4, 5];

function arrayCall() {
   console.log(array);
}

arrayCall();*/

/*// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function randomArray() {
    let array = [];
    for(let i = 0; i < 10; i++) {
        array[i] = Math.random() * (10 - 1) + 1;
    }
    console.log(array);
}

function arrayCall() {
    randomArray();
}

arrayCall();*/

/*// - створити функцію яка приймає три числа та виводить та повертає найменьше.

let number1 = minNumber(5, 3, 7);
console.log(number1);

function minNumber(num1, num2, num3) {
    if(num1 <= num2 && num1 <= num3) return num1;
    if(num2 <= num1 && num2 <= num3) return num2;
    if(num3 <= num2 && num3 <= num1) return num3;
}*/

/*// - створити функцію яка приймає три числа та виводить та повертає найбільше.

let number2 = maxNumber(5, 3, 7);
console.log(number2);

function maxNumber(num1, num2, num3) {
    if(num1 >= num2 && num1 >= num3) return num1;
    if(num2 >= num1 && num2 >= num3) return num2;
    if(num3 >= num2 && num3 >= num1) return num3;
}*/

/*// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

let menshee = argumentsFunction(1, 2, 5, 8, 3, 0, 10);
console.log(menshee);

function argumentsFunction() {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] < min) {
            min = arguments[i];
        }
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log(max);
    return min;
}*/

/*// - створити функцію яка виводить масив

let array = [1, 20, 3, 4, 5];

function arrayCall() {
    console.log(array);
}

arrayCall();

// - створити функцію яка повертає найбільше число з масиву

let maxV = maxValue(array);
console.log(maxV);

function maxValue(getArray) {
    let maxV = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < getArray.length; i++) {
        maxV = Math.max(getArray[i], maxV);
    }
    return maxV;
}*/

/*// - створити функцію яка повертає найменьше число з масиву

let array = [7, 20, 3, 4, 5];

function arrayCall() {
    console.log(array);
}

arrayCall();

let minV = minValue(array);
console.log(minV);

function minValue(newNameArray) {
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < newNameArray.length; i++) {
        min = min > newNameArray[i] ? newNameArray[i] : min;
    }
    return min;
}*/

/*// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

let arrayAgain = [5, 6, 7, 8, 9, 1];

let summary = sum(arrayAgain);
console.log(summary);

function sum(array) {
    let summary = array[0];
    for(let i = 1; i < array.length; i++) summary += array[i];
    return summary;
}*/

/*// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let array = [1, 4, 8];

let avarage = avg(array);
console.log(avarage);

function avg(arr) {
    let sum = 0;
    for(let i = 0; i <arr.length; i++) {
        sum += arr[i];
    }
    let avarage = sum/arr.length;
    return avarage;
}*/

/*// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

let arrayObject = [
   human1 = {name: "Pasha", age: 29},
   human2 = {name: "Dasha", age: 28}
]

let num = funObject(arrayObject);
console.log(num);

function funObject(array) {
    return array.length;
}*/

/*// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

let arrayObject = [
    human1 = {name: "Pasha", age: 29},
    human2 = {name: "Dasha", age: 28, husband: true}
]

let generalQuant = quantity(arrayObject);
console.log(generalQuant);


function quantity(array) {
    let i = 0;
    for(let flow of array) {
        i += Object.keys(flow).length;
    }
    return i;
}*/

/*// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let array1 = [5, 6, 7, 8, 9];
let array2 = [1, 2, 3, 4, 5];

let array3 = [];

array3 = summator(array1, array2);
console.log(array3);

function summator(a1, a2) {
    let a3 = [];
    for(let i = 0; i < a1.length; i++) {
        for(let j = 0; j < a2.length; j++) {
            if(i === j) {
                a3[i] = a1[i] + a2[i];
            }
        }
    }
    return a3;
}*/

/*// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

let array = [1, 5, 7, true, [4, 7], {name: 'Pasha', age: 29}];
let i = 4;

function replace(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if(i === num) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    console.log(arr);
}

replace(array, i);*/

/*// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// Приклад
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

let array = [1, 0, 0, 0, 3];

function raplacement(arr) {
    let arr1 = [];
    let j = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            j++;
        }
        else arr1.push(arr[i]);
    }
    for(let k = 0; k < j; k++) {
        arr1.push(0);
    }
    console.log(arr1);
}

raplacement(array);*/

// Створити функцію яка :
/*//     - Додає в боді блок з текстом "Hello owu"

function greeting(hi) {
    let divElement = document.createElement("div");
    document.body.appendChild(divElement);
    divElement.innerText = hi;
}

text = "Hello owu";
greeting(text);

// document.body.innerHTML = "<div>Hello owu</div>"*/

/*// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function innerT(type, text) {
let a = document.createElement(type);
document.body.appendChild(a);
a.innerText = input;
}

let type = "p";
let input = "New text";

innerT(type, input);*/

/*// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

let car1 = {model: "Audi", year: 2015, horsepower: 100, color: "blue metallic", owner: false};
let car2 = {model: "Jeep", year: 2018, horsepower: 120, color: "black", owner: true};
let car3 = {model: "Nissan", year: 2019, horsepower: 150, color: "grey", owner: false};
let car4 = {model: "Jiguli", year: 1995, horsepower: 70, color: "yellow", owner: true};
let car5 = {model: "Tavria", year: 1998, horsepower: 80, color: "white", owner: false};

let cars = [car1, car2, car3, car4, car5];

auto(cars, "span");

function auto(cars, tag) {
    for(let flow of cars) {
        let block = document.createElement(tag);
        document.body.appendChild(block);
        block.innerHTML = `${flow['model']}, ${flow['year']}, ${flow['horsepower']}, ${flow['color']}, ${flow['owner']} <br/>`;
    }
}*/

/*// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок

let car1 = {model: "Audi", year: 2015, horsepower: 100, color: "blue metallic", owner: false};
let car2 = {model: "Jeep", year: 2018, horsepower: 120, color: "black", owner: true};
let car3 = {model: "Nissan", year: 2019, horsepower: 150, color: "grey", owner: false};
let car4 = {model: "Jiguli", year: 1995, horsepower: 70, color: "yellow", owner: true};
let car5 = {model: "Tavria", year: 1998, horsepower: 80, color: "white", owner: false};

let cars = [car1, car2, car3, car4, car5];

function auto(cars, mark) {
    for (let flow of cars) {
        let block = document.createElement(mark);
        document.body.appendChild(block);
        let modelBlock = document.createElement("span");
        let yearBlock = document.createElement("span");
        let horseBlock = document.createElement("span");
        let colorBlock = document.createElement("span");
        let ownerBlock = document.createElement("span");
        block.appendChild(modelBlock);
        block.appendChild(yearBlock);
        block.appendChild(horseBlock);
        block.appendChild(colorBlock);
        block.appendChild(ownerBlock);
        modelBlock.innerHTML = `${flow['model']} `;
        yearBlock.innerHTML = `${flow['year']} `;
        horseBlock.innerHTML = `${flow['horsepower']} `;
        colorBlock.innerHTML = `${flow['color']} `;
        ownerBlock.innerHTML = `${flow['owner']} `;

    }
}

auto(cars, "div")*/

/*// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.

let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];

let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

function twoArrays(array1, array2) {
    for(let flowUser of usersWithId) {
        for(let flowCity of citiesWithId) {
            if(flowUser["id"] === flowCity["user_id"]) {
                flowUser.address = flowCity;
            }
        }
    }
    return array1;
}

let newArray = twoArrays(usersWithId, citiesWithId);
console.log(newArray);*/

/*// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let i = 1;
for(let flowRule of rules) {
    rule(flowRule['title'], flowRule['body'], i);
    i++;
}

function rule(titleText, bodyText, ruleNumber) {

    let divRule = document.createElement("div");
    let h2Box = document.createElement("h2");
    let pBox = document.createElement("p");
    document.body.appendChild(divRule);
    divRule.setAttribute("class", `rules rule${ruleNumber}`);
    divRule.appendChild(h2Box);
    divRule.appendChild(pBox);
    h2Box.innerText = titleText;
    pBox.innerText = bodyText;
}*/

/*// 1) Точная степень двойки.
//     Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки,
//     или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!

let number = prompt("Input your number:");
stepen() ? console.log("YES") : console.log("NO");

function stepen() {
    for(let i = 0; i < 100; i++) {
        number /= 2;
        console.log(number);
        if(number === 2) return true;
    }
}*/

/*// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій


let objectTest = {
        name1: 'Pasha',
        age1: 29,
        wife: {
            name2: "Dasha",
            age2: 28,
            pet: {
                name3: "Bazuka"
            }
        }
    };

let newObject = {};

function recursion(object1) {
    for (let flow in object1) {
        if(typeof object1[flow] == "object") recursion(object1[flow]);
        else newObject[flow] = object1[flow];
    }
}
recursion(objectTest);
console.log(newObject);*/

/*// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
let array = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
let array1 = [];
rec(array);
function rec(arr) {
    for(let key of arr) {
        typeof key == "object" ? rec(key) : array1.push(key);
    }
}

console.log(array1);*/



