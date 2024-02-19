import{_ as s,c as a,o as i,V as t}from"./chunks/framework.TV9jg5Us.js";const u=JSON.parse('{"title":"关于Git的一些技巧","description":"","frontmatter":{"title":"关于Git的一些技巧","date":"2019-07-05T16:21:04.000Z","tags":["Git","Github","技巧"],"categories":["Git","技巧"]},"headers":[],"relativePath":"posts/git-tips.md","filePath":"posts/git-tips.md"}'),e={name:"posts/git-tips.md"},n=t(`<h2 id="使用子模块" tabindex="-1">使用子模块 <a class="header-anchor" href="#使用子模块" aria-label="Permalink to &quot;使用子模块&quot;">​</a></h2><p>在Git官网上，有针对子模块的专门说明，详见<a href="https://git-scm.com/book/en/v2/Git-Tools-Submodules" target="_blank" rel="noreferrer">Git Submodules</a>。</p><h3 id="添加子模块" tabindex="-1">添加子模块 <a class="header-anchor" href="#添加子模块" aria-label="Permalink to &quot;添加子模块&quot;">​</a></h3><p>比如，添加一个子模块DbConnector：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git submodule add https://github.com/chaconinc/DbConnector</span></span></code></pre></div><h3 id="克隆带子模块的仓库" tabindex="-1">克隆带子模块的仓库 <a class="header-anchor" href="#克隆带子模块的仓库" aria-label="Permalink to &quot;克隆带子模块的仓库&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git clone https://github.com/chaconinc/MainProject</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git submodule init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git submodule update</span></span></code></pre></div><p>以上三个命令也可以用下面引命令代替：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git clone --recursive https://github.com/chaconinc/MainProject</span></span></code></pre></div><h3 id="删除子模块" tabindex="-1">删除子模块 <a class="header-anchor" href="#删除子模块" aria-label="Permalink to &quot;删除子模块&quot;">​</a></h3><p>采用以下三个步骤：详见<a href="https://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule" target="_blank" rel="noreferrer">Stack Overflow</a>。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git submodule deinit -f -- a/submodule</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm -rf .git/modules/a/submodule</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git rm -f a/submodule</span></span></code></pre></div><h2 id="使用多个账号" tabindex="-1">使用多个账号 <a class="header-anchor" href="#使用多个账号" aria-label="Permalink to &quot;使用多个账号&quot;">​</a></h2><p>github在8月13日更新以后，原先的ssh认证和https认证都失败了，只能添加token认证。具体参见<a href="https://www.cnblogs.com/yorkiiz/p/15154904.html" target="_blank" rel="noreferrer">git添加token认证</a>。但是，我是在2024年1月20日才开始遇到此问题，姑且信以为真吧。</p><p>--------以下方法已经失效--------</p><p>如何在同一台计算机上使用多个Github账号？要点如下，详细方法见<a href="https://stackoverflow.com/questions/3860112/multiple-github-accounts-on-the-same-computer" target="_blank" rel="noreferrer">Stack Overflow</a>。</p><p>步骤一：为first和second两个账号生成两个RSA密钥，名字分别为git_first和git_second。当然，这里的名字只是举例，你的名字肯定不一样。如果要用更多的账号，就需生成更多的密钥。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh-keygen -t rsa -C &quot;email-address1&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # name it git_first when prompted</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh-keygen -t rsa -C &quot;email-address2&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # name it git_second when prompted</span></span></code></pre></div><p>生成密钥后，将公钥里的内容，在对应的Github账号中设置好。</p><p>步骤二：创建config文件</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cd ~/.ssh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> touch config</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim config</span></span></code></pre></div><p>config文件的内容如下。其中，第一个确定了默认的Host，后面的必须另外命名。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Host github.com</span></span>
<span class="line"><span>  HostName github.com</span></span>
<span class="line"><span>  User git</span></span>
<span class="line"><span>  IdentityFile ~/.ssh/git_first</span></span>
<span class="line"><span>Host git_second</span></span>
<span class="line"><span>  HostName github.com</span></span>
<span class="line"><span>  User git</span></span>
<span class="line"><span>  IdentityFile ~/.ssh/git_second</span></span></code></pre></div><p>步骤三、Github仓库repo1和repo2设置要使用的密钥。注意，@之后跟随的Host名称就是上面的config中设置的。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git remote add origin git@github.com:first/repo1.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git remote add origin git@git_second:second/repo2.git</span></span></code></pre></div><h2 id="同步上游仓库的更新" tabindex="-1">同步上游仓库的更新 <a class="header-anchor" href="#同步上游仓库的更新" aria-label="Permalink to &quot;同步上游仓库的更新&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cd your/repo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git remote add upstream http://github.com/your-account/upstream-repo.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git fetch upstream</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git pull origin master</span></span></code></pre></div>`,27),p=[n];function h(l,o,r,c,d,k){return i(),a("div",null,p)}const F=s(e,[["render",h]]);export{u as __pageData,F as default};
