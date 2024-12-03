import{_ as e,c as i,a2 as s,o as t}from"./chunks/framework.BDLWvHlL.js";const p="/images/image-20230723080234862.webp",o="/images/image-20230723091358419.webp",m="/images/image-20230723091911667.webp",g="/images/image-20230723092108202.webp",l="/images/image-20230723094050511.webp",n="/images/image-20230723094132918.webp",r="/images/image-20230723094316687.webp",c="/images/image-20230723093419644.webp",_="/images/image-20230723093437408.webp",d="/images/image-20230723094926718.webp",q=JSON.parse('{"title":"声笔飞讯的个性化定制","description":"","frontmatter":{"title":"声笔飞讯的个性化定制","tags":["声笔","飞讯","个性化","定制"],"typora-root-url":"..\\\\public","date":"2023-07-23T09:59:57.000Z"},"headers":[],"relativePath":"posts/声笔飞讯的个性化定制.md","filePath":"posts/声笔飞讯的个性化定制.md"}'),h={name:"posts/声笔飞讯的个性化定制.md"};function f(y,a,u,b,z,x){return t(),i("div",null,a[0]||(a[0]=[s('<p>声笔飞讯是声笔输入法中一个以单字为主导的专业型输入方案。在采用默认的慢顶设置时，包括常规词组需要五码，这常用词组来说，显得码长过长，输入效率不够高。另外，重复历史输入是用+号引导的，击打的时候不方便。在本文中，我们聊一聊在Windows中，如何对飞讯进行定制，来解决这两个问题。读者如果熟习小狼毫的话，那么应是小菜一碟的事了。不过，为了照顾小白用户，我们这里讲得比较啰嗦一点。</p><h2 id="设置快顶" tabindex="-1">设置快顶 <a class="header-anchor" href="#设置快顶" aria-label="Permalink to &quot;设置快顶&quot;">​</a></h2><p>为了缩短词组的码长，可以将飞讯设置为快顶模式，就能实现单字无冲突二码起顶和常规词组四码起顶的理想目标了。从Windows左小角的开始菜单里，打开小狼毫的用户文件夹。如果经常要用到这个用户文件夹，那么可以将其固定在任务栏上，以减少操作步骤，如下图中的小红圈所示。</p><p><img src="'+p+'" alt="image-20230723080234862" loading="lazy"></p><p>在列出的文件中找到sbfx.schema.yaml文件，用文本编辑器进行编辑。建议文本编辑器用Notepad++，不要用记事本，绝不要用WORD。</p><p><img src="'+o+'" alt="image-20230723091358419" loading="lazy"></p><p>把文件中的fast_pop一项的reset值改为1，表示要设为快顶模式。这样，词组的第四码就需要用23789来代替aeuio，常用的词组就只需四码即可输入，而其它词组则追加编码就行了。</p><p><img src="'+m+'" alt="image-20230723091911667" loading="lazy"></p><p>找到translator下的enable_filtering，将其值设置为true，表示要在sssbb...格式的常规词中过滤掉多字词，以便减少重码。这样，多字词就只能通过大写第四码来输入了。</p><p><img src="'+g+'" alt="image-20230723092108202" loading="lazy"></p><p>设置好记住要重新部署一下，以便设置生效，然后就可以使用飞讯带多字词过滤的快顶模式了。</p><p><img src="'+l+'" alt="image-20230723094050511" loading="lazy"></p><p><img src="'+n+'" alt="image-20230723094132918" loading="lazy"></p><p><img src="'+r+'" alt="image-20230723094316687" loading="lazy"></p><p>可以看出，要用好这种定制的输入方式，必须要能熟练地操作数字键和大写字母。在手机上，声笔的默认皮肤是有独立数字栏的，而且可以通过上滑来输入大写字母，所以也能毫无障碍地使用这种方式。</p><h2 id="设置重复" tabindex="-1">设置重复 <a class="header-anchor" href="#设置重复" aria-label="Permalink to &quot;设置重复&quot;">​</a></h2><p>在上述打开的sbfx.schema.yaml文件中，找到speller下的alphabet和initials，把其中的+号改为<code>,</code>号；再找到hist下的input，将其中的+号改为<code>,</code>号。</p><p><img src="'+c+'" alt="image-20230723093419644" loading="lazy"></p><p><img src="'+_+'" alt="image-20230723093437408" loading="lazy"></p><p>还有个地方要改，那就是同一个文件夹下的symbols.yaml文件。同样用文本编辑器打开该文件，找到half_shape下逗号项，将其值改为<code>[，,&#39;,&#39;]</code>，以便同时可以用回车来上屏半角的逗号。操作逗号比操作加号要方便得多。而且逗号基本上都是使用在句子中间，所以可以被后续字词顶上屏幕，不必用空格上屏，并不会增加用键，只是用户需要适应延迟上屏的感觉。</p><p>设置好记住要重新部署一下，以便设置生效，然后就可以用逗号来引导历史输入了。</p><p><img src="'+d+'" alt="image-20230723094926718" loading="lazy"></p>',22)]))}const P=e(h,[["render",f]]);export{q as __pageData,P as default};
