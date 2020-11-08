/*// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

function Tag(titleOfTag, action, attributes, description) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attributes = attributes;
    this.attrDescr = {};
    let i = 0;
    for(let attr of this.attributes) {
        this.attrDescr[attr] = description[i];
        i++;
    }
}

let tagDiv = new Tag("div",
                "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.",
            ["align", "title"],
            ['Задает выравнивание содержимого тега <div>', 'Добавляет всплывающую подсказку к содержимому']
    );

console.log(tagDiv);

let tagH1 = new Tag("h1",
    "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня",
    ["align"],
    ['Определяет выравнивание заголовка']
);

console.log(tagH1);

let tagInput = new Tag("input",
    "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем",
    ["accept", "accesskey", "align", "alt"],
    ['Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов',
    'Переход к элементу с помощью комбинации клавиш',
    'Определяет выравнивание изображения',
    'Альтернативный текст для кнопки с изображением'
    ]
);

console.log(tagInput);*/

/*
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

class Tag {
    constructor(tagName, description, attributes) {
        this.tagName = tagName;
        this.description = description;
        this.attributes = attributes;
    }
}

// tagName = "form";
// description = "Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером";
// attributes = [
//     {titleAttr: "accept-charset", description: "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные"},
//     {titleAttr: "method", description: "Метод протокола HTTP"}
// ];
// let tagForm = new Tag(tagName, description, attributes);
//
// console.log(tagForm);

tagName = "select";
description = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором";
attributes = [
    {titleAttr: "form", description: "Связывает список с формой"},
    {titleAttr: "size", description: "Количество отображаемых строк списка"}
]

let selectTag = new Tag(tagName, description, attributes);

console.log(selectTag);*/

/*// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

let car = {
    model: "Kompressor",
    manufacturer: "BMW",
    year: 2005,
    maxSpeed: 250,
    engineVolume: 2.5,
    driver: {name: 'Default', age: '18'},
    drive: function() {
        console.log(`їдемо зі шидкістю ${car.maxSpeed} на годину`)},
    info: function() {
        for(let key in car) {
            if(typeof car[key] == "function");
                else if(typeof car[key] == "object") {
                // for(let flow in car.driver) {
                //     console.log(`${key} : ${flow} - ${car.driver[flow]}`);
                // }
                for(let key1 in car[key]) {
                    console.log(`${key} : ${key1} - ${car[key][key1]}`);
                }
            }
                else console.log(`${key} : ${car[key]}`);
        }
    },
    increaseSpeed: function (newSpeed) {
        car.maxSpeed = newSpeed;
    },
    changeYear: function(newValue) {
        car.year = newValue;
    },
    addDriver: function(nameD, ageD) {
        car.driver = {name: nameD, age: ageD}
    }
}
car.addDriver("Pasha", 29);
car.changeYear(2015);
car.increaseSpeed(500);
car.info();
car.drive();*/

/*// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function CreateCar(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function() {
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.manufacturer}`);
        console.log(`Рік - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.maxSpeed}`);
        console.log(`Об'єм двигуна - ${this.engineVolume}`);
    }
    this.increaseSpeed = function(newSpeed) {
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function(newValue) {
        this.year = newValue;
    }
    this.addDriver = function(name, age) {
        this.driver = {name, age};
    }
}

let lanosCar = new CreateCar(
    "lanos",
    "daewoo",
    2002,
    160,
    1.4,
);

console.log(lanosCar);
lanosCar.drive();
lanosCar.increaseSpeed(180);
lanosCar.changeYear(2008);
lanosCar.info();
lanosCar.addDriver("Igor", 20);*/

/*// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class CreateCar {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        this.info = function () {
            console.log(`Модель - ${this.model}`);
            console.log(`Виробник - ${this.manufacturer}`);
            console.log(`Рік - ${this.year}`);
            console.log(`Максимальна швидкість - ${this.maxSpeed}`);
            console.log(`Об'єм двигуна - ${this.engineVolume}`);
        }
        this.increaseSpeed = function (newSpeed) {
            this.maxSpeed = newSpeed;
        }
        this.changeYear = function (newValue) {
            this.year = newValue;
        }
        this.addDriver = function (name, age) {
            this.driver = {name, age};
        }
    }
}

let lanosCar = new CreateCar(
    "lanos",
    "daewoo",
    2002,
    160,
    1.4,
);

console.log(lanosCar);
lanosCar.drive();
lanosCar.increaseSpeed(180);
lanosCar.changeYear(2008);
lanosCar.info();
lanosCar.addDriver("Igor", 20);*/

/*
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Popelushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Princ {
    constructor(name, age, shoesSize) {
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
    }
}

let girl1 = new Popelushka('Dasha', 29, 38);
let girl2 = new Popelushka('Tanya', 25, 35);
let girl3 = new Popelushka('Ira', 28, 39);
let girl4 = new Popelushka('Lena', 20, 36);
let girl5 = new Popelushka('Liza', 30, 37);
let girl6 = new Popelushka('Alina', 21, 38);
let girl7 = new Popelushka('Sveta', 18, 37);
let girl8 = new Popelushka('Marina', 17, 37);
let girl9 = new Popelushka('Luba', 24, 34);
let girl10 = new Popelushka('Nadya', 27, 40);

let array = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10];

let princ = new Princ("Igor", 25, 35);

for(let value of array) {
    if(value.footSize === princ.shoesSize) {
        console.log(`${value.name} - попелюшка`);
        break;
    }
}*/

/*
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Popelushka(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
}

function Princ(name, age, shoesSize) {
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
}

let girl1 = new Popelushka('Dasha', 29, 38);
let girl2 = new Popelushka('Tanya', 25, 35);
let girl3 = new Popelushka('Ira', 28, 39);
let girl4 = new Popelushka('Lena', 20, 36);
let girl5 = new Popelushka('Liza', 30, 37);
let girl6 = new Popelushka('Alina', 21, 38);
let girl7 = new Popelushka('Sveta', 18, 37);
let girl8 = new Popelushka('Marina', 17, 37);
let girl9 = new Popelushka('Luba', 24, 34);
let girl10 = new Popelushka('Nadya', 27, 40);

let array = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10];

let princ = new Princ("Igor", 25, 37);

search(array, princ.shoesSize);

function search(array, shoeSize) {
    for (let value of array) {
        if (value.footSize === shoeSize) {
            console.log(`${value.name} - попелюшка`);
            break;
        }
    }
}*/
