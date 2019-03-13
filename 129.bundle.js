(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{423:function(e,n,a){"use strict";a.r(n),n.default='<p>A Webpack Plugin for <a href="https://github.com/babel/minify">babel-minify</a> - A babel based minifier</p>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> babel-minify-webpack-plugin --save-dev</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token keyword">const</span> MinifyPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"babel-minify-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token comment">//...,</span>\n  output<span class="token punctuation">:</span> <span class="token comment">//...,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">MinifyPlugin</span><span class="token punctuation">(</span>minifyOpts<span class="token punctuation">,</span> pluginOpts<span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h4 id="minifyopts">minifyOpts<a href="#minifyopts" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><code>minifyOpts</code> are passed on to babel-preset-minify. You can find a list of <a href="https://github.com/babel/minify/tree/master/packages/babel-preset-minify#options">all available options</a> in the package directory.</p>\n<p><code>Default: {}</code></p>\n<h4 id="pluginopts">pluginOpts<a href="#pluginopts" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li><code>test</code>: Test to match files against. Default: <code>/\\.js($|\\?)/i</code></li>\n<li><code>include</code>: Files to <code>include</code>. Default: <code>undefined</code></li>\n<li><code>exclude</code>: Files to <code>exclude</code>. Default: <code>undefined</code></li>\n<li><code>comments</code>: Preserve Comments. Default: <code>/^\\**!|@preserve|@license|@cc_on/</code>, falsy value to remove all comments. Accepts function, object with property test (regex), and values.</li>\n<li><code>sourceMap</code>: Configure a sourcemap style. Default: <a href="/configuration/devtool/">webpackConfig.devtool</a></li>\n<li><code>parserOpts</code>: Configure babel with special parser options.</li>\n<li><code>babel</code>: Pass in a custom <code>babel-core</code> instead. Default: <code>require("babel-core")</code></li>\n<li><code>minifyPreset</code>: Pass in a custom <code>babel-minify</code> preset instead. Default: <code>require("babel-preset-minify")</code></li>\n</ul>\n<h2 id="why">Why<a href="#why" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>You can also use <a href="https://github.com/babel/babel-loader">babel-loader</a> for webpack and include <code>minify</code> <a href="https://github.com/babel/minify#babel-preset">as a preset</a> and should be much faster than using this - as babel-minify will operate on smaller file sizes. But then, why does this plugin exist at all? -</p>\n<ul>\n<li>A webpack loader operates on single files and the minify preset as a webpack loader is going to consider each file to be executed directly in the browser global scope (by default) and will not optimize some things in the toplevel scope. To enable optimizations to take place in the top level scope of the file, use <code>mangle: { topLevel: true }</code> in minifyOptions.</li>\n<li>When you exclude <code>node_modules</code> from being run through the babel-loader, babel-minify optimizations are not applied to the excluded files as it doesn\'t pass through the minifier.</li>\n<li>When you use the babel-loader with webpack, the code generated by webpack for the module system doesn\'t go through the loader and is not optimized by babel-minify.</li>\n<li>A webpack plugin can operate on the entire chunk/bundle output and can optimize the whole bundle and you can see some differences in minified output. But this will be a lot slower as the file size is usually really huge. So there is <a href="https://github.com/webpack-contrib/babel-minify-webpack-plugin/issues/8">another idea</a> where we can apply some optimizations as a part of the loader and some optimizations in a plugin.</li>\n</ul>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars2.githubusercontent.com/u/294474?v=3&s=150">\n        </br>\n        <a href="https://github.com/boopathi">Boopathi Rajaa</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/166921?v=3&s=150">\n        </br>\n        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">\n        </br>\n        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/533616?v=3&s=150">\n        </br>\n        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">\n        </br>\n        <a href="https://github.com/TheLarkInn">Sean Larkin</a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n'}}]);