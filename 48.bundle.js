(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{342:function(n,s,a){"use strict";a.r(s),s.default='<p>The <code>stats</code> option lets you precisely control what bundle information gets displayed. This can be a nice middle ground if you don\'t want to use <code>quiet</code> or <code>noInfo</code> because you want some bundle information, but not all of it.</p>\n<blockquote class="tip">\n<p>For webpack-dev-server, this property needs to be in the <code>devServer</code> object.</p>\n</blockquote>\n<blockquote class="warning">\n<p>This option does not have any effect when using the Node.js API.</p>\n</blockquote>\n<h2 id="stats"><code>stats</code><a href="#stats" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>object</code> <code>string</code></p>\n<p>There are some presets available to use as a shortcut. Use them like this:</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  stats<span class="token punctuation">:</span> <span class="token string">\'errors-only\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<table>\n<thead>\n<tr>\n<th>Preset</th>\n<th>Alternative</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p>Preset</p><p>Alternative</p><p>Description</p></div>\n<div class="content"><p><code>"errors-only"</code><p class="description mobile"><em>none</em></p></p></div></td>\n<td class="description desktop"><em>none</em></td>\n<td>Only output when errors happen</td>\n</tr>\n<tr>\n<td><div class="title"><p>Preset</p><p>Alternative</p><p>Description</p></div>\n<div class="content"><p><code>"minimal"</code><p class="description mobile"><em>none</em></p></p></div></td>\n<td class="description desktop"><em>none</em></td>\n<td>Only output when errors or new compilation happen</td>\n</tr>\n<tr>\n<td><div class="title"><p>Preset</p><p>Alternative</p><p>Description</p></div>\n<div class="content"><p><code>"none"</code><p class="description mobile"><code>false</code></p></p></div></td>\n<td class="description desktop"><code>false</code></td>\n<td>Output nothing</td>\n</tr>\n<tr>\n<td><div class="title"><p>Preset</p><p>Alternative</p><p>Description</p></div>\n<div class="content"><p><code>"normal"</code><p class="description mobile"><code>true</code></p></p></div></td>\n<td class="description desktop"><code>true</code></td>\n<td>Standard output</td>\n</tr>\n<tr>\n<td><div class="title"><p>Preset</p><p>Alternative</p><p>Description</p></div>\n<div class="content"><p><code>"verbose"</code><p class="description mobile"><em>none</em></p></p></div></td>\n<td class="description desktop"><em>none</em></td>\n<td>Output everything</td>\n</tr>\n</tbody>\n</table>\n<p>For more granular control, it is possible to specify exactly what information you want. Please note that all of the options in this object are optional.</p>\n\x3c!-- eslint-skip --\x3e\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  stats<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// fallback value for stats options when an option is not defined (has precedence over local webpack defaults)</span>\n    all<span class="token punctuation">:</span> undefined<span class="token punctuation">,</span>\n\n    <span class="token comment">// Add asset Information</span>\n    assets<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Sort assets by a field</span>\n    <span class="token comment">// You can reverse the sort with `!field`.</span>\n    <span class="token comment">// Some possible values: \'id\' (default), \'name\', \'size\', \'chunks\', \'failed\', \'issuer\'</span>\n    <span class="token comment">// For a complete list of fields see the bottom of the page</span>\n    assetsSort<span class="token punctuation">:</span> <span class="token string">"field"</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add build date and time information</span>\n    builtAt<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add information about cached (not built) modules</span>\n    cached<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Show cached assets (setting this to `false` only shows emitted files)</span>\n    cachedAssets<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add children information</span>\n    children<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add chunk information (setting this to `false` allows for a less verbose output)</span>\n    chunks<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add namedChunkGroups information</span>\n    chunkGroups<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add built modules information to chunk information</span>\n    chunkModules<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add the origins of chunks and chunk merging info</span>\n    chunkOrigins<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Sort the chunks by a field</span>\n    <span class="token comment">// You can reverse the sort with `!field`. Default is `id`.</span>\n    <span class="token comment">// Some other possible values: \'name\', \'size\', \'chunks\', \'failed\', \'issuer\'</span>\n    <span class="token comment">// For a complete list of fields see the bottom of the page</span>\n    chunksSort<span class="token punctuation">:</span> <span class="token string">"field"</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Context directory for request shortening</span>\n    context<span class="token punctuation">:</span> <span class="token string">"../src/"</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// `webpack --colors` equivalent</span>\n    colors<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Display the distance from the entry point for each module</span>\n    depth<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Display the entry points with the corresponding bundles</span>\n    entrypoints<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add --env information</span>\n    env<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add errors</span>\n    errors<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add details to errors (like resolving log)</span>\n    errorDetails<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Exclude assets from being displayed in stats</span>\n    <span class="token comment">// This can be done with a String, a RegExp, a Function getting the assets name</span>\n    <span class="token comment">// and returning a boolean or an Array of the above.</span>\n    excludeAssets<span class="token punctuation">:</span> <span class="token string">"filter"</span> <span class="token operator">|</span> <span class="token operator">/</span>filter<span class="token operator">/</span> <span class="token operator">|</span> <span class="token punctuation">(</span>assetName<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span> <span class="token operator">|</span>\n      <span class="token punctuation">[</span><span class="token string">"filter"</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token operator">/</span>filter<span class="token operator">/</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>assetName<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token operator">|</span><span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Exclude modules from being displayed in stats</span>\n    <span class="token comment">// This can be done with a String, a RegExp, a Function getting the modules source</span>\n    <span class="token comment">// and returning a boolean or an Array of the above.</span>\n    excludeModules<span class="token punctuation">:</span> <span class="token string">"filter"</span> <span class="token operator">|</span> <span class="token operator">/</span>filter<span class="token operator">/</span> <span class="token operator">|</span> <span class="token punctuation">(</span>moduleSource<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span> <span class="token operator">|</span>\n      <span class="token punctuation">[</span><span class="token string">"filter"</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token operator">/</span>filter<span class="token operator">/</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>moduleSource<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token operator">|</span><span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// See excludeModules</span>\n    exclude<span class="token punctuation">:</span> <span class="token string">"filter"</span> <span class="token operator">|</span> <span class="token operator">/</span>filter<span class="token operator">/</span> <span class="token operator">|</span> <span class="token punctuation">(</span>moduleSource<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span> <span class="token operator">|</span>\n      <span class="token punctuation">[</span><span class="token string">"filter"</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token operator">/</span>filter<span class="token operator">/</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>moduleSource<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token operator">|</span><span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add the hash of the compilation</span>\n    hash<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Set the maximum number of modules to be shown</span>\n    maxModules<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add built modules information</span>\n    modules<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Sort the modules by a field</span>\n    <span class="token comment">// You can reverse the sort with `!field`. Default is `id`.</span>\n    <span class="token comment">// Some other possible values: \'name\', \'size\', \'chunks\', \'failed\', \'issuer\'</span>\n    <span class="token comment">// For a complete list of fields see the bottom of the page</span>\n    modulesSort<span class="token punctuation">:</span> <span class="token string">"field"</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Show dependencies and origin of warnings/errors (since webpack 2.5.0)</span>\n    moduleTrace<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Show performance hint when file size exceeds `performance.maxAssetSize`</span>\n    performance<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Show the exports of the modules</span>\n    providedExports<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add public path information</span>\n    publicPath<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add information about the reasons why modules are included</span>\n    reasons<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add the source code of modules</span>\n    source<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add timing information</span>\n    timings<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Show which exports of a module are used</span>\n    usedExports<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add webpack version information</span>\n    version<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Add warnings</span>\n    warnings<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Filter warnings to be shown (since webpack 2.4.0),</span>\n    <span class="token comment">// can be a String, Regexp, a function getting the warning and returning a boolean</span>\n    <span class="token comment">// or an Array of a combination of the above. First match wins.</span>\n    warningsFilter<span class="token punctuation">:</span> <span class="token string">"filter"</span> <span class="token operator">|</span> <span class="token operator">/</span>filter<span class="token operator">/</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token string">"filter"</span><span class="token punctuation">,</span> <span class="token operator">/</span>filter<span class="token operator">/</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">(</span>warning<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token operator">|</span><span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p>If you want to use one of the pre-defined behaviours e.g. <code>\'minimal\'</code> but still override one or more of the rules, see <a href="https://github.com/webpack/webpack/blob/master/lib/Stats.js#L1394-L1401">the source code</a>. You would want to copy the configuration options from <code>case \'minimal\': ...</code> and add your additional rules while providing an object to <code>stats</code>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//..</span>\n  stats<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// copied from `\'minimal\'`</span>\n    all<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    modules<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    maxModules<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    errors<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    warnings<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token comment">// our additional options</span>\n    moduleTrace<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    errorDetails<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="sorting-fields">Sorting fields<a href="#sorting-fields" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>For <code>assetsSort</code>, <code>chunksSort</code> and <code>moduleSort</code> there are several possible fields that you can sort items by:</p>\n<ul>\n<li><code>id</code> is the item\'s id;</li>\n<li><code>name</code> - a item\'s name that was assigned to it upon importing;</li>\n<li><code>size</code> - a size of item in bytes;</li>\n<li><code>chunks</code> - what chunks the item originates from (for example, if there are multiple subchunks for one chunk - the subchunks will be grouped together according to their main chunk);</li>\n<li><code>errors</code> - amount of errors in items;</li>\n<li><code>warnings</code> - amount of warnings in items;</li>\n<li><code>failed</code> - whether the item has failed compilation;</li>\n<li><code>cacheable</code> - whether the item is cacheable;</li>\n<li><code>built</code> - whether the asset has been built;</li>\n<li><code>prefetched</code> - whether the asset will be prefetched;</li>\n<li><code>optional</code> - whether the asset is optional;</li>\n<li><code>identifier</code> - identifier of the item;</li>\n<li><code>index</code> - item\'s processing index;</li>\n<li><code>index2</code></li>\n<li><code>profile</code></li>\n<li><code>issuer</code> - an identifier of the issuer;</li>\n<li><code>issuerId</code> - an id of the issuer;</li>\n<li><code>issuerName</code> - a name of the issuer;</li>\n<li><code>issuerPath</code> - a full issuer object. There\'s no real need to sort by this field;</li>\n</ul>\n<h3 id="colors">Colors<a href="#colors" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>You can specify your own terminal output colors using <a href="https://en.wikipedia.org/wiki/ANSI_escape_code">ANSI escape sequences</a></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  colors<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    green<span class="token punctuation">:</span> <span class="token string">\'\\u001b[32m\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n'}}]);