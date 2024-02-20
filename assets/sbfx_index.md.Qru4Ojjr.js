import{_ as a,c as e,o as p,V as o,b3 as s,b4 as i,b5 as c,b6 as t,b7 as d,b8 as r,b9 as l,ba as m,bb as _,bc as b,bd as h,be as n,bf as g,bg as u,bh as f,bi as q,bj as x,bk as k,bl as y,bm as P,bn as j,bo as z,bp as T,bq as v,br as A,bs as S,bt as w,bu as C,bv as B,bw as E,bx as V,by as N,bz as $,bA as D,bB as F,bC as I}from"./chunks/framework.Ed2L1a2e.js";const U=JSON.parse('{"title":"声笔飞讯","description":"","frontmatter":{"title":"声笔飞讯","date":"2023-03-08T16:43:31.000Z","tags":["声笔","飞讯","顶功"],"typora-root-url":"..\\\\..\\\\public"},"headers":[],"relativePath":"sbfx/index.md","filePath":"docs/sbfx/index.md"}'),R={name:"sbfx/index.md"},Z=o('<h2 id="_1-飞讯概述" tabindex="-1">1 飞讯概述 <a class="header-anchor" href="#_1-飞讯概述" aria-label="Permalink to &quot;1 飞讯概述&quot;">​</a></h2><p>声笔飞讯，简称飞讯，是从著名顶功输入方案声笔飞码衍生出来的主单顶功方案，随着其词组能力的不断加强，几乎到达了字词双全的地步，对用户越来越有吸引力，特别是对追求极致效率的人更是如此。所以也自然而然地成长为一个独树一帜的方案，有太多的内容需要特别地讲解，值得独立出来专门进行论述了。本文是图文教程，视频教程请移步<a href="https://www.bilibili.com/video/BV1zN4y1x7o7/" target="_blank" rel="noreferrer">声笔输入法边播边讲231231</a>，可以参照学习。</p><p>飞讯一直就具有出色的单字能力，它在纯单盲打方面大放异彩，以超短的平均码长取得极高的输入效率，适用于冗余度小的复杂文本，如文言文、散文和诗赋等。另一方面，它可以巨型的词库来轻松和高效地应对具有大量非单字词汇的高冗余度文本，如政经、科技和医学类文章。在增强模式下，通过使用大量简词、静态词，可以进一步缩短码长和提高击键，通过动态四二顶又能缩短其它词组的码长。无论哪种情况，飞讯都能很好地适配。不管是日常工作学习使用，还是参加打字比赛，飞讯都能完美胜任。</p><p>由于飞讯的单字模式与飞单完全相同，同时对于单字派来说，可能只关心和使用飞单，所以单字模式是独立成章进行讲解的。若您是初学者，请务必先了解和掌握<a href="./../sbfd/">声笔飞单</a>，然后再回过头来继续学习下面的词组模式。</p><h2 id="_2-词组模式" tabindex="-1">2 词组模式 <a class="header-anchor" href="#_2-词组模式" aria-label="Permalink to &quot;2 词组模式&quot;">​</a></h2><p>我们先用几节的篇幅详细讲解常规的词组模式，然后再用一节来讲解增强词组模式时多出的内容。</p><h3 id="_2-1-单字输入" tabindex="-1">2.1 单字输入 <a class="header-anchor" href="#_2-1-单字输入" aria-label="Permalink to &quot;2.1 单字输入&quot;">​</a></h3><p>在词组模式下，飞讯单字输入的码长与在单字模式下完全一样，但有一个非常重要的区别：飞讯的二简字顶屏会延迟一码（四二顶）或两码（五二顶），也即采用了所谓的延迟顶。根据后续字的类型不同，延迟顶分为三种情况。</p><p>第一种情况是，在后接一简字时，需要与一简字一起用空格上屏或者用标点顶屏。例如，「好的」用空格上屏时的用键为<code>had_</code>，而「即是」用逗号顶屏时的用键为<code>jgs,</code>。也就是说，在输入第二字的首码时，并不会像在单字模式下那样立刻就将首字顶上屏幕。</p><p><img src="'+s+'" alt="image-20230805152639610"></p><p><img src="'+i+'" alt="image-20230805152659237"></p><p>第二种情况是，在后接非一简字和非声笔字时，采用了延迟一码的四二顶，用第四码顶前两码的二简字上屏。例如，「爱情」输入前三码<code>vzq</code>后，「爱」字并不会上屏，而需要在输入第四码（即「情」的第二码）后，「爱」字才被顶上屏幕，留下「情」字。</p><p><img src="'+c+'" alt="image-20230805152731261"></p><p><img src="'+t+'" alt="image-20230310112740159"></p><p>第三种情况是，在后接声笔字时，采用了延迟两码的五二顶，用第五码顶前两码的二简字上屏。例如，「好事」一词，在输入了<code>hase</code>之后，「好事」并不会上屏，还需要有后续的输入才能被顶上屏幕。假设后面要接着输入「者」字，那么在输入该字的第一码后，「好」字将被顶上屏，留下「事在」，对应的编码为<code>sez</code>。可以再接着输入「者」的后续编码来完成输入。</p><p><img src="'+d+'" alt="image-20230310112250252"></p><p><img src="'+r+'" alt="image-20230805152837989"></p><h3 id="_2-2-词组输入" tabindex="-1">2.2 词组输入 <a class="header-anchor" href="#_2-2-词组输入" aria-label="Permalink to &quot;2.2 词组输入&quot;">​</a></h3><p>飞讯二字词的编码格式为<code>s1z1s2b2b2</code>，即首字的前两码加次字的首码和次字的前两笔，例如：<code>一直yhzei 大佬delui 简码jpmeu 半角bdjua 蝴蝶hcdia 奔驰bdcaa</code>等。由于飞讯的词组输入需要五码，所以在用单字输入的时候不超过五码的二字词是不建议用词组的方式来输入的。不过，为了降低使用难度，飞讯并没有禁用低效的词组，而由用户自己选择何时使用词组方式。有的时候，为了手感，也可能会用词组。</p><p><img src="'+l+'" alt="image-20230310113547262"></p><p><img src="'+m+'" alt="image-20230310113611372"></p><p>飞讯三字词的编码格式为<code>s1s2s3b3b3</code>，即各字的首码加末字的前两笔，例如：<code>计算机jsjei 新世纪xsjaa 大无畏dwwia</code>等。三字词一般建议使用词组的方式来输入，以便节约用键。可能的例外情况是由两键字（一、二简字和声笔字）构成的三字词，如「好起来」「不知道」等，它们用单字输入也才六键，而键速可能更快，因为单字更容易形成条件反射。具体怎么打好，就看用户自己的使用习惯了。</p><p><img src="'+_+'" alt="image-20230310113938663"></p><p><img src="'+b+'" alt="image-20230310114018083"></p><p>飞讯多字词的编码格式为<code>s1s2s3b0b0</code>，其中的0表示末字，即前三字的首码加末字的前两笔，例如：<code>呼风唤雨hfhei 风雨同舟fytuu 生龙活虎slhie</code>等。</p><p><img src="'+h+'" alt="image-20230310130326212"></p><p><img src="'+n+'" alt="image-20230310130352961"></p><p>考虑到有的成语用字比较生僻，飞讯也支持第四码用声母，以完全避免用到笔画，但是第四码得用大写来输入，例如：<code>呼风唤雨hfhY 风雨同舟fytZ 生龙活虎slhH</code>等。</p><p><img src="'+g+'" alt="image-20230310130419961"></p><p><img src="'+u+'" alt="image-20230310130434898"></p><p>多字词第四码用大写输入时不能使用扩展编码，多于一页的重码词只能通过翻页查找来输入。例如，<code>jsjS</code>上的重码词就超过了三页。</p><p><img src="'+f+'" alt="image-20230310132437849"></p><p><img src="'+q+'" alt="image-20230310133054588"></p><p><img src="'+x+'" alt="image-20230310133111312"></p><p><img src="'+k+'" alt="image-20230310133126374"></p><p>不过，由于四码空间很大，又专门供多字词使用，所以需要翻页的情况是很少的。</p><h3 id="_2-3-扩展编码" tabindex="-1">2.3 扩展编码 <a class="header-anchor" href="#_2-3-扩展编码" aria-label="Permalink to &quot;2.3 扩展编码&quot;">​</a></h3><p>飞讯的词组支持扩展编码，在重码多的时候，可以追加首字的前两笔来快速区分重码。比如，「语用学」一词在第一次输入时，输入 <code>yyxoo</code> 后需要在第五页才能找到，如下图所示。每一页，都需要用眼睛扫视 6 个选项，人机交互频繁，对击键率影响很大，效率很低。</p><p><img src="'+y+'" alt="image-20230310133346690"></p><p><img src="'+P+'" alt="image-20230310133406679"></p><p><img src="'+j+'" alt="image-20230310133420804"></p><p><img src="'+z+'" alt="image-20230310133434630"></p><p><img src="'+T+'" alt="image-20230310133456551"></p><p>然而，如果发现当页没有该词就追加首字前两个笔画 <code>oa</code> 的话，「语用学」就出现在第一页上，只需用 <code>i</code> 选择上屏就可以了，如下图所示。</p><p><img src="'+v+'" alt="image-20230310133943527"></p><p>由于动态调频的作用，在选择一个用扩展编码输入的词组后，下次再输入时码长就会缩短，一般只用五键就可以输入了。比如，上例在用<code>i</code>选择「语用学」后，下文再输入时常常就只需要<code>yyxoo</code>即可。</p><h3 id="_2-4-冲突解决" tabindex="-1">2.4 冲突解决 <a class="header-anchor" href="#_2-4-冲突解决" aria-label="Permalink to &quot;2.4 冲突解决&quot;">​</a></h3><p>在飞讯延迟顶的位置，有时无法使用缩减码，因为后三码被当作五码词组的一部分了，如果那正是你要的词就很好，但常常不是这样，于是就会发生冲突。</p><p>比如，在输入「狂kq」「喘cia」时，「kqcia」是常规词组的空间，上面往往会有其它词存在，产生冲突，从而无法将「狂」字顶上屏幕，如下图所示。</p><p><img src="'+A+'" alt="image-20220116113205583"></p><p>如果继续输入，将会把「昆虫」这个词一起顶上屏，而不是顶「狂」字上屏。为了解决这个问题，特提供了巧妙的办法，即采用编码变换用分号将编码<code>kqcia</code>变为<code>kq_cia_</code>（其中下划线表示空格），而将「狂喘」上屏。</p><p>在用户预知会发生冲突时，也可以第五码采用大写字母，强制将首字顶上屏。比如，上例用<code>kqciA</code>就可以将kq对应的「狂」字上屏，而留下<code>cia</code>，因为大写的A会自动变换为小写的a。</p><p>彻底解决冲突的办法是，完全不使用缩减码，或者采用后面讲的快顶模式。</p><h3 id="_2-5-大写巧用" tabindex="-1">2.5 大写巧用 <a class="header-anchor" href="#_2-5-大写巧用" aria-label="Permalink to &quot;2.5 大写巧用&quot;">​</a></h3><p>在一码后，用大写后续字词的首码也可以将首选字词顶上屏幕。例如，「一个人的」可以用yGRD来输入。</p><p>在两码后，若后接一简字，则可大写声母将前两码对应的二简字和该一简字一起上屏。例如，「这是」可以用zlS来上屏。这种做法和主词的飞码是不一样的，目的是为了可以做到避免三码后再用空格来上屏二简字和一简字的组合，同时又不影响飞讯在三码后用大写声母输入多字词的功能。</p><p>在四码后，若后接一简字，则可大写声母将前四码两两转为二简字并和该一简字一起上屏。例如，「这还是」可以用zlheS来上屏。</p><h3 id="_2-6-组合变换" tabindex="-1">2.6 组合变换 <a class="header-anchor" href="#_2-6-组合变换" aria-label="Permalink to &quot;2.6 组合变换&quot;">​</a></h3><p>除了顶屏之外，组合变换也是节约用键和离散重码的重要手段。大量一、二简字的组合，不管是不是词组，都可以通过这种方式来进行输入。注意，这个时候是没有提示的，需要用户对简字非常熟习才能灵活自如。编码变换一般通过分号键触发，有时也通过Tab键和单引号触发。</p><p>(1) 一简字与一简字的组合</p><p>例如，「个人」一词，虽然可以按词组的方式用<code>grrp</code>来输入。更好的方式是当成两个一简字用<code>g_r_</code>来输入，其中下划线表示空格。然而，最好的方式则是采用编码变换，用<code>gr;</code>来输入，可以节约一次用键。</p><p>(2) 一简字与二简字的组合</p><p>例如，「一会」可以用<code>yhu;</code>代替<code>yhhu</code>来输入，虽然不能节约用键，但是输入变得确定了，而且可以将<code>yhhu</code>的首选让给「与会」，就起到了离散重码的作用。同样，「一场」可以用<code>yct;</code>来输入。</p><p>(3) 二简词与一简字的组合</p><p>二简词与一简字可以组合起来通过Tab一起上屏，从而节约一次空格键。例如，「我们的」在常规输入时，得用<code>wm + Tab + d + 空格</code>，而利用组合变换后就只需<code>wmd + Tab</code>了。</p><p>(4) 一简字与二简词的组合</p><p>一简字与二简词可以组合起来通过单引号一起上屏，从而节约一次空格键。例如，「的时候」在常规输入时，得用<code>d + 空格 + sh + Tab</code>，而利用组合变换后就只需<code>dsh&#39;</code>了。</p><p>(5) 三个一简字的组合，可以用Shift+空格来输入，手机上可下滑空格。例如，「一个人」「就是了」「是不是」「不是不」等都可以这样输入。</p><h3 id="_2-7-词组过滤" tabindex="-1">2.7 词组过滤 <a class="header-anchor" href="#_2-7-词组过滤" aria-label="Permalink to &quot;2.7 词组过滤&quot;">​</a></h3><p>如果用户习惯一直用第四码大写来输入多字词，那么就可以将飞讯schema文件中Translator下的enable_filtering选项设置为true，以过滤掉<code>szsbb</code>上的多字词，以减少重码。但是，不会过滤增强词组模式下szsnb上的多字词，这有助于动态缩短码长。默认的forced_selection选项为true，还可强制在<code>szsbb</code>上选择重码，从而减少扩展编码时的重码。这样设置对操作熟练的高级用户来说是非常有用的，可以减少很多重码，提高可盲打性，如下图所示。</p><p><img src="'+S+'" alt="image-20230311000814969"></p><h2 id="_3-快顶模式" tabindex="-1">3 快顶模式 <a class="header-anchor" href="#_3-快顶模式" aria-label="Permalink to &quot;3 快顶模式&quot;">​</a></h2><h3 id="_3-1-缩短码长" tabindex="-1">3.1 缩短码长 <a class="header-anchor" href="#_3-1-缩短码长" aria-label="Permalink to &quot;3.1 缩短码长&quot;">​</a></h3><p>飞讯在默认的慢顶模式下，美中不足就是词组需要五码才能输入，这就增加了平均码长，在一定程度上抵消了飞讯在单字输入方面的优势。有没有办法使飞讯的词组也只需要四码呢？有！飞讯在增强模式下通过换码操作实现了这个目标。换码的原理是，将词组编码第四位上的笔画 <code>aeuio</code> 改用 <code>23789</code> 来编码输入，使得起始顶屏位和码长调整位都从第五位移动到第四位。</p><p>例如，「奔驰」在常规模式下输入用的是 <code>bdcaa</code>，而在增强模式下则用 <code>bdc2</code>。</p><p><img src="'+w+'" alt="image-20230311113452486"></p><p>如果接着输入「到」字的首码 <code>d</code>，「奔驰」就会被顶上屏幕。如果输入 <code>bdc2</code> 后，并不是想要的「奔驰」，那么就按正常的编码输入第五码。比如，若想输入的是「奔出」，那么就接着追加「出」字的第二笔。</p><p><img src="'+C+'" alt="image-20230311114033001"></p><p>接下来的重码选择和扩展编码就和常规模式一模一样了。如果这时用 <code>a</code> 选择了「 表达出」，则「表达出」成为六时的首选。</p><p><img src="'+B+'" alt="image-20230311114614209"></p><p>再次输入「表达出」时，可能就只需要四码了。</p><p><img src="'+E+'" alt="image-20230311114820652"></p><p>由于少加了一个笔画，飞讯在四码顶屏时的编码空间只有飞码在五码顶屏时空间的五分之一，能容纳的四码词数量也就少得多，虽然缩短了码长，但会增加飞讯词组的动态性，增强查看候选项的时间，从而降低其可盲打性。所以，在竞速打赛文时，对词组的盲打要求比较高时，就不适合采用快顶。然而，在实际码字时，用户的应用场景比较狭窄，四码时词组的命中率会非常高，码长明显缩短，那么采用快顶就非常适合了。</p><h3 id="_3-2-避免冲突" tabindex="-1">3.2 避免冲突 <a class="header-anchor" href="#_3-2-避免冲突" aria-label="Permalink to &quot;3.2 避免冲突&quot;">​</a></h3><p>飞讯在默认的慢顶模式下，当词组第四位上的笔画用<code>aeuio</code>来编码，同时又在使用单字的缩减码时，就可能会发生冲突。在设置为快顶模式时，就可以避免这类冲突，从而毫无顾忌地使用缩减码，因为此时的单字均是四二顶，在第四码时就一定会把二简字顶上屏。</p><p>例如，在慢顶模式下，输入<code>jyjua</code>时，会提示下面的词组。</p><p><img src="'+V+'" alt="image-20230602111657890"></p><p>然而，在快顶模式下，在<code>jyj</code>后接着输入时u就将「记」顶上屏幕了，留下<code>ju</code>。</p><p><img src="'+N+'" alt="image-20230805152938877"></p><p><img src="'+$+'" alt="image-20230602112043761"></p><p>所以，飞讯的快顶模式除了输入二简字输入比声笔飞单延迟一码外，是完全兼容声笔飞单的，同时会强制用户采用词组的四码起顶方式，只是常规词组第四码必须用23789，对用户的操作技能要求很高。不过，一旦掌握，就真正能够进入无冲突地实现二码顶字和四码顶词的理想境界。</p><h2 id="_4-增强模式" tabindex="-1">4 增强模式 <a class="header-anchor" href="#_4-增强模式" aria-label="Permalink to &quot;4 增强模式&quot;">​</a></h2><p>为了缩短词组码长和增加输入确定性，提高输入效率，特为飞讯提供了数选字和数选词，可以在增强模式下使用。</p><p>如果要临时使用增强模式，在电脑上可以用 Ctrl+~ 或 F4，在手机上直接点击状态栏的「常规 / 增强」项，就可以切换状态了。如果要将增强模式设置为默认状态，只要将 sbfx.schema.yaml 文件中的 is_enhanced 开关项的 reset 值由 0 改为 1，并重新部署一下就可以了。</p><p>数选字词的基本用法请参见<a href="https://sbxlm.gitee.io/sbfd/#5-%E5%A2%9E%E5%BC%BA%E6%A8%A1%E5%BC%8F" target="_blank" rel="noreferrer">飞单增强模式</a>。这里只讲飞讯特有的情况，也就是在第三码后接数字的情况。</p><p>例如，在输入「两极」时，在输入lhj后，如果接着输入3，那么就会顶二简字「两」上屏，而留下「极j3」。</p><p><img src="'+D+'" alt="image-20231028115818977"></p><p><img src="'+F+'" alt="image-20231028115845923"></p><p>由于在三码后没有提示数选字，所以要求用户记住了数选字才能这么操作。</p><h2 id="_5-快顶增强" tabindex="-1">5 快顶增强 <a class="header-anchor" href="#_5-快顶增强" aria-label="Permalink to &quot;5 快顶增强&quot;">​</a></h2><p>快顶模式和增强模式在默认时都没有打开，用户可以单独打开一项，也可以两者同时打开，结合起来使用，进一步提高飞讯的输入上限。</p><p>不过，在快顶增强模式下，<code>szsn</code>输入词组与输入二简字加数选单字有冲突，这时可采用分号进行组合变换来上屏两个单字，从而解决冲突。</p><p>例如，在想用单字输入「两」「极」两个字时，输入编码lhj3后，提示行出现的可能是「老虎机」这个二字词。</p><p><img src="'+I+`" alt="image-20231108113218125"></p><p>这时，可按分号变为上屏「两极」，就能够避免回改，不必删除后重新输入。</p><h2 id="附录-编码格式" tabindex="-1">附录：编码格式 <a class="header-anchor" href="#附录-编码格式" aria-label="Permalink to &quot;附录：编码格式&quot;">​</a></h2><p>为了便于用户总结和记忆飞讯的基本内容，现将飞讯的字词编码格式总结一下，编码格式采用了以下精简的表达方式。</p><blockquote><p>单字 <code>sb, sp^bbx</code> 二字词 <code>s1z1s2b2b2^&#39;b1b1x</code> 三字词 <code>s1s2s3b3b3^&#39;b1b1x</code> 多字词 <code>s1s2s3b0b0^&#39;b1b1x|s1s2s3S0x</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>z = p|b</span></span>
<span class="line"><span>s = p = [qwrtsdfgzxcvbyphjklnm]</span></span>
<span class="line"><span>b|x = [aeuio]</span></span></code></pre></div><p>其中：<code>^</code>表示起始顶屏位，字母后的数字表示词组中的第几个字，0特别地表示末字；<code>&#39;</code>表示码长调整位；s表示声母（大写时表示用大写字母输入），p表示偏旁部首，b表示笔画，x表示选择键，<code>|</code>表示或者，z表示p或b。s 和 p 均采用 aeuio 以外的 21 个英文字母，b和x均采用 aeuio 这几个元音字母。</p><p>在快顶模式下，词组编码第四位上的笔画改用23789来编码的话，可使起始顶屏位和码长调整位都从第五位移动到第四位。</p>`,111),G=[Z];function H(J,O,Y,K,L,M){return p(),e("div",null,G)}const W=a(R,[["render",H]]);export{U as __pageData,W as default};
