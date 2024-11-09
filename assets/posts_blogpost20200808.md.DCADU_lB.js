import{_ as o,c as s,a3 as a,o as d}from"./chunks/framework.hU1yMXPg.js";const t="/images/SbfjSl.png",f=JSON.parse('{"title":"声笔系列码新增声笔飞简和声笔快简","description":"","frontmatter":{"title":"声笔系列码新增声笔飞简和声笔快简","date":"2020-08-08T05:47:36.000Z","tags":["声笔飞简","声笔快简"]},"headers":[],"relativePath":"posts/blogpost20200808.md","filePath":"posts/blogpost20200808.md"}'),c={name:"posts/blogpost20200808.md"};function p(i,e,l,r,b,n){return d(),s("div",null,e[0]||(e[0]=[a('<p>在今天QQ群内部发布的声笔系列码更新里，包括了如下内容：</p><ol><li>新增了两个新的输入法方案——声笔飞简和声笔快简；</li><li>声笔简码和声笔顶拼里的ss型二字词采用高频优先的原则，不再排除sn型词组；</li><li>声笔系列码中的所有方案默认关闭数选词组，需要它们的用户可以自己修改schemma文件来打开；</li><li>声笔快码和声笔飞码增加spsz组合二字词，优先度比其它词组低。</li></ol><h2 id="声笔飞简和声笔快简" tabindex="-1">声笔飞简和声笔快简 <a class="header-anchor" href="#声笔飞简和声笔快简" aria-label="Permalink to &quot;声笔飞简和声笔快简&quot;">​</a></h2><p>声笔飞简和声笔快简分别简称为飞简和快简。飞简和快简的模式完全一样，现仅以飞简为例加以介绍，快简参此理解便可。</p><p>飞简的单字输入方式与飞码完全一样，词组的编码将飞码词组的末码改为末字的前三个笔画即可，重码用<code>aeuio</code>选择。飞简实现了词组三码起顶屏和三码起动态调整码长，因而相比飞码可以大幅度缩短码长。同时，也支持自动造词。飞码用户几乎不用学习，上手就可以使用飞简，只是对笔画要很熟悉而且对动态码长要能适应才能用好。</p><p>飞简的词组编码词如下，其中<code>_</code>表示空格，数字表示第几字，s表示声母，b表示笔画，^表示起始顶屏位，‘表示起始码长调整位，x表示用<code>aeuio</code>无理选择重码。括号中的两个笔画为可选的扩展编码，如果四码的重码多，可用于快速过滤重码。</p><p>二字词有三种格式，它们是：</p><ol><li>格式一：<code>s1_b2^&#39;b2(b2b2)x</code>，用于一简字开头的二字词。例如，<code>可贵k_i 发霉f_eo</code>等。</li><li>格式二：<code>s1b1b2^&#39;b2(b2b2)x</code>，用于声笔字开头的二字词。例如，<code>方圆foi 面庞meoe</code>等。</li><li>格式三：<code>s1p1b2^&#39;b2(b2b2)x</code>，用于声部字开头的二字词。例如，<code>保暖brn 洪水hdsi</code>等。</li></ol><p>三字词的编码格式为：<code>s1s2s3^&#39;b3(b3b3)x</code>。例如，<code>解决jjj 计算机jsje 输入法srfo</code>等。</p><p>多字词的编码格式为：<code>s1s2s3^&#39;b0(b0b0)x</code>，其中0表示末字的笔画。例如，<code>呼风唤雨hfhe 大势所趋dsse</code>等。</p><p>以上几种格式的例子都有超过三码的，下次再输入它们时可能就只需要三码了，例如<code>发霉f_e 输入法srf 呼风唤雨hfh</code>。</p><p>在输入四码后，会进行重码提示，如下所示。这时，可以直接用<code>aeuio</code>选择重码。当用户需要的字词不在首页时，可以翻页查找，也可以再追加两个笔画来快速过滤重码。</p><p><img src="'+t+'" alt="声笔飞简示例"></p><h2 id="简码和顶拼ss型二字词优化" tabindex="-1">简码和顶拼ss型二字词优化 <a class="header-anchor" href="#简码和顶拼ss型二字词优化" aria-label="Permalink to &quot;简码和顶拼ss型二字词优化&quot;">​</a></h2><p>在此前的简码和顶拼中，声母+声母的ss型二字词收录的是声母+笔画的sn数选简词以外的词组，使得ss型词包括了一下并不常见的二字词，如<code>武林wl </code>等。在关闭数选简词后，ss型词组的作用受到很大的影响，对大多数不使用数选简词的人很不友好。所以，对ss型二简词重新按高频优先的原则进行了安排，以便用户对真正的高频词形成条件反射。</p><h2 id="默认关闭数选词组" tabindex="-1">默认关闭数选词组 <a class="header-anchor" href="#默认关闭数选词组" aria-label="Permalink to &quot;默认关闭数选词组&quot;">​</a></h2><p>在此前的声笔系列码中，默认是开启了数选简词的。这对初学者造成了很大的困惑，觉得输入法的难度太大了，或者觉得无所适从，所以现在默认关闭了数选简词。对于需要数选简词的熟练用户，自己修改相应输入法方案的schema文件，将其中的@gd副翻译器一行前面的注释去掉并重新部署即可。</p><h2 id="快码和飞码增加spsz组合二字词" tabindex="-1">快码和飞码增加spsz组合二字词 <a class="header-anchor" href="#快码和飞码增加spsz组合二字词" aria-label="Permalink to &quot;快码和飞码增加spsz组合二字词&quot;">​</a></h2><p>快码和飞码中的二码字组合只有少量的是作为词组收录了，按词组方式打到这种非词组组合的时候就会打空。为了避免打空，现在将所有二码字的组合都作为「词组」进行了收录，但其优先顺序不高，在有其它字词的时候会排在后面。这样，既解决了这类打空问题，又不会抢占正常词组的位置。</p>',19)]))}const m=o(c,[["render",p]]);export{f as __pageData,m as default};
