import{_ as i,a as p,b as l,c as o,d as e,e as s,f as t,g as r,h as m,i as c}from"./chunks/image-20241106103730370.oQdrkLMn.js";import{_ as g,c as d,a2 as n,o as _}from"./chunks/framework.BDLWvHlL.js";const u="/images/image-20240331111209547.webp",b="/images/image-20240402121256851.webp",h="/images/image-20240402121330664.webp",z="/images/image-20240402121347825.webp",f="/images/image-20240402121411951.webp",y="/images/image-20240402121442104.webp",v=JSON.parse('{"title":"声笔鹤整","description":"","frontmatter":{"title":"声笔鹤整","date":"2020-12-08T15:06:28.000Z","typora-root-url":"..\\\\..\\\\public"},"headers":[],"relativePath":"sbhz/index.md","filePath":"docs/sbhz/index.md"}'),q={name:"sbhz/index.md"};function k(x,a,j,w,P,T){return _(),d("div",null,a[0]||(a[0]=[n('<h2 id="_1-简单的介绍" tabindex="-1">1 简单的介绍 <a class="header-anchor" href="#_1-简单的介绍" aria-label="Permalink to &quot;1 简单的介绍&quot;">​</a></h2><p>声笔鹤整是与声笔小鹤相对应的整句方案。与声笔小鹤相比，</p><ul><li>它的优点是：更接近传统双拼，但又比传统双拼高效，因为可以随时用笔画辅助来筛选重码，还能采用顶功模式来节约用键；</li><li>它的缺点是：无法使用简拼来缩短码长，因而输入效率比较低下。</li></ul><p>声笔鹤整默认采用后置顶功模式，以便尽量发挥它的优势。下面我们举一个例子来加以说明。</p><blockquote><p>例子1: 中文输入法是中文使用者的基础工具。</p></blockquote><p>方法1: <code>中文zsw_ 输入法suruf_ 是s_ 中文zsw_ 使用者siysz_ 的d_ 基础jc2 工具。gsj.</code></p><p>方法2: <code>中文输入法zswfsuruf_ 是s_ 中文使用者zswfsiysz_ 的d_ 基础工具。jicugsj.</code></p><p>方法3: 如下图所示</p><p><img src="'+i+'" alt="image-20240331081437298" loading="lazy"></p><p>上述例子1是一个简单的句子，里面不存在罕见的字词和怪异的语法现象，所以采用以上三种方法都是毫无问题的。方法1的分词颗粒度最细，以单词为单位。方法3的分词颗粒度最粗，以整句为单位。方法2的分词颗粒度居中，以短语为单位。假设三种方法都没有任何转换错误、键入错误和键入错误，那么显然方法3是最佳的输入方式。因为方法3对人来说，无需分词，还省略了空格，能够省脑、省力；对设备来说，可以利用更多的语境，以便提高转换的准确性。</p><p>但是，对于复杂的输入场景，再考虑到键入错误和拼写错误，结论就大不一样了。</p><blockquote><p>例子2: 故君子居必择乡， 游必就士， 所以防邪辟而近中正也。</p></blockquote><p>例子2是荀子《劝学》中的句子。由于声笔拼音词典中已经收录了「故君子居必择乡」，所以按照两键一字来输入的话，肯定会命中。然而，后面的内容就没有这么幸运了，若当成两个输入单位，按两键一字的方式进行输入则肯定不能命中，因为声笔拼音词典没有收录它们。这就会导致大量回改，虽然声笔鹤整的回改操作是比较容易的，但是仍然很不划算。这时，最好的输入方式就是以字词为单位来进行，利用笔画加码和顶功上屏仍然可以实现比较快速的输入。</p><p>读者可能会问，如果采用搜狗拼音，利用它强大的云词库，会不会产生很好的效果呢？不错，经典的古文句子和短语，搜狗云词库都已经收录，只要你的拼写准确且键准完全正确，那么可以两键一字地一溜烟打过去。但是，问题正好就出现在拼写和键准上。比如，我在使用搜狗小鹤双拼时就把「所以防邪辟而近中正也」中的「辟」字拼写成了bi，而不是pi，从而导致无法命中，并且回改起来非常困难。</p><p><img src="'+u+'" alt="image-20240331111209547" loading="lazy"></p><h2 id="_2-分词与补码" tabindex="-1">2 分词与补码 <a class="header-anchor" href="#_2-分词与补码" aria-label="Permalink to &quot;2 分词与补码&quot;">​</a></h2><p>善用分词，用好分词，即使对于拥有强大云词库的搜狗拼音也是非常重要的。然而，既然要分词输入，云词库就不那么重要了。反而是，重码字词的快速筛选能力和新词的便捷创建能力变得非常重要，这正是声笔鹤整的强项，更是声笔小鹤的强项。</p><blockquote><p>例子3: 质子</p></blockquote><p><img src="'+p+'" alt="image-20240402083559384" loading="lazy"></p><p>在输入zizi后，候选中没有「质子」，于是追加末字首笔。</p><p><img src="'+l+'" alt="image-20240402083617864" loading="lazy"></p><p>「质子」出现在候选中了，可以用8选择，也可以再补充首字的首笔。</p><p><img src="'+o+'" alt="image-20240402083657705" loading="lazy"></p><p>「质子」被提前了，此时可以用3选择，也可以再补充首字的次笔。</p><p><img src="'+e+'" alt="image-20240402083721537" loading="lazy"></p><p>在补充首字的前两笔后，「质子」被提前到了首选。此时，后续如果还需要输入的话，这个首选是可以被顶上屏幕的，能够节约空格键。同时，可以只观察首选和不用数字键。所以，建议用户一般采用最后这种方式来输入。</p><blockquote><p>例子4: 鹤整</p></blockquote><p><img src="'+b+'" alt="image-20240402121256851" loading="lazy"></p><p><img src="'+h+'" alt="image-20240402121330664" loading="lazy"></p><p><img src="'+z+'" alt="image-20240402121347825" loading="lazy"></p><p>在输入的时候，可能并不知道「鹤整」不是词组，仍然把它当成词组来输入。输入到这一步时，鹤字已经出现在候选中了。于是很自然地进入选字组词阶段。</p><p><img src="'+f+'" alt="image-20240402121411951" loading="lazy"></p><p><img src="'+y+'" alt="image-20240402121442104" loading="lazy"></p><p>在选择「鹤」「整」两字后，再次输入hez，发现「鹤整」一词已经造好了。</p><p>中文二字词和单字的重码可能会非常多，可以通过多达五个笔画，因而可以轻松地将重码离散开，快速地筛选出需要的字词，如下面的例5和例6所示。</p><blockquote><p>例子5: 四史</p></blockquote><p><img src="'+s+'" alt="image-20241106102518019" loading="lazy"></p><blockquote><p>例子6: 邿</p></blockquote><p><img src="'+t+'" alt="image-20241106103132107" loading="lazy"></p><h2 id="_3-固定与组合" tabindex="-1">3 固定与组合 <a class="header-anchor" href="#_3-固定与组合" aria-label="Permalink to &quot;3 固定与组合&quot;">​</a></h2><p>单字的一、二、三级简码字是固定不变的，例如下面的「就」「己」「机」三个字。这有利于形成条件反射，提高输入速度。</p><p><img src="'+r+'" alt="image-20241106103604251" loading="lazy"></p><p><img src="'+m+'" alt="image-20241106103656443" loading="lazy"></p><p><img src="'+c+'" alt="image-20241106103730370" loading="lazy"></p><p>组合变换是另一个避免回改和节约用键的好手段，组合的方式有以下几种。</p><ul><li>两个一简字的组合用分号上屏，例如「我的wd;」「就是js;」「不是bs;」。</li><li>一简字和二简字的组合用分号上屏，例如「是时ssi;」「我要wyc;」「你将njl；」。</li><li>二简字词和一简字的组合用空格上屏，例如「将是jls<code>_</code>」「问了wfl<code>_</code>」「外贸的wmd<code>_</code>」。</li><li>声声词和一简字的组合用Tab上屏，例如「解放了jflTab」「幸福的xfdTab」。</li><li>一简字和声声词的组合用单引号上屏，例如「的时候dsh‘」「是一切syq’」。</li><li>二简字词和声声词的组合用单引号上屏，例如「以形成yixc‘」「大建设dajs’」。</li><li>二简字词和二简字词的组合用分号上屏，例如「地地didi;」「说说soso;」。</li><li>码长n为大于等于5且最后一码为声母时，用分号上屏前n-1码对应的内容加后一码对应的一简字，例如「组合的zuhed;」「计算机是jisrjs;」「绝大部分可jtdabufk;」。</li></ul><h2 id="_4-选重与定位" tabindex="-1">4 选重与定位 <a class="header-anchor" href="#_4-选重与定位" aria-label="Permalink to &quot;4 选重与定位&quot;">​</a></h2><p>首选项用空格上屏，重码项用23789上屏，光标定位用1和0进行，重复按1逐字定位到未确定字的编码后，循环进行，按0则始终定位到所有编码的最后。在字数多于2时，可以用单引号直接定位到第二字的编码之后。Tab和Shift Tab分别用于向前和向后翻页。Esc用于清除所有编码，退格键用于删除光标前的一个编码。</p>',48)]))}const B=g(q,[["render",k]]);export{v as __pageData,B as default};
