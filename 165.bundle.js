(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{459:function(e,n,s){"use strict";s.r(n),n.default='<p>This plugin enables more fine grained control of source map generation. It is also enabled automatically by certain settings of the <a href="/configuration/devtool/"><code>devtool</code></a> configuration option.</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>SourceMapDevToolPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The following options are supported:</p>\n<ul>\n<li><code>test</code> (<code>string|regex|array</code>): Include source maps for modules based on their extension (defaults to <code>.js</code>, <code>.mjs</code>, and <code>.css</code>).</li>\n<li><code>include</code> (<code>string|regex|array</code>): Include source maps for module paths that match the given value.</li>\n<li><code>exclude</code> (<code>string|regex|array</code>): Exclude modules that match the given value from source map generation.</li>\n<li><code>filename</code> (<code>string</code>): Defines the output filename of the SourceMap (will be inlined if no value is provided).</li>\n<li><code>append</code> (<code>string</code>): Appends the given value to the original asset. Usually the <code>#sourceMappingURL</code> comment. <code>[url]</code> is replaced with a URL to the source map file. <code>false</code> disables the appending.</li>\n<li><code>moduleFilenameTemplate</code> (<code>string</code>): See <a href="/configuration/output/#output-devtoolmodulefilenametemplate"><code>output.devtoolModuleFilenameTemplate</code></a>.</li>\n<li><code>fallbackModuleFilenameTemplate</code> (<code>string</code>): See link above.</li>\n<li><code>module</code> (<code>boolean</code>): Indicates whether loaders should generate source maps (defaults to <code>true</code>).</li>\n<li><code>columns</code> (<code>boolean</code>): Indicates whether column mappings should be used (defaults to <code>true</code>).</li>\n<li><code>lineToLine</code> (<code>boolean</code> or <code>object</code>): Simplify and speed up source mapping by using line to line source mappings for matched modules.</li>\n<li><code>noSources</code> (<code>boolean</code>): Prevents the source file content from being included in the source map (defaults to <code>false</code>).</li>\n<li><code>publicPath</code> (<code>string</code>): Emits absolute URLs with public path prefix, e.g. <code>https://example.com/project/</code>.</li>\n<li><code>fileContext</code> (<code>string</code>): Makes the <code>[file]</code> argument relative to this directory.</li>\n</ul>\n<p>The <code>lineToLine</code> object allows for the same <code>test</code>, <code>include</code>, and <code>exclude</code> options described above.</p>\n<p>The <code>fileContext</code> option is useful when you want to store source maps in an upper level directory to avoid <code>../../</code> appearing in the absolute <code>[url]</code>.</p>\n<blockquote class="tip">\n<p>Setting <code>module</code> and/or <code>columns</code> to <code>false</code> will yield less accurate source maps but will also improve compilation performance significantly.</p>\n</blockquote>\n<blockquote class="tip">\n<p>If you want to use a custom configuration for this plugin in <a href="/concepts/mode/#mode-development">development mode</a>, make sure to disable the default one. I.e. set <code>devtool: false</code>.</p>\n</blockquote>\n<blockquote class="warning">\n<p>Remember that when using the <a href="/plugins/terser-webpack-plugin"><code>TerserPlugin</code></a>, you must utilize the <code>sourceMap</code> option.</p>\n</blockquote>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The following examples demonstrate some common use cases for this plugin.</p>\n<h3 id="basic-use-case">Basic Use Case<a href="#basic-use-case" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>You can use the following code to replace the configuration option <code>devtool: inline-source-map</code> with an equivalent custom plugin configuration:</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  devtool<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>SourceMapDevToolPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="exclude-vendor-maps">Exclude Vendor Maps<a href="#exclude-vendor-maps" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The following code would exclude source maps for any modules in the <code>vendor.js</code> bundle:</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>SourceMapDevToolPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  filename<span class="token punctuation">:</span> <span class="token string">\'[name].js.map\'</span><span class="token punctuation">,</span>\n  exclude<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'vendor.js\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="host-source-maps-externally">Host Source Maps Externally<a href="#host-source-maps-externally" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Set a URL for source maps. Useful for hosting them on a host that requires authorization.</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>SourceMapDevToolPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  append<span class="token punctuation">:</span> <span class="token string">\'\\n//# sourceMappingURL=https://example.com/sourcemap/[url]\'</span><span class="token punctuation">,</span>\n  filename<span class="token punctuation">:</span> <span class="token string">\'[name].map\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>And for cases when source maps are stored in the upper level directory:</p>\n<pre><code class="hljs language-code">project\n|- dist\n  |- public\n    |- bundle-[hash].js\n  |- sourcemaps\n    |- bundle-[hash].js.map\n</code></pre>\n<p>With next config:</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>SourceMapDevToolPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  filename<span class="token punctuation">:</span> <span class="token string">\'sourcemaps/[file].map\'</span><span class="token punctuation">,</span>\n  publicPath<span class="token punctuation">:</span> <span class="token string">\'https://example.com/project/\'</span><span class="token punctuation">,</span>\n  fileContext<span class="token punctuation">:</span> <span class="token string">\'public\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Will produce the following URL:</p>\n<pre><code class="hljs language-code">https://example.com/project/sourcemaps/bundle-[hash].js.map\n</code></pre>\n'}}]);