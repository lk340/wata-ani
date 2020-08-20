module.exports = {
	siteMetadata: {
		title: "WataAni",
		description: "Anime reviews made efficient.",
		author: "Loyd Kim",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-typescript",
		"gatsby-plugin-styled-components",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-page-creator",
			options: {
				path: `${__dirname}/src/views/pages`,
			},
		},
		{
			resolve: `gatsby-plugin-react-redux`,
			options: {
				pathToCreateStoreModule: "./src/redux/store",
				// [optional] - options passed to `serialize-javascript`
				// info: https://github.com/yahoo/serialize-javascript#options
				// will be merged with these defaults:
				serialize: {
					space: 0,
					isJSON: true,
					unsafe: false,
				},
				// [optional] - if true will clean up after itself on the client, default:
				cleanupOnClient: true,
				// [optional] - name of key on `window` where serialized state will be stored, default:
				windowKey: "__PRELOADED_STATE__",
			},
		},
	],
};
