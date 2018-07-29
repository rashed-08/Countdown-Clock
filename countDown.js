'use strict';
var deadLine = new Date(Date.parse(new Date())+2 * 24 * 60 * 60 * 1000);
//alert(deadLine);
initializeClock("clockDiv", deadLine);

function initializeClock(id, deadLine){
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
	
	function updateClock(){
		var time = getTimeRemaining(deadLine);
		daysSpan.innerHTML = time.days;
		hoursSpan.innerHTML = ('0'+time.hours).slice(-2);
		minutesSpan.innerHTML = ('0'+time.minutes).slice(-2);
		secondsSpan.innerHTML = ('0'+time.seconds).slice(-2);
		if (time.total <= 0){
			clearInterval(timeInterval);
		}
	}
	updateClock();
	var timeInterval = setInterval(updateClock, 1000);
}

function getTimeRemaining(deadLine){
	var time = Date.parse(deadLine) - Date.parse(new Date());
	var seconds = Math.floor((time/1000)%60);
	var minutes = Math.floor((time/1000/60)%60);
	var hours = Math.floor((time/(1000*60*60))%24);
	var days = Math.floor(time/(1000*60*60*24));
	return {
		'total' : time,
		'days' : days,
		'hours' : hours,
		'minutes' : minutes,
		'seconds' : seconds
	};
}