let date = new Date();
console.log (date);

let container = document.querySelector(".container");

function displayDate() {
	let dateDiv = document.createElement("div");
	container.appendChild(dateDiv);
	dateDiv.classList.add("date");
	dateDiv.innerHTML = date;
}

displayDate(); 