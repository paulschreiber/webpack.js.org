(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{439:function(n,s,a){"use strict";a.r(s),s.default='<p><em>Context</em> refers to a <a href="/guides/dependency-management/#require-with-expression">require with an expression</a> such as <code>require(\'./locale/\' + name + \'.json\')</code>. When encountering such an expression, webpack infers the directory (<code>\'./locale/\'</code>) and a regular expression (<code>/^.*\\.json$/</code>). Since the <code>name</code> is not known at compile time, webpack includes every file as module in the bundle.</p>\n<p>The <code>ContextReplacementPlugin</code> allows you to override the inferred information. There are various ways to configure the plugin:</p>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n\x3c!-- eslint-skip --\x3e\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ContextReplacementPlugin</span><span class="token punctuation">(</span>\n  resourceRegExp<span class="token punctuation">:</span> RegExp<span class="token punctuation">,</span>\n  newContentResource<span class="token operator">?</span><span class="token punctuation">:</span> string<span class="token punctuation">,</span>\n  newContentRecursive<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n  newContentRegExp<span class="token operator">?</span><span class="token punctuation">:</span> RegExp\n<span class="token punctuation">)</span></code></pre>\n<p>If the resource (directory) matches <code>resourceRegExp</code>, the plugin replaces the default resource, recursive flag or generated regular expression with <code>newContentResource</code>, <code>newContentRecursive</code> or <code>newContextRegExp</code> respectively. If <code>newContentResource</code> is relative, it is resolved relative to the previous resource.</p>\n<p>Here\'s a small example to restrict module usage:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ContextReplacementPlugin</span><span class="token punctuation">(</span>\n  <span class="token regex">/moment[/\\\\]locale$/</span><span class="token punctuation">,</span>\n  <span class="token regex">/de|fr|hu/</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>The <code>moment/locale</code> context is restricted to files matching <code>/de|fr|hu/</code>. Thus only those locales are included (see <a href="https://github.com/moment/moment/issues/2373">this issue</a> for more information).</p>\n<h2 id="content-callback">Content Callback<a href="#content-callback" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ContextReplacementPlugin</span><span class="token punctuation">(</span>\n  resourceRegExp<span class="token punctuation">:</span> RegExp<span class="token punctuation">,</span>\n  newContentCallback<span class="token punctuation">:</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>The <code>newContentCallback</code> function is given a <a href="/api/plugins/module-factories/"><code>data</code> object of the <code>ContextModuleFactory</code></a> and is expected to overwrite the <code>request</code> attribute of the supplied object.</p>\n<p>Using this callback we can dynamically redirect requests to a new location:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ContextReplacementPlugin</span><span class="token punctuation">(</span><span class="token regex">/^\\.\\/locale$/</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span><span class="token regex">/\\/moment\\//</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>context<span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n\n  Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    regExp<span class="token punctuation">:</span> <span class="token regex">/^\\.\\/\\w+/</span><span class="token punctuation">,</span>\n    request<span class="token punctuation">:</span> <span class="token string">\'../../locale\'</span> <span class="token comment">// resolved relatively</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="other-options">Other Options<a href="#other-options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The <code>newContentResource</code> and <code>newContentCreateContextMap</code> parameters are also available:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ContextReplacementPlugin</span><span class="token punctuation">(</span>\n  resourceRegExp<span class="token punctuation">:</span> RegExp<span class="token punctuation">,</span>\n  newContentResource<span class="token punctuation">:</span> string<span class="token punctuation">,</span>\n  newContentCreateContextMap<span class="token punctuation">:</span> object <span class="token comment">// mapping runtime-request (userRequest) to compile-time-request (request)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>These two parameters can be used together to redirect requests in a more targeted way. The <code>newContentCreateContextMap</code> allows you to map runtime requests to compile requests in the form of an object:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">ContextReplacementPlugin</span><span class="token punctuation">(</span><span class="token regex">/selector/</span><span class="token punctuation">,</span> <span class="token string">\'./folder\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token string">\'./request\'</span><span class="token punctuation">:</span> <span class="token string">\'./request\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'./other-request\'</span><span class="token punctuation">:</span> <span class="token string">\'./new-request\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n'}}]);