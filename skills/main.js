window.addEventListener("load", ()=>{
	let progressBars = document.querySelectorAll(".progress-bar");
	let values = [
		'60%',
		'40%',
		'40%',
		'50%',
		'40%'
	];

	progressBars.forEach((progress,index) => {
		progress.style.width = values[index];
	});
});