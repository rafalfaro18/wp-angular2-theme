<?php
define( 'ANGULAR_PROJECT_PATH' , get_template_directory_uri() . '/my-app/dist/my-app/' );

function wp_angular2_enqueue_style() {
	wp_enqueue_style( 'core', ANGULAR_PROJECT_PATH . 'styles.css', false ); 
}
function wp_angular2_enqueue_script() {
	wp_enqueue_script( 'runtime', ANGULAR_PROJECT_PATH . 'runtime.js', array() , null, true);
	wp_enqueue_script( 'es2015-polyfills', ANGULAR_PROJECT_PATH . 'es2015-polyfills.js', array() , null, true);
	wp_enqueue_script( 'polyfills', ANGULAR_PROJECT_PATH . 'polyfills.js', array() , null, true);
	wp_enqueue_script( 'main', ANGULAR_PROJECT_PATH . 'main.js', array() , null, true);
}
add_action( 'wp_enqueue_scripts', 'wp_angular2_enqueue_style' );
add_action( 'wp_enqueue_scripts', 'wp_angular2_enqueue_script' );