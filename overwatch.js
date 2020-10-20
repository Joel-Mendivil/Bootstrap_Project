const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://rapidapi.p.rapidapi.com/feed/global?page=1");
xhr.setRequestHeader("x-rapidapi-host", "overtracker1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "01dbdb2211msh3f1b2285a637d35p1c6eb0jsn6b85b375fd0d");

xhr.send(data);