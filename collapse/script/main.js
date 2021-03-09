let btn = document.querySelector(".icon");

btn.addEventListener("click", function () {
	
	let sobreTexto = document.querySelector(".sobre-texto");
	sobreTexto.classList.toggle("open");

	btn.classList.toggle('change-icon')

});