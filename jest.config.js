module.exports = {
  verbose: true,

  // We use Webpack's `resolve.alias` feature in webpack.config.js. Thus, throughout the code, we
  // have import statements with paths that look like `import Header from 'components/Header'`
  // We have to make Jest understand these paths.
  // Also, by doing the below, we allow Jest to use the same shorthand paths in our test files.
  moduleNameMapper: {
    '^components(.*)': '<rootDir>/src/components$1',
    '^config(.*)': '<rootDir>/src/config$1',
  }
}
