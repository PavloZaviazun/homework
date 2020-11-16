/*// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let button = document.querySelector("button");
let text = document.querySelector("#text");
button.onclick = () => {
    text.style.visibility = "hidden";
};*/

/*// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let knopka = document.querySelector("button");
knopka.onclick = () => {
    knopka.style.visibility = "hidden";
}*/

/*// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let age = document.querySelector(".age");
let buttonAge = document.querySelector(".checkAge");
buttonAge.onclick = () => {
    age.value < 18 ? alert("Go home") : alert("Welcome");
}*/

/*// - Создайте меню, которое раскрывается/сворачивается при клике

let mainClick = document.querySelector(".mainClick");
let click = document.querySelectorAll(".click");
let count = 0;
mainClick.onclick = () => {
    if (count % 2 == 0) {
        for(let flow of click) {
        flow.style.visibility = "visible";}
    }
    else for(let flow of click) {
        flow.style.visibility = "hidden";}
    count++;
};*/

/*// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title: "comment 1", body: "comment 1 body"},
    {title: "comment 2", body: "comment 2 body"},
    {title: "comment 3", body: "comment 3 body"},
    {title: "comment 4", body: "comment 4 body"},
    {title: "comment 5", body: "comment 5 body"},
]

let arrayPText =[];
let arrayButton = [];
let arrayCount = [];
i = 0;
for(let flow of comments) {
    let arrayDiv = document.createElement("div");
    arrayPText[i] = document.createElement("p");
    arrayButton[i] = document.createElement("button");
    document.body.appendChild(arrayDiv);
    arrayDiv.appendChild(arrayPText[i]).innerText = flow['title'];
    arrayDiv.appendChild(arrayButton[i]).innerText = "Full comment";
    arrayCount[i] = false;
    i++;
}

for(let i = 0; i < comments.length; i++) {
    arrayButton[i].onclick = () => {
        if (arrayCount[i] == false) {
            arrayPText[i].innerText = comments[i].body;
            arrayButton[i].innerText = "Cut the comment";
            arrayCount[i] = true;
        }
        else {
            arrayPText[i].innerText = comments[i].title;
            arrayButton[i].innerText = "Full comment";
            arrayCount[i] = false;
            }
    }
}*/

/*// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form1 = document.createElement("form");
let form2 = document.createElement("form");
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");
let input4 = document.createElement("input");
let button = document.createElement("button");
form1.setAttribute("id", "form1");
form2.setAttribute("id", "form2");
input1.setAttribute("id", "input1");
input1.setAttribute("value", "User1: FirstName");
input2.setAttribute("id", "input2");
input2.setAttribute("value", "User1: SecondName");
input3.setAttribute("id", "input3");
input3.setAttribute("value", "User2: FirstName");
input4.setAttribute("id", "input4");
input4.setAttribute("value", "User2: SecondName");
button.setAttribute("id", "button");
document.body.appendChild(form1);
form1.appendChild(input1);
form1.appendChild(input2);
document.body.appendChild(form2);
form2.appendChild(input3);
form2.appendChild(input4);
document.body.appendChild(button).innerText = "Click the button";

button.onclick = () => {
    let pole1 = document.querySelector("#input1");
    let pole2 = document.querySelector("#input2");
    let user1 = `${pole1.value} ${pole2.value}`;
    let pole3 = document.querySelector("#input3");
    let pole4 = document.querySelector("#input4");
    let user2 = `${pole3.value} ${pole4.value}`;
    let divUser1 = document.createElement("div");
    let divUser2 = document.createElement("div");
    document.body.appendChild(divUser1).innerText = user1;
    document.body.appendChild(divUser2).innerText = user2;
}*/

/*// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

let row = +prompt("Input row number");
let column = +prompt("Input column number");
let tag = "body";

let arrowFunction = (row, column, tag) => {
    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    let tagGet = document.getElementsByTagName(tag)[0];
    tagGet.appendChild(table);
    for(let i = 1; i <= row; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for(let j = 1; j <= column; j++) {
            let td = document.createElement("td");
            td.setAttribute("class", "spilniy")
            tr.appendChild(td).innerText = `Row #${i}, Column #${j}`;
        }
    }
}
arrowFunction(row, column, tag);

let vseTd = document.getElementsByClassName("spilniy");
for(let i = 0; i < vseTd.length; i++) {
    vseTd[i].style.border = "1px solid black";
    vseTd[i].style.padding = "2px";
    vseTd[i].style.padding = "2px";
}*/

/*// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form = document.createElement("form");
let input1 = document.createElement("input");
input1.setAttribute("value", "Row number");
let input2 = document.createElement("input");
input2.setAttribute("value", "Column number");
let input3 = document.createElement("input");
input3.setAttribute("value", "Content");
let button = document.createElement("button");

document.body.appendChild(form);
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);
document.body.appendChild(button).innerText = "Create a table";

button.onclick = () => {
    let input = document.getElementsByTagName("input");
    let [,a, b, c] = input;
    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    document.body.appendChild(table);
    for(let i = 1; i <= a.value; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for(let j = 1; j <= b.value; j++) {
            let td = document.createElement("td");
            td.style.border = "1px solid black";
            td.style.padding = "2px";
            td.style.padding = "2px";
            tr.appendChild(td).innerText = c.value;
        }
    }
}*/

/*// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let divImage = document.createElement("div");
document.body.appendChild(divImage);
divImage.style.height = "300px";

let divButtons = document.createElement("div");
document.body.appendChild(divButtons);

let button1 = document.createElement("button");
let button2 = document.createElement("button");
divButtons.appendChild(button1).innerText = "Prev";
divButtons.appendChild(button2).innerText = "Next";

let count = 0;

let arrayImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
let image = document.createElement("img");
image.setAttribute("height", "300px");
image.setAttribute("src", `${arrayImages[count]}`);
divImage.appendChild(image);


button1.onclick = () => {
    count--;
    if(count < 0) count = arrayImages.length - 1;
    image.setAttribute("src", `${arrayImages[count]}`);

}

button2.onclick = () => {
    count++;
    if(count > arrayImages.length - 1) count = 0;
    image.setAttribute("src", `${arrayImages[count]}`);
}*/

/*// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let arrayRude = [
    "rude",
    "offense",
    "injure",
    "miff"
]

let rudeInput = document.createElement("input");
document.body.appendChild(rudeInput);
rudeInput.setAttribute("id", "rudeInput");

let rudeButton = document.createElement("button");
document.body.appendChild(rudeButton).innerText = "Check vocabulary";

rudeButton.onclick = () => {
    let rudeWord = document.getElementById("rudeInput");
    for(flowRudes of arrayRude) {
        if(flowRudes == rudeWord.value) alert("You are so rude!");
    }
}*/

/*// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let arrayRude = [
    "rude",
    "offense",
    "injure",
    "miff"
]

let rudeInput = document.createElement("input");
document.body.appendChild(rudeInput);
rudeInput.setAttribute("id", "rudeInput");

let rudeButton = document.createElement("button");
document.body.appendChild(rudeButton).innerText = "Check vocabulary";

rudeButton.onclick = () => {
    let rudeSentence = document.getElementById("rudeInput");
    for(flowRudes of arrayRude) {
        if(rudeSentence.value.includes(flowRudes)) alert("You are so rude!");
    }
}*/

/*// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

let arrayH2 = document.getElementsByTagName("h2");
let menuDiv = document.createElement("div");
let menuUl = document.createElement("ul");
document.body.appendChild(menuDiv);
menuDiv.appendChild(menuUl);
menuUl.style.listStyleType = "none";
menuUl.style.padding = "0px";

let idWrap = document.getElementById("wrap");
idWrap.style.width = "50%";
idWrap.style.float = "left";
menuDiv.style.width = "350px";
menuDiv.style.float = "left";



for(let i = 0; i < arrayH2.length; i++) {
    let link = document.createElement("a");
    arrayH2[i].appendChild(link);
    link.setAttribute("name", `rule${i+1}`);

    let menuLi = document.createElement("li");
    menuUl.appendChild(menuLi);
    let ssil = document.createElement("a");
    menuLi.appendChild(ssil).innerText = arrayH2[i].textContent;
    ssil.setAttribute("href", `#rule${i+1}`);
    ssil.style.textDecoration = "none";
    menuLi.style.border = "1px solid blue";
    menuLi.style.margin = "5px 0px";
}*/

/*// -- взять массив пользователей

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
let divCheck = document.createElement("div");
let formCheck = document.createElement("form");
let inputBox1 = document.createElement("input");
let inputBox2 = document.createElement("input");
let inputBox3 = document.createElement("input");
inputBox1.setAttribute("type", "checkbox");
inputBox2.setAttribute("type", "checkbox");
inputBox3.setAttribute("type", "checkbox");
let label1 = document.createElement("span");
let label2 = document.createElement("span");
let label3 = document.createElement("span");
let divResult = document.createElement("div");
let divButton = document.createElement("div");
let buttonCheck = document.createElement("button");

document.body.appendChild(divCheck);
divCheck.appendChild(formCheck);
formCheck.appendChild(inputBox1);
formCheck.appendChild(label1).innerText = " Пользователи со статусом false  ";
formCheck.appendChild(inputBox2);
formCheck.appendChild(label2).innerText = " Пользователи старше 29 лет  ";
formCheck.appendChild(inputBox3);
formCheck.appendChild(label3).innerText = " Пользователи в городе Киев  ";
document.body.appendChild(divButton);
document.body.appendChild(divResult);

divButton.appendChild(buttonCheck).innerText = "Apply filter";

buttonCheck.onclick = () => {
    let result = usersWithAddress;
    if(inputBox1.checked) result = result.filter(a => !a.status);
    if(inputBox2.checked) result = result.filter(a => a.age >= 29);
    if(inputBox3.checked) result = result.filter(a => a.address.city === "Kyiv");
    array = [];
    for(let i = 0; i < result.length; i++) {
        array[i] = JSON.stringify(result[i]);
    }
    divResult.innerHTML = "";
    array.forEach(value => {
        divResult.innerHTML += `${value} <br>` ;
    })
}*/















