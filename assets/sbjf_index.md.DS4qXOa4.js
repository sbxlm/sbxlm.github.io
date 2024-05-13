import{_ as s,c as a,o as n,a5 as e}from"./chunks/framework.CoDogpMp.js";const f=JSON.parse('{"title":"声笔简飞","description":"","frontmatter":{"title":"声笔简飞","date":"2024-05-13T07:55:56.000Z","comments":false,"tags":["声笔","简飞","顶功"],"typora-root-url":"..\\\\..\\\\public"},"headers":[],"relativePath":"sbjf/index.md","filePath":"docs/sbjf/index.md"}'),p={name:"sbjf/index.md"},t=e(`<h2 id="_1-简飞概述" tabindex="-1">1 简飞概述 <a class="header-anchor" href="#_1-简飞概述" aria-label="Permalink to &quot;1 简飞概述&quot;">​</a></h2><p>为了让声笔简码取得尽量高的输入效率，可以采用专业模式，亦即将以下涉及到的选项设置如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>switches:</span></span>
<span class="line"><span>  - name: third_pop</span></span>
<span class="line"><span>    reset: 1</span></span>
<span class="line"><span>    states: [四顶, 三顶]</span></span>
<span class="line"><span>  - name: is_enhanced</span></span>
<span class="line"><span>    reset: 1</span></span>
<span class="line"><span>    states: [常规, 增强]</span></span>
<span class="line"><span>  - name: single_display</span></span>
<span class="line"><span>    reset: 1</span></span>
<span class="line"><span>translator:</span></span>
<span class="line"><span>  enable_filtering: false</span></span>
<span class="line"><span>  single_selection: true</span></span>
<span class="line"><span>  lower_case: false</span></span>
<span class="line"><span>  enable_ssp: true</span></span>
<span class="line"><span>  no_ssp_in_ssb: true</span></span></code></pre></div><p>其中，将三顶third_pop设为1保证字词均可三码起顶，增强is_enhanced为设1保证可以使用数选字词和标选单字，单次选重single_selection设为true保证可以在非全码时只观察首选即可，配合单项提示single_display为true可以避免过多的提示信息，启用过滤enable_filtering设为false可以在三码时出现多字词，小写lower_case设为false强制多字词时只能用ssss格式来输入多字词以便将更多的sszb空间让给二字词和三字词，启用声声偏词enable_ssp_words设为true可以大大增强二字词的离散能力，强制声声笔词no_ssp_in_ssb设为true则不能用ssb格式来输出声声偏词。</p>`,4),l=[t];function i(c,_,o,r,d,h){return n(),a("div",null,l)}const b=s(p,[["render",i]]);export{f as __pageData,b as default};
