// // config-overrides.js
// module.exports = function override(config, env) {
//     config.resolve.fallback = {
//         "buffer": require.resolve("buffer/"),
//         "stream": require.resolve("stream-browserify"),
//         "assert": require.resolve("assert/")
//     };
//     return config;
// };
// config-overrides.js

// ======================================
// module.exports = function override(config, env) {
//     config.resolve.fallback = {
//         "buffer": require.resolve("buffer/"),
//         "stream": require.resolve("stream-browserify"),
//         "assert": require.resolve("assert/")
//     };

//     // Ignore missing source maps warning
//     config.module.rules.push({
//         test: /\.js$/,
//         use: {
//             loader: 'source-map-loader',
//             options: {
//                 suppressDeprecationWarnings: true,
//             },
//         },
//         enforce: 'pre',
//     });

//     return config;
// };

// ================================

// config-overrides.js
module.exports = function override(config, env) {
    // Resolve fallbacks for node modules
    config.resolve.fallback = {
        "buffer": require.resolve("buffer/"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert/")
    };

    // Find and modify the existing source-map-loader rule
    const sourceMapLoaderIndex = config.module.rules.findIndex(rule => rule.loader && rule.loader.includes('source-map-loader'));

    if (sourceMapLoaderIndex !== -1) {
        // Remove the existing source-map-loader rule
        config.module.rules.splice(sourceMapLoaderIndex, 1);
    }

    // Add a new source-map-loader rule without suppressDeprecationWarnings
    config.module.rules.push({
        test: /\.js$/,
        use: {
            loader: 'source-map-loader',
            options: {
                filterSourceMappingUrl: (source, file) => {
                    // Ignore missing source maps
                    return source.includes('@plotly/mapbox-gl') ? false : true;
                },
            },
        },
        enforce: 'pre',
    });

    return config;
};

