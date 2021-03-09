
// Pai dos slides
const slides = document.querySelector(".slider").children;

// Controls
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// indicators
const indicator = document.querySelector(".indicators");

let index = 0;

// Controls com click

prev.addEventListener("click", function () {

	// Função
	prevSlide();
	updateCircleIndicator();
	resetTime()
});

next.addEventListener("click", function () {

	// Função
	nextSlide();
	updateCircleIndicator();
	resetTime()
});

// Criação dos indicadores

function circleIndicator(){

	for(let i = 0; i < slides.length; i++){

		const div = document.createElement("div");
			div.innerHTML = i + 1;
			div.setAttribute("onclick","indicateSlide(this)");
			div.id = i;
			if (i == 0) {
				div.className = "active";
			}	

			indicator.appendChild(div);
	}
}

// Executando a função dos indicadores
circleIndicator();

// Quando clicar no indicador

function indicateSlide(element){

	index = element.id;

	changeSlide();
	updateCircleIndicator();
	resetTime();
}

// Quando clicar em avançar o indicador muda
function updateCircleIndicator(){

	for (let i = 0; i < indicator.children.length; i++){
		indicator.children[i].classList.remove("active");
	}

	indicator.children[index].classList.add("active");
}

// Função para avançar slide
function nextSlide(){

	// Lógica para a passagem das imagens
	if (index == slides.length - 1) {
		index = 0;
	}else{
		index++;
	}

	changeSlide();
}

// Função para voltar slide
function prevSlide(){

	// Lógica para voltar as imagens
	if (index == 0) {
		index = slides.length - 1;
	}else{
		index--;
	}

	changeSlide();
}

// Mudança da imagem colocando a classe nas outras imagens
function changeSlide(){

	// Removendo a class active da imagem
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active")
	}

	// Adicionando a classe na imagem selecionada
	slides[index].classList.add("active");
}

// Para voltar tempo do slide

function resetTime() {
	clearInterval(timer);
	timer = setInterval(autoPlay,4000);
}

// Para deixar o slide automatico

function autoPlay(){
	nextSlide();
	updateCircleIndicator();
}

let timer = setInterval(autoPlay,4000);