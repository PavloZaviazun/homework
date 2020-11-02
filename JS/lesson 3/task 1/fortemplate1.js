/*
// - отримує текст з параграфа з id "content"

let textIdContent = document.getElementById("content").textContent;
console.log(textIdContent);*/

/*
// - отримує текст з блоку з id "rules"

let rules = document.getElementById("rules").textContent;
console.log(rules);*/

/*
// - замініть текст параграфа з id 'content' на будь-який інший

let textContent = document.getElementById("content");
textContent.innerText = "new text";*/

/*
// - замініть текст параграфа з id 'rules' на будь-який інший

let rules = document.getElementById("rules");
rules.innerText = 'another text';*/

/*// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
let pTag = document.getElementsByTagName("p");
let divTag = document.getElementsByTagName("div");
let ulTag = document.getElementsByTagName("ul");
pTag[0].style.backgroundColor = "red";
pTag[0].style.color = "blue";
divTag[0].style.backgroundColor = "red";
divTag[0].style.color = "blue";
ulTag[0].style.backgroundColor = 'red';
ulTag[0].style.color = "blue";*/

/*
// - отримати весь список класів елемента з id=rules і вивести їх в console.log

let classId = document.getElementById("rules");
let listClasses = classId.classList;
console.log(listClasses);*/

/*
// - отримати всі елементи з класом fc_rules

let class1 = document.getElementsByClassName("fc_rules");
console.log(class1);*/

/*// - поміняти колір тексту у всіх елементів fc_rules на червоний

let class2 = document.getElementsByClassName("fc_rules");
for(let i = 0; i < class2.length; i++) {
    class2[i].style.color = "red";
}*/

