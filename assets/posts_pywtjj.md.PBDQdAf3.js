import{_ as e,c as o,o as c,a3 as d}from"./chunks/framework.BgPV25Zt.js";const y=JSON.parse('{"title":"主流拼音输入法存在的问题及其解决","description":"","frontmatter":{"title":"主流拼音输入法存在的问题及其解决","date":"2021-04-21T13:14:32.000Z","tags":null},"headers":[],"relativePath":"posts/pywtjj.md","filePath":"posts/pywtjj.md"}'),t={name:"posts/pywtjj.md"},a=d('<p>现在的主流拼音输入法，造成的问题比解决的问题多。</p><ul><li>弹窗、广告、隐私忧患这些东西，你不用这些输入法还好，用了就跟随而来，而且请神容易送神难，常常还有七大姑八大姨的随之蜂拥而至。</li><li>正事没有干好，花里胡哨的功能一大堆，换肤、斗图、表情不断地来烦你，还常常惦记着你的垃圾是不是太多了，你的浏览器是不是该换了，有什么新词你还不知道，就是不停地刷存在感，还让别人正常输入文字吗。</li></ul><p>我们再来看看当前的拼音输入法存在的主要问题是什么？</p><ul><li>音节界线不清：比如，<code>pingan</code>可能是<code>ping&#39;an</code>，也可能是<code>pin&#39;gan</code>；<code>xian</code>也可能是<code>xi&#39;an</code>；<code>dzay</code>，可以切分为<code>d&#39;za&#39;y</code>或者<code>d&#39;z&#39;a&#39;y</code>。</li><li>拼写形式过长：<code>zhuang</code>、<code>chuang</code>、<code>jiong</code>、<code>xiang</code>等等非常影响输入效率。</li><li>字词重码过多：<code>yi</code>、<code>shi</code>等音节有上百个同音字；<code>yiyi</code>、<code>shishi</code>等也有大量的同音词；即使利用整句上下文也无法避免频繁选择重码。搜狗拼音虽然有TAB后加辅助码的方法，但是非常低效，而且只能为首字加辅助码。</li><li>回溯修改麻烦：在需要回改的时候，往往需要从头逐个选择重码，非常烦琐。</li></ul><p>这些问题在<a href="/sbpy/">声笔拼音</a>中都得到了较好的解决。声笔拼音明确了音节界线，简化了拼写形式，支持模糊后缀查找，能够直接用笔画筛选重码，基本上兼容一般拼音输入法，可以实现零成本迁移，但是输入效率得到了较大提高。还有，它绝对没有弹窗、广告、隐私忧患，没有花里胡哨的无用功能，专心为你的输入助力，而且还开源透明，没有猫腻，让你明白放心。</p>',5),i=[a];function s(n,l,p,_,r,h){return c(),o("div",null,i)}const f=e(t,[["render",s]]);export{y as __pageData,f as default};
