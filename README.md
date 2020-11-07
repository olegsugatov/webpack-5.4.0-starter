# webpack-5.4.0-starter

INIT
1. npm init (package json)
2. sudo npm install -g webpack webpack-cli
3. npm install -D webpack webpack-cli


1. + webpack.config.js
2. npm i -D html-webpack-plugin
3. webpack
4. npm i -D clean-webpack-plugin

Loaders
1. npm i -D style-loader css-loader
2. npm i -D file-loader
3. custom fonts (font-face)
4. npm i --save normalize.css
5. npm i -D xml-loader   "main": "main.js" -> "private": "true",
6. npm i -D csv-loader papaparse
7. resolve: {extentions: ['.js', '.json'], alias: {'@': path.resolve(__dirname, 'src')}},
8. npm i -S jquery (split vendors and custom files.js)

9. npm i -D webpack-dev-server // RESOLVE
10. npm i -D mini-css-extract-plugin
11. npm i -D cross-env
12. npm i -D terser-webpack-plugin
13. npm i -D optimize-css-assets-webpack-plugin // RESOLVE

14. npm i -D less less-loader
16. npm i -D sass sass-loader
17. npm i -D babel-loader @babel/core
    npm i -D @babel/preset-env
    npm i -S @babel/polyfill
    npm i -D @babel/plugin-proposal-class-properties
    npm i -D @babel/preset-typescript
    npm i -D @babel/preset-react
    npm i react react-dom

18. npm i -D eslint-webpack-plugin
    npm i -D eslint
    npm i -D babel-eslint

19. npm i lodash

18. npm i -D --save-exact prettier
https://prettier.io/
npx prettier --write .

eslint-loader
npm i -D eslint-webpack-plugin eslint
npm i -D babel-eslint

npm i -D lodash-webpack-plugin babel-plugin-lodash


npm start
npm run build
npx prettier --write .

optimize js, css
настройка dev и prod
modular css, scss
source map для dev режима отображают в браузере построчно
не работает lodash