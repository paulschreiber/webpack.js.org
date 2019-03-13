(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{363:function(n,s,e){"use strict";e.r(s),s.default='<p>Webpack is used to compile JavaScript modules. Once <a href="/guides/installation">installed</a>, you can interface with webpack either from its <a href="/api/cli">CLI</a> or <a href="/api/node">API</a>. If you\'re still new to webpack, please read through the <a href="/concepts">core concepts</a> and <a href="/comparison">this comparison</a> to learn why you might use it over the other tools that are out in the community.</p>\n<h2 id="basic-setup">Basic Setup<a href="#basic-setup" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>First let\'s create a directory, initialize npm, <a href="/guides/installation#local-installation">install webpack locally</a>, and install the webpack-cli (the tool used to run webpack on the command line):</p>\n<pre><code class="hljs language-bash"><span class="token function">mkdir</span> webpack-demo <span class="token operator">&#x26;&#x26;</span> <span class="token function">cd</span> webpack-demo\n<span class="token function">npm</span> init -y\n<span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli --save-dev</code></pre>\n<blockquote class="tip">\n<p>Throughout the Guides we will use <code>diff</code> blocks to show you what changes we\'re making to directories, files, and code.</p>\n</blockquote>\n<p>Now we\'ll create the following directory structure, files and their contents:</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">  webpack-demo\n  |- package.json\n<span class="token inserted">+ |- index.html</span>\n<span class="token inserted">+ |- /src</span>\n<span class="token inserted">+   |- index.js</span></code></pre>\n<p><strong>src/index.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">function</span> <span class="token function">component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// Lodash, currently included via a script, is required for this line to work</span>\n  element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'Hello\'</span><span class="token punctuation">,</span> <span class="token string">\'webpack\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> element<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p><strong>index.html</strong></p>\n<pre><code class="hljs language-html"><span class="token doctype">&#x3C;!doctype html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>title</span><span class="token punctuation">></span></span>Getting Started<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/lodash@4.16.6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>./src/index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>html</span><span class="token punctuation">></span></span></code></pre>\n<p>We also need to adjust our <code>package.json</code> file in order to make sure we mark our package as <code>private</code>, as well as removing the <code>main</code> entry. This is to prevent an accidental publish of your code.</p>\n<blockquote class="tip">\n<p>If you want to learn more about the inner workings of <code>package.json</code>, then we recommend reading the <a href="https://docs.npmjs.com/files/package.json">npm documentation</a>.</p>\n</blockquote>\n<p><strong>package.json</strong></p>\n<pre><code class="hljs language-diff">  {\n    "name": "webpack-demo",\n    "version": "1.0.0",\n    "description": "",\n<span class="token inserted">+   "private": true,</span>\n<span class="token deleted">-   "main": "index.js",</span>\n    "scripts": {\n      "test": "echo \\"Error: no test specified\\" &#x26;&#x26; exit 1"\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC",\n    "devDependencies": {\n      "webpack": "^4.20.2",\n      "webpack-cli": "^3.1.2"\n    },\n    "dependencies": {}\n  }</code></pre>\n<p>In this example, there are implicit dependencies between the <code>&#x3C;script></code> tags. Our <code>index.js</code> file depends on <code>lodash</code> being included in the page before it runs. This is because <code>index.js</code> never explicitly declared a need for <code>lodash</code>; it just assumes that the global variable <code>_</code> exists.</p>\n<p>There are problems with managing JavaScript projects this way:</p>\n<ul>\n<li>It is not immediately apparent that the script depends on an external library.</li>\n<li>If a dependency is missing, or included in the wrong order, the application will not function properly.</li>\n<li>If a dependency is included but not used, the browser will be forced to download unnecessary code.</li>\n</ul>\n<p>Let\'s use webpack to manage these scripts instead.</p>\n<h2 id="creating-a-bundle">Creating a Bundle<a href="#creating-a-bundle" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>First we\'ll tweak our directory structure slightly, separating the "source" code (<code>/src</code>) from our "distribution" code (<code>/dist</code>). The "source" code is the code that we\'ll write and edit. The "distribution" code is the minimized and optimized <code>output</code> of our build process that will eventually be loaded in the browser:</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">  webpack-demo\n  |- package.json\n<span class="token inserted">+ |- /dist</span>\n<span class="token inserted">+   |- index.html</span>\n<span class="token deleted">- |- index.html</span>\n  |- /src\n    |- index.js</code></pre>\n<p>To bundle the <code>lodash</code> dependency with <code>index.js</code>, we\'ll need to install the library locally:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save lodash</code></pre>\n<blockquote class="tip">\n<p>When installing a package that will be bundled into your production bundle, you should use <code>npm install --save</code>. If you\'re installing a package for development purposes (e.g. a linter, testing libraries, etc.) then you should use <code>npm install --save-dev</code>. More information can be found in the <a href="https://docs.npmjs.com/cli/install">npm documentation</a>.</p>\n</blockquote>\n<p>Now, lets import <code>lodash</code> in our script:</p>\n<p><strong>src/index.js</strong></p>\n<pre><code class="hljs language-diff"><span class="token inserted">+ import _ from \'lodash\';</span>\n<span class="token inserted">+</span>\n  function component() {\n    let element = document.createElement(\'div\');\n\n<span class="token deleted">-   // Lodash, currently included via a script, is required for this line to work</span>\n    element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');\n\n    return element;\n  }\n\n  document.body.appendChild(component());</code></pre>\n<p>Now, since we\'ll be bundling our scripts, we have to update our <code>index.html</code> file. Let\'s remove the lodash <code>&#x3C;script></code>, as we now <code>import</code> it, and modify the other <code>&#x3C;script></code> tag to load the bundle, instead of the raw <code>/src</code> file:</p>\n<p><strong>dist/index.html</strong></p>\n<pre><code class="hljs language-diff">  &#x3C;!doctype html>\n  &#x3C;html>\n   &#x3C;head>\n     &#x3C;title>Getting Started&#x3C;/title>\n<span class="token deleted">-    &#x3C;script src="https://unpkg.com/lodash@4.16.6">&#x3C;/script></span>\n   &#x3C;/head>\n   &#x3C;body>\n<span class="token deleted">-    &#x3C;script src="./src/index.js">&#x3C;/script></span>\n<span class="token inserted">+    &#x3C;script src="main.js">&#x3C;/script></span>\n   &#x3C;/body>\n  &#x3C;/html></code></pre>\n<p>In this setup, <code>index.js</code> explicitly requires <code>lodash</code> to be present, and binds it as <code>_</code> (no global scope pollution). By stating what dependencies a module needs, webpack can use this information to build a dependency graph. It then uses the graph to generate an optimized bundle where scripts will be executed in the correct order.</p>\n<p>With that said, let\'s run <code>npx webpack</code>, which will take our script at <code>src/index.js</code> as the <a href="/concepts/entry-points">entry point</a>, and will generate <code>dist/main.js</code> as the <a href="/concepts/output">output</a>. The <code>npx</code> command, which ships with Node 8.2/npm 5.2.0 or higher, runs the webpack binary (<code>./node_modules/.bin/webpack</code>) of the webpack package we installed in the beginning:</p>\n<pre><code class="hljs language-bash">npx webpack\n\n<span class="token punctuation">..</span>.\nBuilt at: 13/06/2018 11:52:07\n  Asset      Size  Chunks             Chunk Names\nmain.js  70.4 KiB       0  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  main\n<span class="token punctuation">..</span>.\n\nWARNING <span class="token keyword">in</span> configuration\nThe <span class="token string">\'mode\'</span> option has not been set, webpack will fallback to <span class="token string">\'production\'</span> <span class="token keyword">for</span> this value. Set <span class="token string">\'mode\'</span> option to <span class="token string">\'development\'</span> or <span class="token string">\'production\'</span> to <span class="token function">enable</span> defaults <span class="token keyword">for</span> each environment.\nYou can also <span class="token keyword">set</span> it to <span class="token string">\'none\'</span> to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/</code></pre>\n<blockquote class="tip">\n<p>Your output may vary a bit, but if the build is successful then you are good to go. Also, don\'t worry about the warning, we\'ll tackle that later.</p>\n</blockquote>\n<p>Open <code>index.html</code> in your browser and, if everything went right, you should see the following text: \'Hello webpack\'.</p>\n<h2 id="modules">Modules<a href="#modules" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"><code>import</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"><code>export</code></a> statements have been standardized in <a href="https://babeljs.io/docs/en/learn/">ES2015</a>. Although they are not supported in most browsers yet, webpack does support them out of the box.</p>\n<p>Behind the scenes, webpack actually "transpiles" the code so that older browsers can also run it. If you inspect <code>dist/main.js</code>, you might be able to see how webpack does this, it\'s quite ingenious! Besides <code>import</code> and <code>export</code>, webpack supports various other module syntaxes as well, see <a href="/api/module-methods">Module API</a> for more information.</p>\n<p>Note that webpack will not alter any code other than <code>import</code> and <code>export</code> statements. If you are using other <a href="http://es6-features.org/">ES2015 features</a>, make sure to <a href="/loaders/#transpiling">use a transpiler</a> such as <a href="https://babeljs.io/">Babel</a> or <a href="https://buble.surge.sh/guide/">Bublé</a> via webpack\'s <a href="/concepts/loaders/">loader system</a>.</p>\n<h2 id="using-a-configuration">Using a Configuration<a href="#using-a-configuration" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>As of version 4, webpack doesn\'t require any configuration, but most projects will need a more complex setup, which is why webpack supports a <a href="/concepts/configuration">configuration file</a>. This is much more efficient than having to manually type in a lot of commands in the terminal, so let\'s create one:</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">  webpack-demo\n  |- package.json\n<span class="token inserted">+ |- webpack.config.js</span>\n  |- /dist\n    |- index.html\n  |- /src\n    |- index.js</code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./src/index.js\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'main.js\'</span><span class="token punctuation">,</span>\n    path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>Now, let\'s run the build again but instead using our new configuration file:</p>\n<pre><code class="hljs language-bash">npx webpack --config webpack.config.js\n\n<span class="token punctuation">..</span>.\n  Asset      Size  Chunks             Chunk Names\nmain.js  70.4 KiB       0  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  main\n<span class="token punctuation">..</span>.\n\nWARNING <span class="token keyword">in</span> configuration\nThe <span class="token string">\'mode\'</span> option has not been set, webpack will fallback to <span class="token string">\'production\'</span> <span class="token keyword">for</span> this value. Set <span class="token string">\'mode\'</span> option to <span class="token string">\'development\'</span> or <span class="token string">\'production\'</span> to <span class="token function">enable</span> defaults <span class="token keyword">for</span> each environment.\nYou can also <span class="token keyword">set</span> it to <span class="token string">\'none\'</span> to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/</code></pre>\n<blockquote class="tip">\n<p>If a <code>webpack.config.js</code> is present, the <code>webpack</code> command picks it up by default. We use the <code>--config</code> option here only to show that you can pass a config of any name. This will be useful for more complex configurations that need to be split into multiple files.</p>\n</blockquote>\n<p>A configuration file allows far more flexibility than simple CLI usage. We can specify loader rules, plugins, resolve options and many other enhancements this way. See the <a href="/configuration">configuration documentation</a> to learn more.</p>\n<h2 id="npm-scripts">NPM Scripts<a href="#npm-scripts" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Given it\'s not particularly fun to run a local copy of webpack from the CLI, we can set up a little shortcut. Let\'s adjust our <em>package.json</em> by adding an <a href="https://docs.npmjs.com/misc/scripts">npm script</a>:</p>\n<p><strong>package.json</strong></p>\n<pre><code class="hljs language-diff">  {\n    "name": "webpack-demo",\n    "version": "1.0.0",\n    "description": "",\n    "scripts": {\n<span class="token deleted">-      "test": "echo \\"Error: no test specified\\" &#x26;&#x26; exit 1" </span>\n<span class="token inserted">+      "test": "echo \\"Error: no test specified\\" &#x26;&#x26; exit 1",</span>\n<span class="token inserted">+      "build": "webpack"</span>\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC",\n    "devDependencies": {\n      "webpack": "^4.20.2",\n      "webpack-cli": "^3.1.2"\n    },\n    "dependencies": {\n      "lodash": "^4.17.5"\n    }\n  }</code></pre>\n<p>Now the <code>npm run build</code> command can be used in place of the <code>npx</code> command we used earlier. Note that within <code>scripts</code> we can reference locally installed npm packages by name the same way we did with <code>npx</code>. This convention is the standard in most npm-based projects because it allows all contributors to use the same set of common scripts (each with flags like <code>--config</code> if necessary).</p>\n<p>Now run the following command and see if your script alias works:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> run build\n\n<span class="token punctuation">..</span>.\n  Asset      Size  Chunks             Chunk Names\nmain.js  70.4 KiB       0  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  main\n<span class="token punctuation">..</span>.\n\nWARNING <span class="token keyword">in</span> configuration\nThe <span class="token string">\'mode\'</span> option has not been set, webpack will fallback to <span class="token string">\'production\'</span> <span class="token keyword">for</span> this value. Set <span class="token string">\'mode\'</span> option to <span class="token string">\'development\'</span> or <span class="token string">\'production\'</span> to <span class="token function">enable</span> defaults <span class="token keyword">for</span> each environment.\nYou can also <span class="token keyword">set</span> it to <span class="token string">\'none\'</span> to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/.</code></pre>\n<blockquote class="tip">\n<p>Custom parameters can be passed to webpack by adding two dashes between the <code>npm run build</code> command and your parameters, e.g. <code>npm run build -- --colors</code>.</p>\n</blockquote>\n<h2 id="conclusion">Conclusion<a href="#conclusion" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Now that you have a basic build together you should move on to the next guide <a href="/guides/asset-management"><code>Asset Management</code></a> to learn how to manage assets like images and fonts with webpack. At this point, your project should look like this:</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">webpack-demo\n|- package.json\n|- webpack.config.js\n|- /dist\n  |- main.js\n  |- index.html\n|- /src\n  |- index.js\n|- /node_modules</code></pre>\n<blockquote class="tip">\n<p>If you\'re using npm 5, you\'ll probably also see a <code>package-lock.json</code> file in your directory.</p>\n</blockquote>\n<p>If you want to learn more about webpack\'s design, you can check out the <a href="/concepts">basic concepts</a> and <a href="/configuration">configuration</a> pages. Furthermore, the <a href="/api">API</a> section digs into the various interfaces webpack offers.</p>\n'}}]);