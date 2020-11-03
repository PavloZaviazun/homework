// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//     - знайти всі div та змінити ім колір на червоний

let allClasses = document.body.classList;
console.log(allClasses);

let allParagr = document.getElementsByTagName("p");
for(let i = 0; i < allParagr.length; i++) {
    allParagr[i].innerText = "hello oktenweb!";
}

let allDiv = document.getElementsByTagName("div");
for(let j = 0; j < allDiv.length; j++) {
    allDiv[j].style.backgroundColor = "red";
}