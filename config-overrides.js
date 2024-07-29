const path = require('path');
const {override} = require("customize-cra");
require('dotenv').config();

module.exports = override(
    config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@src': path.resolve(__dirname, 'src'),
            '@base': path.resolve(__dirname, ''),
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@languages': path.resolve(__dirname, 'src/languages'),
        };

        return config;
    }
);
