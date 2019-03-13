(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{326:function(e,o,a){"use strict";a.r(o),o.default='<p>To understand why you should use webpack let\'s recap how we used JavaScript on the web before bundlers were a thing.</p>\n<p>There are two ways to run JavaScript in a browser. First, include a script for each functionality; this solution is hard to scale because loading too many scripts can cause a network bottleneck. The second option is to use a big <code>.js</code> file containing all your project code, but this leads to problems in scope, size, readability and maintainability.</p>\n<h2 id="iifes---immediately-invoked-function-expressions">IIFE\'s - Immediately invoked function expressions<a href="#iifes---immediately-invoked-function-expressions" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>IIFEs solve scoping issues for large projects; when script files are wrapped by an IIFE, you can safely concatenate or safely combine files without worrying about scope collision. </p>\n<p>This lead to tools like Make, Gulp, Grunt, Broccoli or Brunch. These tools are known as task runners and they concatenate all your project files together.</p>\n<p>However, changing one file means you have to rebuild the whole thing. Concatenating makes it easy to reuse scripts across files but makes build optimizations more difficult. How can you find out if code is actually being used or not?</p>\n<p>Even if you only use a single function from lodash, you have to add the entire library and then squish it together. How do you treeshake the dependencies on your code? Lazy loading chunks of code can be hard to do at scale and requires a lot of manual work from the developer.</p>\n<h2 id="birth-of-javascript-modules-happened-thanks-to-nodejs">Birth of JavaScript Modules happened thanks to Node.js<a href="#birth-of-javascript-modules-happened-thanks-to-nodejs" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>webpack runs on Node.js, a JavaScript runtime that can be used in computers and servers outside a browser environment.</p>\n<p>When Node.js was released a new era started, and it came with new challenges. Now that JavaScript is not running in a browser, how are Node applications supposed to load new chunks of code? There are no html files and script tags that can be added to it.</p>\n<p>CommonJS came out and introduced <code>require</code>, which allows you to load and use a module in the current file. This solved scope issues out of the box by importing each module that we need.</p>\n<h2 id="npm--nodejs--modules----mass-distribution">npm + Node.js + modules -- mass distribution<a href="#npm--nodejs--modules----mass-distribution" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>JavaScript is taking over the world as a language, as a platform and as a way to rapidly develop and create fast applications. </p>\n<p>But there is no browser support for CommonJS. There are no <a href="https://medium.com/webpack/the-state-of-javascript-modules-4636d1774358">live bindings</a>. There are problems with circular references. Sync module resolution loader is slow. While CommonJS was a great solution for Node.js projects, browsers didn\'t support modules. Bundlers and tools like Browserify, RequireJS and SystemJS were created, allowing us to write CommonJS modules that run in a browser.</p>\n<h2 id="esm---ecmascript-modules">ESM - ECMAScript Modules<a href="#esm---ecmascript-modules" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The good news for web projects is that modules are becoming an official feature in ECMAScript standard. However, browser support is incomplete and bundling is still faster and currently recommended over these early module implementations.</p>\n<h2 id="wouldnt-it-be-nice">Wouldn\'t it be nice…<a href="#wouldnt-it-be-nice" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>...to have something that will not only let us write modules but also support any module format (at least until we get to ESM) and that can handle resources and assets at the same time?</p>\n<p>This is why webpack exists. It\'s a tool that lets you bundle your JavaScript applications (supporting both ESM and CommonJS) and it can be extended to support many different assets such as images, fonts and stylesheets.</p>\n<p>webpack cares about performance and load times; it\'s always improving or adding new features, such as async chunk loading and prefetching, to deliver the best possible experience for your project and your users.</p>\n'}}]);