# ES6 Box

Sandbox for trying out and learning about ECMAScript 6.

Uses [Babel](https://babeljs.io/) and [webpack](http://webpack.github.io/) for transpiling ES6 code to JavaScript 5.1
code that runs in current browsers.

## Intallation

Install webpack and the webpack Babel loader plugin with npm:

    npm install
    
Transpile JavaScript files with webpack:

    webpack
    
Open up [index.html](index.html) in your browser.

## Dev Mode

While fiddling around with ES6 code, run the webpack dev server to have your changes transpiled immediately.

Install globally:

    npm install -g webpack-dev-server
    
Run the server in hot reload mode:

    webpack-dev-server
    
You can then access the server in your browser with this URL:
[http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)