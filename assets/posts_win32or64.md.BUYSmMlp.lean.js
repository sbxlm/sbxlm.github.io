import{_ as e,c as t,a3 as r,o}from"./chunks/framework.hU1yMXPg.js";const f=JSON.parse('{"title":"Windows下如何判断应用程序是32位的还是64位的？","description":"","frontmatter":{"title":"Windows下如何判断应用程序是32位的还是64位的？","date":"2019-07-12T17:11:28.000Z","tags":["应用程序","32位","64位"],"categories":["Windows","应用程序"]},"headers":[],"relativePath":"posts/win32or64.md","filePath":"posts/win32or64.md"}'),s={name:"posts/win32or64.md"};function n(i,a,d,l,c,p){return o(),t("div",null,a[0]||(a[0]=[r('<h2 id="方法一-利用任务管理器" tabindex="-1">方法一：利用任务管理器 <a class="header-anchor" href="#方法一-利用任务管理器" aria-label="Permalink to &quot;方法一：利用任务管理器&quot;">​</a></h2><p>任务管理器 -&gt; 进程：进程后带有*32的是32位应用程序，否则为64位应用程序。此法仅适用于运行中的应用程序。</p><h2 id="方法二-利用简化颜色模式" tabindex="-1">方法二：利用简化颜色模式 <a class="header-anchor" href="#方法二-利用简化颜色模式" aria-label="Permalink to &quot;方法二：利用简化颜色模式&quot;">​</a></h2><p>鼠标右击应用程序 -&gt; 属性 -&gt; 兼容性：若设置框中的降低色彩和分辨率的选项可勾选则32位应用程序，否则为64位应用程序。</p><h2 id="方法三-查看exe文件头" tabindex="-1">方法三：查看EXE文件头 <a class="header-anchor" href="#方法三-查看exe文件头" aria-label="Permalink to &quot;方法三：查看EXE文件头&quot;">​</a></h2><p>二进制方式打开应用程序，在文件头中能找到PE..L的是32位的，能找到PE..d的是64位。</p><p>来源：改编自<a href="https://blog.csdn.net/dayday3923/article/details/78597453" target="_blank" rel="noreferrer">https://blog.csdn.net/dayday3923/article/details/78597453</a></p>',7)]))}const m=e(s,[["render",n]]);export{f as __pageData,m as default};
