'use strict'

// 1.Сделать два инпута: в один вводить параметр(число), во втором показывать
// объем шара при заданном параметре.

const rootDiv = document.getElementById('root');

const taskOneDiv = document.createElement("div");
const input = document.createElement("input");
const output = document.createElement("input");
const textArea = document.createElement("textarea");

taskOneDiv.classList.add("taskOne");
textArea.value = "Input R of the sphere and press Enter";

rootDiv.appendChild(taskOneDiv);
taskOneDiv.appendChild(textArea);
taskOneDiv.appendChild(input);
taskOneDiv.appendChild(output);

input.addEventListener("keypress", (event) => {
    output.value = (4 / 3) * Math.PI * (Math.pow((Number(input.value)), 3));
});