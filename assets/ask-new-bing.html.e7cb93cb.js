import{_ as s,r as i,o as l,c as a,a as e,b as t,d as o,h as r}from"./app.753c104d.js";const c={},h=r('<h1 id="向-new-bing-提问" tabindex="-1"><a class="header-anchor" href="#向-new-bing-提问" aria-hidden="true">#</a> 向 New Bing 提问</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>以下是我的一些提问，用作个人记录</p></div><h2 id="图形学" tabindex="-1"><a class="header-anchor" href="#图形学" aria-hidden="true">#</a> 图形学</h2><div class="custom-container info"><p class="custom-container-title">Q</p><ul><li>为了实现基于物理的渲染，路径追踪中大多数光线被俄罗斯轮盘赌结束掉了，或者最终没有击中光源，这些光线是没有贡献的，怎样让更多光线与材质表面交互后成为对图像有贡献的光线？</li></ul></div>',4),d={class:"custom-container note"},p=e("p",{class:"custom-container-title"},"A",-1),_=e("p",null,"你好，这是必应。我可以帮你查找一些关于路径追踪的信息。😊",-1),u=e("p",null,"路径追踪是一种渲染技术，它通过模拟光线在场景中与物体表面的多次交互，来生成逼真的光照效果¹²³。路径追踪的难点在于如何高效地采样路径，以减少噪声和提高收敛速度。一种常用的方法是使用俄罗斯轮盘赌（Russian Roulette）来终止路径，以避免追踪贡献很小的光线⁴。但是，这也会导致一些光线被过早地结束，从而降低图像的质量。",-1),m=e("p",null,"为了让更多的光线与材质表面交互后成为对图像有贡献的光线，有一些可能的方法，例如：",-1),g=e("ul",null,[e("li",null,"使用重要性采样（Importance Sampling）来根据表面的BSDF或光源的分布来选择光线的方向，以增加光线的能量和方向的一致性¹⁴。"),e("li",null,"使用双向路径追踪（Bidirectional Path Tracing）或多重重要性采样（Multiple Importance Sampling）来同时从相机和光源发出光线，并在路径的某些顶点处连接它们，以增加光线的覆盖率和连通性¹⁴。"),e("li",null,"使用光子映射（Photon Mapping）或光线空间层次结构（Ray-Space Hierarchy）等预计算技术来存储和重用光线的信息，以增加光线的利用率和缓存效率¹⁴。")],-1),w=e("p",null,"以上是一些基本的思路，具体的实现和优化细节可能会有所不同，你可以参考一些相关的论文和教程来深入了解。希望这些信息对你有所帮助。😊",-1),f=e("p",null,"Source: Conversation with Bing, 15/2/2023",-1),b={style:{"overflow-x":"auto","font-size":"0.9rem"}},v={style:{"white-space":"nowrap"}},k={href:"https://www.cnblogs.com/hielvis/p/6371840.html",target:"_blank",rel:"noopener noreferrer"},A=e("br",null,null,-1),y={href:"https://www.bilibili.com/read/cv14342734",target:"_blank",rel:"noopener noreferrer"},x=e("br",null,null,-1),z={href:"https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/RayTracing/PathTracer/",target:"_blank",rel:"noopener noreferrer"},P=e("br",null,null,-1),S={href:"https://www.zhihu.com/question/368551323",target:"_blank",rel:"noopener noreferrer"},T=e("br",null,null,-1),C={href:"https://blog.csdn.net/qq_35358125/article/details/107029549",target:"_blank",rel:"noopener noreferrer"},q=e("hr",null,null,-1),B=e("div",{class:"custom-container info"},[e("p",{class:"custom-container-title"},"Q"),e("ul",null,[e("li",null,"路径追踪的图像通常会因采样不足而产生大量噪点，为了更快的渲染逼真的图像，如何在渲染的各个环节减少噪点？")])],-1),N={class:"custom-container note"},D=r('<p class="custom-container-title">A</p><p>根据我的搜索结果，为了更快地渲染逼真的图像，减少路径追踪的噪点，有几种可能的方法：</p><ul><li>增加每个像素的采样数/光线数，这可以降低渲染的方差，但也会增加计算的开销²⁶。</li><li>使用<strong>自适应采样</strong>，根据像素的变化程度动态调整采样数，这可以减少不必要的采样，提高渲染的效率⁴。</li><li>使用<strong>路径引导</strong>，这是一种利用重要性采样的技术，可以在难以找到光源的场景中减少噪点，例如通过一个小门开口照亮的房间。路径引导可以随着时间的推移学习重要的光线方向，随着采样数的增加而改善¹³。</li><li>使用<strong>噪点滤波器</strong>，这是一种后处理的方法，可以在渲染完成后对图像进行平滑或去噪，但也可能会损失一些细节或锐度²⁵。</li></ul><p>Source: Conversation with Bing, 15/2/2023</p>',4),R={style:{"overflow-x":"auto","font-size":"0.9rem"}},M={style:{"white-space":"nowrap"}},H={href:"https://graphics.stanford.edu/~henrik/papers/wscg95.html",target:"_blank",rel:"noopener noreferrer"},I=e("br",null,null,-1),F={href:"https://en.wikipedia.org/wiki/Path_tracing",target:"_blank",rel:"noopener noreferrer"},V=e("br",null,null,-1),E={href:"https://github-wiki-see.page/m/prman-pixar/RenderManForBlender/wiki/Path-tracing,-sampler-settings-and-noise-reduction-tips",target:"_blank",rel:"noopener noreferrer"},W=e("br",null,null,-1),G={href:"https://docs.blender.org/manual/en/latest/render/cycles/render_settings/sampling.html#:~:text=Path%20guiding%20helps%20reduce%20noise%20in%20scenes%20where,over%20time%2C%20improving%20as%20more%20samples%20are%20taken",target:"_blank",rel:"noopener noreferrer"},Q=e("br",null,null,-1),U={href:"https://docs.blender.org/manual/en/latest/render/cycles/render_settings/sampling.html",target:"_blank",rel:"noopener noreferrer"},J=e("br",null,null,-1),Y={href:"https://computergraphics.stackexchange.com/questions/5270/algorithms-to-remove-high-frequency-noise-from-path-tracing",target:"_blank",rel:"noopener noreferrer"},L=e("hr",null,null,-1),O=e("div",{class:"custom-container info"},[e("p",{class:"custom-container-title"},"Q"),e("ul",null,[e("li",null,"简洁描述路径追踪时自适应采样的具体原理")])],-1),Z={class:"custom-container note"},K=e("p",{class:"custom-container-title"},"A",-1),j=e("p",null,"根据我的搜索结果，路径追踪时自适应采样的具体原理是：",-1),X=e("ul",null,[e("li",null,"自适应采样是一种根据像素的变化程度动态调整采样数的方法，可以减少不必要的采样，提高渲染的效率³⁴。"),e("li",null,"自适应采样的基本思想是，对每个像素，先通过四个角发射主光线，如果四个角的亮度差异很大，就说明像素需要更多的采样，否则就说明像素已经足够平滑，不需要更多的采样³。"),e("li",null,"如果像素需要更多的采样，就将像素分成四个矩形部分，对每个部分重复上述过程，直到达到预设的采样数或者像素的亮度差异小于预设的阈值³⁴。"),e("li",null,"自适应采样可以看作是一种自动的分支路径追踪，分支路径追踪是一种根据材质的不同给不同的像素分配不同的采样数的方法，自适应采样可以更好地实现这一目标²。")],-1),$=e("p",null,"Source: Conversation with Bing, 15/2/2023",-1),ee={style:{"overflow-x":"auto","font-size":"0.9rem"}},te={style:{"white-space":"nowrap"}},ne={href:"https://web.cs.wpi.edu/~matt/courses/cs563/talks/antialiasing/adaptive.html",target:"_blank",rel:"noopener noreferrer"},oe=e("br",null,null,-1),re={href:"http://luthuli.cs.uiuc.edu/~daf/courses/Rendering/Papers-2/RTHWJ.article.pdf",target:"_blank",rel:"noopener noreferrer"},se=e("br",null,null,-1),ie={href:"https://devtalk.blender.org/t/please-dont-remove-branched-path-tracing/20619",target:"_blank",rel:"noopener noreferrer"},le=e("br",null,null,-1),ae={href:"https://bing.com/search?q=adaptive+sampling+path+tracing",target:"_blank",rel:"noopener noreferrer"},ce=e("br",null,null,-1),he={href:"https://www.youtube.com/watch?v=Gh3ZaMxwhto",target:"_blank",rel:"noopener noreferrer"},de=e("hr",null,null,-1),pe=e("div",{class:"custom-container info"},[e("p",{class:"custom-container-title"},"Q"),e("ul",null,[e("li",null,[t("半球采样时，"),e("code",null,"normalize(normal + vector)"),t("和"),e("code",null,"normalize(vector * dot(vector, normal))"),t("有什么区别？")])])],-1),_e={class:"custom-container note"},ue=r('<p class="custom-container-title">A</p><p>半球采样是一种在计算机图形学中用于模拟光照效果的技术，它可以根据不同的分布函数生成随机的方向向量⁵⁷。<code>normalize(normal + vector)</code>和<code>normalize(vector * dot(vector, normal))</code>是两种不同的半球采样方法，它们都可以得到单位长度的向量，但是它们的方向和密度分布有所不同。</p><p><code>normalize(normal + vector)</code>是一种均匀分布的半球采样方法，它可以得到任意方向上相同概率的向量⁵。这种方法适合用于模拟漫反射或者均匀散射的效果。</p><p><code>normalize(vector * dot(vector, normal))</code>是一种余弦加权分布的半球采样方法，它可以得到与法线方向更接近的向量，而远离法线方向的向量概率较低⁵⁷。这种方法适合用于模拟镜面反射或者高光效果。</p><p>Source: Conversation with Bing, 18/2/2023</p>',5),me={style:{"overflow-x":"auto","font-size":"0.9rem"}},ge={style:{"white-space":"nowrap"}},we={href:"https://blog.thomaspoulet.fr/uniform-sampling-on-unit-hemisphere/#:~:text=Hemisphere%3A%20Cosine%20Weighted%20Sampling%20The%20goal%20of%20this,power%20is%20perfectly%20suited%20for%20this%20spiky%20effect",target:"_blank",rel:"noopener noreferrer"},fe=e("br",null,null,-1),be={href:"https://www.mathematik.uni-marburg.de/~thormae/lectures/graphics1/code/ImportanceSampling/index.html",target:"_blank",rel:"noopener noreferrer"},ve=e("br",null,null,-1),ke={href:"https://blog.csdn.net/m0_56348460/article/details/117386857",target:"_blank",rel:"noopener noreferrer"},Ae=e("br",null,null,-1),ye={href:"https://blog.csdn.net/xyl192960/article/details/120774285",target:"_blank",rel:"noopener noreferrer"},xe=e("br",null,null,-1),ze={href:"https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-vectors/a/vector-magnitude-normalization",target:"_blank",rel:"noopener noreferrer"},Pe=e("br",null,null,-1),Se={href:"https://www.wikihow.com/Normalize-a-Vector",target:"_blank",rel:"noopener noreferrer"},Te=e("br",null,null,-1),Ce={href:"https://blog.thomaspoulet.fr/uniform-sampling-on-unit-hemisphere/",target:"_blank",rel:"noopener noreferrer"},qe=e("br",null,null,-1),Be={href:"https://www.pbr-book.org/3ed-2018/Monte_Carlo_Integration/2D_Sampling_with_Multidimensional_Transformations",target:"_blank",rel:"noopener noreferrer"},Ne=e("br",null,null,-1),De={href:"https://www.ey.com/en_gl/audit/technology/helix",target:"_blank",rel:"noopener noreferrer"},Re=e("hr",null,null,-1),Me=e("div",{class:"custom-container info"},[e("p",{class:"custom-container-title"},"Q"),e("ul",null,[e("li",null,"蒙特卡洛采样时，这两种方法的 PDF 分别是什么，用公式表示")])],-1),He={class:"custom-container note"},Ie=r('<p class="custom-container-title">A</p><p>蒙特卡洛采样是一种通过随机数来近似求解期望、均值、面积、积分等问题的方法¹²³。在计算机图形学中，蒙特卡洛采样可以用于模拟光线追踪、全局光照等效果⁴。</p><p>在蒙特卡洛采样中，PDF（概率密度函数）是一个描述随机变量取不同值的概率的函数²。不同的半球采样方法有不同的PDF，用公式表示如下：</p><p><code>normalize(normal + vector)</code>的PDF是<code>p(x) = 1 / (2π)</code>，这是一个均匀分布的函数。</p><p><code>normalize(vector * dot(vector, normal))</code>的PDF是<code>p(x) = cos(θ) / π</code>，这是一个余弦加权分布的函数 。其中，θ是向量与法线之间的夹角。</p><p>Source: Conversation with Bing, 18/2/2023</p>',6),Fe={style:{"overflow-x":"auto","font-size":"0.9rem"}},Ve={style:{"white-space":"nowrap"}},Ee={href:"https://blog.csdn.net/qq_33328642/article/details/123118339",target:"_blank",rel:"noopener noreferrer"},We=e("br",null,null,-1),Ge={href:"https://www.cnblogs.com/171207xiaohutu/p/9480119.html",target:"_blank",rel:"noopener noreferrer"},Qe=e("br",null,null,-1),Ue={href:"https://zhuanlan.zhihu.com/p/338103692",target:"_blank",rel:"noopener noreferrer"},Je=e("br",null,null,-1),Ye={href:"https://blog.csdn.net/qq_27388259/article/details/112001362",target:"_blank",rel:"noopener noreferrer"};function Le(Oe,Ze){const n=i("ExternalLinkIcon");return l(),a("div",null,[h,e("div",d,[p,_,u,m,g,w,f,e("div",b,[e("div",v,[e("p",null,[t("(1) 聊聊最近几年的路径追踪技术的进展（一） - 秦春林 - 博客园. "),e("a",k,[t("https://www.cnblogs.com/hielvis/p/6371840.html"),o(n)]),t(" Accessed 15/2/2023."),A,t(" (2) 【UE5小技巧】超高质量影视图像光追渲染器Path Tracer，一分钟学会 - 哔哩哔哩. "),e("a",y,[t("https://www.bilibili.com/read/cv14342734"),o(n)]),t(" Accessed 15/2/2023."),x,t(" (3) 路径追踪器 | 虚幻引擎文档. "),e("a",z,[t("https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/RayTracing/PathTracer/"),o(n)]),t(" Accessed 15/2/2023."),P,t(" (4) 知乎 - 有问题，就会有答案. "),e("a",S,[t("https://www.zhihu.com/question/368551323"),o(n)]),t(" Accessed 15/2/2023."),T,t(" (5) 路径跟踪算法学习及总结_RobotWoods的博客-CSDN博客_路径跟踪算法. "),e("a",C,[t("https://blog.csdn.net/qq_35358125/article/details/107029549"),o(n)]),t(" Accessed 15/2/2023.")])])])]),q,B,e("div",N,[D,e("div",R,[e("div",M,[e("p",null,[t("(1) Optimizing Path Tracing using Noise Reduction Filters, Henrik Wann Jensen. "),e("a",H,[t("https://graphics.stanford.edu/~henrik/papers/wscg95.html"),o(n)]),t(" Accessed 15/2/2023."),I,t(" (2) Path tracing - Wikipedia. "),e("a",F,[t("https://en.wikipedia.org/wiki/Path_tracing"),o(n)]),t(" Accessed 15/2/2023."),V,t(" (3) Path tracing, sampler settings and noise reduction tips - prman-pixar .... "),e("a",E,[t("https://github-wiki-see.page/m/prman-pixar/RenderManForBlender/wiki/Path-tracing,-sampler-settings-and-noise-reduction-tips"),o(n)]),t(" Accessed 15/2/2023."),W,t(" (4) Sampling — Blender Manual. "),e("a",G,[t("https://docs.blender.org/manual/en/latest/render/cycles/render_settings/sampling.html#:~:text=Path guiding helps reduce noise in scenes where,over time%2C improving as more samples are taken"),o(n)]),t(". Accessed 15/2/2023."),Q,t(" (5) Sampling — Blender Manual. "),e("a",U,[t("https://docs.blender.org/manual/en/latest/render/cycles/render_settings/sampling.html"),o(n)]),t(" Accessed 15/2/2023."),J,t(" (6) Algorithms to Remove High Frequency Noise from Path Tracing. "),e("a",Y,[t("https://computergraphics.stackexchange.com/questions/5270/algorithms-to-remove-high-frequency-noise-from-path-tracing"),o(n)]),t(" Accessed 15/2/2023.")])])])]),L,O,e("div",Z,[K,j,X,$,e("div",ee,[e("div",te,[e("p",null,[t("(1) Adaptive sampling - WPI. "),e("a",ne,[t("https://web.cs.wpi.edu/~matt/courses/cs563/talks/antialiasing/adaptive.html"),o(n)]),t(" Accessed 15/2/2023."),oe,t(" (2) Adaptive Sampling and Bias Estimation in Path Tracing. "),e("a",re,[t("http://luthuli.cs.uiuc.edu/~daf/courses/Rendering/Papers-2/RTHWJ.article.pdf"),o(n)]),t(" Accessed 15/2/2023."),se,t(" (3) Please, dont remove Branched Path Tracing! - Cycles Development .... "),e("a",ie,[t("https://devtalk.blender.org/t/please-dont-remove-branched-path-tracing/20619"),o(n)]),t(" Accessed 15/2/2023."),le,t(" (4) Please, dont remove Branched Path Tracing! - Cycles Development .... "),e("a",ae,[t("https://bing.com/search?q=adaptive+sampling+path+tracing"),o(n)]),t(" Accessed 15/2/2023."),ce,t(" (5) NVIDIA Omniverse Path Tracing with Adaptive Sampling - YouTube. "),e("a",he,[t("https://www.youtube.com/watch?v=Gh3ZaMxwhto"),o(n)]),t(" Accessed 15/2/2023.")])])])]),de,pe,e("div",_e,[ue,e("div",me,[e("div",ge,[e("p",null,[t("(1) Uniform Sampling on unit Hemisphere – Thomas' blog. "),e("a",we,[t("https://blog.thomaspoulet.fr/uniform-sampling-on-unit-hemisphere/#:~:text=Hemisphere%3A Cosine Weighted Sampling The goal of this,power is perfectly suited for this spiky effect"),o(n)]),t(". Accessed 18/2/2023."),fe,t(" (2) Importance Sampling of a Hemisphere. "),e("a",be,[t("https://www.mathematik.uni-marburg.de/~thormae/lectures/graphics1/code/ImportanceSampling/index.html"),o(n)]),t(" Accessed 18/2/2023."),ve,t(" (3) Eigen中norm、normalize、normalized的区别_dzxia920的博客-CSDN博客_eigen normalize. "),e("a",ke,[t("https://blog.csdn.net/m0_56348460/article/details/117386857"),o(n)]),t(" Accessed 18/2/2023."),Ae,t(" (4) 【Unity】如何理解Vector3.normalized 归一化向量 以及 向量方向计算. "),e("a",ye,[t("https://blog.csdn.net/xyl192960/article/details/120774285"),o(n)]),t(" Accessed 18/2/2023."),xe,t(" (5) Vector magnitude & normalization (article) | Khan Academy. "),e("a",ze,[t("https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-vectors/a/vector-magnitude-normalization"),o(n)]),t(" Accessed 18/2/2023."),Pe,t(" (6) How to Normalize a Vector: 9 Steps (with Pictures) - wikiHow. "),e("a",Se,[t("https://www.wikihow.com/Normalize-a-Vector"),o(n)]),t(" Accessed 18/2/2023."),Te,t(" (7) Uniform Sampling on unit Hemisphere – Thomas' blog. "),e("a",Ce,[t("https://blog.thomaspoulet.fr/uniform-sampling-on-unit-hemisphere/"),o(n)]),t(" Accessed 18/2/2023."),qe,t(" (8) 13.6 2D Sampling with Multidimensional Transformations. "),e("a",Be,[t("https://www.pbr-book.org/3ed-2018/Monte_Carlo_Integration/2D_Sampling_with_Multidimensional_Transformations"),o(n)]),t(" Accessed 18/2/2023."),Ne,t(" (9) EY Helix – Audit technology | EY - Global. "),e("a",De,[t("https://www.ey.com/en_gl/audit/technology/helix"),o(n)]),t(" Accessed 18/2/2023.")])])])]),Re,Me,e("div",He,[Ie,e("div",Fe,[e("div",Ve,[e("p",null,[t("(1) 初探强化学习（1）蒙特卡洛采样_难受啊！马飞...的博客-CSDN博客. "),e("a",Ee,[t("https://blog.csdn.net/qq_33328642/article/details/123118339"),o(n)]),t(" Accessed 18/2/2023."),We,t(" (2) 采样之蒙特卡罗方法 - 小糊涂也学要编程 - 博客园. "),e("a",Ge,[t("https://www.cnblogs.com/171207xiaohutu/p/9480119.html"),o(n)]),t(" Accessed 18/2/2023."),Qe,t(" (3) 一文看懂蒙特卡洛采样方法 - 知乎. "),e("a",Ue,[t("https://zhuanlan.zhihu.com/p/338103692"),o(n)]),t(" Accessed 18/2/2023."),Je,t(" (4) MCMC（蒙特卡洛采样）_整得咔咔响的博客-CSDN博客_蒙特卡罗采样. "),e("a",Ye,[t("https://blog.csdn.net/qq_27388259/article/details/112001362"),o(n)]),t(" Accessed 18/2/2023.")])])])])])}const je=s(c,[["render",Le],["__file","ask-new-bing.html.vue"]]);export{je as default};
