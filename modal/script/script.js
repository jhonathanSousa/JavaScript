let modalBtn = document.querySelector(".modal-btn");
let modalLg = document.querySelector(".modal-lg");

modalBtn.addEventListener("click", function () {
	
	modalLg.classList.add("bg-active");

});

let modalClose = document.querySelector(".modal-close");

modalClose.addEventListener("click", function(){

	modalLg.classList.remove("bg-active");

});