(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{387:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/expose-loader"><img src="https://img.shields.io/npm/v/expose-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org"><img src="https://img.shields.io/node/v/expose-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/expose-loader"><img src="https://david-dm.org/webpack-contrib/expose-loader.svg" alt="deps"></a>\n<a href="https://circleci.com/gh/webpack-contrib/expose-loader"><img src="https://img.shields.io/circleci/project/github/webpack-contrib/expose-loader.svg" alt="tests"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a></p>\n<p>expose loader module for webpack</p>\n<h2 id="requirements">Requirements<a href="#requirements" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>expose-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install expose-loader --save-dev\n</code></pre>\n<p>Then add the loader to your <code>webpack</code> config. For example:</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/.js/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`expose-loader`</span></span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token operator">...</span>options<span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p>And then require the target file in your bundle\'s code:</p>\n<pre><code class="hljs language-js"><span class="token comment">// src/entry.js</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"expose-loader?libraryName!./thing.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>For example, let\'s say you want to expose jQuery as a global called <code>$</code>:</p>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"expose-loader?$!jquery"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Thus, <code>window.$</code> is then available in the browser console.</p>\n<p>Alternately, you can set this in your config file:</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'jquery\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'expose-loader\'</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token string">\'$\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<p>Let\'s say you also want to expose it as <code>window.jQuery</code> in addition to <code>window.$</code>.\nFor multiple expose you can use <code>!</code> in loader string:</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'jquery\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'expose-loader\'</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token string">\'jQuery\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'expose-loader\'</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token string">\'$\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<p>The <a href="https://nodejs.org/api/modules.html#modules_require_resolve_request_options"><code>require.resolve</code></a>\ncall is a Node.js function (unrelated to <code>require.resolve</code> in webpack\nprocessing). <code>require.resolve</code> gives you the\nabsolute path to the module (<code>"/.../app/node_modules/react/react.js"</code>). So the\nexpose only applies to the react module. And it\'s only exposed when used in the\nbundle.</p>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<h4 id="contributing-1"><a href="https://github.com/webpack-contrib/expose-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a><a href="#contributing-1" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h4 id="mit"><a href="https://github.com/webpack-contrib/expose-loader/blob/master/LICENSE">MIT</a><a href="#mit" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n'}}]);