import{r as k,j as e}from"./index-BD8iojE4.js";import{e as G,g as B,a as I,S as R,N as O,P as D,A,b as V}from"./pagination-CTIjrfTF.js";import{e as H,c as W,a as q}from"./create-shadow-BbgGvw9J.js";function F({swiper:a,duration:g,transformElements:l,allSlides:x}){const{activeIndex:w}=a;if(a.params.virtualTranslate&&g!==0){let d=!1,t;t=l,t.forEach(n=>{G(n,()=>{if(d||!a||a.destroyed)return;d=!0,a.animating=!1;const s=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});a.wrapperEl.dispatchEvent(s)})})}}function X({swiper:a,extendParams:g,on:l}){g({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const x=t=>typeof t=="string"?t:`${t}px`;H({effect:"creative",swiper:a,on:l,setTranslate:()=>{const{slides:t,wrapperEl:n,slidesSizesGrid:s}=a,r=a.params.creativeEffect,{progressMultiplier:o}=r,y=a.params.centeredSlides,S=B(a);if(y){const b=s[0]/2-a.params.slidesOffsetBefore||0;n.style.transform=`translateX(calc(50% - ${b}px))`}for(let b=0;b<t.length;b+=1){const c=t[b],M=c.progress,p=Math.min(Math.max(c.progress,-r.limitProgress),r.limitProgress);let m=p;y||(m=Math.min(Math.max(c.originalProgress,-r.limitProgress),r.limitProgress));const E=c.swiperSlideOffset,f=[a.params.cssMode?-E-a.translate:-E,0,0],v=[0,0,0];let j=!1;a.isHorizontal()||(f[1]=f[0],f[0]=0);let i={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};p<0?(i=r.next,j=!0):p>0&&(i=r.prev,j=!0),f.forEach((h,u)=>{f[u]=`calc(${h}px + (${x(i.translate[u])} * ${Math.abs(p*o)}))`}),v.forEach((h,u)=>{let C=i.rotate[u]*Math.abs(p*o);v[u]=C}),c.style.zIndex=-Math.abs(Math.round(M))+t.length;const $=f.join(", "),P=`rotateX(${S(v[0])}deg) rotateY(${S(v[1])}deg) rotateZ(${S(v[2])}deg)`,z=m<0?`scale(${1+(1-i.scale)*m*o})`:`scale(${1-(1-i.scale)*m*o})`,L=m<0?1+(1-i.opacity)*m*o:1-(1-i.opacity)*m*o,T=`translate3d(${$}) ${P} ${z}`;if(j&&i.shadow||!j){let h=c.querySelector(".swiper-slide-shadow");if(!h&&i.shadow&&(h=W("creative",c)),h){const u=r.shadowPerProgress?p*(1/r.limitProgress):p;h.style.opacity=Math.min(Math.max(Math.abs(u),0),1)}}const N=q(r,c);N.style.transform=T,N.style.opacity=L,i.origin&&(N.style.transformOrigin=i.origin)}},setTransition:t=>{const n=a.slides.map(s=>I(s));n.forEach(s=>{s.style.transitionDuration=`${t}ms`,s.querySelectorAll(".swiper-slide-shadow").forEach(r=>{r.style.transitionDuration=`${t}ms`})}),F({swiper:a,duration:t,transformElements:n,allSlides:!0})},perspective:()=>a.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!a.params.cssMode})})}function K(){const[a,g]=k.useState(0),l=k.useRef(null),x=[{id:1,title:"Стрижки",category:"Женские стрижки",colorGradient:"from-blue-50 to-indigo-50",bgGradient:"from-blue-500/10 to-indigo-500/10",images:[{id:1,src:"https://avatars.mds.yandex.net/i?id=c670bc41d12037800e35b10f2aebc7cfc2d6cb2c-9871231-images-thumbs&n=13",alt:"Каре с челкой",description:"Классическое каре"},{id:2,src:"https://avatars.mds.yandex.net/i?id=b2491edaf6c81baa7523ebe54a97f370abb17a1c-5888889-images-thumbs&n=13",alt:"Длинное каскад",description:"Каскад на длинные волосы"},{id:3,src:"https://avatars.mds.yandex.net/i?id=8edcfb9f4fc822dc3901e385611ec413f8c9476f-5228234-images-thumbs&n=13",alt:"Боб-каре",description:"Градуированный боб"},{id:4,src:"https://avatars.mds.yandex.net/i?id=59be07dc2eeaea5bd2bae7452022bd73c6ee4df6-4937453-images-thumbs&n=13",alt:"Асимметричная",description:"Асимметрия с удлинением"}]},{id:2,title:"Окрашивание",category:"Сложное окрашивание",colorGradient:"from-rose-50 to-pink-50",bgGradient:"from-rose-500/10 to-pink-500/10",images:[{id:5,src:"https://avatars.mds.yandex.net/i?id=293b52fd7cc00e93f1326c09ba26e74a2ccb8cc9-5265152-images-thumbs&n=13",alt:"Балаяж",description:"Балаяж на темные волосы"},{id:6,src:"https://avatars.mds.yandex.net/i?id=c6f5ccc2f7f302aa5e258b04e7368d130f6c487d-5539560-images-thumbs&n=13",alt:"Мелирование",description:"Мелирование по всей длине"},{id:7,src:"https://avatars.mds.yandex.net/i?id=e4777ceae8431b0bd738961b228293baf8c232af-12571073-images-thumbs&n=13",alt:"Омбре",description:"Плавное омбре"}]},{id:3,title:"Укладки",category:"Вечерние укладки",colorGradient:"from-amber-50 to-orange-50",bgGradient:"from-amber-500/10 to-orange-500/10",images:[{id:9,src:"https://avatars.mds.yandex.net/i?id=89d26d5289be429e03a7f4a2408a538c409ab01b-4406871-images-thumbs&n=13",alt:"Локоны",description:"Объемные локоны"},{id:10,src:"https://avatars.mds.yandex.net/i?id=057f04e7de965a3bed170c85d4f1c59000ffb219-10906089-images-thumbs&n=13",alt:"Гладкие волосы",description:"Идеально гладкие"},{id:11,src:"https://avatars.mds.yandex.net/i?id=424d1d70314a13d41bec3839872e2753389b58b7-3939383-images-thumbs&n=13",alt:"Пучок",description:"Вечерний пучок с косами"},{id:12,src:"https://avatars.mds.yandex.net/i?id=045c806be0a188f21b7f3a6ec2c63303a2166356-7766812-images-thumbs&n=13",alt:"Волны",description:"Морские волны"}]},{id:4,title:"Мужские",category:"Мужские стрижки",colorGradient:"from-emerald-50 to-teal-50",bgGradient:"from-emerald-500/10 to-teal-500/10",images:[{id:13,src:"https://avatars.mds.yandex.net/i?id=3e854c05e07a9dce4faa72b51966aacaf83b20f9-5231317-images-thumbs&n=13",alt:"Фейд",description:"Классический фейд"},{id:14,src:"https://avatars.mds.yandex.net/i?id=56c75e441718d76a9bb01b64caea0ee5a5d1b70f-5558158-images-thumbs&n=13",alt:"Бокс",description:"Короткая бокс"},{id:15,src:"https://avatars.mds.yandex.net/i?id=445511573ffc802ce04dbe528b0c222f42ee6fbf-5219700-images-thumbs&n=13",alt:"Гранж",description:"Стрижка с текстурой"},{id:16,src:"https://avatars.mds.yandex.net/i?id=aad93ac10b8899d6369f44e2c2978814b246df1f-12421240-images-thumbs&n=13",alt:"Помпадур",description:"Классический помпадур"}]}],w=[[{colSpan:"col-span-2",rowSpan:"row-span-2"},{colSpan:"col-span-1",rowSpan:"row-span-1"},{colSpan:"col-span-1",rowSpan:"row-span-1"},{colSpan:"col-span-2",rowSpan:"row-span-1"}],[{colSpan:"col-span-1",rowSpan:"row-span-2"},{colSpan:"col-span-2",rowSpan:"row-span-1"},{colSpan:"col-span-2",rowSpan:"row-span-1"},{colSpan:"col-span-1",rowSpan:"row-span-2"}],[{colSpan:"col-span-1",rowSpan:"row-span-1"},{colSpan:"col-span-2",rowSpan:"row-span-2"},{colSpan:"col-span-1",rowSpan:"row-span-1"},{colSpan:"col-span-2",rowSpan:"row-span-1"}]],d=w[a%w.length];return k.useEffect(()=>{const t=s=>{if(!(s.target.closest(".swiper")||s.target.closest(".custom-prev")||s.target.closest(".custom-next")))return s.preventDefault(),s.stopPropagation(),!1},n={passive:!1};return document.addEventListener("wheel",t,n),document.addEventListener("touchmove",t,n),()=>{document.removeEventListener("wheel",t),document.removeEventListener("touchmove",t)}},[]),e.jsxs("div",{className:"relative w-full h-full overflow-hidden",children:[e.jsx(R,{ref:l,modules:[X,O,D,A],effect:"creative",creativeEffect:{prev:{shadow:!0,translate:["-120%",0,-500],rotate:[0,0,-15]},next:{shadow:!0,translate:["120%",0,-500],rotate:[0,0,15]}},speed:800,parallax:!0,pagination:{clickable:!0,type:"bullets",dynamicBullets:!0},navigation:{nextEl:".custom-next",prevEl:".custom-prev"},autoplay:{delay:4e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,onSlideChange:t=>g(t.realIndex),className:"h-full w-full",style:{overflow:"hidden"},children:x.map((t,n)=>e.jsx(V,{className:"!h-full !flex items-center justify-center",children:e.jsxs("div",{className:"relative w-full max-w-6xl h-[85vh] mx-auto flex flex-col lg:flex-row gap-6 p-4 md:p-8",children:[e.jsx("div",{className:"lg:w-1/3 flex flex-col",children:e.jsxs("div",{className:"space-y-4 lg:space-y-6 flex-grow overflow-y-auto pr-2 lg:pr-4 custom-scrollbar",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"inline-flex items-center gap-2",children:e.jsx("span",{className:"text-xs font-medium text-gray-600 uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full",children:t.category})}),e.jsx("h2",{className:"text-2xl lg:text-3xl font-bold text-gray-900 leading-tight",children:t.title}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsxs("p",{className:"text-gray-700 leading-relaxed text-sm lg:text-base",children:[e.jsxs("span",{className:"font-semibold text-gray-900",children:[t.images.length," эксклюзивных работ"]}),", демонстрирующих высочайший уровень мастерства"]})]})]}),e.jsxs("div",{className:"pt-2 lg:pt-4",children:[e.jsx("div",{className:"flex items-center gap-2 mb-3 lg:mb-4",children:e.jsx("svg",{className:"w-5 h-5 text-gray-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})})}),e.jsx("div",{className:"grid grid-cols-2 gap-2 lg:gap-3 mx-auto w-full max-w-[200px]",children:d.map((s,r)=>{const o=t.images[r],y=s.colSpan.includes("col-span-2")||s.rowSpan.includes("row-span-2");return e.jsxs("div",{className:`relative group overflow-hidden rounded-md lg:rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 ${y?"col-span-2":"col-span-1"}`,style:{aspectRatio:s.rowSpan.includes("row-span-2")?"2/1":"1/1"},children:[o?e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("img",{src:o.src,alt:o.alt,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"})]}):e.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${t.bgGradient}`}),e.jsx("div",{className:"relative p-1.5",children:e.jsx("div",{className:"w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm",children:e.jsx("span",{className:"text-xs font-bold text-gray-900",children:r+1})})})]},r)})})]})]})}),e.jsx("div",{className:"lg:w-2/3 h-full",children:e.jsx("div",{className:`bg-gradient-to-br ${t.colorGradient} rounded-2xl p-6 h-full shadow-xl overflow-hidden`,children:e.jsx("div",{className:"grid grid-cols-3 grid-rows-2 gap-4 h-full",children:t.images.map((s,r)=>e.jsxs("div",{className:`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${d[r]?.colSpan||""} ${d[r]?.rowSpan||""}`,style:{contain:"content"},children:[e.jsx("img",{src:s.src,alt:s.alt,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",loading:"lazy",onDragStart:o=>o.preventDefault()}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300",children:[e.jsx("p",{className:"text-sm font-medium truncate",children:s.description}),e.jsx("p",{className:"text-xs opacity-90 truncate",children:s.alt})]})}),e.jsxs("div",{className:"absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-full",children:["#",r+1]})]},s.id))})})})]})},t.id))}),e.jsx("div",{className:"absolute top-1/2 left-4 transform -translate-y-1/2 z-30",children:e.jsx("button",{onClick:()=>l.current?.swiper.slidePrev(),className:"custom-prev w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer group active:scale-95",children:e.jsx("svg",{className:"w-6 h-6 text-gray-800 group-hover:text-purple-600 transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})})}),e.jsx("div",{className:"absolute top-1/2 right-4 transform -translate-y-1/2 z-30",children:e.jsx("button",{onClick:()=>l.current?.swiper.slideNext(),className:"custom-next w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer group active:scale-95",children:e.jsx("svg",{className:"w-6 h-6 text-gray-800 group-hover:text-purple-600 transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})}),e.jsx("div",{className:"absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30",children:e.jsx("div",{className:"flex space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg",children:x.map((t,n)=>e.jsx("button",{onClick:()=>l.current?.swiper.slideTo(n),className:`w-3 h-3 rounded-full transition-all duration-300 ${n===a?"bg-gradient-to-r from-purple-500 to-pink-500 w-8":"bg-gray-300 hover:bg-gray-400"}`,"aria-label":`Перейти к слайду ${n+1}`},n))})})]})}const Y=`
  /* Основные стили для предотвращения скролла */
  .swiper {
    overflow: hidden !important;
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
  }
  
  .swiper-wrapper {
    overflow: hidden !important;
    width: 100% !important;
    height: 100% !important;
  }
  
  .swiper-slide {
    overflow: hidden !important;
    width: 100% !important;
    height: 100% !important;
    box-sizing: border-box !important;
  }
  
  /* Эффекты для творческого перехода */
  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    background: rgba(0, 0, 0, 0.15) !important;
  }
  
  /* Стили для пагинации */
  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5) !important;
    opacity: 0.5 !important;
    transition: all 0.3s ease !important;
    width: 8px !important;
    height: 8px !important;
  }
  
  .swiper-pagination-bullet-active {
    background: linear-gradient(45deg, #8b5cf6, #ec4899) !important;
    opacity: 1 !important;
    transform: scale(1.3) !important;
  }
  
  .swiper-pagination {
    bottom: 30px !important;
  }
  
  /* Стили для активного слайда */
  .swiper-slide {
    opacity: 0.6;
    transition: opacity 0.5s ease;
    transform-origin: center center !important;
  }
  
  .swiper-slide-active {
    opacity: 1;
    z-index: 10 !important;
  }
  
  /* Скрываем скроллбары глобально */
  * {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  *::-webkit-scrollbar {
    display: none;
  }
  
  /* Предотвращаем выделение текста */
  * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Для изображений разрешаем selection для лучшей производительности */
  img {
    -webkit-user-drag: none;
    user-select: none;
  }
  
  /* Фиксируем положение контента внутри слайда */
  .swiper-slide > div {
    max-width: 100% !important;
    max-height: 100% !important;
    overflow: hidden !important;
  }
`;if(typeof document<"u"&&!document.getElementById("grid-slider-styles")){const a=document.createElement("style");a.id="grid-slider-styles",a.textContent=Y,document.head.appendChild(a)}export{K as default};
