/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log('Hello World! (from create-block-vw-test-block block)');
/* eslint-enable no-console */

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
