import{_ as e,c as a,o as r,a3 as t,fI as s,fJ as i,fK as l,fL as o,fM as p,fN as m,fO as h,fP as n,fQ as c,fR as _,fS as b,fT as d,fU as f,fV as u}from"./chunks/framework.DcxGHbOq.js";const v=JSON.parse('{"title":"安装配置","description":"","frontmatter":{"title":"安装配置","date":"2021-07-01T15:37:36.000Z","comments":false,"typora-root-url":"..\\\\..\\\\public"},"headers":[],"relativePath":"vzpz/index.md","filePath":"docs/vzpz/index.md"}'),g={name:"vzpz/index.md"},q=t('<p>声笔系列码，又称声笔输入法，是基于著名的开源输入法平台Rime进行二次开发的，其安装配置比较复杂。这一方面有Rime的原因，因为它没有提供丰富的图形界面，对普通用户不太友好。</p><p>在配置方面，声笔系列码主要是基于YAML文件来进行的，对于只习惯于图形界面的用户来可能是一个挑战。不过，一旦学会用文本来做配置，就会感觉到这种方式的强大和灵活。闯过这一关，就会如鱼得水，就能随心所欲！本文就是帮助用户克服困难，过关斩将的。</p><p>声笔系列码现在有两种发行版，一种是通过定制librime而形成的魔改版，另一种是在原版rime上通过lua脚本实现的lua版。魔改版最后的版本是声笔输入法20240131版，其安装和配置方法见声笔输入法9x的安装与配置。从声笔10开始就是lua版的声笔输入法了，它直接采用原版rime，通过lua脚本来实现声笔顶功，具有高度的可定制性，而且兼容rime的原有方案，所以建议用户从今以后都采用使用lua版的声笔输入法。本文讲述的就是lua版声笔的安装与配置方法。</p><h2 id="_1-软件获取" tabindex="-1">1 软件获取 <a class="header-anchor" href="#_1-软件获取" aria-label="Permalink to &quot;1 软件获取&quot;">​</a></h2><p>为了便于用户下载使用，声笔系列码已经发布在了网上，可以通过<a href="https://github.com/sbsrf/sbsrf" target="_blank" rel="noreferrer">github</a>下载。软件也可以在声笔QQ交流群（780510469、783734487、445906697和728093309）的共享文件夹里下载，下载位置如下图所示。使用iOS的用户，可以直接在苹果应用商店下载仓输入法。网上其它地方查找到的版本太陈旧，下载站点转载太多，也不一定安全，不建议使用。</p><h2 id="_2-安装方法" tabindex="-1">2 安装方法 <a class="header-anchor" href="#_2-安装方法" aria-label="Permalink to &quot;2 安装方法&quot;">​</a></h2><p>声笔输入法的安装方法因操作系统而异。</p><h3 id="_2-1-在windows上" tabindex="-1">2.1 在Windows上 <a class="header-anchor" href="#_2-1-在windows上" aria-label="Permalink to &quot;2.1 在Windows上&quot;">​</a></h3><p>建议采用小狼毫0.15.0版，下载地址 <a href="https://github.com/rime/weasel/releases/tag/0.15.0" target="_blank" rel="noreferrer">https://github.com/rime/weasel/releases/tag/0.15.0</a> 。安装小狼毫后，再到 <a href="https://github.com/sbsrf/sbsrf/releases" target="_blank" rel="noreferrer">https://github.com/sbsrf/sbsrf/releases</a> 下载声笔输入法压缩包。将压缩包解压后，将文件squirrel、weasel和trime以外的所有文件复制到小狼毫用户rime中，同时将weasel目录里的weasel.custom.yaml也复制进去，重新部署一下就可以使用了。</p><h3 id="_2-2-在android上" tabindex="-1">2.2 在Android上 <a class="header-anchor" href="#_2-2-在android上" aria-label="Permalink to &quot;2.2 在Android上&quot;">​</a></h3><p>建议采用同文v3.2.16，下载地址 <a href="https://github.com/osfans/trime/releases/tag/v3.2.16" target="_blank" rel="noreferrer">https://github.com/osfans/trime/releases/tag/v3.2.16</a> 。安装同文后，再到 <a href="https://github.com/sbsrf/sbsrf/releases" target="_blank" rel="noreferrer">https://github.com/sbsrf/sbsrf/releases</a> 下载声笔输入法压缩包。将压缩包解压后，将文件squirrel、weasel和trime以外的所有文件复制到同文用户设定中，同时将trime目录里的所有目录和文件也复制进去，重新部署一下，将主题调整为适配声笔的主题，就可以使用了。如果使用异常，请重启一下手机，一般就没有问题了。</p><h3 id="_2-3-在macos上" tabindex="-1">2.3 在MacOS上 <a class="header-anchor" href="#_2-3-在macos上" aria-label="Permalink to &quot;2.3 在MacOS上&quot;">​</a></h3><p>建议采用鼠须管0.16.2版，下载地址 <a href="https://github.com/rime/squirrel/releases/tag/0.16.2" target="_blank" rel="noreferrer">https://github.com/rime/squirrel/releases/tag/0.16.2</a> 。安装小狼毫后，再到 <a href="https://github.com/sbsrf/sbsrf/releases" target="_blank" rel="noreferrer">https://github.com/sbsrf/sbsrf/releases</a> 下载声笔输入法压缩包。将压缩包解压后，将文件squirrel、weasel和trime以外的所有文件复制到鼠须管用户设定中，同时将squirrel目录里的squirrel.custom.yaml也复制进去，重新部署一下就可以使用了。</p><h3 id="_2-4-在ios上" tabindex="-1">2.4 在iOS上 <a class="header-anchor" href="#_2-4-在ios上" aria-label="Permalink to &quot;2.4 在iOS上&quot;">​</a></h3><p>在 App Store 搜索「仓输入法」并安装最新版即可。安装后，在设置中启用「仓输入法」键盘，此时注意不要错误地启用了「声笔 - 仓输入法」这个键盘（它是适用于声笔 9 的魔改声笔 librime，与声笔 10 不兼容）。安装完毕后，再到 <a href="https://github.com/sbsrf/sbsrf/releases" target="_blank" rel="noreferrer">https://github.com/sbsrf/sbsrf/releases</a> 下载声笔输入法压缩包。打开「Wi-Fi 上传方案」功能，并将压缩包解压后除文件squirrel、weasel和trime以外的所有文件上传，然后重新部署一下就可以使用了。</p><p>仓输入法内置了两款适配声笔的皮肤（分别叫「声笔 46」和「声笔 trime」），需要在「键盘设置」——「键盘布局」中启用。</p><h3 id="_2-5-在linux上" tabindex="-1">2.5 在Linux上 <a class="header-anchor" href="#_2-5-在linux上" aria-label="Permalink to &quot;2.5 在Linux上&quot;">​</a></h3><p>前端可以采用 <a href="https://github.com/rime/ibus-rime" target="_blank" rel="noreferrer">ibus-rime</a> 或者 <a href="https://github.com/fcitx/fcitx5-rime" target="_blank" rel="noreferrer">fcitx5-rime</a>。注意运行声笔系列码的 lua 脚本至少需要 librime 1.8.5，如果你使用的 Linux 发行版包管理器中的 librime 大于等于 1.8.5 则可以直接安装，否则需要自己编译安装 librime（编译时建议使用最新的发行版 <a href="https://github.com/rime/librime/tree/1.10.0" target="_blank" rel="noreferrer">librime 1.10.0</a>。</p><p>安装完毕后，再到 <a href="https://github.com/sbsrf/sbsrf/releases" target="_blank" rel="noreferrer">https://github.com/sbsrf/sbsrf/releases</a> 下载声笔输入法压缩包。将压缩包解压后，将文件squirrel、weasel和trime以外的所有文件复制到用户目录中，重新部署一下就可以使用了。</p><h2 id="_3-方案选择" tabindex="-1">3 方案选择 <a class="header-anchor" href="#_3-方案选择" aria-label="Permalink to &quot;3 方案选择&quot;">​</a></h2><p>在安装好声笔软件后，默认使用的输入方案为声笔简码。如果要使用声笔输入法的其它方案，在电脑上可用F4或者Ctrl+~进行切换。</p><p><img src="'+s+'" alt="image-20230620083317643"></p><p>在手机上则长按左下角标有的「选单」的按键，然后选择「方案」，再从弹出窗口里选择你需要的方案即可。</p><p><img src="'+i+'" alt="image-20230620084548537"></p><h2 id="_4-错误处理" tabindex="-1">4 错误处理 <a class="header-anchor" href="#_4-错误处理" aria-label="Permalink to &quot;4 错误处理&quot;">​</a></h2><p>安装后无法使用一般都是由于安装不全造成的。最简单的办法就是打用户文件夹，删除其中的所有文件，复制声笔输入法的文件进去，再重新部署一下就行了。若要保留用户文件，请先做好备份。</p><p>在Windows电脑上遇到无法删除文件时，可以停用小狼毫算法服务以后再删除，但是要记住更名后重新启动小狼毫算法服务，否则是不能打中文的。如果要保留原来的文件，则请先做一个备份。</p><p><img src="'+l+'" alt="image-20230620085710163"></p><h2 id="_5-软件卸载" tabindex="-1">5 软件卸载 <a class="header-anchor" href="#_5-软件卸载" aria-label="Permalink to &quot;5 软件卸载&quot;">​</a></h2><p>声笔系列码的卸载很简单。在Windows上，通过控制面板里的<code>卸载程序</code>功能，找到小狼毫程序将其卸载就行了。在Android手机上，通过系统自身的应用程序管理功能就能方便地卸载。MAC版和Linux下声笔的卸载方法与原版的相同，请参见相关资料。</p><p>Windows电脑上，如果遇到卸载不了或者卸载不干净的输入法，可以下载使用群文件软件工具里的「输入法删除工具」来解决。此工具无需安装，直接运行就可以了。</p><h2 id="_6-数据迁移" tabindex="-1">6 数据迁移 <a class="header-anchor" href="#_6-数据迁移" aria-label="Permalink to &quot;6 数据迁移&quot;">​</a></h2><p>声笔输入法10采用的用户词典格式与 9.x 有所不同，为了能够在声笔10的方案中继续使用您所积累的调频和造词记录，您可以使用在线的声笔<a href="https://sbxlm.gitee.io/sbgj/" target="_blank" rel="noreferrer">用户词典迁移工具</a>。</p><h2 id="_7-配置与定制" tabindex="-1">7 配置与定制 <a class="header-anchor" href="#_7-配置与定制" aria-label="Permalink to &quot;7 配置与定制&quot;">​</a></h2><p>Rime的图形界面能做的事情是有限的，在Rime的世界里是文本为王，通过编辑适当的yaml文件可以配置和定制输入法的方方面面，比传统输入法灵活和强大得多。要编辑yaml文件就需要有一个好的编辑器。在Windows上建议使用Notepad++或者Vscode，不要用记事本，更不要用Word。在安卓上使用时，建议使用MT管理器。</p><h3 id="_7-1-修改小狼毫的主题" tabindex="-1">7.1 修改小狼毫的主题 <a class="header-anchor" href="#_7-1-修改小狼毫的主题" aria-label="Permalink to &quot;7.1 修改小狼毫的主题&quot;">​</a></h3><p>从Windows左下角的开始菜单找到小狼毫输入法，进入输入法设定。</p><p><img src="'+o+'" alt="image-20230620085905506"></p><p>在弹出的方案选单设定对话框中，点击「中」按钮。</p><p><img src="'+p+'" alt="image-20230620090028420"></p><p>进入下面的介面风格设定对话框，选择喜欢的配色进行预览，找到满意的配色时，点击「确定」按钮」即可。</p><p><img src="'+m+'" alt="image-20230418095804338"></p><p>如果想手动修改主题，可用文本编辑器编辑用户文件夹中的weasel.custom.yaml文件，将配色的名称改为你所需要的，默认是aqua。另一个常常需要更改的选项是决定候选项采用横向还是纵向显示，默认是横向显示；将horizontal的值改为false就可以变成纵向显示。是否采用嵌入模式是由<code>inline_preedit</code>来指定的，声笔建议采用非嵌入的方式，否则在有的应用程序中可能出现莫名其妙的异常现象，因为宿主程序对编码的处理方式可能是千奇百怪的。</p><p><img src="'+h+'" alt="image-20230315143434492"></p><p>下面列出配色的预览图，以便用户直观地查看和选择，在每个图下文件名的最后一个下划线后的部分就是配色的名称，可用于确定weasel.custom.yaml文件里的<code>style/color_schema</code>。</p><p><img src="'+n+'" alt="修改小狼毫的配色"></p><h3 id="_7-2-修改同文的主题和配色" tabindex="-1">7.2 修改同文的主题和配色 <a class="header-anchor" href="#_7-2-修改同文的主题和配色" aria-label="Permalink to &quot;7.2 修改同文的主题和配色&quot;">​</a></h3><p>在使用声笔同文版时，长按左下角的「设置选单」键，进入后找到主题一项，点击后切换主题。长按右下角的「上屏配色」键则可以选择主题所提供的配色。</p><p><img src="'+c+'" alt="image-20230717131141856"></p><p><img src="'+_+'" alt="image-20231216085230998"></p><p>建议用户使用默认主题，因为它是针对声笔系列码优化过的，为各种声笔方案提供了助记，还有众多的配色。特别感谢空白、白焕等群友在默认主题上的无私贡献，默认主题的完善是在他们作品基础上进行的。</p><p>以下是几个默认主题的配色实例。如果用户还需要定制的话，可以进一步修改rime文件夹下的trime.yaml文件。无滑动大写是在默认主题基础上取消了通过上滑或者下滑来输入大写字母的主题。</p><p><img src="'+b+'" alt="image-20221108152301080"></p><p>声笔33键是大键主题，供那些因拇指大而容易误触的人使用，如下所示。</p><p><img src="'+d+'" alt="img"></p><p>除了以上主题之外，还有一些声笔用户和皮肤大佬，如莫颜、强的、单单和Poto等也专门为声笔定制了皮肤，感兴趣的朋友可到声笔QQ群里下载使用。</p><p><img src="'+f+'" alt="img"></p><h3 id="_7-3-修改鼠须管的配色" tabindex="-1">7.3 修改鼠须管的配色 <a class="header-anchor" href="#_7-3-修改鼠须管的配色" aria-label="Permalink to &quot;7.3 修改鼠须管的配色&quot;">​</a></h3><p>打开用户设定，根据您的需要调整squirrel.custom.yaml文件即可。默认是横向显示；将horizontal的值改为false就可以变成纵向显示。要改变配色，则将color_scheme设为你所需要的。以下是一些配色的效果图和对应的配色名称。</p><p><img src="'+u+'" alt="image-20230223083757560"></p>',60),x=[q];function k(w,P,S,y,A,T){return r(),a("div",null,x)}const z=e(g,[["render",k]]);export{v as __pageData,z as default};
