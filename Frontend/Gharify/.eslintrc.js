module.exports = {
  root: true,
  parser: "babel/eslint-parser",
  extends: '@react-native',
  parserOptions: {
    requireConfigFile: false,
    sourceType: "module",
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
};
