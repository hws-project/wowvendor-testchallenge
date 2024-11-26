import apiFetch from '@wordpress/api-fetch';

let rows = document.querySelectorAll('.pokemons-list .image.unloaded');

for (let i = 0; i < rows.length; i++) {
	apiFetch({ url: 'https://pokeapi.co/api/v2/pokemon/' + rows[i].dataset.name, credentials: 'omit' })
		.then((response) => {
			let img = new Image();
			img.src = response.sprites.front_default;
			rows[i].querySelector(".img-holder").remove();
			rows[i].prepend(img);
			rows[i].classList.remove('unloaded')
		});
}
