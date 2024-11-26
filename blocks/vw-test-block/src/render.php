<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package vwtt
 */

$pokemons = json_decode( wp_remote_get( 'https://pokeapi.co/api/v2/type/' . $attributes['selectedPokemontype'] )['body'], true )['pokemon'];
?>

<p <?php echo esc_attr( get_block_wrapper_attributes() ); ?>>
Покемоны типа <?php echo esc_html( $attributes['selectedPokemontype'] ); ?>:
</p>

<div class="pokemons-list">
	<?php
	$count = count( $pokemons );
	for ( $i = 0;$i < $count;$i++ ) :
		?>
		<div class="list-item">
			<div class="image unloaded" data-name="<?php echo esc_html( $pokemons[ $i ]['pokemon']['name'] ); ?>">
				<p class="img-holder">
					Картиника загружается...
				</p>
			</div>

			<p>Имя: <?php echo esc_html( $pokemons[ $i ]['pokemon']['name'] ); ?> </p>
		</div>

	<?php endfor; ?>
</div>
