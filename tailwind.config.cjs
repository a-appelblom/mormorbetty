const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				'primary': 'hsla(46, 100%, 44%, 1)',
				'primary-trans': 'hsla(46, 100%, 44%, 0.6)',
				'secondary': 'hsla(331, 70%, 88%, 1)',
				'secondary-trans': 'hsla(331, 70%, 88%, 0.4)',
				"accent": 'hsla(330, 3%, 12%, 1)',
				'white-trans': 'rgba(255, 255, 255, 0.2)',
			},
		},
	},
	plugins: [],
};

module.exports = config;
