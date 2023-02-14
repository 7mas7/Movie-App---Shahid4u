// when window loaded
window.addEventListener("load",function() {
	// first - the slide show
	slide_show(document.querySelector('.slides'));
	// load the movies list
	loadMoviesList();
	// playing the film that user choose
	playVideo(document.querySelectorAll(".movie-container"));
});


function loadMoviesList(){
	// the contanier here is the slide show container
	const container =  document.querySelector(".slides");
	// loop on our array of movies
	for(let i = 0; i < arrayOfMovies.length; i++){
		container.innerHTML += 
		`<div class="slide">
			<div class="slide-info">
			<img src="${arrayOfMovies[i].src}" class="slide-img">			
					<h3 class="slide-movie-name">${arrayOfMovies[i].title}</h3>
			</div>
		</div>`;
		// the movies list container
		document.querySelector(".movies-list").innerHTML += 
		`			<a href="watch.html" class="movie-container" theSrc='${arrayOfMovies[i].link}'>
				<div class="movie-info">
					<li class="play-icon"><ion-icon name="play-circle-sharp"></ion-icon></li>
					<h1>${arrayOfMovies[i].title}</h1>
				</div>
				<img src="${arrayOfMovies[i].src}">
			</a>

			`;
	}
}

function slide_show(parentEl) {
	// movies between slides
	nextSlide(parentEl,document.querySelector(".next-slide"));
	prevSlide(parentEl,document.querySelector(".prev-slide"))
}


function nextSlide(parentEl,button){
	button.addEventListener("click",function(){
		parentEl.scrollLeft += 330;
	});
}

function prevSlide(parentEl,button){
	button.addEventListener("click",function(){
		console.log('test');
		parentEl.scrollLeft -= 310;
	});
}


function playVideo(film){
	// transormaing the film with localsotrage
	for(let i = 0; i < film.length; i++){
		film[i].addEventListener("click",function(){
			var obj = {
				"videoSrc" : film[i].getAttribute('theSrc'),
				"videoTitle" : film[i].children[0].children[1].innerHTML 
			};
			window.localStorage.setItem("vidSrc",JSON.stringify(obj));
			
		});		
	}
}