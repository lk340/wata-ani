const path = require("path");

module.exports = {
	collectCoverage: false,
	coverageReporters: ["lcov", "text", "html"],
	globals: {
		__PATH_PREFIX__: ``,
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	moduleNameMapper: {
		"\\.svg": `<rootDir>/jest-configs/__mocks__/svgTransform.js`,
		"typeface-*": "identity-obj-proxy",
		".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
		".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/jest-configs/__mocks__/file-mocks.js`,
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	// setupFilesAfterEnv: [path.resolve(__dirname, "./jest-configs/setup-test-env.js")],
	setupFilesAfterEnv: ["<rootDir>/jest-configs/setup-test-env.js"],
	testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
	// testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
	transform: {
		"^.+\\.(tsx?|jsx?)$": "ts-jest",
		// "^.+\\.tsx?$": "ts-jest",
		"\\.svg": "<rootDir>/jest-configs/__mocks__/svgTransform.js",
		"^.+\\.(tsx?|jsx?)$": `<rootDir>/jest-configs/jest-preprocess.js`,
	},
	transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
};
