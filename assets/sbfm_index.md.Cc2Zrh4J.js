import{_ as e,c as o,a2 as p,o as i}from"./chunks/framework.BDLWvHlL.js";const d="/images/image-20240517105508643.png",c="/images/image-20240517105530110.png",s="/images/image-20240517105544950.png",t="/images/image-20240517105611103.png",r="/images/image-20240517105626102.png",l="/images/image-20240517110713288.png",n="/images/image-20240517110728990.png",h="/images/image-20230720105949533.png",m="/images/image-20230720110024765.png",g="/images/image-20221029164134590.png",_="/images/image-20240517112346660.png",b="/images/image-20240517112402760.png",u="/images/image-20240517112906880.png",x="/images/image-20240517112920728.png",q="/images/image-20240517112934913.png",f="/images/image-20240517112953241.png",y="/images/image-20240517113008529.png",k="/images/image-20240517113023938.png",z="/images/image-20240517113041217.png",P="/images/image-20240517113102193.png",j="/images/image-20240517113119345.png",v="/images/image-20240517113137658.png",w="/images/image-20240517113250249.png",$=JSON.parse('{"title":"声笔飞码","description":"","frontmatter":{"title":"声笔飞码","date":"2019-07-18T04:24:56.000Z","comments":false,"tags":["声笔","飞码","顶功"],"typora-root-url":"..\\\\..\\\\public"},"headers":[],"relativePath":"sbfm/index.md","filePath":"docs/sbfm/index.md"}'),T={name:"sbfm/index.md"};function A(C,a,S,B,D,L){return i(),o("div",null,a[0]||(a[0]=[p('<h2 id="_1-飞码概述" tabindex="-1">1 飞码概述 <a class="header-anchor" href="#_1-飞码概述" aria-label="Permalink to &quot;1 飞码概述&quot;">​</a></h2><p>声笔飞码，简称飞码，是在输入法界影响最大的顶功输入法，可以说是它直接或者间接地激发了其它非声笔系列顶功输入法的产生。本文是图文教程，视频教程请移步<a href="https://www.bilibili.com/video/BV1zN4y1x7o7/" target="_blank" rel="noreferrer">声笔输入法边播边讲231231</a>，可以参照学习。</p><p>飞码是一种词组输入为主的顶功编码输入方案。它通过单字三码顶来提高单字录入效率，具有字词分离、互不冲突的特点，并且通过扩展编码来支持巨型词库，能够轻松、高效地应对具有大量词组的高冗余度文本，如政经、科技和医学类文章。在遇到离散程度高的古文等时，还可以快速切换到单字模式，采用单字二码顶来提高效率。</p><p>反观五笔、小鹤音形和二笔等传统四码输入方案，它们只有主词模式。纯单的用户无法缩短码长，字词型用户能用的词组空间有限，字词混合编码，字词重码时孰先孰后，甚是纠结。在实际使用时，一般也无法自动造词和动态调整频率和码长。</p><p>无论对单字派还是词组派来说，飞码在码长和击键方面都优于五笔，从而具有更快的打字速度，因为打字速度=击键×60÷码长。即使在主词模式的时候，飞码的三简字仍然可以省略空格而比五笔短，比五笔短了12.41% = (3.26 - 2.90) /2.90 * 100%，而且飞码拥有更强大的词组能力，可以使用更多的词组，从而进一步缩短码长。</p><p>而且，飞码比五笔的习得成本更低，花费的学习时间要少得多。如果从声笔的其它方案转学飞码则学习曲线会更加平滑。</p><p>由于飞码的单字模式与飞单完全相同，同时对于单字派来说，可能只关心和使用飞单，所以单字模式是独立成章进行讲解的。若您是初学者，请务必先了解和掌握<a href="./../sbfd/">声笔飞单</a>，然后再回过头来继续学习下面的词组模式。</p><h2 id="_2-词组模式" tabindex="-1">2 词组模式 <a class="header-anchor" href="#_2-词组模式" aria-label="Permalink to &quot;2 词组模式&quot;">​</a></h2><h3 id="_2-1-单字输入" tabindex="-1">2.1 单字输入 <a class="header-anchor" href="#_2-1-单字输入" aria-label="Permalink to &quot;2.1 单字输入&quot;">​</a></h3><p>飞码在输入单字时，虽然与飞单输入时的编码是完全一样的，然而有一个最大的区别，那就是，包括声笔字和声偏字在内的二简字，一般都需要空格上屏后，才能接着接着输入后续的字词。</p><p>例如，「被作为」在切分为「被」「作为」输入时，使用的输入码为<code>bn_zrwo</code>，其中<code>_</code>表示空格。「被」这个二简字是不能像用飞单时那样被「作为」的第一码顶上屏的。</p><p>不过，即使对于一、二简字，仍然可以想其它办法来节约空格。在后面会讲到如何通过组合变换来实现这一点。</p><h3 id="_2-2-词组输入" tabindex="-1">2.2 词组输入 <a class="header-anchor" href="#_2-2-词组输入" aria-label="Permalink to &quot;2.2 词组输入&quot;">​</a></h3><p>词组，特别是二字词，在现代汉语中是占主导地位的，任何输入法都不能忽视。飞码词组按其组成字的多少分为二字词、三字词和多字词，现分述如下。</p><h4 id="_2-1-1-二字词" tabindex="-1">2.1.1 二字词 <a class="header-anchor" href="#_2-1-1-二字词" aria-label="Permalink to &quot;2.1.1 二字词&quot;">​</a></h4><p>飞码对二字词特别重视，致力于提高其输入效率。飞码的二字词取各字的前两码来编码，例如：<code>不能bhns 下台xbts 大汉dehd 心爱xovz 常规cjgj 电脑dqnv 洞见ddji 健全jrqu 淹没ydmd</code>等。</p><p>需要注意的是，一简字在组词的时候要输入其第二码，如前面例子中的<code>不bh 下xb 没md</code>，而声笔字的第二码不变，如前面例子中的<code>大de 心xo 见ji 全qu</code>。</p><p>飞系中，21个一简字及其前两码为：<code>不bh 平ph 没md 发fy 的db 他tr 你nr 了lz 个gr 可kk 和hh 就jw 去qt 下xb 在zt 出cc 是sq 人rp 一yh 我wg 而vh</code>。</p><p>为了方便初学者，飞码在第三码时提示了前两码对应的单字和第三码开头的一简字、声笔字的组合，例如：<code>困一kky 放是ffs 难大nyde 实无sgwe</code>等，因为初学者可能还记不住一简字、声笔字。如果这种组合与真正的词组重码也没有关系，使用频率低的会被作为重码词排在后面，只需用<code>aeuio</code>选择上屏即可，更好的办法可能是用分号直接通过组合盲打上屏，这样可以不占用正常词组的码位。</p><p><img src="'+d+'" alt="image-20240517105508643" loading="lazy"></p><p>另外，声笔字的组合，以及二简字与一简字的组合，不管是否构成词组，是绝对没有重码的，可以放心大胆地盲打。声笔字与声笔字组合的例子有<code>大家dejo 前进qoje</code>。二简字与一简字组合的例子有<code>非就fij 还是hes 放可ffk 都是dvs</code>。</p><p>如果二字词中的两个字都是一简字，建议按单字进行输入，例如：<code>就是</code>应该用<code>j_s_</code>（其中的_表示空格），而不是jwsq，虽然后者也是可以输入的。这样有利于对一简字形成条件反射，也有利于分化二字词的重码。</p><h4 id="_2-1-2-三字词" tabindex="-1">2.1.2 三字词 <a class="header-anchor" href="#_2-1-2-三字词" aria-label="Permalink to &quot;2.1.2 三字词&quot;">​</a></h4><p>飞码三字词的编码为前两字的首码加第三字的前两码，例如：<code>埃及人vjrp 故事会gshu 计算机jsjm 大无畏dwwt</code>等。注意，在第三字为一简字时，需要输入其第二码，例如：<code>大不了dblz 情况下qkxb</code>等等。</p><p><img src="'+c+'" alt="image-20240517105530110" loading="lazy"></p><p><img src="'+s+'" alt="image-20240517105544950" loading="lazy"></p><h4 id="_2-1-3-多字词" tabindex="-1">2.1.3 多字词 <a class="header-anchor" href="#_2-1-3-多字词" aria-label="Permalink to &quot;2.1.3 多字词&quot;">​</a></h4><p>飞码多字词的编码为前三字的首码加末字的首码，这与传统四码输入法完全一样，例如：<code>丰富多彩ffdc 中华人民共和国zhrg</code>等等。</p><p><img src="'+t+'" alt="image-20240517105611103" loading="lazy"></p><p><img src="'+r+'" alt="image-20240517105626102" loading="lazy"></p><h3 id="_2-3-条件顶屏" tabindex="-1">2.3 条件顶屏 <a class="header-anchor" href="#_2-3-条件顶屏" aria-label="Permalink to &quot;2.3 条件顶屏&quot;">​</a></h3><p>飞码的单字除了三码字可以被顶上屏幕外，其二码字也可以在一定条件下被顶上屏幕。这是一种非常奇特的能力，是从飞讯反向借鉴过来的。条件顶屏，简称条件顶，是指在输入二字词的时候，若想要的第一字为二简字而第二字为三简字或全码字时，可以追加第二字的第三码，将第一字顶上屏幕，前提是追加的第三码与选择键没有冲突。</p><p>例如，在输入「飞系」的时候，发现系统没有该词，而且「系」字的第三码u又没有被重码词占用，那么在输入u的时候就会将「飞」字顶上屏幕，留下xxu，对应的字正是「系」。这样，就不必用退格键来清除xx两码，用空格先上屏「飞」字，再输入「系」字了。</p><p>条件顶所顶出的字并不一定是首选项的首字，而始终是前两码对应的二简字。所以，熟练使用条件顶的前提是：对二简字要烂熟于心！条件顶的好处是，能够避免不必要的回改，从而节约按键，让输入变得更加流畅。</p><p>传统输入法，如五笔字型，在这些情况下，只能清除所有编码或者回退删除两码，造成了很大的浪费，而且影响了输入的连贯性。</p><h3 id="_2-4-大写巧用" tabindex="-1">2.4 大写巧用 <a class="header-anchor" href="#_2-4-大写巧用" aria-label="Permalink to &quot;2.4 大写巧用&quot;">​</a></h3><p>在使用条件顶的时候，如果第三码被选重键占用，那么就无法顶前两码对应的二简字上屏，而需要退格删除两码，用空格上屏二简字，然后再重新输入第二字的编码，非常浪费。这时，可以通过大写第二字的第三码可以无条件地把二简字顶上屏而留下三个编码，不浪费已经输入的编码。</p><p>例如，在输入「飞码」的时候，发现系统没有该词，但是「码」的第三码a已经被重码「飞么」占用，所以使用条件顶是不行的，这时就可以用大写的A来将「飞」顶上屏，输入法将A转换为小写a后留下三码msa，可以接着输入后面的编码，没有丝毫浪费。</p><p><img src="'+l+'" alt="image-20240517110713288" loading="lazy"></p><p><img src="'+n+'" alt="image-20240517110728990" loading="lazy"></p><p>后续字词的声母，若用大写，也可以进行顶屏操作，但使用场景不一样，一般使用在二简字后忘记加空格的时候。</p><p>例如，在输入「有东西」时，输入了ye但忘记了加空格上屏，接着输入了dh，这时出来的是「有灯」。不管是用ESC清除后重新输入，还是用退格键修改，成本都非常高。然而，接着用大写输入「西」的首码X，「有」字就会被顶上屏幕，剩下dhx三码，再输入「西」的第二码h即可输入「东西」了。</p><p>另外，在一、二、三码后，用大写后续字词的首码也可以将首选字词顶上屏幕。「这是不行的」可以用<code>zlsBXcD</code>来输入。</p><p>不过，需要注意的是，大写顶屏在大写作为编码的时候是无效的。例如，在飞码的单字状态下，第二、三码大写是作为编码用来输入词组的，此时不能顶前面的两码。</p><h3 id="_2-5-组合变换" tabindex="-1">2.5 组合变换 <a class="header-anchor" href="#_2-5-组合变换" aria-label="Permalink to &quot;2.5 组合变换&quot;">​</a></h3><p>除了顶屏之外，组合变换也是节约用键和离散重码的重要手段。大量一、二简字的组合，不管是不是词组，都可以通过这种方式来进行输入。注意，这个时候是没有提示的，需要用户对简字非常熟习才能灵活自如。编码变换一般通过分号键触发，有时也通过Tab键和单引号触发。</p><p>(1) 一简字与一简字的组合</p><p>例如，「个人」一词，虽然可以按词组的方式用<code>grrp</code>来输入。更好的方式是当成两个一简字用<code>g_r_</code>来输入，其中下划线表示空格。然而，最好的方式则是采用编码变换，用<code>gr;</code>来输入，可以节约一次用键。</p><p>(2) 一简字与二简字的组合</p><p>例如，「一会」可以用<code>yhu;</code>代替<code>yhhu</code>来输入，虽然不能节约用键，但是输入变得确定了，而且可以将<code>yhhu</code>的首选让给「与会」，就起到了离散重码的作用。同样，「一场」可以用<code>yct;</code>来输入。</p><p>(3) 二简词与一简字的组合</p><p>二简词与一简字可以组合起来通过Tab一起上屏，从而节约一次空格键。例如，「我们的」在常规输入时，得用<code>wm + Tab + d + 空格</code>，而利用组合变换后就只需<code>wmd + Tab</code>了。</p><p>(4) 一简字与二简词的组合</p><p>一简字与二简词可以组合起来通过单引号一起上屏，从而节约一次空格键。例如，「的时候」在常规输入时，得用<code>d + 空格 + sh + Tab</code>，而利用组合变换后就只需<code>dsh&#39;</code>了。</p><p>(5) 二简字与二简字的组合</p><p>例如，「回改」在飞码默认词库中是没有的，然而用户可能会误以为它是个库里有的词，于是就输入编码<code>higj</code>，但是发现只有「回锅」一个候选项。这时，如果用退格键删除后面两码，加空格上屏「回」字，再输入「改」字，代价是相当高昂的。幸好，有了组合变换的手段，加个分号就可以变为「回改」，并且也自动造好了这个词，下次就可以用词组来输入「回改」了。</p><p>(6) 二简字与二简词的组合</p><p>二简字与二简词可以组合起来通过单引号一起上屏，从而节约一次空格键。例如，「也必须」用单引号组合变化后，用<code>yabx&#39;</code>就可以输入了，否则就需要用<code>ya_bx&#39;</code>来输入。</p><p>(7) 二简字与三简字的组合</p><p>二简字与三简字可以组合起来通过分号一起上屏，虽然并不能节约用键，但可以避免回改。例如，假设想用户以为「都顶」是个系统有的词组，然而输入<code>dvdy</code>后发现没有该词，同时又知道「都」是二简字、「顶」是三简字，于是就可追加「顶」的第三码<code>e</code>后，再用分号变换来上屏「都顶」。</p><p><img src="'+h+'" alt="image-20230720105949533" loading="lazy"></p><p><img src="'+m+'" alt="image-20230720110024765" loading="lazy"></p><p>(8) 三个一简字的组合，可以用Shift+空格来输入，手机上可上滑空格。例如，「一个人」「就是了」「是不是」「不是不」等都可以这样输入。</p><p>(9) 二简字加两个一简字的组合，可以用Shift+空格来输入，手机上可上滑空格。例如，「有一个」「这个人」「那不是」「走下去」等都可以这样输入。</p><h3 id="_2-6-lua脚本" tabindex="-1">2.6 LUA脚本 <a class="header-anchor" href="#_2-6-lua脚本" aria-label="Permalink to &quot;2.6 LUA脚本&quot;">​</a></h3><p>详见：<a href="./../sbjc/#_7-lua脚本">LUA脚本</a></p><h3 id="_2-7-设置选项" tabindex="-1">2.7 设置选项 <a class="header-anchor" href="#_2-7-设置选项" aria-label="Permalink to &quot;2.7 设置选项&quot;">​</a></h3><p>详见：<a href="./../sbjc/#_8-设置选项">设置选项</a></p><h3 id="_2-8-字词混输" tabindex="-1">2.8 字词混输 <a class="header-anchor" href="#_2-8-字词混输" aria-label="Permalink to &quot;2.8 字词混输&quot;">​</a></h3><p>飞码默认为词组模式。这种模式，从顺畅性和码长的角度来说，有利于输入大多数现代文，适用于大多数人的应用场景，因为现代文是以词组特别是二字词为主的。但是，不好的地方是，二简字在单独使用时就需要空格上屏了。还有一个要求，那就是要分词后输入，这对有的人来说可能会成为一个难点。不过，在想打的时候，对一般的人来说，都是以词为单位打腹稿的，所以分词输入是一个很自然的过程。</p><p>我们还是以上一章中单字输入一节的句子为例，以词为主，进行字词混输，优先使用长词，以便缩短平均码长。结果如下：</p><blockquote><p>输入法srfd 对于dayv 任何rrhr 学习xxxd 和h<code>_</code>使用 sryu 中文ziwd 的人<code>dr;</code> 都是dvs<code>_</code> 极其jmqh 重要zvyx 的d 。.</p></blockquote><p>可见，除了「和」这个一简字外都没有用到空格，「的人」是通过组合来节约空格的。而且，在二字词中的三简字和全码字也只用了两键，「输入法」这个多字词一共才用了四键，输入效率的提升还是比较明显的。当然，在遇到非首选字词时，还是需要选重的。</p><h2 id="_3-核心技术" tabindex="-1">3 核心技术 <a class="header-anchor" href="#_3-核心技术" aria-label="Permalink to &quot;3 核心技术&quot;">​</a></h2><p>声笔输入法具有六项区别于传统输入法的核心技术：续码顶屏、字词分流、字母选重、扩展编码、动态码长和自动词组。有些技术在前面的讲解中，已经散在地谈到了，也体现在了一些例子中。为了进一步加深读者的印象，对它们有更深刻的认识，现在作为专题，集中对它们在飞码中的应用进行归纳和总结，以便用户有意识地进行充分的运用。另外，还会介绍可自定义词典和增强模式的使用方法。</p><h3 id="_3-1-续码顶屏" tabindex="-1">3.1 续码顶屏 <a class="header-anchor" href="#_3-1-续码顶屏" aria-label="Permalink to &quot;3.1 续码顶屏&quot;">​</a></h3><p>顶屏现象在传统四码输入法中也是普遍存在的。</p><p>例如，在搜狗五笔中，对于全码时的首选项，就不必用空格键来选择，继续输入下一个字词就可以被顶上屏幕；在后续标点符号的时候，首选项也可以被顶上屏幕。</p><p>但是，在非全码时，传统输入法是不能被后续字词顶屏的，而顶功输入法的顶屏主要就是指的这种能力，所以称为续码顶屏。</p><p>例如，「输」字，在飞码和五笔中的编码分别为scu和lwg，都为三码，但是在接着打「入」字时，飞码可以被「入」的第一码顶屏而省略空格，而五笔则必须先用空格上屏后，才能打「入」的第一码。这是因为飞码单字是三码顶，即从第三码起可以被后续的编码顶屏。</p><p>如果是在飞码的单字状态下，则二简字也是可以被顶屏的。</p><p>比如，「入」字，在飞码和五笔中的编码分别为rp和ty，都为两码。在单字状态下，接着打「口」字时，飞码可以用「口」的第一码顶出「入」而省略空格，而五笔则必须先用空格上屏后，才能打「口」的第一码。</p><p>另外，在飞码的常规状态下，数字也可用来顶屏，因为这时飞码并不用数字来编码。</p><p>例如，输入「在90年代」时，飞码打「在」后可以直接打9来顶屏，而五笔则只能先用空格将「在」上屏才能打9。</p><h3 id="_3-2-字词分流" tabindex="-1">3.2 字词分流 <a class="header-anchor" href="#_3-2-字词分流" aria-label="Permalink to &quot;3.2 字词分流&quot;">​</a></h3><p>在传统输入法如五笔字型中，四码的字、词是混合编码的，它们共享同一个编码空间。在发生重码时，究竟把单字排在前面，还是把词组排在前面，面临两难的境地。当收录的单字和词组数量增大时，这个问题会变得更加突出。</p><p>例如， 在搜狗五笔中，编码ssss是由下面的字、词共享的，其中「木」是常用字，而「森林」又是常用词。</p><p><img src="'+g+'" alt="image-20221029164134590" loading="lazy"></p><p>在飞码中，单字和词组各自有不同的编码格式，单字的第三、四码肯定是笔画，编码字母只能是aeuio，而词组的第三码肯定是声母，编码字母不可能是aeuio。所以，它们享有不同的编码空间，不会发生冲突，不存在单字和词组那个优先的问题，不会发生常用字、词之间的排序冲突。</p><p><img src="'+_+'" alt="image-20240517112346660" loading="lazy"></p><p><img src="'+b+'" alt="image-20240517112402760" loading="lazy"></p><p>字词分流也使得飞码能够在采用静态单字的同时采用动态词组，即单字不调频而只针对词组进行调频处理。</p><h3 id="_3-3-字母选重" tabindex="-1">3.3 字母选重 <a class="header-anchor" href="#_3-3-字母选重" aria-label="Permalink to &quot;3.3 字母选重&quot;">​</a></h3><p>传统输入法，不管是五笔还是拼音，通常都是用数字键来选择重码。但是，数字键往往是大跨行操作，容易产生误击，也会影响击键。 于是，输入法往往会提供一些更快捷的备选方式来加速重码的选择。比如，搜狗拼音就默认可以用左右ctrl键来上屏二三候选，还可以设置为用左右shift或者用分号和单引号。然而，这些键要么仍然不好按，要么会产生用法上的冲突，而且数量不够，只能解决两个候选项的问题，也不好运用在手机上，通用性差。</p><p>声笔飞码，通过巧妙运用其小码元集aeuio，让它们有条件地承担起多重用途，完美地解决了快捷选重的问题。当码长为0时，它们引导编码反查、LUA脚本等功能；当码长为4或6时，它们用于选择重码；否则，它们代表笔画，作为编码使用。</p><p>由于aeuio位于字母键区域，是最好操作的按键，所以选择重码的速度是最快的，同时在包括手机在内的各种设备上，其位置也是基本固定的，便于保持在各种情况下操作的一致性。</p><p>字母选重还解放了数字键，使得数字键可以用于顶屏，从而在首选项接数字时可以省略空格而节约按键。在增强模式下，数字则可用来作为增强编码，缩短常用字词的码长。</p><h3 id="_3-4-扩展编码" tabindex="-1">3.4 扩展编码 <a class="header-anchor" href="#_3-4-扩展编码" aria-label="Permalink to &quot;3.4 扩展编码&quot;">​</a></h3><p>声笔飞码词组的四码空间容量与传统四码输入法如五笔字型是差不多的。但是，由于飞码收词量超过了100万，虽然飞码的离散很好，然而在个别情况下重码现象也会比较严重，可能需要多次翻页查找。于是，飞码采用了扩展编码，通过追加首字的前两个笔画，迅速扩大编码空间为四码时的25倍，可以快速筛选出所需的重码词组。结合后述动态码长的使用，完美地兼顾了编码空间与输入效率，既能享有巨大的编码空间，又能具有较短的平均码长，两全其美。</p><p>比如，「园艺系」一词在第一次输入时，输入<code>yyxx</code>后需要在第十页才能找到，如下图所示。每一页，都需要用眼睛扫视 6 个选项，人机交互频繁，对击键率影响很大，效率很低。</p><p><img src="'+u+'" alt="image-20240517112906880" loading="lazy"></p><p><img src="'+x+'" alt="image-20240517112920728" loading="lazy"></p><p><img src="'+q+'" alt="image-20240517112934913" loading="lazy"></p><p><img src="'+f+'" alt="image-20240517112953241" loading="lazy"></p><p><img src="'+y+'" alt="image-20240517113008529" loading="lazy"></p><p><img src="'+k+'" alt="image-20240517113023938" loading="lazy"></p><p><img src="'+z+'" alt="image-20240517113041217" loading="lazy"></p><p><img src="'+P+'" alt="image-20240517113102193" loading="lazy"></p><p><img src="'+j+'" alt="image-20240517113119345" loading="lazy"></p><p><img src="'+v+'" alt="image-20240517113137658" loading="lazy"></p><p>然而，如果发现首页没有该词就追加首字前两个笔画<code>ia</code>的话，「园艺系」就出现在第一页上，只需用<code>e</code>选择上屏就可以了，如下图所示。</p><p><img src="'+w+`" alt="image-20240517113250249" loading="lazy"></p><p>扩展编码需要在你进行任何翻页操作前使用，否在输入第五码时就会直接选择重码上屏了。需要注意的是，声笔飞码的单字没有设计扩展编码，因为对于常用字来说，其重码现象并不严重。实际上，在输入GB2312的6763个字时，都是无需翻页的。</p><h3 id="_3-5-动态码长" tabindex="-1">3.5 动态码长 <a class="header-anchor" href="#_3-5-动态码长" aria-label="Permalink to &quot;3.5 动态码长&quot;">​</a></h3><p>动态码长不仅是码长的调整，也包括重码顺序的调整，实际上都是因为对频率的调整而引起的。但是，作为专业性的输入法，飞码只有词组参与调频，其单字是不参与调频的，即单字的重码位置是固定的，这有利于对单字进行快速盲打。</p><p>当四码词组有重码的时候，如果选择了某个非首位的词组，那么它的频率权重就会提高，在下次输入的时候，其排序就会提前。一般通过一、两次选择就可以提前到首位，从而就能利用顶屏来节约一次按键。</p><p>例如：第一次输入<code>针织zjzj</code>时如果它是排在第三位 ，用<code>e</code>选择上屏后，下次输入就可能排在首位了，于是可以利用顶屏节约一次选择键。如果在输入的时候采用了扩展编码，比如用<code>yyxxia</code>输入了「园艺系」，那么在下次输入的时候一般就只需要<code>yyxx</code>就可以了，码长得到了大幅缩短。</p><h3 id="_3-6-自动词组" tabindex="-1">3.6 自动词组 <a class="header-anchor" href="#_3-6-自动词组" aria-label="Permalink to &quot;3.6 自动词组&quot;">​</a></h3><p>声笔飞码目前自带100万多词组，覆盖的面已经很广。但是，用户在使用过程中不可避免地还会遇到缺词的情况，需要添加新的词组，而且对于不满意的词组可能还想删除。声笔飞码就提供了这些能力。</p><h4 id="_3-6-1-自动造词" tabindex="-1">3.6.1 自动造词 <a class="header-anchor" href="#_3-6-1-自动造词" aria-label="Permalink to &quot;3.6.1 自动造词&quot;">​</a></h4><p>飞码的造词是在输入过程中自动进行的，无需用户干预。例如：输入<code>飞fa_ 码msaa</code>后，下次输入<code>fams</code>时就会有该词了，只是如果有重码的话，新造的词会排在后面。如果重码太多，可以追加首字前两笔或者用Shift+Tab一次性地跳到最后，以避免多次翻页。自动造的词组是临时词组，带有太极标志，优先级别低，只有在选择使用一次以后，才会成为正式词组，并提高优先级别。</p><p>需要注意的是，在进行枚举自动造词的时候，是以编码对应的字、词为单位来进行组合的，并不是以单字为单位的。例如，在输入<code>声笔stbp 系列xxld 码msaa</code>后，生成的词组为「声笔系列码」「声笔系列」「系列码」，而不会生成「声笔系」「笔系列」「列码」等。另外，如果之后马上使用了退格键，系统就会自动删除所造的词组；中间夹杂有非汉字的话，也会中断造词。</p><h4 id="_3-6-2-打空造词" tabindex="-1">3.6.2 打空造词 <a class="header-anchor" href="#_3-6-2-打空造词" aria-label="Permalink to &quot;3.6.2 打空造词&quot;">​</a></h4><p>如果在输入四码后，发现没有所需的二字词，且首页未满。若首字是二简字，则可用条件顶屏。若首字不是二简字，那么可以按Ctrl+L定位在第二码后进行快捷造词。</p><p>如果在输入五、六码后，发现没有所需的二字词，则可按单引号丢弃追加的笔画并置于前两码后，再继续造词，可以避免浪费多数已经输入的编码。</p><h4 id="_3-6-3-自动清理" tabindex="-1">3.6.3 自动清理 <a class="header-anchor" href="#_3-6-3-自动清理" aria-label="Permalink to &quot;3.6.3 自动清理&quot;">​</a></h4><p>由于飞码是采用的自动造词策略，在提供方便的同时也会产生大量的废词，所以系统提供了废词清理功能，能够将用户几乎不使用的新造临时词组自动清除。对于少量暂时还未被清理的废词，用户不必理会，到时限后就会被自动删除。</p><p>在必要的时候，如用户错误地确认了临时词组，系统也提供了手动删除的手段。在电脑上，通过方向键将光标移动到该词上面，再按 <code>Control + Delete</code> 键来删除。在手机上，则通过左右滑动空格来移动光标到要删除的词，然后下滑退格键删除。</p><p>用惯了静态输入法的人有可能看不惯废词，在“强迫症”的驱使下试图不断地手动删除它们。这是不明智的做法，可能累死了也删不完，建议让系统自动管理。</p><h2 id="_4-单字模式" tabindex="-1">4 单字模式 <a class="header-anchor" href="#_4-单字模式" aria-label="Permalink to &quot;4 单字模式&quot;">​</a></h2><p>虽然飞码默认是主词的输入方案，但是飞码也提供了单字模式，实际上就是启用了自动造词的飞单。</p><p>在临时遇到大量离散单字需要输入时，飞码可以在有1-2位编码时按F6快速切换为单字模式，实现单字二码起顶。在单字二码顶的同时，仍然可以支持词组的输入，变身为主单的模式。如果要设置单字为默认模式，那么就需要修改sbfm.schema.yaml，并重新部署。</p><p>单字模式有什么好处呢？好处是，在保持单字高效的同时，对少数用单字输入时效率很低的词组，仍然按词组的方式来输入。</p><p>效率很低的标准是什么呢？不同的人可能有不同的标准。有的人觉得，二字词用单字输入时超过5键就应该按词组来打，三字词和多字词均应按词组来打。另一些人觉得，二字词和三字词打单时超过6键才应该按词组来打，多字词一律打词。更有极端的人，可能认为二字词打单超过7键才打词。</p><p>这里只简单说一下单字模式时输入词组的方法，即第三码用大写字母。下面是一些比较典型的大写打词例子：</p><blockquote><p>蝴蝶hcDc 饕餮tsTs 耄耋mtDt 黑黢黢hqQh 汹涌澎湃xyPp 中华人民共和国zhRg</p></blockquote><p>有的人对于打大写字母是心存畏惧的，特别是那不熟习英文输入的人，他们并没有这方面的训练。如果用户想主单但又不想用大写字母输入第三码，那么可以考虑使用<a href="./../sbfx/">声笔飞讯</a>。</p><h2 id="_5-增强模式" tabindex="-1">5 增强模式 <a class="header-anchor" href="#_5-增强模式" aria-label="Permalink to &quot;5 增强模式&quot;">​</a></h2><p>为了缩短词组码长和增加输入确定性，提高输入效率，特为飞码提供了数选字和数选词，可以在增强模式下使用。</p><p>如果要临时使用增强模式，在电脑上可以用Ctrl+~或F4，在手机上直接点击状态栏的「常规/增强」项，就可以切换状态了。如果要将增强模式设置为默认状态，只要将sbfm.schema.yaml文件中的is_enhanced开关项的reset值由0改为1，并重新部署一下就可以了。</p><p>数选字词的基本用法请参见<a href="./../sbfd/#_5-增强模式">飞单增强模式</a>。这里只讲飞码特有的情况，也就是说在第三码和第四码后接数字时，可以使用延迟顶屏来省略空格。由于没有提示，所以要求用户记住了数选字词才能这么操作。</p><p>例如，在输入「的感受」时，通常得用<code>d_gs7</code>，但是由于有了延迟顶屏，就只用 <code>dgs7</code> 就可以输入了。</p><p>再如，在输入「要接受」时，通常得用<code> yx_js7</code>，但是由于有了延迟顶屏，就只用 <code>yxjs7</code> 就可以了。</p><p>在增强模式下使用缩减码变换，还可以用缩减码来顶二简字上屏，其作用类似于大写顶屏。这种变换是将缩减码第三码的<code>aeuio</code>改为用<code>23789</code>来输入。比如，「以」「码」的编码<code>yrmeu</code>改为<code>yrme7</code>来输入。这时，会通过延迟顶屏将「以」上屏，再用<code>me7</code>来输入「码」。</p><h2 id="附录-编码格式" tabindex="-1">附录：编码格式 <a class="header-anchor" href="#附录-编码格式" aria-label="Permalink to &quot;附录：编码格式&quot;">​</a></h2><p>为了便于用户总结和记忆飞码的基本内容，现将飞码字词编码格式总结一下，编码格式采用了以下精简的表达方式。</p><blockquote><p>单字 <code>sb, spb^bx</code> 二字词 <code>s1z1s2z2^&#39;b1b1x</code> 三字词 <code>s1s2s3z3^&#39;b1b1x</code> 多字词 <code>s1s2s3s0^&#39;b1b1x</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>z = p|b</span></span>
<span class="line"><span>s = p = [qwrtsdfgzxcvbyphjklnm]</span></span>
<span class="line"><span>b|x = [aeuio]</span></span></code></pre></div><p>其中：<code>^</code>表示起始顶屏码位，字母后的数字表示词组中的第几个字，0特别地表示末字；<code>&#39;</code>表示码长调整位；s表示声母（大写时表示用大写字母输入），p表示偏旁部首，b表示笔画，x表示选择键，<code>|</code>表示或者，z表示p或b。s 和 p 均采用 aeuio 以外的 21 个英文字母，b和x均采用 aeuio 这几个元音字母。</p>`,149)]))}const N=e(T,[["render",A]]);export{$ as __pageData,N as default};
