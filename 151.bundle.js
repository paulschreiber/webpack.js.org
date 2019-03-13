(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{445:function(n,e,a){"use strict";a.r(e),e.default='<p>Enables <a href="/concepts/hot-module-replacement">Hot Module Replacement</a>, otherwise known as HMR.</p>\n<blockquote class="warning">\n<p>HMR should <strong>never</strong> be used in production.</p>\n</blockquote>\n<h2 id="basic-usage">Basic Usage<a href="#basic-usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Enabling HMR is easy and in most cases no options are necessary.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// Options...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The following options are accepted:</p>\n<ul>\n<li><code>multiStep</code> (boolean): If <code>true</code>, the plugin will build in two steps -- first compiling the hot update chunks, and then the remaining normal assets.</li>\n<li><code>fullBuildTimeout</code> (number): The delay between the two steps when <code>multiStep</code> is enabled.</li>\n<li><code>requestTimeout</code> (number): The timeout used for manifest download (since webpack 3.0.0)</li>\n</ul>\n<blockquote class="warning">\n<p>These options are experimental and may be deprecated. As mentioned above, they are typically not necessary and including a <code>new webpack.HotModuleReplacementPlugin()</code> is enough.</p>\n</blockquote>\n'}}]);