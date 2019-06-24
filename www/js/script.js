let burg = document.querySelector('#burger-btn');
let backBtn = document.querySelector('#burger-back');
let burgMenu = document.querySelector('#burger-menu');
let links = document.querySelectorAll('#burger-menu a');
for (let i = 0; i<links.length; i++) {
	links[i].onclick = function(){
		burg.classList.remove('hide');
		burgMenu.classList.add('hide');
	}
}
burg.onclick = function(){
	burg.classList.add('hide');
	burgMenu.classList.remove('hide');
	burgMenu.classList.add('burg-wrap-start');
	function test(){
		burgMenu.classList.add('burger-wrap');
	}
	setTimeout(test, 20);
	
}
backBtn.onclick = function(){
	burg.classList.remove('hide');
	burgMenu.classList.add('hide');
}