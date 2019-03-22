module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testURL: "http://localhost/",
    testRegex: "(/test/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    testPathIgnorePatterns: ["/lib/", "/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleDirectories: ["node_modules", "src"],
    // collectCoverage: true,
    // mapCoverage: true,
};
