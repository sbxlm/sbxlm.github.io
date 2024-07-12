import{_ as e,c as a,o,a5 as c,cc as i,cd as d,ce as p,cf as s,cg as r,ch as t,ci as l,cj as h,ck as _,cl as m,cm as n,cn as u,co as b,cp as g,cq as q,cr as f,cs as x,ct as j,cu as k,cv as P,cw as w,cx as T,cy as v,cz as y,cA as S,cB as B,cC as z,cD as A,cE as $,cF as G,cG as K,cH as C,cI as D,cJ as N,cK as V,cL as E,cM as I,cN as O,cO as H,cP as J,cQ as L,cR as R,cS as U,cT as Z,cU as F,cV as M,cW as Q}from"./chunks/framework.Phx233Wf.js";const re=JSON.parse('{"title":"声笔简码","description":"","frontmatter":{"title":"声笔简码","date":"2019-07-08T16:14:45.000Z","comments":false,"tags":["简码","顶功","声笔"],"typora-root-url":"..\\\\..\\\\public"},"headers":[],"relativePath":"sbjm/index.md","filePath":"docs/sbjm/index.md"}'),W={name:"sbjm/index.md"},X=c('<h2 id="_1-概述" tabindex="-1">1 概述 <a class="header-anchor" href="#_1-概述" aria-label="Permalink to &quot;1 概述&quot;">​</a></h2><p>声笔简码是独特的普及型顶功输入方案，是广大普通用户输入中文的最佳选择，比现在流行的所谓智能拼音输入法更加具有优势。本文是图文教程，视频教程请移步<a href="https://www.bilibili.com/video/BV1Pe411U7ZH/" target="_blank" rel="noreferrer">声笔输入法边播边讲240106</a>，可以参照学习。</p><h2 id="_2-快速入门" tabindex="-1">2 快速入门 <a class="header-anchor" href="#_2-快速入门" aria-label="Permalink to &quot;2 快速入门&quot;">​</a></h2><p>声笔简码极其简单，没有什么学习门坎，可以用一句话概括它的内容：用v表示零声母，用<code>aeuio</code>分别表示折、横、撇、竖、点五种笔画，采用简拼加笔画编码。声笔简码的编码规则和示例如下。其中，s表示声母（不区分平翘舌），b表示笔画。b为元音字母<code>aeuio</code>，s为剩下的21个辅音字母。笔画不足时，则重复末笔。一旦使用笔画或者满四码后，就可以省略空格。</p><ul><li>单字：<code>sbbb</code>，即声母加前三个笔画。例如，<code>就joei 从cuou 机jeiu 接jeie 源yooe</code>。</li><li>二字词：<code>ssbb</code>，即各字的声母加第二字的前两个笔画。例如，<code>关系gxua 高兴gxoo 导演dyoo 理想lxei</code>。</li><li>三字词：<code>sssb</code>，即各字的声母加第三字的首笔。例如，<code>计算机jsje 输入法srfo</code>。</li><li>多字词：<code>ssss</code>，即前三字的声母加末字的声母。例如，<code>爱因斯坦vyst 中华人民共和国zhrg</code>。</li></ul><h3 id="_2-1-简要说明" tabindex="-1">2.1 简要说明 <a class="header-anchor" href="#_2-1-简要说明" aria-label="Permalink to &quot;2.1 简要说明&quot;">​</a></h3><p>虽然声笔简码已经非常简单了，但是为了进一步减轻初学者的记忆负担，在手机上提供了助记皮肤，可以长按<code>N</code>键打开或者关闭助记。在打开时，给出了笔画和零声母用键（<code>aeuio</code>和<code>v</code>）的提示，如下图所示。如果是在电脑上，则可以把该图放在电脑桌面上，在打字的时候帮助记忆，一般几分钟就记住了。</p><p><img src="'+i+'" alt="image-20230813150212256"></p><p>当一个字有多种不同的读音且声母不同时，则可以用多种方法输入该字。例如，「盛」对应的拼音有<code>cheng</code>和<code>sheng</code>，对应了c和s两个不同的声母，因而它在声笔简码中也会有两个编码，分别是<code>ceua</code>和<code>seua</code>。</p><p>对于非成字偏旁部首，一般取其名称首字的声母作为它的声母进行编码。例如，「亻」的名称为单人旁，取「单」字的声母d作为「亻」的声母，可以用<code>duii</code>输入「亻」。不知道非成字偏旁部首的名称也没有关系，因始终可以用纯笔画的方式输入。比如，「亻」可以用<code>uiiii</code>输入。</p><p>对于笔画不是很熟悉的人来说，有个别汉字和偏旁部首的笔顺容易弄错，在<a href="./../sbjc/">声笔基础</a>的附录二中罗列了出来，建议对不熟习笔画的人集中浏览，快速学习一下。熟练掌握正确的汉字笔画，不仅是学习中文的目标之一，也是用好声笔简码和声笔其它输入方案的前提条件，必须高度重视。因为笔画和笔顺是一种语文知识，所以系统没有为其提供容错码，即用户必须使用正确的笔画和笔顺才能输入，纠正错误的过程也是学习知识的过程。</p><h3 id="_2-2-缩减编码" tabindex="-1">2.2 缩减编码 <a class="header-anchor" href="#_2-2-缩减编码" aria-label="Permalink to &quot;2.2 缩减编码&quot;">​</a></h3><p>声笔简码中的缩减编码，又称为缩减码，可以缩短字词的输入码，类似于搜狗拼音中的固顶字词或者五笔字型中的简码字，或称简码。</p><p>声笔简码的单字有一、二、三级简码，分别称为一简字、二简字和三简字。一简字的例子有<code>就j 我w 没m</code>。二简字的例子有<code>从cu 此ci 起qe 来le</code>。三简字的例子有<code>机jei 威weu 凝noe 关gou</code>。</p><p>声笔简码的二字词有二、三级简码，分别称为二简词和三简词。二简词的例子有<code>关系gx 参加cj 东西dx 会议hy</code>。三简词的例子有<code>高兴gxo 设计sjo 密封mfe 决定jdo</code>。</p><p>声笔简码的一、二简字词是固定不变的，便于形成条件反射。三简字词和全码字词一样会随着用户的使用习惯发生变化。</p><p>另外，声笔简码在三简的码位安排了二简词和一简字的组合，也可以节约用键，要尽量使用。例如，<code>我们的wmd 他们是tms 进行了jxl</code>。这种设计确定性高，比安排大量的三字词简码更容易掌握，而且不少组合使用频率还是很高的。</p><h3 id="_2-3-扩展编码" tabindex="-1">2.3 扩展编码 <a class="header-anchor" href="#_2-3-扩展编码" aria-label="Permalink to &quot;2.3 扩展编码&quot;">​</a></h3><p>声笔简码中，单字和二字词的的四码空间很小。单字的<code>sbbb</code>四码空间只有<code>21×5×5×5 = 2,625</code>个码位。二字词的<code>ssbb</code>四码空间只有<code>21×21×5×5 = 11,025</code>。</p><p>三字词的<code>sssb</code>四码空间也不大，为<code>21×21×21×5 = 46,305</code>个码位，好在三字词的数量比较少。多字词专用的<code>ssss</code>四码空间相对比较大，为<code>21×21×21×21 = 194,481</code>个码位。</p><p>与上述四码空间形成鲜明对照的是，声笔简码收录了<code>GBK</code>字集超过两万的汉字，收录的词组数量更是达到100万之多，其中二字词有近20万。所以，无论是单字还是词组，四码时的重码现象都很严重。特别是单字和二字词，即使比较常用的都有可能需要翻页，甚至数次翻页来输入。翻页查找属于强交互的操作，每页都需要用眼睛扫瞄六个选项，是非常耗费时间的，会大大降低输入效率，而且容易看花眼而出错。</p><p>声笔简码首创了扩展编码，利用其编码的顶功特性，通过追加两个笔画就能迅速将编码空间扩大25倍，可以快速筛选出所需的重码字词。结合后述动态码长的使用，完美地兼顾了编码空间与输入效率，既能享有巨大的编码空间，又能具有很短的平均码长，两全其美。</p><p>比如，「揪」字在第一次输入时，在输入<code>jeie</code>后需要按三次翻页键，然后再用<code>a</code>选择，如下图所示。每翻一页，都需要用眼睛扫视 6 个选项，人机交互频繁，既费眼又累心，效率很低。</p><p><img src="'+d+'" alt="image-20240517143814815"></p><p><img src="'+p+'" alt="image-20240517143831311"></p><p><img src="'+s+'" alt="image-20240517143846255"></p><p><img src="'+r+'" alt="image-20240517143908535"></p><p>然而，如果再追加两个笔画的话，「揪」字就成了第一选项，如下图所示。</p><p><img src="'+t+'" alt="image-20240517143934463"></p><p>可见，在输入罕见字时，通过追加两个笔画，会大大地提高输入效率。声笔简码将四码选重和扩展编码有机结合，是一大创新，既能照顾初学者的传统输入习惯，又能让高级用户采用更快速的输入方法，做到在日常的输入过程中几乎不进行翻页操作。</p><p>搜狗拼音在输入罕见字时，也可以追加笔画或者部件编码来减少重码，但是需要用 TAB 键手动触发加码模式，同时需要空格或者数字键上屏，显得非常笨拙。例如，输入「揪」字时，要用 <code>jiuTABpz2</code>。<code>TAB</code>键和数字键比<code>aeoiu</code>难操作得多。</p><p>声笔简码在输入词组的时候，也可以追加笔画来对付重码的重灾区，不过是回头追加的首字前两笔，而不是末字的后续笔画，这是为了增强笔画去重的能力，也是为了统一词组的扩展编码方式。</p><p>例如，「转正」一词在第一次输入时，在输入<code>zzei</code>后需要在第八页上，再用<code>o</code>选择，如下图所示。每一页，都需要用眼睛扫视 6 个选项，人机交互频繁，效率很低。</p><p><img src="'+l+'" alt="image-20240517144010238"></p><p><img src="'+h+'" alt="image-20240517144024174"></p><p><img src="'+_+'" alt="image-20240517144037670"></p><p><img src="'+m+'" alt="image-20240517144050758"></p><p><img src="'+n+'" alt="image-20240517144104430"></p><p><img src="'+u+'" alt="image-20240517144129569"></p><p>然而，如果再追加第一字前两个笔画的话，「转正」就出现在第一页上，只需用<code>e</code>选择上屏就可以了，如下图所示。</p><p><img src="'+b+'" alt="image-20240517144324422"></p><p>可见，在输入重码太多的二字词时，通过追加首字头两个笔画，会大大地提高输入效率。</p><p>三字词和多字词也可以类似地使用扩展编码。比如，「旧石器」一词在第一次输入时，在输入<code>jsqi</code>后需要按多次翻页键，然后再进行选择，效率比较低，但是在追加首字的前两笔<code>ii</code>后它就出现在第一页上了。再如，「结绳记事」在第一次输入时，输入<code>jsjs</code>后需要按多次翻页键才能找到，而在加上首字的前两笔<code>aa</code>后就出来了。</p><h3 id="_2-4-编码反查" tabindex="-1">2.4 编码反查 <a class="header-anchor" href="#_2-4-编码反查" aria-label="Permalink to &quot;2.4 编码反查&quot;">​</a></h3><p>在使用简码时，特别是在学习简码之初，有时会遇到不会打的字。怎么办呢？程序提供了丰富的反查手段，可以通过笔画和拼音来反查编码，还可以采用字海两分来反查和输入非 GBK 汉字。另外，还通过反查提供了临时拼音输入法。</p><h4 id="_2-4-1-拼音反查" tabindex="-1">2.4.1 拼音反查 <a class="header-anchor" href="#_2-4-1-拼音反查" aria-label="Permalink to &quot;2.4.1 拼音反查&quot;">​</a></h4><p>在知道拼音而不知道字形时用 a 引导拼音反查，注意零声母要用 v 充当。</p><p>例如，要反查「访」字的编码，就在输入 a之后再输入它的拼音 fang，所以实际的输入为 afang，结果如下图所示。反查出「访」字的编码为 foaoea。如果是多音字，那么就会有多个编码，如图中的「房」字就有 foaeuo 和 poaeuo 两个编码。</p><p><img src="'+g+'" alt="image-20240504085516125"></p><p>对于零声母字，如「案」字，在反查时除了用 a 引导还需要在正常拼音的前面加 v，因为 an 是零声母音，所以实际的输入为 avan。在图中提示出的<code>案vooaau</code>，表示「案」字的编码为 vooaau。</p><p><img src="'+q+'" alt="image-20240504085625924"></p><h4 id="_2-4-2-笔画反查" tabindex="-1">2.4.2 笔画反查 <a class="header-anchor" href="#_2-4-2-笔画反查" aria-label="Permalink to &quot;2.4.2 笔画反查&quot;">​</a></h4><p>在完全不知道读音的时候，直接用 <code>aeuio</code> 按顺序输入笔画进行反查，无需引导。</p><p>在下面的笔画反查的例子中，不用引导而直接输入 uuao 后，出现了以这四个笔画开头的字。第一项是<code>反fuuaoo</code>，表示「反」字的编码为 fuuaoo。第二项为<code>般buuaoe puuaoe</code>，说明「般」是个多音字，有两个编码。</p><p><img src="'+f+'" alt="image-20240504085702004"></p><h4 id="_2-4-3-两分反查" tabindex="-1">2.4.3 两分反查 <a class="header-anchor" href="#_2-4-3-两分反查" aria-label="Permalink to &quot;2.4.3 两分反查&quot;">​</a></h4><p>通过 i 引导的拼音还支持用字海两分法来进行反查， 支持查找八万多汉字，一般用于反查难读而易于两分的字或者输入 GBK 以外的字。GBK 以外的字，声笔简码不提供正常编码，不能按正常方式输入，只能在两分查找到后选择输入。引导字母i可以理解为英文inquire（询问）的首字母，以便记忆。</p><p>下面是字海两分法查找的例子。第一个例子是反查「龖」字的编码，在输入到第二部分拼音的第一码时就出来了。第二个例子是通过输入「尸」和「水」的拼音来反查「尿」的编码，输入了两部分完整的拼音。</p><p><img src="'+x+'" alt="image-20240504090009765"></p><p><img src="'+j+'" alt="image-20240504090025267"></p><p>对于非 GBK 字集里的「㕛」字，它是没有编码的，只能用两分法来输入，如下所示。</p><p><img src="'+k+'" alt="image-20240504090111149"></p><h4 id="_2-4-4-临时拼音" tabindex="-1">2.4.4 临时拼音 <a class="header-anchor" href="#_2-4-4-临时拼音" aria-label="Permalink to &quot;2.4.4 临时拼音&quot;">​</a></h4><p>在一时半会想不起某个词中某个字的笔画，而这个字因为不常见又不方便用单字进行反查时，可以用 a 引导临时拼音来变相地输入词组或者查到该字的写法。</p><p>例如，「饕餮」可以用 ataotie 来查找和输入，而「耄耋」可以用 amaodie 来查找和输入。注意，用于引导的字母a是不会显示的。</p><p><img src="'+P+'" alt="image-20240504090156523"></p><p><img src="'+w+'" alt="image-20240504090213012"></p><h2 id="_3-技能提升" tabindex="-1">3 技能提升 <a class="header-anchor" href="#_3-技能提升" aria-label="Permalink to &quot;3 技能提升&quot;">​</a></h2><h3 id="_3-1-续码顶屏" tabindex="-1">3.1 续码顶屏 <a class="header-anchor" href="#_3-1-续码顶屏" aria-label="Permalink to &quot;3.1 续码顶屏&quot;">​</a></h3><p>在传统字词型输入法如五笔字型中，当字词的码长不足四时，需要用空格上屏，只有码长为四时的首选字词才能省略空格。在声笔简码中输入单字和词组时，只要加了笔画，在后续声母时都可以被顶上屏幕，无论是否达到最大码长都可以节约空格。所以说，声笔简码具有「顶功」，可以大大地提高输入效率。</p><p>例如，五笔字型的二码字<code>吧kc 给xw</code>和三码字<code>华wxf 动fcl</code>在后接首码时都是需要空格上屏的。声笔简码中的二码字，如<code>从cu 此ci</code>和三码字<code>机jei 威weu</code>，在后接声母时都是不需要空格的。另外，声笔简码中的三码二字词，如<code>高兴gxo 接受jsu</code>，也是不需要空格的。</p><p>再如，同样是用纯单字输入「中国人民站起来了。」这句话。用五笔字型输入时的用键为<code>k_l_w_n_uh_fhn_go_b.</code>，共使用了 20 键。用声笔简码输入时的用键为<code>zigir_mazoeoqelel.</code>，共使用了 18 键，其中「站」字也有可能是用 5 键，因为大于三码的字输入码不是固定的。用搜狗拼音输入时，则完全没有固定的输入方法，它所有字的编码默认都是动态变化的，所以它的用键会在 18到数十键不等。</p><p>正是由于续码顶屏的优势，使得声笔简码的纯单字输入平均码长在没有动态码长调整的情况下也只有3.1678，低于五笔字型的3.2658。这是一个让人吃惊的结果，因为声笔简码的单字输入是其弱项，居然比历史上以快速著称的五笔字型单字码长还短。</p><h3 id="_3-2-字母选重" tabindex="-1">3.2 字母选重 <a class="header-anchor" href="#_3-2-字母选重" aria-label="Permalink to &quot;3.2 字母选重&quot;">​</a></h3><p>传统输入法通常都是用数字键来选择重码字词。由于击打数字键需要跨行进行，手指移动距离远，容易产生误击，一般人都无法盲打，所以会严重影响输入速度。搜狗拼音虽然可以设置用字母选择重码字词，但是必须先用空格键引导，效果大打折扣。</p><p>拼音用户对数字键的依赖程度比五笔用户高得多，熟练的五笔用户只在输入四码后出现重码时，才会使用数字键选择，有的甚至通过左右 Shift 键选择 1、2 重码来避免使用数字键，以便提高击键率，降低误击率。搜狗拼音的重码很多，前后翻页的操作很频繁，所以它把逗号和句号键作为默认的前后翻页键，以便快速、准确地翻页。但是，这样做又使得在输入逗号和句号这两个常见标点符号时无法进行顶屏而实现快速输入。</p><p>在声笔简码中，当输入的编码达到四码时，如果有重码字词，那么就用<code>aeuio</code>兼做重码选择键。这时，提示行重码字前显示的<code>aeuio</code>并不代表笔画，仅仅表示出现的顺序，其作用和传统输入法的数字选择键完全一样。不过，用户在击打<code>aeuio</code>时要比击打数字键方便、快速得多。</p><p>例如，搜狗拼音输入<code>jiao</code>时，会出现很多同音字供用数字键选择，可能的选项如下，因动态调频的原因，结果会有出入。</p><p><img src="'+T+'" alt="搜狗jiao"></p><p>声笔简码则不一样，在输入<code>jiae</code>时，出现的重码字则是用<code>aeuio</code>选择，可能的选项也会因动态调频而发生变化。</p><p><img src="'+v+'" alt="image-20240517144447950"></p><p>再如，搜狗拼音输入<code>shij</code>时，会出现很多同音词，需要用数字键选择，可能的选项如下，因动态调频的原因，您的结果可能会有出入，如下所示：</p><p><img src="'+y+'" alt="搜狗Shij"></p><p>而在声笔简码中，输入sjoo后，可能的结果如下。</p><p><img src="'+S+'" alt="image-20240517144516559"></p><p>此时，如果要输入「视觉」一词，则用<code>e</code>进行选择；如果要输入「商家」一词，则用<code>u</code>进行选择。</p><h3 id="_3-3-动态码长" tabindex="-1">3.3 动态码长 <a class="header-anchor" href="#_3-3-动态码长" aria-label="Permalink to &quot;3.3 动态码长&quot;">​</a></h3><p>动态码长是指在输入的过程中，字词的码长会适应用户的使用习惯而发生变化，越常用的字词码长会变得越短，而不常用的字词码长会变长，从而在总体上提高输入效率。</p><p>在默认情况下，声笔简码的单字和二字词在输入的时候，如果码长超过了三码，那么下次输入可能就只需要三码了。</p><p>比如，「打」字在本次输入的时候是用的<code>deie</code>，那么下次输入的时候可能就只需要用<code>dei</code>了。再如，「高级」一词如果在本次输入是用的<code>gjaa</code>，而且进行了选重，那么下次输入的时候一般只需要用<code>gja</code>就可以了。</p><p>当使用了扩展编码的时候，动态码长的效果更加显著。</p><p>比如， 「揪」 字，在用<code>jeieue</code> 输入后，下次输入时可能就只需要用<code>jeie</code>就可以了。再如， 「转折」一词，在用<code>zzeiea</code> 输入后，下次输入时可能就只需要用<code>zze</code>就可以了。</p><p>再如，若「教师节」在本次输入使用的是<code>jsje</code>并且用<code>u</code>进行了选重，那么下次再输入的时候，一般就会成为首选项。再如，「松松散散」一词在用<code>ssssei</code>输入后，下次输入一般就只需要<code>ssss</code>了。</p><h3 id="_3-4-自动词组" tabindex="-1">3.4 自动词组 <a class="header-anchor" href="#_3-4-自动词组" aria-label="Permalink to &quot;3.4 自动词组&quot;">​</a></h3><p>声笔简码具有自动词组功能。也就是说，它能够利用用户之前输入的字词来自动创造新的词组，同时也能够将用户长期不使用的新造词组自动清除。对于少量暂时还未被清理的废词，用户不必理会，到时限后就会被自动删除。</p><p>在必要的时候，如用户错误地确认了临时词组，系统也提供了手动删除的手段。在电脑上，通过方向键将光标移动到该词上面，再按 <code>Control + Delete</code> 键来删除。在手机上，则通过左右滑动空格来移动光标到要删除的词，然后下滑退格键删除。注意，如果是非临时词组，需要删除两次才能删除。第一次删除时只是把它变成了临时词组。</p><p>例如，如果要造「声笔」一词，可以先按单字方式输入声和笔。然后，按词组方式输入<code>sbue</code>，由于系统词的重码已经超过一页，需要翻页找到声笔一词，或者追加「声」的前两笔<code>ei</code>来快速过滤重码，快速找到造好的词组，或者用<code>Shift+Tab</code>快速定位到重码词的末尾。在选择输入一次新造的「声笔」后，它的码长就会动态地缩短，下次输入的时候可能就只需要<code>sbu</code>了。</p><p>再如，要造「声笔码」的话，若前面已经造好了「声笔」，所以可以拆成「声笔」和「码」来输入。然后，按三字词方式输入<code>sbme</code>，按<code>Shift+Tab</code>快速定位新词，可见临时词组「声笔码」已经造好了。选择上屏一次后，「声笔码」就会成为正常的词组。</p><p>最后，如果要造「声笔简码」一词，可以先输入「声笔」和「简码」。下次按多字词方式输入<code>sbjm</code>时就有「声笔简码」 一词了。</p><p>当然，在用户不知道系统中有某个词组的时候，如果按照词组的方式来输入，就可能因为系统没有该词而找不到想要的词组，即发生所谓打空的情况。此时，建议用<code>ESC</code>键清除编码，拆开打一次就能够自动造出想要的词组，供下次使用。</p><p>需要注意的是，为了避免发生组合爆炸，产生太多的垃圾词组，系统默认限制了自动造词的最大长度为5，且不能含有非汉字字符。另外，在进行枚举式自动造词的时候，是以编码对应的字、词为单位来进行组合的，并不是以单字为单位的。例如，在输入<code>声笔sbu 系列xleu 码meu</code>后，生成的词组为「声笔系列码」「声笔系列」「系列码」，而不会生成「声笔系」「笔系列」「列码」等。另外，如果造词之后马上使用了退格键，系统就会自动删除所造的词组；中间夹杂有非汉字的话，也会中断造词。</p><h3 id="_3-5-以字代词" tabindex="-1">3.5 以字代词 <a class="header-anchor" href="#_3-5-以字代词" aria-label="Permalink to &quot;3.5 以字代词&quot;">​</a></h3><p>由于声笔简码的一、二简字都只需要两键就可以输入，所以在记住并能盲打它们以后，往往可以按单字的方式来输入由它们组成的二字词。例如，「经过」「大小」「笑话」这些常用二字词的三码重码很多，观察提示行会降低输入效率。因而，必要时可以拆开成为单字来输入。声笔简码的一简字只有21个，二简字也只有105个，并且是使用频率极高的字，经过一段时间的使用，自然而然地就会形成条件反射。只是需要用户对这类词形成拆开打的习惯。</p><p>例如：「经过」作为词组来输入的话，就会与很多常用二字词如「结构」「价格」等重码。而拆开用打单字也只需要四键，然而因为没有重码，在记住后是可以盲打的，速度要快得多。同时，还可以将码位让给其它常用词。</p><h3 id="_3-6-组合变换" tabindex="-1">3.6 组合变换 <a class="header-anchor" href="#_3-6-组合变换" aria-label="Permalink to &quot;3.6 组合变换&quot;">​</a></h3><p>为了在输入中文时节约用键和避免回改，声笔简码提供了巧妙的组合输入方法，通过分号、Tab 键和分号键来实现。这样做，实际上也分化了重码，增加了确定性。大量不是词的组合都可以通过这种方式来进行输入，从而有效地利用编码空间。注意，这个时候是没有提示的，需要用户对简字和简词非常熟习才行。</p><ul><li>两个一简字的组合，可以用两字的声母加分号来输入。例如，「就是」[一下]「出发」「我是」「发就」等等都可以这样输入。</li><li>一简字加二简词的组合，可以用三字的声母加分号。例如，「是一样」「的时候」等等。</li><li>两个二简词的组合，可以用四个字的声母加分号来输入。例如，「需要多久」「麻烦你们」等等。</li><li>三个一简字的组合，可以用三个字的声母加单引号来输入。例如，「一个人」「就是了」「是不是」「不是不」等都可以这样输入。</li><li>一个二简词加两个一简字的组合，可以用四个字的声母加单引号来输入。例如，「我们就是」「这个不是」等可以这样输入。</li></ul><h3 id="_3-7-特殊顶屏" tabindex="-1">3.7 特殊顶屏 <a class="header-anchor" href="#_3-7-特殊顶屏" aria-label="Permalink to &quot;3.7 特殊顶屏&quot;">​</a></h3><h4 id="_3-7-1-条件顶屏" tabindex="-1">3.7.1 条件顶屏 <a class="header-anchor" href="#_3-7-1-条件顶屏" aria-label="Permalink to &quot;3.7.1 条件顶屏&quot;">​</a></h4><p>简码在输入二简词时，通常是需要用空格上屏的。由于二简词的使用频率非常高，所以空格的使用量是相当大的。有没有办法来尽量省略一些空格呢？有的！简码巧妙地利用延迟顶屏实现了这一点。</p><p>例如，在输入「无法决定」的时候，输入wf后不要忙着空格上屏「无法」，而是继续输入「决定」的前两码jd。</p><p><img src="'+B+'" alt="image-20240517145142936"></p><p><img src="'+z+'" alt="image-20240517145120216"></p><p>这时，发现候选项中并没有「我们决定」，而「决定」的第三码为o，o没被重码选择键占用，从而可以直接输入o将我们顶上屏幕，留下的部分正好是「决定jdo」，达到了省略空格的目的。</p><p><img src="'+A+'" alt="image-20240517145653119"></p><h4 id="_3-7-2-大写顶屏" tabindex="-1">3.7.2 大写顶屏 <a class="header-anchor" href="#_3-7-2-大写顶屏" aria-label="Permalink to &quot;3.7.2 大写顶屏&quot;">​</a></h4><p>声笔简码在有些情况下，可以用大写来避免使用空格或者避免回改，称之为大写顶屏，这时大写会自动变换为小写作为编码显示。</p><p>在一、二、三码之后，可以用大写来输入后续字词的首码并省略空格。例如，输入「幸福的生活」，一般的用键是<code>xf_d_sho</code>，而采用大写顶屏后，用键就变成<code>xfDSho</code>。当然，在这种情况下大写的使用仅仅是一个不关痛痒的选项，用不惯的用户可以忽略不用就是了。</p><p>在四码之后，可以用大写将前两码对应的二简词上屏，并与后两码一起形成新的三码。这一方面可以节约空格，另一方面，也可以避免回改。例如，在<code>dsky</code>后输入<code>S</code>时，会将<code>ds</code>对应的二简词「但是」顶上屏幕，同时剩下<code>kys</code>三码。同样，在<code>wmsh</code>后输入<code>O</code>，会将<code>wm</code>对应的二简词「我们」顶上屏幕，同时留下<code>sho</code>三码。在不用大写顶屏的时候，就需要先在<code>ds</code>后用空格将「但是」上屏，而若忘记了输入空格，在没有大写顶屏时就得先用退格键删除<code>ky</code>，再补上空格，回改的成本非常高。</p><h3 id="_3-8-打空造词" tabindex="-1">3.8 打空造词 <a class="header-anchor" href="#_3-8-打空造词" aria-label="Permalink to &quot;3.8 打空造词&quot;">​</a></h3><p>字词型输入方案面临的一个大问题就是在词组打空时的回改。由于没有有效的回改措施，通常的办法就是用<code>esc</code>清除所有的编码，然后重新输入。声笔简码提供了一种快速的回改办法，那就是在打空的时候，当码长为5或者6时，按单引号即可将已经补充的扩展笔画移位到首字的声母之后，并将光标定位于此，以便回改。这样，就不会浪费已经输入的编码，并立即进入造词过程。</p><p>例如，在输入「飞码」时，输入6码后发现打空了，没有所需的词组。</p><p><img src="'+$+'" alt="image-20240503075525930"></p><p>于是，按单引号将补充的首字两个笔画au移动到首字声母f之后，并将光标定位于此。</p><p><img src="'+G+'" alt="image-20240503075701961"></p><p>接着，因为「妇」不是所需的字，所以补充一笔，「飞」字出现了。</p><p><img src="'+K+'" alt="image-20240503075744722"></p><p>用空格确认「飞」字。</p><p><img src="'+C+'" alt="image-20240503075934057"></p><p>接下来的编码正好对应「码」字，于是空格上屏。</p><p><img src="'+D+'" alt="image-20240503080047306"></p><p>再次输入时，飞码一词就已经造好了。</p><h2 id="_4-字词增强" tabindex="-1">4 字词增强 <a class="header-anchor" href="#_4-字词增强" aria-label="Permalink to &quot;4 字词增强&quot;">​</a></h2><p>声笔简码的字词输入可以通过标点字词、数选字词和定制词典来增强。</p><h3 id="_4-1-标点字词" tabindex="-1">4.1 标点字词 <a class="header-anchor" href="#_4-1-标点字词" aria-label="Permalink to &quot;4.1 标点字词&quot;">​</a></h3><p>标点字词是分号和单引号参与编码的字词，在提示级别不是隐藏时，会对标点字词进行提示。标点字词在非增强模式下也能使用。在增强模式下，会同时提示数选字词。</p><h3 id="_4-1-1-标点单字" tabindex="-1">4.1.1 标点单字 <a class="header-anchor" href="#_4-1-1-标点单字" aria-label="Permalink to &quot;4.1.1 标点单字&quot;">​</a></h3><p>标点单字的编码有两种格式。</p><p>一种格式是通过声母加分号或者单引号编码，第二码是无理的，共有42个。</p><p><img src="'+N+'" alt="image-20240606064805954"></p><p>另一种格式是首字声母加首笔再加分号或单引号，共有210个。</p><p><img src="'+V+'" alt="image-20240708182612952"></p><h3 id="_4-1-2-标点词组" tabindex="-1">4.1.2 标点词组 <a class="header-anchor" href="#_4-1-2-标点词组" aria-label="Permalink to &quot;4.1.2 标点词组&quot;">​</a></h3><p>标点词组均为二字词，其编码为首字声母加分号或单引号再加次字首笔，共有210个。</p><p><img src="'+E+'" alt="image-20240606073214074"></p><h3 id="_4-1-3-延迟顶屏" tabindex="-1">4.1.3 延迟顶屏 <a class="header-anchor" href="#_4-1-3-延迟顶屏" aria-label="Permalink to &quot;4.1.3 延迟顶屏&quot;">​</a></h3><p>为了充分利用编码空间，标点字词并不立刻上屏，但是可以被后续字词顶上屏幕，所以基本上不会增加用键。</p><p>例如，在输入j;后，「觉」并不会立刻上屏。这时，如果后面要输入「得」字，那么在输入d时，「觉」就会被顶上屏幕；若再后续标点，也能将「觉」顶上屏幕。</p><h3 id="_4-2-数选字词" tabindex="-1">4.2 数选字词 <a class="header-anchor" href="#_4-2-数选字词" aria-label="Permalink to &quot;4.2 数选字词&quot;">​</a></h3><p>对于熟练的用户而言，可能会觉得高频的单字和二字词调频得过于频繁，导致人机交互过多。为了缓解这个问题，声笔简码提供了增强模式。在增强模式下，声笔简码提供了大量的固定数选字词，能够提高可盲打性。</p><p>数选字词包括声数字210个，声笔数字1050个，声声数词4410个，它们均分为23789选择的有理组和14560选择的无理组。根据提示级别的不同，可以只提示有理组，只提示无理组，两组同时提示，或者两组都不提示。系统默认设置为只提示有理组。提示与否仅仅是视觉上的差异，只要开启了增强模式，这些数选字词始终是可以使用的。</p><p>例如，在输入j后，当提示级别分别为隐藏、有理、无理、两者时，数选字的提示情况如下所示。</p><p><img src="'+I+'" alt="image-20240409110213974"></p><p><img src="'+O+'" alt="image-20240703074910466"></p><p><img src="'+H+'" alt="image-20240703074814801"></p><p><img src="'+J+'" alt="image-20240703074726673"></p><p>在第三码和第四码后接数字时，可以使用延迟顶屏来省略空格。由于没有提示，所以要求用户记住了数选字词才能这么操作。</p><p>例如，在输入「我们将」时，通常得用<code>wm_j9</code>，但是由于有了延迟顶屏，就只用 <code>wmj9</code> 就可以输入了。</p><p>再如，在输入「我们接受」时，通常得用<code>wm_js7</code>，但是由于有了延迟顶屏，就只用 <code>wmjs7</code> 就可以了。</p><p>另外，若提示级别不为隐藏，那么在增强模式下输入正码后，会通过注释的方式提示数选字词。</p><p><img src="'+L+'" alt="image-20240703075229552"></p><p><img src="'+R+'" alt="image-20240505084750700"></p><p>需要注意的是，为了充分利用码位，在声笔数选字的有理组中，也可能会出现数字不表示笔画的情况，这是在有理的空间中无理地安排了单字。</p><p>例如，输入vi后的结果如下。其中，「呆哦唉昂」都是用无理数字来选择的。</p><p><img src="'+U+'" alt="image-20240703075727544"></p><h3 id="_4-3-定制词典" tabindex="-1">4.3 定制词典 <a class="header-anchor" href="#_4-3-定制词典" aria-label="Permalink to &quot;4.3 定制词典&quot;">​</a></h3><p>声笔简码的所有固定字词，包括一简字、声笔字、声声词，以及增强模式下的所有数选字词，甚至飞系单字，都是可以修改定制的，它们位于sbjm.dict.yaml文件中。您修改保存后，重新部署一下就可以生效。</p><h2 id="_5-三顶模式" tabindex="-1">5 三顶模式 <a class="header-anchor" href="#_5-三顶模式" aria-label="Permalink to &quot;5 三顶模式&quot;">​</a></h2><p>声笔简码还可以设置为三顶模式，使得大多数三字词和多字词都只要三键就可以输入了。</p><p>例如，在三顶模式下，输入「计算机」可能只需要<code>jsj</code>就行了，而在四顶模式下则至少需要<code>jsje</code>。</p><p>再如，输入「爱因斯坦」，在三顶模式下，一般只需要<code>vys</code>即可，而在四顶模式时需要<code>vyst</code>。</p><p>在声笔简码的schema中，有一个参数enable_filtering来控制在输入三个声母时是否将多字词过滤掉。该参数的值默认为false，意味着不过滤，如下所示。如果将它改为true，那么在三个声母时就只有三字词而不会有多字词。</p><p>还有个参数lower_case，当它的值为false时，在三顶模式下，若采用一二三末字的声母来输入多字词，则第四码必须用大写字母。例如，「爱因斯坦」就需要用<code>vysT</code>来输入才行。</p><p>但是，有的人很不习惯用输入大写字母，怎么办呢？办法是将lower_case参数值设为true。这样的话，末字的声母改用末字的首笔来输入也可以。比如，「爱因斯坦」就可以用<code>vyse</code>来输入。</p><p><img src="'+Z+'" alt="image-20230619093351922"></p><p>在遇到不知道末字首笔的多字词时，仍然可以用大写末字声母的办法来输入，例如：<code>魑魅魍魉cmwL</code>。两种输入方式都是支持的。</p><p>另外，在三顶模式下，二简词加一简字的组合一般不再能用空格上屏，需要用Tab上屏，因为三个声母的码位基本上被三字词和多字词占完了。比如，<code>wms</code>被「文明史」占用了，要用输入「我们是」就得用<code>wms+Tab</code>来输入了。</p><h2 id="_6-兼容飞单" tabindex="-1">6 兼容飞单 <a class="header-anchor" href="#_6-兼容飞单" aria-label="Permalink to &quot;6 兼容飞单&quot;">​</a></h2><p>为了增加单字的离散能力，声笔简码还兼容了声笔飞单里的单字。声笔飞单的一简字和声笔字与声笔简码完全相同，它的二、三简字则作为首选的注释用单引号或者Tab键选择，其它的单字通过将第四码aeuio置换为23789或者在第四码后追加单引号来输入，但是实际输入的编码始终是四码加单引号。在默认情况下，因为提示级别为隐藏，所以飞单的二、三简字是没有提示信息的，不过仍然可以输入。若把提示级别为有理、无理或者两者，那么会出现以下候选提示。</p><p><img src="'+F+'" alt="image-20240709102825869"></p><p><img src="'+M+'" alt="image-20240709102858842"></p><p>但是，飞单的四码字即使提示级别为隐藏，也始终是会提示的，如下所示。</p><p><img src="'+Q+'" alt="image-20240709102939866"></p><h2 id="_7-打字训练" tabindex="-1">7 打字训练 <a class="header-anchor" href="#_7-打字训练" aria-label="Permalink to &quot;7 打字训练&quot;">​</a></h2><p>关于打字的训练软件、训练目和打字速度的一般性讨论详见声笔基础中的<a href="./../sbjc/#_9-打字训练">打字训练</a>一节。这里只讨论简码打字的具体训练方法。</p><p>简码的定位是普通型的输入方案，主要用于一般的工作和生活中，不太适用于竞速和打字比赛中的首打。若用于有大量词组的赛文进行重打，效果可能会出奇地好，但是要注意与您的实际应用场景相匹配，否则会对扰乱用户词库的调频信息，除非您把两种应用场景的用户词库分开后切换使用。</p><p>简码的一、二简单字和二字词以及数选字词都是静态编码的，熟习后可以不看提示进行输入。若要迅速熟习缩减码，建议进行一些强化训练。</p><h3 id="_7-1-字词训练" tabindex="-1">7.1 字词训练 <a class="header-anchor" href="#_7-1-字词训练" aria-label="Permalink to &quot;7.1 字词训练&quot;">​</a></h3><p>常规模式下需要强化训练的内容包括一简字、声笔字、声声词。如果使用四顶模式，则可能还要训练常见的三简字词（声笔笔字和声声笔词）。</p><h4 id="_7-1-1-一简字" tabindex="-1">7.1.1 一简字 <a class="header-anchor" href="#_7-1-1-一简字" aria-label="Permalink to &quot;7.1.1 一简字&quot;">​</a></h4><p>一简字共计21个，详见：<a href="./../sbjc/#_9-4-1-一简字">一简字</a></p><h4 id="_7-1-2-声笔字" tabindex="-1">7.1.2 声笔字 <a class="header-anchor" href="#_7-1-2-声笔字" aria-label="Permalink to &quot;7.1.2 声笔字&quot;">​</a></h4><p>声笔字共计105个，详见：<a href="./../sbjc/#_9-4-2-声笔字">声笔字</a></p><h4 id="_7-1-3-声声词" tabindex="-1">7.1.3 声声词 <a class="header-anchor" href="#_7-1-3-声声词" aria-label="Permalink to &quot;7.1.3 声声词&quot;">​</a></h4><p>声声词共有441个，详见：<a href="./../sbjc/#_9-4-3-声声词">声声词</a></p><h3 id="_7-2-综合训练" tabindex="-1">7.2 综合训练 <a class="header-anchor" href="#_7-2-综合训练" aria-label="Permalink to &quot;7.2 综合训练&quot;">​</a></h3><p>详见：<a href="./../sbjc/#_9-4-5-综合训练">综合训练</a></p><h3 id="_7-3-编码格式" tabindex="-1">7.3 编码格式 <a class="header-anchor" href="#_7-3-编码格式" aria-label="Permalink to &quot;7.3 编码格式&quot;">​</a></h3><p>为了便于用户总结和记忆声笔简码的基本内容，现将在默认设置时的字词编码格式以浓缩的表达式方式总结如下。</p><ul><li>单字：<code>sb^b&#39;b(bb)</code>，即声母加前三个笔画，可选地加第四、五笔。</li><li>二字词：<code>s1s2b2^&#39;b2(b1b1)</code>，即两字的声母加第二字的前两个笔画，可选地加首字的第一、二笔。</li><li>三字词：<code>s1s2s3b3^&#39;(b1b1)</code>，即三字的声母加第三字的首笔，可选地加首字的第一、二笔。</li><li>多字词：<code>s1s2s3s0^&#39;(b1b1)</code>，即前三字的声母加末字的声母，可选地加首字的第一、二笔，然后选择重码。</li></ul><p>其中，s表示声母（不区分平翘舌），b表示笔画。b用元音字母<code>aeuio</code>表示，s用21个辅音字母字母表示。数字表示第几字（其中0表示末字），^表示起始顶屏码位，&#39;表示起始码长调整位。笔画不足时，则重复末笔。</p>',201),Y=[X];function ee(ae,oe,ce,ie,de,pe){return o(),a("div",null,Y)}const te=e(W,[["render",ee]]);export{re as __pageData,te as default};
