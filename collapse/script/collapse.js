// btn icon

let btnOpen = document.querySelector(".btn-open");

btnOpen.addEventListener("click", function () {

	btnOpen.classList.toggle("close-icon");

	let container = document.querySelector(".container");
	container.classList.toggle("open");
	
});