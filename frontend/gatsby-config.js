module.exports = {
	siteMetadata: {
		title: `Gatsby TypeScript Starter`,
		description: `A quick Gatsby TypeScript starter.`,
		author: `Loyd Kim`,
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-page-creator`,
			options: {
				path: `${__dirname}/src/views/pages`,
			},
		},
	],
};
