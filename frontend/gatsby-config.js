module.exports = {
	siteMetadata: {
		title: "My Personal Gatsby TypeScript Starter",
		description: "A quick Gatsby TypeScript starter created by me for me.",
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
