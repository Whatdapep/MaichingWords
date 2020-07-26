const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
// const postcssPurgecss = require(`@fullhuman/postcss-purgecss`);
const purgecss = require("@fullhuman/postcss-purgecss");


// const purgecss = postcssPurgecss({ // Specify the paths to aPostCSSll of the template files in your project.
//     content: ['./public/**/*.html', './src/**/*.vue', ],
//     // Include any special characters you're using in this regular expression.
//     // See: https://tailwindcss.com/docs/controlling-file-size/#understanding-the-regex
//     defaultExtractor: content => content.match(/[\w-/:](?<!:)/g) || [],
//     // Whitelist auto generated classes for transitions and router links.
//     // From: https://github.com/ky-is/vue-cli-plugin-tailwind
//     whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).-move$/, /^router-link(|-exact)-active$/],

// });
module.exports = {
    plugins: [
        // tailwindcss("./tailwind.js"),
        // // tailwindcss,
        // autoprefixer({
        //     add: true,
        //     grid: true
        // }),
        // // process.env.NODE_ENV === 'production' ? [purgecss] : [],
        // process.env.NODE_ENV === "production" ? purgecss({
        //     content: [
        //         "./src/**/*.html",
        //         "./src/**/*.vue"
        //     ]
        // }) : ""
        tailwindcss,
        autoprefixer,
        //Only add purgecss in production
        process.env.NODE_ENV === "production" ? purgecss({
            content: [
                "./src/**/*.html",
                "./src/**/*.vue"
            ]
        }) : ""
    ]
};