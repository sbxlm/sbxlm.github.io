import{_ as t,c as e,o,m as s}from"./chunks/framework.BL8MGDsA.js";const x=JSON.parse('{"title":"飞码和快码新增W型","description":"","frontmatter":{"title":"飞码和快码新增W型","date":"2019-09-18T09:03:32.000Z","tags":["飞码","快码","W型"]},"headers":[],"relativePath":"posts/AddModeW.md","filePath":"posts/AddModeW.md"}'),d={name:"posts/AddModeW.md"},n=s("p",null,"现有飞码S和快码S都是主单的输入法，在输入二字词和三字词时，重码很多，常常会有翻页操作，影响了用户的体验。在没有实现动态码长的情况下，是没有办法解决这个问题的。另一个问题是，有的用户不喜欢S型用大写字母参与编码。",-1),a=s("p",null,"群友尛羴提议将二字词的编码改为sbbsz五码，促发了我设计W型的飞码和快码。飞码W的编码格式具体如下。",-1),_=s("p",null,"单字：sb, spbbbx，两码起顶，含105个sb字 二字词：s1b2b2s2z2x，不收录用单字可以在五码及以内输入的二字词 三字词：s1b2b2s3z3x 多字词：s1b2b2s3s0x",-1),c=s("p",null,"其中，z表示p或者b，0表示末字。快码W的编码格式与飞码W完全相同，只需将部首p换为韵母y就行了。",-1),p=s("p",null,"因为无论单字还是词组都是采用五码，所以用“五”的拼音首字母来命名此型输入法。它支持自动造词和字词重码的调频，有重码的时候，用aeiou进行字母选重。",-1),l=[n,a,_,c,p];function r(i,b,u,W,h,m){return o(),e("div",null,l)}const z=t(d,[["render",r]]);export{x as __pageData,z as default};