# ES6 Box

Sandbox for trying out and learning about ECMAScript 6.

Uses [Babel](https://babeljs.io/) and [webpack](http://webpack.github.io/) for transpiling ES6 code to JavaScript 5.1
code that runs in current browsers.

Uses [Twitter Bootstrap](http://getbootstrap.com/) and [jQuery](http://jquery.com/) for presenting the demo output and
results.

## Installation

Install webpack and the webpack Babel loader plugin with npm:

    npm install
    
Transpile JavaScript files with webpack:

    webpack
    
Open up one of the ES6 boxes (demos) in your browser:

* [Box 001](boxes/001/index.html)
* [Box 002](boxes/002/index.html)
* [Box 003](boxes/003/index.html)
* [Box 004](boxes/004/index.html)
* [Box 005](boxes/005/index.html)
* [Box 006](boxes/006/index.html)

## Dev Mode

While fiddling around with ES6 code, run the webpack dev server to have your changes transpiled immediately.

Install globally:

    npm install -g webpack-dev-server
    
Run the server in hot reload mode:

    webpack-dev-server
    
You can then access the server in your browser with this URL:
[http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)

## Jasmine Tests

Some of the boxes feature ES6 Jasmine tests. If you use an IntelliJ IDE (i.e. Webstorm, IDEA, etc.), you can run these
using [wallaby.js](http://wallabyjs.com/).
