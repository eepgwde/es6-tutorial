## ES6 Tutorial

Demonstrates using ES6 and transpile to ES5 using Babel.

Also demonstrates simple JavaScript application.

Start the tutorial [here](http://ccoenraets.github.io/es6-tutorial).

  344  npm init
  345  npm install babel-cli babel-core --save-dev

Note: warning messages about using fsevents, not available for Linux only Darwin.

  346  npm install babel-preset-es2015 --save-dev
  347  npm install http-server --save-dev
  348  vi package.json 

"scripts": {
    "babel": "babel --presets es2015 js/main.js -o build/main.bundle.js",
    "start": "http-server"
},
  
  357  vi index.html

<script src="build/main.bundle.js"></script>

  358  npm start
