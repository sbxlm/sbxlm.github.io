import{_ as a,c as s,o as e,a5 as l}from"./chunks/framework.CSov3K4h.js";const p=JSON.parse('{"title":"首个为声笔系列码定制的小狼毫输入法","description":"","frontmatter":{"title":"首个为声笔系列码定制的小狼毫输入法","date":"2019-07-19T09:30:09.000Z","tags":["小狼毫","声笔系列","输入法"]},"headers":[],"relativePath":"posts/weasel4sbxlm-0-14-3-0.md","filePath":"posts/weasel4sbxlm-0-14-3-0.md"}'),t={name:"posts/weasel4sbxlm-0-14-3-0.md"},i=l('<h2 id="热烈祝贺首个为声笔系列码定制的小狼毫输入法正式发布" tabindex="-1">热烈祝贺首个为声笔系列码定制的小狼毫输入法正式发布！ <a class="header-anchor" href="#热烈祝贺首个为声笔系列码定制的小狼毫输入法正式发布" aria-label="Permalink to &quot;热烈祝贺首个为声笔系列码定制的小狼毫输入法正式发布！&quot;">​</a></h2><p>顶功输入法现在虽然越来越火，但是现有的平台都有太多的局限性，无法让输入法玩家们玩出更多的花样。利用表示笔画的小码集字母aeiou进行选重是声笔系列码的黑科技之一，一直无法在RIME中实现。于是，我只得硬着头皮改了一下librime的源码，现在终于可以在小狼毫中使用了！当然，自动码长调整等其它声笔技术在RIME平台和其它输入法平台上仍然没有办法使用。不过，已经可以多一种玩法了。祝贺！祝贺！</p><p>等不及了吗？赶快下载<a href="https://github.com/sbxlm/sbxlm.github.io/releases/download/weasel4sbxlm-0.14.3.0/weasel4sbxlm-0.14.3.0.rar" target="_blank" rel="noreferrer">Weasel4Sbxlm</a>吧。等一下！MacBook和Android怎么办了？少安毋躁，只有稍等一下了，后续再跟进。</p><h2 id="本版输入法的主要内容" tabindex="-1">本版输入法的主要内容 <a class="header-anchor" href="#本版输入法的主要内容" aria-label="Permalink to &quot;本版输入法的主要内容&quot;">​</a></h2><h3 id="公共部分" tabindex="-1">公共部分 <a class="header-anchor" href="#公共部分" aria-label="Permalink to &quot;公共部分&quot;">​</a></h3><ul><li>用于Windows的安装程序weasel4sbxlm-0.14.3.0.exe，增加了官方版没有字母选重的功能，仍然可以兼容官方版，不会影响已经有的输入法。</li><li>笔画码表（用于笔画反查码表）：bihua.dict.yaml和bihua.schema.yaml</li><li>拼音码表（用于拼音反查码表）：pinyin_simp.dict.yaml和pinyin_simp.schema.yaml</li><li>本文件：readme.txt</li></ul><h3 id="输入法部分" tabindex="-1">输入法部分 <a class="header-anchor" href="#输入法部分" aria-label="Permalink to &quot;输入法部分&quot;">​</a></h3><p>这里的声笔飞码即原生程序中的飞码声形模式，而声笔快码则是声韵模式。以下编码格式中，s代表声母，p代表偏旁部首，b代表笔画，y代表韵母，d代表双笔，x代表选择键。</p><ul><li>声笔飞码：sbfm.dict.yaml和sbfm.schema.yaml。它的编码格式：单字为spbbx, sbbbx；二字词为sbbsx；三字词为ssSx；多字词为sSssx。</li><li>声笔快码：sbkm.dict.yaml和sbkm.schema.yaml。它的编码格式与声笔飞码基本上相同，只需要把spbbx换为sybbx就行了。</li><li>声笔双拼：sbsp.dict.yaml和sbsp.schema.yaml。它的编码格式：单字为sybbx，二字词为sysyx，三字词为sssyx；多字词为ssssx。声笔双拼是基于自然码双拼改编的。</li><li>声笔星二：sbxv.dict.yaml和sbxv.schema.yaml。它的编码格式：单字为sdbbx，二字词为sdsdx，三字词为sssdx；多字词为ssssx。声笔星二是基于星空二笔改编的。</li></ul><h3 id="更多信息" tabindex="-1">更多信息 <a class="header-anchor" href="#更多信息" aria-label="Permalink to &quot;更多信息&quot;">​</a></h3><p>要知道更多的信息？请加入声笔系列码交流QQ群445906697。</p>',11),r=[i];function o(m,b,d,c,h,n){return e(),s("div",null,r)}const _=a(t,[["render",o]]);export{p as __pageData,_ as default};