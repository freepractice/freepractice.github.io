
/* General function to get element from html */
function getElement(element) {
	let el = document.querySelector(element);
	return el;
}
/* "Page loaded" Event Listener without CSS or images */
addEventListener("DOMContentLoaded", (event) => {
	let element1 = getElement('.header-logo h1');
	let element2 = getElement('.youtube-url > label');
	let element3 = getElement('.lorem');
	if (window.innerWidth > 360) {
		element1.style.fontSize = ((window.innerWidth*0.00568)+17.95)+'px';
		element2.style.fontSize = ((window.innerWidth*0.0068)+15.6)+'px';
		element3.style.fontSize = ((window.innerWidth*0.00284)+12.47)+'px';
	}
});
/* "Page resized" Event Listener */
addEventListener('resize', (event) => {
	let element1 = getElement('.header-logo h1');
	let element2 = getElement('.youtube-url > label');
	let element3 = getElement('.lorem');
	if (window.innerWidth > 360) {
		element1.style.fontSize = ((window.innerWidth*0.00568)+17.95)+'px';
		element2.style.fontSize = ((window.innerWidth*0.0068)+15.6)+'px';
		element3.style.fontSize = ((window.innerWidth*0.00284)+12.47)+'px';
	} else {
		element1.style.fontSize = '20px';
		element2.style.fontSize = '18px';
		element3.style.fontSize = '13.5px'
	}
});

function ventana() {
	// console.log(window.innerWidth);
	let informa = document.querySelector('#informa');
	informa.innerHTML = window.innerWidth;
}

// let screenWidth = window. innerWidth;
/*
addEventListener('resize', (event) => {
	// console.log(window.innerWidth);
	if (window.innerWidth <= 720) {
		let iframe = document.querySelector('.youtube-video > iframe');
		iframe.setAttribute('width', window.innerWidth*0.2*4);
	} else {
		let iframe = document.querySelector('.youtube-video > iframe');
		iframe.setAttribute('width', 560);
	}
});
*/

function url() {
	let getUrl = document.querySelector('#youtube-url').value;
	function videoId(id) {
		let src = `https://www.youtube.com/embed/${id}`;
		// let src = `https://www.youtube.com/embed/${id}?enablejsapi=1&iv_load_policy=3`;
		document.querySelector('.youtube-video > iframe').setAttribute('src', src);
	}
	if (getUrl.includes('v=')) {
		let split1 = getUrl.split('=')[1];
		let split2 = split1.split('&')[0];
		videoId(split2);
	} else if (getUrl.includes('.be/')) {
		let split1 = getUrl.split('.be/')[1];
		let split2 = split1.split('?')[0];
		videoId(split2);
	} else {
		videoId(getUrl);
	}
}
function clean() {
	let input = document.querySelector('#youtube-url');
	input.value = '';
}
