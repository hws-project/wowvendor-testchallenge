/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

import apiFetch from '@wordpress/api-fetch';

import { PanelBody, SelectControl } from '@wordpress/components';

import { useState, useEffect } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */


export default function Edit({ attributes, setAttributes }) {
	const { selectedPokemontype } = attributes;
	const defaultSelection = 'normal';

	var currentPokemon = defaultSelection;
	if (attributes.selectedPokemontype) {
		//setType(attributes.selectedPokemontype);
		currentPokemon = attributes.selectedPokemontype;
	}
	const [pokemonState, setState] = useState(currentPokemon);

	let types = [];

	apiFetch({ url: 'https://pokeapi.co/api/v2/type/', credentials: 'omit' })
		.then((response) => {
			console.log(response['results']);
			for (let i = 0; i < response['results'].length; i++) {
				types.push({
					value: response['results'][i].name,
					label: response['results'][i].name
				})
			}

		});

	return (
		<>
			<InspectorControls>
				<PanelBody title={'Выбор типа покемона'}>
					<SelectControl
						label={__('Покемон')}
						value={pokemonState} // e.g: value = [ 'a', 'c' ]
						onChange={(pokemon) => {
							setState(pokemon);
							setAttributes({ selectedPokemontype: pokemon })
						}}
						options={types}

					/>
				</PanelBody>
			</InspectorControls>
			<p {...useBlockProps()}>
				Выбран тип покемона: {pokemonState}
			</p>
		</>

	);
}
