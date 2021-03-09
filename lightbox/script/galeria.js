let imagens = document.querySelectorAll(".small-img");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector("#modal_img");
let btnClose = document.querySelector("#btn_close");
let srcVal = "";

for(let contador = 0; contador < imagens.length; contador++){

	imagens[contador].addEventListener("click", function () {
		srcVal = imagens[contador].getAttribute("src");
		modalImg.setAttribute("src", srcVal);

		modal.classList.toggle("modal_active");
	});
    
}

btnClose.addEventListener("click", function(){
	modal.classList.toggle("modal_active");
});