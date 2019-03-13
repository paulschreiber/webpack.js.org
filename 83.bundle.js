(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{377:function(n,s,a){"use strict";a.r(s),s.default='<p>This package allows transpiling JavaScript files using <a href="https://github.com/babel/babel">Babel</a> and <a href="https://github.com/webpack/webpack">webpack</a>.</p>\n<p><strong>Note</strong>: Issues with the output should be reported on the Babel <a href="https://github.com/babel/babel/issues">Issues</a> tracker.</p>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<blockquote>\n<p>webpack 4.x | babel-loader 8.x | babel 7.x</p>\n</blockquote>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> -D babel-loader @babel/core @babel/preset-env webpack</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>webpack documentation: <a href="/loaders/">Loaders</a></p>\n<p>Within your webpack configuration object, you\'ll need to add the babel-loader to the list of modules, like so:</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.m?js$/</span><span class="token punctuation">,</span>\n      exclude<span class="token punctuation">:</span> <span class="token regex">/(node_modules|bower_components)/</span><span class="token punctuation">,</span>\n      use<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          presets<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'@babel/preset-env\'</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>See the <code>babel</code> <a href="https://babeljs.io/docs/en/options">options</a>.</p>\n<p>You can pass options to the loader by using the <a href="/configuration/module/#rule-options-rule-query"><code>options</code></a> property:</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.m?js$/</span><span class="token punctuation">,</span>\n      exclude<span class="token punctuation">:</span> <span class="token regex">/(node_modules|bower_components)/</span><span class="token punctuation">,</span>\n      use<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          presets<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'@babel/preset-env\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'@babel/plugin-proposal-object-rest-spread\'</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<p>This loader also supports the following loader-specific option:</p>\n<ul>\n<li>\n<p><code>cacheDirectory</code>: Default <code>false</code>. When set, the given directory will be used to cache the results of the loader. Future webpack builds will attempt to read from the cache to avoid needing to run the potentially expensive Babel recompilation process on each run. If the value is blank (<code>loader: \'babel-loader?cacheDirectory\'</code>) or <code>true</code> (<code>loader: \'babel-loader?cacheDirectory=true\'</code>), the loader will use the default cache directory in <code>node_modules/.cache/babel-loader</code> or fallback to the default OS temporary file directory if no <code>node_modules</code> folder could be found in any root directory.</p>\n</li>\n<li>\n<p><code>cacheIdentifier</code>: Default is a string composed by the <code>@babel/core</code>\'s version, the <code>babel-loader</code>\'s version, the contents of <code>.babelrc</code> file if it exists, and the value of the environment variable <code>BABEL_ENV</code> with a fallback to the <code>NODE_ENV</code> environment variable. This can be set to a custom value to force cache busting if the identifier changes.</p>\n</li>\n<li>\n<p><code>cacheCompression</code>: Default <code>true</code>. When set, each Babel transform output will be compressed with Gzip. If you want to opt-out of cache compression, set it to <code>false</code> -- your project may benefit from this if it transpiles thousands of files.</p>\n</li>\n<li>\n<p><code>customize</code>: Default <code>null</code>. The path of a module that exports a <code>custom</code> callback <a href="#customized-loader">like the one that you\'d pass to <code>.custom()</code></a>. Since you already have to make a new file to use this, it is recommended that you instead use <code>.custom</code> to create a wrapper loader. Only use this is you <em>must</em> continue using <code>babel-loader</code> directly, but still want to customize.</p>\n</li>\n</ul>\n<h2 id="troubleshooting">Troubleshooting<a href="#troubleshooting" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="babel-loader-is-slow">babel-loader is slow!<a href="#babel-loader-is-slow" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Make sure you are transforming as few files as possible. Because you are probably matching <code>/\\.m?js$/</code>, you might be transforming the <code>node_modules</code> folder or other unwanted source.</p>\n<p>To exclude <code>node_modules</code>, see the <code>exclude</code> option in the <code>loaders</code> config as documented above.</p>\n<p>You can also speed up babel-loader by as much as 2x by using the <code>cacheDirectory</code> option. This will cache transformations to the filesystem.</p>\n<h3 id="babel-is-injecting-helpers-into-each-file-and-bloating-my-code">Babel is injecting helpers into each file and bloating my code!<a href="#babel-is-injecting-helpers-into-each-file-and-bloating-my-code" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Babel uses very small helpers for common functions such as <code>_extend</code>. By default, this will be added to every file that requires it.</p>\n<p>You can instead require the Babel runtime as a separate module to avoid the duplication.</p>\n<p>The following configuration disables automatic per-file runtime injection in Babel, requiring <code>@babel/plugin-transform-runtime</code> instead and making all helper references use it.</p>\n<p>See the <a href="https://babeljs.io/docs/plugins/transform-runtime/">docs</a> for more information.</p>\n<p><strong>NOTE</strong>: You must run <code>npm install -D @babel/plugin-transform-runtime</code> to include this in your project and <code>@babel/runtime</code> itself as a dependency with <code>npm install @babel/runtime</code>.</p>\n<pre><code class="hljs language-javascript">rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token comment">// the \'transform-runtime\' plugin tells Babel to</span>\n  <span class="token comment">// require the runtime instead of inlining it.</span>\n  <span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token regex">/\\.m?js$/</span><span class="token punctuation">,</span>\n    exclude<span class="token punctuation">:</span> <span class="token regex">/(node_modules|bower_components)/</span><span class="token punctuation">,</span>\n    use<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        presets<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'@babel/preset-env\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'@babel/plugin-transform-runtime\'</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span></code></pre>\n<h4 id="note-transform-runtime--custom-polyfills-eg-promise-library"><strong>NOTE</strong>: transform-runtime &#x26; custom polyfills (e.g. Promise library)<a href="#note-transform-runtime--custom-polyfills-eg-promise-library" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Since <a href="https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime">@babel/plugin-transform-runtime</a> includes a polyfill that includes a custom <a href="https://github.com/facebook/regenerator/blob/master/packages/regenerator-runtime/runtime.js">regenerator-runtime</a> and <a href="https://github.com/zloirock/core-js">core-js</a>, the following usual shimming method using <code>webpack.ProvidePlugin</code> will not work:</p>\n<pre><code class="hljs language-javascript"><span class="token comment">// ...</span>\n        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProvidePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token string">\'Promise\'</span><span class="token punctuation">:</span> <span class="token string">\'bluebird\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token comment">// ...</span></code></pre>\n<p>The following approach will not work either:</p>\n<pre><code class="hljs language-javascript"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@babel/runtime/core-js/promise\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bluebird\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">;</span></code></pre>\n<p>which outputs to (using <code>runtime</code>):</p>\n<pre><code class="hljs language-javascript"><span class="token string">\'use strict\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> _Promise <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@babel/runtime/core-js/promise\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">\'default\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@babel/runtime/core-js/promise\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">\'default\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bluebird\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">_Promise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>The previous <code>Promise</code> library is referenced and used before it is overridden.</p>\n<p>One approach is to have a "bootstrap" step in your application that would first override the default globals before your application:</p>\n<pre><code class="hljs language-javascript"><span class="token comment">// bootstrap.js</span>\n\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@babel/runtime/core-js/promise\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bluebird\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ...</span>\n\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./app\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="the-nodejs-api-for-babel-has-been-moved-to-babel-core">The Node.js API for <code>babel</code> has been moved to <code>babel-core</code>.<a href="#the-nodejs-api-for-babel-has-been-moved-to-babel-core" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>If you receive this message, it means that you have the npm package <code>babel</code> installed and are using the short notation of the loader in the webpack config (which is not valid anymore as of webpack 2.x):</p>\n<pre><code class="hljs language-javascript">  <span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token regex">/\\.m?js$/</span><span class="token punctuation">,</span>\n    loader<span class="token punctuation">:</span> <span class="token string">\'babel\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span></code></pre>\n<p>webpack then tries to load the <code>babel</code> package instead of the <code>babel-loader</code>.</p>\n<p>To fix this, you should uninstall the npm package <code>babel</code>, as it is deprecated in Babel v6. (Instead, install <code>@babel/cli</code> or <code>@babel/core</code>.)\nIn the case one of your dependencies is installing <code>babel</code> and you cannot uninstall it yourself, use the complete name of the loader in the webpack config:</p>\n<pre><code class="hljs language-javascript">  <span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token regex">/\\.m?js$/</span><span class="token punctuation">,</span>\n    loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span></code></pre>\n<h2 id="customized-loader">Customized Loader<a href="#customized-loader" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>babel-loader</code> exposes a loader-builder utility that allows users to add custom handling\nof Babel\'s configuration for each file that it processes.</p>\n<p><code>.custom</code> accepts a callback that will be called with the loader\'s instance of\n<code>babel</code> so that tooling can ensure that it using exactly the same <code>@babel/core</code>\ninstance as the loader itself.</p>\n<p>In cases where you want to customize without actually having a file to call <code>.custom</code>, you\nmay also pass the <code>customize</code> option with a string pointing at a file that exports\nyour <code>custom</code> callback function.</p>\n<h3 id="example">Example<a href="#example" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-js"><span class="token comment">// Export from "./my-custom-loader.js" or whatever you want.</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"babel-loader"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">custom</span><span class="token punctuation">(</span>babel <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token function">myPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      visitor<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Passed the loader options.</span>\n    <span class="token function">customOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span> opt1<span class="token punctuation">,</span> opt2<span class="token punctuation">,</span> <span class="token operator">...</span>loader <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Pull out any custom options that the loader might have.</span>\n        custom<span class="token punctuation">:</span> <span class="token punctuation">{</span> opt1<span class="token punctuation">,</span> opt2 <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// Pass the options back with the two custom options removed.</span>\n        loader<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Passed Babel\'s \'PartialConfig\' object.</span>\n    <span class="token function">config</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>cfg<span class="token punctuation">.</span><span class="token function">hasFilesystemConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Use the normal config</span>\n        <span class="token keyword">return</span> cfg<span class="token punctuation">.</span>options<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>cfg<span class="token punctuation">.</span>options<span class="token punctuation">,</span>\n        plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token operator">...</span><span class="token punctuation">(</span>cfg<span class="token punctuation">.</span>options<span class="token punctuation">.</span>plugins <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n          <span class="token comment">// Include a custom plugin in the options.</span>\n          myPlugin<span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token function">result</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>result<span class="token punctuation">,</span>\n        code<span class="token punctuation">:</span> result<span class="token punctuation">.</span>code <span class="token operator">+</span> <span class="token string">"\\n// Generated by some custom loader"</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-js"><span class="token comment">// And in your Webpack config</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ..</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      <span class="token comment">// ...</span>\n      loader<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'my-custom-loader.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token comment">// ...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="customoptionsoptions-object--custom-object-loader-object-"><code>customOptions(options: Object): { custom: Object, loader: Object }</code><a href="#customoptionsoptions-object--custom-object-loader-object-" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Given the loader\'s options, split custom options out of <code>babel-loader</code>\'s\noptions.</p>\n<h3 id="configcfg-partialconfig-object"><code>config(cfg: PartialConfig): Object</code><a href="#configcfg-partialconfig-object" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Given Babel\'s <code>PartialConfig</code> object, return the <code>options</code> object that should\nbe passed to <code>babel.transform</code>.</p>\n<h3 id="resultresult-result-result"><code>result(result: Result): Result</code><a href="#resultresult-result-result" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Given Babel\'s result object, allow loaders to make additional tweaks to it.</p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://couto.mit-license.org/">MIT</a></p>\n'}}]);