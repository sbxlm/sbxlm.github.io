import{_ as n,c as a,o as s,a3 as p}from"./chunks/framework.DcxGHbOq.js";const f=JSON.parse('{"title":"声笔2023年8月18日更新纪要","description":"","frontmatter":{"title":"声笔2023年8月18日更新纪要","date":"2023-08-18T10:52:28.000Z","tags":["声笔","更新"]},"headers":[],"relativePath":"posts/声笔2023年8月18日更新纪要.md","filePath":"posts/声笔2023年8月18日更新纪要.md"}'),e={name:"posts/声笔2023年8月18日更新纪要.md"},l=p(`<h3 id="一、-更新内容" tabindex="-1">一、 更新内容： <a class="header-anchor" href="#一、-更新内容" aria-label="Permalink to &quot;一、 更新内容：&quot;">​</a></h3><ol><li><em>增加sbfm_delayed.lua脚本，以优化飞码主单延顶时的提示信息；</em></li><li>优化飞系的声笔字提示与顺序；</li><li>声笔简码和声笔拼音支持用四个字的声母加单引号来输入一个二简词加两个二简字的组合；</li><li>优化symbols，以便快速输入箭头符号；</li><li>纠正声笔拼音数选词中多一个「给予」的错误；</li><li>优化日期和时间的lua脚本；</li><li><em>增加e引导的计算器；</em></li><li>修改weasel.yaml，以突出注释文字的显示；</li><li>声笔Win版sbxlm目录中增加backgrounds子目录，并在其中增加.nomedia文件。</li></ol><p>**更新方法：**运行安装程序后，把除用户词典外的所有文件和文件夹复盖一下，这样可以保留已有的调频和造词。</p><p>在更新的项目中，第一项和第七项（即斜体部分）需要特别说明一下。</p><h3 id="二、优化飞码主单延顶时的提示信息" tabindex="-1">二、优化飞码主单延顶时的提示信息 <a class="header-anchor" href="#二、优化飞码主单延顶时的提示信息" aria-label="Permalink to &quot;二、优化飞码主单延顶时的提示信息&quot;">​</a></h3><p>飞码主单的延顶模式不仅有利于尽量避免使用大写，而且输入词组时使用的编码与词组模式完全一样，如下所示。</p><blockquote><p>蝴蝶 hcdc 饕餮 tsts 耄耋 mtdt 黑黢黢 hqqh 汹涌澎湃 xypp 中华人民共和国 zhrg</p></blockquote><p>在词组码长为四时，需要注意观察，若其后将发生非编码顶屏，且首选不是两个二简字时，而想输入的又是两个二简字时，则需先用分号将其作为二简组合上屏，否则会误将首选词上屏。例如，输入「选重后，」时，在输到「重后」时，结果如下。</p><p><img src="https://sbxlm.gitee.io/images/image-20230817161455921.png" alt="image-20230817161455921"></p><p>此时，如果用逗号顶屏，那么会将「垂饵虎口」顶上屏幕，并同时上屏逗号，这不是期望的结果。若想上屏「重后」，则必须先用分号将「重后」作为两个二简字的组合上屏，然后再输入逗号。这是在初始使用主单延顶时非常容易犯的错误，请务必注意。</p><p>延顶时首选词组不能被后续的字词顶上屏幕，必须先用空格上屏，而且词组的重码还得用大写的 AEUIO 来选择。如果不习惯输入大写字母，可以修改一下 schema 文件，通过删除行前的 #号来解开下图中被注释掉的五项，用 23789 来代替大写选重键。</p><p><img src="https://sbxlm.gitee.io/images/image-20230727140759102.png" alt="image-20230727140759102"></p><p>需要注意的是，在用 23789 来选重后，对数字顶屏有点影响。若要同时使用增强模式，则可能与数选词发生冲突。还有，单字在四码时首选仍然是可顶屏的，单字的四码重码仍然是用小写的 aeuio 来选择的。</p><p>相比即顶模式，延顶还有个好处，那就是可以像词组模式那样用组合变换，将一二简字词组合起来，通过 Tab、分号或者单引号一起上屏，从而节约用键。</p><h3 id="三、e-引导的脚本" tabindex="-1">三、e 引导的脚本 <a class="header-anchor" href="#三、e-引导的脚本" aria-label="Permalink to &quot;三、e 引导的脚本&quot;">​</a></h3><p>用 e 加表达式来完成各种计算功能，相当于一个强大的快速计算器，例子如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>e1+1 輸出 2</span></span>
<span class="line"><span>efloor(9^(8/7)*cos(deg(6))) 輸出 -3</span></span>
<span class="line"><span>ee^pi&gt;pi^e 輸出 true</span></span>
<span class="line"><span>emax({1,7,2}) 輸出 7</span></span>
<span class="line"><span>emap({1,2,3},\\x.x^2|) 輸出 {1, 4, 9}</span></span>
<span class="line"><span>emap(range(-5,5),\\x.x*pi/4|,deriv(sin)) 輸出 {-0.7071, -1, -0.7071, 0, 0.7071, 1, 0.7071, 0, -0.7071, -1}</span></span>
<span class="line"><span>e$(range(-5,5,0.01))(map,\\x.-60*x^2-16*x+20|)(max)() 輸出 21.066</span></span>
<span class="line"><span>etest(\\x.trunc(sin(x),1e-3)==trunc(deriv(cos)(x),1e-3)|,range(-2,2,0.1)) 輸出 true</span></span></code></pre></div><p><img src="https://sbxlm.gitee.io/images/image-20230817161333742.png" alt="image-20230817161333742"></p><p>除了一般的 lua 表达式外，该脚本还支持下列函数，按字母顺序排列。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>abs = math.abs</span></span>
<span class="line"><span>acos = math.acos</span></span>
<span class="line"><span>arev = function (arr)</span></span>
<span class="line"><span>array = function (...)</span></span>
<span class="line"><span>asin = math.asin</span></span>
<span class="line"><span>atan = math.atan</span></span>
<span class="line"><span>avg = function (t)</span></span>
<span class="line"><span>ceil = math.ceil</span></span>
<span class="line"><span>chain = function (t)</span></span>
<span class="line"><span>cos = math.cos</span></span>
<span class="line"><span>date = os.date</span></span>
<span class="line"><span>deg = math.deg</span></span>
<span class="line"><span>deriv = function (f, delta, dc)</span></span>
<span class="line"><span>e = exp(1)</span></span>
<span class="line"><span>exp = math.exp</span></span>
<span class="line"><span>fac = function (n)</span></span>
<span class="line"><span>filter = function (t, ...)</span></span>
<span class="line"><span>floor = math.floor</span></span>
<span class="line"><span>foldl = function (t, f, acc)</span></span>
<span class="line"><span>foldr = function (t, f, acc)</span></span>
<span class="line"><span>inf = math.huge</span></span>
<span class="line"><span>integ = function (f, delta, dc)</span></span>
<span class="line"><span>irange = function (from, to, step)</span></span>
<span class="line"><span>irev = function (arr)</span></span>
<span class="line"><span>isinteger = function (x)</span></span>
<span class="line"><span>lapproxd = function (f, delta)</span></span>
<span class="line"><span>ln = math.log</span></span>
<span class="line"><span>log = function (x, base)</span></span>
<span class="line"><span>map = function (t, ...)</span></span>
<span class="line"><span>max = function (arr)</span></span>
<span class="line"><span>MAX_INT = math.maxinteger</span></span>
<span class="line"><span>min = function (arr)</span></span>
<span class="line"><span>MIN_INT = math.mininteger</span></span>
<span class="line"><span>mod = math.fmod</span></span>
<span class="line"><span>MSE = function (t)</span></span>
<span class="line"><span>nCr = function (n, r)</span></span>
<span class="line"><span>nPr = function (n, r)</span></span>
<span class="line"><span>path = function ()</span></span>
<span class="line"><span>pi = math.pi</span></span>
<span class="line"><span>rad = math.rad</span></span>
<span class="line"><span>random = math.random</span></span>
<span class="line"><span>randomseed = math.randomseed</span></span>
<span class="line"><span>range = function (from, to, step)</span></span>
<span class="line"><span>rk4 = function (f, timestep)</span></span>
<span class="line"><span>round = function (x, dc)</span></span>
<span class="line"><span>sapproxd = function (f, delta)</span></span>
<span class="line"><span>sin = math.sin</span></span>
<span class="line"><span>sqrt = math.sqrt</span></span>
<span class="line"><span>sum = function (t)</span></span>
<span class="line"><span>tan = math.tan</span></span>
<span class="line"><span>test = function (f, t)</span></span>
<span class="line"><span>time = os.time</span></span>
<span class="line"><span>trapzo = function (f, a, b, n)</span></span>
<span class="line"><span>trunc = function (x, dc)</span></span></code></pre></div>`,20),i=[l];function t(c,o,r,m,d,h){return s(),a("div",null,i)}const g=n(e,[["render",t]]);export{f as __pageData,g as default};
