module.exports = {
	plugins: [
		"@babel/plugin-proposal-optional-chaining",
		"@babel/plugin-proposal-class-properties",
	],
	presets: [
		["babel-preset-gatsby", { targets: { browsers: [">0.25%", "not dead"] } }],
		["@babel/preset-env", { targets: { browsers: [">0.25%", "not dead"] } }],
		"@babel/preset-typescript",
		"@babel/preset-react",
	],
};
