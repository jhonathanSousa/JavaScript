
let menu = document.querySelector("#toggleIcon");

menu.addEventListener("click", function(){
	let open = document.querySelector("#menu-overlay");
	open.classList.toggle("active");

	let close = document.querySelector("#toggleIcon");
	close.classList.toggle("active");
})

