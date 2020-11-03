/*
// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let object1 = {name: "Pasha", age: 29, sex: "man"};
let object2 = {name: "Dasha", age: 29, sex: "woman"};
let object3 = {animal: "dog", age: 3, goodboy: true};
let object4 = {animal: "cat", age: 5, goodboy: false};
let object5 = {name: "Igor", car: true, couple: true};
console.log(object1, object2, object3, object4, object5);*/

/*// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let phone = {manufacturer: "Samsung", NFC: true, weight: 210, camera: [12, 8], inherit: {thirst: "s10e", second: "s10 lite"}};
console.log(phone);
let laptop = {line: "IdeaPad", sound: ["2 W", "2 W"], items: {video: "GTX1660Ti", processor: "Core i5 10th gen"}};
console.log(laptop);
let boy = {name: "Voktor", age: 23, car: true, skills: ["JS", "Java", "Angular"], courses: {local: "ok10", remote: "Coursera"}};
console.log(boy);
let car = {manufacturer: "BMW", seats: [1, 4], glass: {front: "transparent", back: "heat", side: "brownish"}};
console.log(car);
let tools = {quantity: 100, appointmrnt: ["mechanical", "electrician", "others"], electricial: {cut: "KT", insulation: "stripax", measure: "multimetr"}};
console.log(tools);*/

/*// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

let object1 = {name: "Pasha", age: 29, sex: "man"};
let object2 = {name: "Dasha", age: 29, sex: "woman"};
let object3 = {animal: "dog", age: 3, goodboy: true};
let object4 = {animal: "cat", age: 5, goodboy: false};
let object5 = {name: "Igor", car: true, couple: true};

for(let fullKeys1 in object1) {
    console.log(fullKeys1);
}
for(let fullKeys2 in object2) {
    console.log(fullKeys2);
}
for(let fullKeys3 in object3) {
    console.log(fullKeys3);
}
for(let fullKeys4 in object4) {
    console.log(fullKeys4);
}
for(let fullKeys5 in object5) {
    console.log(fullKeys5);
}

let phone = {manufacturer: "Samsung", NFC: true, weight: 210, camera: [12, 8], inherit: {thirst: "s10e", second: "s10 lite"}};
let laptop = {line: "IdeaPad", sound: ["2 W", "2 W"], items: {video: "GTX1660Ti", processor: "Core i5 10th gen"}};
let boy = {name: "Voktor", age: 23, car: true, skills: ["JS", "Java", "Angular"], courses: {local: "ok10", remote: "Coursera"}};
let car = {manufacturer: "BMW", seats: [1, 4], glass: {front: "transparent", back: "heat", side: "brownish"}};
let tools = {quantity: 100, appointment: ["mechanical", "electrician", "others"], electricial: {cut: "KT", insulation: "stripax", measure: "multimetr"}};

for(let keys1 in phone) {
    console.log(keys1);
}
for(let keys2 in laptop) {
    console.log(keys2);
}
for(let keys3 in boy) {
    console.log(keys3);
}
for(let keys4 in car) {
    console.log(keys4);
}
for(let keys5 in tools) {
    console.log(keys5);
}*/

/*// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

let object1 = {name: "Pasha", age: 29, sex: "man"};
let object2 = {name: "Dasha", age: 29, sex: "woman"};
let object3 = {animal: "dog", age: 3, goodboy: true};
let object4 = {animal: "cat", age: 5, goodboy: false};
let object5 = {name: "Igor", car: true, couple: true};

let phone = {manufacturer: "Samsung", NFC: true, weight: 210, camera: [12, 8], inherit: {thirst: "s10e", second: "s10 lite"}};
let laptop = {line: "IdeaPad", sound: ["2 W", "2 W"], items: {video: "GTX1660Ti", processor: "Core i5 10th gen"}};
let boy = {name: "Voktor", age: 23, car: true, skills: ["JS", "Java", "Angular"], courses: {local: "ok10", remote: "Coursera"}};
let car = {manufacturer: "BMW", seats: [1, 4], glass: {front: "transparent", back: "heat", side: "brownish"}};
let tools = {quantity: 100, appointment: ["mechanical", "electrician", "others"], electricial: {cut: "KT", insulation: "stripax", measure: "multimetr"}};

let getKeys1 = Object.keys(object1);
let getKeys2 = Object.keys(object2);
let getKeys3 = Object.keys(object3);
let getKeys4 = Object.keys(object4);
let getKeys5 = Object.keys(object5);
let getKeys6 = Object.keys(phone);
let getKeys7 = Object.keys(laptop);
let getKeys8 = Object.keys(boy);
let getKeys9 = Object.keys(car);
let getKeys10 = Object.keys(tools);

console.log(getKeys1);
console.log(getKeys2);
console.log(getKeys3);
console.log(getKeys4);
console.log(getKeys5);
console.log(getKeys6);
console.log(getKeys7);
console.log(getKeys8);
console.log(getKeys9);
console.log(getKeys10);*/

/*
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

let array = [
    carObject1 = {model: "audi", year: 1990, power: "100 HP", color: "red"},
    carObject2 = {model: "volkswagen", year: 2000, power: "200 HP", color: "blue"},
    carObject3 = {model: "bmw", year: 1985, power: "150 HP", color: "grey"},
    carObject4 = {model: "mercedes", year: 2020, power: "70 HP", color: "white"},
    carObject5 = {model: "daewoo", year: 2005, power: "90 HP", color: "green"},
    carObject6 = {model: "fiat", year: 2004, power: "130 HP", color: "purple"},
    carObject7 = {model: "nissan", year: 1991, power: "120 HP", color: "olive"},
    carObject8 = {model: "suzuki", year: 1997, power: "160 HP", color: "brown"},
    carObject9 = {model: "skoda", year: 1999, power: "170 HP", color: "burgundy"},
    carObject10 = {model: "renault", year: 2018, power: "190 HP", color: "yellow"},
];
console.log(array);*/

/*// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let cities = [
    cityManila = {name: "Manila", population: 1_780_000, country: "Philippines Republic", region: "Oceania"},
    cityAkkra = {name: "Akkra", population: 1_590_000, country: "Ghana", region: "central Africa"},
    cityBangkok = {name: "Bangkok", population: 8_280_000, country: "Thailand", region: "West Asia"},
    cityBelgrad = {name: "Belgrad", population: 1_370_000, country: "Serbia", region: "Europe"},
];
console.log(cities);*/

/*// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let array = [
    carObject1 = {model: "audi", year: 1990, power: "100 HP", color: "red", driver: {name: "Pasha", age: 29, sex: "man", experience: 5}},
    carObject2 = {model: "volkswagen", year: 2000, power: "200 HP", color: "blue", driver: {name: "Sasha", age: 28, sex: "man", experience: 2}},
    carObject3 = {model: "bmw", year: 1985, power: "150 HP", color: "grey", driver: {name: "Dasha", age: 20, sex: "woman", experience: 0}},
    carObject4 = {model: "mercedes", year: 2020, power: "70 HP", color: "white", driver: {
            name: "Lesha",
            age: 33,
            sex: "man",
            experience: 10
        }},
    carObject5 = {model: "daewoo", year: 2005, power: "90 HP", color: "green", driver: {name: "Masha", age: 31, sex: "woman", experience: 8}},
    ];
console.log(array);*/

/*// - проитерировать каждый массив из задания 5,6,7 при помощи while.

let array = [
    carObject1 = {model: "audi", year: 1990, power: "100 HP", color: "red"},
    carObject2 = {model: "volkswagen", year: 2000, power: "200 HP", color: "blue"},
    carObject3 = {model: "bmw", year: 1985, power: "150 HP", color: "grey"},
    carObject4 = {model: "mercedes", year: 2020, power: "70 HP", color: "white"},
    carObject5 = {model: "daewoo", year: 2005, power: "90 HP", color: "green"},
    carObject6 = {model: "fiat", year: 2004, power: "130 HP", color: "purple"},
    carObject7 = {model: "nissan", year: 1991, power: "120 HP", color: "olive"},
    carObject8 = {model: "suzuki", year: 1997, power: "160 HP", color: "brown"},
    carObject9 = {model: "skoda", year: 1999, power: "170 HP", color: "burgundy"},
    carObject10 = {model: "renault", year: 2018, power: "190 HP", color: "yellow"},
];

let i = 0;
while(i < array.length) {
    console.log(array[i]);
    i++;
}

let cities = [
    cityManila = {name: "Manila", population: 1_780_000, country: "Philippines Republic", region: "Oceania"},
    cityAkkra = {name: "Akkra", population: 1_590_000, country: "Ghana", region: "central Africa"},
    cityBangkok = {name: "Bangkok", population: 8_280_000, country: "Thailand", region: "West Asia"},
    cityBelgrad = {name: "Belgrad", population: 1_370_000, country: "Serbia", region: "Europe"},
];

let j = 0;
while(j < cities.length) {
    console.log(cities[j]);
    j++;
}

let array1 = [
    carObject1 = {model: "audi", year: 1990, power: "100 HP", color: "red", driver: {name: "Pasha", age: 29, sex: "man", experience: 5}},
    carObject2 = {model: "volkswagen", year: 2000, power: "200 HP", color: "blue", driver: {name: "Sasha", age: 28, sex: "man", experience: 2}},
    carObject3 = {model: "bmw", year: 1985, power: "150 HP", color: "grey", driver: {name: "Dasha", age: 20, sex: "woman", experience: 0}},
    carObject4 = {model: "mercedes", year: 2020, power: "70 HP", color: "white", driver: {
            name: "Lesha",
            age: 33,
            sex: "man",
            experience: 10}
            },
    carObject5 = {model: "daewoo", year: 2005, power: "90 HP", color: "green", driver: {name: "Masha", age: 31, sex: "woman", experience: 8}},
];

let k = 0;
while(k < array1.length) {
    console.log(array1[k]);
    k++;
}*/

/*// - проитерировать каждый массив из задания 5,6,7 при помощи for .

let array = [
    carObject1 = {model: "audi", year: 1990, power: "100 HP", color: "red"},
    carObject2 = {model: "volkswagen", year: 2000, power: "200 HP", color: "blue"},
    carObject3 = {model: "bmw", year: 1985, power: "150 HP", color: "grey"},
    carObject4 = {model: "mercedes", year: 2020, power: "70 HP", color: "white"},
    carObject5 = {model: "daewoo", year: 2005, power: "90 HP", color: "green"},
    carObject6 = {model: "fiat", year: 2004, power: "130 HP", color: "purple"},
    carObject7 = {model: "nissan", year: 1991, power: "120 HP", color: "olive"},
    carObject8 = {model: "suzuki", year: 1997, power: "160 HP", color: "brown"},
    carObject9 = {model: "skoda", year: 1999, power: "170 HP", color: "burgundy"},
    carObject10 = {model: "renault", year: 2018, power: "190 HP", color: "yellow"},
];

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let cities = [
    cityManila = {name: "Manila", population: 1_780_000, country: "Philippines Republic", region: "Oceania"},
    cityAkkra = {name: "Akkra", population: 1_590_000, country: "Ghana", region: "central Africa"},
    cityBangkok = {name: "Bangkok", population: 8_280_000, country: "Thailand", region: "West Asia"},
    cityBelgrad = {name: "Belgrad", population: 1_370_000, country: "Serbia", region: "Europe"},
];

for(let j = 0; j < cities.length; j++) {
    console.log(cities[j]);
}

let array1 = [
    carObject1 = {model: "audi", year: 1990, power: "100 HP", color: "red", driver: {name: "Pasha", age: 29, sex: "man", experience: 5}},
    carObject2 = {model: "volkswagen", year: 2000, power: "200 HP", color: "blue", driver: {name: "Sasha", age: 28, sex: "man", experience: 2}},
    carObject3 = {model: "bmw", year: 1985, power: "150 HP", color: "grey", driver: {name: "Dasha", age: 20, sex: "woman", experience: 0}},
    carObject4 = {model: "mercedes", year: 2020, power: "70 HP", color: "white", driver: {
            name: "Lesha",
            age: 33,
            sex: "man",
            experience: 10}
    },
    carObject5 = {model: "daewoo", year: 2005, power: "90 HP", color: "green", driver: {name: "Masha", age: 31, sex: "woman", experience: 8}},
];

for(let k = 0; k <array1.length; k++) {
    console.log(array1[k]);
}*/

/*// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

let array = [
    carObject1 = {model: "audi", year: 1990, power: "100 HP", color: "red"},
    carObject2 = {model: "volkswagen", year: 2000, power: "200 HP", color: "blue"},
    carObject3 = {model: "bmw", year: 1985, power: "150 HP", color: "grey"},
    carObject4 = {model: "mercedes", year: 2020, power: "70 HP", color: "white"},
    carObject5 = {model: "daewoo", year: 2005, power: "90 HP", color: "green"},
    carObject6 = {model: "fiat", year: 2004, power: "130 HP", color: "purple"},
    carObject7 = {model: "nissan", year: 1991, power: "120 HP", color: "olive"},
    carObject8 = {model: "suzuki", year: 1997, power: "160 HP", color: "brown"},
    carObject9 = {model: "skoda", year: 1999, power: "170 HP", color: "burgundy"},
    carObject10 = {model: "renault", year: 2018, power: "190 HP", color: "yellow"},
];

for(let count of array) {
    console.log(count);
}

let cities = [
    cityManila = {name: "Manila", population: 1_780_000, country: "Philippines Republic", region: "Oceania"},
    cityAkkra = {name: "Akkra", population: 1_590_000, country: "Ghana", region: "central Africa"},
    cityBangkok = {name: "Bangkok", population: 8_280_000, country: "Thailand", region: "West Asia"},
    cityBelgrad = {name: "Belgrad", population: 1_370_000, country: "Serbia", region: "Europe"},
];

for(let count1 of cities) {
    console.log(count1);
}

let array1 = [
    carObject1 = {model: "audi", year: 1990, power: "100 HP", color: "red", driver: {name: "Pasha", age: 29, sex: "man", experience: 5}},
    carObject2 = {model: "volkswagen", year: 2000, power: "200 HP", color: "blue", driver: {name: "Sasha", age: 28, sex: "man", experience: 2}},
    carObject3 = {model: "bmw", year: 1985, power: "150 HP", color: "grey", driver: {name: "Dasha", age: 20, sex: "woman", experience: 0}},
    carObject4 = {model: "mercedes", year: 2020, power: "70 HP", color: "white", driver: {
            name: "Lesha",
            age: 33,
            sex: "man",
            experience: 10}
    },
    carObject5 = {model: "daewoo", year: 2005, power: "90 HP", color: "green", driver: {name: "Masha", age: 31, sex: "woman", experience: 8}},
];

for(let count2 of array1) {
    console.log(count2);
}*/

/*
// - взять объекты из задания 1 и превратить каждый в json.

let object1 = {name: "Pasha", age: 29, sex: "man"};
let object2 = {name: "Dasha", age: 29, sex: "woman"};
let object3 = {animal: "dog", age: 3, goodboy: true};
let object4 = {animal: "cat", age: 5, goodboy: false};
let object5 = {name: "Igor", car: true, couple: true};

let json1 = JSON.stringify(object1);
let json2 = JSON.stringify(object2);
let json3 = JSON.stringify(object3);
let json4 = JSON.stringify(object4);
let json5 = JSON.stringify(object5);
console.log(json1 , json2, json3, json4, json5);
*/

/*// - взять json из задания 11 и превратить их обратно в объекты.

let object1 = {name: "Pasha", age: 29, sex: "man"};
let object2 = {name: "Dasha", age: 29, sex: "woman"};
let object3 = {animal: "dog", age: 3, goodboy: true};
let object4 = {animal: "cat", age: 5, goodboy: false};
let object5 = {name: "Igor", car: true, couple: true};

let json1 = JSON.stringify(object1);
let json2 = JSON.stringify(object2);
let json3 = JSON.stringify(object3);
let json4 = JSON.stringify(object4);
let json5 = JSON.stringify(object5);

console.log(JSON.parse(json1));
console.log(JSON.parse(json2));
console.log(JSON.parse(json3));
console.log(JSON.parse(json4));
console.log(JSON.parse(json5));*/

/*// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json

let array = [
    carObject1 = {model: "audi", year: 1990, power: "100 HP", color: "red"},
    carObject2 = {model: "volkswagen", year: 2000, power: "200 HP", color: "blue"},
    carObject3 = {model: "bmw", year: 1985, power: "150 HP", color: "grey"},
    carObject4 = {model: "mercedes", year: 2020, power: "70 HP", color: "white"},
    carObject5 = {model: "daewoo", year: 2005, power: "90 HP", color: "green"},
    carObject6 = {model: "fiat", year: 2004, power: "130 HP", color: "purple"},
    carObject7 = {model: "nissan", year: 1991, power: "120 HP", color: "olive"},
    carObject8 = {model: "suzuki", year: 1997, power: "160 HP", color: "brown"},
    carObject9 = {model: "skoda", year: 1999, power: "170 HP", color: "burgundy"},
    carObject10 = {model: "renault", year: 2018, power: "190 HP", color: "yellow"},
];

for(let new1 of array) {
    console.log(JSON.stringify(new1));
}*/

/*// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

let cities = [
    cityManila = {name: "Manila", population: 1_780_000, country: "Philippines Republic", region: "Oceania"},
    cityAkkra = {name: "Akkra", population: 1_590_000, country: "Ghana", region: "central Africa"},
    cityBangkok = {name: "Bangkok", population: 8_280_000, country: "Thailand", region: "West Asia"},
    cityBelgrad = {name: "Belgrad", population: 1_370_000, country: "Serbia", region: "Europe"},
];

for(let newarray of cities) {
    console.log(JSON.stringify(newarray));
}*/

/*// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

let array = [
    carObject1 = {model: "audi", year: 1990, power: "100 HP", color: "red", driver: {name: "Pasha", age: 29, sex: "man", experience: 5}},
    carObject2 = {model: "volkswagen", year: 2000, power: "200 HP", color: "blue", driver: {name: "Sasha", age: 28, sex: "man", experience: 2}},
    carObject3 = {model: "bmw", year: 1985, power: "150 HP", color: "grey", driver: {name: "Dasha", age: 20, sex: "woman", experience: 0}},
    carObject4 = {model: "mercedes", year: 2020, power: "70 HP", color: "white", driver: {
            name: "Lesha",
            age: 33,
            sex: "man",
            experience: 10
        }},
    carObject5 = {model: "daewoo", year: 2005, power: "90 HP", color: "green", driver: {name: "Masha", age: 31, sex: "woman", experience: 8}},
];
let array2 = [];
for(let i = 0; i < array.length; i++) {
    array2[i] = JSON.stringify(array[i]);
    console.log(array2[i]);
}*/

/*// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// Variant 1

let usersArray = [
    user1 = {name: "Pasha", age: 29, skills: ["ePlan", "Neplan", "JS", "Java"]},
    user2 = {name: "Dasha", age: 29, skills: ["pestryCooking", "education", "Java"]}
]
for(let usersFlow of usersArray) {
    console.log(usersFlow);
    for(let skillsFlow of usersFlow.skills) {
        console.log(skillsFlow);
    }
}*/

/*// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// Variant 2

let usersArray = [
    user1 = {name: "Pasha", age: 29, skills: ["ePlan", "Neplan", "JS", "Java"]},
    user2 = {name: "Dasha", age: 29, skills: ["pestryCooking", "education", "Java"]}
]
for(let usersFlow of usersArray) {
    console.log(usersFlow);
    for(let perem of usersFlow['skills']) {
        console.log(perem);
    }
}*/

/*// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

let usersArray = [
    user1 = {name: "Pasha", age: 29, skills: ["ePlan", "Neplan", "JS", "Java"]},
    user2 = {name: "Dasha", age: 29, skills: ["pestryCooking", "education", "Java"]}
]
let arraySkills = [];
let i = 0;
for(let flow of usersArray) {
    for(let newFlow of flow["skills"]) {
        arraySkills[i] = newFlow;
        i++;
    }
}
console.log(arraySkills);*/

/*// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

for(let flowUsers of users) {
    console.log(flowUsers);
    for(let skillsFlow of flowUsers.skills) {
        console.log(skillsFlow);
    }
}*/

/*let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

/!*!// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let address = [];
let i = 0;
for(let flowUsers of users) {
    address[i] = flowUsers['address'];
    i++;
}
console.log(address);*!/

/!*!// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
let generalBlock = document.createElement("div");
document.body.appendChild(generalBlock);
for(let flowUsers of users) {
    let definiteUser = document.createElement("div");
    generalBlock.appendChild(definiteUser);
    definiteUser.innerText = `${flowUsers.name}`;
}*!/

/!*!// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

let general = document.createElement("div");
document.body.appendChild(general);
for(let userFlow of users) {
    let divName = document.createElement("div");
    let divAge = document.createElement("div");
    let divStatus = document.createElement("div");
    let divAddress = document.createElement("div");
    general.appendChild(divName);
    general.appendChild(divAge);
    general.appendChild(divStatus);
    general.appendChild(divAddress);
    divName.innerText = `${userFlow['name']}`;
    divAge.innerText = `${userFlow['age']}`;
    divStatus.innerText = userFlow['status'];
    divAddress.innerText = userFlow.address;
}*!/

/!*!// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let general = document.createElement("div");
let divAddress = document.createElement("div");
document.body.appendChild(general);
for(let userFlow of users) {
    let divName = document.createElement("div");
    let divAge = document.createElement("div");
    let divStatus = document.createElement("div");
    let divAddressCity = document.createElement("div");
    let divAddressCountry = document.createElement("div");
    let divAddressStreet = document.createElement("div");
    let divAddressHouse = document.createElement("div");
    general.appendChild(divName);
    general.appendChild(divAge);
    general.appendChild(divStatus);
    divAddress.appendChild(divAddressCity);
    divAddress.appendChild(divAddressCountry);
    divAddress.appendChild(divAddressStreet);
    divAddress.appendChild(divAddressHouse);
    divName.innerText = `${userFlow['name']}`;
    divAge.innerText = `${userFlow['age']}`;
    divStatus.innerText = userFlow['status'];
    general.appendChild(divAddress);
    divAddressCity.innerText = userFlow.address.city;
    divAddressCountry.innerText = userFlow.address['country'];
    divAddressStreet.innerHTML = userFlow.address.street;
    divAddressHouse.innerText = `${userFlow.address.houseNumber}`;
}*!/

/!*!// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];

let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

for(let userFlow of usersWithId) {
    for(let cityFlow of citiesWithId) {
        if(userFlow.id == cityFlow.user_id) {
            userFlow[4] = cityFlow;
        }
    }
}
console.log(usersWithId);*!/*/

/*// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
let firstDiv1 = document.getElementById('unic').textContent;
console.log(firstDiv1);
let firstDiv2 = document.getElementsByClassName('first')[0].textContent;
console.log(firstDiv2);
let firstDiv3 = document.getElementsByTagName("div")[0].textContent;
console.log(firstDiv3);*/

/*// - змінити цей текст використовуючи селектори id, class,  tag
let firstChange = document.getElementById("unic");
firstChange.innerText = "Old text";

let secondChange = document.getElementsByClassName("first")[0];
secondChange.innerText = "Older text";

let thirdChange = document.getElementsByTagName('div')[0];
thirdChange.innerText = "The oldest text";*/

/*// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

let styleChange1 = document.getElementById("unic");
unic.style.width = "300px";
unic.style.height = "100px";

let styleChange2 = document.getElementsByClassName("first")[0];
styleChange2.style.width = "500px";
styleChange2.style.height = "200px";

let styleChange3 = document.getElementsByTagName("div")[0];
styleChange3.style.width = "600px";
styleChange3.style.height = "300px";*/

/*// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

let element1 = document.createElement("table");
element1.setAttribute("id", "idTable")
let element2 = document.createElement("tr");
document.body.appendChild(element1);
element1.appendChild(element2);
for(let i = 0; i < 3; i++) {
    let element3 = document.createElement("td");
    element2.appendChild(element3);
}
idTable.style.width = "200px";
idTable.style.height = "100px";
idTable.style.border = "1px solid black";*/

/*// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

let tableElement = document.createElement("table");
document.body.appendChild(tableElement);
for(let i = 0; i < 10; i++) {
    let trElement = document.createElement("tr");
    tableElement.appendChild(trElement);
    for(let j = 0; j < 5; j++) {
        let tdElement = document.createElement("td");
        trElement.appendChild(tdElement);
    }
}*/

/*// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
let n = prompt("Value of n");
let m = prompt("Value of m");
let elementTable = document.createElement("table");
document.body.appendChild(elementTable);
for(let i = 0; i < n; i++) {
    let elementTr = document.createElement("tr");
    elementTable.appendChild(elementTr);
    for(let j = 0; j < m; j++) {
        let elementTd = document.createElement("td");
        elementTr.appendChild(elementTd);
    }
}*/












