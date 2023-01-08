import{_ as s,c as l,o as n,a}from"./app.62528036.js";const u=JSON.parse('{"title":"Rollup","titleTemplate":"常见问题","description":"","frontmatter":{"title":"Rollup","titleTemplate":"常见问题","outline":[2,4]},"headers":[{"level":3,"title":"为什么 ES 模块比 CommonJS 模块更好?","slug":"为什么-es-模块比-commonjs-模块更好","link":"#为什么-es-模块比-commonjs-模块更好","children":[]},{"level":3,"title":"什么是“tree-shaking”?","slug":"什么是-tree-shaking","link":"#什么是-tree-shaking","children":[]},{"level":3,"title":"如何在使用 CommonJS 模块的 Node.js 中使用 Rollup?","slug":"如何在使用-commonjs-模块的-node-js-中使用-rollup","link":"#如何在使用-commonjs-模块的-node-js-中使用-rollup","children":[]},{"level":3,"title":"为什么不将 node-resolve 作为内置功能？","slug":"为什么不将-node-resolve-作为内置功能","link":"#为什么不将-node-resolve-作为内置功能","children":[]},{"level":3,"title":"为什么进行代码拆分时我的入口 chunk 出现了其它的导入?","slug":"为什么进行代码拆分时我的入口-chunk-出现了其它的导入","link":"#为什么进行代码拆分时我的入口-chunk-出现了其它的导入","children":[]},{"level":3,"title":"如何将一些 polyfill 添加到 Rollup bundle 中?","slug":"如何将一些-polyfill-添加到-rollup-bundle-中","link":"#如何将一些-polyfill-添加到-rollup-bundle-中","children":[]}],"relativePath":"_NOTES/Build Tools/rollup/04_faqs.md","lastUpdated":1672992558000}'),o={name:"_NOTES/Build Tools/rollup/04_faqs.md"},e=a(`<h1 id="rollup-常见问题" tabindex="-1"><a href="https://rollupjs.org/guide/en/#faqs" target="_blank" rel="noreferrer">Rollup 常见问题</a> <a class="header-anchor" href="#rollup-常见问题" aria-hidden="true">#</a></h1><blockquote><p>摘抄于官网。</p></blockquote><hr><h3 id="为什么-es-模块比-commonjs-模块更好" tabindex="-1">为什么 ES 模块比 CommonJS 模块更好? <a class="header-anchor" href="#为什么-es-模块比-commonjs-模块更好" aria-hidden="true">#</a></h3><p>ES 模块是一个官方标准, 也是 JavaScript 代码结构的明确的发展方向, 而 CommonJS 模块是一种特殊且老旧的格式, 仅仅在提出 ES 模块标准之前作为暂时性的解决方案。</p><p>ES 模块允许进行静态分析, 从而有助于 tree-shaking 和作用域提升(scope-hoisting)之类的优化工作, 同时提供了一些高级特性, 例如循环引用和实时绑定。</p><h3 id="什么是-tree-shaking" tabindex="-1">什么是“tree-shaking”? <a class="header-anchor" href="#什么是-tree-shaking" aria-hidden="true">#</a></h3><p>Tree-shaking, 也被称为“live code inclusion”, 是 Rollup 消除项目中并未实际使用到的代码的过程。它是一种消除无效代码的方式, 但在优化输出内容大小方面可能比其他方法有效得多。这个名字源于模块内容(而非模块图)的抽象语法树(abstract syntax tree, AST)。</p><p>Tree-shaking 算法首先标记所有相关语句, 然后 &quot;摇动语法树&quot; 以删除所有无效代码。其思想类似于标记-清除垃圾收集算法。</p><h3 id="如何在使用-commonjs-模块的-node-js-中使用-rollup" tabindex="-1">如何在使用 CommonJS 模块的 Node.js 中使用 Rollup? <a class="header-anchor" href="#如何在使用-commonjs-模块的-node-js-中使用-rollup" aria-hidden="true">#</a></h3><p>Rollup 致力于实现 ES Module 模块的规范, 并不一定会考虑 Node.js, NPM, <code>require()</code>, 和 CommonJS 的行为。所以, 加载 CommonJS 模块的逻辑和使用 Node.js 的模块位置解析的逻辑都在可选的插件中实现, Rollup 的核心代码并未默认提供这些功能。</p><p>只需要通过 npm install 安装 commonjs 和 node-resolve 这两个插件并在 rollup.config.js 中启用它们, 就可以正常使用以上功能。如果模块导入了 JSON 文件, 那么你需要额外安装 json 这个插件。</p><h3 id="为什么不将-node-resolve-作为内置功能" tabindex="-1">为什么不将 node-resolve 作为内置功能？ <a class="header-anchor" href="#为什么不将-node-resolve-作为内置功能" aria-hidden="true">#</a></h3><p>有两个主要原因：</p><ul><li><p>(从 Rollup 的设计) 哲学上来讲, Rollup 本质上是一个 polyfill, 作用是对工作在 Node 和浏览器中的原生模块加载器进行排序。在浏览器中, <code>import foo from &#39;foo&#39;</code> 不会正常工作, 因为浏览器并没有使用 Node 的解析算法。</p></li><li><p>从现实层面来讲, 如果可以通过设计良好的 API 巧妙地分解这些问题, Rollup 的开发将变得更加轻松。Rollup 的核心代码非常庞大, 所以一切阻止它变得臃肿的事情都是好事。与此同时, 也能更容易地修复 bug 和加入新特性。Rollup 的代码库越精简, 欠下的技术债务就越少。</p></li></ul><p>这个 <a href="https://github.com/rollup/rollup/issues/1555#issuecomment-322862209" target="_blank" rel="noreferrer">issue</a> 有更详细的解释。</p><h3 id="为什么进行代码拆分时我的入口-chunk-出现了其它的导入" tabindex="-1">为什么进行代码拆分时我的入口 chunk 出现了其它的导入? <a class="header-anchor" href="#为什么进行代码拆分时我的入口-chunk-出现了其它的导入" aria-hidden="true">#</a></h3><p>默认情况下, 当创建一个多重 chunk 时, 入口 chunk 的依赖项导入将被作为空导入加入到这些 chunk 本身。如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 输入</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// main.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./other-entry.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(value)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// other-entry.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> externalValue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">external</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> externalValue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 输出</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// main.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">external</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 这个导入从 other-entry.js 提升到这里</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./other-entry.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(value)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// other-entry.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> externalValue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">external</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> externalValue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>这并不影响代码的执行顺序或行为, 但可以加速代码的加载和解析。没有了这个优化, Javascript 引擎需要执行这些步骤来运行 main.js：</p><ol><li>加载并解析 main.js。最后发现对 other-entry.js 的导入</li><li>加载并解析 other-entry.js。最后发现对 external 的导入</li><li>加载并解析 external</li><li>执行 main.js</li></ol><p>有了这个优化, Javascript 引擎就会在解析入口模块后发现所有的依赖传递, 从而避免瀑布式解析：</p><ol><li>加载并解析 main.js。最后发现对 other-entry.js 和对 external 的导入</li><li>加载并解析 other-entry.js 和 external。此时对 other-entry.js 的导入已经完成了加载和解析</li><li>执行 main.js</li></ol><p>在一些情况下可能不希望进行这样的优化：</p><ul><li>此时可以通过 <code>output.hoistTransitiveImports</code> 选项将其关闭</li><li>该优化在使用 <code>output.preserveModules</code> 选项时也不会开启</li></ul><h3 id="如何将一些-polyfill-添加到-rollup-bundle-中" tabindex="-1">如何将一些 polyfill 添加到 Rollup bundle 中? <a class="header-anchor" href="#如何将一些-polyfill-添加到-rollup-bundle-中" aria-hidden="true">#</a></h3><p>尽管 Rollup 通常会在打包时尝试确保模块的执行顺序, 但在这两种情况下并不总是如此：</p><ol><li>代码拆分时</li><li>存在外部依赖时。</li></ol><p>存在外部依赖时该问题更为明显, 如:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// main.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./polyfill.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">external</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// polyfill.js</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">polyfill</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>这里的执行顺序是 <code>polyfill.js</code> → <code>external</code> → <code>main.js</code>。现在打包代码, 将得到：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">external</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">polyfill</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>也就是按 <code>external</code> → <code>polyfill.js</code> → <code>main.js</code> 的顺序执行。这并非 Rollup 将 <code>import</code> 放在了打包代码的顶部引起的问题——导入的内容始终是优先执行的, 而与它们在文件中的什么位置无关。</p><p>这个问题可以通过创建更多的 chunk 来解决：如果 dep.js 与 main.js 最终不在同一个 chunk 中, 就会保留正确的执行顺序。</p><p>然而目前 Rollup 还没有办法自动地完成这件事情。对于代码拆分的过程, Rollup 会尝试创建尽可能少的 chunk, 同时避免执行不需要的代码。</p><p>对于大多数代码来说这不会引发问题, 因为 Rollup 可以确保：如果模块 A 导入了模块 B 并且不存在循环引入, 那么模块 B 将会在模块 A 之前执行。</p><p>但这对于 polyfill 来说就有问题了, 因为通常需要先执行这些 polyfill 却不希望将所有 polyfill 的导入放在每个模块中。幸运的是, 我们不需要这么做：</p><ol><li>如果没有依赖 polyfill 的外部依赖, 那么只需要将导入 polyfill 的语句放在入口文件中就足够了</li><li>如果有的话, 就将 polyfill 作为单独的入口或者 manual chunk, 这将能够确保 polyfill 总是优先执行</li></ol>`,38),p=[e];function t(r,c,i,y,D,F){return n(),l("div",null,p)}const C=s(o,[["render",t]]);export{u as __pageData,C as default};
