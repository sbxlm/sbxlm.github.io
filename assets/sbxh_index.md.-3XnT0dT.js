import{_ as e,c as a,o,V as c,f7 as d,f8 as p,f9 as i,fa as r,fb as t,fc as s,fd as l,fe as h,ff as _,fg as m,fh as n,fi as u,fj as b,fk as f,fl as g,fm as q,fn as x,fo as k,fp as j,fq as y,fr as P,fs as E,ft as v,fu as z,b_ as A,fv as T,fw as B}from"./chunks/framework.TV9jg5Us.js";const I=JSON.parse('{"title":"声笔小鹤","description":"","frontmatter":{"title":"声笔小鹤","date":"2020-12-08T00:00:00.000Z","typora-root-url":"..\\\\..\\\\themes\\\\next\\\\source"},"headers":[],"relativePath":"sbxh/index.md","filePath":"docs/sbxh/index.md"}'),w={name:"sbxh/index.md"},S=c('<h2 id="_1-概述" tabindex="-1">1 概述 <a class="header-anchor" href="#_1-概述" aria-label="Permalink to &quot;1 概述&quot;">​</a></h2><p>目前的双拼一般是在智能拼音输入法的基础上增加一个声母和韵母对应表来实现的。这样的好处是，可以同时支持多种双拼，并能共享字词库。但是，这种整句模式的智能双拼不便于兼容简拼，因此其缩减码长的效果被不能使用简拼大大削弱。强行兼容的话，又会极大损害音字转换的准确性，而且影响了两码一字的输入节奏。同时，单字的重码问题依然没有得到解决，回改选重非常麻烦，严重降低输入效率。有的输入法，如手心输入法，可以支持一个直接辅助码，在一定程度上缓解单字选重的问题，但是没有解决根本问题。</p><p>小鹤音形是自然码之后影响比较大的双拼双形输入法。小鹤音形采用字词编码的方式，解决了兼容简拼和缩减编码的问题，在四码时还能省略空格。同时，小鹤音形可以利用两个部件码来较好地区分单字重码。但是，由于需要同时掌握双音和双形，学习难度还是相当大的。</p><p>有没有什么办法降低小鹤音形的学习难度，同时提高它的效率，还增强它的功能呢？有这种好事吗？答案是肯定的。秘诀就是采用顶功编码技术！这样，可以让小鹤音形用户也享受顶功技术带来的红利。声笔小鹤就是对小鹤音形的顶功改造，并且取得了非常好的效果。</p><p>对于小鹤音形用户来说，学习声笔小鹤的成本是非常低的，只需要了解一下双拼的细微变化并掌握笔画即可，其基本内容是：声母不分平翘舌，零声母用v表示，韵母没有变化；双形用顺序笔画代替，用<code>aeuio</code>分别表示折、横、撇、竖、点五种笔画；重码用<code>aeuio</code>兼作选择键；重码太多时，可以追加首字前两笔来快速筛选重码。</p><h2 id="_2-优势" tabindex="-1">2 优势 <a class="header-anchor" href="#_2-优势" aria-label="Permalink to &quot;2 优势&quot;">​</a></h2><p>声笔小鹤相比小鹤音形的优势可以总结为：更简单、更高效和更强大。</p><p>更简单是因为：首先，声笔小鹤用v表示零声母，简化了零声母音节的编码方式；其次，声笔小鹤不区分平翘舌；最后，也是最重要的是，声笔小鹤用aeuio代表笔画，代替了复杂的辅助码。</p><p>更高效是因为：首先，单字三码起顶，码长更短；其次，字词四码时用aeuio选择重码，比原来的数字键好按，可以实现快速选重；最后，字词支持动态调频，可以减少击键次数。</p><p>更强大是因为：首先，声笔小鹤实现了字词分离，不再纠结是字优先还是词优先，可以支持GBK字符集超两万的汉字；其次，词组支持扩展编码，可以支持48万词组并快速离散重码；最后，具有自动词组功能，没有的词组拆开打过一次后就能自动造好。</p><h2 id="_3-快速入门" tabindex="-1">3 快速入门 <a class="header-anchor" href="#_3-快速入门" aria-label="Permalink to &quot;3 快速入门&quot;">​</a></h2><p>为了减轻初学者的记忆负担，在手机上提供了助记皮肤，可以长按<code>N</code>键打开或者关闭助记。在打开时，给出了韵母、笔画和零声母用键的提示，如下图所示。如果是在电脑上，则可以把该图并放在电脑桌面上，在打字的时候帮助记忆。</p><p><img src="'+d+'" alt="image-20230813150341672"></p><p>注意，「嗯n」[呣m」「嘸m」「呒m」这几个字是没有韵母的，这时用v作为韵母，称为零韵母。</p><h3 id="_3-1-基本编码" tabindex="-1">3.1 基本编码 <a class="header-anchor" href="#_3-1-基本编码" aria-label="Permalink to &quot;3.1 基本编码&quot;">​</a></h3><p>声笔小鹤的编码规则和示例如下。其中，s表示声母，不区分平翘舌；y表示韵母；b表示笔画。b为<code>aeuio</code>，s为b之外的21个英文字母，数字表示第几字（其中0表示末字），<code>_</code>表示空格。笔画不足时，则重复末笔。注意，您输入时，四码字词的候选顺序可能有变化，这是因为动态码长调整的缘故。本文在后面的动态码长一节，会专门讲动态码长调整。</p><ul><li>单字：<code>sybb</code>，即声母加韵母再加前两个笔画。例如，<code>就jqoe 从csuo 觉jnoo 钱qmue 貌mcuo 缘yraa 源yroo 简jmue</code>。注意，单字的后两码都是采用的顺序单笔画，而不是小鹤音形里复杂的双形，学习难度大大降低。</li><li>二字词：<code>s1y1s2y2</code>，即第一字的声母韵母加第二字的声母韵母。二字词的例子有<code>关系grxi 参加cjjx 正确zgqt 模范mofj 答应dayk</code>。注意，这里的<code>正zg</code>是没有区分平翘舌的，与小鹤音形的<code>正vg</code>不同。</li><li>三字词：<code>s1s2s3y3</code>，即前三字的声母加第三字的韵母。三字词的例子有<code>示范区sfqu 想不到xbdc 处理器clqi 宪兵队xbdv</code>。注意，这里的<code>示s 处c</code>是没有区分平翘舌的，与小鹤音形的<code>示u 处i</code>不同。</li><li>多字词：<code>s1s2s3s0</code>，即前三字的声母加末字的声母。多字词的例子有<code>爱因斯坦vyst 有限公司yxgs 人民共和国rmgg 声东击西sdjx</code>。注意，这里的<code>爱v</code>是零声母音，用v代表零声母，而小鹤音形里「爱」的首码为a。</li></ul><p>当一个字有多种不同的读音且声母不同时，则可以用多种方法输入该字。例如，「盛」对应的拼音有<code>cheng</code>和<code>sheng</code>，对应了c和s两个不同的声母，因而它在声笔小鹤中也会有两个编码，分别是<code>cgeu</code>和<code>sgeu</code>。</p><p>对于非成字偏旁部首，一般取其名称首字的声母作为它的声母进行编码。例如，「亻」的名称为单人旁，取「单」字的声母d作为「亻」的声母，可以用<code>djui</code>输入「亻」。不知道非成字偏旁部首的名称也没有关系，因始终可以用纯笔画的方式输入。比如，「亻」可以用<code>uiiii</code>输入。</p><p>在声笔小鹤中，单字和词组各自有不同的编码格式，它们享有不同的编码空间，不会发生冲突，不存在单字和词组那个优先的问题。单字肯定是用<code>sybb</code>格式，其第三码是笔画，而词组的编码第三码肯定是声母，笔画和声母所用的编码字母集合是不相交的。</p><p>例如，单字<code>觉jnoo 钱qmue 貌mcuo 缘yraa</code>，和词组<code>关系grxi 参加cjjx 示范区sfqu 想不到xbdc 人民共和国rmgg 声东击西sdjx</code>，它们之间是不可能重码的。</p><h3 id="_3-2-缩减编码" tabindex="-1">3.2 缩减编码 <a class="header-anchor" href="#_3-2-缩减编码" aria-label="Permalink to &quot;3.2 缩减编码&quot;">​</a></h3><p>声笔小鹤中的缩减编码，又称为缩减码，可以缩短字词的输入码，类似于搜狗拼音中的固顶字词或者五笔字型中的简码字，或称简码。</p><h4 id="_3-2-1-常规简码" tabindex="-1">3.2.1 常规简码 <a class="header-anchor" href="#_3-2-1-常规简码" aria-label="Permalink to &quot;3.2.1 常规简码&quot;">​</a></h4><p>声笔小鹤的单字有一、二、三级简码，分别称为一简字、二简字和三简字。一简字的例子有<code>就j 我w 没m</code>，二简字的例子有<code>从cs 此ci 起qi 来ld</code>，三简字的例子有<code>节jpe 未wwe 凝nko 管gru</code>。声笔小鹤的词组是不存在缩减码的。由于声笔小鹤的常规三简字数量庞大，高达1658个，而且不乏常见字，所以对单字输入效率的提升有很大帮助。这就是为什么声笔小鹤用极其简单的五个笔画代替小鹤音形的大量辅助码后，单字的平均码长反而下降的原因。</p><p>在使用声笔小鹤时，要尽量使用单字的缩减编码，对输入效率的提升帮助很大，因为缩减码的码长短，而且是缩减码是静态编码，不会发生改变，便于形成条件反射。</p><h4 id="_3-2-2-空位简码" tabindex="-1">3.2.2 空位简码 <a class="header-anchor" href="#_3-2-2-空位简码" aria-label="Permalink to &quot;3.2.2 空位简码&quot;">​</a></h4><p>由于双拼的离散能力比较差，所以声笔小鹤的单字编码空间存在大量的空位，如果不加以利用就会造成很大的浪费。为此，利用单字的空码位安排了一些具有特殊编码的常见单字和二字词，分为声笔字、声笔笔词、声声词和声声笔词（详见本文后的附录）。</p><p>声笔字的编码方式是声母+首笔，如<code>刃ra 扶fe 极je 请qo 项xe</code>。为了便于用户使用，这些字在输入声母后会有如下提示。</p><p><img src="'+p+'" alt="image-20231210182629607"></p><p>上述简码字在后接二简字时，会形成无重码的二字组合，可以利用这种特性进行盲打输入，比如：「极好」「扶手」「项项」等。</p><p><img src="'+i+'" alt="image-20230617082848989"></p><p>声笔笔词的编码方式是首字声母+次字的首笔和次笔，如<code>比较bea 幸好xau 技术jei 激动jee</code>。声声词的编码方式是两个字的声母，如<code>重新cx 舞曲wq 结构jg 双目sm</code>。声声笔词的编码方式是首字的声母+次字的声母和首笔，如<code>并非bfi 独立dlo 赣南gne</code>。声笔笔词和声声笔词在紧接后续字词的声母时可以被顶上屏幕，因此一般只需要三键。</p><p>为了便于用户使用，上述二字词在输入全码后会有如下提示。</p><p><img src="'+r+'" alt="image-20230617083203372"></p><p><img src="'+t+'" alt="image-20230617083248196"></p><p><img src="'+s+'" alt="image-20230617083316204"></p><h4 id="_3-2-3-组合简码" tabindex="-1">3.2.3 组合简码 <a class="header-anchor" href="#_3-2-3-组合简码" aria-label="Permalink to &quot;3.2.3 组合简码&quot;">​</a></h4><p>声笔小鹤三简码位上设置是二简字词和一简字的组合，而不一定是真正的词，例如：<code>挂是gxs 时是sis 富有就fyj 无限发wxf</code>等等。这种组合一般需要空格上屏，不管是否构成词组，是绝对没有重码的，可以放心大胆的盲打。</p><h4 id="_3-2-4-高频简词" tabindex="-1">3.2.4 高频简词 <a class="header-anchor" href="#_3-2-4-高频简词" aria-label="Permalink to &quot;3.2.4 高频简词&quot;">​</a></h4><p>在声笔小鹤中，还有一种二字简词，是直接从声笔简码拿过来的，对于熟悉声笔简码的人来说，可能已经记住了。这些二字简词都是取两字声母作为编码的高频词，例如：「美元」「管理」「科技」等等，输入两码时会提示在单字之后作为次选，可用Tab或者单引号上屏。</p><p><img src="'+l+'" alt="image-20231210182742862"></p><p>二字简词在声笔简码中称为声声词，共有441个，详见<a href="https://sbxlm.gitee.io/sbjc/#9-4-3-%E5%A3%B0%E5%A3%B0%E8%AF%8D" target="_blank" rel="noreferrer">声声词</a>。为了便于用户使用，这些词在输入全码后会有如下提示。</p><p><img src="'+h+'" alt="image-20230617085021292"></p><h3 id="_3-3-扩展编码" tabindex="-1">3.3 扩展编码 <a class="header-anchor" href="#_3-3-扩展编码" aria-label="Permalink to &quot;3.3 扩展编码&quot;">​</a></h3><h4 id="_3-3-1-单字扩展编码" tabindex="-1">3.3.1 单字扩展编码 <a class="header-anchor" href="#_3-3-1-单字扩展编码" aria-label="Permalink to &quot;3.3.1 单字扩展编码&quot;">​</a></h4><p>由于汉语声母和韵母组合规则的限制，双拼编码对同音字的离散能力比较弱。声笔小鹤可以通过增加字的前两个笔画来快速地离散重码，这和传统的双音双形输入法类似。</p><p>但是，在声笔小鹤中，因为两个笔画的去重能力比较差，所以对于重码的重灾区，仍然需要一次甚至多次翻页才能找到想要的字。比如，「吚」就需要五次翻页操作，在第六页上才能找到。</p><p><img src="'+_+'" alt="image-20230620142534239"></p><p><img src="'+m+'" alt="image-20230620142601041"></p><p><img src="'+n+'" alt="image-20230620142645666"></p><p><img src="'+u+'" alt="image-20230620142703921"></p><p><img src="'+b+'" alt="image-20230620142756856"></p><p><img src="'+f+'" alt="image-20230620142826674"></p><p>为了解决这个问题，声笔小鹤利用顶功编码的特性，通过扩展编码来追加字的第3、4个笔画，就能做到输入单字时基本上无需翻页了，比如下面的「嗌」字。</p><p><img src="'+g+'" alt="image-20231217161646336"></p><h4 id="_3-3-2-词组扩展编码" tabindex="-1">3.3.2 词组扩展编码 <a class="header-anchor" href="#_3-3-2-词组扩展编码" aria-label="Permalink to &quot;3.3.2 词组扩展编码&quot;">​</a></h4><p>为了适应现今的信息社会，中文词汇的数量暴增，传统字词输入法的四码空间显得捉襟见肘。按照26个字母编码，满打满算，四码空间也只有<code>26×26×26×26 = 456,976</code>个码位。然而，实际的输入法空间利用率是很低的，编码分布很不均匀，所以随着词组数量的增加，重码的重灾区越来越多。</p><p>声笔小鹤的四码词组空间为<code>21×26×21×26 = 298,116</code>个码位，而收录的词组数量有48万多。所以，词组的重码重灾区是比较常见的。即使比较常用的词，都有可能需要翻页，甚至数次翻页来输入。翻页查找属于强交互的操作，每页都需要用眼睛扫瞄六个选项，是非常耗费时间的，会大大降低输入效率，而且容易看花眼而出错。</p><p>为了解决以上问题，声笔小鹤采用了扩展编码，利用编码的顶功特性，通过追加首字前两个笔画，迅速扩大了25倍的编码空间，在重码严重时，可以快速筛选出所需的重码词。结合后述动态码长的使用，完美地兼顾了编码空间与输入效率，既能享有巨大的编码空间，又能具有很短的平均码长，两全其美。如果追加两码后，仍然有重码，还是可以通过<code>aeuio</code>进行字母选重，始终可以避免使用低效的数字键。</p><p>例如，「质子」一词在第一次输入时，在输入<code>zizi</code>后需要按三次翻页键，即出现在第四页上，然后再用<code>o</code>选择，如下图所示。每一页，都需要用眼睛扫视 6 个选项，人机交互频繁，效率很低。</p><p><img src="'+q+'" alt="自然小鹤Zizi"></p><p>然而，如果再追加第一字前两个笔画的话，「质子」就出现在第一页上，如下图所示。</p><p><img src="'+x+'" alt="自然小鹤Ziziuu"></p><p>可见，在输入重码太多的二字词时，通过追加首字头两个笔画，会大大地提高输入效率。</p><p>三字词和多字词也可以类似地使用扩展编码。比如，「旧石器」一词在第一次输入时，在输入<code>jsqi</code>后需要按多次翻页键，然后再进行选择，效率比较低，但是在追加首字的前两笔<code>ii</code>后它就出现在第一页上了。再如，「结绳记事」在第一次输入时，输入<code>jsjs</code>后需要按多次翻页键才能找到，而在加上首字的前两笔<code>aa</code>后就可能没有重码了。</p><h3 id="_3-4-编码反查" tabindex="-1">3.4 编码反查 <a class="header-anchor" href="#_3-4-编码反查" aria-label="Permalink to &quot;3.4 编码反查&quot;">​</a></h3><p>在使用声笔小鹤的时候，特别是在学习声笔小鹤之初，不可避免地会遇到不会打的字。怎么办呢？程序提供了丰富的反查手段，可以通过笔画和拼音来反查编码，还可以采用字海两分来反查和输入非 GBK 汉字。另外，还通过反查提供了临时拼音输入法。</p><h4 id="_3-4-1-拼音反查" tabindex="-1">3.4.1 拼音反查 <a class="header-anchor" href="#_3-4-1-拼音反查" aria-label="Permalink to &quot;3.4.1 拼音反查&quot;">​</a></h4><p>在知道拼音而不知道字形时用 i 引导拼音反查，注意零声母要用 v 充当。</p><p>例如，要反查「访」字的编码，就在输入 i 之后再输入它的拼音 fang，所以实际的输入为 ifang，结果如下图所示。反查出「访」字的编码为 fhoaoe。如果是多音字，那么就会有多个编码，如图中的「房」字就有 fhoaeu 和 phoaeu 两个编码。</p><p><img src="'+k+'" alt="image-20230620143713465"></p><p>对于零声母字，如「案」字，在反查时除了用 i 引导还需要在正常拼音的前面加 v，因为 an 是零声母音，所以实际的输入为 ivan。在图中提示出的<code>案vjooaa</code>，表示「案」字的编码为 vjooaa。</p><p><img src="'+j+'" alt="image-20230620143911208"></p><h4 id="_3-4-2-笔画反查" tabindex="-1">3.4.2 笔画反查 <a class="header-anchor" href="#_3-4-2-笔画反查" aria-label="Permalink to &quot;3.4.2 笔画反查&quot;">​</a></h4><p>在完全不知道读音的时候，直接用 <code>aeuio</code> 按顺序输入笔画进行反查，无需引导。</p><p>在下面的笔画反查的例子中，不用引导而直接输入 uuao 后，出现了以这四个笔画开头的字。第一项是<code>反fluuao</code>，表示「反」字的编码为 fluuao。第二项为<code>般bjuuao bouuao pjuuao</code>，说明「般」是个多音字，有三个编码。</p><p><img src="'+y+'" alt="image-20230620144845743"></p><h4 id="_3-4-3-两分反查" tabindex="-1">3.4.3 两分反查 <a class="header-anchor" href="#_3-4-3-两分反查" aria-label="Permalink to &quot;3.4.3 两分反查&quot;">​</a></h4><p>通过 i 引导的拼音还支持用字海两分法来进行反查， 支持查找八万多汉字，一般用于反查难读而易于两分的字或者输入 GBK 以外的字。GBK 以外的字，声笔小鹤不提供正常编码，不能按正常方式输入，只能在两分查找到后选择输入。</p><p>下面是字海两分法查找的例子。第一个例子是反查「龖」字的编码，在输入到第二部分拼音的第一码时就出来了。第二个例子是通过输入「尸」和「水」的拼音来反查「尿」的编码，输入了两部分完整的拼音。</p><p><img src="'+P+'" alt="image-20230620145015416"></p><p>对于非 GBK 字集里的「㕛」字，它是没有编码的，只能用两分法来输入，如下所示。此时，需要移动光标选中该字，然后再用空格上屏。</p><p><img src="'+E+'" alt="image-20230620145107878"></p><h4 id="_3-4-4-临时拼音" tabindex="-1">3.4.4 临时拼音 <a class="header-anchor" href="#_3-4-4-临时拼音" aria-label="Permalink to &quot;3.4.4 临时拼音&quot;">​</a></h4><p>在一时半会想不起某个词中某个字的笔画，而这个字因为不常见又不方便用单字进行反查时，可以用 a 引导临时拼音来变相地输入词组或者查到该字的写法。但是，对于反查出来的词组是不会显示编码的。</p><p>例如，「饕餮」可以用 ataotie 来查找和输入，而「耄耋」可以用 amaodie 来查找和输入。注意，用于引导的字母 a 是不会显示的。</p><p><img src="'+v+'" alt="image-20230620145146913"></p><p><img src="'+z+'" alt="image-20230620145213984"></p><p>从以上结果可以看出，临时拼音也兼具有拼音反查和两分反查的能力，但是并不推荐这么做，而应该用 i 来引导拼音反查和两分反查，这是因为用 a 引导时需要两次 Esc 键才能清除编码。之所以现在还保留着 a 引导的这种单字反查编码的能力，是为了兼容历史版本。</p><h2 id="_4-技能提升" tabindex="-1">4 技能提升 <a class="header-anchor" href="#_4-技能提升" aria-label="Permalink to &quot;4 技能提升&quot;">​</a></h2><h3 id="_4-1-续码顶屏" tabindex="-1">4.1 续码顶屏 <a class="header-anchor" href="#_4-1-续码顶屏" aria-label="Permalink to &quot;4.1 续码顶屏&quot;">​</a></h3><p>在小鹤音形中，当字词的码长不足四时，需要用空格上屏，只有码长为四时的首选字词才能省略空格。在声笔小鹤中，三简字在后接其它字词时，空格是可以省略的。</p><p>例如，声笔小鹤的三简字如<code>节jpe 未wwe 凝nko 管gru</code>，在连续输入时都不需要空格上屏。</p><p>再如，用纯单字输入「中国人民站起来了。」这句话，声笔小鹤输入时的用键为 <code>zs_go_r_mb_zjoqi_ld_l.</code>。若切换到单字状态，那么二简字的空格还可省略，能少用5键，进一步提升效率。</p><h3 id="_4-2-字母选重" tabindex="-1">4.2 字母选重 <a class="header-anchor" href="#_4-2-字母选重" aria-label="Permalink to &quot;4.2 字母选重&quot;">​</a></h3><p>传统输入法通常都是用数字键来选择重码字词。由于击打数字键需要跨行进行，手指移动距离远，容易产生误击，一般人都无法盲打，所以会严重影响输入速度。搜狗拼音虽然可以设置用字母选择重码字词，但是必须先用空格键引导，效果大打折扣。</p><p>拼音用户对数字键的依赖程度比五笔用户高得多，熟练的五笔用户只在输入四码后出现重码时，才会使用数字键选择，有的甚至通过左右 Shift 键选择 1、2 重码来避免使用数字键，以便提高击键率，降低误击率。搜狗拼音的重码很多，前后翻页的操作很频繁，所以它把逗号和句号键作为默认的前后翻页键，以便快速、准确地翻页。但是，这样做又使得在输入逗号和句号这两个常见标点符号时无法进行顶屏而实现快速输入。</p><p>在声笔小鹤中，当输入的编码达到四码时，如果有重码字词，那么就用<code>aeuio</code>兼做重码选择键。这时，重码字前的<code>aeuio</code>并不代表笔画，仅仅表示出现的顺序，和传统输入法的数字选择键作用完全一样。不过，用户在击打<code>aeuio</code>时要比击打数字键方便、快速得多。</p><p>例如，搜狗拼音输入<code>jiao</code>时，会出现很多同音字供用数字键选择，可能的选项如下，因动态调频的原因，结果会有出入。</p><p><img src="'+A+'" alt="搜狗jiao"></p><p>声笔小鹤则不一样，在输入<code>jnoo</code>时，出现的重码字则是用<code>aeuio</code>选择，非常方便。</p><p><img src="'+T+'" alt="image-20230617091027173"></p><p>对于词组来说，也是一样的，例如<code>yiyh</code>。</p><p><img src="'+B+'" alt="image-20221204185724325"></p><h3 id="_4-3-动态码长" tabindex="-1">4.3 动态码长 <a class="header-anchor" href="#_4-3-动态码长" aria-label="Permalink to &quot;4.3 动态码长&quot;">​</a></h3><p>动态码长是指在输入的过程中，字词的码长会适应用户的使用习惯而发生变化，越常用的字词码长会变得越短，而不常用的字词码长会变长，从而在总体上提高输入效率。动态码长不仅是码长的调整，也包括重码顺序的调整，实际上都是因为对频率的调整而引起的。</p><p>当四码字词有重码的时候，如果选择了某个非首位的字词，那么它的频率权重就会提高，在下次输入的时候，其排序就会提前。一般通过一、两次选择就可以提前到首位，从而就能利用顶屏来节约一次按键。</p><p>例如，第一次输入<code>jiei</code>时，「吉」可能是排在第五位的，那么用<code>i</code>选择上屏后，下次输入就可能排在首位了，于是可以利用顶屏节约一次选择键。</p><p>再如，第一次输入<code> suss</code> 时，如果「输送」排在第二位，用<code>a</code>选择上屏后，下次输入就可能排在首位了。</p><p>如果在输入的时候采用了扩展编码，比如用<code>zizioa</code>输入了「之志」，那么在下次输入的时候一般就只需要<code>zizi</code>就可以了，码长得到了缩短。</p><h3 id="_4-4-自动词组" tabindex="-1">4.4 自动词组 <a class="header-anchor" href="#_4-4-自动词组" aria-label="Permalink to &quot;4.4 自动词组&quot;">​</a></h3><p>声笔小鹤目前自带48万多词组，覆盖的面已经很广。但是，用户在使用过程中不可避免地还会遇到缺词的情况，需要添加新的词组，而且对于不满意的词组可能还想删除。为了避免产生大量不需要的废词，在单字模式时是不进行自动造词的。</p><p>(1) 自动造词</p><p>声笔小鹤的造词是在输入过程中自动进行的。例如：输入<code>声sge 笔biu</code>后，下次输入<code>sgbi</code>时就会有该词了，只是如果有重码的话，新造的词会排在后面。如果重码太多，可以追加首字前两笔或者用Shift+Tab一次性地跳到最后，以避免多次翻页。自动造的词组是临时词组，带有太极标志，优先级别低，只有在选择使用一次以后，才会成为正式词组，并提高优先级别。</p><p>需要注意的是，在进行枚举自动造词的时候，是以编码对应的字、词为单位来进行组合的，并不是以单字为单位的。例如，在输入<code>声笔sgbi 系列xilp 码mae</code>后，生成的词组为「声笔系列码」「声笔系列」「系列码」，而不会生成「声笔系」「笔系列」「列码」等。另外，如果之后马上使用了退格键，系统就会自动删除所造的词组；中间夹杂有非汉字的话，也会中断造词。</p><p>(2) 词组清理</p><p>由于声笔小鹤是采用的自动造词策略，在提供方便的同时也会产生大量的废词，所以系统提供了废词清理功能，能够将用户几乎不使用的新造临时词组自动清除。对于少量暂时还未被清理的废词，用户不必理会，到时限后就会被自动删除。</p><p>在必要的时候，如用户错误地确认了临时词组，系统也提供了手动删除的手段。在电脑上，通过方向键将光标移动到该词上面，再按 <code>Control + Delete</code> 键来删除。在手机上，则通过左右滑动空格来移动光标到要删除的词，然后下滑退格键删除。</p><h3 id="_4-5-条件顶屏" tabindex="-1">4.5 条件顶屏 <a class="header-anchor" href="#_4-5-条件顶屏" aria-label="Permalink to &quot;4.5 条件顶屏&quot;">​</a></h3><p>声笔小鹤的单字除了三简字可以被顶上屏幕外，其二简字也可以在一定条件下被顶上屏幕，这是一种非常奇特的能力。条件顶是指在输入二字词的时候，若第一字正确而第二字不对时，可以追加第二字的第三码，将第一字顶上屏幕，前提是追加的第三码与选择键没有冲突。</p><p>例如，在输入「快顶」的时候，发现系统没有该词，而且「顶」字的第三码e又没有被重码词占用，那么在输入e的时候就会将「快」字顶上屏幕，留下「dke」，对应的字正是「顶」。这样，就不必用退格键来清除「dk」两码，用空格先上屏「快」字，再输入「顶」字了。</p><p>注意，被顶上屏的字始终是前两码对应的二简字，而不一定是当前显示的第一个字。</p><p>例如，假设你想输入「见代」，发现打jmdd后出来的首选是「肩带」，「代」的第三码u没被重码占用，那么在输入u的时候，被顶上屏的是「见」而不是「肩」，因为「见」才是二简字。</p><h3 id="_4-6-大写顶屏" tabindex="-1">4.6 大写顶屏 <a class="header-anchor" href="#_4-6-大写顶屏" aria-label="Permalink to &quot;4.6 大写顶屏&quot;">​</a></h3><p>在使用条件顶的时候，如果第三码被选重键占用，那么就无法顶前两码对应的二简字上屏，需要退格删除两码，上屏二简字然后再重新输入第二字的编码，非常浪费。通过大写第二字的第三码则可以无条件地把二简字顶上屏而留下三个编码，可以使输入过程更加流畅，且不浪费已经输入的编码。</p><p>例如，在输入「快码」的时候，发现系统没有该词，但是「码」的第三码e已经被重码「快吗」占用，所以使用条件顶是不行的，这时就可以用大写的E来将「快」顶上屏，输入法将E转换为小写e后留下三码<code>mae</code>，可以接着输入后面的编码，没有丝毫浪费。</p><p>大写后续字词的声母也可以进行顶屏操作，但使用场景不一样，一般使用在二简字后忘记加空格的时候。例如，在输入「有断点」时，输入了<code>yz</code>但忘记了加空格上屏，接着输入了<code>dr</code>，这时出来的是「右端」。不管是用<code>ESC</code>清除后重新输入，还是用退格键修改，成本都非常高。然而，接着用大写输入「点」的首码<code>D</code>，「有」字就会被顶上屏幕，剩下<code>drd</code>三码，再输入「点」的第二码<code>m</code>即可输入「断点」了。</p><p>另外，在一、二、三码后，用大写后续字词的首码也可以将首选字词顶上屏幕。「那是不行的」可以用<code>nasBXkD</code>来输入。</p><p>不过，需要注意的是，大写顶屏在大写作为编码的时候是无效的。在声笔小鹤的单字模式下，第三码大写是作为编码用来输入词组的，此时不能顶前面的两码。</p><h3 id="_4-7-组合变换" tabindex="-1">4.7 组合变换 <a class="header-anchor" href="#_4-7-组合变换" aria-label="Permalink to &quot;4.7 组合变换&quot;">​</a></h3><p>除了顶屏之外，编码变换也是节约用键的重要手段。一、二简字的组合，不管是不是词组，都可以通过这种方式来进行输入，从而有效地利用编码空间。注意，这个时候是没有提示的，需要用户对简字非常熟习才行。编码变换通过分号键触发，有时也通过Tab键和单引号触发。</p><p>(1) 一简字与一简字的组合</p><p>例如，「个人」一词，可以按词组的方式用<code>gerf</code>来输入。更好的方式是当成两个一简字用<code>g_r_</code>来输入，其中下划线表示空格，可以离散重码。然而最好的方式是采用编码变换，用<code>gr;</code>来输入，可以节约一次用键。</p><p>(2) 一简字与首选二简字词的组合</p><p>例如，「一会」可以用<code>yhv;</code>来输入，虽然不能节约用键，但是输入变得确定了，而且可以将<code>yihv</code>的首选让给「议会」，就起到了离散重码的作用。又如，「我富有」可以用<code>wfy;</code>来输入，其中「富有<code>fy</code>」是首选二简词。</p><p>(3) 次选二简词与一简字的组合</p><p>用Tab上屏的次选二简词与一简字可以组合起来通过Tab一起上屏，从而节约一次空格键。例如，「我们的」在常规输入时，得用<code>wm + Tab + d + 空格</code>，而利用组合变换后就只需<code>wmd + Tab</code>了。</p><p>(4) 一简字的组合与次选二简词</p><p>一简字与用Tab上屏的次选二简词可以组合起来通过单引号一起上屏，从而节约一次空格键。例如，「的时候」在常规输入时，得用<code>d + Tab + sh + 空格</code>，而利用组合变换后就只需<code>dsh&#39;</code>了。</p><p>(5) 首选二简字词与首选二简字词的组合</p><p>例如，「比快」在默认词库中是没有的，然而用户可能会误以为它是个库里有的词，于是就输入编码<code>bikk</code>，但是发现为空码。这时，如果用退格键删除后面两码，加空格上屏「比」字，再输入「快」字，代价是相当高昂的。幸好，有了组合变换的手段，加个分号就可以变为「比快」，并且也自动造好了这个词，下次就可以用词组来输入「比快」了。</p><p>又如，「小发明」可以用<code>xnfm;</code>来输入，而「便宜她」可以用<code>pyta</code>来输入，不管系统中有没有这两个词都一样。</p><p>(6) 首选二简字词与二简词的组合</p><p>首选二简字词与二简词可以组合起来通过单引号一起上屏，从而节约一次空格键。例如，「也能够」用单引号组合变化后，用<code>yeng&#39;</code>就可以输入了，否则就需要用<code>ye_ng&#39;</code>来输入。</p><p>(7) 首选二简字词与三简字的组合</p><p>首选二简字词与三简字可以组合起来通过分号一起上屏，虽然并不能节约用键，但可以避免回改。例如，假设想用户以为「都顶」是个系统有的词组，然而输入<code>dzdk</code>后发现没有该词，同时又知道「都」是二简字、「顶」是三简字，于是就可追加「顶」的第三码<code>e</code>后，再用分号变换来上屏「都顶」。</p><p>(8) 三个一简字的组合，可以用Shift+空格来输入，手机上可下滑空格。例如，「一个人」「就是了」「是不是」「不是不」等都可以这样输入。</p><p>(9) 二简字加两个一简字的组合，可以用Shift+空格来输入，手机上可下滑空格。例如，「有一个」「两个人」「那不是」「走下去」等都可以这样输入。</p><h3 id="_4-8-自定词典" tabindex="-1">4.8 自定词典 <a class="header-anchor" href="#_4-8-自定词典" aria-label="Permalink to &quot;4.8 自定词典&quot;">​</a></h3><p>除了声笔系列码公用的<a href="https://sbxlm.gitee.io/sbjc/#6-%E8%87%AA%E5%AE%9A%E8%AF%8D%E5%85%B8" target="_blank" rel="noreferrer">自定词典</a>sbzdy.dict外，声笔小鹤还提供了手动调整词典xhzdy.dict。如果用户觉得系统提供的sbb字和数选词不理想，还可以对它们进行调整和定制，甚至增加其它类型的字词。字词的编码可以是有理的，也可以是无理的，但是务必符合声笔小鹤的输入逻辑，否则可能影响顶功或造成无法预料的情况。修改的方法是，用编辑器修改xhzdy.dict文件，保存后重新部署一下就可以生效。在修改的时候，一定要按照词典的格式进行，首列为词条，第二列为编码，两者之间以制表符分隔。</p><p>注意，有的编辑器默认会自动将制表符转换为空格，那样就会失败。如果是个别的条目，可以复制一条合规的来改。如果条目很多，就需要在编辑器设置中禁止自动将制表符转换为空格。</p><h3 id="_4-9-单字模式" tabindex="-1">4.9 单字模式 <a class="header-anchor" href="#_4-9-单字模式" aria-label="Permalink to &quot;4.9 单字模式&quot;">​</a></h3><p>如果在输入的时候，突然遇到离散大的文字，需要以单字为主来输入，那么在电脑上可以按Ctrl+~或者F4快速切换到单字模式，在手机上则简单地点击状态栏的相应状态即可。此时，若第三码用大写，则仍然可以输入常规四码词组。</p><p>如果用户想默认为单字状态，那么可以修改schema文件，将pro_char项下的reset设置为1，并重新部署一下。</p><h2 id="附录一-编码格式" tabindex="-1">附录一：编码格式 <a class="header-anchor" href="#附录一-编码格式" aria-label="Permalink to &quot;附录一：编码格式&quot;">​</a></h2><p>在后面各方案的编码格式中，采用了一下表达方式。</p><ul><li>s = [qwrtsdfgzxcvbyphjklnm]</li><li>y = [qwertasdfgzxcvbyuiophjklnm]</li><li>b = [aeuio]</li></ul><p><code>^</code>表示起始顶屏码位，字母后的数字表示词组中的第几个字，0特别地表示末字；<code>&#39;</code>表示码长调整位；s表示声母（大写时表示用大写字母输入），y表示双拼，b表示笔画。s采用 aeuio 以外的 21 个英文字母，y采用所有26个字母，b采用 aeuio 这几个元音字母。注意，笔画不足时，则重复末笔。</p><p>为了便于用户总结和记忆声笔小鹤的基本内容，现将其字词的编码格式以浓缩的表达式方式总结如下。</p><ul><li>单字 <code>syb^b&#39;bb</code></li><li>二字词 <code>s1y1s2y2^&#39;b1b1</code></li><li>三字词 <code>s1s2s3y3^&#39;b1b1</code></li><li>多字词 <code>s1s2s3s0^&#39;b1b1</code></li></ul><h2 id="附录二-简码字词" tabindex="-1">附录二：简码字词 <a class="header-anchor" href="#附录二-简码字词" aria-label="Permalink to &quot;附录二：简码字词&quot;">​</a></h2><p>(1) 一简字：21个，详见：<a href="https://sbxlm.gitee.io/sbjc/#9-4-1-%E4%B8%80%E7%AE%80%E5%AD%97" target="_blank" rel="noreferrer">一简字</a></p><p>(2) 声韵字 ：360个</p><blockquote><p>吧宾报白本崩帮比办并便表波别部被查草才车沉成长此产揣创错传从处吹村仇大道带得扥等当地但定点调多爹丢断动都对得嗲顿都法分风方反佛夫非否嘎高该各跟更刚感怪光国关公姑规给挂滚够哈好还何很横行汉怀黄活欢红乎会黑话婚后进己经将见叫接九卷炯决据家军卡考开科肯坑康看快况扩款空苦亏跨困口拉林老来乐冷浪里兰领两连料落烈流乱龙略路律类俩论楼吗民毛买么们梦忙密满明面妙模灭缪目呒美某那您脑乃呢嫩能囊尼难宁娘年鸟诺聂牛暖农虐怒女内耨怕品跑派喷朋旁皮盘评片飘破瞥普配剖亲起情强前瞧且求全穷却区恰群绕热任仍让日然若软容如瑞润柔杀少赛色身生上时三摔双说算送数水谁刷孙手她逃太特腾堂体谈听天条脱铁团同突推忒吞头啊奥爱恶嗯昂安哦儿嗯誒欧瓦外问翁望万握无为心西行想现小些修选兄学许夏寻亚因要也样以眼应哟原用月于云有咱找再着真正张子展拽装作转中主最这抓准走</p></blockquote><p>(3) 声笔字：21个</p><blockquote><p>百扶咐归虎际极觉咳拍驱青请刃岸饿武味险项兴</p></blockquote><p>(4) 声笔笔词：129个</p><blockquote><p>比较避开本报暴露变成达到放到负责反正飞来发布否则防止废旧风光法师翻译访问发觉给予刚刚观点工业观赏各省何以哈哈皇上行业和尚很少会议继续居民军队交通姐姐接到激动技术进来具有精神家庭进门渐渐街道考验开口考虑开业宽敞孔雀密码碰到朴素平均跑来平面全书奇异权限却又全力亲切全球请求前来全面确认青衣其间其它权益容纳软弱认出人参容忍柔软如有日常团结提到太平而又按照而非安监耳光而归暗访欧洲爱着暗处按键暗自二人安徽完毕位于维护往来伟大外国午餐物业我当我省训练吸引仙子学习幸好相比形式迅速醒来下面小心西部询问心情向前一致用户愿意眼前组织</p></blockquote><p>(5) 声声词：声笔所有方案共用的有441个，详见<a href="https://sbxlm.gitee.io/sbjc/#9-4-3-%E5%A3%B0%E5%A3%B0%E8%AF%8D" target="_blank" rel="noreferrer">声声词</a>。声笔小鹤专用的空位声声词还有如下165个。</p><blockquote><p>不料兵器病人不时本帖悲哀不幸毕业标准传播沉默常年磁盘产权春天称为重新大步道路地图发布扶持发动付款分离丰满方能肥胖风情芙蓉放松附图份额放下富有改变光芒概念挂牌敢情跟他货币画面还能活泼环球合同检查简单积分机构结合究竟教案均为竞争开办楷模苦难开盘空气卡通可谓来访目录茫然描述模特某些命运男性纽约频率聘请骗人评审葡萄破案平行便宜青春强调欺负情歌清华瞧见去爱全文亲自热播瑞典任课日历入门容纳肉片日期肉体人物热心随便神秘首脑食品时期神态同伴台风谈论提前偷偷叹息二百二哥爱看爱恋恶魔安娜耳旁二期暗示凹凸而行而言文本我才文科威力外贸为难王牌舞曲侮辱为首网通维尔无限文艺物质相处行动西方相关协会袭击相爱新闻行政有点应付英国原谅页面又能硬盘尤其幼儿以外影响这边咱们智能制品追求昨天</p></blockquote><p>(5) 声声笔词：940 个</p><blockquote><p>并非罢了不理变量不论巴黎不强版权并且不清标签不如般若本日不容不然本书办事不少比赛本身不通半天标题把它摆脱贝阿北欧彼岸备案不爱保险不想不小不许不行不已必要不易表演不用保障不再帮助保证部长承办成本初步传遍苍白诚恳仓库村民场面聪明出门成名超女嘲弄车内承诺菜鸟彩屏彩票出品裁判唱片超强长期插曲从前春秋出台餐厅长叹冲突朝廷创维从未春晚错误此外持续呈现从小程序朝鲜躲避打扮地步大半担保打发大夫大幅对方对付得了道理大量独立带领党群电器当前对她动态打听低头独特大卫第五大为地位短线地下大小担心对象反驳发表腐败封闭方便付出方才发财房产风采辅导负担非典奋斗非但复垦分开封口访客疯狂翻了飞龙房里分类福利父母封面分明房门风貌愤怒抚弄房内烦恼飞鸟放屁发票废品反叛扶贫奉劝夫妻分歧放弃风气缝纫繁荣肥肉否认妇人附属方式凡是发送翻身反弹飞天发贴法庭繁体妨碍飞蛾方案菲尔风险分析反响放心方向法院飞扬反映发言费用改编公布告别干部官兵广泛股份港口购买规模高明歌迷改名功能赣南国内工农观念滚屏股票高频各派光盘光驱供求歌曲感情国企沟通国土感叹过头个体国王官网更为国外回避毫不河北何必伙伴花费横幅黑马号码好吗昏迷毫秒很难湖南回暖胡闹怀念黑屏琥珀货品好评魂魄很强好奇火器行情花钱后退航天话题会谈话筒好玩海外基层坚持经常警察进程绝对见到监督决定记得经费姐夫绝非警方肌肤交给经过金刚机关尽管结婚计划惊呼江湖机会拒绝积极紧紧解决接近金娥进而激昂金额饥饿结尾紧握今晚绝望交往紧张简直集中接着机制捆绑开本拷贝看病空白快餐刊登快马开幕昆明快门科贸困难柯南课内苦恼看你开辟开拍宽频可怕卡片跨骑快去况且开启客气快如开通开拓课堂空调看他库娃可恶口味看完看我裂缝老夫力帆立法礼服乐观例如联通里头连续留下流星良心面对名单免费魅力忙碌面临明亮命令明确没钱毛绒闷热明日面容猛然秘书模式面上魔兽面色每台每天煤炭眉头媒体木耳命案摩尔冒险梦想明显描写面向绵阳美元贸易满意每月泥巴内部农副南非南方能给你跟哪里女郎年利扭曲你若牛肉南通难题那条诺阿女王难忘年限你想哪些内心你先难以你要农业能源能用男子排队批发跑了披露批量评论毗邻皮皮频频骠骑跑去派遣抛弃喷泉譬如疲软皮肉漂染仆人评书拍摄爬上配送迫使平台配套陪同烹调怕他皮埃佩恩配额配偶拍戏剖析咆哮排序评选濮阳颇有番禺培养飘逸品种取出汽车清晨其次全程球队全都起点确定期待群发勤奋岂非前方缺乏奇观情感求购奇怪七个恰好切换漆黑侵害强化全局前进情景奇迹全集勤恳前台邱隘其二去啊全额企鹅前卫权威趣味请问前往情绪区域其余妻子求职求助庆祝群众入编日报让步如冰日版人对热带热点人道认得认购入股人孔认可入口入库人看人力热烈容量燃料扰乱人马热卖辱骂热门人们人能忍耐日内惹恼让你人皮如萍乳品热评软盘人群人权容器日前人气让她热土认同让它让他柔婉仍未入围人文任务热线如下瑞星入学热血人又手臂上班失败生病设备思考商量市民上面说明上门生命谁能深南室内水泥少年受骗审批商品身旁商铺四强失去神器神情生气瘦弱说她生态试题石头尸体侍卫尚未上网上午视线逃避同比台北头部同胞突发土匪天赋投放通风泰国体力透露铁路脱离条例调皮太强同期天晴同情天气铁通天天听听抬头团体条纹天王突围图文跳舞投降停下太小同学体系岸边案板而别阿扁欧版安防二分二姑爱过爱国而该二个爱好二话耳孔阿克爱卡尔康儿科饿了二楼恶劣暗恋案例鞍马噩梦欧盟欧美奥秘安妮按扭耳内安宁按钮鞍辔安培耳畔阿婆矮胖鹅群哀求暗器爱情安全盎司二十爱上二室暗算而她二厅呕吐额头爱他安慰而无澳网爱我二线按下矮小爱心偶像欧阳奥运哎呀遨游安逸案子无边无不晚辈未必我便外出维持为此未曾无处外观微孔外壳网卡悟空外科网络未来网路无论为例网民外面文明完美未免未能玩弄温暖污泥为你顽皮我拍物品我怕文凭委屈为其武器无情温泉围绕微软往日污染为人我司武士网上完善卫生舞台委托我听外头为他维阿无碍我啊晚安威尔危险文献卫星文学威胁我也万一委员无意无疑屋子完整为止文章握住现出现场寻常下次宣传相对想到相当兄弟显得消费兴奋小幅想法相反修改性格效果习惯相公小孩相互信号笑话先后下降先进相见选举现金向她狭隘邪恶西岸西安性爱纤维虚无香味行为下午小子选择心中向着乡镇一对遇到一点一道有的越发一副一幅依法一番勇敢严格眼光有关有个用力以来一路眼泪有利移民迎面幽默阴谋以免也能云南以内旖旎与你眼皮一批用品一派影片一群一起仪器以前语气要隘一二阴暗议案婴儿鱼尾有无夜晚以为意外有限英雄有些也许一向嘴巴再不逐步转变装备针孔状况专科皱眉正面证明专门这么职能指南之内支农中年诈骗招聘作品最怕照片增强正确作曲证券赚钱这台状态主题增添整体皱纹掌握仔细最小主席</p></blockquote>',173),D=[S];function C(G,K,$,F,N,V){return o(),a("div",null,D)}const J=e(w,[["render",C]]);export{I as __pageData,J as default};
