//btn-enviar
let btnEnviar = document.querySelector("#btn-enviar");

btnEnviar.addEventListener("click", function (event) {
	
	event.preventDefault();

	// Formulário de contato
	let contato = document.querySelector("#contato");

	// Campo de entrada nome
	let nome = contato.nome.value;
	let msgNome = document.querySelector("#msg-nome");

	if (nome === "") {
		contato.nome.classList.add("invalido");
		msgNome.innerHTML = "Campo obrigatório*";
	}else{
		contato.nome.classList.remove("invalido");
		msgNome.innerHTML = "";
	}

	// Campo de entrada e-mail
	let email = contato.email.value;
	let msgEmail = document.querySelector("#msg-email");

	if (email == "") {
		contato.email.classList.add("invalido");
		msgEmail.innerHTML = "Campo obrigatório*";
	}else{
		contato.email.classList.remove("invalido");
		msgEmail.innerHTML = "";
	}

	// Campo de entrada telefone
	let telefone = contato.telefone.value;
	let msgTelefone = document.querySelector("#msg-telefone");

	if (telefone == "") {
		contato.telefone.classList.add("invalido");
		msgTelefone.innerHTML = "Campo obrigatório*";
	}else{
		contato.telefone.classList.remove("invalido");
		msgTelefone.innerHTML = "";
	}


});

// nome msg-nome



// email msg-email

//telefone msg-telefone

