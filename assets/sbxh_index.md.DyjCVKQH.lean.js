import{_ as e,a as o,b as i,c as d,d as c,e as p,f as l,g as r,h as t,i as s,j as n,k as m,l as h,m as g}from"./chunks/image-20240517141726996.Bz7a2Gkz.js";import{_}from"./chunks/SgJiao.CzOcvjwB.js";import{_ as u,c as b,a2 as q,o as f}from"./chunks/framework.BDLWvHlL.js";const y="/images/image-20230813150341672.png",x="/images/image-20231210182629607.png",k="/images/image-20230617082848989.png",z="/images/image-20240517143156651.png",j="/images/image-20240517143212398.png",P="/images/image-20240517143226535.png",v="/images/image-20240517143427171.png",w="/images/image-20240504111144923.png",T="/images/image-20240504111210038.png",B="/images/image-20240504111235310.png",S="/images/image-20240504111257415.png",G="/images/image-20240504111315079.png",K="/images/image-20240504111340046.png",C="/images/image-20240504111435807.png",D="/images/image-20240504111454814.png",E="/images/image-20230617091027173.png",$="/images/image-20240517143650104.png",I=JSON.parse('{"title":"声笔小鹤","description":"","frontmatter":{"title":"声笔小鹤","date":"2020-12-08T15:06:28.000Z","typora-root-url":"..\\\\..\\\\public"},"headers":[],"relativePath":"sbxh/index.md","filePath":"docs/sbxh/index.md"}'),N={name:"sbxh/index.md"};function F(J,a,L,O,V,X){return f(),b("div",null,a[0]||(a[0]=[q('<h2 id="_1-概述" tabindex="-1">1 概述 <a class="header-anchor" href="#_1-概述" aria-label="Permalink to &quot;1 概述&quot;">​</a></h2><p>目前的双拼一般是在智能拼音输入法的基础上增加一个声母和韵母对应表来实现的。这样的好处是，可以同时支持多种双拼，并能共享字词库。但是，这种整句模式的智能双拼不便于兼容简拼，因此其缩减码长的效果被不能使用简拼大大削弱。强行兼容的话，又会极大损害音字转换的准确性，而且影响了两码一字的输入节奏。同时，单字的重码问题依然没有得到解决，回改选重非常麻烦，严重降低输入效率。有的输入法，如手心输入法，可以支持一个直接辅助码，在一定程度上缓解单字选重的问题，但是没有解决根本问题。</p><p>小鹤音形是自然码之后影响比较大的双拼双形输入法。小鹤音形采用字词编码的方式，解决了兼容简拼和缩减编码的问题，在四码时还能省略空格。同时，小鹤音形可以利用两个部件码来较好地区分单字重码。但是，由于需要同时掌握双音和双形，学习难度还是相当大的。</p><p>有没有什么办法降低小鹤音形的学习难度，同时提高它的效率，还增强它的功能呢？有这种好事吗？答案是肯定的。秘诀就是采用顶功编码技术！这样，可以让小鹤音形用户也享受顶功技术带来的红利。声笔小鹤就是对小鹤音形的顶功改造，并且取得了非常好的效果。</p><p>对于小鹤音形用户来说，学习声笔小鹤的成本是非常低的，只需要了解一下双拼的细微变化并掌握笔画即可，其基本内容是：声母不分平翘舌，零声母用v表示，韵母没有变化；双形用顺序笔画代替，用<code>aeuio</code>分别表示折、横、撇、竖、点五种笔画；重码用<code>aeuio</code>兼作选择键；重码太多时，可以追加首字前两笔来快速筛选重码。</p><h2 id="_2-优势" tabindex="-1">2 优势 <a class="header-anchor" href="#_2-优势" aria-label="Permalink to &quot;2 优势&quot;">​</a></h2><p>声笔小鹤相比小鹤音形的优势可以总结为：更简单、更高效和更强大。</p><p>更简单是因为：首先，声笔小鹤用v表示零声母，简化了零声母音节的编码方式；其次，声笔小鹤不区分平翘舌；最后，也是最重要的是，声笔小鹤用aeuio代表笔画，代替了复杂的辅助码。</p><p>更高效是因为：首先，单字三码起顶，码长更短；其次，字词四码时用aeuio选择重码，比原来的数字键好按，可以实现快速选重；最后，字词支持动态调频，可以减少击键次数。</p><p>更强大是因为：首先，声笔小鹤实现了字词分离，不再纠结是字优先还是词优先，可以支持GBK字符集超两万的汉字；其次，词组支持扩展编码，可以支持100万词组并快速离散重码；最后，具有自动词组功能，没有的词组拆开打过一次后就能自动造好。</p><h2 id="_3-快速入门" tabindex="-1">3 快速入门 <a class="header-anchor" href="#_3-快速入门" aria-label="Permalink to &quot;3 快速入门&quot;">​</a></h2><p>为了减轻初学者的记忆负担，在手机上提供了助记皮肤，可以长按<code>N</code>键打开或者关闭助记。在打开时，给出了韵母、笔画和零声母用键的提示，如下图所示。如果是在电脑上，则可以把该图并放在电脑桌面上，在打字的时候帮助记忆。</p><p><img src="'+y+'" alt="image-20230813150341672" loading="lazy"></p><p>注意，「嗯n」[呣m」「嘸m」「呒m」这几个字是没有韵母的，这时用v作为韵母，称为零韵母。</p><h3 id="_3-1-基本编码" tabindex="-1">3.1 基本编码 <a class="header-anchor" href="#_3-1-基本编码" aria-label="Permalink to &quot;3.1 基本编码&quot;">​</a></h3><p>声笔小鹤的编码规则和示例如下。其中，s表示声母，不区分平翘舌；y表示韵母；b表示笔画。b为<code>aeuio</code>，s为b之外的21个英文字母，数字表示第几字（其中0表示末字），<code>_</code>表示空格。笔画不足时，则重复末笔。注意，您输入时，四码字词的候选顺序可能有变化，这是因为动态码长调整的缘故。本文在后面的动态码长一节，会专门讲动态码长调整。</p><ul><li>单字：<code>sybb</code>，即声母加韵母再加前两个笔画。例如，<code>就jqoe 从csuo 觉jnoo 钱qmue 貌mcuo 缘yraa 源yroo 简jmue</code>。注意，单字的后两码都是采用的顺序单笔画，而不是小鹤音形里复杂的双形，学习难度大大降低。</li><li>二字词：<code>s1y1s2y2</code>，即第一字的声母韵母加第二字的声母韵母。二字词的例子有<code>关系grxi 参加cjjx 正确zgqt 模范mofj 答应dayk</code>。注意，这里的<code>正zg</code>是没有区分平翘舌的，与小鹤音形的<code>正vg</code>不同。</li><li>三字词：<code>s1s2s3y3</code>，即前三字的声母加第三字的韵母。三字词的例子有<code>示范区sfqu 想不到xbdc 处理器clqi 宪兵队xbdv</code>。注意，这里的<code>示s 处c</code>是没有区分平翘舌的，与小鹤音形的<code>示u 处i</code>不同。</li><li>多字词：<code>s1s2s3s0</code>，即前三字的声母加末字的声母。多字词的例子有<code>爱因斯坦vyst 有限公司yxgs 人民共和国rmgg 声东击西sdjx</code>。注意，这里的<code>爱v</code>是零声母音，用v代表零声母，而小鹤音形里「爱」的首码为a。</li></ul><p>当一个字有多种不同的读音且声母不同时，则可以用多种方法输入该字。例如，「盛」对应的拼音有<code>cheng</code>和<code>sheng</code>，对应了c和s两个不同的声母，因而它在声笔小鹤中也会有两个编码，分别是<code>cgeu</code>和<code>sgeu</code>。</p><p>对于非成字偏旁部首，一般取其名称首字的声母作为它的声母进行编码。例如，「亻」的名称为单人旁，取「单」字的声母d作为「亻」的声母，可以用<code>djui</code>输入「亻」。不知道非成字偏旁部首的名称也没有关系，因始终可以用纯笔画的方式输入。比如，「亻」可以用<code>uiiii</code>输入。</p><p>在声笔小鹤中，单字和词组各自有不同的编码格式，它们享有不同的编码空间，不会发生冲突，不存在单字和词组那个优先的问题。单字肯定是用<code>sybb</code>格式，其第三码是笔画，而词组的编码第三码肯定是声母，笔画和声母所用的编码字母集合是不相交的。</p><p>例如，单字<code>觉jnoo 钱qmue 貌mcuo 缘yraa</code>，和词组<code>关系grxi 参加cjjx 示范区sfqu 想不到xbdc 人民共和国rmgg 声东击西sdjx</code>，它们之间是不可能重码的。</p><h3 id="_3-2-缩减编码" tabindex="-1">3.2 缩减编码 <a class="header-anchor" href="#_3-2-缩减编码" aria-label="Permalink to &quot;3.2 缩减编码&quot;">​</a></h3><p>声笔小鹤中的缩减编码，又称为缩减码，可以缩短字词的输入码，类似于搜狗拼音中的固顶字词或者五笔字型中的简码字，或称简码。</p><h4 id="_3-2-1-常规简码" tabindex="-1">3.2.1 常规简码 <a class="header-anchor" href="#_3-2-1-常规简码" aria-label="Permalink to &quot;3.2.1 常规简码&quot;">​</a></h4><p>声笔小鹤的单字有一、二、三级简码，分别称为一简字、二简字和三简字。一简字的例子有<code>就j 我w 没m</code>，二简字的例子有<code>从cs 此ci 起qi 来ld</code>，三简字的例子有<code>节jpe 未wwe 凝nko 管gru</code>。声笔小鹤的词组是不存在缩减码的。由于声笔小鹤的常规三简字数量庞大，高达1658个，而且不乏常见字，所以对单字输入效率的提升有很大帮助。这就是为什么声笔小鹤用极其简单的五个笔画代替小鹤音形的大量辅助码后，单字的平均码长反而下降的原因。</p><p>在使用声笔小鹤时，要尽量使用单字的缩减编码，对输入效率的提升帮助很大，因为缩减码的码长短，而且是缩减码是静态编码，不会发生改变，便于形成条件反射。</p><h4 id="_3-2-2-空位简码" tabindex="-1">3.2.2 空位简码 <a class="header-anchor" href="#_3-2-2-空位简码" aria-label="Permalink to &quot;3.2.2 空位简码&quot;">​</a></h4><p>由于双拼的离散能力比较差，所以声笔小鹤的单字编码空间存在大量的空位，如果不加以利用就会造成很大的浪费。为此，利用单字的空码位安排了一些具有特殊编码的常见单字和二字词，分为声笔字、声笔笔词、声声词和声声笔词（详见sbxh.dict.yaml）。</p><p>声笔字的编码方式是声母+首笔，如<code>刃ra 扶fe 极je 请qo 项xe</code>。为了便于用户使用，这些字在输入声母后会有如下提示。</p><p><img src="'+x+'" alt="image-20231210182629607" loading="lazy"></p><p>上述简码字在后接二简字时，会形成无重码的二字组合，可以利用这种特性进行盲打输入，比如：「极好」「扶手」「项项」等。</p><p><img src="'+k+'" alt="image-20230617082848989" loading="lazy"></p><p>声笔笔词的编码方式是首字声母+次字的首笔和次笔，如<code>比较bea 幸好xau 技术jei 激动jee</code>。声声词的编码方式是两个字的声母，如<code>重新cx 舞曲wq 结构jg 双目sm</code>。声声笔词的编码方式是首字的声母+次字的声母和首笔，如<code>并非bfi 独立dlo 赣南gne</code>。声笔笔词和声声笔词在紧接后续字词的声母时可以被顶上屏幕，因此一般只需要三键。</p><p>为了便于用户使用，上述二字词在输入全码后会有如下提示。</p><p><img src="'+z+'" alt="image-20240517143156651" loading="lazy"></p><p><img src="'+j+'" alt="image-20240517143212398" loading="lazy"></p><p><img src="'+P+'" alt="image-20240517143226535" loading="lazy"></p><h4 id="_3-2-3-组合简码" tabindex="-1">3.2.3 组合简码 <a class="header-anchor" href="#_3-2-3-组合简码" aria-label="Permalink to &quot;3.2.3 组合简码&quot;">​</a></h4><p>声笔小鹤三简码位上设置是二简字词和一简字的组合，而不一定是真正的词，例如：<code>挂是gxs 时是sis 富有就fyj 无限发wxf</code>等等。这种组合一般需要空格上屏，不管是否构成词组，是绝对没有重码的，可以放心大胆的盲打。</p><h4 id="_3-2-4-高频简词" tabindex="-1">3.2.4 高频简词 <a class="header-anchor" href="#_3-2-4-高频简词" aria-label="Permalink to &quot;3.2.4 高频简词&quot;">​</a></h4><p>在声笔小鹤中，还有一种二字简词，是直接从声笔简码拿过来的，对于熟悉声笔简码的人来说，可能已经记住了。这些二字简词都是取两字声母作为编码的高频词，例如：「美元」「管理」「科技」等等，输入两码时会提示在单字之后作为次选，可用Tab或者单引号上屏。</p><p><img src="'+v+'" alt="image-20240517143427171" loading="lazy"></p><p>二字简词在声笔简码中称为声声词，共有441个，详见<a href="./../sbjc/#_9-4-3-声声词">声声词</a>。为了便于用户使用，这些词在输入全码后会有如下提示。</p><p><img src="'+e+'" alt="image-20240517140646580" loading="lazy"></p><h3 id="_3-3-扩展编码" tabindex="-1">3.3 扩展编码 <a class="header-anchor" href="#_3-3-扩展编码" aria-label="Permalink to &quot;3.3 扩展编码&quot;">​</a></h3><h4 id="_3-3-1-单字扩展编码" tabindex="-1">3.3.1 单字扩展编码 <a class="header-anchor" href="#_3-3-1-单字扩展编码" aria-label="Permalink to &quot;3.3.1 单字扩展编码&quot;">​</a></h4><p>由于汉语声母和韵母组合规则的限制，双拼编码对同音字的离散能力比较弱。声笔小鹤可以通过增加字的前两个笔画来快速地离散重码，这和传统的双音双形输入法类似。</p><p>但是，在声笔小鹤中，因为两个笔画的去重能力比较差，所以对于重码的重灾区，仍然需要一次甚至多次翻页才能找到想要的字。比如，「吚」就需要五次翻页操作，在第六页上才能找到。</p><p><img src="'+o+'" alt="image-20240517140805332" loading="lazy"></p><p><img src="'+i+'" alt="image-20240517140820796" loading="lazy"></p><p><img src="'+d+'" alt="image-20240517140837940" loading="lazy"></p><p><img src="'+c+'" alt="image-20240517140857684" loading="lazy"></p><p><img src="'+p+'" alt="image-20240517140919181" loading="lazy"></p><p><img src="'+l+'" alt="image-20240517141323180" loading="lazy"></p><p><img src="'+r+'" alt="image-20240517141340493" loading="lazy"></p><p>为了解决这个问题，声笔自然利用顶功编码的特性，通过扩展编码来追加字的第3、4个笔画，就能做到输入单字时基本上无需翻页了。</p><p><img src="'+t+'" alt="image-20240517141124348" loading="lazy"></p><h4 id="_3-3-2-词组扩展编码" tabindex="-1">3.3.2 词组扩展编码 <a class="header-anchor" href="#_3-3-2-词组扩展编码" aria-label="Permalink to &quot;3.3.2 词组扩展编码&quot;">​</a></h4><p>为了适应现今的信息社会，中文词汇的数量暴增，传统字词输入法的四码空间显得捉襟见肘。按照26个字母编码，满打满算，四码空间也只有<code>26×26×26×26 = 456,976</code>个码位。然而，实际的输入法空间利用率是很低的，编码分布很不均匀，所以随着词组数量的增加，重码的重灾区越来越多。</p><p>声笔小鹤的四码词组空间为<code>21×26×21×26 = 298,116</code>个码位，而收录的词组数量有100万多。所以，词组的重码重灾区是比较常见的。即使比较常用的词，都有可能需要翻页，甚至数次翻页来输入。翻页查找属于强交互的操作，每页都需要用眼睛扫瞄六个选项，是非常耗费时间的，会大大降低输入效率，而且容易看花眼而出错。</p><p>为了解决以上问题，声笔小鹤采用了扩展编码，利用编码的顶功特性，通过追加首字前两个笔画，迅速扩大了25倍的编码空间，在重码严重时，可以快速筛选出所需的重码词。结合后述动态码长的使用，完美地兼顾了编码空间与输入效率，既能享有巨大的编码空间，又能具有很短的平均码长，两全其美。如果追加两码后，仍然有重码，还是可以通过<code>aeuio</code>进行字母选重，始终可以避免使用低效的数字键。</p><p>例如，「质子」一词在第一次输入时，在输入<code>zizi</code>后需要按三次翻页键，即出现在第四页上，然后再用<code>o</code>选择，如下图所示。每一页，都需要用眼睛扫视 6 个选项，人机交互频繁，效率很低。</p><p><img src="'+s+'" alt="image-20240517141546997" loading="lazy"></p><p><img src="'+n+'" alt="image-20240517141607895" loading="lazy"></p><p><img src="'+m+'" alt="image-20240517141621597" loading="lazy"></p><p><img src="'+h+'" alt="image-20240517141638452" loading="lazy"></p><p>然而，如果再追加第一字前两个笔画的话，「质子」就出现在第一页上，如下图所示。</p><p><img src="'+g+'" alt="image-20240517141726996" loading="lazy"></p><p>可见，在输入重码太多的二字词时，通过追加首字头两个笔画，会大大地提高输入效率。</p><p>三字词和多字词也可以类似地使用扩展编码。比如，「旧石器」一词在第一次输入时，在输入<code>jsqi</code>后需要按多次翻页键，然后再进行选择，效率比较低，但是在追加首字的前两笔<code>ii</code>后它就出现在第一页上了。再如，「结绳记事」在第一次输入时，输入<code>jsjs</code>后需要按多次翻页键才能找到，而在加上首字的前两笔<code>aa</code>后就可能没有重码了。</p><h3 id="_3-4-编码反查" tabindex="-1">3.4 编码反查 <a class="header-anchor" href="#_3-4-编码反查" aria-label="Permalink to &quot;3.4 编码反查&quot;">​</a></h3><p>在使用声笔小鹤的时候，特别是在学习声笔小鹤之初，不可避免地会遇到不会打的字。怎么办呢？程序提供了丰富的反查手段，可以通过笔画和拼音来反查编码，还可以采用字海两分来反查和输入非 GBK 汉字。另外，还通过反查提供了临时拼音输入法。</p><h4 id="_3-4-1-拼音反查" tabindex="-1">3.4.1 拼音反查 <a class="header-anchor" href="#_3-4-1-拼音反查" aria-label="Permalink to &quot;3.4.1 拼音反查&quot;">​</a></h4><p>在知道拼音而不知道字形时用 a 引导拼音反查，注意零声母要用 v 充当。</p><p>例如，要反查「访」字的编码，就在输入 a 之后再输入它的拼音 fang，所以实际的输入为 afang，结果如下图所示。反查出「访」字的编码为 fhoaoe。如果是多音字，那么就会有多个编码，如图中的「房」字就有 fhoaeu 和 phoaeu 两个编码。</p><p><img src="'+w+'" alt="image-20240504111144923" loading="lazy"></p><p>对于零声母字，如「案」字，在反查时除了用a引导还需要在正常拼音的前面加 v，因为 an 是零声母音，所以实际的输入为 avan。在图中提示出的<code>案vjooaa</code>，表示「案」字的编码为 vjooaa。</p><p><img src="'+T+'" alt="image-20240504111210038" loading="lazy"></p><h4 id="_3-4-2-笔画反查" tabindex="-1">3.4.2 笔画反查 <a class="header-anchor" href="#_3-4-2-笔画反查" aria-label="Permalink to &quot;3.4.2 笔画反查&quot;">​</a></h4><p>在完全不知道读音的时候，直接用 <code>aeuio</code> 按顺序输入笔画进行反查，无需引导。</p><p>在下面的笔画反查的例子中，不用引导而直接输入 uuao 后，出现了以这四个笔画开头的字。第一项是<code>反fluuao</code>，表示「反」字的编码为 fluuao。第二项为<code>般bjuuao bouuao pjuuao</code>，说明「般」是个多音字，有三个编码。</p><p><img src="'+B+'" alt="image-20240504111235310" loading="lazy"></p><h4 id="_3-4-3-两分反查" tabindex="-1">3.4.3 两分反查 <a class="header-anchor" href="#_3-4-3-两分反查" aria-label="Permalink to &quot;3.4.3 两分反查&quot;">​</a></h4><p>通过i引导的拼音还支持用字海两分法来进行反查， 支持查找八万多汉字，一般用于反查难读而易于两分的字或者输入 GBK 以外的字。GBK 以外的字，声笔小鹤不提供正常编码，不能按正常方式输入，只能在两分查找到后选择输入。引导字母i可以理解为英文inquire（询问）的首字母，以便记忆</p><p>下面是字海两分法查找的例子。第一个例子是反查「龖」字的编码，在输入到第二部分拼音的第一码时就出来了。第二个例子是通过输入「尸」和「水」的拼音来反查「尿」的编码，输入了两部分完整的拼音。</p><p><img src="'+S+'" alt="image-20240504111257415" loading="lazy"></p><p><img src="'+G+'" alt="image-20240504111315079" loading="lazy"></p><p>对于非 GBK 字集里的「㕛」字，它是没有编码的，只能用两分法来输入，如下所示。</p><p><img src="'+K+'" alt="image-20240504111340046" loading="lazy"></p><h4 id="_3-4-4-临时拼音" tabindex="-1">3.4.4 临时拼音 <a class="header-anchor" href="#_3-4-4-临时拼音" aria-label="Permalink to &quot;3.4.4 临时拼音&quot;">​</a></h4><p>在一时半会想不起某个词中某个字的笔画，而这个字因为不常见又不方便用单字进行反查时，可以用 a 引导临时拼音来变相地输入词组或者查到该字的写法。但是，对于反查出来的词组是不会显示编码的。</p><p>例如，「饕餮」可以用 ataotie 来查找和输入，而「耄耋」可以用 amaodie 来查找和输入。注意，用于引导的字母 a 是不会显示的。</p><p><img src="'+C+'" alt="image-20240504111435807" loading="lazy"></p><p><img src="'+D+'" alt="image-20240504111454814" loading="lazy"></p><h2 id="_4-技能提升" tabindex="-1">4 技能提升 <a class="header-anchor" href="#_4-技能提升" aria-label="Permalink to &quot;4 技能提升&quot;">​</a></h2><h3 id="_4-1-续码顶屏" tabindex="-1">4.1 续码顶屏 <a class="header-anchor" href="#_4-1-续码顶屏" aria-label="Permalink to &quot;4.1 续码顶屏&quot;">​</a></h3><p>在小鹤音形中，当字词的码长不足四时，需要用空格上屏，只有码长为四时的首选字词才能省略空格。在声笔小鹤中，三简字在后接其它字词时，空格是可以省略的。</p><p>例如，声笔小鹤的三简字如<code>节jpe 未wwe 凝nko 管gru</code>，在连续输入时都不需要空格上屏。</p><p>再如，用纯单字输入「中国人民站起来了。」这句话，声笔小鹤输入时的用键为 <code>zs_go_r_mb_zjoqi_ld_l.</code>。若切换到单字状态，那么二简字的空格还可省略，能少用5键，进一步提升效率。</p><h3 id="_4-2-字母选重" tabindex="-1">4.2 字母选重 <a class="header-anchor" href="#_4-2-字母选重" aria-label="Permalink to &quot;4.2 字母选重&quot;">​</a></h3><p>传统输入法通常都是用数字键来选择重码字词。由于击打数字键需要跨行进行，手指移动距离远，容易产生误击，一般人都无法盲打，所以会严重影响输入速度。搜狗拼音虽然可以设置用字母选择重码字词，但是必须先用空格键引导，效果大打折扣。</p><p>拼音用户对数字键的依赖程度比五笔用户高得多，熟练的五笔用户只在输入四码后出现重码时，才会使用数字键选择，有的甚至通过左右 Shift 键选择 1、2 重码来避免使用数字键，以便提高击键率，降低误击率。搜狗拼音的重码很多，前后翻页的操作很频繁，所以它把逗号和句号键作为默认的前后翻页键，以便快速、准确地翻页。但是，这样做又使得在输入逗号和句号这两个常见标点符号时无法进行顶屏而实现快速输入。</p><p>在声笔小鹤中，当输入的编码达到四码时，如果有重码字词，那么就用<code>aeuio</code>兼做重码选择键。这时，重码字前的<code>aeuio</code>并不代表笔画，仅仅表示出现的顺序，和传统输入法的数字选择键作用完全一样。不过，用户在击打<code>aeuio</code>时要比击打数字键方便、快速得多。</p><p>例如，搜狗拼音输入<code>jiao</code>时，会出现很多同音字供用数字键选择，可能的选项如下，因动态调频的原因，结果会有出入。</p><p><img src="'+_+'" alt="搜狗jiao" loading="lazy"></p><p>声笔小鹤则不一样，在输入<code>jnoo</code>时，出现的重码字则是用<code>aeuio</code>选择，非常方便。</p><p><img src="'+E+'" alt="image-20230617091027173" loading="lazy"></p><p>对于词组来说，也是一样的，例如<code>yiyh</code>。</p><p><img src="'+$+'" alt="image-20240517143650104" loading="lazy"></p><h3 id="_4-3-动态码长" tabindex="-1">4.3 动态码长 <a class="header-anchor" href="#_4-3-动态码长" aria-label="Permalink to &quot;4.3 动态码长&quot;">​</a></h3><p>动态码长是指在输入的过程中，字词的码长会适应用户的使用习惯而发生变化，越常用的字词码长会变得越短，而不常用的字词码长会变长，从而在总体上提高输入效率。动态码长不仅是码长的调整，也包括重码顺序的调整，实际上都是因为对频率的调整而引起的。</p><p>当四码字词有重码的时候，如果选择了某个非首位的字词，那么它的频率权重就会提高，在下次输入的时候，其排序就会提前。一般通过一、两次选择就可以提前到首位，从而就能利用顶屏来节约一次按键。</p><p>例如，第一次输入<code>jiei</code>时，「吉」可能是排在第五位的，那么用<code>i</code>选择上屏后，下次输入就可能排在首位了，于是可以利用顶屏节约一次选择键。</p><p>再如，第一次输入<code> suss</code> 时，如果「输送」排在第二位，用<code>a</code>选择上屏后，下次输入就可能排在首位了。</p><p>如果在输入的时候采用了扩展编码，比如用<code>zizioa</code>输入了「之志」，那么在下次输入的时候一般就只需要<code>zizi</code>就可以了，码长得到了缩短。</p><h3 id="_4-4-自动词组" tabindex="-1">4.4 自动词组 <a class="header-anchor" href="#_4-4-自动词组" aria-label="Permalink to &quot;4.4 自动词组&quot;">​</a></h3><p>声笔小鹤目前自带100万多词组，覆盖的面已经很广。但是，用户在使用过程中不可避免地还会遇到缺词的情况，需要添加新的词组，而且对于不满意的词组可能还想删除。为了避免产生大量不需要的废词，在单字模式时是不进行自动造词的。</p><h4 id="_4-4-1-自动造词" tabindex="-1">4.4.1 自动造词 <a class="header-anchor" href="#_4-4-1-自动造词" aria-label="Permalink to &quot;4.4.1 自动造词&quot;">​</a></h4><p>声笔小鹤的造词是在输入过程中自动进行的。例如：输入<code>声sge 笔biu</code>后，下次输入<code>sgbi</code>时就会有该词了，只是如果有重码的话，新造的词会排在后面。如果重码太多，可以追加首字前两笔或者用Shift+Tab一次性地跳到最后，以避免多次翻页。自动造的词组是临时词组，带有太极标志，优先级别低，只有在选择使用一次以后，才会成为正式词组，并提高优先级别。</p><p>需要注意的是，在进行枚举自动造词的时候，是以编码对应的字、词为单位来进行组合的，并不是以单字为单位的。例如，在输入<code>声笔sgbi 系列xilp 码mae</code>后，生成的词组为「声笔系列码」「声笔系列」「系列码」，而不会生成「声笔系」「笔系列」「列码」等。另外，如果之后马上使用了退格键，系统就会自动删除所造的词组；中间夹杂有非汉字的话，也会中断造词。</p><h4 id="_4-4-2-打空造词" tabindex="-1">4.4.2 打空造词 <a class="header-anchor" href="#_4-4-2-打空造词" aria-label="Permalink to &quot;4.4.2 打空造词&quot;">​</a></h4><p>如果在输入四码后，发现没有所需的二字词，且首页未满。若首字是二字词，则可用条件顶屏。若首字不是二简字，那么可以按Ctrl+L定位在第二码后进行快捷造词。</p><p>如果在输入五、六码后，发现没有所需的二字词，则可按单引号将追加的笔画置于前两码后，再继续造词，可以避免浪费已经输入的编码。</p><h4 id="_4-4-3-词组清理" tabindex="-1">4.4.3 词组清理 <a class="header-anchor" href="#_4-4-3-词组清理" aria-label="Permalink to &quot;4.4.3 词组清理&quot;">​</a></h4><p>由于声笔小鹤是采用的自动造词策略，在提供方便的同时也会产生大量的废词，所以系统提供了废词清理功能，能够将用户几乎不使用的新造临时词组自动清除。对于少量暂时还未被清理的废词，用户不必理会，到时限后就会被自动删除。</p><p>在必要的时候，如用户错误地确认了临时词组，系统也提供了手动删除的手段。在电脑上，通过方向键将光标移动到该词上面，再按 <code>Control + Delete</code> 键来删除。在手机上，则通过左右滑动空格来移动光标到要删除的词，然后下滑退格键删除。</p><h3 id="_4-5-条件顶屏" tabindex="-1">4.5 条件顶屏 <a class="header-anchor" href="#_4-5-条件顶屏" aria-label="Permalink to &quot;4.5 条件顶屏&quot;">​</a></h3><p>声笔小鹤的单字除了三简字可以被顶上屏幕外，其二简字也可以在一定条件下被顶上屏幕，这是一种非常奇特的能力。条件顶是指在输入二字词的时候，若第一字正确而第二字不对时，可以追加第二字的第三码，将第一字顶上屏幕，前提是追加的第三码与选择键没有冲突。</p><p>例如，在输入「快顶kkdk」的时候，发现系统没有该词，而且「顶」字的第三码e又没有被重码词占用，那么在输入e的时候就会将「快」字顶上屏幕，留下「dke」，对应的字正是「顶」。这样，就不必用退格键来清除「dk」两码，用空格先上屏「快」字，再输入「顶」字了。</p><p>注意，被顶上屏的字始终是前两码对应的二简字，而不一定是当前显示的第一个字。</p><p>例如，假设你想输入「见代」，发现打jmdd后出来的首选是「肩带」，「代」的第三码u没被重码占用，那么在输入u的时候，被顶上屏的是「见」而不是「肩」，因为「见」才是二简字。</p><h3 id="_4-6-大写顶屏" tabindex="-1">4.6 大写顶屏 <a class="header-anchor" href="#_4-6-大写顶屏" aria-label="Permalink to &quot;4.6 大写顶屏&quot;">​</a></h3><p>在使用条件顶的时候，如果第三码被选重键占用，那么就无法顶前两码对应的二简字上屏，需要退格删除两码，上屏二简字然后再重新输入第二字的编码，非常浪费。通过大写第二字的第三码则可以无条件地把二简字顶上屏而留下三个编码，可以使输入过程更加流畅，且不浪费已经输入的编码。</p><p>例如，在输入「快码kkma」的时候，发现系统没有该词，但是「码」的第三码e已经被重码「快吗」占用，所以使用条件顶是不行的，这时就可以用大写的E来将「快」顶上屏，输入法将E转换为小写e后留下三码<code>mae</code>，可以接着输入后面的编码，没有丝毫浪费。</p><p>大写后续字词的声母也可以进行顶屏操作，但使用场景不一样，一般使用在二简字后忘记加空格的时候。例如，在输入「有断点」时，输入了<code>yz</code>但忘记了加空格上屏，接着输入了<code>dr</code>，这时出来的是「右端」。不管是用<code>ESC</code>清除后重新输入，还是用退格键修改，成本都非常高。然而，接着用大写输入「点」的首码<code>D</code>，「有」字就会被顶上屏幕，剩下<code>drd</code>三码，再输入「点」的第二码<code>m</code>即可输入「断点」了。</p><p>另外，在一、二、三码后，用大写后续字词的首码也可以将首选字词顶上屏幕。「那是不行的」可以用<code>nasBXkD</code>来输入。</p><p>不过，需要注意的是，大写顶屏在大写作为编码的时候是无效的。在声笔小鹤的单字模式下，第三码大写是作为编码用来输入词组的，此时不能顶前面的两码。</p><h3 id="_4-7-组合变换" tabindex="-1">4.7 组合变换 <a class="header-anchor" href="#_4-7-组合变换" aria-label="Permalink to &quot;4.7 组合变换&quot;">​</a></h3><p>除了顶屏之外，编码变换也是节约用键的重要手段。一、二简字的组合，不管是不是词组，都可以通过这种方式来进行输入，从而有效地利用编码空间。注意，这个时候是没有提示的，需要用户对简字非常熟习才行。编码变换通过分号键触发，有时也通过Tab键和单引号触发。</p><p>(1) 一简字与一简字的组合</p><p>例如，「个人」一词，可以按词组的方式用<code>gerf</code>来输入。更好的方式是当成两个一简字用<code>g_r_</code>来输入，其中下划线表示空格，可以离散重码。然而最好的方式是采用编码变换，用<code>gr;</code>来输入，可以节约一次用键。</p><p>(2) 一简字与首选二简字词的组合</p><p>例如，「一会」可以用<code>yhv;</code>来输入，虽然不能节约用键，但是输入变得确定了，而且可以将<code>yihv</code>的首选让给「议会」，就起到了离散重码的作用。又如，「我富有」可以用<code>wfy;</code>来输入，其中「富有<code>fy</code>」是首选二简词。</p><p>(3) 次选二简词与一简字的组合</p><p>用Tab上屏的次选二简词与一简字可以组合起来通过Tab一起上屏，从而节约一次空格键。例如，「我们的」在常规输入时，得用<code>wm + Tab + d + 空格</code>，而利用组合变换后就只需<code>wmd + Tab</code>了。</p><p>(4) 一简字的组合与次选二简词</p><p>一简字与用Tab上屏的次选二简词可以组合起来通过单引号一起上屏，从而节约一次空格键。例如，「的时候」在常规输入时，得用<code>d + Tab + sh + 空格</code>，而利用组合变换后就只需<code>dsh&#39;</code>了。</p><p>(5) 首选二简字词与首选二简字词的组合</p><p>例如，「比快」在默认词库中是没有的，然而用户可能会误以为它是个库里有的词，于是就输入编码<code>bikk</code>，但是发现为空码。这时，如果用退格键删除后面两码，加空格上屏「比」字，再输入「快」字，代价是相当高昂的。幸好，有了组合变换的手段，加个分号就可以变为「比快」，并且也自动造好了这个词，下次就可以用词组来输入「比快」了。</p><p>又如，「小发明」可以用<code>xnfm;</code>来输入，而「便宜她」可以用<code>pyta</code>来输入，不管系统中有没有这两个词都一样。</p><p>(6) 首选二简字词与二简词的组合</p><p>首选二简字词与二简词可以组合起来通过单引号一起上屏，从而节约一次空格键。例如，「也能够」用单引号组合变化后，用<code>yeng&#39;</code>就可以输入了，否则就需要用<code>ye_ng&#39;</code>来输入。</p><p>(7) 首选二简字词与三简字的组合</p><p>首选二简字词与三简字可以组合起来通过分号一起上屏，虽然并不能节约用键，但可以避免回改。例如，假设想用户以为「都顶」是个系统有的词组，然而输入<code>dzdk</code>后发现没有该词，同时又知道「都」是二简字、「顶」是三简字，于是就可追加「顶」的第三码<code>e</code>后，再用分号变换来上屏「都顶」。</p><p>(8) 三个一简字的组合，可以用Shift+空格来输入，手机上可上滑空格。例如，「一个人」「就是了」「是不是」「不是不」等都可以这样输入。</p><p>(9) 二简字加两个一简字的组合，可以用Shift+空格来输入，手机上可上滑空格。例如，「有一个」「两个人」「那不是」「走下去」等都可以这样输入。</p><h3 id="_4-8-自定词典" tabindex="-1">4.8 自定词典 <a class="header-anchor" href="#_4-8-自定词典" aria-label="Permalink to &quot;4.8 自定词典&quot;">​</a></h3><p>除了声笔系列码公用的自定词典sbzdy.dict外，声笔小鹤还提供了手动调整词典sbxh.dict。如果用户觉得系统提供的静态字词如空码字词、声声词等不理想，还可以对它们进行调整和定制，甚至增加其它类型的字词。字词的编码可以是有理的，也可以是无理的，但是务必符合声笔小鹤的输入逻辑，否则可能影响顶功或造成无法预料的情况。修改的方法是，用编辑器修改sbxh.dict文件，保存后重新部署一下就可以生效。在修改的时候，一定要按照词典的格式进行，首列为词条，第二列为编码，两者之间以制表符分隔。</p><p>注意，有的编辑器默认会自动将制表符转换为空格，那样就会失败。如果是个别的条目，可以复制一条合规的来改。如果条目很多，就需要在编辑器设置中禁止自动将制表符转换为空格。</p><h3 id="_4-9-高级设置" tabindex="-1">4.9 高级设置 <a class="header-anchor" href="#_4-9-高级设置" aria-label="Permalink to &quot;4.9 高级设置&quot;">​</a></h3><h4 id="_4-9-1-单字模式" tabindex="-1">4.9.1 单字模式 <a class="header-anchor" href="#_4-9-1-单字模式" aria-label="Permalink to &quot;4.9.1 单字模式&quot;">​</a></h4><p>如果在输入的时候，突然遇到离散大的文字，需要以单字为主来输入，那么在电脑上可以按Ctrl+~或者F4快速切换到单字模式，在手机上则简单地点击状态栏的相应状态即可。此时，此时，仍然可以通过大写第二码来输入多字词，通过大写第三码来输入二字词和三字词。如果用户想默认为单字状态，那么可以修改schema文件，将pro_char项下的reset设置为1，并重新部署一下。</p><h4 id="_4-9-2-快调模式" tabindex="-1">4.9.2 快调模式 <a class="header-anchor" href="#_4-9-2-快调模式" aria-label="Permalink to &quot;4.9.2 快调模式&quot;">​</a></h4><p>在默认的情况下，声笔小鹤的单字是从第四码开始调频的，这有利于三简字的盲打，但是不利于缩短单字的码长。如果用户应用场景比较简单和单一，那么可能希望从第三码开始单字调频，以便尽量缩短码长。这时，可以按F4选择2后，在菜单中将慢调改为快调。若要默认为快调，可以修改schema文件，将switches中fast_change项下的reset设置为1，并重新部署一下。注意，快调只影响单字，不会影响词组。</p><h2 id="附录一-编码格式" tabindex="-1">附录一：编码格式 <a class="header-anchor" href="#附录一-编码格式" aria-label="Permalink to &quot;附录一：编码格式&quot;">​</a></h2><p>在后面各方案的编码格式中，采用了一下表达方式。</p><ul><li>s = [qwrtsdfgzxcvbyphjklnm]</li><li>y = [qwertasdfgzxcvbyuiophjklnm]</li><li>b = [aeuio]</li></ul><p><code>^</code>表示起始顶屏码位，字母后的数字表示词组中的第几个字，0特别地表示末字；<code>&#39;</code>表示码长调整位；s表示声母（大写时表示用大写字母输入），y表示双拼，b表示笔画。s采用 aeuio 以外的 21 个英文字母，y采用所有26个字母，b采用 aeuio 这几个元音字母。注意，笔画不足时，则重复末笔。</p><p>为了便于用户总结和记忆声笔小鹤的基本内容，现将其字词的编码格式以浓缩的表达式方式总结如下。</p><ul><li>单字 <code>syb^b&#39;bb</code></li><li>二字词 <code>s1y1s2y2^&#39;b1b1</code></li><li>三字词 <code>s1s2s3y3^&#39;b1b1</code></li><li>多字词 <code>s1s2s3s0^&#39;b1b1</code></li></ul>',170)]))}const M=u(N,[["render",F]]);export{I as __pageData,M as default};
