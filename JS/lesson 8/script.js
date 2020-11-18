/*// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let textArea = document.createElement("textarea");
document.body.appendChild(textArea);
let data = document.getElementsByTagName("textarea")[0];
data.value = localStorage.getItem("textArea");

textArea.onblur = () => {
    localStorage.setItem("textArea", data.value);
}*/

/*// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

let divForm = document.createElement("div");
let firstName = document.createElement("input");
let secondName = document.createElement("input");
let genderMan = document.createElement("input");
let genderWoman = document.createElement("input");
let backCall = document.createElement("input");
let comment = document.createElement("textarea");
let br1 = document.createElement("br");
let br2 = document.createElement("br");
let br3 = document.createElement("br");
let br4 = document.createElement("br");
let br5 = document.createElement("br");

let labelGenderMan = document.createElement("span");
let labelGenderWoman = document.createElement("span");
let labelBackCall = document.createElement("span");

firstName.placeholder = "First Name";
secondName.placeholder = "Second Name";
comment.placeholder = "Leave your comment";
genderMan.setAttribute("type", "radio");
genderMan.setAttribute("value", "man");
genderMan.setAttribute("name", "gender");
genderWoman.setAttribute("type", "radio");
genderWoman.setAttribute("value", "woman");
genderWoman.setAttribute("name", "gender");
backCall.setAttribute("type", "checkbox");
divForm.setAttribute("tabindex", "0");

document.body.appendChild(divForm);
divForm.appendChild(firstName);
divForm.appendChild(br1);
divForm.appendChild(secondName);
divForm.appendChild(br2);
divForm.appendChild(labelGenderMan).innerText = "Man: ";
divForm.appendChild(genderMan);
divForm.appendChild(br3);
divForm.appendChild(labelGenderWoman).innerText = "Woman: ";
divForm.appendChild(genderWoman);
divForm.appendChild(br4);
divForm.appendChild(labelBackCall).innerText = "Is it necessary to call back?"
divForm.appendChild(backCall);
divForm.appendChild(br5);
divForm.appendChild(comment);

let arrayStorage = document.getElementsByTagName("input");
arrayStorage[0].value = localStorage.getItem("firstName");
arrayStorage[1].value = localStorage.getItem("secondName");
arrayStorage[2].checked = (localStorage.getItem("genderMan") == "true") ? true : false;
arrayStorage[3].checked = (localStorage.getItem("genderWoman") == "true") ? true :false;
arrayStorage[4].checked = (localStorage.getItem("callBack") == "true") ? true : false;
let textArea = document.getElementsByTagName("textarea")[0];
textArea.value = localStorage.getItem("comment");

divForm.onmouseleave = () => {
    localStorage.setItem("firstName", arrayStorage[0].value);
    localStorage.setItem("secondName", arrayStorage[1].value);
    localStorage.setItem("genderMan", arrayStorage[2].checked);
    localStorage.setItem("genderWoman", arrayStorage[3].checked);
    localStorage.setItem("callBack", arrayStorage[4].checked);
    localStorage.setItem("comment", textArea.value);
}*/

/*// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).


let buttonBack = document.createElement("button");
let buttonForward = document.createElement("button");
let textArea = document.createElement("textarea");
let form = document.createElement("form");
let buttonSave = document.createElement("button");

document.body.appendChild(buttonBack).innerText = "Back";
document.body.appendChild(buttonForward).innerText = "Forward";
buttonBack.style.visibility = "hidden";
buttonForward.style.visibility = "hidden";
document.body.appendChild(form);
form.appendChild(textArea);
document.body.appendChild(buttonSave).innerText = "Save";

let data = document.getElementsByTagName("textarea")[0];
let count = 0;

if(localStorage.getItem("count")) {
    count = +localStorage.getItem("count");
    buttonBack.style.visibility = "visible";
}
let localCount;
localStorage.setItem("localCount", count);


textArea.value = localStorage.getItem(`save ${count}`);
buttonSave.onclick = () => {
    buttonForward.style.visibility = "hidden";
    if(count > 0) buttonBack.style.visibility = "visible";
    localStorage.setItem(`save ${count}`, data.value);
    localStorage.setItem("count", count);
    localStorage.setItem("localCount", count);
    count++;
}

buttonForward.onclick = () => {
    localCount = localStorage.getItem("localCount");
    if(localCount < count - 1) ++localCount;
    data.value = localStorage.getItem(`save ${localCount}`);
    localStorage.setItem("localCount", localCount);
    if(localCount > 0) buttonBack.style.visibility = "visible";
    if(localCount == count - 1) buttonForward.style.visibility = "hidden";
}

buttonBack.onclick = () => {
    localCount = localStorage.getItem("localCount");
    if(localCount > 0) --localCount;
    if(localCount == 0) buttonBack.style.visibility = "hidden"
    data.value = localStorage.getItem(`save ${localCount}`);
    localStorage.setItem("localCount", localCount);
    if(localCount < count) buttonForward.style.visibility = "visible";
}*/

/*// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// Create all tags of a structure
let formTB = document.createElement("form");
let fio = document.createElement("input");
let number = document.createElement("input");
let mail = document.createElement("input");
let firm = document.createElement("input");
let department = document.createElement("input");
let birthDay = document.createElement("input");
let divButtons = document.createElement("div");
let addContact = document.createElement("button");
let saveButton = document.createElement("button");


// Placeholders of inputs
fio.placeholder = "First and Second Name";
number.placeholder = "Phone number";
mail.placeholder = "e-mail";
firm.placeholder = "Company name";
department.placeholder = "Department";
birthDay.placeholder = "Birthday";

// Add tags to web page
document.body.appendChild(formTB);
formTB.appendChild(fio);
formTB.appendChild(number);
formTB.appendChild(mail);
formTB.appendChild(firm);
formTB.appendChild(department);
formTB.appendChild(birthDay);
document.body.appendChild(divButtons);
divButtons.appendChild(addContact).innerText = "Add contact";
divButtons.appendChild(saveButton).innerText = "Save";
saveButton.style.visibility = "hidden";

// Position inputs in a column
let arrayInput = document.getElementsByTagName("input");
for(flow of arrayInput) {
    flow.style.display = "flex";
    flow.style.flexDirection = "column";
}

// Creation table with header
let divTable = document.createElement("div");
let table = document.createElement("table");
let trMain = document.createElement("tr");
document.body.appendChild(divTable);
divTable.appendChild(table);
divTable.appendChild(trMain);
addContact.style.margin = "5px 0px";
let headTable = ["First and Second Name", "Phone number", "e-mail", "Company name", "Department", "Birthday", ""];
for(let i = 0; i < 7; i++) {
    let th = document.createElement("th");
    trMain.appendChild(th).innerText = headTable[i];
    th.style.width = "170px";
    th.style.border = "1px solid black";
}


// Initial verification of user order
let count = 0;
if(localStorage.getItem("count")) count = +localStorage.getItem("count") + 1;
setInputs(count); //put draft values into Inputs


// For td creation
let arrayKeys = ["fio#", "number#", "mail#", "firm#", "department#", "birthDay#", ""];

// Creation table in case of page refresh
let tempCount = 0;
if(localStorage.getItem("count") != null) {
    for (let j = 0; j <= localStorage.getItem("count"); j++) {
    if(localStorage.getItem(`fio#${j}`) != null || localStorage.getItem(`number#${j}`) != null || localStorage.getItem(`mail#${j}`) != null
        || localStorage.getItem(`firm#${j}`) != null || localStorage.getItem(`department#${j}`) != null || localStorage.getItem(`birthDay#${j}`) != null) {
        createTR(tempCount);
    }
        tempCount++;
    }
}

// Add new user contact
addContact.onclick = () => {
    setLocalStorage(count);
    localStorage.setItem("count", count);
    createTR(count);
    count++;
}

function createTR(index) {
    let tr = document.createElement("tr");
    divTable.appendChild(tr);

    for(let i = 0; i < 7; i++) {
        let td = document.createElement("td");
        tr.appendChild(td).innerText = localStorage.getItem(`${arrayKeys[i]}${index}`);
        td.style.border = "1px solid black";
        td.style.paddingLeft = "5px";
        td.setAttribute("id", `td#${i}-tr#${index}`);
    }

    // Buttons remove & edit creation
    let buttonEdit = document.createElement("button");
    let buttonRemove = document.createElement("button");
    let lastTd = document.getElementById(`td#6-tr#${index}`);
    lastTd.appendChild(buttonEdit).innerText = "Edit";
    lastTd.appendChild(buttonRemove).innerText = "Remove";

    // Click button remove
    buttonRemove.onclick = () => {
        let idRemove = buttonRemove.parentNode.id.slice(8);
        localStorage.removeItem(`fio#${idRemove}`);
        localStorage.removeItem(`number#${idRemove}`);
        localStorage.removeItem(`mail#${idRemove}`);
        localStorage.removeItem(`firm#${idRemove}`);
        localStorage.removeItem(`department#${idRemove}`);
        localStorage.removeItem(`birthDay#${idRemove}`);
        location.reload();
    }

    // Click button edit
    buttonEdit.onclick = () => {
        let idEdit = buttonRemove.parentNode.id.slice(8);
        setInputs(idEdit);
        saveButton.style.visibility = "visible";
        saveButton.onclick = () => {
            setLocalStorage(idEdit);
            saveButton.style.visibility = "hidden";
            location.reload();
        }
    }
}

// Put values from LocalStorage to Inputs
function setInputs(index) {
    fio.value = localStorage.getItem(`fio#${index}`);
    number.value = localStorage.getItem(`number#${index}`);
    mail.value = localStorage.getItem(`mail#${index}`);
    firm.value = localStorage.getItem(`firm#${index}`);
    department.value = localStorage.getItem(`department#${index}`);
    birthDay.value = localStorage.getItem(`birthDay#${index}`);
}

//Put values from Inputs to LocalStorage
function setLocalStorage(index) {
    localStorage.setItem(`fio#${index}`, fio.value);
    localStorage.setItem(`number#${index}`, number.value);
    localStorage.setItem(`mail#${index}`, mail.value);
    localStorage.setItem(`firm#${index}`, firm.value);
    localStorage.setItem(`department#${index}`, department.value);
    localStorage.setItem(`birthDay#${index}`, birthDay.value);
}

//Save input values to LocalStorage in case of leaving form
formTB.onmouseleave = () => {
    setLocalStorage(count);
}*/




