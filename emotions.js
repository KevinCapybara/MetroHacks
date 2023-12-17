const data = new FormData();
data.append('image_file', '');

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('POST', 'https://faceanalysis.p.rapidapi.com/emotions/process_file');
xhr.setRequestHeader('X-RapidAPI-Key', '81c8545518mshd8c4d0223ad82eap155f54jsnef073763c537');
xhr.setRequestHeader('X-RapidAPI-Host', 'faceanalysis.p.rapidapi.com');

xhr.send(data);