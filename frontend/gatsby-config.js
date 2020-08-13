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
	],
};
