let button = document.querySelector(".button")

// console.log (date);

let container = document.querySelector(".container");
let dateDiv = document.createElement("div");

function displayDate() {
	let date = new Date();
	container.appendChild(dateDiv);
	dateDiv.classList.add("date");
	dateDiv.innerHTML = date;
}

function clearPage(){
	dateDiv.innerHTML = " ";	
}

displayDate(); 

button.addEventListener('click', clearPage);
button.addEventListener('click', displayDate);




