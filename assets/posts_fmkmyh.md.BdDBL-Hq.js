import{_ as s,c as a,o as n,a5 as p,gC as e,gD as i}from"./chunks/framework.Bby5OirH.js";const f=JSON.parse('{"title":"飞码（X）和快码（X）的优化实验","description":"","frontmatter":{"title":"飞码（X）和快码（X）的优化实验","date":"2019-08-15T13:29:34.000Z","tags":["飞码","快码","飞码X","快码X","优化"]},"headers":[],"relativePath":"posts/fmkmyh.md","filePath":"posts/fmkmyh.md"}'),l={name:"posts/fmkmyh.md"},t=p(`<h2 id="存在的问题" tabindex="-1">存在的问题 <a class="header-anchor" href="#存在的问题" aria-label="Permalink to &quot;存在的问题&quot;">​</a></h2><p>在8.00的飞码（X）和快码（X）中，sbb和sbbb只是简单地放了声笔字，实际上几乎没投入使用，非常浪费。特别是在新增的飞码X和快码X中，因为没有sbbs型的二字词，sbb是只需要三键的短码空间，不好好利用的话，实在可惜。同时，飞码（X）中有少量spb短码空间是空闲的，而在快码（X）中存在着不少的sy和大量的syb短码空闲空间。</p><p>RIME版飞码（X）和快码（X）面临的另一个问题是，105个sb型简码字没有原生版那样的提示，初学者必须死记。</p><h2 id="短码空间的利用" tabindex="-1">短码空间的利用 <a class="header-anchor" href="#短码空间的利用" aria-label="Permalink to &quot;短码空间的利用&quot;">​</a></h2><h3 id="飞码-x" tabindex="-1">飞码（X） <a class="header-anchor" href="#飞码-x" aria-label="Permalink to &quot;飞码（X）&quot;">​</a></h3><p>首先，利用spb空闲空间。从声笔简码的二字词中抽出高频的填入该空间，脚本如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>select zici = rtrim(zici), bianma = left(bianma,3), chupin = case chupin when -1 then 0 else chupin end from sbjerz</span></span>
<span class="line"><span>where changdu = 3 and left(bianma,3) not in (</span></span>
<span class="line"><span>select bianma = left(a.bianma,3)</span></span>
<span class="line"><span>from spdanz a</span></span>
<span class="line"><span>right join sbjerz b on left(a.bianma,3) = left(b.bianma,3)</span></span>
<span class="line"><span>where a.changdu = 3 and b.changdu = 3)</span></span>
<span class="line"><span>order by chupin desc</span></span></code></pre></div><p>一共抽取了67个ssb型的二字词，罗列其中的前10条如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>那个	ngu	169294</span></span>
<span class="line"><span>儿子	vza	61768</span></span>
<span class="line"><span>任务	rwu	57310</span></span>
<span class="line"><span>不好	bha	54085</span></span>
<span class="line"><span>放心	fxo	46543</span></span>
<span class="line"><span>若是	rsi	39942</span></span>
<span class="line"><span>空中	kzi	25849</span></span>
<span class="line"><span>吩咐	ffi	25347</span></span>
<span class="line"><span>内心	nxo	25231</span></span>
<span class="line"><span>暗中	vzi	23181</span></span></code></pre></div><p>其次，利用sbb空间。对于飞码和飞码X，利用的方式是不一样的。</p><p>对于飞码，在sbb上安排非强制性二字词简码，其取码规则为s1b1b1，SQL脚本如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>select text=rtrim(zici), code=left(bianma,3)</span></span>
<span class="line"><span>from spciz</span></span>
<span class="line"><span>where xuhao in (</span></span>
<span class="line"><span>select xuhao from (</span></span>
<span class="line"><span>select bianma=left(bianma,3), xuhao=min(xuhao) </span></span>
<span class="line"><span>from spciz</span></span>
<span class="line"><span>where len(rtrim(zici)) = 2</span></span>
<span class="line"><span>group by left(bianma,3)</span></span>
<span class="line"><span>) tmp)</span></span></code></pre></div><p>一共抽取了451个二字词，罗列其中的前10条如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>告诉	gue</span></span>
<span class="line"><span>声音	sei</span></span>
<span class="line"><span>眼睛	yia</span></span>
<span class="line"><span>一切	yee</span></span>
<span class="line"><span>改革	gae</span></span>
<span class="line"><span>朋友	pua</span></span>
<span class="line"><span>研究	yeu</span></span>
<span class="line"><span>代表	dui</span></span>
<span class="line"><span>不禁	beu</span></span>
<span class="line"><span>支持	zei</span></span></code></pre></div><p>对于飞码X，在为sbb空间安排二字词时，不能包含已经为其抽取的spb型二字词，脚本如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>select zici = rtrim(zici), bianma = left(bianma,1) + substring(bianma,3,2), </span></span>
<span class="line"><span>chupin = case chupin when -1 then 0 else chupin end from sbjerz</span></span>
<span class="line"><span>where xuhao in (</span></span>
<span class="line"><span>select xuhao from</span></span>
<span class="line"><span>(select bianma = left(bianma,1) + substring(bianma,3,2), xuhao = min(xuhao) from sbjerz</span></span>
<span class="line"><span>where rtrim(zici) not in (</span></span>
<span class="line"><span>select zici from (</span></span>
<span class="line"><span>select zici = rtrim(zici), bianma = left(bianma,3), </span></span>
<span class="line"><span>chupin = case chupin when -1 then 0 else chupin end from sbjerz</span></span>
<span class="line"><span>where changdu = 3 and left(bianma,3) not in (</span></span>
<span class="line"><span>select bianma = left(a.bianma,3)</span></span>
<span class="line"><span>from spdanz a</span></span>
<span class="line"><span>right join sbjerz b on left(a.bianma,3) = left(b.bianma,3)</span></span>
<span class="line"><span>where a.changdu = 3 and b.changdu = 3)</span></span>
<span class="line"><span>) tmp)</span></span>
<span class="line"><span>group by left(bianma,1) + substring(bianma,3,2)) tmp2)</span></span></code></pre></div><p>一共抽取了525个s1b2b2型的二字词，罗列其中的前10条如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>一个	yuo	997773</span></span>
<span class="line"><span>没有	meu	826617</span></span>
<span class="line"><span>我们	wui	812417</span></span>
<span class="line"><span>他们	tui	791018</span></span>
<span class="line"><span>什么	sua	742524</span></span>
<span class="line"><span>自己	zae	741012</span></span>
<span class="line"><span>知道	zou	574771</span></span>
<span class="line"><span>可以	kao	432546</span></span>
<span class="line"><span>这个	zuo	404217</span></span>
<span class="line"><span>就是	jia	376685</span></span></code></pre></div><h3 id="快码-x" tabindex="-1">快码（X） <a class="header-anchor" href="#快码-x" aria-label="Permalink to &quot;快码（X）&quot;">​</a></h3><p>首先，利用sy空闲空间。从声笔简码的二字词中抽出高频的填入该空间，脚本如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>select zici = rtrim(zici), bianma = left(bianma,2), chupin = case chupin when -1 then 0 else chupin end from sbjerz</span></span>
<span class="line"><span>where changdu = 2 and left(bianma,2) not in (</span></span>
<span class="line"><span>select bianma = left(a.bianma,2)</span></span>
<span class="line"><span>from ybdanz a</span></span>
<span class="line"><span>right join sbjerz b on left(a.bianma,2) = left(b.bianma,2)</span></span>
<span class="line"><span>where a.changdu = 2 and b.changdu = 2)</span></span></code></pre></div><p>一共抽取了95个ss型的二字词，罗列其中的前10条如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>可以	ky	432546</span></span>
<span class="line"><span>已经	yj	325164</span></span>
<span class="line"><span>发展	fz	323016</span></span>
<span class="line"><span>问题	wt	279209</span></span>
<span class="line"><span>一定	yd	201525</span></span>
<span class="line"><span>可能	kn	185841</span></span>
<span class="line"><span>今天	jt	173941</span></span>
<span class="line"><span>觉得	jd	172314</span></span>
<span class="line"><span>姑娘	gn	168226</span></span>
<span class="line"><span>一些	yx	165456</span></span></code></pre></div><p>第二，利用syb空闲空间。从声笔简码的二字词中抽出高频的填入该空间，脚本如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>select zici = rtrim(zici), bianma = left(bianma,3), chupin = case chupin when -1 then 0 else chupin end from sbjerz</span></span>
<span class="line"><span>where changdu = 3 and left(bianma,3) not in (</span></span>
<span class="line"><span>select bianma = left(a.bianma,3)</span></span>
<span class="line"><span>from ybdanz a</span></span>
<span class="line"><span>right join sbjerz b on left(a.bianma,3) = left(b.bianma,3)</span></span>
<span class="line"><span>where a.changdu = 3 and b.changdu = 3)</span></span>
<span class="line"><span>order by chupin desc</span></span></code></pre></div><p>一共抽取了587个ssb型的二字词，罗列其中的前10条如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>一个	ygu	997773</span></span>
<span class="line"><span>我们	wmu	812417</span></span>
<span class="line"><span>起来	qle	330495</span></span>
<span class="line"><span>还有	hye	191450</span></span>
<span class="line"><span>一点	ydi	189033</span></span>
<span class="line"><span>而且	vqi	176585</span></span>
<span class="line"><span>一下	yxe	167905</span></span>
<span class="line"><span>之间	zjo	139129</span></span>
<span class="line"><span>下来	xle	134533</span></span>
<span class="line"><span>眼睛	yji	133992</span></span></code></pre></div><p>第三，利用sbb空间。对于快码和快码X，利用的方式是不一样的。</p><p>对于快码，在sbb上安排非强制性二字词简码，其取码规则为s1b1b1，SQL脚本如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>select text=rtrim(zici), code=left(bianma,3)</span></span>
<span class="line"><span>from ybciz</span></span>
<span class="line"><span>where xuhao in (</span></span>
<span class="line"><span>select xuhao from (</span></span>
<span class="line"><span>select bianma=left(bianma,3), xuhao=min(xuhao) </span></span>
<span class="line"><span>from ybciz</span></span>
<span class="line"><span>where len(rtrim(zici)) = 2</span></span>
<span class="line"><span>group by left(bianma,3)</span></span>
<span class="line"><span>) tmp)</span></span></code></pre></div><p>一共抽取了454个二字词，罗列其中的前10条如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>经济	jaa</span></span>
<span class="line"><span>社会	soa</span></span>
<span class="line"><span>世界	sei</span></span>
<span class="line"><span>市场	soe</span></span>
<span class="line"><span>开始	kee</span></span>
<span class="line"><span>技术	jei</span></span>
<span class="line"><span>希望	xuo</span></span>
<span class="line"><span>表示	bee</span></span>
<span class="line"><span>改革	gae</span></span>
<span class="line"><span>国际	gia</span></span></code></pre></div><p>对于快码X，在为sbb空间安排二字词时，不能包含已经为其抽取的sy和syb型二字词，脚本如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>select zici = rtrim(zici), bianma = left(bianma,1) + substring(bianma,3,2),</span></span>
<span class="line"><span>chupin = case chupin when -1 then 0 else chupin end from sbjerz</span></span>
<span class="line"><span>where xuhao in (</span></span>
<span class="line"><span>select xuhao from</span></span>
<span class="line"><span>(select bianma = left(bianma,1) + substring(bianma,3,2), xuhao = min(xuhao) from sbjerz</span></span>
<span class="line"><span>where rtrim(zici) not in (</span></span>
<span class="line"><span>select zici from (</span></span>
<span class="line"><span>select zici = rtrim(zici), bianma = left(bianma,2),</span></span>
<span class="line"><span>chupin = case chupin when -1 then 0 else chupin end from sbjerz</span></span>
<span class="line"><span>where changdu = 2 and left(bianma,2) not in (</span></span>
<span class="line"><span>select bianma = left(a.bianma,2)</span></span>
<span class="line"><span>from ybdanz a</span></span>
<span class="line"><span>right join sbjerz b on left(a.bianma,2) = left(b.bianma,2)</span></span>
<span class="line"><span>where a.changdu = 2 and b.changdu = 2)</span></span>
<span class="line"><span>union</span></span>
<span class="line"><span>select zici = rtrim(zici), bianma = left(bianma,3),</span></span>
<span class="line"><span>chupin = case chupin when -1 then 0 else chupin end from sbjerz</span></span>
<span class="line"><span>where changdu = 3 and left(bianma,3) not in (</span></span>
<span class="line"><span>select bianma = left(a.bianma,3)</span></span>
<span class="line"><span>from ybdanz a</span></span>
<span class="line"><span>right join sbjerz b on left(a.bianma,3) = left(b.bianma,3)</span></span>
<span class="line"><span>where a.changdu = 3 and b.changdu = 3)</span></span>
<span class="line"><span>) tmp)</span></span>
<span class="line"><span>group by left(bianma,1) + substring(bianma,3,2)) tmp2)</span></span></code></pre></div><p>一共抽取了525个s1b2b2型的二字词，罗列其中的前10条如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>没有	meu	826617</span></span>
<span class="line"><span>他们	tui	791018</span></span>
<span class="line"><span>什么	sua	742524</span></span>
<span class="line"><span>自己	zae	741012</span></span>
<span class="line"><span>知道	zou	574771</span></span>
<span class="line"><span>这个	zuo	404217</span></span>
<span class="line"><span>就是	jia	376685</span></span>
<span class="line"><span>中国	zia	336314</span></span>
<span class="line"><span>这样	zei	328523</span></span>
<span class="line"><span>因为	you	317518</span></span></code></pre></div><h3 id="公共" tabindex="-1">公共 <a class="header-anchor" href="#公共" aria-label="Permalink to &quot;公共&quot;">​</a></h3><p>无论是飞码（X）还是快码（X），都还要利用sbbbx空间。将sbbb空间用于声笔单字输入，只有1、2级强制简码，重码字用aeiou来选择。声笔单字供用户在不知道偏旁部首或韵母时使用。‸</p><p>对于非X型的，脚本如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>select zici = rtrim(zici), bianma = left(bianma,changdu),</span></span>
<span class="line"><span>chupin, stem = left(bianma,4) + upper(left(bianma,1))</span></span>
<span class="line"><span>from sbdanz where changdu &lt;= 2</span></span>
<span class="line"><span>union</span></span>
<span class="line"><span>select zici = rtrim(zici), bianma = left(bianma,4),</span></span>
<span class="line"><span>chupin = case chupin when -1 then 0 else chupin end,</span></span>
<span class="line"><span>stem = left(bianma,4) + upper(left(bianma,1))</span></span>
<span class="line"><span>from sbdanz where changdu &gt; 2</span></span>
<span class="line"><span>order by chupin desc</span></span></code></pre></div><p>对于X型的，由于正码的单字码表中已经包含了1、2级简码，并且不再需要构词码，所以脚本如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>select zici = rtrim(zici), bianma = left(bianma,4),</span></span>
<span class="line"><span>chupin = case chupin when -1 then 0 else chupin end</span></span>
<span class="line"><span>from sbdanz where changdu &gt; 2</span></span></code></pre></div><h2 id="_105个sb简码字的提示" tabindex="-1">105个sb简码字的提示 <a class="header-anchor" href="#_105个sb简码字的提示" aria-label="Permalink to &quot;105个sb简码字的提示&quot;">​</a></h2><p>制作一个滤镜供飞码（X）和快码（X）使用，包括sb105.txt和sb105.json，放在Rime的OpenCC子文件夹中。</p><p>sb105.txt的内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>不	&amp;nbsp边a&amp;nbsp把e&amp;nbsp别i&amp;nbsp部o&amp;nbsp白u&amp;nbsp</span></span>
<span class="line"><span>出	&amp;nbsp除a&amp;nbsp成e&amp;nbsp此i&amp;nbsp次o&amp;nbsp从u&amp;nbsp</span></span>
<span class="line"><span>的	&amp;nbsp对a&amp;nbsp大e&amp;nbsp当i&amp;nbsp道o&amp;nbsp得u&amp;nbsp</span></span>
<span class="line"><span>发	&amp;nbsp飞a&amp;nbsp夫e&amp;nbsp非i&amp;nbsp方o&amp;nbsp分u&amp;nbsp</span></span>
<span class="line"><span>个	&amp;nbsp给a&amp;nbsp过e&amp;nbsp国i&amp;nbsp高o&amp;nbsp公u&amp;nbsp</span></span>
<span class="line"><span>和	&amp;nbsp好a&amp;nbsp还e&amp;nbsp回i&amp;nbsp话o&amp;nbsp会u&amp;nbsp</span></span>
<span class="line"><span>就	&amp;nbsp经a&amp;nbsp进e&amp;nbsp见i&amp;nbsp家o&amp;nbsp几u&amp;nbsp</span></span>
<span class="line"><span>可	&amp;nbsp孔a&amp;nbsp开e&amp;nbsp口i&amp;nbsp快o&amp;nbsp看u&amp;nbsp</span></span>
<span class="line"><span>了	&amp;nbsp力a&amp;nbsp来e&amp;nbsp里i&amp;nbsp立o&amp;nbsp利u&amp;nbsp</span></span>
<span class="line"><span>们	&amp;nbsp民a&amp;nbsp面e&amp;nbsp明i&amp;nbsp没o&amp;nbsp么u&amp;nbsp</span></span>
<span class="line"><span>你	&amp;nbsp那a&amp;nbsp南e&amp;nbsp内i&amp;nbsp农o&amp;nbsp年u&amp;nbsp</span></span>
<span class="line"><span>平	&amp;nbsp皮a&amp;nbsp破e&amp;nbsp品i&amp;nbsp怕o&amp;nbsp片u&amp;nbsp</span></span>
<span class="line"><span>去	&amp;nbsp强a&amp;nbsp起e&amp;nbsp且i&amp;nbsp前o&amp;nbsp全u&amp;nbsp</span></span>
<span class="line"><span>人	&amp;nbsp如a&amp;nbsp若e&amp;nbsp日i&amp;nbsp让o&amp;nbsp然u&amp;nbsp</span></span>
<span class="line"><span>是	&amp;nbsp双a&amp;nbsp事e&amp;nbsp上i&amp;nbsp说o&amp;nbsp手u&amp;nbsp</span></span>
<span class="line"><span>他	&amp;nbsp她a&amp;nbsp天e&amp;nbsp同i&amp;nbsp头o&amp;nbsp体u&amp;nbsp</span></span>
<span class="line"><span>而	&amp;nbsp阿a&amp;nbsp二e&amp;nbsp暗i&amp;nbsp安o&amp;nbsp儿u&amp;nbsp</span></span>
<span class="line"><span>我	&amp;nbsp维a&amp;nbsp无e&amp;nbsp晚i&amp;nbsp为o&amp;nbsp外u&amp;nbsp</span></span>
<span class="line"><span>下	&amp;nbsp线a&amp;nbsp想e&amp;nbsp小i&amp;nbsp心o&amp;nbsp笑u&amp;nbsp</span></span>
<span class="line"><span>一	&amp;nbsp也a&amp;nbsp有e&amp;nbsp眼i&amp;nbsp意o&amp;nbsp用u&amp;nbsp</span></span>
<span class="line"><span>在	&amp;nbsp子a&amp;nbsp正e&amp;nbsp中i&amp;nbsp着o&amp;nbsp自u&amp;nbsp</span></span></code></pre></div><p>sb105.json的内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;sb105&quot;,</span></span>
<span class="line"><span>  &quot;segmentation&quot;: {</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;mmseg&quot;,</span></span>
<span class="line"><span>    &quot;dict&quot;: {</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span>      &quot;file&quot;: &quot;sb105.txt&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;conversion_chain&quot;: [{</span></span>
<span class="line"><span>    &quot;dict&quot;: {</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span>      &quot;file&quot;: &quot;sb105.txt&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>另外，再创建为飞码、飞码X、快码和快码X分别创建一个配置文件：sbfm.custom.yaml, sbfmx.custom.yaml, sbkm.custom.yaml和sbkmx.custom.yaml，放在Rime文件夹中。这个几个文件的内容完全一样，如下所示。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>patch:</span></span>
<span class="line"><span>  &quot;switches/@next&quot;: </span></span>
<span class="line"><span>    name: sb105</span></span>
<span class="line"><span>    reset: 1 #初始状态,0关1开</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &quot;engine/filters/@next&quot;: simplifier@sb105</span></span>
<span class="line"><span>  sb105:</span></span>
<span class="line"><span>    opencc_config: sb105.json</span></span>
<span class="line"><span>    option_name: sb105</span></span>
<span class="line"><span>    show_in_comment: true #开启编码滤镜</span></span>
<span class="line"><span>    comment_format:  #编码滤镜正则处理</span></span>
<span class="line"><span>      - &quot;xform/&lt;br&gt;/\\n/&quot; #编码滤镜内容换行</span></span>
<span class="line"><span>      - &quot;xform/&amp;nbsp/ /&quot; #编码滤镜内容显示空格</span></span>
<span class="line"><span>    tags:</span></span>
<span class="line"><span>      - abc</span></span>
<span class="line"><span>    tips: char #none无注释,char单字注释,all全部注释</span></span></code></pre></div><p>完成以上步骤后，重新部署就可以生效。</p><p>在计算机上的声笔字提示效果如下：</p><p><img src="`+e+'" alt="电脑上的声笔字提示"></p><p>在手机上的声笔字提示效果效果如下：</p><p><img src="'+i+'" alt="电脑上的声笔字提示"></p><h2 id="实验结果" tabindex="-1">实验结果 <a class="header-anchor" href="#实验结果" aria-label="Permalink to &quot;实验结果&quot;">​</a></h2><p>使用发现，开滤镜提示sb字后，导致一简字不能参与造词。还没有找到解决办法，只能暂时放弃滤镜。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>保留码表优化结果，暂时放弃用滤镜提示声笔字的功能。</p>',59),c=[t];function b(o,m,h,u,r,d){return n(),a("div",null,c)}const v=s(l,[["render",b]]);export{f as __pageData,v as default};
