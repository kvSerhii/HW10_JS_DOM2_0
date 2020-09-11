'use strict'
// 2.Дан элемент #elem. Реализуйте 4 функции:
// - Добавьте ему класс www.
// - Удалите у него класс www.
// - Проверьте наличие у него класса www.
// - Добавьте ему класс www, если его нет и удалите - если есть.

const rootDiv = document.getElementById('root');

const taskTwoDiv = document.createElement("div");

taskTwoDiv.id = "elem";

rootDiv.appendChild(taskTwoDiv);
//1
taskTwoDiv.classList.add("taskTwo");
taskTwoDiv.classList.add("www");
//2
taskTwoDiv.classList.remove("www");
//3
taskTwoDiv.addEventListener("click", (event) => {
    console.log(taskTwoDiv.classList.contains("www"));
});
//4
taskTwoDiv.addEventListener("click", (event) => {
    if (taskTwoDiv.classList.contains("www")) {
        taskTwoDiv.classList.remove("www");
    } else {
        taskTwoDiv.classList.add("www");
    }
});