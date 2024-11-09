import{_ as l}from"./chunks/Practice.vue_vue_type_style_index_0_lang.D3rpaTvl.js";import{c as a,a3 as n,G as i,k as r,j as e,a as d,o}from"./chunks/framework.hU1yMXPg.js";import"./chunks/util.Ch0q5CAH.js";import"./chunks/Space.BnRoX1E1.js";import"./chunks/Input.qTNBiHOR.js";import"./chunks/Progress.Dfmppzu5.js";const p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453","aria-hidden":"true"},g={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},u={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453","aria-hidden":"true"},x={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.254ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 2322.4 748","aria-hidden":"true"},m={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},b={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453","aria-hidden":"true"},M=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"sbsp/index.md","filePath":"docs/sbsp/index.md"}'),Q={name:"sbsp/index.md"},L=Object.assign(Q,{setup(f){const s=Object.entries({zh:"w",ch:"y",sh:"v",零开:"r",零合:"s",零齐:"f",零撮:"k"}),c=Object.entries({a:"a",ai:"ai",ao:"au",an:"ao",ang:"ae",e:"e",ei:"ei",en:"eo",eng:"ee",er:"i",o:"o",ou:"ou",ong:"oe",u:"u",ua:"i",uai:"ii",uan:"io",uang:"ie",uo:"o",uei:"ui",uen:"uo",ueng:"ue",i:"i",ia:"u",iao:"uu",ian:"uo",iang:"ue",ie:"e",in:"io",ing:"ie",io:"o",iong:"oe",iou:"ou",ü:"a",üan:"oo",üe:"o",ün:"ao"});return(w,t)=>(o(),a("div",null,[t[15]||(t[15]=n(`<h2 id="设计理念" tabindex="-1">设计理念 <a class="header-anchor" href="#设计理念" aria-label="Permalink to &quot;设计理念&quot;">​</a></h2><p>冰雪四拼（又称声笔四拼）是一个带调拼音词顶功输入方案，它脱胎于声笔系列码中的声笔拼音方案，但是用声调取代了其中的笔画成分，使其不再涉及字形信息而是成为了纯粹的音码，从而探索了新的输入体验。其设计理念如下：</p><ol><li>充分发挥带调拼音的离散能力，降低重码并在短码空间内容纳更多的词；</li><li>在声母和韵母不乱序的情况下尽可能优化键位的使用率以及双键组合的顺手程度；</li><li>根据「频率为主、语义优先」的思想设置固顶词，使得用户能够快速熟悉高频词的打法，同时大大降低了固顶词的记忆难度。</li></ol><p>此外，本方案采用的声母和韵母的定义完全符合《汉语拼音方案》中的原始形式，没有受到全拼特有的正字法的影响。在这个意义上，本方案比一般的双拼方案更加规范。</p><h2 id="拼写规则" tabindex="-1">拼写规则 <a class="header-anchor" href="#拼写规则" aria-label="Permalink to &quot;拼写规则&quot;">​</a></h2><p>本方案将汉语拼音的音节分解并依次编码为声码、韵码和调码。以下将一一介绍：</p><h3 id="声码" tabindex="-1">声码 <a class="header-anchor" href="#声码" aria-label="Permalink to &quot;声码&quot;">​</a></h3><p>《汉语拼音方案》中，如果不考虑零声母，则声母的数量正好为 21 个：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>b p m f d t n l</span></span>
<span class="line"><span>g k h j q x</span></span>
<span class="line"><span>zh ch sh r z c s</span></span></code></pre></div><p>而 26 个拉丁字母去掉 aeiou 之后也正好是 21 个。一种自然的想法就是让这 21 个非零声母与这 21 个字母一一对应，而零声母再另外想办法。本方案中，<code>zh</code>, <code>ch</code>, <code>sh</code> 这三个声母对应的声码分别为 <code>w</code>, <code>y</code>, <code>v</code>，而其他的单字母声母对应的声码就是它们自身。<strong>注意</strong>，全拼中以 <code>y</code>, <code>w</code> 开头的音节没有像一般的双拼方案一样看作是形式上的声母，而是作为零声母音节处理。</p><p>零声母音节则可以根据韵母的特点进一步分为 4 类：</p><ol><li>全拼以 <code>a, o, e</code> 开头的音节是「开口呼」韵母，其声码规定为 <code>r</code>；</li><li>全拼以 <code>w</code> 开头的音节如 <code>wa</code>, <code>wai</code>, ... 本质上是「合口呼」韵母 <code>ua</code>, <code>uai</code>, ... 的变形，其声码规定为 <code>s</code>；</li><li>全拼以 <code>y</code> 开头的音节如 <code>ya</code>, <code>yao</code>, ... 本质上是「齐齿呼」韵母 <code>ia</code>, <code>iao</code>, ... 的变形，其声码规定为 <code>f</code>；</li><li>全拼以 <code>yu</code> 开头的音节如 <code>yu</code>, <code>yuan</code>, ... 本质上是「撮口呼」韵母 <code>ü</code>, <code>üan</code>, ... 的变形，其声码规定为 <code>k</code>；</li></ol><p>总结：零声母分为四份，分别与四个非零声母共用一个声码。</p><h3 id="声码练习" tabindex="-1">声码练习 <a class="header-anchor" href="#声码练习" aria-label="Permalink to &quot;声码练习&quot;">​</a></h3>`,14)),i(l,{data:r(s),name:"bxsp-shengma"},null,8,["data"]),t[16]||(t[16]=n('<h3 id="韵码和调码" tabindex="-1">韵码和调码 <a class="header-anchor" href="#韵码和调码" aria-label="Permalink to &quot;韵码和调码&quot;">​</a></h3><p>《汉语拼音方案》中的韵母在本方案中采用最多两个编码来表示，第一码称为韵头，第二码称为韵尾。而《汉语拼音方案》中的 5 种声调（阴平 1、阳平 2、上声 3、去声 4、轻声 5）用一个编码来表示。我们将韵头、韵尾和声调都分别对应到 <code>a</code>, <code>e</code>, <code>i</code>, <code>o</code>, <code>u</code> 五个字母，具体的安排如下表所示：</p><table tabindex="0"><thead><tr><th style="text-align:center;">韵头</th><th style="text-align:center;"><strong>a</strong></th><th style="text-align:center;"><strong>o</strong></th><th style="text-align:center;"><strong>e</strong></th><th style="text-align:center;"><strong>i</strong></th><th style="text-align:center;"><strong>u</strong></th></tr></thead><tbody><tr><td style="text-align:center;"><strong>韵头</strong></td><td style="text-align:center;">ü</td><td style="text-align:center;">io, uo, üa, üe</td><td style="text-align:center;">ie, ∅</td><td style="text-align:center;">ua, er</td><td style="text-align:center;">ia, ue</td></tr><tr><td style="text-align:center;"><strong>韵尾</strong></td><td style="text-align:center;">-m</td><td style="text-align:center;">-n</td><td style="text-align:center;">-ng</td><td style="text-align:center;">-i</td><td style="text-align:center;">-u</td></tr><tr><td style="text-align:center;"><strong>声调</strong></td><td style="text-align:center;">去声 4</td><td style="text-align:center;">轻声 5</td><td style="text-align:center;">阳平 2</td><td style="text-align:center;">阴平 1</td><td style="text-align:center;">上声 3</td></tr></tbody></table><p>例如，韵母 an 由韵头 a 和韵尾 -n 组成，对应的编码就是 <code>ao</code>；而韵母 uang 由韵头 ua 和韵尾 -ng 组成，对应的编码就是 <code>ie</code>；韵母 ia 没有韵尾，所以编码就只有一码，为 <code>u</code>。</p><p>上表虽然规律性不明显，但是可以通过下面的方式辅助记忆：</p><ul><li>ia, ua, üa 这三个含 a 的韵头并排位于 <code>u</code>, <code>i</code>, <code>o</code> 键上；</li><li>i 和其键上的 er 都可能来自中古汉语的止摄，例如「你 ni3」从「尔 er3」、「腻 ni4」从「贰 er4」；</li><li>e 和其键上的 ie 都可能来自中古汉语的假摄，例如「谢 xie4」从「射 she4」</li><li>o 和其键上的 io, uo, üe 都可能来自中古汉语的宕、江摄文读，例如「哟 yo5」从「约 yue1」、「略 lüe4」与「络 luo4」谐声，并且有些方言「学」读若 xüo2，和 o, io, uo 主元音也相同</li><li>a 键上的 ü 有些字（如「鱼」）在上古汉语韵母为 /a/</li><li>a, o, e 三个键按拼音表上的顺序排列的时候，上面的韵尾 -m, -n, -ng 的发音位置正好是从前到后（唇、舌尖、舌根）</li></ul><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>综上所述，声码为 1 码、韵码为 1 或 2 码、调码为 1 码，因此一个带调音节总共用 3 或 4 码来表示，这也就是名字「冰雪四拼」的由来。下面给出几个音节的示例：</p><table tabindex="0"><thead><tr><th style="text-align:center;">音节</th><th style="text-align:center;">分解</th><th style="text-align:center;">编码</th></tr></thead><tbody><tr><td style="text-align:center;">白 bai2</td><td style="text-align:center;">b + a + i + 2</td><td style="text-align:center;">baie</td></tr><tr><td style="text-align:center;">狗 gou3</td><td style="text-align:center;">g + o + u + 3</td><td style="text-align:center;">gouu</td></tr><tr><td style="text-align:center;">声 sheng1</td><td style="text-align:center;">sh + e + ng + 1</td><td style="text-align:center;">veei</td></tr><tr><td style="text-align:center;">笔 bi3</td><td style="text-align:center;">b + i + 3</td><td style="text-align:center;">bii</td></tr><tr><td style="text-align:center;">调 diao4</td><td style="text-align:center;">d + ia + u + 4</td><td style="text-align:center;">duua</td></tr><tr><td style="text-align:center;">庄 zhuang1</td><td style="text-align:center;">zh + ua + ng + 1</td><td style="text-align:center;">wiei</td></tr><tr><td style="text-align:center;">而 er2</td><td style="text-align:center;">零开 + er + 2</td><td style="text-align:center;">rie</td></tr><tr><td style="text-align:center;">我 wo3</td><td style="text-align:center;">零合 + uo + 3</td><td style="text-align:center;">sou</td></tr><tr><td style="text-align:center;">有 you3</td><td style="text-align:center;">零齐 + io + u + 3</td><td style="text-align:center;">fouu</td></tr><tr><td style="text-align:center;">月 yue4</td><td style="text-align:center;">零撮 + üe + 4</td><td style="text-align:center;">koa</td></tr><tr><td style="text-align:center;">嗯 ng4</td><td style="text-align:center;">零开 + ∅ + ng + 4</td><td style="text-align:center;">reea</td></tr></tbody></table><p>总而言之，这种拼写方案是基于实际发音来定义的，而不是基于全拼来定义的。对于习惯于全拼的用户，有以下几个难点：</p><ol><li>韵母 <code>iou</code> 在全拼中经常缩写为 <code>iu</code>，但是本方案按照原形分析为 <code>io + u</code>，而韵头 <code>io</code> 合并到了 <code>o</code>，所以韵码是 <code>ou</code>。如「就 jiu4」的拼写是 <code>joua</code> 而不是 <code>jiua</code>，「有 you3」的拼写是 <code>fouu</code> 而不是 <code>fiuu</code>。</li><li>韵母 <code>ü, ün, üe, üan</code> 在全拼的 <code>j, q, x, y</code> 后面省略了两点，但是本方案按照原形编码，韵码分别是 <code>a, ao, o, oo</code>。</li><li>韵母 <code>ao</code>, <code>iao</code> 实际上韵尾是 <code>-u</code> 而不是 <code>-o</code>，只是因为避免手写时混淆所以改成了 <code>o</code>。例如，本方案中「好 hao3」的拼写是 <code>hauu</code>。</li><li><code>y</code> 和 <code>w</code> 常常被别的方案作为形式上的声母，但是本方案并没有这样做。附录中有这些 <code>y</code> 和 <code>w</code> 开头的<a href="#零声母音节的拼写示例">零声母音节的拼写示例</a>。</li><li>纯鼻音韵母是没有韵腹的，本方案用 ∅ 来表示，放在 e 键上。比如「嗯 ng4」的拼写是 <code>reea</code>，「哼 hng5」的拼写是 <code>heeo</code>，「呒 m2」的拼写是 <code>reae</code>。</li></ol><h3 id="韵码练习" tabindex="-1">韵码练习 <a class="header-anchor" href="#韵码练习" aria-label="Permalink to &quot;韵码练习&quot;">​</a></h3>',12)),i(l,{data:r(c),name:"bxsp-yunma"},null,8,["data"]),t[17]||(t[17]=e("h2",{id:"基本输入",tabindex:"-1"},[d("基本输入 "),e("a",{class:"header-anchor",href:"#基本输入","aria-label":'Permalink to "基本输入"'},"​")],-1)),t[18]||(t[18]=e("h3",{id:"编码",tabindex:"-1"},[d("编码 "),e("a",{class:"header-anchor",href:"#编码","aria-label":'Permalink to "编码"'},"​")],-1)),t[19]||(t[19]=e("p",null,"本方案使用统一的规则来编码所有不同长度的词：",-1)),t[20]||(t[20]=e("blockquote",null,[e("p",null,"依次取词的各个音节的声码；如果首选未命中，追加末音节的编码直至三码；如果首选仍未命中，追加首音节的编码直至三码。")],-1)),t[21]||(t[21]=e("p",null,"也就是说，把音节的前三码看作是「构词码」，每个词先打简拼然后逐渐补全末音节和首音节的完整构词码。以下针对不同长度的词分别举几个例子：",-1)),e("ol",null,[t[10]||(t[10]=n("<li>单音节词：「有」的编码为 <code>f</code>，「又」的编码为 <code>fo</code>，「由」的编码为 <code>fou</code>，「右」的编码为 <code>foua</code>；</li><li>双音节词：「你好」的编码为 <code>nh</code>，「手机」的编码为 <code>vjii</code>，「元气」的编码为 <code>kqiaoo</code>；</li><li>三音节词：「为什么」的编码为 <code>svm</code>，「最低点」的编码为 <code>zdduo</code>；</li><li>四音节词：「感同身受」的编码为 <code>gtvv</code>，「附庸风雅」的编码为 <code>ffffuu</code>；</li>",4)),e("li",null,[t[6]||(t[6]=d("以此类推，")),e("mjx-container",p,[(o(),a("svg",h,t[0]||(t[0]=[e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1)]))),t[1]||(t[1]=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"n")])],-1))]),t[7]||(t[7]=d(" 音节词的编码可能为 ")),e("mjx-container",g,[(o(),a("svg",u,t[2]||(t[2]=[e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1)]))),t[3]||(t[3]=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"n")])],-1))]),t[8]||(t[8]=d(" 码到 ")),e("mjx-container",x,[(o(),a("svg",y,t[4]||(t[4]=[n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(822.2,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(1822.4,0)"><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" style="stroke-width:3;"></path></g></g></g>',1)]))),t[5]||(t[5]=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"n"),e("mo",null,"+"),e("mn",null,"5")])],-1))]),t[9]||(t[9]=d(" 码不等。"))])]),t[22]||(t[22]=e("p",null,[d("对于大于等于五个音节的词语，进一步规定第五个声码以及之后的所有声码需要用大写字母来输入。例如「科学发展观」的编码为 "),e("code",null,"kxfwG"),d("，「哀莫大于心死」的编码为 "),e("code",null,"rmdkXS"),d("，「中华人民共和国」的编码为 "),e("code",null,"whrmGHG"),d("。")],-1)),t[23]||(t[23]=e("p",null,"由于动态调频的存在，实际输入的编码可能与上述介绍有细微的差异。",-1)),t[24]||(t[24]=e("h3",{id:"顶功",tabindex:"-1"},[d("顶功 "),e("a",{class:"header-anchor",href:"#顶功","aria-label":'Permalink to "顶功"'},"​")],-1)),t[25]||(t[25]=e("p",null,"本方案的编码具有很强的顶功特性。",-1)),e("p",null,[t[13]||(t[13]=d("对于单音节词、双音节词、三音节词来说，除了 ")),e("mjx-container",m,[(o(),a("svg",b,t[11]||(t[11]=[e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1)]))),t[12]||(t[12]=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"n")])],-1))]),t[14]||(t[14]=d(" 码时需要使用空格上屏之外，更长的编码都能在输入下一个词的首码的时候自动被顶上屏。"))]),t[26]||(t[26]=n(`<p>对于四音节词以及更长的词来说，所有的编码种类都能在输入下一个词的首码的时候自动被顶上屏。这是因为前面规定了第五个声码以及后面的声码都用大写字母输入，和下一个词的首码没有重叠。</p><h3 id="后置" tabindex="-1">后置 <a class="header-anchor" href="#后置" aria-label="Permalink to &quot;后置&quot;">​</a></h3><p>在逐码输入的过程中，如果一个字词已经在首选出现过，那么在后续输入中它将不再位于首选，这可以充分利用编码空间，并且降低重码。</p><h3 id="练习模式" tabindex="-1">练习模式 <a class="header-anchor" href="#练习模式" aria-label="Permalink to &quot;练习模式&quot;">​</a></h3><p>在使用本方案的初期，为了尽快熟悉拼写，建议切换到「整句」模式，此时「顶功」和「后置」都不起作用，可以打全每个字的前三码（也即构词码）参与组句。这样做，可以更多地熟悉韵码和调码，同时不受到顶功和后置的影响。</p><p><img src="https://images.tansongchen.com/1716841931.png" alt=""></p><h2 id="高级功能" tabindex="-1">高级功能 <a class="header-anchor" href="#高级功能" aria-label="Permalink to &quot;高级功能&quot;">​</a></h2><h3 id="固顶" tabindex="-1">固顶 <a class="header-anchor" href="#固顶" aria-label="Permalink to &quot;固顶&quot;">​</a></h3><p>一般情况下，输入各种编码时候选的排序会随着用户的使用逐渐调整，以贴合用户的使用习惯。但是，如果高频词的排序常常变动，则难以熟练掌握。因此，本方案精心设计了一些固顶词，这些词在输入对应编码时总是处于首位，可以直接顶屏或者（在不能顶屏的情况下）用空格上屏，并且这些都定义在 <code>snow_sipin.fixed.txt</code> 中，可以自由修改。</p><p>相比于声笔简整和声笔拼音，本方案设计的固顶词更多，包括了 636 个单音节词和 510 个双音节词，而且进行了更加细致的优化。这使得在一般的连续性输入文本中固顶词的总频率已经达到了 70% 以上，所以掌握固顶词可以快速提高输入方案的熟练度。这些固顶词的规律是：</p><ul><li>单音节词的一码（21 个）、二码（105 个）和三码（510 个）全部固顶；</li><li>双音节词的二码（441 个）全部固顶，而三码和四码选取了一部分（69 个）固顶；</li></ul><p>为了减小固顶词的记忆难度，本方案选取固顶词的时候采取了语义优先的策略，也就是语义相关的词往往具有相同或相关的固顶码长，记住一个往往就记住了一大片。例如，</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>...</span></span>
<span class="line"><span># 事物代词</span></span>
<span class="line"><span>wg	这个</span></span>
<span class="line"><span>ng	那个</span></span>
<span class="line"><span>nge	哪个</span></span>
<span class="line"><span>wr	这儿</span></span>
<span class="line"><span>nr	那儿</span></span>
<span class="line"><span>nri	哪儿</span></span>
<span class="line"><span>wl	这里</span></span>
<span class="line"><span>nl	那里</span></span>
<span class="line"><span>nli	哪里</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>在 <code>snow_sipin.fixed.txt</code> 中有很多像这样的语义集中的「区块」，看过一次之后就能留下比较深刻的印象。</p><p>另外，「的」和「了」两个字因为频率非常高，所以分别采用 <code>;</code> 和 <code>/</code> 键输入，不占用常规固顶词的位置。如果不喜欢这个设定，可以在固顶词文件中自定义。作为替代，分号用 <code>i</code> 输入，顿号用 <code>\\</code> 输入。</p><h3 id="无理音节" tabindex="-1">无理音节 <a class="header-anchor" href="#无理音节" aria-label="Permalink to &quot;无理音节&quot;">​</a></h3><p>在设置固顶词的时候，注意到「三」和「四」的声母都是 s，无法在「三个」、「四个」等词中保持同样的码长，而且因为「五」的声母「零合」也在 s 上，让这个问题更加严重了。另外，「日」和「二」的前三码都是 <code>ria</code>，也破坏了一些词的整齐性。</p><p>为了解决这个问题，对「三」、「五」、「日」这三个字所在的音节增加了无理音节码：</p><ul><li><code>san1</code> 这个音节也可以用 <code>heu</code> 打出来，同时也是「三」的固顶码</li><li><code>wu3</code> 这个音节也可以用 <code>gue</code> 打出来，同时也是「五」的固顶码</li><li><code>ri4</code> 这个音节也可以用 <code>rii</code> 打出来，同时也是「日」的固顶码</li></ul><p>记忆的时候，可以把它们当成是一周中的三天，用「周三 <code>wheu</code>」「周五 <code>wgue</code>」「周日 <code>wrii</code>」这三个固顶词来辅助记忆。另外，虽然这些音节的其他字也能用无理码打出来，但是并不推荐这样做，因为会干扰常规音节码的键位；如果反过来当成是改变了这三个字的读音，会更容易适应。</p><h3 id="造词" tabindex="-1">造词 <a class="header-anchor" href="#造词" aria-label="Permalink to &quot;造词&quot;">​</a></h3><p>有两种方式来造一个新词：</p><p>一是输入词的编码后，候选中会首先显示与输入编码音节数量相等的候选词，然后排在后面的是字数较少的候选词。此时可以直接通过数字键或翻页来选择字数较少的候选词，从而把词拆解成单字或较小的词依次确认上屏；这种造词方式和普通的智能拼音输入法是一样的。</p><p>但是，因为词的编码是以简拼为主，所以如果重码较多，比较难快速定位到想要的字词。这时候宜使用定位修改的方式快速把词拆解开来。按一下 1 定位到第一个音节后面，或者多按几次 1 定位到其他音节后面，补充笔画然后确认上屏。</p><h4 id="英数混输造词" tabindex="-1">英数混输造词 <a class="header-anchor" href="#英数混输造词" aria-label="Permalink to &quot;英数混输造词&quot;">​</a></h4><p>在科技文本中，经常出现混有英文、数字的词语的情况。为了让这些词也能够自动造词，本方案给所有数字和英文字母也指定了相应的音节码。其中，数字与相应中文数字相同，并且排在三码候选的第二位；英文字母的音节码是填在三码的空码内，但也有一定的规律，详见 <code>snow_sipin.fixed.txt</code>。使用这些候选，就可以轻易造出如「5G通信」这样的词：</p><p><img src="https://images.tansongchen.com/1716500410.png" alt=""></p><h3 id="略码" tabindex="-1">略码 <a class="header-anchor" href="#略码" aria-label="Permalink to &quot;略码&quot;">​</a></h3><p>略码是输入特定结构的词的办法，能够避免一些词带来的不确定性，同时明显减少输入单字的机会。以下我们用全角字母「ＡＢＣ……」来表示词中的待定成分。</p><p>由于本方案中「的」和「了」是一键字，且可以标点顶屏，所以「Ａ的」「Ａ了」「ＡＢ的」「ＡＢ了」这样的词就不必按词打，打完前面的部分之后打相应的标点键就可以了，这也是一种特殊的略码。下面是更一般的略码形式：</p><h4 id="完整重复" tabindex="-1">完整重复 <a class="header-anchor" href="#完整重复" aria-label="Permalink to &quot;完整重复&quot;">​</a></h4><p>完整重复整个词的「ＡＡ」、「ＡＢＡＢ」、「ＡＢＣＡＢＣ」……型：略码为 <code>[</code>，如「吃吃」是 <code>yi[</code>；双音节及以上的词，因为 <code>[</code> 已经被占用，所以略码为 <code>A</code>，如「尝试尝试」是 <code>yviA</code>。</p><p>对二字词来说，还有一种特殊的「ＡＡＢＢ」型，略码为 <code>O</code>，如「可可爱爱」是 <code>krO</code>。</p><h4 id="部分重复" tabindex="-1">部分重复 <a class="header-anchor" href="#部分重复" aria-label="Permalink to &quot;部分重复&quot;">​</a></h4><p>重复词的首字或末字的「ＡＡＢ」、「ＡＢＢ」、「ＡＡＢＣ」……型，略码为 <code>E</code>（重复首字）和 <code>I</code>（重复末字）：如「打打牌」是 <code>dpaiE</code>，「打打篮球」是 <code>dlqouE</code>，「睡觉觉」是 <code>vjuI</code>。</p><h4 id="插入重复" tabindex="-1">插入重复 <a class="header-anchor" href="#插入重复" aria-label="Permalink to &quot;插入重复&quot;">​</a></h4><p>「Ａ不Ａ」「Ａ一Ａ」「Ａ的Ａ」「Ａ了Ａ」「Ａ了一Ａ」「Ａ啊Ａ」「Ａ呀Ａ」型：略码分别为 <code>B</code>, <code>F</code>, <code>D</code>, <code>L</code>, <code>K</code>, <code>R</code>, <code>U</code>，如「好不好」是 <code>haB</code>；「ＡＢ不ＡＢ」以及更长的词也一样，比如「可爱不可爱」 <code>krB</code> 打出来。这里 <code>B, F, D, L, R</code> 表示的是相应插入成分的声码，便于记忆。</p><p>「Ａ着Ａ着」：略码为 <code>W</code>，表示「着」的声码</p><p>「Ａ来Ａ去」：略码为 <code>Q</code>，表示「去」的声码</p><h4 id="其余略码形式" tabindex="-1">其余略码形式 <a class="header-anchor" href="#其余略码形式" aria-label="Permalink to &quot;其余略码形式&quot;">​</a></h4><p>还有一些常见的略码形式没有安排，可以根据自己的需要来设计：</p><p>「Ａ个Ｂ」：只插入不重复，如「吃个饭」</p><p>「Ａ了ＡＢ」「Ａ不ＡＢ」「Ａ里ＡＢ」：既重复又省略了一个字，如「开不开心」</p><h3 id="以词定字" tabindex="-1">以词定字 <a class="header-anchor" href="#以词定字" aria-label="Permalink to &quot;以词定字&quot;">​</a></h3><p>虽然本方案在大多数情况下输入单字不需要选重，但是对于某些生僻字可能以词定字会更快一些。首先输入词的编码，然后按 <code>[</code> 上屏词的首字，按 <code>]</code> 上屏词的末字。</p><h3 id="辅助码" tabindex="-1">辅助码 <a class="header-anchor" href="#辅助码" aria-label="Permalink to &quot;辅助码&quot;">​</a></h3><p>辅助码是另一种输入生僻字的办法，但是需要借助字形信息。</p><h4 id="笔画辅助码" tabindex="-1">笔画辅助码 <a class="header-anchor" href="#笔画辅助码" aria-label="Permalink to &quot;笔画辅助码&quot;">​</a></h4><p>笔画辅助码是在单音节词的音节码输入完成之后直接继续输入笔画来筛选的办法，其中横竖撇捺折分别用 <code>e, i, u, o, a</code> 来表示，这与声笔系列码相同。笔画最多可以输入 4 笔。例如，输入生僻字「芫」，在音节码 kooe 输入完成之后继续加两个笔画 ei，即出现在首页。</p><p><img src="https://images.tansongchen.com/1716501142.png" alt=""></p><p>不过，因为无韵尾音节编为 3 码、而有韵尾音节编为 4 码，所以无韵尾音节在补笔画的时候也可能会和其他音节冲突。为了改进选重体验，可以打一个 <code>o</code> 补全 4 码，然后再输入笔画，这样就没有歧义了。例如，输入生僻字「翊」，在音节码 kooe 输入完成之后继续加两个笔画 oe，即出现在首页。</p><p><img src="https://images.tansongchen.com/1716501279.png" alt=""></p><p>笔画辅助码也能够顶功，在输入辅助码的过程中若所要的字为首选，继续输入下一个字的编码即可顶上屏。</p><h4 id="部首辅助码" tabindex="-1">部首辅助码 <a class="header-anchor" href="#部首辅助码" aria-label="Permalink to &quot;部首辅助码&quot;">​</a></h4><p>有些情况下，生僻字的笔顺可能不熟悉，或者不能很好地被笔画离散开，例如要输入「嶅」，但是声旁为「敖」的字笔画都一样：</p><p><img src="https://images.tansongchen.com/1716501397.png" alt=""></p><p>为此，本方案还提供了另一套部首辅助码。这个辅助码基于 GF0012-2009 国家规范，每个字有唯一指定的部首，而字的辅助码就是部首的音节码。要使用部首辅助码，需要先按一下 1，然后再输入部首的音节码：</p><p>这里「嶅」的辅助码即「山」的音节码 vaoi，只输入一码就可以将所要的字提到首选：</p><p><img src="https://images.tansongchen.com/1716502212.png" alt=""></p><p>另外，由于这种辅助码使用了 1 作为引导键，所以无韵尾音节不需要补 o 也可以使用辅助码，例如</p><p><img src="https://images.tansongchen.com/1716502543.png" alt=""></p><p>在不清楚声调的情况下，也可以打完 2 码就加辅助码：</p><p><img src="https://images.tansongchen.com/1716502659.png" alt=""></p><p>部首辅助码也能够顶功，在输入辅助码的过程中若所要的字为首选，继续输入下一个字的编码即可顶上屏。</p><h3 id="反查" tabindex="-1">反查 <a class="header-anchor" href="#反查" aria-label="Permalink to &quot;反查&quot;">​</a></h3><p>本方案提供两种反查方式：拼音反查和笔画反查</p><h4 id="拼音反查" tabindex="-1">拼音反查 <a class="header-anchor" href="#拼音反查" aria-label="Permalink to &quot;拼音反查&quot;">​</a></h4><p>虽然本方案本身就是音码方案，但是考虑到用户可能忘记某个音节的拼写，或者知道其中一个读音想查询其他的读音，所以提供拼音反查功能。拼音反查需要用 <code>a</code> 键引导。例如，输入 <code>ahe</code>，可以查询到「和」的 6 个读音对应的拼写：</p><p><img src="https://images.tansongchen.com/1716774891.png" alt=""></p><h4 id="笔画反查" tabindex="-1">笔画反查 <a class="header-anchor" href="#笔画反查" aria-label="Permalink to &quot;笔画反查&quot;">​</a></h4><p>笔画反查依赖于 Rime 自带的「五笔画 / stroke」方案。笔画反查需要用 <code>u</code> 引导，并用 <code>e, i, u, o, a</code> 来输入横竖撇捺折，这与辅助码是一样的。例如，输入 <code>ueiuoa</code>，得到</p><p><img src="https://images.tansongchen.com/1716842257.png" alt=""></p><h3 id="重复上屏" tabindex="-1">重复上屏 <a class="header-anchor" href="#重复上屏" aria-label="Permalink to &quot;重复上屏&quot;">​</a></h3><p>若已经输入过一些内容，可以用 <code>e</code> 键来调出上屏历史，然后选择上屏。例如，使用 <code>yfu</code> 输入「重复」之后，「重复」就出现在 <code>e</code> 的首选：</p><p><img src="https://images.tansongchen.com/1716775459.png" alt=""></p><h3 id="符号" tabindex="-1">符号 <a class="header-anchor" href="#符号" aria-label="Permalink to &quot;符号&quot;">​</a></h3><p><code>e</code> 键同时还承担了输入特殊符号的功能。例如，输入 <code>ea</code> 可以得到 a 的各种变体字母：</p><p><img src="https://images.tansongchen.com/1716775535.png" alt=""></p><p>具体的符号内容和 Rime 自带的 <code>symbols.yaml</code> 相同，只是引导键变成了 <code>e</code>。</p><h3 id="lua-脚本" tabindex="-1">lua 脚本 <a class="header-anchor" href="#lua-脚本" aria-label="Permalink to &quot;lua 脚本&quot;">​</a></h3><p><code>o</code> 键可以引导调用一系列 lua 脚本。例如，o 加数字可以转换中文数字：</p><p><img src="https://images.tansongchen.com/1716775852.png" alt=""></p><p>还可以计算任意 lua 表达式：</p><p><img src="https://images.tansongchen.com/1716775872.png" alt=""></p><h2 id="评测" tabindex="-1">评测 <a class="header-anchor" href="#评测" aria-label="Permalink to &quot;评测&quot;">​</a></h2><p>下列技术测试采用的词频为个人统计得到的社交媒体词频（语料来源：<a href="https://github.com/codemayq/chinese-chatbot-corpus" target="_blank" rel="noreferrer">GitHub 仓库</a>）经 jieba 默认词典分词得到的词频。</p><h3 id="离散能力" tabindex="-1">离散能力 <a class="header-anchor" href="#离散能力" aria-label="Permalink to &quot;离散能力&quot;">​</a></h3><p>以单音节词最长编码为 4 码（无韵尾音节补 o），统计《通用规范汉字表》中的 8105 字共 8773 字音，得到如下分布：</p><table tabindex="0"><thead><tr><th>单音节词</th><th>长度</th><th>字音数</th><th>频率</th></tr></thead><tbody><tr><td>一键</td><td>1</td><td>6</td><td>17.01%</td></tr><tr><td>二键</td><td>2</td><td>170</td><td>62.91%</td></tr><tr><td>三键</td><td>3</td><td>510</td><td>12.69%</td></tr><tr><td>四键</td><td>4</td><td>1123</td><td>5.57%</td></tr><tr><td>页内选重</td><td>5</td><td>3524</td><td>1.74%</td></tr><tr><td>翻页选重</td><td>6</td><td>3445</td><td>0.07%</td></tr><tr><td>总和</td><td></td><td>8773</td><td></td></tr></tbody></table><p>可见，即使不使用辅助码，单音节词的选重率也不到 2%，翻页率不到 0.1%。一键、两键占比 80%，前三键占比 92%。</p><p>以多音节词最长编码为 6 码，统计雾凇拼音词库中的词频前六万词，得到如下分布：</p><table tabindex="0"><thead><tr><th>多音节词</th><th>长度</th><th>词音数</th><th>频率</th></tr></thead><tbody><tr><td>三键</td><td>3</td><td>2640</td><td>58.25%</td></tr><tr><td>四键</td><td>4</td><td>23758</td><td>26.18%</td></tr><tr><td>五键</td><td>5</td><td>17167</td><td>11.40%</td></tr><tr><td>六键</td><td>6</td><td>12329</td><td>3.63%</td></tr><tr><td>页内选重</td><td>7</td><td>4092</td><td>0.54%</td></tr><tr><td>翻页选重</td><td>8</td><td>14</td><td>0.00%</td></tr><tr><td>总和</td><td></td><td>60000</td><td></td></tr></tbody></table><h3 id="手感" tabindex="-1">手感 <a class="header-anchor" href="#手感" aria-label="Permalink to &quot;手感&quot;">​</a></h3><p>单音节词当量为 1.286，多音节词当量为 1.333，总当量为 1.318。用指分布如图所示。除 a 键使用频率较高外，其余均较为合理。</p><p><img src="https://images.tansongchen.com/1716519097.png" alt=""></p><h2 id="附录" tabindex="-1">附录 <a class="header-anchor" href="#附录" aria-label="Permalink to &quot;附录&quot;">​</a></h2><h3 id="零声母音节的拼写示例" tabindex="-1">零声母音节的拼写示例 <a class="header-anchor" href="#零声母音节的拼写示例" aria-label="Permalink to &quot;零声母音节的拼写示例&quot;">​</a></h3><p>这个表格主要是为了让大家理解本方案对零声母的处理方式，需要注重观察规律，请勿死记硬背。</p><table tabindex="0"><thead><tr><th>音节</th><th style="text-align:center;">声母</th><th style="text-align:center;">韵头</th><th style="text-align:center;">韵尾</th><th>拼写</th></tr></thead><tbody><tr><td>挖 wa</td><td style="text-align:center;">零合</td><td style="text-align:center;">ua</td><td style="text-align:center;">无</td><td>si</td></tr><tr><td>歪 wai</td><td style="text-align:center;">零合</td><td style="text-align:center;">ua</td><td style="text-align:center;">i</td><td>sii</td></tr><tr><td>弯 wan</td><td style="text-align:center;">零合</td><td style="text-align:center;">ua</td><td style="text-align:center;">n</td><td>sio</td></tr><tr><td>汪 wang</td><td style="text-align:center;">零合</td><td style="text-align:center;">ua</td><td style="text-align:center;">ng</td><td>sie</td></tr><tr><td>微 wei</td><td style="text-align:center;">零合</td><td style="text-align:center;">ue</td><td style="text-align:center;">i</td><td>sui</td></tr><tr><td>温 wen</td><td style="text-align:center;">零合</td><td style="text-align:center;">ue</td><td style="text-align:center;">n</td><td>suo</td></tr><tr><td>翁 weng</td><td style="text-align:center;">零合</td><td style="text-align:center;">ue</td><td style="text-align:center;">ng</td><td>sue</td></tr><tr><td>窝 wo</td><td style="text-align:center;">零合</td><td style="text-align:center;">uo</td><td style="text-align:center;">无</td><td>so</td></tr><tr><td>乌 wu</td><td style="text-align:center;">零合</td><td style="text-align:center;">u</td><td style="text-align:center;">无</td><td>su</td></tr><tr><td>压 ya</td><td style="text-align:center;">零齐</td><td style="text-align:center;">ia</td><td style="text-align:center;">无</td><td>fu</td></tr><tr><td>腰 yao</td><td style="text-align:center;">零齐</td><td style="text-align:center;">ia</td><td style="text-align:center;">u</td><td>fuu</td></tr><tr><td>烟 yan</td><td style="text-align:center;">零齐</td><td style="text-align:center;">ia</td><td style="text-align:center;">n</td><td>fuo</td></tr><tr><td>央 yang</td><td style="text-align:center;">零齐</td><td style="text-align:center;">ia</td><td style="text-align:center;">ng</td><td>fue</td></tr><tr><td>椰 ye</td><td style="text-align:center;">零齐</td><td style="text-align:center;">ie</td><td style="text-align:center;">无</td><td>fe</td></tr><tr><td>哟 yo</td><td style="text-align:center;">零齐</td><td style="text-align:center;">io</td><td style="text-align:center;">无</td><td>fo</td></tr><tr><td>优 you</td><td style="text-align:center;">零齐</td><td style="text-align:center;">io</td><td style="text-align:center;">u</td><td>fou</td></tr><tr><td>庸 yong</td><td style="text-align:center;">零齐</td><td style="text-align:center;">io</td><td style="text-align:center;">ng</td><td>foe</td></tr><tr><td>一 yi</td><td style="text-align:center;">零齐</td><td style="text-align:center;">i</td><td style="text-align:center;">无</td><td>fi</td></tr><tr><td>因 yin</td><td style="text-align:center;">零齐</td><td style="text-align:center;">i</td><td style="text-align:center;">n</td><td>fio</td></tr><tr><td>应 ying</td><td style="text-align:center;">零齐</td><td style="text-align:center;">i</td><td style="text-align:center;">ng</td><td>fie</td></tr><tr><td>迂 yu</td><td style="text-align:center;">零撮</td><td style="text-align:center;">ü</td><td style="text-align:center;">无</td><td>ka</td></tr><tr><td>晕 yun</td><td style="text-align:center;">零撮</td><td style="text-align:center;">ü</td><td style="text-align:center;">n</td><td>kao</td></tr><tr><td>渊 yuan</td><td style="text-align:center;">零撮</td><td style="text-align:center;">üa</td><td style="text-align:center;">n</td><td>koo</td></tr><tr><td>约 yue</td><td style="text-align:center;">零撮</td><td style="text-align:center;">üe</td><td style="text-align:center;">无</td><td>ko</td></tr></tbody></table><h3 id="非成字部首的读音" tabindex="-1">非成字部首的读音 <a class="header-anchor" href="#非成字部首的读音" aria-label="Permalink to &quot;非成字部首的读音&quot;">​</a></h3><table tabindex="0"><thead><tr><th>部首</th><th>读音</th></tr></thead><tbody><tr><td>一</td><td>heng2</td></tr><tr><td>丨</td><td>shu4</td></tr><tr><td>丿</td><td>pie3</td></tr><tr><td>丶</td><td>dian3</td></tr><tr><td>乛</td><td>zhe2</td></tr><tr><td>匚</td><td>fang1</td></tr><tr><td>冂</td><td>jiong1</td></tr><tr><td>勹</td><td>bao1</td></tr><tr><td>亠</td><td>tou2</td></tr><tr><td>冫</td><td>bing1</td></tr><tr><td>冖</td><td>mi4</td></tr><tr><td>凵</td><td>kan3</td></tr><tr><td>卩</td><td>jie2</td></tr><tr><td>厶</td><td>si1</td></tr><tr><td>廴</td><td>yin3</td></tr><tr><td>艹</td><td>cao3</td></tr><tr><td>廾</td><td>gong3</td></tr><tr><td>囗</td><td>wei2</td></tr><tr><td>彡</td><td>shan1</td></tr><tr><td>夂</td><td>zhi3</td></tr><tr><td>丬</td><td>pan2</td></tr><tr><td>宀</td><td>mian2</td></tr><tr><td>辶</td><td>chuo4</td></tr><tr><td>彐</td><td>ji4</td></tr><tr><td>屮</td><td>che4</td></tr><tr><td>巛</td><td>chuan1</td></tr><tr><td>攵</td><td>pu1</td></tr><tr><td>罒</td><td>wang3</td></tr><tr><td>疒</td><td>ne4</td></tr><tr><td>疋</td><td>ya3</td></tr><tr><td>癶</td><td>bo1</td></tr><tr><td>虍</td><td>hu1</td></tr><tr><td>纟</td><td>si1</td></tr><tr><td>龺</td><td>zhuo2</td></tr><tr><td>髟</td><td>biao1</td></tr><tr><td>鬥</td><td>dou4</td></tr></tbody></table>`,101))]))}});export{M as __pageData,L as default};
