## ES6 Tutorial

Demonstrates using ES6 and transpile to ES5 using Babel.

I've updated this to use the latest babel [7.3.0](https://babeljs.io/docs/en/usage)

Also demonstrates simple JavaScript application.

The original is [here](http://ccoenraets.github.io/es6-tutorial).

## Version issues

I switched over to use [yarn](https://yarnpkg.com/en/)

Added yarn (a Debian install). It's a better package manager, but doesn't run

    yarn init

    yarn add @babel/core @babel/preset-env @babel/preset-react --dev
    yarn add @babel/cli --dev

    yarn add http-server

The babel-preset is now a configuration file

    babel.config.js
 
and the presets are in a .babelrc file

You need to change how babel is invoked. 

    npx babel src --out-dir build
 
And this is the "scripts:babel" : babel src --out-dir build

    npm run babel

For webpack

    yarn add babel-loader@8 --save-dev
    yarn add webpack --save-dev
 
And use the new webpack.config.js style. There is a generator for these files [here](https://generatewebpackconfig.netlify.com/)

    npm run webpack
    
will do the right thing.
