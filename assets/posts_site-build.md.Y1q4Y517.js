import{_ as s,c as a,o as e,V as i}from"./chunks/framework.TV9jg5Us.js";const b=JSON.parse('{"title":"使用Hexo建立Sbxlm网站","description":"","frontmatter":{"title":"使用Hexo建立Sbxlm网站","date":"2019-07-03T10:21:04.000Z","tags":["Hexo","Sbxlm","网站","技巧"]},"headers":[],"relativePath":"posts/site-build.md","filePath":"posts/site-build.md"}'),t={name:"posts/site-build.md"},l=i(`<h2 id="安装nodejs和git" tabindex="-1">安装Nodejs和Git <a class="header-anchor" href="#安装nodejs和git" aria-label="Permalink to &quot;安装Nodejs和Git&quot;">​</a></h2><p>根据不同的操作系统，按照通常的方式安装即可。</p><h2 id="安装hexo-cli" tabindex="-1">安装Hexo-cli <a class="header-anchor" href="#安装hexo-cli" aria-label="Permalink to &quot;安装Hexo-cli&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm install -g hexo-cli</span></span></code></pre></div><h2 id="初始化sbxlm-hexo" tabindex="-1">初始化Sbxlm-hexo <a class="header-anchor" href="#初始化sbxlm-hexo" aria-label="Permalink to &quot;初始化Sbxlm-hexo&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo init sbxlm-hexo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cd sbxlm-hexo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo server</span></span></code></pre></div><h2 id="添加next主题" tabindex="-1">添加NexT主题 <a class="header-anchor" href="#添加next主题" aria-label="Permalink to &quot;添加NexT主题&quot;">​</a></h2><p>采用子模块的方式安装，以便今后获取上游的更新。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git submodule add https://github.com/theme-next/hexo-theme-next themes/next</span></span></code></pre></div><h2 id="切换和修改next主题" tabindex="-1">切换和修改NexT主题 <a class="header-anchor" href="#切换和修改next主题" aria-label="Permalink to &quot;切换和修改NexT主题&quot;">​</a></h2><ul><li>修改sbxlm-hexo的_config.yml文件，将theme从默认的landscape改为next。</li><li>修改NexT的Scheme，从默认的Muse改为Gemini。</li></ul>`,11),n=[l];function h(o,p,d,c,r,k){return e(),a("div",null,n)}const g=s(t,[["render",h]]);export{b as __pageData,g as default};
