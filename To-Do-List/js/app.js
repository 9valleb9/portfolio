const btn = document.getElementById("enter");
let userInput = document.getElementById("userInput");
const ul = document.querySelector("ul");


function createListElement() {
	const div = document.createElement("div");
	const li = document.createElement("li");
    const doneButton = document.createElement("button");
    const delButton = document.createElement("button");
    div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, doneButton, delButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(userInput.value));
	userInput.value = "";
    doneButton.classList.add("doneClass");
    doneButton.innerHTML='Complete';
	delButton.classList.add("delClass");
	delButton.innerHTML='Delete';
  

}

function inputLength() {
	return userInput.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task) {
    //if (task.target.tagName === "LI"){
    //task.target.classList.toggle("done");
    if (document.getElementsByTagName("LI")[].style.textDecoration="line-through" ;
	}
//}


function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick)
btn.addEventListener("click", addListAfterClick);
userInput.addEventListener("keypress", addListAfterKeypress);