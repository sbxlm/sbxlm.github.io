import{_ as e,c as o,o as t,V as c}from"./chunks/framework.TV9jg5Us.js";const m=JSON.parse('{"title":"声笔系列码增加共享自定义词典","description":"","frontmatter":{"title":"声笔系列码增加共享自定义词典","date":"2020-06-15T15:14:16.000Z","tags":["词典","自定义","共享"]},"headers":[],"relativePath":"posts/shared-dict.md","filePath":"posts/shared-dict.md"}'),d={name:"posts/shared-dict.md"},a=c("<p>声笔系列码的字词模式方案，如声笔简码、声笔顶拼、声笔快码和声笔飞码，包括主单的声笔快单和声笔飞单，都自带了16万多条系统词组，而且都具有方便的自动造词功能。声笔系列码的整句模式方案，如声笔简整、声笔顶整、声笔快整和声笔飞整，更是自带了150多万的系统词组，并且能在使用过程中自动组词。</p><p>但是，还是有不少用户提出了自定义词典的需求。因为，他们需要的一些特殊词组是方案本身不能或者不便于造出来的，比如带数字或/和字母的词组、特别长的词组等。</p><p>由于声笔系列码在不少情况下是不允许重码的，所以用户自定义的词组不能放在系统词组的编码空间里，否则可能造成冲突而影响输入法的正常使用。经过仔细考量，决定采用<code>u</code>引导来解决用户自定义词组的输入问题，此处的<code>u</code>意为「用户」，因为它是英语的<code>user</code>的首字母。这不但解决了独立编码空间的问题，还解决了声笔系列码各方案共享自定义词组的问题。这是因为这些方案都不会使用<code>aeuio</code>作为正常中文编码的首码。目前，声笔系列码可以直接输入<code>aeuio</code>来通过笔画反查字词的编码，还可以通过<code>a</code>引导来进行拼音反查字词的编码。现在只是利用空闲首字母来增加了自定义词典功能而已。</p><p>自定义词典随声笔简码和声笔简整一道包含在为声笔系列码定制的小狼毫和同文基础安装包里。它在里面体现为一个方案，但是独立使用的价值不大，只是为其它方案服务的。它是一个<code>dict</code>型而非<code>txt</code>型的词典，当收录的词条数量大时也具有很快的查找速度。</p><p>上图所示就是自定义词典文件。在该文件开始的注释部分，说明了编码格式和注意事项。需要特别注意的是，自定义词组不能以<code>aeuio</code>作为首码，非首码可以为小写字母和数字，最好不要有重码，因为重码字词需要通过移动光标来选择，很不方便。同时还要强调，词组和编码之间，编码和权重（如果有的话）之间，必须是以制表符TAB分隔，不能是空格，否则会定制词典编译失败，所以最好要找一个支持制表符的编辑器来编辑自定义词典。</p>",5),s=[a];function _(p,r,i,n,u,h){return t(),o("div",null,s)}const f=e(d,[["render",_]]);export{m as __pageData,f as default};
