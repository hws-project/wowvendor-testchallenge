import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes, setAttributes }) {
	const { selectedPokemontype } = attributes;

	return (
		<p {...useBlockProps.save()}>
			Выбран тип покемона: {attributes.selectedPokemontype}
		</p>

	);
}


