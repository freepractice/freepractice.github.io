
function ventana() {
	// console.log(window.innerWidth);
	let informa = document.querySelector('#informa');
	informa.innerHTML = window.innerWidth;
}


// let screenWidth = window. innerWidth;

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
