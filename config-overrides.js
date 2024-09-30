module.exports = {
    jest: (config) => {
        config.preset = 'ts-jest';
        config.testEnvironment = 'jsdom';
        config.transform = {
            '^.+\\.tsx?$': 'ts-jest',
        };
        config.transformIgnorePatterns = [
            "/node_modules/(?!axios)",
        ];
        config.moduleNameMapper = {
            '\\.(css|scss)$': 'identity-obj-proxy',
            '\\.(jpg|jpeg|png|gif|bmp|svg)$': '<rootDir>/__mocks__/fileMock.js',
        };
        return config;
    },
};
