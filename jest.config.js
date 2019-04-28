module.exports = {
    "collectCoverageFrom": ['src/**/*.{ts,tsx}'],
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "testResultsProcessor": "jest-sonar-reporter",
    "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
}