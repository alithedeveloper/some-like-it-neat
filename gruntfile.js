/**
 * Some Like it Neat Gruntfile
 * http://alexhasnicehair.com
 *
 * @author Alex Vasquez
 */

'use strict';

/**
 * Grunt Module
 */
module.exports = function(grunt) {
	/**
	 * Load Grunt plugins
	 */
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	/**
	 * Configuration
	 */
	grunt.initConfig({
		/**
		 * Get package meta data
		 */
		pkg: grunt.file.readJSON('package.json'),
		/**
		 * Sass
		 */
		sass: {
			dist: {
				options: {
					style: 'expanded',
					lineNumbers: false,
					debugInfo: false,
					compass: true
				},
				files: {
					'style.css' : 'sass/style.scss'
				}
			}
		},
		/**
		 * Watch
		 */
		watch: {
			sass: {
				files: [
					'sass/*.scss',
					'sass/**/*.scss',
					'sass/**/**/*.scss'
				],
				tasks: ['sass']
			}
		}
	});

	/**
	 * Default task
	 * Run `grunt` on the command line
	 */
	grunt.registerTask('default', [
		'sass',
		'watch'
	]);
};