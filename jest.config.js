module.exports = {
    verbose: true,
    coverageThreshold: {
        global: {
            "lines": 80
        }
    },
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ],
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
};