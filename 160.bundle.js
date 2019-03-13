(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{454:function(n,s,a){"use strict";a.r(s),s.default='<p>The <code>NormalModuleReplacementPlugin</code> allows you to replace resources that match <code>resourceRegExp</code> with <code>newResource</code>. If <code>newResource</code> is relative, it is resolved relative to the previous resource. If <code>newResource</code> is a function, it is expected to overwrite the request attribute of the supplied resource.</p>\n<p>This can be useful for allowing different behaviour between builds.</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>NormalModuleReplacementPlugin</span><span class="token punctuation">(</span>\n  resourceRegExp<span class="token punctuation">,</span>\n  newResource\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="basic-example">Basic Example<a href="#basic-example" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Replace a specific module when building for a <a href="/guides/production">development environment</a>.</p>\n<p>Say you have a config file <code>some/path/config.development.module.js</code> and a special version for production in <code>some/path/config.production.module.js</code></p>\n<p>Just add the following plugin when building for production:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>NormalModuleReplacementPlugin</span><span class="token punctuation">(</span>\n  <span class="token regex">/some\\/path\\/config\\.development\\.js/</span><span class="token punctuation">,</span>\n  <span class="token string">\'./config.production.js\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="advanced-example">Advanced Example<a href="#advanced-example" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Conditional build depending on an <a href="/configuration/configuration-types">specified environment</a>.</p>\n<p>Say you want a configuration with specific values for different build targets.</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> appTarget <span class="token operator">=</span> env<span class="token punctuation">.</span><span class="token constant">APP_TARGET</span> <span class="token operator">||</span> <span class="token string">\'VERSION_A\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>NormalModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token regex">/(.*)-APP_TARGET(\\.*)/</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        resource<span class="token punctuation">.</span>request <span class="token operator">=</span> resource<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/-APP_TARGET/</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>appTarget<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>Create the two config files:</p>\n<p><strong>app/config-VERSION_A.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  title <span class="token punctuation">:</span> <span class="token string">\'I am version A\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><strong>app/config-VERSION_B.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  title <span class="token punctuation">:</span> <span class="token string">\'I am version B\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>Then import that config using the keyword you\'re looking for in the regexp:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">\'app/config-APP_TARGET\'</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>And now you just get the right config imported depending on which target you\'re building for:</p>\n<pre><code class="hljs language-bash">webpack --env.APP_TARGET VERSION_A\n<span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'I am version A\'</span>\n\nwebpack --env.APP_TARGET VERSION_B\n<span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'I am version B\'</span></code></pre>\n'}}]);