<?php
/**
 * Former Model Theme Functions
 *
 * @package Former_Model
 */
/**
 * Enqueue the CSS files.
 *
 * @since 1.0.0
 *
 * @return void
 */

/**
 * Enqueue theme CSS/JS compiled via Webpack.
 */
function former_model_enqueue_assets() {
	// CSS: css/build/theme.min.[hash].css.
	$css_file_path = glob( get_template_directory() . '/css/build/theme.min.*.css' );
	if ( ! empty( $css_file_path ) ) {
		$css_file_uri = get_template_directory_uri() . '/css/build/' . basename( $css_file_path[0] );
		wp_enqueue_style( 'former_model_style', $css_file_uri ); // phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion
	}

	// JS: js/build/main.min.[hash].js.
	$js_file_path = glob( get_template_directory() . '/js/build/main.min.*.js' );
	if ( ! empty( $js_file_path ) ) {
		$js_file_uri = get_template_directory_uri() . '/js/build/' . basename( $js_file_path[0] );
		wp_enqueue_script( 'former_model_script', $js_file_uri, array(), null, true ); // phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion
	}
}
add_action( 'wp_enqueue_scripts', 'former_model_enqueue_assets', 20 );


add_action( 'admin_notices', function () {
	if ( wp_is_block_theme() ) {
		echo '<div class="notice notice-success"><p>This is a block theme ✅</p></div>';
	} else {
		echo '<div class="notice notice-error"><p>This is NOT a block theme ❌</p></div>';
	}
} );