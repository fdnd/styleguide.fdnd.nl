// vite.config.js
import postcssNesting from 'postcss-nesting'
import postcssVariables from 'postcss-css-variables'
import { resolve } from 'path'

export default {
  // config options
  root: 'src/',
  // base: 'https://styleguide.fdnd.nl/',
  css: {
    postcss: {
      plugins: [postcssNesting, postcssVariables],
    },
    devSourcemap: true,
  },
  build: {
    // output dir is docs because we host gh-pages from it
    outDir: '../docs',
    rollupOptions: {
      input: {
        // Make sure to mention all .html files
        citations: resolve(__dirname, 'src/citations.html'),
        colors: resolve(__dirname, 'src/colors.html'),
        forms: resolve(__dirname, 'src/forms.html'),
        images: resolve(__dirname, 'src/images.html'),
        index: resolve(__dirname, 'src/index.html'),
        layout: resolve(__dirname, 'src/layout.html'),
        type: resolve(__dirname, 'src/type.html'),
      },
      output: {
        // No hashing on filenames, last build is always fdnd.latest.css
        assetFileNames: '[name].latest.[ext]',
      },
    },
  },
}
