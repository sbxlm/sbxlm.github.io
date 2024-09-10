import{_ as i,c as l,o as s,a5 as e}from"./chunks/framework.BuUffW0N.js";const r=JSON.parse('{"title":"发展历程","description":"","frontmatter":{"title":"发展历程","date":"2021-07-29T09:04:43.000Z"},"headers":[],"relativePath":"fzlc/index.md","filePath":"docs/fzlc/index.md"}'),a={name:"fzlc/index.md"},b=e('<h2 id="_1-声笔系列码rime版的发展历程" tabindex="-1">1 声笔系列码RIME版的发展历程 <a class="header-anchor" href="#_1-声笔系列码rime版的发展历程" aria-label="Permalink to &quot;1 声笔系列码RIME版的发展历程&quot;">​</a></h2><ul><li>2024XXXX: 1.修正飞讯快顶模式下的分号变换错误；2.声笔双拼达到最大补码长度时禁止继续补码；3.修正sbpy.schema中的瑕疵；4.飞讯修正bug：vwMe之类不出词；5.取消声笔拼音和声笔简拼的混顶和纯顶，并将强顶改为顶功；6.拼音和简拼强顶模式修正bug：在有部分确认字词时，三字及以上词补码不合预期。</li><li>20240901: 1.调整标点字词的提示顺序；2.修正声笔拼音的默认输入状态；3.取消没什么作用且影响性能的octagram语言模型；4.修正声笔拼音和声笔简拼达到最大补码长度时若退格则光标位置不回到尾部的错误，并禁止继续补码；5.修正字词型方案中「莋」的读音（ji→zuo）和「禵」的读音（zhi→ti）；6.优化声笔拼音、声笔简拼和声笔简码的数标字；7.通过扩大编码空间来增强声笔拼音和声笔简拼的补码能力；8.在composing时用Shift+BackSpace来模拟Escape；9.限制声笔拼音和声笔简拼的单字码长；10.声笔简拼的笔画数限制由4改为5。</li><li>20240809: 1.修正词库中的「遨游四海求其皇」为「遨游四海求其凰」；2.优化声笔飞码的组合变换，实现szszbb;变换为<code>sz_szbb_</code>；3.优化声笔简码的组合变换，sssn变换为<code>s_ssn</code>而不是<code>ss_sn</code>；4.声笔拼音和声笔简拼增加标点固定字；5.非声笔简拼整句方案支持单字6码组词，而声笔简拼支持单字5码组词。</li><li>20240712: 1.消除lua脚本中的BUG；2.优化简系的数选字；3.声笔飞码、声笔自然和声笔小鹤的单字模式支持用sSss分流多字词；4.声笔拼音、声笔鹤整和声笔自整单字全码由5码改为6码；5.纠正声笔拼音和声笔简拼在强顶模式下四码后大写声母不能作为编码的错误；6.声笔拼音完全采用声笔简拼的固定字词；7.声笔自然和声笔小鹤：纠正快调模式无效的错误；优化快调模式单字初始频率；消除单字无法输入扩展编码的错误；8.飞系单字「囧」调整到首页。</li><li>20240630: 1.优化飞码和飞讯组合变换；2.增强datetime.lua；3.字词方案补充尚缺的通规字；4.字词方案提示行直接显示大写编码；5.飞讯支持用ssSbbbb输入三字词；6.取消声笔简飞输入方案。</li><li>20240615: 1.飞单更正「赣」的部首，由「立」改为「音」，纠正「彬」的编码错误，增加「揉rq」「哎vp」「哇wz」三个容错码；2.优化简词特别是数选词的编码；3.支持飞系反查词组时提示编码；4.修正声笔简码在`1非隐藏级别时不提示飞单三简字的错误；5.简系和飞系增加标点字词；6.修正auto_length.lua的调频错误；7.修正多音词未收录的错误；8.飞单支持手动造词；9.纠正「嗤」字的笔画错误；10.解决冰雪与声笔的lua冲突问题；11.增加单字模式快捷键；12.解决声笔简拼单引号定位失效问题；13.优化飞系的反查提示编码；14.优化数选顶屏。</li><li>20240528: 1.修正声笔简码条件顶屏错误；2.修正声笔小鹤词典错误；3.声笔拼音和声笔简拼在组合变换时不造词；4.优化简系固定字，取消标选单字；5.数选二字词，不收录一简字和声笔字的组合；6.纠正飞系「臻」的部首，由「一」改为「禾」；7.尽可能以雾凇拼音的读音为准；8.飞系若提示为隐藏解级别，输入三个声母时不提示声笔字；9.修正声笔拼音和声笔简拼有些固定词提示不全的错误；10.优化个别声声词；11.优化声笔简码和声笔简拼的个别数选字；12.修改声笔简飞sp词的编码规则；13.优化sb&#39;自定义字词的上屏方式。</li><li>20240516: 1.修正声笔简码sbjm.extended.dict中多字词编码错误；2.实现声笔简码三顶时多字词编码不提示最后的声母；3.字词型方案：增强隐藏状态下，在正码时不提示数选字词；4.优化简码和简拼的数选字；5.声笔简码取消快单模式，但增加s1s2p2b2b1b1方式编码的二字词；6.声笔同文比翼主题增加两个配色；7.修正「仦」和「哋」的读音错误；8.增加声笔简飞输入方案；9.修正同文和仓输入法声笔主题中的错误；10.修正多次删除用户词后，无法再造恢复的错误；11.支持声笔飞系缩减码数字变换；12.修正从字词型方案切换到整句方案后，在输入声母后翻页时跳回首页的错误；13.解决简繁转换后不提示选择键的问题。</li><li>20240508: 1.修正翻页时需要两次Tab的错误；2.修正飞讯快顶增强时enable_filtering不起作用的错误；3.优化简码、飞码和飞讯的数字延迟顶屏；4.增加简码打空造词的功能；5.为同文比翼主题增加三个配色；6.支持字词型方案在反查时通过数字来选择重码；7.计算器改由等号号来引导，并增加同文计算器键盘；8.优化标点符号的输入；9.增加群友坐忘道制作的仓输入法主题；10.从声笔自整和声笔鹤整的状态栏移除隐藏/显示选项，并优化键绑定；11.声笔简码正码时提示一二简数选字词，也提示飞单的sbb(b)字；12.为声笔小狼毫增加声笔图标；13.优化声笔简码默认自定义字词；14.支持声笔双拼和声笔飞码在码长5以上时，单引号进入打空造词；15.优化o引导的lua脚本候选项及其选择方式；16.修正声笔鹤整固定字的错误。</li><li>20240430: 1.修正同文声笔主题并增加比翼45、46键主题；2.改进fix.lua和postpone.lua，后置模式优化，以减少回改；3.修正飞系和双拼不能在非首选提示声声词和声声笔词的错误；4.飞系在设置隐藏提示时不提示缩减码；5.飞单数选字词优化；6.简整作为声笔输入法的默认方案；7.声笔简整和声笔拼音增加用Tab选择简词；8.在weasel.custom.yaml中加入更多的字体，以增加容错能力；9.修正声笔小鹤和声笔自然快调模式时的BUG；10.修正声笔简码反查时的BUG；11.飞系中「彬」的编码由bmei调整为bpei，缩减码xia由「晰」换为「虾」；12.修正ctrl+l快速定位后进行输入时不能造词的错误；13.优化自定义字词的提示功能；14.恢复支持并强化单次选重选项（single_selection）；15.字词型方案词库并入雾凇词汇，达到100多万词组；16.消除首码为标点时无法用tab翻页的错误；16.声笔简整更名为声笔简拼；17.优化编码变换操作；18.声笔简码兼容飞单的缩减码；19.增加正确与错误表情符。</li><li>20240412: 1.飞系在设置hide时，不进行声笔字和声声词的提示，无论是否在增强模式下都生效；2.将所有整句方案教程单列出来，以便单独查看；3.修订sbzdy.txt中的自定义词；4.取消声笔三拼；5.优化同文33键主题，修正思无邪主题的BUG；6.优化简码增强模式；7.纠正「仦」的读音（niao =&gt; chao）。</li><li>20240331: 1.修正飞讯快顶提示错误；2.改正个别Emoji编码错误；3.优化声笔拼音和声笔简整固定字词提示方式；4.支持整句方案输入三个声母时用单引号上屏三个一简字；5.将声笔简整纳入声笔输入法基本包中；6.支持声笔双拼回头补码；7.合并声笔输入法基础包和扩展包；8.优化发行版文件结构。</li><li>20240327: 1.修正sxsx组合确认后导致带五角星词组的BUG；2.修正声笔小鹤和声笔自然的快调模式不出空位词的BUG；3.声笔简码增加s;和s&#39;简词；4.修正同文声笔主题的配色问题；5.增加分类emoji，以<code>\\e</code>开始用表情名称的声笔拼音首字母编码；6.简码、飞系和双拼在常规码位上，提示声声词和声声笔词，在增强模式下还提示数选字词；7.声笔拼音和声笔简码提示无理固定字词。</li><li>20240320: 1.修正同文声笔主题的BUG；2.修正整句反查错误；3.改用分号来引导重复输入最近的上屏内容。</li><li>20240316: 声笔输入法10.0隆重发布，具有以下重大更新：1.基于lua脚本重构声笔系列，在原版rime中运行，码表和脚本完全开源，具有高度的可自定义能力，可完美地与rime原生方案共存；2.增加声笔输入法扩展包，恢复和增强了声笔简整、声笔自整和声笔鹤整三个整句方案；3.全面更新声笔官网，增加主页、体验、练习和工具栏目；4.声笔自然和声笔小鹤增加快调模式；5.调整和优化声笔简码、声笔拼音和声笔飞系的数选字词；6.声笔拼音通过扩展包可支持200多万词组，并与声笔的所有拼音类整句方案共享用户词库；7.优化数选字词提示选项，进行分级提示；8.声笔拼音增加长码后置选项，也可用于其它整句方案；9.优化同文声笔主题，并解决调用数字键盘时崩溃的问题；10.优化声笔反查，并将i引导的拼音和两分反查并入到a引导的反查11.优化声笔简码增强模式，使其兼容飞系的单字；12.声笔拼音增加强顶模式。</li><li>20240131: 1.莫言修改了声笔安卓上助记图J上的「絞」字；2.优化声笔简码的retention正则；3.通过lua脚本优化声笔飞系和声笔简码的自定义字词和数选字词提示。</li><li>20231216: 1.简码取消慢调模式，在声笔字后设第二套声笔字，此后再安排sbn格式的字；2.优化声笔同文版主题；3.去掉首选项前的下划线；4.声笔同文版去掉状态栏背景的翻页箭头；5.增加数选过滤lua脚本；6.优化飞系数选字词；7.取消声笔小鹤和声笔自然的模糊查找功能。</li><li>20231129: 1.对调飞系的「怔」「煮」候选顺序；2.接受由莫颜进行的安卓端主题优化，增加trime和思无邪主题的custom补丁文件；3.让飞系中sbzdy翻译器优先于默认翻译器；4.声笔拼音增加wv占位编码，以纠正候选错位；5.手机主题支持下滑Tab完成Page_Down的功能；6.修改schema，消除声笔拼音中e和o引导的lua脚本的bug；7.声笔拼音和声笔简码增加预置自定义字词；8.单独为用于仓的iOS版声笔发布方案的压缩包。</li><li>20231111: 1.飞单、飞码和飞讯共用fmzdy.dict，修改示例；2.飞讯取消三级数选词，在纯增强模式时不能输入快顶词组；3.飞系增强模式下，第四码为数字时改为数选字延顶二简字上屏；4.飞系取消sbn系统二字词，供专用自定义词典使用；5.飞系只保留23789数选字词，优化提示；6.飞单输入词组时默认支持调频，但不支持自动造词；7.声笔双拼和声笔小鹤增加声韵后模糊提示功能；8.修正声笔拼音输入<code>&lt;&gt;</code>不能顶屏的错误；9.修改default.yaml，让其不记录ascii_punct的状态；10.取消飞码单字延顶模式；11.声笔方案支持在有编码时用Control+l快速移动到第二个编码字符后，手机上通过长按L键实现；12.优化简码增强模式；13.声笔拼音候选项从8减少到5；14.优化声笔安卓版默认主题，并增加由莫颜定制的思无邪主题。</li><li>20231022: 1.优化is_first逻辑，以便可通过键绑定实现中文状态时小写字母后分号变为「/小写字母」，比如可以方便地支持notion命令；2.修正bug：简码三顶时，aei引导的反查不能输入第四码；3.仅在首码加Shift+Tab触发的临时缓冲模式下才造词；4.所有方案中「惢」和囼字笔画修正；5.飞系编码修改：毠jlia→jmau，尨mluo→mluu，「瞭」改在「栊」前面，翄↔陳；6.纠正「龏龔礱龒聾壟襲龑讋」的笔画问题，其「龍」部的笔画由41431251121515111改为4143125111515111；7.简码增强模式增加一简字和二简词。</li><li>20230818: 1.增加sbfm_delayed.lua脚本，以优化飞码主单延顶时的提示信息；2.优化飞系的声笔字提示与顺序；3.声笔简码和声笔拼音支持用四个字的声母加单引号来输入一个二简词加两个二简字的组合；4.优化symbols，以便快速输入箭头符号；5.纠正声笔拼音数选词中多一个「给予」的错误；6.优化日期和时间的lua脚本；7.增加e引导的计算器；8.修改weasel.yaml，以突出注释文字的显示；9.声笔Win版sbxlm目录中增加backgrounds子目录，并在其中增加.nomedia文件。</li><li>20230803: 1.增加快捷键：在default.yaml和default.custom.yaml中用Shift+BackSpace来模拟Escape，以便于快速回改延顶上屏错误；2.优化fmsbb，修正「霃ceo」之类的不合理编码；3.为飞码增加主单的延顶模式；4.为飞系和双拼增加Shift+space进行组合变换；5.优化安卓皮肤，以方便在下滑空格时变换为Shift+space；6.飞系单字编码优化：甥spee→snei，甡spee→sneu；7.优化标点输入，使分号和冒号直接上屏，破折号改由连字符而不是下划线输入。</li><li>20230722: 1.修正安卓皮肤「数字在下面」不显示助记的Bug；2.解决安卓皮肤反查时显示不出个别部首（如筑字头）的问题；3.修改有独立数字行的皮肤，将23789的颜色改为与V键一致；4.安卓增加46键皮肤，以方便单引号组合变换，并将它作为默认皮肤；5.支持用纯笔画输入筑字头；6.飞系增加sbn格式的数选二字词；7.飞系sn字仅在正码时提示；8.飞系在正码时提示ss二简词；9.交换飞系中几组字的优先度：「使什」，「命们」，「瑄玊」，「删煞」，「岸饿」，「朋陪」，「宽库」，「硬研」；10.增加声笔简码增强模式，通过换码兼容飞系单字；11.声笔拼音增加混顶模式；12.优化symbols中等号上的符号；13.优化各输入方案组合变换方法；14.「嘅」只有kai音，增加ge音；15.优化简码二三简词；16.优化飞系数选词；17.优化声笔拼音固定字词；18.仅在飞单时禁止造词；19.支持飞讯进行<code>szS→sz_s</code>_和<code>szsbS→sz_sb_s_</code>大写变换。</li><li>20230622: 1.「蕃」只有fan音，增加bo音；2.「吐蕃」的读音只有tufan，而正确的读法为tubo，改为此音；3.飞系的「镚」调整到bjia的首选；4.飞系的sbb字仅在正码时进行提示；5.飞讯设置过滤多字词时也作用于sssn；4.取消声笔简码和声笔双拼的数选字词；5.声笔双拼更名回声笔自然，恢复声笔小鹤；6.恢复声笔简码的慢调选项；7.三顶时简码多字词支持sssbbb格式；8.声笔自然和声笔小鹤的单字支持扩展编码。</li><li>20230608: 1.支持小狼毫0.15.0版；2.优化声笔安卓版皮肤，将Tab与Esc的位置对换，以方便输入简词和进行组合变换；3.纠正飞讯增强模式下第四码为数字时分号组合变化失效的问题；4.临时缓冲模式上屏后自动退出缓冲模式；5.在<code>-</code>上增加破折号和跟空格的<code>-</code>号；6.修正飞单安卓主题不显示助记的问题；7.纠正飞讯和飞码中「给予」的编码错误；8.飞讯和飞码的常规码增加缩减码提示，空位词从fxzdy.dict和fmzdy.dict移到fmsbb中；9.声笔双拼的空位改为安排简词。</li><li>20230528: 1.增加单独的声笔飞单方案；2.飞讯在sss时加分号变换为上屏一简字加二简词；3.修正读音：「亇」的读音ding不对，改为ge和ma；「睢」的读音只有sui，增加hui；「尾巴」只有yiba，加一个weiba；「给予」只有jiyu，加一个geiyu。</li><li>20230520: 1.取消e引导的缓冲输入；2.增加缓冲输入设置性项；3.在码长为1时用Shift+Tab临时切换缓冲状态。</li><li>20230514: 去掉句号组合变换，因为容易导致误操作。</li><li>20230512: 将声笔简码作为默认方案。</li><li>20230422: 1.增强声笔程序与原生Rime方案的兼容性；2.更名声笔拼音选项single为popping；3.优化飞讯配方，防止五码唯一时自动上屏；4.优化组合变换和数字顶屏方法；5.安卓默认主题加宽边缘空白；6.优化飞系单字编码，把「呆vke」优先级降低，让位给「呃」，同时「呕」也无需选重了；7.默认显示隐藏数选和声笔字的开关；8.删除default.yaml中save_options中的full_shape项；9.修正声笔小狼毫不弹出选择主题对话框的bug；10.纠正「邒」的读音为ting，增加「吖」的读音ya。</li><li>20230405: 1.飞讯设置多字词过虑时，不作用于szsnb；2.修改默认的飞讯和飞码自定义词典示例; 3.支持用e引导临时缓冲模式；4.支持缓冲上屏造长词；5.优化组合变换方法，解决缓冲上屏时出现的BUG；6.飞码、飞讯和双拼提示一二级数选字词反向查找；7.取消单独的飞讯快顶模式；8.用Lua脚本支持在安卓无悬浮窗时将重码标签转换为注释进行提示；9.纠正声笔拼音数选词错误。</li><li>20230322: 1.优化飞讯，增加快顶模式，并用增强词组模式来兼容快顶；2.支持sssz时进行数选顶屏，适用于拼音以外的所有方案；3.声笔简码屏蔽三顶和慢调选项，支持用Tab上三个一简字；4.修订在线教程，将飞码和飞讯的单字模式作为虚拟输入方案独立成篇进行讲解。</li><li>20230318: 1.修正双拼「帧zhen」排在繁体之后的Bug，将「吧」改为二简字；2.手机版的Backgroud目录增加.nomedia文件；3.剪贴板中「更多」项里的按钮排列优化；4.消除飞讯混顶时szsb出词不对和不唯一的bug；5.将fmn、fmnts和fxn词典作为依赖词典。</li><li>20230316: 1.为fxn词典中sbsz码位增加用5和6选择的二字词；2.开放飞码、飞讯和双拼的数选词典供修改；3.修正飞讯三级动态数选时无法设置过滤多字词的BUG；4.优化声笔简码多字词过滤方法；5.修正aeuio引导时无法用Tab翻页的BUG；6.修正飞码数选字顶屏时的BUG；7.修正默认主题使用剪贴板后悬浮窗消失的问题。</li><li>20230312: 1.飞讯支持两码顶字、四码顶词，从飞码独立出来，不再作为衍生方案，并取消飞竞；2.正式发布同步同文3.2.8后的声笔输入法安卓版，并分离其主程序和输入方案，优化默认主题；3.纠正Mac版重码显示顺序错误；4.优化声笔拼音固定字词，取消固定三级字词；5.优化声笔简码数选字词，取消三级数选字词，输入状态默认为快调、四顶；6.字词型方案默认删词阈值从10000调整为5000；7.删除配方中不用显示的状态，以精简配方和避免在MAC版中出现空白的状态提示。</li><li>20230225: 1.声笔拼音改为「自由 固定 单顶」三种模式；2.增加mac版安装配置文件和说明；3.安卓版增加“数字在下面”的主题；4.优化飞码声笔字的提示方式；5.将飞竞之外的可自定义词典集成到主程序中，而飞竞词典单独打包发布。</li><li>20230212: 1.声笔拼音数选项由5个增加到8个，调整固定字词，加入注释提示选项，重写在线教程；2.声笔简码快调和三顶状态下不在注释中提示二三简字词；3.声笔飞码支持用分号变换sbs为sb_s；4.安卓皮肤最大候选项从6改为11；5.飞码和双拼增加二级数选词；6.双拼调整字频（阿→啊，恩→嗯，马→吗）；7.纠正「狛」的读音（po→bo）。</li><li>20230129: 1.优化声笔拼音的固定字词；2.支持首码+分号或数字+aeuio进行自定义，后者只对增强模式有效，可用于手动区分重码等；3.优化飞竞词组。</li><li>20230118: 1.声笔拼音加入自由/固顶和非顶/顶功两对输入选项，并设置为声笔输入法的默认方案；2.用声笔飞竞取代声笔飞单，加入词组选项；3.用分号代替回车进行编码变换；4.加强声笔简码的数选字词，在注释中提示声笔简码的缩减码和数选字词；5.声笔飞码和声笔双拼首码时提示完数选词；6.纠正声笔拼音、声笔双拼和反查中「扥」字的读音tuo-&gt;den。</li><li>20221213: 修正新造词始终占据首选的错误，但是无法纠正已经出错的词。</li><li>20221212: 1.修正声笔双拼特殊缩减字位于末尾时不能参与造词的错误；2.修正声笔拼音一简词不能固顶的错误；3.修正声笔简码不能输入「禾」等字的错误；4.恢复安卓皮肤默认显示状态，避免背景干扰的问题；5.重新整理强化练习文本。</li><li>20221211: 1.fmsbbtz改为fmzdy，spsbbtz改为spzdy，sbpygdz改为pyzdy，增加jmzdy；2.恢复独立的声笔可自定义扩展包；3.增加一个是否采用数选顶屏的选项；4.为飞码增加是否显示声笔字的选项；5.纠正飞码编码变换时的BUG。</li><li>20221208: 1.恢复和优化增强模式（数选字词）；2.增加声笔双拼调整词典spsbbtz；3.开放声笔简码调整词典jmsbb；4.自定词典（调整词典）整合到主程序中；5.为飞码增加显示/隐藏声笔字的选项；6.简化飞码的候选显示；7.调低声笔双拼里「行hg」的字频，让「横」成为二简字；8.纠正声笔双拼不能打出「嵘」等26个字的BUG；9.全面修订在线教程。</li><li>20221205: 1.取消声笔小鹤和声笔快码；2.将声笔自然更名为声笔双拼，优化字频，再用笔画和部首利用空位增强单字，与飞码形成关联。</li><li>20221130: 1.所有字词型方案默认采用强制选重；2.声笔简码默认为慢调和四顶状态，增加jmsbb，利用sbb空闲空间和罕见字空间，让第三码无理来安排更常见的字，并进行提示。</li><li>20221117: 1.优化安卓皮肤，调整悬浮窗位置，避免在某些设备和应用中被状态栏挡住；2.优化5码时的编码变换操作。</li><li>20221111: 1.取消飞整、快整、鹤整和自整；2.取消所有扩展包，将其并入主程序；3.调整声笔小鹤和声笔自然中「内」为二简字；4.修订在线教程。</li><li>20221108: 优化声笔安卓版的各主题，使得标点符号的布局更合理。</li><li>20221030: 1.取消增强模式；2.修正「诶」和「誒」在声笔自然和声笔小鹤中的优先顺序；3.增加声笔系列全家桶；4.完善在线教程。</li><li>20221026: 去掉小狼毫在中英文切换时的弹窗提示。</li><li>20221008: 为声笔安卓版优化默认皮肤，并增加35键皮肤。</li><li>20221003: 修正安卓程序运行和设置时闪退的BUG。</li><li>20221001: 1.修复四码不为空时第五码条件顶失败的BUG；2.解决手机上不能滑动空格选择重码的问题；3.临时屏蔽缓冲模式的快捷键。</li><li>20220928: 支持四码为空时用第五码顶前两码。</li><li>20220813: 1.所有方案增加缓冲模式；2.声笔简码增加快调模式并恢复三顶模式。</li><li>20220726: 优化fmsbb和kmsbb的选字。</li><li>20220723: 1.简码从用户词典分离sb词典，消增强模式，交换「目」和「吗」的频度；2.飞讯和快讯改为五码时默认空码顶屏，回车时变为sz_sbb_；3.为快码增加kmsbbtz，并参与造词；4.从用户词典分离飞系和快系的组合词；5.将飞码、快码、小鹤和自然的三码空位词由三字词改为二字词；6.支持临时英文模式时的大小写转换；7.拆分sn为两级，分两页显示；8.解决声笔小狼毫无法简繁转换的问题；9.使空位字词能够参与造词。</li><li>20220710: 1.优化飞码和快码的sbb字；2.调整symbols中数字的顺序。</li><li>20220709: 1.优化数选简词；2.为声笔小鹤和声笔自然增加简词提示。</li><li>20220706: 1.优化调频算法；2. 优化可定制词典；3. 优化安卓版默认主题。</li><li>20220626: 1.改标点简词为数选简词；2.取消简码三顶模式；3.取消声笔飞简、声笔快简、声笔鹤简和声笔自简；4.取消安卓46和47键主题；5.修改可自定义词典。</li><li>20220519: 增加声笔飞码sbb字调整词典。</li><li>20220513: 安卓版增加声笔33键和声笔46键主题。</li><li>20220503: 1.飞码的「写」做成sbb，替换「诩」；2.「匮」的读音，除kui外，增加gui；3.纠正「聒」的反查结果；4.纠正\\不能输入aeuio的错误；5.支持下滑输入大写字母。</li><li>20220425: 1.更换安卓版飞码助记图片；2.纠正飞码单字「聒」的编码错误，由gvui改为gvue。</li><li>20220423: 1.去除翻页后不能直接选择重码的BUG；2.解决反查时不能用Ctrl+数字选择的问题；3.支持用AEUIO在sxx时顶一简字。</li><li>20220417: 1.用+重复历史输入；2.引导符号：在symbols.yaml中增加更多的表情等符号；3.选择优化：u引导的自定义词和o引导的lua选项采用aeuio进行选择；4.优化声笔小鹤和声笔自然的sb空位词；5.优化皮肤：将删词和隐藏键盘对调，以避免误删词组，也使收键盘变得直观。</li><li>20220406: 飞整和快整恢复用空格输入一简字。</li><li>20220405: 1.取消声笔顶拼、声笔简整、声笔飞速和声笔快速；2.声笔拼音保留韵母中的n；3.优化所有整句方案的标点上屏方式；4.消除飞码打不出空码词的BUG；5.增加空码词列表。q</li><li>20220325: 1.优化反查的方式；2.优化简码的三简词；3.纠正顶拼四顶时三简词与二简词重复的毛病，提高「什么」的词频；4.优化声笔小鹤和声笔自然，在三简上安排常用的二、三字词，vfi对应的「峎」改为「嗯」，调整标点词顺序；5.取消鹤速与自速；6.快码的「峎」vgi换为「嗯」; 7.飞码的「凹」vki换为「嗯」并将「玥」提到重码的首位。</li><li>20220315: 1.彻底解决自定义字词参与造词的问题，重新开放此功能；2.优化简码和顶拼的一二三简字词；3.取消顶拼的标点字词。</li><li>20220313: 1.紧急修复造词混乱影响正常输入的BUG，暂时屏蔽了标点字词结尾也能正常造词的功能；2.修复字词方案可以删除单字的严重BUG；3.允许整句方案手动删除用户词组。</li><li>20220312: 1.简码和顶拼：优化二三简字词；非三顶时，固定三简字词；支持出简也出全。2.小鹤和自然：默认四码前只提示一个候选项；支持出简也出全；单字也支持调频。3.将声笔小狼毫界面改为简体中文。</li><li>20220309: 1.自定义字词参与自动造词；2.增加简码和顶拼的自定义词典；3.飞整和快整不用空格编码；4.鹤整和自整固定一级简码；5.简码和顶拼二简词改为非强制性的；6.所有字词方案6码时查找5码首选以外的所有字词，静态单字除外；7.为简码和顶拼以外的字词方案也增加常规和增强的开关切换。</li><li>20220305: 1.优化声笔版安卓主题；2.优化声笔简码的标点字词；3.解决首字母大写无法触发临时英文状态。</li><li>20220304: 1.修正简码和顶拼第四码的输入时的BUG；2.修正切换三顶再切换回四顶后导致多字词选项丢失的BUG；3.声笔小狼毫候选标号显示距离优化；4.笔画反查时，第一笔出现「一丨丿丶乛」五个单笔画，并将它们的编码设置为空；5.安卓皮肤上的「フ」改为「乛」；6.将安卓默认主题改为43键，而47键的作为备选。</li><li>20220301: 1.修正通过箭头移动到选项后无法用空格选择的BUG；2.优化快捷键；3.优化安卓皮肤。</li><li>20220223: 1.支持飞码系和快码系sbb缩减码提示；2.修正飞整和快整不能进行二分反查的BUG；3.优化安卓版默认主题，在底排增加几个标点键。</li><li>20220219: 1.安卓版增加一个新的主题作为默认主题；2.安卓版支持在候选栏显示大字符集的汉字。</li><li>20220217: 1.纠正声笔快码、声笔小鹤、声笔自然中「谁shui」字频过低的问题；2.纠正声笔小鹤、声笔自然标点词显示级别太低的问题。</li><li>20220208: 纠正飞整和快整字频不对的问题。</li><li>20220202: 1.将快码扩展包和飞码扩展包中的<code>sbf sbs$ sbs$b</code>统一放到基础包中，以避免冲突；2.修正简码和顶拼schema中Retention导致不能三顶的错误。</li><li>20220201: 1.为声笔简码增加常见的标点字，如「哦v&#39;」「啦li.」等，但是第二码与笔画不吻合；2.为声笔简码和声笔顶拼添加增强模式的快速状态切换。</li><li>20220128: 1.修正sbs编码变换失效的Bug；2.支持在声笔小鹤和声笔自然中进行条件顶和五码顶；3.增大Android主题按键列间距。</li><li>20220125: 修正声笔顶拼空位词的编码错误。</li><li>20220124: 1.消除使用简码和顶拼的三顶模式后，导致飞码等其它方案词组无法输入的BUG；2.采用Tab和Shift+Tab来进行翻页操作，以更加符合惯例；3.编码变换改为主要由Enter键完成，以改善互击。</li><li>20220121: 1.优化大写顶屏、大写上屏和组合上屏；2.用Shift+Return代替Tab向后翻页；3.修正「龖」「龘」的读音错误；4.优化安卓皮肤以支持新的翻页和上屏方式；5.支持声笔拼音6码时用aeuio选择重码。</li><li>20220116: 1.为各字词方案增加大写顶屏功能，以方便手机通过上滑来避开空格，同时「讯」方案也能做到五码时大写顶sbb字；2.修复飞系和快系方案中sbb字不能参与造词的BUG。</li><li>20220115: 为「速」型方案误顶时提供快速补救方法。</li><li>20211226: 1.为简码和顶拼增加三顶模式和增强模式；2. 修正「速」型方案标点简词第三码为标点时声母顶屏失效的Bug；3. 修正声笔自然标点简词的注释错误；4. 进一步完善在线教程，以反映最新进展。</li><li>20211221: 1.改善声笔快码、声笔小鹤和声笔自然的提示方式；2.消除声笔小狼毫入简出繁时的BUG；3.增加一个显示日时的LUA脚本Datetime。</li><li>20211218: 增加声笔飞简、声笔快简、声笔鹤简和声笔自简四个主词的方案，并更新主程序来自支持它们。</li><li>20211215: 取消sn1数选简字，因为使用的结果很不理想，难按也难记，此更新只涉及飞码系。</li><li>20211213: 1.消除BUG：飞讯新造的多字词无法用sssS的格式输入；2.消除BUG：飞码和快码的速型方案的单字模式不起作用；3.为声笔小鹤和声笔自然增加单字模式；4.取消可定制的飞讯2，由飞单代替；5.取消数选简词，优化标点简词；6.飞单的sbb和sn1直接放入主码表以便单独；定制，共享的独立sbb和sn1不允许定制；7.依赖的sbb和sn1加入构词码，以便参与造词；8.取消飞讯的spsf和快讯的sysf简词。</li><li>20211207: 重新制作声笔Mac版安装包，更新主程序，解决有时安装失败的问题，感谢非诚勿扰群友的辛勤劳动！</li><li>20211206: 1.为飞讯2词典增加频率信息；2.增加极简的声笔飞单方案及其字典，方便用户魔改。</li><li>20211203: 1.加声笔鹤速和声笔自速方案；2.优化各方案的标点简词；3.修正飞讯2一简字BUG；4.修改主程序以支持更新。</li><li>20211128: 1.增加声笔快速方案；2.增加标点简词；3.优化飞讯2词典；4.增加可定制词典包；5.修改主程序以支持更新。</li><li>20211125: 1.声笔飞速闪亮登场；2.修改程序支持飞速。</li><li>20211122: 1.增加14560数选词，将sn.dict作为共用数选词典；2.取消spn和sbn数选词；3.修改备选默认皮肤名称，以反映实际键数。</li><li>20211118: 1.优化声笔安卓版皮肤，增加间距以减少误触；2.增加一个29键的磐石主题作为备选。</li><li>20211116: 1.按照词频优化为词库中的17万无频词；2.声笔拼音中增加无韵母的「嗯」「呒」「唔」编码。</li><li>20211113: 1.为安卓增加30键的磐石主题；2.微调安卓版的默认26键主题，使其与30键的主题更加一致；3.修正的飞码数选词不当的BUG，将数选词单独发布。</li><li>20211108: 1.声笔系列所有方案增加入简出繁支持；2.修改安卓版默认皮肤底栏，以减少误触；3.为声笔飞码（含飞讯）增加数选简词。</li><li>20211106: 进一步优化声笔拼音，采用与声笔简码一样的模式，变得更加易用、灵活，效率也更高。</li><li>20211031: 修正声笔拼音整句模式码表中的一些错误。</li><li>20211029: 1.优化声笔拼音，去掉韵母中的辅音n和g，代之以重复之前的元音字母，用声笔顶拼作为默认的方案，声笔顶整改为声笔拼整；2.取消用Shift+Backspace确认前一编码的功能；3.飞码和快码中，自动造词时，不生成sbsb和sps形式的二字词，取消它们的专用自定义词典。</li><li>20211006: 解决了Linux上使用声笔程序时按方向键出现大写字母的BUG和不能使用LUA的问题。</li><li>20210925: 更新声笔MAC版与上游一致，并支持最新的声笔方案。</li><li>20210825: 修正拼音反查的一些读音错误。</li><li>20210818: 声笔简码默认设置改为多字词第四码用小写字母，sssb由三字词独享，更加接近传统习惯。</li><li>20210803: 将声笔拼音内置于主程序中，以免去大众用户安装扩展包的烦恼。</li><li>20210707: 优化声笔WIN版和声笔安卓版的图标。</li><li>20210629：1.进一步优化ss词组，完全按照词频来选择；2. 优化快码（快讯）的ss空位词提示方式；3. 支持飞码（快码）在五码时用大写顶二码字上屏；4. 所以方案默认重置为半角，且不显示全半角状态；5. 更新强化练习文本，以反映修改内容。</li><li>20210623: 1. 进一步优化简码和顶拼的二简词，还有声笔快码的ss型空位词；2. 为飞码和快码分别在sbb自定义词典中增加sbbb型兼容码，以缩短五键字；3. 修改默认主题，在最下排增加两个键，以方便顿号和问号的输入；4. 解决全角状态下标点顶屏多出空格的问题；5. 更新强化练习文本，以反映二简词的变化；6. 消除6月16日版声笔小狼毫安装程序的BUG。</li><li>20210616: 1. 取消所有方案的数选简词，并修改安卓主题；2. 所有方案的临时词组删除阈值改为由1000改为10000；3. 优化简码和顶拼的二简词；4. 更改飞码和快码的声笔字提示方式；5. 优化声笔小鹤和声笔自然的字词。</li><li>20210601: 优化飞码和快码的整句方案，恢复用空格作为一简字的编码，以简化输入和提高转换的准确率。</li><li>20210527: 增加竞速方案sbfx2；从声笔小狼毫安装包里删除Rime的默认方案；优化一些标点的打法。</li><li>20210525: 在所有方案的schema中增加auto_inline选项，用于控制在中文状态下首字母大写是否进入临时英文状态。</li><li>20210520: 打包优化，将声笔拼音作为单独的扩展包发布，主程序中只留声笔简码，而且默认不启用声笔简整。</li><li>20210519: 优化声笔简码和声笔顶拼的二简词，将「武林」改为「网络」，「武功」改为「无关」，将「真的」「手机」「下载」的默认词频调高。</li><li>20210508: 修正声笔拼音和声笔顶拼中「钻」等多音字的读音问题。</li><li>20210423: 消除快码无法用正常编码打出部分多字词的BUG。</li><li>20210418: 1.飞码（飞讯）和快码（快讯）增加「词组/单字」选项，可以快速切换，单字模式时仍可通过第三码大写来支持词组；2.字词模式支持数选直接上屏；3.小狼毫候选项目默认为水平显示。</li><li>20210415: 彻底消除首字母大写自动进入临时英文状态时遇到的BUG。</li><li>20210413: 1.中文状态下，首字母大写时，自动进入临时英文状态；2.新造词组为已有词组时，不对该词增加频度；3.飞讯和快讯恢复默认为支持五码词的延迟顶方式；4.纠正几个方案Schema中的小错误。</li><li>20210412: 1.开放飞码和快码的sbb字词，可由用户定制，但是sbb字词不能参与自动造词；2.优化声笔字滤镜的提示格式；3.优化声笔顶拼的歧义处理方式。</li><li>20210410: 1.彻底解决飞码和快码双空格的难题；2.飞码和快码的sbb上安排常见的五码字作为缩减码；3.飞讯和快讯默认为只能使用简词的即时顶主单方式；4.二字词打单时码长更短或者相当时不再强制打单；5.简码只保留sn简词，取消szn简词。</li><li>20210329: 1.声笔拼音整句模式强制使用翘舌音声母模糊；2.因为技术问题无法同步更新，所以删除MAC定制程序包。</li><li>20210327: 1.纠正「色」「澄」在某些词里的读音；2.在整句模式下，可以用5定位到编码末尾；3.消除在整句模式下可以删除单字的重大BUG。</li><li>20210323: 1.优化所有整句方案的单字排序；2.修改默认皮肤以显示翻页符号。</li><li>20210320: 1.使声笔拼音除零声母外，均兼容标准拼音；2.将声笔拼音并入主程序；3.将所有整句方案的词数减少到48万；4.强化练习中删除空位词，加入声笔笔词、声部数词和声韵数词。</li><li>20210316: 修正标点顶屏时不能自动造词的BUG。</li><li>20210313: 1.修正三码时有些标点不能顶屏的bug；2.改正「澄清」一词的读音错误；3.将自定义词典作为主方案的依赖，以方便词典的修改。</li><li>20210309: 将安卓的目标sdk版本改为30，以适应安卓11。</li><li>20210308: 消除快讯（飞讯）三码字有时不能顶屏的BUG。</li><li>20210307: 1. 修正飞码「缣」字编码错误，修改「叛」的编码为pbe，相关字词也进行修改；2. 去除飞码和快码不能删除声笔字开始的二字词的BUG；3. 优化Wins主程序，解决win7可能出现复制文件失败的问题；4. 优化安卓主程序，采用安卓11进行编译；5. 修改trime.yaml，加宽空格键，以减少误触。</li><li>20210226: 修正快讯词库的BUG；修改所有方案的schema，去掉single_selection和简码的strong_mode选项；修改trime.yaml；更新在线教程。</li><li>20210223: 去除飞讯和快讯52顶时的BUG；修正快讯词库多空格的BUG；修改所有方案的schema，去掉single_selection和简码的strong_mode选项。</li><li>20210220: 1. 飞码、飞讯、快码、快讯增加szn简词；2. 飞讯、快讯多字词改为s1s2s3b0b0输入，同时所有词组支持扩展编码；3. 修改所有字词方案schema，采用强制一级选重。</li><li>20210210: 实现安卓皮肤悬浮窗完美利用选择栏的空间，完全彻底解决了遮挡问题。</li><li>20210209: 1. 全面优化安卓皮肤，整合磐石与凉秋作为默认皮肤，原默认皮肤改为风花絮声笔作为候选；2. 优化简码和顶拼的二简词，包括简码的二简数选字词；3. 优化定制程序，以更好地支持魔改简词。</li><li>20210203: 1.飞码和快码的sbbb二字词格式改为sbbs；2.取消飞码和快码的sbb词组；3.字海两得反查改为由i引导；4. 修正声笔小鹤和声笔自然中「姆」字拼音错误，清除编码错误的词汇；5.消除全角状态时无法正常输入的BUG；6.更新赛码表，以保持与新的编码一致；7.更新强化练习文本；8.更新在线教程。</li><li>20210128: 1. 恢复飞码和快码的sbbb二字词，以解决一简字双空格的问题；2. 纠正声笔顶拼缺词的BUG。</li><li>20210125: 1. 声笔简码、声笔小鹤、声笔自然增加105个声笔简词，其它系统词表和赛码表做相应调整；2. 同文默认皮肤修改；3. 主程序只包括简码，其它输入法均作为扩展包。</li><li>20210122: 1. 简码增加声笔数选简字和声声笔数选简词；2. 简码增加强顶strong_mode选项和多字词第四码小写lower_case选项；3. 打包变更：主程序只包括简码和飞讯两个明星方案，其它均作为扩展包。</li><li>20210120: 增加single_selection选项；简码sss不含多字词；主程序包只含声笔简码；方案schema增加定制选项。</li><li>20210118: 将飞讯和快讯词库改为用户词库，以便可以手动删除主词库的词条。</li><li>20210115: 优化快码和飞码的词库，调低szsb组合的优先级。</li><li>20210114: 支持用字海两分法来进行反查， 支持查找八万多汉字，用于难读而易于两分的字进行反查或者GBK以外字的输入。</li><li>20210111: 1. 优化飞码（飞讯）和快码（快讯）的简词；2. 优化简码和顶拼的简词；3. 支持通过拼音反查不带编码的词组。</li><li>20210108: 删除飞讯和快讯中低效的二字词。</li><li>20201229: 增加自动删除过时临时词组功能，提供delete_threshold、forced_selection和enable_filtering三个设置选项。</li><li>20201228: 增加声笔系列思维导图。</li><li>20201226: 增加声笔系列MAC版程序包。</li><li>20201225: 提供一个 stop_change 设置选项，用于停止或者开启自动调频与自动造词。</li><li>20201223: 小狼毫声笔定制程序集成LUA支持，并修改相应方案配方。</li><li>20201216: 为声笔小鹤、声笔自然增加ss和ssb空位词组，并进行提示。</li><li>20201211: 为声笔小鹤、声笔自然、声笔快码和声笔飞码增加扩展编码支持。</li><li>20201207: 修正声笔自然的词典错误。</li><li>20201202: 增加声笔小鹤（包括其整句方案声笔鹤整）和声笔自然（包括其整句方案声笔自整）。</li><li>20201130: 1. 声笔简码三字词和多字词改为三码起顶，以便进一步缩短平均码长，提高打字效率；2. 多字词第四码可以用末字首笔，也可以用末字声母，但声母要用大写。手机上的大写字母用上滑相应字母输入。</li><li>20201119: 1. 取消所有方案用逗号重复历史选项的功能；2. 声笔拼音恢复一简字固顶。</li><li>20201026: 1. 修正在拼音反查时可能误删SS词组的BUG；2. 修正「捘」和「儶」在声笔拼音里的拼写错误。</li><li>20201020: 1. 修正「征」字在声笔拼音中的编码错误；2. 修正「征」在各方案中拼音反查时的错误。</li><li>20201013: 1. 进一步优化声笔拼音的字词排序；2. 修正声笔拼音组词时的BUG。</li><li>20201010: 1. 拼音反查兼容顶拼方式；2. Shift + Enter（手机上滑BackSpace）上屏不带空格的编码</li><li>20201009: 1. 优化声笔拼音的单字输入；2. 小狼毫默认字体大小改为12。</li><li>20200923: 修改主程序；字词型方案默认收词量由16万增加至48万；增加声笔快简、声笔快速、声笔飞简、声笔飞速四个输入法方案。</li><li>20200901: 支持用shift+backspace上屏前n-1码首选项，主要用于声笔顶拼快速更正歧义音节；重复输入历史选项重码数限制为5；更新手机皮肤，以支持用左滑backspace来模拟shift+backspace。</li><li>20200826: 用飞讯和快讯分别代替飞单和快单，取消短期实验过的飞简、快简、飞速和快速方案。</li><li>20200801: 修改声笔飞码和声笔快码的sbbb格式为sbbs格式，优化和简化发布打包形式。</li><li>20200729: 让声笔顶拼和声笔简码支持简拼词组。</li><li>20200709: 更新声笔系列码定制小狼毫安装程序。</li><li>20200706: 修订声笔系列码教程，取消声笔顶拼和声笔简码的三键数选字词，更新APK执行程序，增加声笔定制同文和小狼毫的安装指南。</li><li>20200629: 重新规划发布形式，将声笔简码也单独发布，基础包内只包含声笔拼音；统一声笔顶拼和声笔顶整的拼音反查为a引导；各压缩包中加入各自的PDF教程；优化Symbols.yaml中的符号输入方式。</li><li>20200619: 就修改了一个拼音错误，「责」字的读音只有zhai，最常见的ze弄掉了。</li><li>20200617: 符号尽量保持与同文一致， \\引导的符号编码非首码去掉了aeuio， 消除了RIME程序中对句号和冒号特殊处理时的BUG，优化了中英文混合输入的方法；优化了声笔顶拼和声笔简码的数选字词。</li><li>20200608: 禁止简码和顶拼删除单字；为所有方案添加自定义词典，以手动管理特殊字词。</li><li>20200606: 解决飞码和快码的一码时有些标点符号不能顶屏的问题；解决所有方案在有编码时用\\顶屏输入符号的问题。</li><li>20200605: 解决了简码和顶拼的可以删除静态字词的严重BUG；安卓主题的增加长按退格键删除用户词组的功能；所有方案默认不再提示数选字词。</li><li>20200603: 将声笔顶拼单字和二字词的动态码长调整位改为第三码。</li><li>20200602: 更新了安装程序，使其不覆盖已经安装的Rime目录；修改了Weasel.yaml，使得在候选项前不出现难看的点。</li><li>20200601: 纠正声笔顶拼词库的个别错误，解决声笔顶整和声笔简整的助记显示问题。</li><li>20200531: 修正声笔简码三码为空码时新造多字词的显示问题，声笔简整和声笔顶整支持两码模糊。</li><li>20200528: 声笔简扩并入声笔简码，多字词编码规则优化，更符合人们使用习惯，编码空间扩大。</li><li>20200525: 增加声笔简扩，恢复声笔拼音，整句模式词组从48万增加到150多万，声笔系列变为四款十二型。</li><li>20200523: 修正顶拼中的拼音错误，简化快码和飞码的重码选择方法，分基础包和扩展包发布软件。</li><li>20200522: 增加声笔顶整，优化压缩包，取消扩展包，至此声笔系列已有四款十型。</li><li>20200520: 增加声笔顶拼，是“一种附加笔画的汉语拼音输入法”专利的一种实现。</li><li>20200418: 申请“一种附加笔画的汉语拼音输入法”发明专利。</li><li>20200515: 增加简码、飞码和快码的整句模式，作为扩展包单独发布。</li><li>20200506: 取消声笔拼音，优化飞码和快码的sbbb型词组。</li><li>20200423: 实现小狼毫一键安装，并做细微的核心程序优化。</li><li>20200326: 取消扩展包，增加声笔飞单和声笔快单。</li><li>20200301: 增加一个扩展包，包括声笔快码K、声笔快码S、声笔飞码K和声笔飞码S四个方案。</li><li>20200113: 修正了自动码长和扩展编码的几个BUG；取消声笔智能输入法，声笔简码不再使用大写字母。</li><li>20191225: 声笔简码实现了自动码长和扩展编码，功能上已经与原生简码几乎相同。</li><li>20191205: 飞码和快码不再分型，单字改为二三顶，二字词三四顶；简码增加简词；去除快码中缺少lue和nue音词组的BUG；声笔智能的拼音反查统一为以a引导，纠正trime中luna, ink第几个配色问题；增加拼音和智能的笔画过滤。</li><li>20191127: 新的S型取代W型；手机改为30键皮肤；声笔系列码升级为9.0版。</li><li>20191116: 精减声笔体系，取消声笔双拼和声笔星二；取消飞码S和快码S；修改Android程序皮肤，增加编码提示功能。</li><li>20191108: 更换输入法图标；在重码数&lt;6时，做翻页键的字母或者符号仍然可以顶屏；飞码S和快码S简码二字词优化。</li><li>20191030: 优化声笔智能和声笔拼音，支持快速定位修改；声笔智能支持字母选重。</li><li>20191028: 增加声笔智能和声笔拼音，实现开滤镜提示也不影响造词，同时可以一键快速定位新造的词组。</li><li>20191013: 增加了声笔双拼K和声笔星二K。</li><li>20190925: 增加了飞码W和快码W，还增加了各款输入法的整句方案。</li><li>20190914: 增加了声笔飞码K、S和声笔快码K、S，词库容量增加到20万。</li><li>20190821: 增加了声笔飞码X和声笔快码X，并优化了所有方案的码表。</li><li>20190815: 在声笔双拼和声笔快码空闲空间中增加了声笔简码的二字词。</li><li>20190810: 更正了声笔双拼中xiang音的编码错误。</li><li>20190809: 为声笔系列码增加了一键部署的同文安装包，无需繁琐的配置就可以在Android手机上使用声笔系列码。</li><li>20190807: 优化了声笔简码的二字词库，以避免造词时频繁翻页。修正了压缩包解压时的错误。加入了同文输入法的三个必备文件。</li><li>20190804: 基于RIME的声笔简码重磅发布发布。</li><li>20190723: 为声笔系列码定制的同文毫输入法（Android手机端）首次发布。</li><li>20190719: 为声笔系列码定制的小狼毫输入法（Windows电脑端）首次发布。</li></ul><h2 id="_2-声笔系列码原生版的发展历程" tabindex="-1">2 声笔系列码原生版的发展历程 <a class="header-anchor" href="#_2-声笔系列码原生版的发展历程" aria-label="Permalink to &quot;2 声笔系列码原生版的发展历程&quot;">​</a></h2><ul><li>2019年8月4日，发布了“声笔简码8.00版”，是“优化声母和笔画编码汉字输入法”的首版实现。</li><li>2019年4月13日，申请“优化声母和笔画编码汉字输入法”发明专利。</li><li>2016年7月至9月，发布了“声笔码7.00版”和“声笔飞码7.00版”，与6.00版相比的主要变化为：(1) 去除注册后才能长期使用的限制，用户可以不用注册就长期免费使用；(2) 增加了对64位程序的支持，能够在64位WINDOWS的记事本、资源管理器等程序中输入汉字了；(3) 增加了纯英文小写方式，将原来的带调拼音字母方式分离出来作为一个选项供用户使用；(4) s声笔码词组的动态码长调整位由第4位改成了第3位，单字的码长由静态改成了从第4位开始动态码长调整，提高了输入效率；(5) 飞码增加了一种类似双拼的声韵模式，相当于恢复了声笔系列码3.5中的声笔快码，不过是以新的面貌出现；(6) 在保持飞码6.00版强大单字能力的基础上，大大地增强了它的词组能力，使其成为字词并重的顶功输入法，二字词更是提供了简短和扩展两种模式，具有无可匹敌的字词综合效率；(7) 增加了后码提示功能，可以设置提示后续的编码，也可以用数字选择重码；(8) 增加了学习辅助功能，使得初学者能够更加方便的在使用中熟悉笔画的对应字母。</li><li>2008年1月8日，发布了“声笔码6.00版”。与声笔码5.00版相比，声笔码6.00版具有下面一些新的特性：(1) 对笔画的表示方式进行了调整。原来是用字母“aeiou”分别表示笔划“横竖撇点折”，而现在改用“eioua”表示“横竖撇捺折”。这样，改变的结果是使得连续输入笔划时形成更多的左右手交叉击键的动作，增加输入时的舒适度，提高击键率。(2) 增大的系统词库的容量，由原来的5万多增加到现在的10万左右。(3) 增加了是否关闭状态窗口、是否自动造词、是否调整码长的编码式快捷方式。同时还增加了各种软键盘的编码式快速调用方式。</li><li>2007年5月28日，发布了“声笔码5.00版”。与声笔码4.00版相比，声笔码5.00版具有下面一些新的特性：(1) 增加了与声笔码相对应的在电脑小键盘上使用的声笔数码。声笔码用户只需要熟悉字母和数字的对应关系后就可以毫无障碍地使用声笔数码，享受单手输入中文的快乐了。声笔数码可以和声笔码实现完全的字词库共享，也就是说您在声笔码中所创建的词组在声笔数码中立刻就可以使用，同时您在声笔数码中创建的词组也立刻可以在声笔数码中使用，输入规则完全一样。声笔数码还完美地解决了在小键盘中英文字母和汉语拼音的输入问题。(2) 增加了数码拼音查字、数码笔画查字、声笔数码模糊输入等新的功能，极大地方便了用户在遇到输字困难时及时地自行解决问题。(3) 令人惊喜的是，以上新增加的各种输入法、查字法和原有的声笔数码、笔画查字、拼音查字等功能被完全地集成在了一起，除了拼音查字外，其它都可以不加切换地随时使用。(4) 完全改写了输入法引擎和数据结构，在不增加程序和数据体积的同时增强了程序的功能和增大了数据的容量。(5) 应用户的要求，增加了对火狐浏览器、Visio等特殊程序的支持，以便在其中输入汉字。(6) 应用户的要求，改正了在冒险岛Online等游戏中输入数字时出现重复数字的问题。(7) 应用户的要求，更换了显示字体字号，以便用户在输入或查询时能看清楚笔画多而复杂的汉字。</li><li>2006年11月4日，发布了“声笔码4.00版”，鉴于用户对简单快捷的声笔码反响热烈和有些用户反映声笔码不能输入GB2312以外的汉字，所以声笔码利用这次升级将它从声笔系列中剥离了出来单独发布，方便大家使用。声笔码4.00版的新特性包括：(1) 所能输入的字符集由GB2313的6763个汉字和符号扩大到了GBK的20903个，还能输入特殊汉字“〇”。(2) 声笔码4.00从声笔系列输入法中独立了出来，单独安装运行，以免因扩大字符集而造成空间占用的急剧增长，也避免对声笔系列的不同输入法产生混淆。(3) 增加了一种新的查字方法 – 声笔查字，可以利用部分声笔输入码进行模糊查询和输入。(4) 支持用右Shift键向下翻页，用左Shift键向上，以寻找重码字词；而以前只能用Shift（不分左右）单向循环翻页。(5) 在笔画查字时进行单项提示，而不是以前的多项提示，缩短了响应时间。现在，只有在用户按Shift键翻页时才进行多项提示。(6) 改进了拼音查字时汉字的排序方式，让常用的字排在前面，以方便用户查找。</li><li>2006年3月28日，发布了“声笔系列3.5版”，和声笔系列3.0版一样，包括了三种相互关联的输入法：声笔码、声笔快码和声笔飞码。在这个版本中，声笔码没有任何变化，但对声笔快码和声笔飞码的编码方法做了改进，而且不再区分单字方式和非单字方式，这样既首先保证了单字的高速盲打，又可再用词组来进一步提高输入速度。另外，在声笔快码和声笔飞码中还增加了利用声母加笔画快速查询汉字输入码的功能，使它们的易学性和易用性得到了进一步的提高。</li><li>2006年2月18日，发布了声笔系列3.0版，取消了不怎么受用户欢迎的“神变五笔”，去掉了声笔快码中的偏旁部首，增加了采用声笔加偏旁部首的“声笔飞码”，并为声笔码、声笔快码和声笔飞码都提供了单字方式选项。</li><li>2006年1月18日，发布了声笔系列2.5版，对声笔系列码2.0版中的声笔码和声笔快码两种输入法进行了大量的优化，禁止对单字编码进行码长调整，对所有输入法都增加了手动调整码长的功能，并且可以选择是否进行自动码长调整和自动造词，增大了词组的编码空间，将系统词组的数量从3万多增加到了6万多，同时取消了学习难度较大的声笔快码单字方式，简化了声笔快码的输入方法。另外，声笔系列码2.5版还增加了一种用声笔技术改造过的五笔字型——“神变五笔”。</li><li>2005年12月18日，发布了声笔系列2.0版，将声笔码作为输入法之一包含于其中，另外加入了一种称为“声笔快码”的输入法,还专门提供了声笔快码的单字方式以快速按单字进行汉字输入。2.0版中的声笔快码，使用了声母、韵母和偏旁部首对汉字进行编码，这一点和声笔系列3.0版以后中的声笔快码是不一样的，因为后者只使用声母和韵母。</li><li>2005年12月3日，声笔系列输入法的第一个产品是声笔码1.5版发布，它采用的一系列新颖的输入法编码和编程技术打破了传统输入法的框框，在汉字输入法学术论坛上引起了汉字编码输入法爱好者的热烈讨论和强烈反响。</li><li>2004年，申请“基于声母和笔划的汉字输入法”发明专利，专利号为ZL2004100920715。</li></ul>',4),t=[b];function o(n,c,d,m,u,B){return s(),l("div",null,t)}const f=i(a,[["render",o]]);export{r as __pageData,f as default};
