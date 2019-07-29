window.onload = function(){
// radio
	let wheather = document.querySelector('.weather-informer');
	wheather.classList.remove('hide');
	let startBtn = document.querySelector('#play-stop');
	var playStatus = 'stop';
	var audio = new Audio('http://de1.internet-radio.com:8277/stream?type=http&nocache=12');
	startBtn.onclick = function(){
		if (playStatus ==='stop') {
			console.log(playStatus);
			startBtn.innerHTML = "<img  src=\"../img/pause.png\" alt=\"\">";
			playStatus ='play';
			audio.play();
			
		} else if (playStatus ==='play'){
			startBtn.innerHTML = "<img  src=\"../img/play.png\" alt=\"\">";
			audio.pause();
			playStatus ='stop';
		}
		
	}
// radio end

} 