module.exports = {
	plugins: ["@babel/plugin-proposal-optional-chaining"],
	presets: [
		["babel-preset-gatsby", { targets: { browsers: [">0.25%", "not dead"] } }],
		["@babel/preset-env", { targets: { browsers: [">0.25%", "not dead"] } }],
		"@babel/preset-typescript",
		"@babel/preset-react",
	],
	env: {
		test: {
			presets: [
				["babel-preset-gatsby", { targets: { browsers: [">0.25%", "not dead"] } }],
				["@babel/preset-env", { targets: { node: "current" } }],
				"@babel/preset-typescript",
				"@babel/preset-react",
			],
		},
	},
};
