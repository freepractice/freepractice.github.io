
function showDom (elementDom, printValue) {
	document.querySelector(elementDom).innerHTML = printValue;
}

let i = 0;
let j = 5;
let getInterval;
let counterUp;
let counterDown;

function showCounter() {
	showDom('section.counter > div:nth-child(2) > p', i++);
}
/*
function start() {
	getInterval = document.querySelector('#time-interval').value;
	// setInterval(showCounter, 1000);
	counterUp = setInterval(showCounter, getInterval);
}
*/
function stop() {
	clearInterval(counterUp);
}

function reset() {
	i = 0;
	showDom('section.counter > div:nth-child(2) > p', '0');
}

function clean() {
	getInterval = document.querySelector('#time-interval').value = '';
}

function countdown() {
	showDom('section.counter > div:nth-child(4) > p', j--);
}

function startup() {
	const myTimeout = setTimeout(start, 5000);
	let a = document.querySelector('section.counter > div:nth-child(4) > p').innerHTML;

	function start() {
		getInterval = document.querySelector('#time-interval').value;
		// setInterval(showCounter, 1000);
		counterUp = setInterval(showCounter, getInterval);
	}
	// counterDown = setInterval(countdown, 1000);	
	// clearInterval(counterDown);
}

