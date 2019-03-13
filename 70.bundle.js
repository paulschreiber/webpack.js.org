(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{364:function(n,e,s){"use strict";s.r(e),e.default='<blockquote class="tip">\n<p>This guide extends on code examples found in the <a href="/guides/development">Development</a> guide.</p>\n</blockquote>\n<p>Hot Module Replacement (or HMR) is one of the most useful features offered by webpack. It allows all kinds of modules to be updated at runtime without the need for a full refresh. This page focuses on <strong>implementation</strong> while the <a href="/concepts/hot-module-replacement">concepts page</a> gives more details on how it works and why it\'s useful.</p>\n<blockquote class="warning">\n<p><strong>HMR</strong> is not intended for use in production, meaning it should only be used in development. See the <a href="/guides/production">building for production guide</a> for more information.</p>\n</blockquote>\n<h2 id="enabling-hmr">Enabling HMR<a href="#enabling-hmr" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This feature is great for productivity. All we need to do is update our <a href="https://github.com/webpack/webpack-dev-server">webpack-dev-server</a> configuration, and use webpack\'s built in HMR plugin. We\'ll also remove the entry point for <code>print.js</code> as it will now be consumed by the <code>index.js</code> module.</p>\n<blockquote class="tip">\n<p>If you took the route of using <code>webpack-dev-middleware</code> instead of <code>webpack-dev-server</code>, please use the <a href="https://github.com/webpack-contrib/webpack-hot-middleware"><code>webpack-hot-middleware</code></a> package to enable HMR on your custom server or application.</p>\n</blockquote>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">  const path = require(\'path\');\n  const HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n  const CleanWebpackPlugin = require(\'clean-webpack-plugin\');\n<span class="token inserted">+ const webpack = require(\'webpack\');</span>\n\n  module.exports = {\n    entry: {\n<span class="token deleted">-      app: \'./src/index.js\',</span>\n<span class="token deleted">-      print: \'./src/print.js\'</span>\n<span class="token inserted">+      app: \'./src/index.js\'</span>\n    },\n    devtool: \'inline-source-map\',\n    devServer: {\n      contentBase: \'./dist\',\n<span class="token inserted">+     hot: true</span>\n    },\n    plugins: [\n      new CleanWebpackPlugin([\'dist\']),\n      new HtmlWebpackPlugin({\n        title: \'Hot Module Replacement\'\n      }),\n<span class="token inserted">+     new webpack.HotModuleReplacementPlugin()</span>\n    ],\n    output: {\n      filename: \'[name].bundle.js\',\n      path: path.resolve(__dirname, \'dist\')\n    }\n  };</code></pre>\n<blockquote class="tip">\n<p>You can use the CLI to modify the <a href="https://github.com/webpack/webpack-dev-server">webpack-dev-server</a> configuration with the following command: <code>webpack-dev-server --hotOnly</code>.</p>\n</blockquote>\n<p>Now let\'s update the <code>index.js</code> file so that when a change inside <code>print.js</code> is detected we tell webpack to accept the updated module.</p>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-diff">  import _ from \'lodash\';\n  import printMe from \'./print.js\';\n\n  function component() {\n    var element = document.createElement(\'div\');\n    var btn = document.createElement(\'button\');\n\n    element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');\n\n    btn.innerHTML = \'Click me and check the console!\';\n    btn.onclick = printMe;\n\n    element.appendChild(btn);\n\n    return element;\n  }\n\n  document.body.appendChild(component());\n<span class="token inserted">+</span>\n<span class="token inserted">+ if (module.hot) {</span>\n<span class="token inserted">+   module.hot.accept(\'./print.js\', function() {</span>\n<span class="token inserted">+     console.log(\'Accepting the updated printMe module!\');</span>\n<span class="token inserted">+     printMe();</span>\n<span class="token inserted">+   })</span>\n<span class="token inserted">+ }</span></code></pre>\n<p>Start changing the <code>console.log</code> statement in <code>print.js</code>, and you should see the following output in the browser console (don\'t worry about that <code>button.onclick = printMe</code> output for now, we will also update that part later).</p>\n<p><strong>print.js</strong></p>\n<pre><code class="hljs language-diff">  export default function printMe() {\n<span class="token deleted">-   console.log(\'I get called from print.js!\');</span>\n<span class="token inserted">+   console.log(\'Updating print.js...\')</span>\n  }</code></pre>\n<p><strong>console</strong></p>\n<pre><code class="hljs language-diff">[HMR] Waiting for update signal from WDS...\nmain.js:4395 [WDS] Hot Module Replacement enabled.\n<span class="token inserted">+ 2main.js:4395 [WDS] App updated. Recompiling...</span>\n<span class="token inserted">+ main.js:4395 [WDS] App hot update...</span>\n<span class="token inserted">+ main.js:4330 [HMR] Checking for updates on the server...</span>\n<span class="token inserted">+ main.js:10024 Accepting the updated printMe module!</span>\n<span class="token inserted">+ 0.4b8ee77….hot-update.js:10 Updating print.js...</span>\n<span class="token inserted">+ main.js:4330 [HMR] Updated modules:</span>\n<span class="token inserted">+ main.js:4330 [HMR]  - 20</span></code></pre>\n<h2 id="via-the-nodejs-api">Via the Node.js API<a href="#via-the-nodejs-api" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>When using Webpack Dev Server with the Node.js API, don\'t put the dev server options on the webpack config object. Instead, pass them as a second parameter upon creation. For example:</p>\n<p><code>new WebpackDevServer(compiler, options)</code></p>\n<p>To enable HMR, you also need to modify your webpack configuration object to include the HMR entry points. The <code>webpack-dev-server</code> package includes a method called <code>addDevServerEntrypoints</code> which you can use to do this. Here\'s a small example of how that might look:</p>\n<p><strong>dev-server.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> webpackDevServer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack-dev-server\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./webpack.config.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>\n  contentBase<span class="token punctuation">:</span> <span class="token string">\'./dist\'</span><span class="token punctuation">,</span>\n  hot<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  host<span class="token punctuation">:</span> <span class="token string">\'localhost\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nwebpackDevServer<span class="token punctuation">.</span><span class="token function">addDevServerEntrypoints</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">webpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">webpackDevServer</span><span class="token punctuation">(</span>compiler<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">,</span> <span class="token string">\'localhost\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'dev server listening on port 5000\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="tip">\n<p>If you\'re <a href="/guides/development#using-webpack-dev-middleware">using <code>webpack-dev-middleware</code></a>, check out the <a href="https://github.com/webpack-contrib/webpack-hot-middleware"><code>webpack-hot-middleware</code></a> package to enable HMR on your custom dev server.</p>\n</blockquote>\n<h2 id="gotchas">Gotchas<a href="#gotchas" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Hot Module Replacement can be tricky. To show this, let\'s go back to our working example. If you go ahead and click the button on the example page, you will realize the console is printing the old <code>printMe</code> function.</p>\n<p>This is happening because the button\'s <code>onclick</code> event handler is still bound to the original <code>printMe</code> function.</p>\n<p>To make this work with HMR we need to update that binding to the new <code>printMe</code> function using <code>module.hot.accept</code>:</p>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-diff">  import _ from \'lodash\';\n  import printMe from \'./print.js\';\n\n  function component() {\n    var element = document.createElement(\'div\');\n    var btn = document.createElement(\'button\');\n\n    element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');\n\n    btn.innerHTML = \'Click me and check the console!\';\n    btn.onclick = printMe;  // onclick event is bind to the original printMe function\n\n    element.appendChild(btn);\n\n    return element;\n  }\n\n<span class="token deleted">- document.body.appendChild(component());</span>\n<span class="token inserted">+ let element = component(); // Store the element to re-render on print.js changes</span>\n<span class="token inserted">+ document.body.appendChild(element);</span>\n\n  if (module.hot) {\n    module.hot.accept(\'./print.js\', function() {\n      console.log(\'Accepting the updated printMe module!\');\n<span class="token deleted">-     printMe();</span>\n<span class="token inserted">+     document.body.removeChild(element);</span>\n<span class="token inserted">+     element = component(); // Re-render the "component" to update the click handler</span>\n<span class="token inserted">+     document.body.appendChild(element);</span>\n    })\n  }</code></pre>\n<p>This is just one example, but there are many others that can easily trip people up. Luckily, there are a lot of loaders out there (some of which are mentioned below) that will make hot module replacement much easier.</p>\n<h2 id="hmr-with-stylesheets">HMR with Stylesheets<a href="#hmr-with-stylesheets" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Hot Module Replacement with CSS is actually fairly straightforward with the help of the <code>style-loader</code>. This loader uses <code>module.hot.accept</code> behind the scenes to patch <code>&#x3C;style></code> tags when CSS dependencies are updated.</p>\n<p>First let\'s install both loaders with the following command:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev style-loader css-loader</code></pre>\n<p>Now let\'s update the configuration file to make use of the loader.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">  const path = require(\'path\');\n  const HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n  const CleanWebpackPlugin = require(\'clean-webpack-plugin\');\n  const webpack = require(\'webpack\');\n\n  module.exports = {\n    entry: {\n      app: \'./src/index.js\'\n    },\n    devtool: \'inline-source-map\',\n    devServer: {\n      contentBase: \'./dist\',\n      hot: true\n    },\n<span class="token inserted">+   module: {</span>\n<span class="token inserted">+     rules: [</span>\n<span class="token inserted">+       {</span>\n<span class="token inserted">+         test: /\\.css$/,</span>\n<span class="token inserted">+         use: [\'style-loader\', \'css-loader\']</span>\n<span class="token inserted">+       }</span>\n<span class="token inserted">+     ]</span>\n<span class="token inserted">+   },</span>\n    plugins: [\n      new CleanWebpackPlugin([\'dist\']),\n      new HtmlWebpackPlugin({\n        title: \'Hot Module Replacement\'\n      }),\n      new webpack.HotModuleReplacementPlugin()\n    ],\n    output: {\n      filename: \'[name].bundle.js\',\n      path: path.resolve(__dirname, \'dist\')\n    }\n  };</code></pre>\n<p>Hot loading stylesheets is as easy as importing them into a module:</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">  webpack-demo\n  | - package.json\n  | - webpack.config.js\n  | - /dist\n    | - bundle.js\n  | - /src\n    | - index.js\n    | - print.js\n<span class="token inserted">+   | - styles.css</span></code></pre>\n<p><strong>styles.css</strong></p>\n<pre><code class="hljs language-css"><span class="token selector">body</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-diff">  import _ from \'lodash\';\n  import printMe from \'./print.js\';\n<span class="token inserted">+ import \'./styles.css\';</span>\n\n  function component() {\n    var element = document.createElement(\'div\');\n    var btn = document.createElement(\'button\');\n\n    element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');\n\n    btn.innerHTML = \'Click me and check the console!\';\n    btn.onclick = printMe;  // onclick event is bind to the original printMe function\n\n    element.appendChild(btn);\n\n    return element;\n  }\n\n  let element = component();\n  document.body.appendChild(element);\n\n  if (module.hot) {\n    module.hot.accept(\'./print.js\', function() {\n      console.log(\'Accepting the updated printMe module!\');\n      document.body.removeChild(element);\n      element = component(); // Re-render the "component" to update the click handler\n      document.body.appendChild(element);\n    })\n  }</code></pre>\n<p>Change the style on <code>body</code> to <code>background: red;</code> and you should immediately see the page\'s background color change without a full refresh.</p>\n<p><strong>styles.css</strong></p>\n<pre><code class="hljs language-diff">  body {\n<span class="token deleted">-   background: blue;</span>\n<span class="token inserted">+   background: red;</span>\n  }</code></pre>\n<h2 id="other-code-and-frameworks">Other Code and Frameworks<a href="#other-code-and-frameworks" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>There are many other loaders and examples out in the community to make HMR interact smoothly with a variety of frameworks and libraries...</p>\n<ul>\n<li><a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a>: Tweak react components in real time.</li>\n<li><a href="https://github.com/vuejs/vue-loader">Vue Loader</a>: This loader supports HMR for vue components out of the box.</li>\n<li><a href="https://github.com/fluxxu/elm-hot-loader">Elm Hot Loader</a>: Supports HMR for the Elm programming language.</li>\n<li><a href="https://github.com/gdi2290/angular-hmr">Angular HMR</a>: No loader necessary! A simple change to your main NgModule file is all that\'s required to have full control over the HMR APIs.</li>\n</ul>\n<blockquote class="tip">\n<p>If you know of any other loaders or plugins that help with or enhance Hot Module Replacement please submit a pull request to add to this list!</p>\n</blockquote>\n'}}]);