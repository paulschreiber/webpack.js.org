(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{344:function(n,e,a){"use strict";a.r(e),e.default='<p>webpack can watch files and recompile whenever they change. This page explains how to enable this and a couple of tweaks you can make if watching does not work properly for you.</p>\n<h2 id="watch"><code>watch</code><a href="#watch" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean: false</code></p>\n<p>Turn on watch mode. This means that after the initial build, webpack will continue to watch for changes in any of the resolved files.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  watch<span class="token punctuation">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="tip">\n<p>In <a href="https://github.com/webpack/webpack-dev-server">webpack-dev-server</a> and <a href="https://github.com/webpack/webpack-dev-middleware">webpack-dev-middleware</a> watch mode is enabled by default.</p>\n</blockquote>\n<h2 id="watchoptions"><code>watchOptions</code><a href="#watchoptions" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>object</code></p>\n<p>A set of options used to customize watch mode:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  watchOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    aggregateTimeout<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n    poll<span class="token punctuation">:</span> <span class="token number">1000</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="watchoptionsaggregatetimeout"><code>watchOptions.aggregateTimeout</code><a href="#watchoptionsaggregatetimeout" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>number: 300</code></p>\n<p>Add a delay before rebuilding once the first file changed. This allows webpack to aggregate any other changes made during this time period into one rebuild. Pass a value in milliseconds:</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  watchOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    aggregateTimeout<span class="token punctuation">:</span> <span class="token number">600</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="watchoptionsignored"><code>watchOptions.ignored</code><a href="#watchoptionsignored" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>RegExp</code> <a href="https://github.com/micromatch/anymatch"><code>anymatch</code></a></p>\n<p>For some systems, watching many file systems can result in a lot of CPU or memory usage. It is possible to exclude a huge folder like <code>node_modules</code>:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  watchOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    ignored<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>It is also possible to have and use multiple <a href="https://github.com/micromatch/anymatch">anymatch</a> patterns:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  watchOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    ignored<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'files/**/*.js\'</span><span class="token punctuation">,</span> <span class="token string">\'node_modules\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="tip">\n<p>If you use <code>require.context</code>, webpack will watch your entire directory. You will need to ignore files and/or directories so that unwanted changes will not trigger a rebuild.</p>\n</blockquote>\n<h2 id="watchoptionspoll"><code>watchOptions.poll</code><a href="#watchoptionspoll" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean: false</code> <code>number</code></p>\n<p>Turn on <a href="https://whatis.techtarget.com/definition/polling">polling</a> by passing <code>true</code>, or specifying a poll interval in milliseconds:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  watchOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    poll<span class="token punctuation">:</span> <span class="token number">1000</span> <span class="token comment">// Check for changes every second</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="tip">\n<p>If watching does not work for you, try out this option. Watching does not work with NFS and machines in VirtualBox.</p>\n</blockquote>\n<h2 id="info-verbosity"><code>info-verbosity</code><a href="#info-verbosity" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>string: \'none\', \'info\', \'verbose\'</code></p>\n<p>Controls verbosity of the lifecycle messaging, e.g. the <code>Started watching files...</code> log. Setting <code>info-verbosity</code> to <code>verbose</code> will also message to console at the beginning and the end of incremental build. <code>info-verbosity</code> is set to <code>info</code> by default.</p>\n<pre><code class="hljs language-bash">webpack --watch --info-verbosity verbose</code></pre>\n<h2 id="troubleshooting">Troubleshooting<a href="#troubleshooting" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>If you are experiencing any issues, please see the following notes. There are a variety of reasons why webpack might miss a file change.</p>\n<h3 id="changes-seen-but-not-processed">Changes Seen But Not Processed<a href="#changes-seen-but-not-processed" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Verify that webpack is not being notified of changes by running webpack with the --progress flag. If progress shows on save but no files are outputted, it is likely a configuration issue, not a file watching issue.</p>\n<pre><code class="hljs language-bash">webpack --watch --progress</code></pre>\n<h3 id="not-enough-watchers">Not Enough Watchers<a href="#not-enough-watchers" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Verify that you have enough available watchers in your system. If this value is too low, the file watcher in Webpack won\'t recognize the changes:</p>\n<pre><code class="hljs language-bash"><span class="token function">cat</span> /proc/sys/fs/inotify/max_user_watches</code></pre>\n<p>Arch users, add <code>fs.inotify.max_user_watches=524288</code> to <code>/etc/sysctl.d/99-sysctl.conf</code> and then execute <code>sysctl --system</code>. Ubuntu users (and possibly others), execute: <code>echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf &#x26;&#x26; sudo sysctl -p</code>.</p>\n<h3 id="macos-fsevents-bug">macOS fsevents Bug<a href="#macos-fsevents-bug" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>On macOS, folders can get corrupted in certain scenarios. See <a href="https://github.com/livereload/livereload-site/blob/master/livereload.com/_articles/troubleshooting/os-x-fsevents-bug-may-prevent-monitoring-of-certain-folders.md">this article</a>.</p>\n<h3 id="windows-paths">Windows Paths<a href="#windows-paths" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Because webpack expects absolute paths for many config options such as <code>__dirname + \'/app/folder\'</code> the Windows <code>\\</code> path separator can break some functionality.</p>\n<p>Use the correct separators. I.e. <code>path.resolve(__dirname, \'app/folder\')</code> or <code>path.join(__dirname, \'app\', \'folder\')</code>.</p>\n<h3 id="vim">Vim<a href="#vim" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>On some machines Vim is preconfigured with the <a href="http://vimdoc.sourceforge.net/htmldoc/options.html#&#x27;backupcopy&#x27;">backupcopy option</a> set to <code>auto</code>. This could potentially cause problems with the system\'s file watching mechanism. Switching this option to <code>yes</code> will make sure a copy of the file is made and the original one overwritten on save.</p>\n<p><code>:set backupcopy=yes</code></p>\n<h3 id="saving-in-webstorm">Saving in WebStorm<a href="#saving-in-webstorm" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>When using the JetBrains WebStorm IDE, you may find that saving changed files does not trigger the watcher as you might expect. Try disabling the <code>safe write</code> option in the settings, which determines whether files are saved to a temporary location first before the originals are overwritten: uncheck <code>File > {Settings|Preferences} > Appearance &#x26; Behavior > System Settings > Use "safe write" (save changes to a temporary file first)</code>.</p>\n'}}]);