/* 郭凯轩 作品集 · 首页交互（暗色编辑风） */
(function(){
  'use strict';

  /* ─── 中 / EN 双语 ─── */
  const I18N={
    zh:{
      'meta.title':'郭凯轩 · 作品集',
      'nav.about':'简介','nav.work':'实习','nav.projects':'项目','nav.skills':'技能','nav.resume':'下载简历','nav.contact':'联系我',
      
      'hero.l1':'内容有依据，','hero.l2':'产出能落地。',
      'hero.meta1':'求职意向：市场 / 运营 / 策划 / 用研','hero.meta2':'27 届 · 立即到岗',
      'hero.ctaWork':'查看作品','hero.ctaResume':'下载简历','hero.avatarCap':'Wuhan University · Class of 2027',
      'm1.label':'推荐位 CTR 提升','m1.sub':'4% → 15% · 快看世界 · 3 个月',
      'm2.label':'单部漫画周收入','m2.sub':'4K → 1W+ · 环比 +300%',
      'm3.label':'推荐位 PV 增长','m3.sub':'次周留存 +12%',
      'm4.label':'用户互动量增长','m4.sub':'评论区运营驱动',
      'data.footnote':'* 数据口径与简历一致，业务绝对值已脱敏。',
      'work.kicker':'Internship — 实习','work.h2':'两段实习，<em>两种问题的解决路径。</em>',
      'c1.role':'内容运营实习生','c1.h3':'快看世界（快看漫画）','c1.roleLine':'推荐位策略优化 / 数据监控与复盘 / 评论区运营',
      'c1.tag1':'CTR +3.75×','c1.tag2':'收入 +300%',
      'c1.st':'接手 CTR 4% 的漫画推荐位，负责内容策略调整与日常数据监控，同时运营作品评论区。',
      'c1.a':'人群定向由垂类包改为已读召回；盯 CTR、PV 等指标做日常调整；评论区运营；把过程整理为复盘 SOP。',
      'c1.r':'CTR 4% → 15%；单部漫画周收入 4K → 1W+（+300%）；推荐位 PV +22%（次周留存 +12%）；用户互动 +35%。',
      'c2.role':'游戏策划实习生','c2.h3':'哈米科技（海外休闲产品）','c2.roleLine':'系统设计文档 / 竞品拆解 / 用户反馈闭环',
      'c2.tag1':'系统设计文档','c2.tag2':'竞品拆解',
      'c2.st':'负责在研产品的系统设计：活动系统、核心玩法与数值，以及配套的提示逻辑与调研支撑。',
      'c2.a':'设计 24 小时限时连胜挑战活动（Lucky / Rare / Epic 三阶段）；撰写核心玩法与数值文档；定义道具提示逻辑；竞品拆解与海外用户反馈处理。',
      'c2.r':'系统设计文档与配套文档成套产出；竞品拆解与调研报告；老产品迭代与海外用户反馈闭环。',
      'case.cta':'查看 Case 详情',
      'works.kicker':'Projects — 项目','works.h2':'硕士期间的<em>两个项目。</em>','works.cta':'点击查看详情',
      'acc1f':'市场方向 · Marketing','acc1s':'市场','acc2f':'运营方向 · Operations','acc2s':'运营',
      'acc3f':'策划方向 · Planning','acc3s':'策划','acc4f':'用研方向 · UX Research','acc4s':'用研',
      'p1.tag':'Research · Master\'s','p1.h3':'SycoSense — AI 谄媚识别对话原型','p1.desc':'从需求边界、多工具尝试到端到端串联的完整研究记录。',
      'p2.tag':'Product Design · Master\'s','p2.h3':'NeuroArt — 疗愈 AI 智能剧场','p2.desc':'基于 EEG 脑电信号反馈的孤独症联觉疗愈项目，负责软件侧产品设计。',
      'campus.kicker':'Campus — 校园项目与竞赛','campus.h2':'在挑战中<em>完成闭环。</em>',
      'cap1':'"正大杯"第十三届全国大学生市场调查与分析大赛 · 本科组总决赛',
      'cap2':'参赛作品《宇宙红芳》：红色文化公众需求分析及传播效果评价',
      'cap3':'参赛作品分析页：红色文化传播力趋势分析',
      'cap4':'红色场馆市场调研 PPT：受访者画像与态度认知分析',
      'cap5':'邯邢矿业品牌营销方案 PPT：品牌形象设计',
      'cap6':'黄河文化传播策略 PPT',
      'method.kicker':'Method — 方法论','method.h2':'怎么做，<em>比会什么更重要。</em>',
      'me1.h3':'快速上手陌生领域','me1.p':'本科会计学 → 硕士图情/HCI → 内容运营 → 系统设计。每进入一个新领域，都能在几周内拿出可用成果：数据复盘 SOP、系统设计文档、可交互原型。',
      'me2.h3':'结论之前，先找依据','me2.p':'快看的数据归因、哈米的竞品拆解、SycoSense 的文献调研——同一个习惯：判断建立在数据、竞品或文献上，不建立在感觉上。',
      'me3.h3':'每段经历都留下方法','me3.p':'复盘 SOP、GDD 文档、设计决策记录——每段经历结束时的产出，是下一个人能直接接手的东西，而不只是一份结果数字。',
      'skill.kicker':'Toolkit — 技能','skill.h2':'用工具<em>提效。</em>',
      'sg1':'内容运营与数据分析','sg2':'系统策划与竞品研究','sg3':'AI 与交互原型',
      'st1':'CTR 分析','st2':'用户画像','st3':'SOP 复盘','st4':'Excel / 数据透视表',
      'st5':'活动逻辑设计','st6':'调研分析','st7':'竞品拆解',
      'contact.h2':'期待与您交流。','contact.resume':'下载简历 ↓',
      'foot.left':'© 2026 郭凯轩. All Rights Reserved.','foot.right':'市场 / 运营 / 策划 / 用研',
      'lb.prev':'上一张','lb.next':'下一张'
    },
    en:{
      'meta.title':'Guo Kaixuan · Portfolio',
      'nav.about':'About','nav.work':'Internship','nav.projects':'Projects','nav.skills':'Skills','nav.resume':'Resume','nav.contact':'Contact',
      
      'hero.l1':'Content with evidence.','hero.l2':'Output that ships.',
      'hero.meta1':'Target roles: Marketing / Operations / Planning / UX Research','hero.meta2':'Class of 2027 · Available immediately',
      'hero.ctaWork':'View Work','hero.ctaResume':'Download Resume','hero.avatarCap':'Wuhan University · Class of 2027',
      'm1.label':'Feature CTR lift','m1.sub':'4% → 15% · Kuaikan World · 3 months',
      'm2.label':'Weekly revenue per title','m2.sub':'4K → 10K+ · +300% MoM',
      'm3.label':'Feature PV growth','m3.sub':'Next-week retention +12%',
      'm4.label':'User engagement growth','m4.sub':'Driven by community ops',
      'data.footnote':'* Metrics consistent with resume; business absolute values anonymized.',
      'work.kicker':'Internship — 实习','work.h2':'Two internships, <em>two problem-solving paths.</em>',
      'c1.role':'Content Operations Intern','c1.h3':'Kuaikan World (Kuaikan Comics)','c1.roleLine':'Feature strategy / Data monitoring & review / Community ops',
      'c1.tag1':'CTR +3.75×','c1.tag2':'Revenue +300%',
      'c1.st':'Took over a comics recommendation slot with a 4% CTR, owning content strategy, daily data monitoring and comment-section operations.',
      'c1.a':'Switched audience targeting from vertical packages to read-recall; tuned strategy daily against CTR and PV; ran community operations; distilled the process into a review SOP.',
      'c1.r':'CTR 4% → 15%; weekly revenue per title 4K → 10K+ (+300%); feature PV +22% (next-week retention +12%); engagement +35%.',
      'c2.role':'Game Design Intern','c2.h3':'Hami Tech (Overseas Casual Games)','c2.roleLine':'System design docs / Competitor teardown / Feedback loop',
      'c2.tag1':'System design docs','c2.tag2':'Competitor teardown',
      'c2.st':'Owned system design for in-development products: event systems, core gameplay & numbers, plus hint logic and research support.',
      'c2.a':'Designed a 24-hour streak challenge event (Lucky / Rare / Epic stages); wrote the core gameplay & numbers doc; defined item hint logic; competitor teardown and overseas feedback handling.',
      'c2.r':'Complete sets of system design and supporting docs; competitor teardown and research report; legacy product iteration with an overseas feedback loop.',
      'case.cta':'View Case Details',
      'works.kicker':'Projects — 项目','works.h2':'Two projects from <em>my master\'s.</em>','works.cta':'View details',
      'acc1f':'市场方向 · Marketing','acc1s':'市场','acc2f':'运营方向 · Operations','acc2s':'运营',
      'acc3f':'策划方向 · Planning','acc3s':'策划','acc4f':'用研方向 · UX Research','acc4s':'用研',
      'p1.tag':'Research · Master\'s','p1.h3':'SycoSense — AI Sycophancy-Aware Dialogue Prototype','p1.desc':'A complete research record: from scoping requirements and multi-tool experiments to an end-to-end prototype.',
      'p2.tag':'Product Design · Master\'s','p2.h3':'NeuroArt — Therapeutic AI Theater','p2.desc':'An EEG-based AI theater for autism synesthesia therapy; I led software-side product design.',
      'campus.kicker':'Campus — Campus Projects & Competitions','campus.h2':'Close the loop <em>through challenges.</em>',
      'cap1':'"Zhengda Cup" 13th National College Market Research & Analysis Competition · National finals',
      'cap2':'Entry "Cosmos Red Fragrance": public demand analysis & communication evaluation of red culture',
      'cap3':'Entry analysis page: red-culture communication trend analysis',
      'cap4':'Red venue market research deck: respondent personas & attitude analysis',
      'cap5':'Hanxing Mining brand marketing deck: brand identity design',
      'cap6':'Yellow River culture communication strategy deck',
      'method.kicker':'Method — 方法论','method.h2':'How you work <em>matters more than what you know.</em>',
      'me1.h3':'Fast ramp-up in new domains','me1.p':'Accounting undergrad → MLIS/HCI master\'s → content operations → system design. In every new field I delivered usable output within weeks: a data review SOP, system design docs, an interactive prototype.',
      'me2.h3':'Evidence before conclusions','me2.p':'Data attribution at Kuaikan, competitor teardown at Hami, literature research for SycoSense — same habit: judgment built on data, competitors or literature, not on gut feeling.',
      'me3.h3':'Every experience leaves a method','me3.p':'Review SOPs, GDD documents, design-decision records — the output of each experience is something the next person can pick up directly, not just a result number.',
      'skill.kicker':'Toolkit — 技能','skill.h2':'Tools that <em>speed up the work.</em>',
      'sg1':'Content Ops & Data Analysis','sg2':'System Planning & Competitor Research','sg3':'AI & Interactive Prototyping',
      'st1':'CTR Analysis','st2':'User Profiling','st3':'SOP Retros','st4':'Excel / Pivot Tables',
      'st5':'Event Logic Design','st6':'Research & Analysis','st7':'Competitor Teardown',
      'contact.h2':'Let\'s talk.','contact.resume':'Download Resume ↓',
      'foot.left':'© 2026 Guo Kaixuan. All Rights Reserved.','foot.right':'Marketing / Operations / Planning / UX Research',
      'lb.prev':'Previous','lb.next':'Next'
    }
  };

  let lang='zh';
  try{lang=localStorage.getItem('lang')==='en'?'en':'zh';}catch(e){}
  const langBtn=document.getElementById('langBtn');
  let openDrawerKey=null;
  const applyLang=l=>{
    lang=l;
    try{localStorage.setItem('lang',l);}catch(e){}
    document.documentElement.lang=l==='en'?'en':'zh-CN';
    document.title=I18N[l]['meta.title'];
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k=el.getAttribute('data-i18n');
      if(I18N[l][k]!=null)el.innerHTML=I18N[l][k];
    });
    if(langBtn)langBtn.textContent=l==='zh'?'EN':'中';
    if(openDrawerKey&&drawer.classList.contains('open'))openDrawer(openDrawerKey,true);
    if(window.__refreshCf)window.__refreshCf();
  };
  if(langBtn)langBtn.addEventListener('click',()=>applyLang(lang==='zh'?'en':'zh'));
  applyLang(lang);

  /* ─── 移动端菜单 ─── */
  const menuBtn=document.querySelector('.menu-btn');
  const navLinks=document.getElementById('navLinks');
  if(menuBtn&&navLinks){
    menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
  }

  /* ─── 导航滚动高亮 ─── */
  const spyLinks=Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  if(spyLinks.length){
    const setActive=id=>spyLinks.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+id));
    spyLinks.forEach(a=>a.addEventListener('click',()=>{
      const id=a.getAttribute('href').slice(1);
      if(document.getElementById(id))setActive(id);
    }));
    const spy=new IntersectionObserver(es=>{
      es.forEach(en=>{if(en.isIntersecting)setActive(en.target.id);});
    },{rootMargin:'-25% 0px -65% 0px'});
    spyLinks.map(a=>document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean).forEach(s=>spy.observe(s));
  }

  /* ─── 入场：上浮淡入 + 交错 ─── */
  document.querySelectorAll('[data-stagger]').forEach(group=>{
    Array.from(group.children).forEach((child,i)=>{
      if(child.classList.contains('rv'))child.style.transitionDelay=(i*80)+'ms';
    });
  });
  const io=new IntersectionObserver(es=>{
    es.forEach(en=>{
      if(en.isIntersecting){
        en.target.classList.add('in');
        io.unobserve(en.target);
        setTimeout(()=>{en.target.style.transitionDelay='';},1400);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));

  /* ─── 数字 count-up ─── */
  const cntIo=new IntersectionObserver(es=>{
    es.forEach(en=>{
      if(!en.isIntersecting)return;
      const el=en.target;
      const target=parseFloat(el.dataset.target||'0');
      const suffix=el.dataset.suffix||'';
      const dur=1300,start=performance.now();
      const step=now=>{
        const p=Math.min(1,(now-start)/dur);
        const eased=1-Math.pow(1-p,3);
        const val=target*eased;
        el.textContent=(Number.isInteger(target)?Math.round(val):Number(val.toFixed(2)))+suffix;
        if(p<1)requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      cntIo.unobserve(el);
    });
  },{threshold:.5});
  document.querySelectorAll('.count').forEach(el=>cntIo.observe(el));

  /* ─── 悬停展开相册（accordion）+ 曲面环绕 ─── */
  const acc=document.getElementById('acc');
  if(acc){
    const items=Array.from(acc.querySelectorAll('.acc-item'));
    const curve=()=>{
      const ai=items.findIndex(i=>i.classList.contains('on'));
      items.forEach((it,i)=>{
        it.classList.remove('cur-l1','cur-l2','cur-r1','cur-r2');
        const d=i-ai;
        if(d===-1)it.classList.add('cur-l1');
        else if(d<=-2)it.classList.add('cur-l2');
        else if(d===1)it.classList.add('cur-r1');
        else if(d>=2)it.classList.add('cur-r2');
      });
    };
    const activate=el=>{items.forEach(i=>i.classList.toggle('on',i===el));curve();};
    items.forEach(it=>{
      it.addEventListener('mouseenter',()=>{if(matchMedia('(hover:hover)').matches)activate(it);});
      it.addEventListener('click',()=>activate(it));
    });
    curve();
  }

  /* ─── 校园竞赛：3D coverflow 轮播 ─── */
  const cfStage=document.getElementById('cfStage');
  let cfRefresh=null;
  if(cfStage){
    const cards=Array.from(cfStage.querySelectorAll('.cf-card'));
    const n=cards.length;
    let cur=1;
    const dots=document.getElementById('cfDots');
    const capEl=document.getElementById('cfCap');
    cards.forEach((_,i)=>{
      const d=document.createElement('button');
      d.className='cf-dot';d.type='button';
      d.setAttribute('aria-label','第'+(i+1)+'张');
      d.addEventListener('click',()=>{go(i);});
      dots.appendChild(d);
    });
    const capOf=i=>I18N[lang][cards[i].dataset.capkey]||'';
    const render=()=>{
      cards.forEach((c,i)=>{
        let rel=i-cur;
        if(rel>n/2)rel-=n;
        if(rel<-n/2)rel+=n;
        const a=Math.abs(rel);
        c.style.transform='translateX('+(rel*58)+'%) translateZ('+(-a*190)+'px) rotateY('+(rel*-30)+'deg) scale('+(1-a*.06)+')';
        c.style.zIndex=String(20-a);
        c.style.opacity=String(a>2?0:1-a*.18);
        c.style.pointerEvents=a>2?'none':'auto';
        c.classList.toggle('ctr',rel===0);
      });
      Array.from(dots.children).forEach((d,i)=>d.classList.toggle('on',i===cur));
      if(capEl)capEl.textContent=capOf(cur);
    };
    const go=i=>{cur=(i%n+n)%n;render();};
    document.getElementById('cfPrev').addEventListener('click',()=>go(cur-1));
    document.getElementById('cfNext').addEventListener('click',()=>go(cur+1));
    /* 拖拽 + 点击（拖动阈值内视为点击） */
    let downX=null,downY=null,downCard=null;
    cfStage.addEventListener('pointerdown',e=>{
      downX=e.clientX;downY=e.clientY;
      downCard=e.target.closest('.cf-card');
      cfStage.classList.add('dragging');
    });
    cfStage.addEventListener('pointerup',e=>{
      cfStage.classList.remove('dragging');
      if(downX==null)return;
      const dx=e.clientX-downX,dy=e.clientY-downY;
      downX=downY=null;
      if(Math.abs(dx)>44&&Math.abs(dx)>Math.abs(dy)){go(cur+(dx<0?1:-1));return;}
      if(Math.abs(dx)<10&&Math.abs(dy)<10&&downCard){
        const idx=cards.indexOf(downCard);
        if(idx===cur)openLb(cfGallery,idx);
        else go(idx);
      }
      downCard=null;
    });
    cfStage.addEventListener('pointercancel',()=>{downX=downY=null;downCard=null;cfStage.classList.remove('dragging');});
    /* 键盘（lightbox / drawer 打开时不响应） */
    document.addEventListener('keydown',e=>{
      if(lb.classList.contains('open')||drawer.classList.contains('open'))return;
      const r=cfStage.getBoundingClientRect();
      if(r.bottom<0||r.top>innerHeight)return;
      if(e.key==='ArrowLeft')go(cur-1);
      else if(e.key==='ArrowRight')go(cur+1);
    });
    const cfGallery=cards.map(c=>{
      const img=c.querySelector('img');
      return{src:img.getAttribute('src'),alt:img.getAttribute('alt')||'',cap:capOf(cards.indexOf(c))};
    });
    cfRefresh=()=>render();
    render();
    window.__refreshCf=()=>{if(cfRefresh)cfRefresh();};
  }

  /* ─── 联系区：跟随鼠标的玻璃小球 ─── */
  const bc=document.getElementById('ballCanvas');
  if(bc){
    const ctx=bc.getContext('2d');
    const contactEl=bc.parentElement;
    const COLORS=[
      [147,197,253],[191,219,254],[252,211,77],[253,230,138],[203,213,225],[253,186,116]
    ];
    let balls=[],trail=[],raf=null,running=false;
    const mouse={x:-9999,y:-9999};
    const DPR=Math.min(devicePixelRatio||1,2);
    const sizeCanvas=()=>{
      const r=contactEl.getBoundingClientRect();
      bc.width=r.width*DPR;bc.height=r.height*DPR;
      ctx.setTransform(DPR,0,0,DPR,0,0);
      const target=Math.max(40,Math.min(95,Math.round(r.width*r.height/9500)));
      while(balls.length<target){
        const a=Math.random()*Math.PI*2;
        balls.push({
          x:Math.random()*r.width,y:Math.random()*r.height,
          vx:Math.cos(a)*.4,vy:Math.sin(a)*.4,
          r:3+Math.random()*4.5,
          c:COLORS[Math.floor(Math.random()*COLORS.length)]
        });
      }
      balls.length=target;
    };
    const drawBall=(x,y,r,c,alpha)=>{
      const g=ctx.createRadialGradient(x-r*.35,y-r*.35,r*.15,x,y,r);
      g.addColorStop(0,'rgba('+c[0]+','+c[1]+','+c[2]+','+(.9*alpha)+')');
      g.addColorStop(1,'rgba('+c[0]+','+c[1]+','+c[2]+','+(.35*alpha)+')');
      ctx.fillStyle=g;
      ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
    };
    const tick=()=>{
      const W=bc.width/DPR,H=bc.height/DPR;
      ctx.clearRect(0,0,W,H);
      trail.forEach(t=>{t.life-=.055;});
      trail=trail.filter(t=>t.life>0);
      trail.forEach(t=>drawBall(t.x,t.y,t.r*t.life,t.c,t.life*.5));
      balls.forEach(b=>{
        const dx=mouse.x-b.x,dy=mouse.y-b.y,d=Math.hypot(dx,dy);
        if(d>60&&d<280){b.vx+=dx/d*.045;b.vy+=dy/d*.045;}
        else if(d<=60&&d>0){b.vx-=dx/d*.5;b.vy-=dy/d*.5;}
        b.vx*=.985;b.vy*=.985;
        const sp=Math.hypot(b.vx,b.vy);
        if(sp>2.4){b.vx*=2.4/sp;b.vy*=2.4/sp;}
        b.x+=b.vx;b.y+=b.vy;
        if(b.x<b.r){b.x=b.r;b.vx*=-.8;}
        if(b.x>W-b.r){b.x=W-b.r;b.vx*=-.8;}
        if(b.y<b.r){b.y=b.r;b.vy*=-.8;}
        if(b.y>H-b.r){b.y=H-b.r;b.vy*=-.8;}
        if(sp>.5)trail.push({x:b.x,y:b.y,r:b.r,c:b.c,life:1});
        drawBall(b.x,b.y,b.r,b.c,1);
      });
      if(running)raf=requestAnimationFrame(tick);
    };
    const start=()=>{if(!running){running=true;raf=requestAnimationFrame(tick);}};
    const stop=()=>{running=false;if(raf)cancelAnimationFrame(raf);};
    sizeCanvas();
    addEventListener('resize',()=>{sizeCanvas();});
    contactEl.addEventListener('pointermove',e=>{
      const r=bc.getBoundingClientRect();
      mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;
    });
    contactEl.addEventListener('pointerleave',()=>{mouse.x=-9999;mouse.y=-9999;});
    const io=new IntersectionObserver(es=>{
      es.forEach(en=>{en.isIntersecting?start():stop();});
    },{threshold:.05});
    io.observe(contactEl);
    document.addEventListener('visibilitychange',()=>{
      document.hidden?stop():(contactEl.getBoundingClientRect().top<innerHeight&&start());
    });
  }

  /* ─── Lightbox（图集放大：数组 + 计数） ─── */
  const lb=document.getElementById('lightbox');
  const lbImg=document.getElementById('lbImg');
  const lbCap=document.getElementById('lbCap');
  const lbCount=document.getElementById('lbCount');
  const lbPrev=document.getElementById('lbPrev');
  const lbNext=document.getElementById('lbNext');
  let lbGallery=[],lbIdx=0;
  const renderLb=()=>{
    const it=lbGallery[lbIdx]||{src:'',alt:''};
    lbImg.src=it.src;lbImg.alt=it.alt||'';
    lbCap.textContent=it.cap||'';
    const many=lbGallery.length>1;
    lbCount.textContent=many?(lbIdx+1)+' / '+lbGallery.length:'';
    lbPrev.hidden=!many;lbNext.hidden=!many;
  };
  const openLb=(gallery,idx)=>{
    if(!gallery.length)return;
    lbGallery=gallery;lbIdx=idx||0;
    renderLb();lb.classList.add('open');lb.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  };
  const closeLb=()=>{
    lb.classList.remove('open');lb.setAttribute('aria-hidden','true');
    document.body.style.overflow=drawer.classList.contains('open')?'hidden':'';
    lbImg.removeAttribute('src');
  };
  const stepLb=s=>{
    if(lbGallery.length<2)return;
    lbIdx=(lbIdx+s+lbGallery.length)%lbGallery.length;renderLb();
  };
  if(lb){
    lbPrev.addEventListener('click',e=>{e.stopPropagation();stepLb(-1);});
    lbNext.addEventListener('click',e=>{e.stopPropagation();stepLb(1);});
    document.getElementById('lbClose').addEventListener('click',e=>{e.stopPropagation();closeLb();});
    lb.addEventListener('click',e=>{if(!e.target.closest('.lb-fig')&&!e.target.closest('.lb-nav')&&!e.target.closest('.lb-close'))closeLb();});
    document.addEventListener('keydown',e=>{
      if(!lb.classList.contains('open'))return;
      if(e.key==='Escape')closeLb();
      else if(e.key==='ArrowLeft')stepLb(-1);
      else if(e.key==='ArrowRight')stepLb(1);
    });
    let tx=0;
    lb.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
    lb.addEventListener('touchend',e=>{
      const dx=e.changedTouches[0].clientX-tx;
      if(Math.abs(dx)>50)stepLb(dx>0?-1:1);
    },{passive:true});
  }
  /* ─── Case 详情抽屉 ─── */
  const MDATA={
    kuaikan:{
      tag:'实习 · 内容运营 · 2025.05 – 2025.08',
      title:'快看世界（快看漫画）· 推荐位策略 Case',
      body:`
        <div class="m-label">S·T 背景与任务</div>
        <div class="m-grid"><div class="m-card wide"><div class="d">接手时推荐位 CTR 只有 4%。我负责这个漫画推荐位的内容策略调整与日常数据监控，同时运营作品评论区。</div></div></div>
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
          <div class="mc-viewport"><div class="mc-track">
            <div class="mc-slide"><img src="assets/kk-data.png" alt="作品排期与数据跟踪表"><div class="mc-cap">作品排期与数据跟踪表（Excel）：曝光、CTR 与人群包规模，重点作品已标注</div></div>
            <div class="mc-slide"><img src="assets/kuikan-1.jpg" alt="站内推广素材示例"><div class="mc-cap">站内推广素材示例</div></div>
            <div class="mc-slide"><img src="assets/kk-banner.jpg" alt="作品宣传图"><div class="mc-cap">站内推广素材：作品宣传图</div></div>
            <div class="mc-slide"><img src="assets/kk-poster.jpg" alt="作品宣传图"><div class="mc-cap">站内推广素材：作品宣传图</div></div>
            <div class="mc-slide"><img src="assets/kuikan-4.jpg" alt="开屏广告素材"><div class="mc-cap">开屏广告素材</div></div>
            <div class="mc-slide"><img src="assets/kk-office.jpg" alt="快看漫画办公室"><div class="mc-cap">快看漫画办公室</div></div>
            <div class="mc-slide"><img src="assets/kk-badge.jpg" alt="实习期间"><div class="mc-cap">实习期间：工牌与作品立牌</div></div>
          </div></div>
        </div>
        <div class="m-note">业务绝对值已脱敏，数据口径与简历一致。</div>`
    },
    hami:{
      tag:'实习 · 游戏策划 · 2026.05 – 2026.08',
      title:'哈米科技 · 系统设计与市场洞察',
      body:`
        <div class="m-label">S·T 背景与任务</div>
        <div class="m-grid"><div class="m-card wide"><div class="d">游戏策划实习生，负责在研产品的系统设计：活动系统、核心玩法与数值，以及配套的提示逻辑；同时承担海外市场趋势监测与竞品调研支撑。</div></div></div>
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
        <div class="m-label">文档截图</div>
        <div class="m-imgs">
          <div class="m-img"><img src="assets/hami-gdd1.png" alt="连胜挑战活动文档截图" data-zoom><div class="m-cap">原文档截图（已脱敏）：连胜挑战活动系统设计</div></div>
          <div class="m-img"><img src="assets/hami-gdd2.png" alt="核心玩法与数值文档截图" data-zoom><div class="m-cap">原文档截图（已脱敏）：核心玩法与数值</div></div>
        </div>
        <div class="m-note">文档原文为内部飞书文档，此处按原文结构重排并脱敏：隐去公司内部信息与部分数值。</div>`
    },
    sycosense:{
      tag:'研究项目 · 硕士 · 2026',
      title:'SycoSense · AI 谄媚识别对话原型',
      body:`
        <div class="m-label">S·T 背景与任务</div>
        <div class="m-grid"><div class="m-card wide"><div class="d">硕士研究项目。针对用户求助时 AI 直接给答案、用户得不到锻炼的问题，设计一个教育场景的对话反馈原型。</div></div></div>
        <div class="m-label">A 行动</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">划定需求边界</div><div class="d">只做教育场景的对话反馈，明确不做通用助手</div></div>
          <div class="m-card"><div class="t">多工具分工验证</div><div class="d">Claude 写三阶段流程初稿，Coze 搭对话逻辑跑剧本验证，Lovable 生成可交互原型</div></div>
          <div class="m-card"><div class="t">设计三阶段引导流程</div><div class="d">先肯定、再引导、最后反思，替代「直接给答案」</div></div>
        </div>
        <div class="m-label">R 结果 / 产出</div>
        <div class="m-img" style="margin-top:14px"><img src="assets/sycosense-arch.png" alt="SycoSense 架构与交互流程图" data-zoom></div>
        <div class="m-grid" style="margin-top:12px">
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
        <div class="m-grid"><div class="m-card wide"><div class="d">《NeuroArt：基于 EEG 脑电信号反馈的孤独症联觉疗愈 AI 智能剧场》（2025.11 – 2025.12），硬件 + 软件结合的产品设计课题，我负责软件侧产品设计。</div></div></div>
        <div class="m-label">A 行动</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">规划软件功能模块</div><div class="d">负责疗愈记录、EEG 神经反馈、个人信息等核心模块的产品设计</div></div>
          <div class="m-card"><div class="t">设计硬件-软件联动架构</div><div class="d">打通 EEG 监测设备、音乐播放与气味扩散系统，与软件侧 AI 算法、用户管理模块的协同</div></div>
        </div>
        <div class="m-label">R 结果 / 产出</div>
        <div class="m-img" style="margin-top:14px"><img src="assets/neuroart.png" alt="NeuroArt 项目设计稿" data-zoom></div>
        <div class="m-grid" style="margin-top:12px">
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
        <div class="m-grid"><div class="m-card wide"><div class="d">When I took over, the feature's CTR was only 4%. I was responsible for content strategy and daily data monitoring for this comics recommendation slot, and also ran the comment-section operations.</div></div></div>
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
          <div class="mc-viewport"><div class="mc-track">
            <div class="mc-slide"><img src="assets/kk-data.png" alt="Content schedule & tracking sheet"><div class="mc-cap">Content schedule & tracking sheet (Excel): impressions, CTR and audience-pack size, key titles highlighted</div></div>
            <div class="mc-slide"><img src="assets/kuikan-1.jpg" alt="In-app promotion material"><div class="mc-cap">In-app promotion material sample</div></div>
            <div class="mc-slide"><img src="assets/kk-banner.jpg" alt="Promotional artwork"><div class="mc-cap">In-app promotion: title artwork</div></div>
            <div class="mc-slide"><img src="assets/kk-poster.jpg" alt="Title artwork"><div class="mc-cap">In-app promotion: title artwork</div></div>
            <div class="mc-slide"><img src="assets/kuikan-4.jpg" alt="Splash ad material"><div class="mc-cap">Splash-screen ad material</div></div>
            <div class="mc-slide"><img src="assets/kk-office.jpg" alt="Kuaikan office"><div class="mc-cap">Kuaikan Comics office</div></div>
            <div class="mc-slide"><img src="assets/kk-badge.jpg" alt="During the internship"><div class="mc-cap">During the internship: badge & figurine</div></div>
          </div></div>
        </div>
        <div class="m-note">Business absolute values anonymized; metrics consistent with resume.</div>`
    },
    hami:{
      tag:'Internship · Game Design · 2026.05 – 2026.08',
      title:'Hami Tech · System Design & Market Insights',
      body:`
        <div class="m-label">S·T Background & Task</div>
        <div class="m-grid"><div class="m-card wide"><div class="d">Game design intern responsible for system design of in-development products: event systems, core gameplay & numerical tuning and hint logic, plus overseas market trend monitoring and research support.</div></div></div>
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
        <div class="m-label">Document Screenshots</div>
        <div class="m-imgs">
          <div class="m-img"><img src="assets/hami-gdd1.png" alt="Streak challenge event doc screenshot" data-zoom><div class="m-cap">Original doc screenshot (anonymized): streak challenge event system design</div></div>
          <div class="m-img"><img src="assets/hami-gdd2.png" alt="Core gameplay doc screenshot" data-zoom><div class="m-cap">Original doc screenshot (anonymized): core gameplay & numbers</div></div>
        </div>
        <div class="m-note">Original docs were internal Feishu documents, restructured and anonymized for this portfolio: internal company information and some values removed.</div>`
    },
    sycosense:{
      tag:'Research · Master\'s · 2026',
      title:'SycoSense · AI Sycophancy-Aware Dialogue Prototype',
      body:`
        <div class="m-label">S·T Background & Task</div>
        <div class="m-grid"><div class="m-card wide"><div class="d">Master's research project. Addressing the problem that AI gives direct answers when users ask for help — leaving users untrained — I designed a dialogue feedback prototype for learning scenarios.</div></div></div>
        <div class="m-label">A Actions</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">Scoped the problem</div><div class="d">Dialogue feedback for learning scenarios only — explicitly not a general assistant</div></div>
          <div class="m-card"><div class="t">Multi-tool validation</div><div class="d">Claude drafted the three-stage flow, Coze prototyped the dialogue logic with scripted runs, Lovable generated the interactive prototype</div></div>
          <div class="m-card"><div class="t">Three-stage guidance flow</div><div class="d">Affirm first, then guide, finally reflect — replacing "just give the answer"</div></div>
        </div>
        <div class="m-label">R Results / Deliverables</div>
        <div class="m-img" style="margin-top:14px"><img src="assets/sycosense-arch.png" alt="SycoSense architecture & interaction flow" data-zoom></div>
        <div class="m-grid" style="margin-top:12px">
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
        <div class="m-grid"><div class="m-card wide"><div class="d">"NeuroArt: An AI Smart Theater for autism synesthesia therapy based on EEG feedback" (2025.11 – 2025.12), a hardware + software product design project. I was responsible for software-side product design.</div></div></div>
        <div class="m-label">A Actions</div>
        <div class="m-grid">
          <div class="m-card"><div class="t">Planned software feature modules</div><div class="d">Product design for therapy records, EEG neuro-feedback and personal info modules</div></div>
          <div class="m-card"><div class="t">Hardware–software linkage architecture</div><div class="d">Connecting EEG monitoring, music playback and scent diffusion with software-side AI algorithms and user management</div></div>
        </div>
        <div class="m-label">R Results / Deliverables</div>
        <div class="m-img" style="margin-top:14px"><img src="assets/neuroart.png" alt="NeuroArt design plates" data-zoom></div>
        <div class="m-grid" style="margin-top:12px">
          <div class="m-card"><div class="n">1</div><div class="t">Feature requirements doc</div><div class="d">Complete functional definition of the hardware–software linkage</div></div>
          <div class="m-card"><div class="n">1</div><div class="t">Complete design set</div><div class="d">Therapy recommendations / real-time monitoring & AIGC customization / neuro-feedback tagging / 270° immersive theater</div></div>
        </div>`
    }
  };

  const overlay=document.getElementById('overlay');
  const drawer=document.getElementById('drawer');
  const drawerTag=document.getElementById('drawerTag');
  const drawerBody=document.getElementById('drawerBody');

  /* 平面图集轮播：track 平移 + 1 / N 计数 */
  const initCarousel=car=>{
    const track=car.querySelector('.mc-track');
    const slides=Array.from(track.children);
    if(!slides.length)return;
    const total=slides.length;
    const ctrl=document.createElement('div');
    ctrl.className='mc-ctrl';
    ctrl.innerHTML='<span class="mc-ind"></span><div class="mc-btns"><button class="mc-btn mc-prev" type="button" aria-label="上一张">←</button><button class="mc-btn mc-next" type="button" aria-label="下一张">→</button></div>';
    car.appendChild(ctrl);
    const ind=ctrl.querySelector('.mc-ind');
    let ci=0;
    const render=()=>{
      track.style.transform='translateX(-'+(ci*100)+'%)';
      ind.textContent=(ci+1)+' / '+total;
    };
    const go=n=>{ci=(n%total+total)%total;render();};
    ctrl.querySelector('.mc-prev').addEventListener('click',()=>go(ci-1));
    ctrl.querySelector('.mc-next').addEventListener('click',()=>go(ci+1));
    let sx=null,sy=null;
    car.addEventListener('pointerdown',e=>{sx=e.clientX;sy=e.clientY;});
    car.addEventListener('pointerup',e=>{
      if(sx==null)return;
      const dx=e.clientX-sx,dy=e.clientY-sy;sx=null;sy=null;
      if(Math.abs(dx)>44&&Math.abs(dx)>Math.abs(dy))go(ci+(dx<0?1:-1));
    });
    car.addEventListener('pointercancel',()=>{sx=null;sy=null;});
    render();
  };

  const openDrawer=(key,silent)=>{
    const D=(lang==='en')?MDATA_EN:MDATA;
    const d=D[key]||MDATA[key];
    if(!d)return;
    openDrawerKey=key;
    drawerTag.textContent=d.tag;
    drawerBody.innerHTML='<h3>'+d.title+'</h3><div>'+d.body+'</div>';
    const car=drawerBody.querySelector('.m-carousel');
    if(car)initCarousel(car);
    /* 抽屉内可放大图片 */
    const zooms=Array.from(drawerBody.querySelectorAll('img[data-zoom]'));
    zooms.forEach(img=>{
      img.addEventListener('click',()=>{
        const cap=img.closest('.m-img,.m-imgs');
        const capEl=img.parentElement.querySelector('.m-cap');
        openLb([{src:img.getAttribute('src'),alt:img.getAttribute('alt')||'',cap:capEl?capEl.textContent.trim():''}],0);
      });
    });
    if(!drawer.classList.contains('open')){
      drawer.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow='hidden';
    }
    if(!silent)drawer.scrollTop=0;
  };
  const closeDrawer=()=>{
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow='';
    openDrawerKey=null;
  };
  document.querySelectorAll('[data-modal]').forEach(el=>{
    el.addEventListener('click',()=>openDrawer(el.dataset.modal));
    el.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();openDrawer(el.dataset.modal);}
    });
  });
  document.getElementById('drawerClose').addEventListener('click',closeDrawer);
  overlay.addEventListener('click',closeDrawer);
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&drawer.classList.contains('open')&&!lb.classList.contains('open'))closeDrawer();
  });
})();
