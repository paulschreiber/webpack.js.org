(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{390:function(n,a,s){"use strict";s.r(a),a.default='<p>gzip loader module for webpack</p>\n<p>Enables loading gzipped resources.</p>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev gzip-loader</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.gz$/</span><span class="token punctuation">,</span>\n        enforce<span class="token punctuation">:</span> <span class="token string">\'pre\'</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token string">\'gzip-loader\'</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p><strong>bundle.js</strong></p>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"gzip-loader!./file.js.gz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <a href="https://github.com/jdalton">\n          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/4303?v=3&s=150">\n          </br>\n          John-David Dalton\n        </a>\n      </td>\n      <td align="center">\n        <a href="https://github.com/bebraw">\n          <img width="150" height="150" src="https://github.com/bebraw.png?v=3&s=150">\n          </br>\n          Juho Vepsäläinen\n        </a>\n      </td>\n      <td align="center">\n        <a href="https://github.com/d3viant0ne">\n          <img width="150" height="150" src="https://github.com/d3viant0ne.png?v=3&s=150">\n          </br>\n          Joshua Wiens\n        </a>\n      </td>\n      <td align="center">\n        <a href="https://github.com/michael-ciniawsky">\n          <img width="150" height="150" src="https://github.com/michael-ciniawsky.png?v=3&s=150">\n          </br>\n          Michael Ciniawsky\n        </a>\n      </td>\n      <td align="center">\n        <a href="https://github.com/evilebottnawi">\n          <img width="150" height="150" src="https://github.com/evilebottnawi.png?v=3&s=150">\n          </br>\n          Alexander Krasnoyarov\n        </a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n'}}]);