<?php

/**
 * @wordpress-plugin
 * Plugin Name: WowVendor Test Task - German Gokhveys
 * Description: Test Task from German Gokhveys
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version: 1.0.0
 * Author: German Gokhveys
 * Author URI: https://github.com/hws-project/wowvendor-testchallenge
 * @package VWTT
 * @author German Gokhveys
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

if ( ! class_exists( 'VWTT_Main' ) ) {

	/**
	 * VWTT_Main
	 */
	class VWTT_Main {


		/**
		 * __construct
		 *
		 * @return void
		 */
		public function __construct() {
			$this->vwtt_register_actions();
		}

		/**
		 * vwtt_register_actions
		 *
		 * @return void
		 */
		private function vwtt_register_actions() {
			add_action( 'init', array( $this, 'vwtt_register_blocks' ) );
		}

		/**
		 * vwtt_register_blocks
		 *
		 * @return void
		 */
		public function vwtt_register_blocks() {
			register_block_type( __DIR__ . '/blocks/vw-test-block/build' );
		}
	}
}
new VWTT_Main();
