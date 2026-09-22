/* 郭凯轩 作品集 · 交互 */
(function(){
  // ─── 移动端菜单 ───
  const menuBtn=document.querySelector('.menu-btn');
  const navLinks=document.querySelector('.nav-links');
  if(menuBtn&&navLinks){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));}
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks&&navLinks.classList.remove('open')));

  // ─── 中 / EN 双语切换 ───
  let openModalRef=null,lastModalKey=null;
  const I18N={
    zh:{
      'meta.title':'郭凯轩 · 作品集',
      'nav.about':'简介','nav.work':'实习','nav.projects':'项目','nav.skills':'技能','nav.resume':'下载简历',
      'hero.hi':'你好，我是郭凯轩 · 27 届秋招 · 立即到岗',
      'hero.solid':'用内容与数据','hero.outline':'做好产品体验',
      'hero.eduLabel':'在读','hero.edu':'武汉大学 · 图书情报硕士<br>人机交互与用户体验度量方向',
      'hero.ctaResume':'查看简历','hero.ctaContact':'联系我',
      'hero.internLabel':'实习于','hero.intern':'快看世界 · 内容运营<br>哈米科技 · 游戏策划',
      'm1.label':'推荐位 CTR','m1.sub':'4% → 15% · 3 个月',
      'm2.label':'单部漫画周收入','m2.sub':'4K → 1W+ · 环比 +300%',
      'm3.label':'推荐位 PV 增长','m3.sub':'次周留存 +12%',
      'm4.label':'用户互动量增长','m4.sub':'资源使用效率 +30%',
      'data.footnote':'* 数据口径与简历一致，业务绝对值已做脱敏处理。',
      'work.eyebrow':'实习','work.h2':'两种问题的解决路径。',
      'tl1.role2':'内容运营实习生','tl1.h3':'快看世界（快看漫画）','tl1.role':'推荐位策略优化 / 数据监控与复盘 / 评论区运营',
      'tl1.p':'接手 CTR 4% 的漫画推荐位，负责策略调整与数据监控：将人群定向从垂类包调整为已读召回，配合评论区运营。三个月内 CTR 提升至 15%，单部漫画周收入 4K → 1W+，过程整理为团队复盘 SOP。',
      'tl1.cta':'查看完整 Case Study',
      'tl2.role2':'游戏策划实习生','tl2.h3':'哈米科技（海外休闲产品）','tl2.role':'系统设计文档 / 竞品拆解 / 用户反馈闭环',
      'jr.s1':'快看世界','jr.s2':'哈米科技',
      'tl2.p':'负责在研产品的系统设计：撰写连胜挑战活动、核心玩法与数值两篇设计文档，以及道具提示逻辑文档与调研报告；完成竞品拆解、老产品迭代与海外用户反馈处理。',
      'tl2.cta':'查看系统设计文档',
      'works.eyebrow':'项目','works.h2':'硕士期间的两个项目。',
      'wc1.tag':'研究项目 · 硕士','wc1.h3':'SycoSense<br>AI 谄媚识别对话原型','wc1.desc':'从需求边界、多工具尝试到端到端串联的完整研究记录。',
      'wc2.tag':'产品设计 · 硕士','wc2.h3':'NeuroArt<br>疗愈 AI 智能剧场','wc2.desc':'基于 EEG 脑电信号反馈的孤独症联觉疗愈项目，负责软件侧产品设计。',
      'wc.go':'查看详情','wc.go2':'查看详情',
      'campus.eyebrow':'校园项目与竞赛',
      'cap1':'"正大杯"第十三届全国大学生市场调查与分析大赛 · 本科组总决赛',
      'cap2':'参赛作品《宇宙红芳》：元宇宙视域下红色文化公众需求分析及传播效果评价',
      'cap3':'参赛作品分析页：红色文化传播力趋势分析',
      'cap4':'红色场馆市场调研 PPT：受访者画像与态度认知分析',
      'cap5':'邯邢矿业品牌营销方案 PPT：品牌形象设计',
      'cap6':'黄河文化传播策略 PPT',
      'cf.zoom':'放大',
      'pf.p1':'内容运营','pf.p2':'数据分析','pf.p3':'产品策划','pf.p4':'用户研究',
      'pf.small':'郭凯轩 · 27 届',
      'lb.prev':'上一张','lb.next':'下一张','lb.close':'关闭',
      'method.eyebrow':'方法论','method.h2':'我怎么做，<br>比我"会什么"更重要。',
      'me1.h3':'快速上手陌生领域','me1.p':'本科会计学 → 硕士图情/HCI → 内容运营 → 系统设计。每进入一个新领域，都能在几周内拿出可用成果：数据复盘 SOP、系统设计文档、可交互原型。',
      'me2.h3':'结论之前，先找依据','me2.p':'快看的数据归因、哈米的竞品拆解、SycoSense 的文献调研——同一个习惯：判断建立在数据、竞品或文献上，不建立在感觉上。',
      'me3.h3':'每段经历都留下方法','me3.p':'复盘 SOP、GDD 文档、设计决策记录——每段经历结束时的产出，是下一个人能直接接手的东西，而不只是一份结果数字。',
      'skill.eyebrow':'技能','skill.h2':'用工具提效。',
      'sg1':'内容运营与数据分析','sg2':'系统策划与竞品研究','sg3':'AI 与交互原型',
      'st1':'<i class="dot"></i>CTR 分析','st2':'<i class="dot"></i>用户画像','st3':'<i class="dot"></i>SOP 复盘','st4':'<i class="dot"></i>Excel / 数据透视表',
      'st5':'<i class="dot"></i>活动逻辑设计','st6':'<i class="dot"></i>调研分析','st7':'<i class="dot"></i>竞品拆解',
      'contact.h2':'联系方式','contact.resume':'下载简历',
      'foot.left':'© 2026 郭凯轩 · 武汉大学 · 27 届','foot.right':'市场 / 运营 / 策划 / 用研'
    },
    en:{
      'meta.title':'Guo Kaixuan · Content Ops × System Design',
      'nav.about':'About','nav.work':'Internship','nav.projects':'Projects','nav.skills':'Skills','nav.resume':'Resume',
      'hero.hi':'Hi, I\'m Guo Kaixuan · Class of 2027 · Available immediately',
      'hero.solid':'With content & data','hero.outline':'I build solid products.',
      'hero.eduLabel':'Education','hero.edu':'Wuhan University · MLIS<br>HCI & UX Measurement',
      'hero.ctaResume':'Resume','hero.ctaContact':'Contact Me',
      'hero.internLabel':'Interned at','hero.intern':'Kuaikan Comics · Content Operations<br>Hami Tech · Game Design',
      'm1.label':'Feature CTR','m1.sub':'4% → 15% · 3 months',
      'm2.label':'Weekly revenue per title','m2.sub':'4K → 10K+ · +300%',
      'm3.label':'Feature PV growth','m3.sub':'Next-week retention +12%',
      'm4.label':'User engagement growth','m4.sub':'Resource efficiency +30%',
      'data.footnote':'* Metrics consistent with resume; business absolute values anonymized.',
      'work.eyebrow':'Internship','work.h2':'Two problem-solving paths.',
      'tl1.role2':'Content Operations Intern','tl1.h3':'Kuaikan World (Kuaikan Comics)','tl1.role':'Feature strategy / Data monitoring & review / Community ops',
      'tl1.p':'I took over a comics recommendation slot with a 4% CTR, responsible for strategy and daily data monitoring: switching audience targeting from vertical packages to read-recall, combined with comment-section operations. Within three months CTR rose to 15%, weekly revenue per title grew from 4K to 10K+, and the process was distilled into a team review SOP.',
      'tl1.cta':'View Full Case Study',
      'tl2.role2':'Game Design Intern','tl2.h3':'Hami Tech (Overseas Casual Games)','tl2.role':'System design docs / Competitor teardown / User feedback loop',
      'jr.s1':'Kuaikan World','jr.s2':'Hami Tech',
      'tl2.p':'Responsible for system design of in-development products: writing two design documents (streak challenge event; core gameplay & numbers), plus an item-hint logic document and research report; completing competitor teardown, legacy product iteration and overseas user feedback handling.',
      'tl2.cta':'View Design Docs',
      'works.eyebrow':'Projects','works.h2':'Two projects from my master\'s.',
      'wc1.tag':'Research · Master\'s','wc1.h3':'SycoSense<br>AI Sycophancy-Aware Dialogue Prototype','wc1.desc':'A complete research record: from scoping requirements and multi-tool experiments to an end-to-end prototype.',
      'wc2.tag':'Product Design · Master\'s','wc2.h3':'NeuroArt<br>Therapeutic AI Theater','wc2.desc':'An EEG-based AI theater for autism synesthesia therapy; I led software-side product design.',
      'wc.go':'View Details','wc.go2':'View Details',
      'campus.eyebrow':'Campus Projects & Competitions',
      'cap1':'"Zhengda Cup" 13th National College Market Research & Analysis Competition · National finals',
      'cap2':'Entry "Cosmos Red Fragrance": public demand analysis & communication evaluation of red culture in the metaverse context',
      'cap3':'Entry analysis page: red-culture communication trend analysis',
      'cap4':'Red venue market research deck: respondent personas & attitude analysis',
      'cap5':'Hanxing Mining brand marketing deck: brand identity design',
      'cap6':'Yellow River culture communication strategy deck',
      'cf.zoom':'Enlarge',
      'pf.p1':'Content Ops','pf.p2':'Data Analysis','pf.p3':'Product Planning','pf.p4':'User Research',
      'pf.small':'Guo Kaixuan · Class of 2027',
      'lb.prev':'Previous','lb.next':'Next','lb.close':'Close',
      'method.eyebrow':'Method','method.h2':'How I work<br>matters more than what I know.',
      'me1.h3':'Fast ramp-up in new domains','me1.p':'Accounting undergrad → MLIS/HCI master\'s → content operations → system design. In every new field I delivered usable output within weeks: a data review SOP, system design docs, an interactive prototype.',
      'me2.h3':'Evidence before conclusions','me2.p':'Data attribution at Kuaikan, competitor teardown at Hami, literature research for SycoSense — same habit: judgment built on data, competitors or literature, not on gut feeling.',
      'me3.h3':'Every experience leaves a method','me3.p':'Review SOPs, GDD documents, design-decision records — the output of each experience is something the next person can pick up directly, not just a result number.',
      'skill.eyebrow':'Skills','skill.h2':'Tools that speed up the work.',
      'sg1':'Content Ops & Data Analysis','sg2':'System Planning & Competitor Research','sg3':'AI & Interactive Prototyping',
      'st1':'<i class="dot"></i>CTR Analysis','st2':'<i class="dot"></i>User Profiling','st3':'<i class="dot"></i>SOP Retros','st4':'<i class="dot"></i>Excel / Pivot Tables',
      'st5':'<i class="dot"></i>Event Logic Design','st6':'<i class="dot"></i>Research & Analysis','st7':'<i class="dot"></i>Competitor Teardown',
      'contact.h2':'Get in Touch','contact.resume':'Download Resume',
      'foot.left':'© 2026 Guo Kaixuan · Wuhan University · Class of 2027','foot.right':'Marketing / Operations / Game Design / UX Research'
    }
  };
  // v5 覆盖/新增文案（B2B SaaS 改版）
  Object.assign(I18N.zh,{
    'meta.title':'郭凯轩 · 作品集',
    'nav.contact':'联系我',
    'hero.solid':'用内容与数据','hero.outline':'做好产品体验',
    'hero.badge1':'郭凯轩 · 27 届硕士生',
    'hero.badge2':'求职意向：市场 / 运营 / 策划 / 用研',
    'hero.ctaProjects':'查看项目','hero.ctaResume':'下载简历','hero.ctaContact':'联系我',
    'work.h2':'两种问题的解决路径。',
    'tl1.tag':'CTR +3.75× | 收入 +300%',
    'tl1.st':'接手 CTR 4% 的漫画推荐位，负责内容策略调整与日常数据监控，同时运营作品评论区。',
    'tl1.a':'人群定向由垂类包改为已读召回；盯 CTR、PV 等指标做日常调整；评论区运营；把过程整理为复盘 SOP。',
    'tl1.r':'CTR 4% → 15%；单部漫画周收入 4K → 1W+（+300%）；推荐位 PV +22%（次周留存 +12%）；用户互动 +35%。',
    'tl1.cta':'查看 Case 详情',
    'tl2.tag':'系统设计文档 | 竞品拆解 | 用户反馈闭环',
    'tl2.st':'负责在研产品的系统设计：活动系统、核心玩法与数值，以及配套的提示逻辑与调研支撑。',
    'tl2.a':'设计 24 小时限时连胜挑战活动（Lucky / Rare / Epic 三阶段）；撰写核心玩法与数值文档；定义道具提示逻辑；竞品拆解与海外用户反馈处理。',
    'tl2.r':'多篇系统设计文档与配套文档；竞品拆解与调研报告；老产品迭代与海外用户反馈闭环。',
    'tl2.cta':'查看 Case 详情',
    'campus.h2':'在挑战中完成闭环。',
    'method.h2':'怎么做<br>比会什么更重要。',
    'contact.h2':'期待与您交流。',
    'foot.left':'© 2026 郭凯轩. All Rights Reserved.'
  });
  Object.assign(I18N.en,{
    'meta.title':'Guo Kaixuan · Portfolio',
    'nav.contact':'Contact',
    'hero.solid':'With content & data','hero.outline':'I build solid products.',
    'hero.badge1':'Guo Kaixuan · Master\'s, Class of 2027',
    'hero.badge2':'Target roles: Marketing / Operations / Planning / User Research',
    'hero.ctaProjects':'View Projects','hero.ctaResume':'Download Resume','hero.ctaContact':'Contact Me',
    'work.h2':'Two problem-solving paths.',
    'tl1.tag':'CTR +3.75× | Revenue +300%',
    'tl1.st':'Took over a comics recommendation slot with a 4% CTR, owning content strategy, daily data monitoring and comment-section operations.',
    'tl1.a':'Switched audience targeting from vertical packages to read-recall; tuned strategy daily against CTR and PV; ran community operations; distilled the process into a review SOP.',
    'tl1.r':'CTR 4% → 15%; weekly revenue per title 4K → 10K+ (+300%); feature PV +22% (next-week retention +12%); engagement +35%.',
    'tl1.cta':'View Case Details',
    'tl2.tag':'System design docs | Competitor teardown | Feedback loop',
    'tl2.st':'Owned system design for in-development products: event systems, core gameplay & numbers, supporting hint logic and research.',
    'tl2.a':'Designed a 24-hour streak challenge event (Lucky / Rare / Epic stages); wrote the core gameplay & numbers doc; defined item hint logic; competitor teardown and overseas feedback handling.',
    'tl2.r':'Multiple system design docs and supporting documents; competitor teardown and research; legacy product iteration with an overseas feedback loop.',
    'tl2.cta':'View Case Details',
    'campus.h2':'Close the loop through challenges.',
    'method.h2':'How you work<br>matters more than what you know.',
    'contact.h2':'Let\'s talk.',
    'foot.left':'© 2026 Guo Kaixuan. All Rights Reserved.'
  });
  let lang='zh';
  try{lang=localStorage.getItem('lang')==='en'?'en':'zh';}catch(e){}
  const applyLang=l=>{
    lang=l;
    try{localStorage.setItem('lang',l);}catch(e){}
    const langBtnEl=document.getElementById('langBtn');
    if(langBtnEl){ // 仅首页执行文案替换，详情页只记忆选择
      document.documentElement.lang=l==='en'?'en':'zh-CN';
      document.title=I18N[l]['meta.title'];
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const k=el.getAttribute('data-i18n');
        if(I18N[l][k]!=null)el.innerHTML=I18N[l][k];
      });
      document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
        const k=el.getAttribute('data-i18n-aria');
        if(I18N[l][k]!=null)el.setAttribute('aria-label',I18N[l][k]);
      });
      langBtnEl.textContent=l==='zh'?'EN':'中';
    }
    if(openModalRef&&lastModalKey&&modalEl&&modalEl.classList.contains('open'))openModalRef(lastModalKey);
  };
  const modalEl=document.getElementById('modal');
  const langBtn=document.getElementById('langBtn');
  if(langBtn)langBtn.addEventListener('click',()=>applyLang(lang==='zh'?'en':'zh'));
  applyLang(lang);

  // ─── 加载屏：000→100 计数 + 轮换词 + 底部进度条（每次会话仅首次显示） ───
  const loader=document.getElementById('loader');
  if(loader){
    if(sessionStorage.getItem('pfLoaded')){
      loader.remove();
    }else{
      document.body.style.overflow='hidden';
      const wordEl=document.getElementById('ldWord');
      const countEl=document.getElementById('ldCount');
      const barEl=document.getElementById('ldBar');
      const t0=performance.now(),DUR=1800;
      let wIdx=-1;
      const tickWords=(now)=>{
        const idx=Math.floor((now-t0)/900);
        if(idx!==wIdx&&wordEl){
          wIdx=idx;
          const ws=document.documentElement.lang==='en'?['Content','Data','Design']:['内容','数据','设计'];
          wordEl.textContent=ws[idx%ws.length];
          wordEl.classList.remove('ld-in');
          void wordEl.offsetWidth;
          wordEl.classList.add('ld-in');
        }
      };
      const step=(now)=>{
        const p=Math.min(1,(now-t0)/DUR);
        const n=Math.round(p*100);
        if(countEl)countEl.textContent=String(n).padStart(3,'0');
        if(barEl)barEl.style.transform='scaleX('+p+')';
        tickWords(now);
        if(p<1){requestAnimationFrame(step);}
        else{
          setTimeout(()=>{
            loader.classList.add('ld-hide');
            document.body.style.overflow='';
            sessionStorage.setItem('pfLoaded','1');
            setTimeout(()=>loader.remove(),500);
          },250);
        }
      };
      requestAnimationFrame(step);
    }
  }

  // ─── 首页导航滚动高亮（点击/滚动时 active 跟随移动） ───
  const homeNavLinks=Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  if(homeNavLinks.length){
    const setActive=(id)=>homeNavLinks.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+id));
    homeNavLinks.forEach(a=>a.addEventListener('click',()=>{
      const id=a.getAttribute('href').slice(1);
      if(document.getElementById(id))setActive(id);
    }));
    const spy=new IntersectionObserver((entries)=>{
      entries.forEach(en=>{if(en.isIntersecting)setActive(en.target.id);});
    },{rootMargin:'-25% 0px -65% 0px'});
    homeNavLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean).forEach(s=>spy.observe(s));
  }

  // ─── 简历下拉 ───
  document.querySelectorAll('.dropdown .resume-btn').forEach(btn=>{
    btn.addEventListener('click',e=>{e.preventDefault();btn.parentElement.classList.toggle('open');});
  });
  document.addEventListener('click',e=>{
    document.querySelectorAll('.dropdown.open').forEach(d=>{if(!d.contains(e.target))d.classList.remove('open');});
  });

  // ─── 列表交错显现（借鉴 staggered FadeIn） ───
  document.querySelectorAll('[data-stagger]').forEach(group=>{
    Array.from(group.children).forEach((child,i)=>{
      child.classList.add('reveal');
      child.style.transitionDelay=(i*90)+'ms';
    });
  });

  // ─── 卡片光束跟随（鼠标位置驱动径向光斑 --mx/--my） ───
  document.querySelectorAll('.metric,.work-card,.method,.gallery-item,.tool-group').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      card.style.setProperty('--mx',(e.clientX-r.left)+'px');
      card.style.setProperty('--my',(e.clientY-r.top)+'px');
    });
  });

  // ─── 滚动显现 ───
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        en.target.classList.add('in');
        io.unobserve(en.target);
        setTimeout(()=>{en.target.style.transitionDelay='';},1200);
      }
    });
  },{threshold:.15,rootMargin:'0px 0px -60px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // ─── Hero 文案逐字显现（借鉴 AnimatedText） ───
  const crEl=document.querySelector('.char-reveal');
  if(crEl){
    (function splitChars(node){
      Array.from(node.childNodes).forEach(n=>{
        if(n.nodeType===3){
          const frag=document.createDocumentFragment();
          n.textContent.split('').forEach(ch=>{
            const s=document.createElement('span');
            s.className='ch';s.textContent=ch;
            frag.appendChild(s);
          });
          node.replaceChild(frag,n);
        }else if(n.nodeType===1&&n.tagName!=='BR'){
          splitChars(n);
        }
      });
    })(crEl);
    const chars=crEl.querySelectorAll('.ch');
    const crUpd=()=>{
      const r=crEl.getBoundingClientRect();
      const vh=window.innerHeight;
      const p=Math.min(1,Math.max(0,(vh*0.85-r.top)/(vh*0.55+r.height)));
      const t=p*chars.length;
      chars.forEach((c,i)=>{
        c.style.opacity=(0.2+0.8*Math.min(1,Math.max(0,t-i))).toFixed(3);
      });
    };
    let crTick=false;
    const crScroll=()=>{if(!crTick){crTick=true;requestAnimationFrame(()=>{crUpd();crTick=false;});}};
    window.addEventListener('scroll',crScroll,{passive:true});
    window.addEventListener('resize',crScroll);
    crUpd();
  }

  // ─── 人像磁吸（借鉴 Magnet） ───
  const hero=document.querySelector('.hero');
  const heroPhoto=document.querySelector('.hero-photo');
  if(hero&&heroPhoto&&window.matchMedia('(hover:hover)').matches){
    const strength=10,pad=120;
    hero.addEventListener('mousemove',e=>{
      const r=heroPhoto.getBoundingClientRect();
      const dx=e.clientX-(r.left+r.width/2);
      const dy=e.clientY-(r.top+r.height/2);
      if(Math.abs(dx)<r.width/2+pad&&Math.abs(dy)<r.height/2+pad){
        heroPhoto.style.transition='transform .3s ease-out';
        heroPhoto.style.transform='translate3d('+(dx/strength)+'px,'+(dy/strength)+'px,0)';
      }else if(heroPhoto.style.transform){
        heroPhoto.style.transition='transform .6s ease-in-out';
        heroPhoto.style.transform='';
      }
    });
    hero.addEventListener('mouseleave',()=>{
      heroPhoto.style.transition='transform .6s ease-in-out';
      heroPhoto.style.transform='';
    });
  }

  // ─── 数字 count-up ───
  const cntIo=new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        const el=en.target;
        const target=parseFloat(el.dataset.target||'0');
        const suffix=el.dataset.suffix||'';
        const dur=1400;const start=performance.now();
        const startVal=0;
        const animate=(now)=>{
          const p=Math.min(1,(now-start)/dur);
          const eased=1-Math.pow(1-p,3);
          const val=startVal+(target-startVal)*eased;
          el.firstChild.textContent=(Number.isInteger(target)?Math.round(val):Number(val.toFixed(2)))+suffix;
          if(p<1)requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        cntIo.unobserve(el);
      }
    });
  },{threshold:.5});
  document.querySelectorAll('.count').forEach(el=>cntIo.observe(el));

  // ─── 阅读进度条 + 章节高亮 ───
  const progressBar=document.querySelector('.progress-bar');
  const tocLinks=document.querySelectorAll('.toc a');
  if(progressBar){
    const article=document.querySelector('.article,.article-body');
    const updateProgress=()=>{
      const total=(article?article.getBoundingClientRect().height:document.body.scrollHeight)-window.innerHeight;
      const scrolled=window.scrollY-(article?article.offsetTop:0);
      const pct=Math.max(0,Math.min(100,scrolled/total*100));
      progressBar.style.width=pct+'%';
    };
    window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
  }
  if(tocLinks.length){
    const targets=Array.from(tocLinks).map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const tocIo=new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          tocLinks.forEach(l=>l.classList.remove('active'));
          const id='#'+en.target.id;
          const active=document.querySelector('.toc a[href="'+id+'"]');
          if(active)active.classList.add('active');
        }
      });
    },{rootMargin:'-30% 0px -60% 0px'});
    targets.forEach(t=>tocIo.observe(t));
  }

  // ─── 漏斗图动画 ───
  const funnel=document.querySelector('.funnel svg');
  if(funnel){
    const fnIo=new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          funnel.classList.add('play');
          fnIo.unobserve(en.target);
        }
      });
    },{threshold:.3});
    fnIo.observe(funnel);
  }

  // ─── Tabs ───
  document.querySelectorAll('.tabs').forEach(tabs=>{
    const buttons=tabs.querySelectorAll('button');
    const panels=document.querySelectorAll('[data-tab-group="'+tabs.dataset.tabGroup+'"] .tab-panel,'+tabs.parentElement.querySelectorAll ? '' : '');
    // simpler: panels are siblings of tabs
    const container=tabs.parentElement;
    buttons.forEach(btn=>{
      btn.addEventListener('click',()=>{
        const id=btn.dataset.tab;
        buttons.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        container.querySelectorAll('.tab-panel').forEach(p=>{p.classList.toggle('active',p.dataset.tab===id);});
      });
    });
  });

  // ─── hero 照片文件夹：触屏点击 / 键盘回车 切换展开（桌面走 hover） ───
  const pfStack=document.getElementById('pfStack');
  if(pfStack){
    const togglePf=()=>pfStack.classList.toggle('pf-open');
    pfStack.addEventListener('click',()=>{
      if(window.matchMedia('(hover: none)').matches)togglePf();
    });
    pfStack.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();togglePf();}
    });
  }

  // ─── 校园图集：3D 旋转轮播（coverflow，拖拽/箭头/圆点） ───
  const cfWrap=document.getElementById('coverflow');
  if(cfWrap){
    const stage=cfWrap.querySelector('.cf-stage');
    const cards=Array.from(stage.querySelectorAll('.cf-card'));
    const dotsBox=cfWrap.querySelector('.cf-dots');
    const N=cards.length;
    let cur=0,dragging=false,startX=0,delta=0,moved=false,downTarget=null;
    cards.forEach((c,i)=>{
      c.setAttribute('tabindex','0');
      const b=document.createElement('button');
      b.setAttribute('aria-label','第'+(i+1)+'张');
      b.addEventListener('click',()=>go(i));
      dotsBox.appendChild(b);
    });
    const dots=Array.from(dotsBox.children);
    const wrap=d=>{d=((d%N)+N)%N;return d>N/2?d-N:d;};
    const isMobile=()=>window.matchMedia('(max-width:760px)').matches;
    const lbBox=document.getElementById('lightbox');
    const lbOpen=()=>!!(lbBox&&lbBox.classList.contains('open'));
    function layout(px){
      const gap=isMobile()?110:230, rot=isMobile()?42:34;
      cards.forEach((c,i)=>{
        const d=wrap(i-cur)+(px||0)/gap;
        const abs=Math.abs(d);
        const x=d*gap, z=-abs*200, ry=-Math.max(-1.2,Math.min(1.2,d))*rot, sc=Math.max(.72,1-abs*.09);
        c.style.transform='translateX('+x+'px) translateZ('+z+'px) rotateY('+ry+'deg) scale('+sc+')';
        c.style.opacity=abs>2.5?0:1;
        c.style.zIndex=String(100-Math.round(abs*10));
        c.style.filter=abs<0.5?'none':'saturate(.8) brightness(1.01)';
        c.style.pointerEvents=abs>2.5?'none':'auto';
        c.classList.toggle('is-center',abs<0.5);
        c.setAttribute('aria-hidden',abs<0.5?'false':'true');
      });
      dots.forEach((b,i)=>b.classList.toggle('on',i===cur));
    }
    const go=i=>{cur=((i%N)+N)%N;layout(0);};
    const hit=e=>{const c=e.closest?e.closest('.cf-card'):null;return c?cards.indexOf(c):-1;};
    const activate=idx=>{ // 居中卡 → 放大；两侧卡 → 转到中间
      if(idx<0)return;
      if(idx===cur){if(openLightbox)openLightbox(idx);}
      else{cur=idx;layout(0);}
    };
    stage.addEventListener('pointerdown',e=>{
      dragging=true;moved=false;startX=e.clientX;delta=0;downTarget=e.target;
      stage.classList.add('cf-grabbing');
      try{stage.setPointerCapture(e.pointerId);}catch(err){}
    });
    stage.addEventListener('pointermove',e=>{
      if(!dragging)return;
      delta=e.clientX-startX;
      if(Math.abs(delta)>6)moved=true;
      if(moved)layout(delta);
    });
    const endDrag=e=>{
      if(!dragging)return;dragging=false;
      const step=Math.round(-delta/(isMobile()?110:230));
      if(step!==0)cur=((cur+step)%N+N)%N;
      stage.classList.remove('cf-grabbing');
      layout(0);
      // 未发生拖拽 = 点击：pointer capture 会把 click 事件重定向到 stage，
      // 因此放大/切换在这里判定，而不是依赖图片自身的 click 监听。
      if(!moved&&e)activate(hit(downTarget||e.target));
      delta=0;downTarget=null;
    };
    stage.addEventListener('pointerup',endDrag);
    stage.addEventListener('pointercancel',()=>{
      if(!dragging)return;dragging=false;stage.classList.remove('cf-grabbing');layout(0);delta=0;
    });
    stage.addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault();moved=false;}},true);
    stage.addEventListener('keydown',e=>{
      if(e.key!=='Enter'&&e.key!==' ')return;
      e.preventDefault();activate(hit(document.activeElement));
    });
    cfWrap.querySelector('.cf-prev').addEventListener('click',()=>go(cur-1));
    cfWrap.querySelector('.cf-next').addEventListener('click',()=>go(cur+1));
    window.addEventListener('resize',()=>layout(0));
    document.addEventListener('keydown',e=>{
      if(lbOpen())return;
      const inView=cfWrap.matches(':hover')||stage.contains(document.activeElement);
      if(!inView)return;
      if(e.key==='ArrowLeft')go(cur-1);
      else if(e.key==='ArrowRight')go(cur+1);
    });
    layout(0);
  }

  // ─── Lightbox（放大查看：图集前后切换 / 键盘 / 计数） ───
  let openLightbox=null;
  const lb=document.getElementById('lightbox');
  const zoomImgs=Array.from(document.querySelectorAll('img[data-zoom]'));
  const lbGallery=zoomImgs.map(img=>{
    const fig=img.closest('figure');
    const cap=fig?fig.querySelector('figcaption'):null;
    return{src:img.getAttribute('src')||'',alt:img.getAttribute('alt')||'',cap:cap?cap.textContent.trim():''};
  });
  if(lb){
    // 兼容旧页面：缺少的结构按需补齐
    let lbImg=document.getElementById('lightbox-img');
    if(!lbImg){lbImg=document.createElement('img');lbImg.id='lightbox-img';lbImg.alt='';lb.appendChild(lbImg);}
    let fig=lb.querySelector('.lb-fig');
    if(!fig){fig=document.createElement('figure');fig.className='lb-fig';lb.insertBefore(fig,lbImg);fig.appendChild(lbImg);}
    let lbCap=document.getElementById('lightbox-cap');
    if(!lbCap){lbCap=document.createElement('figcaption');lbCap.id='lightbox-cap';fig.appendChild(lbCap);}
    const mkBtn=(cls,label,txt)=>{const b=document.createElement('button');b.type='button';b.className=cls;b.setAttribute('aria-label',label);b.textContent=txt;lb.appendChild(b);return b;};
    const lbPrev=lb.querySelector('.lb-prev')||mkBtn('lb-nav lb-prev','上一张','←');
    const lbNext=lb.querySelector('.lb-next')||mkBtn('lb-nav lb-next','下一张','→');
    let lbCount=document.getElementById('lightbox-count');
    if(!lbCount){lbCount=document.createElement('div');lbCount.id='lightbox-count';lbCount.className='lb-count';lb.appendChild(lbCount);}
    if(!lb.querySelector('.lb-close'))mkBtn('lb-close','关闭','×');

    let lbIdx=0;
    const renderLb=()=>{
      const it=lbGallery[lbIdx]||{src:'',alt:'',cap:''};
      lbImg.src=it.src;lbImg.alt=it.alt;lbCap.textContent=it.cap||'';
      const many=lbGallery.length>1;
      lbCount.textContent=many?(lbIdx+1)+' / '+lbGallery.length:'';
      lbPrev.hidden=!many;lbNext.hidden=!many;
    };
    openLightbox=i=>{
      if(!lbGallery.length)return;
      lbIdx=((i%lbGallery.length)+lbGallery.length)%lbGallery.length;
      renderLb();lb.classList.add('open');lb.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
    };
    const closeLightbox=()=>{
      lb.classList.remove('open');lb.setAttribute('aria-hidden','true');
      document.body.style.overflow='';lbImg.removeAttribute('src');
    };
    const stepLb=s=>{if(lbGallery.length<2)return;lbIdx=(lbIdx+s+lbGallery.length)%lbGallery.length;renderLb();};

    lbPrev.addEventListener('click',e=>{e.stopPropagation();stepLb(-1);});
    lbNext.addEventListener('click',e=>{e.stopPropagation();stepLb(1);});
    lb.querySelector('.lb-close').addEventListener('click',e=>{e.stopPropagation();closeLightbox();});
    lb.addEventListener('click',e=>{if(!e.target.closest('.lb-fig')&&!e.target.closest('.lb-nav'))closeLightbox();});
    document.addEventListener('keydown',e=>{
      if(!lb.classList.contains('open'))return;
      if(e.key==='Escape')closeLightbox();
      else if(e.key==='ArrowLeft')stepLb(-1);
      else if(e.key==='ArrowRight')stepLb(1);
    });
    // 触摸滑动切换
    let tx=0;
    lb.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
    lb.addEventListener('touchend',e=>{
      const dx=e.changedTouches[0].clientX-tx;
      if(Math.abs(dx)>50)stepLb(dx>0?-1:1);
    },{passive:true});

    // 详情页等非轮播图片：直接点击放大
    zoomImgs.forEach((img,i)=>{
      const inCover=!!img.closest('#coverflow');
      if(inCover)return;
      img.style.cursor='zoom-in';
      img.addEventListener('click',()=>openLightbox(i));
    });
  }

  // ─── 弹窗浮层（卡片式内容，不发新页面） ───
  const modal=modalEl;
  const modalContent=document.getElementById('modal-content');
  const MDATA={
    kuaikan:{
      tag:'实习 · 内容运营 · 2025.05 – 2025.08',
      title:'快看世界（快看漫画）· 推荐位策略 Case',
      body:`
        <div class="m-label">S·T 背景与任务</div>
        <div class="m-grid"><div class="m-card wide"><div class="d" style="margin-top:0;font-size:13.5px;color:var(--ink)">接手时推荐位 CTR 只有 4%。我负责这个漫画推荐位的内容策略调整与日常数据监控，同时运营作品评论区。</div></div></div>
        <div class="m-label">A 行动</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">重做人群定向</div><div class="d">把推荐位定向从垂类包调整为已读召回逻辑，基于用户已读行为召回内容</div></div>
          <div class="m-card"><div class="t">盯指标做日常调整</div><div class="d">监控 CTR、PV 等核心指标，定位波动原因并同步调整内容策略</div></div>
          <div class="m-card"><div class="t">评论区运营</div><div class="d">结合互动数据调整运营动作，拉动用户互动</div></div>
          <div class="m-card"><div class="t">整理复盘 SOP</div><div class="d">把三个月的策略调整过程整理为团队可复用的复盘 SOP</div></div>
        </div>
        <div class="m-label">R 结果</div>
        <div class="m-grid">
          <div class="m-card"><div class="n">4% → 15%</div><div class="t">推荐位 CTR</div><div class="d">三个月内点击率提升</div></div>
          <div class="m-card"><div class="n">4K → 1W+</div><div class="t">单部漫画周收入</div><div class="d">环比 +300%</div></div>
          <div class="m-card"><div class="n">+22%</div><div class="t">推荐位 PV</div><div class="d">次周留存 +12%</div></div>
          <div class="m-card"><div class="n">+35%</div><div class="t">用户互动量</div><div class="d">评论区运营带来的提升</div></div>
        </div>
        <div class="m-label">相关材料</div>
        <div class="m-carousel">
          <span class="mc-ind"></span>
          <div class="mc-viewport"><div class="mc-track">
            <div class="mc-slide"><img src="assets/kk-data.png" alt="作品排期与数据跟踪表"><div class="mc-cap">作品排期与数据跟踪表（Excel）：曝光、CTR 与人群包规模，重点作品已标注</div></div>
            <div class="mc-slide"><img src="assets/kuikan-1.jpg" alt="站内推广素材示例"><div class="mc-cap">站内推广素材示例</div></div>
            <div class="mc-slide"><img src="assets/kk-banner.jpg" alt="作品宣传图"><div class="mc-cap">站内推广素材：作品宣传图</div></div>
            <div class="mc-slide"><img src="assets/kk-poster.jpg" alt="作品海报"><div class="mc-cap">站内推广素材：作品海报</div></div>
            <div class="mc-slide"><img src="assets/kuikan-4.jpg" alt="开屏广告素材"><div class="mc-cap">开屏广告素材</div></div>
            <div class="mc-slide"><img src="assets/kk-office.jpg" alt="快看漫画办公室"><div class="mc-cap">快看漫画办公室</div></div>
            <div class="mc-slide"><img src="assets/kk-badge.jpg" alt="实习期间"><div class="mc-cap">实习期间：工牌与作品立牌</div></div>
          </div></div>
          <button class="mc-btn mc-prev" type="button" aria-label="上一张">←</button>
          <button class="mc-btn mc-next" type="button" aria-label="下一张">→</button>
        </div>
        <div class="m-note">业务绝对值已脱敏，数据口径与简历一致。</div>`
    },
    hami:{
      tag:'实习 · 游戏策划 · 2026.05 – 2026.08',
      title:'哈米科技 · 系统设计与市场洞察',
      body:`
        <div class="m-label">S·T 背景与任务</div>
        <div class="m-grid"><div class="m-card wide"><div class="d" style="margin-top:0;font-size:13.5px;color:var(--ink)">游戏策划实习生，负责在研产品的系统设计：活动系统、核心玩法与数值，以及配套的提示逻辑；同时承担海外市场趋势监测与竞品调研支撑。</div></div></div>
        <div class="m-label">A 行动</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">设计连胜挑战活动</div><div class="d">24 小时限时活动：Lucky / Rare / Epic 三阶段分别以 3 / 5 / 7 连胜解锁，覆盖进度累积、失败重置与挽留弹窗</div></div>
          <div class="m-card"><div class="t">撰写核心玩法与数值文档</div><div class="d">从品类本质判断出发，推导道具系统、数值配置与关卡节奏，并定义道具提示的触发条件与展示逻辑</div></div>
          <div class="m-card"><div class="t">每周市场趋势监测</div><div class="d">监测休闲游戏起量玩法、非游戏产品与社媒热点（配乐 / Tag / 创作者 / Meme），持续追踪 AI 产品榜、Product Hunt、Sensor Tower、YouTube、TikTok 等渠道</div></div>
          <div class="m-card"><div class="t">竞品拆解与反馈处理</div><div class="d">完成调研报告与竞品拆解，负责老产品迭代与海外用户反馈闭环</div></div>
        </div>
        <div class="m-label">R 结果 / 产出</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">系统设计文档 · 连胜挑战活动</div><div class="d">24 小时限时活动完整方案：Lucky / Rare / Epic 三阶段连胜解锁、进度累积、失败重置与挽留弹窗</div></div>
          <div class="m-card"><div class="t">系统设计文档 · 核心玩法与数值</div><div class="d">从品类本质判断出发，推导道具系统、数值配置与关卡节奏</div></div>
          <div class="m-card"><div class="t">市场趋势洞察</div><div class="d">基于每周多渠道监测，提炼海外内容消费趋势（休闲玩法 / 非游戏产品 / 社媒热点）</div></div>
          <div class="m-card"><div class="t">配套文档与迭代闭环</div><div class="d">道具提示逻辑文档、调研报告与竞品拆解；老产品迭代与海外用户反馈处理跟进</div></div>
        </div>
        <div class="m-imgs">
          <div class="m-img"><img src="assets/hami-gdd1.png" alt="连胜挑战活动文档截图"><div class="m-cap">原文档截图（已脱敏）：连胜挑战活动系统设计</div></div>
          <div class="m-img"><img src="assets/hami-gdd2.png" alt="核心玩法与数值文档截图"><div class="m-cap">原文档截图（已脱敏）：核心玩法与数值</div></div>
        </div>
        <div class="m-note">文档原文为内部飞书文档，此处按原文结构重排并脱敏：隐去公司内部信息与部分数值。</div>`
    },
    sycosense:{
      tag:'研究项目 · 硕士 · 2026',
      title:'SycoSense · AI 谄媚识别对话原型',
      body:`
        <div class="m-label">S·T 背景与任务</div>
        <div class="m-grid"><div class="m-card wide"><div class="d" style="margin-top:0;font-size:13.5px;color:var(--ink)">硕士研究项目。针对用户求助时 AI 直接给答案、用户得不到锻炼的问题，设计一个教育场景的对话反馈原型。</div></div></div>
        <div class="m-label">A 行动</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">划定需求边界</div><div class="d">只做教育场景的对话反馈，明确不做通用助手</div></div>
          <div class="m-card"><div class="t">多工具分工验证</div><div class="d">Claude 写三阶段流程初稿，Coze 搭对话逻辑跑剧本验证，Lovable 生成可交互原型</div></div>
          <div class="m-card"><div class="t">设计三阶段引导流程</div><div class="d">先肯定、再引导、最后反思，替代「直接给答案」</div></div>
        </div>
        <div class="m-label">R 结果 / 产出</div>
        <div class="m-img" style="margin-top:0"><img src="assets/sycosense-arch.png" alt="SycoSense 架构与交互流程图"></div>
        <div class="m-grid">
          <div class="m-card"><div class="t">可交互原型</div><div class="d">Lovable 生成，跑通完整对话流程</div></div>
          <div class="m-card"><div class="t">四模块架构</div><div class="d">Orchestrator 统一调度 Simulator / Coach / Evaluator</div></div>
          <div class="m-card wide"><div class="t">完整研究记录</div><div class="d">从需求边界、工具选型到架构决策的完整文档</div></div>
        </div>`
    },
    neuroart:{
      tag:'产品设计 · 硕士 · 2025.11 – 2025.12',
      title:'NeuroArt · 疗愈 AI 智能剧场',
      body:`
        <div class="m-label">S·T 背景与任务</div>
        <div class="m-grid"><div class="m-card wide"><div class="d" style="margin-top:0;font-size:13.5px;color:var(--ink)">《NeuroArt：基于 EEG 脑电信号反馈的孤独症联觉疗愈 AI 智能剧场》（2025.11 – 2025.12），硬件 + 软件结合的产品设计课题，我负责软件侧产品设计。</div></div></div>
        <div class="m-label">A 行动</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">规划软件功能模块</div><div class="d">负责疗愈记录、EEG 神经反馈、个人信息等核心模块的产品设计</div></div>
          <div class="m-card"><div class="t">设计硬件-软件联动架构</div><div class="d">打通 EEG 监测设备、音乐播放与气味扩散系统，与软件侧 AI 算法、用户管理模块的协同</div></div>
        </div>
        <div class="m-label">R 结果 / 产出</div>
        <div class="m-img" style="margin-top:0"><img src="assets/neuroart.png" alt="NeuroArt 项目设计稿"></div>
        <div class="m-grid">
          <div class="m-card"><div class="n">1 份</div><div class="t">功能需求文档</div><div class="d">硬件与软件联动的完整功能定义</div></div>
          <div class="m-card"><div class="n">1 套</div><div class="t">完整设计稿</div><div class="d">疗愈方案推荐 / 实时监控与 AIGC 定制 / 神经反馈标记体系 / 270° 沉浸剧场</div></div>
        </div>`
    }
  };
  const MDATA_EN={
    kuaikan:{
      tag:'Internship · Content Ops · 2025.05 – 2025.08',
      title:'Kuaikan World (Kuaikan Comics) · Feature Strategy Case',
      body:`
        <div class="m-label">S·T Background & Task</div>
        <div class="m-grid"><div class="m-card wide"><div class="d" style="margin-top:0;font-size:13.5px;color:var(--ink)">When I took over, the feature's CTR was only 4%. I was responsible for content strategy and daily data monitoring for this comics recommendation slot, and also ran the comment-section operations.</div></div></div>
        <div class="m-label">A Actions</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">Rebuilt audience targeting</div><div class="d">Switched targeting from vertical packages to a read-recall logic, re-serving content based on users' reading history</div></div>
          <div class="m-card"><div class="t">Monitored metrics daily</div><div class="d">Tracked CTR, PV and other core metrics, located the cause of fluctuations and adjusted content strategy accordingly</div></div>
          <div class="m-card"><div class="t">Comment-section operations</div><div class="d">Adjusted operations based on engagement data to drive user interaction</div></div>
          <div class="m-card"><div class="t">Documented a review SOP</div><div class="d">Distilled the three-month strategy iteration into a reusable team SOP</div></div>
        </div>
        <div class="m-label">R Results</div>
        <div class="m-grid">
          <div class="m-card"><div class="n">4% → 15%</div><div class="t">Feature CTR</div><div class="d">Within three months</div></div>
          <div class="m-card"><div class="n">4K → 10K+</div><div class="t">Weekly revenue per title</div><div class="d">+300%</div></div>
          <div class="m-card"><div class="n">+22%</div><div class="t">Feature PV</div><div class="d">Next-week retention +12%</div></div>
          <div class="m-card"><div class="n">+35%</div><div class="t">User engagement</div><div class="d">Driven by community operations</div></div>
        </div>
        <div class="m-label">Related Materials</div>
        <div class="m-carousel">
          <span class="mc-ind"></span>
          <div class="mc-viewport"><div class="mc-track">
            <div class="mc-slide"><img src="assets/kk-data.png" alt="Content schedule & tracking sheet"><div class="mc-cap">Content schedule & tracking sheet (Excel): impressions, CTR and audience-pack size, key titles highlighted</div></div>
            <div class="mc-slide"><img src="assets/kuikan-1.jpg" alt="In-app promotion material"><div class="mc-cap">In-app promotion material sample</div></div>
            <div class="mc-slide"><img src="assets/kk-banner.jpg" alt="Promotional artwork"><div class="mc-cap">In-app promotion: title artwork</div></div>
            <div class="mc-slide"><img src="assets/kk-poster.jpg" alt="Title artwork"><div class="mc-cap">In-app promotion: title artwork</div></div>
            <div class="mc-slide"><img src="assets/kuikan-4.jpg" alt="Splash ad material"><div class="mc-cap">Splash-screen ad material</div></div>
            <div class="mc-slide"><img src="assets/kk-office.jpg" alt="Kuaikan office"><div class="mc-cap">Kuaikan Comics office</div></div>
            <div class="mc-slide"><img src="assets/kk-badge.jpg" alt="During the internship"><div class="mc-cap">During the internship: badge & figurine</div></div>
          </div></div>
          <button class="mc-btn mc-prev" type="button" aria-label="Previous">←</button>
          <button class="mc-btn mc-next" type="button" aria-label="Next">→</button>
        </div>
        <div class="m-note">Business absolute values anonymized; metrics consistent with resume.</div>`
    },
    hami:{
      tag:'Internship · Game Design · 2026.05 – 2026.08',
      title:'Hami Tech · System Design & Market Insights',
      body:`
        <div class="m-label">S·T Background & Task</div>
        <div class="m-grid"><div class="m-card wide"><div class="d" style="margin-top:0;font-size:13.5px;color:var(--ink)">Game design intern responsible for system design of in-development products: event systems, core gameplay & numerical tuning and hint logic, plus overseas market trend monitoring and research support.</div></div></div>
        <div class="m-label">A Actions</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">Designed a streak challenge event</div><div class="d">24-hour limited event with Lucky / Rare / Epic stages unlocking at 3 / 5 / 7 win streaks, covering progress accumulation, failure reset and win-back popups</div></div>
          <div class="m-card"><div class="t">Wrote core gameplay & numbers doc</div><div class="d">From genre-level judgment to item systems, numerical configuration and level pacing, plus trigger conditions and display rules for item hints</div></div>
          <div class="m-card"><div class="t">Weekly market trend monitoring</div><div class="d">Tracked trending casual game mechanics, non-game products and social media trends (sounds / hashtags / creators / memes) via AI app charts, Product Hunt, Sensor Tower, YouTube, TikTok and more</div></div>
          <div class="m-card"><div class="t">Competitor teardown & feedback</div><div class="d">Research report and competitor analysis; legacy product iteration and overseas user feedback loop</div></div>
        </div>
        <div class="m-label">R Results / Deliverables</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">System design doc · Streak challenge event</div><div class="d">Complete 24-hour event design: Lucky / Rare / Epic streak-based stages, progress accumulation, failure reset and win-back popups</div></div>
          <div class="m-card"><div class="t">System design doc · Core gameplay & numbers</div><div class="d">From genre-level judgment to item systems, numerical configuration and level pacing</div></div>
          <div class="m-card"><div class="t">Market trend insights</div><div class="d">Distilled overseas content-consumption trends (casual mechanics / non-game products / social hotspots) from weekly multi-channel tracking</div></div>
          <div class="m-card"><div class="t">Supporting docs & iteration loop</div><div class="d">Item hint logic doc, research report and competitor teardown; legacy product iteration and overseas user feedback follow-up</div></div>
        </div>
        <div class="m-imgs">
          <div class="m-img"><img src="assets/hami-gdd1.png" alt="Streak challenge event doc screenshot"><div class="m-cap">Original doc screenshot (anonymized): streak challenge event system design</div></div>
          <div class="m-img"><img src="assets/hami-gdd2.png" alt="Core gameplay doc screenshot"><div class="m-cap">Original doc screenshot (anonymized): core gameplay & numbers</div></div>
        </div>
        <div class="m-note">Original docs were internal Feishu documents, restructured and anonymized for this portfolio: internal company information and some values removed.</div>`
    },
    sycosense:{
      tag:'Research · Master\'s · 2026',
      title:'SycoSense · AI Sycophancy-Aware Dialogue Prototype',
      body:`
        <div class="m-label">S·T Background & Task</div>
        <div class="m-grid"><div class="m-card wide"><div class="d" style="margin-top:0;font-size:13.5px;color:var(--ink)">Master's research project. Addressing the problem that AI gives direct answers when users ask for help — leaving users untrained — I designed a dialogue feedback prototype for learning scenarios.</div></div></div>
        <div class="m-label">A Actions</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">Scoped the problem</div><div class="d">Dialogue feedback for learning scenarios only — explicitly not a general assistant</div></div>
          <div class="m-card"><div class="t">Multi-tool validation</div><div class="d">Claude drafted the three-stage flow, Coze prototyped the dialogue logic with scripted runs, Lovable generated the interactive prototype</div></div>
          <div class="m-card"><div class="t">Three-stage guidance flow</div><div class="d">Affirm first, then guide, finally reflect — replacing "just give the answer"</div></div>
        </div>
        <div class="m-label">R Results / Deliverables</div>
        <div class="m-img" style="margin-top:0"><img src="assets/sycosense-arch.png" alt="SycoSense architecture & interaction flow"></div>
        <div class="m-grid">
          <div class="m-card"><div class="t">Interactive prototype</div><div class="d">Generated with Lovable; full dialogue flow works end to end</div></div>
          <div class="m-card"><div class="t">Four-module architecture</div><div class="d">Orchestrator coordinating Simulator / Coach / Evaluator</div></div>
          <div class="m-card wide"><div class="t">Complete research documentation</div><div class="d">From requirement scoping and tool selection to architecture decisions</div></div>
        </div>`
    },
    neuroart:{
      tag:'Product Design · Master\'s · 2025.11 – 2025.12',
      title:'NeuroArt · Therapeutic AI Theater',
      body:`
        <div class="m-label">S·T Background & Task</div>
        <div class="m-grid"><div class="m-card wide"><div class="d" style="margin-top:0;font-size:13.5px;color:var(--ink)">"NeuroArt: An AI Smart Theater for autism synesthesia therapy based on EEG feedback" (2025.11 – 2025.12), a hardware + software product design project. I was responsible for software-side product design.</div></div></div>
        <div class="m-label">A Actions</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">Planned software feature modules</div><div class="d">Product design for therapy records, EEG neuro-feedback and personal info modules</div></div>
          <div class="m-card"><div class="t">Hardware–software linkage architecture</div><div class="d">Connecting EEG monitoring, music playback and scent diffusion with software-side AI algorithms and user management</div></div>
        </div>
        <div class="m-label">R Results / Deliverables</div>
        <div class="m-img" style="margin-top:0"><img src="assets/neuroart.png" alt="NeuroArt design plates"></div>
        <div class="m-grid">
          <div class="m-card"><div class="n">1</div><div class="t">Feature requirements doc</div><div class="d">Complete functional definition of the hardware–software linkage</div></div>
          <div class="m-card"><div class="n">1</div><div class="t">Complete design set</div><div class="d">Therapy recommendations / real-time monitoring & AIGC customization / neuro-feedback tagging / 270° immersive theater</div></div>
        </div>`
    }
  };
  if(modal&&modalContent){
    openModalRef=key=>{
      const l=(document.documentElement.lang==='en')?MDATA_EN:MDATA;
      const d=l[key]||MDATA[key];if(!d)return;
      lastModalKey=key;
      modalContent.innerHTML='<div class="modal-head"><span class="tag">'+d.tag+'</span><h3>'+d.title+'</h3></div><div class="modal-body">'+d.body+'</div>';
      modal.classList.add('open');
      modal.querySelector('.modal-card').scrollTop=0;
      document.body.style.overflow='hidden';
      // 弹窗内轮播（曲面屏 coverflow）
      const car=modalContent.querySelector('.m-carousel');
      if(car){
        const track=car.querySelector('.mc-track');
        const slides=Array.from(track.children);
        const total=slides.length;
        const ind=car.querySelector('.mc-ind');
        car.classList.add('mc3d');
        let ci=0;
        const wrap=d=>{d=((d%total)+total)%total;return d>total/2?d-total:d;};
        const layout=()=>{
          slides.forEach((s,i)=>{
            const d=wrap(i-ci);
            const abs=Math.abs(d);
            const dir=Math.sign(d);
            s.style.transform=d===0
              ?'translateX(-50%) translateZ(0) rotateY(0deg) scale(1)'
              :'translateX(-50%) translateX('+(dir*60)+'%) translateZ(-260px) rotateY('+(-dir*44)+'deg) scale(.9)';
            s.style.opacity=abs>2?'0':'1';
            s.style.zIndex=String(50-abs*10);
            s.style.pointerEvents=abs===0?'auto':'none';
            s.style.filter=abs===0?'none':'brightness(.78) saturate(.92)';
            s.classList.toggle('is-center',abs===0);
            s.classList.toggle('is-side',abs>0);
          });
          ind.textContent=(ci+1)+' / '+total;
        };
        const go=n=>{ci=(n%total+total)%total;layout();fit();};
        // 视口高度跟随图片实际高度，消除底部空白
        const vp=car.querySelector('.mc-viewport');
        const fit=()=>{
          const img=slides[ci].querySelector('img');
          const h=img.getBoundingClientRect().height||slides[ci].offsetHeight;
          if(h>0)vp.style.height=Math.round(h+56)+'px';
        };
        slides.forEach(s=>{const im=s.querySelector('img');if(im&&!im.complete)im.addEventListener('load',fit,{once:true});});
        window.addEventListener('resize',fit);
        car.querySelector('.mc-prev').addEventListener('click',()=>go(ci-1));
        car.querySelector('.mc-next').addEventListener('click',()=>go(ci+1));
        // 点击两侧画面转到中间
        slides.forEach((s,i)=>s.addEventListener('click',()=>{if(i!==ci)go(i);}));
        // 拖拽 / 滑动切换
        let sx=null,sy=null;
        car.addEventListener('pointerdown',e=>{sx=e.clientX;sy=e.clientY;});
        car.addEventListener('pointerup',e=>{
          if(sx==null)return;
          const dx=e.clientX-sx,dy=e.clientY-sy;sx=null;sy=null;
          if(Math.abs(dx)>44&&Math.abs(dx)>Math.abs(dy))go(ci+(dx<0?1:-1));
        });
        car.addEventListener('pointercancel',()=>{sx=null;sy=null;});
        go(0);
      }
    };
    const closeModal=()=>{modal.classList.remove('open');document.body.style.overflow='';};
    document.querySelectorAll('[data-modal]').forEach(el=>{
      el.addEventListener('click',()=>openModalRef(el.dataset.modal));
      el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openModalRef(el.dataset.modal);}});
    });
    modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
    modal.querySelector('.modal-close').addEventListener('click',closeModal);
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
  }

  // ─── SycoSense 对话播放器 ───
  document.querySelectorAll('.dialog-flow').forEach(flow=>{
    const bubbles=flow.querySelectorAll('.bubble');
    const prev=flow.querySelector('.dlg-prev');
    const next=flow.querySelector('.dlg-next');
    const reset=flow.querySelector('.dlg-reset');
    const ind=flow.querySelector('.step-indicator');
    let i=0;
    const render=()=>{
      bubbles.forEach((b,idx)=>{b.classList.toggle('show',idx<=i);});
      if(ind)ind.textContent=(i+1)+' / '+bubbles.length;
      if(prev)prev.disabled=i===0;
      if(next)next.disabled=i===bubbles.length-1;
    };
    if(next)next.addEventListener('click',()=>{if(i<bubbles.length-1){i++;render();}});
    if(prev)prev.addEventListener('click',()=>{if(i>0){i--;render();}});
    if(reset)reset.addEventListener('click',()=>{i=0;render();});
    render();
  });

  // ─── 结尾页小球动效：玻璃质感小球漂浮，鼠标靠近时被吸引跟随、过近时被推开 ───
  const ballCanvas=document.getElementById('ballCanvas');
  if(ballCanvas&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const box=ballCanvas.parentElement;
    const ctx=ballCanvas.getContext('2d');
    const DPR=Math.min(2,window.devicePixelRatio||1);
    let W=0,H=0,balls=[],raf=null,running=false;
    const mouse={x:-9999,y:-9999};
    const PALETTE=[
      {base:[37,99,235],rim:[18,54,138]},     // 深蓝
      {base:[78,133,191],rim:[38,84,140]},    // 中蓝
      {base:[137,170,204],rim:[84,116,152]},  // 浅蓝
      {base:[246,250,255],rim:[186,203,230]}, // 珍珠白
      {base:[235,228,212],rim:[186,176,154]}  // 米白
    ];
    const rnd=(a,b)=>a+Math.random()*(b-a);
    function resize(){
      W=box.clientWidth;H=box.clientHeight;
      ballCanvas.width=W*DPR;ballCanvas.height=H*DPR;
      ballCanvas.style.width=W+'px';ballCanvas.style.height=H+'px';
      ctx.setTransform(DPR,0,0,DPR,0,0);
      const target=Math.max(30,Math.min(60,Math.round(W*H/14000)));
      while(balls.length<target)balls.push(makeBall(true));
      balls.length=target;
    }
    function makeBall(anywhere){
      const p=PALETTE[Math.floor(Math.random()*PALETTE.length)];
      const r=rnd(13,44);
      return{
        p,r,
        x:rnd(r,W-r),y:anywhere?rnd(r,H-r):H+r,
        vx:rnd(-.25,.25),vy:rnd(-.2,.2),
        ph:rnd(0,Math.PI*2),wob:rnd(.004,.01),
        trail:[]
      };
    }
    function draw(){
      ctx.clearRect(0,0,W,H);
      const t=performance.now();
      for(const b of balls){
        // 漂浮 + 轻微上下摇曳
        b.ph+=b.wob;
        b.x+=b.vx+Math.sin(b.ph)*.15;
        b.y+=b.vy+Math.cos(b.ph*.8)*.1;
        // 鼠标交互：中距离吸引跟随，过近被推开
        const dx=mouse.x-b.x,dy=mouse.y-b.y;
        const dist=Math.hypot(dx,dy)||1;
        if(dist<300&&dist>60){
          b.vx+=dx/dist*.06;b.vy+=dy/dist*.06;
        }else if(dist<=60){
          b.vx-=dx/dist*.5;b.vy-=dy/dist*.5;
        }
        // 阻尼 + 限速
        b.vx*=.965;b.vy*=.965;
        const sp=Math.hypot(b.vx,b.vy);
        if(sp>2.6){b.vx*=2.6/sp;b.vy*=2.6/sp;}
        // 边界反弹
        if(b.x<b.r){b.x=b.r;b.vx=Math.abs(b.vx);}
        if(b.x>W-b.r){b.x=W-b.r;b.vx=-Math.abs(b.vx);}
        if(b.y<b.r){b.y=b.r;b.vy=Math.abs(b.vy);}
        if(b.y>H-b.r){b.y=H-b.r;b.vy=-Math.abs(b.vy);}
        // 玻璃球体：高光→本色→暗边
        const [br,bg,bb]=b.p.base,[rr,rg,rb]=b.p.rim;
        // 尾翼：移动时留下渐隐残影
        b.trail.push({x:b.x,y:b.y});
        if(b.trail.length>14)b.trail.shift();
        if(sp>.45){
          for(let i=0;i<b.trail.length;i++){
            const k=i/b.trail.length;
            ctx.beginPath();
            ctx.arc(b.trail[i].x,b.trail[i].y,b.r*(.18+.5*k),0,Math.PI*2);
            ctx.fillStyle='rgba('+br+','+bg+','+bb+','+(.04+.15*k).toFixed(3)+')';
            ctx.fill();
          }
        }
        const g=ctx.createRadialGradient(b.x-b.r*.35,b.y-b.r*.4,b.r*.1,b.x,b.y,b.r);
        g.addColorStop(0,'rgba('+(Math.round(br+(255-br)*.82))+','+(Math.round(bg+(255-bg)*.82))+','+(Math.round(bb+(255-bb)*.82))+',.95)');
        g.addColorStop(.55,'rgba('+br+','+bg+','+bb+',.88)');
        g.addColorStop(1,'rgba('+rr+','+rg+','+rb+',.92)');
        ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,Math.PI*2);
        ctx.fillStyle=g;ctx.fill();
        // 边缘细描边 + 高光点
        ctx.strokeStyle='rgba(255,255,255,.35)';ctx.lineWidth=1;ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(b.x-b.r*.38,b.y-b.r*.45,b.r*.22,b.r*.13,-.6,0,Math.PI*2);
        ctx.fillStyle='rgba(255,255,255,.85)';ctx.fill();
      }
      if(running)raf=requestAnimationFrame(draw);
    }
    function start(){if(!running){running=true;raf=requestAnimationFrame(draw);}}
    function stop(){running=false;if(raf)cancelAnimationFrame(raf);}
    box.addEventListener('pointermove',e=>{
      const rc=ballCanvas.getBoundingClientRect();
      mouse.x=e.clientX-rc.left;mouse.y=e.clientY-rc.top;
    });
    box.addEventListener('pointerleave',()=>{mouse.x=-9999;mouse.y=-9999;});
    window.addEventListener('resize',()=>{resize();});
    new IntersectionObserver(en=>{en[0].isIntersecting?start():stop();},{threshold:.05}).observe(ballCanvas);
    document.addEventListener('visibilitychange',()=>{document.hidden?stop():start();});
    resize();
    start();
  }

  // ─── 实习经历：地图式滑动切换 ───
  const jr=document.getElementById('journey');
  if(jr){
    const track=jr.querySelector('.jr-track');
    const items=Array.from(track.children);
    const stops=Array.from(jr.querySelectorAll('.jr-stop'));
    const line=jr.querySelector('.jr-line');
    const plane=jr.querySelector('.jr-plane');
    const count=jr.querySelector('.jr-count');
    const vp=jr.querySelector('.jr-viewport');
    const N=items.length;let cur=0;
    // 航线两端对齐首尾站点圆心
    const placeLine=()=>{
      const map=jr.querySelector('.jr-map').getBoundingClientRect();
      const f=stops[0].querySelector('.jr-dot').getBoundingClientRect();
      const l=stops[N-1].querySelector('.jr-dot').getBoundingClientRect();
      line.style.left=(f.left-map.left+f.width/2)+'px';
      line.style.width=(l.left+f.width/2-(f.left+f.width/2))+'px';
      line.style.right='auto';
      movePlane();
    };
    const movePlane=()=>{
      const d=stops[cur].querySelector('.jr-dot').getBoundingClientRect();
      const lr=line.getBoundingClientRect();
      plane.style.left=(d.left+d.width/2-lr.left)+'px';
    };
    const go=i=>{
      cur=((i%N)+N)%N;
      track.style.transform='translateX(-'+(cur*100)+'%)';
      stops.forEach((s,k)=>s.classList.toggle('on',k===cur));
      count.textContent=(cur+1)+' / '+N;
      setTimeout(movePlane,60);
    };
    stops.forEach((s,i)=>s.addEventListener('click',()=>go(i)));
    jr.querySelector('#jrPrev').addEventListener('click',()=>go(cur-1));
    jr.querySelector('#jrNext').addEventListener('click',()=>go(cur+1));
    // 拖拽 / 滑动切换
    let sx=null,sy=null;
    vp.addEventListener('pointerdown',e=>{sx=e.clientX;sy=e.clientY;});
    vp.addEventListener('pointerup',e=>{
      if(sx==null)return;
      const dx=e.clientX-sx,dy=e.clientY-sy;sx=null;sy=null;
      if(Math.abs(dx)>44&&Math.abs(dx)>Math.abs(dy))go(cur+(dx<0?1:-1));
    });
    vp.addEventListener('pointercancel',()=>{sx=null;sy=null;});
    window.addEventListener('resize',placeLine);
    window.addEventListener('load',placeLine);
    placeLine();
    go(0);
  }

})();
