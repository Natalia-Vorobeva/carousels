import{r as N,j as e}from"./index-CYnCJfz6.js";import{e as B,a as R,g as O,c as D,b as A,d as G,S as V,N as H,P as W,A as q,f as F}from"./pagination-CyFAHE1S.js";import{p as M}from"./constants-1iJL8PVr.js";function X({swiper:t,duration:f,transformElements:c,allSlides:x}){const{activeIndex:b}=t;if(t.params.virtualTranslate&&f!==0){let r=!1,a;a=c,a.forEach(s=>{B(s,()=>{if(r||!t||t.destroyed)return;r=!0,t.animating=!1;const n=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(n)})})}}function Y({swiper:t,extendParams:f,on:c}){f({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const x=a=>typeof a=="string"?a:`${a}px`;R({effect:"creative",swiper:t,on:c,setTranslate:()=>{const{slides:a,wrapperEl:s,slidesSizesGrid:n}=t,o=t.params.creativeEffect,{progressMultiplier:i}=o,k=t.params.centeredSlides,j=O(t);if(k){const v=n[0]/2-t.params.slidesOffsetBefore||0;s.style.transform=`translateX(calc(50% - ${v}px))`}for(let v=0;v<a.length;v+=1){const d=a[v],$=d.progress,p=Math.min(Math.max(d.progress,-o.limitProgress),o.limitProgress);let m=p;k||(m=Math.min(Math.max(d.originalProgress,-o.limitProgress),o.limitProgress));const E=d.swiperSlideOffset,g=[t.params.cssMode?-E-t.translate:-E,0,0],w=[0,0,0];let y=!1;t.isHorizontal()||(g[1]=g[0],g[0]=0);let l={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};p<0?(l=o.next,y=!0):p>0&&(l=o.prev,y=!0),g.forEach((u,h)=>{g[h]=`calc(${u}px + (${x(l.translate[h])} * ${Math.abs(p*i)}))`}),w.forEach((u,h)=>{let I=l.rotate[h]*Math.abs(p*i);w[h]=I}),d.style.zIndex=-Math.abs(Math.round($))+a.length;const P=g.join(", "),z=`rotateX(${j(w[0])}deg) rotateY(${j(w[1])}deg) rotateZ(${j(w[2])}deg)`,L=m<0?`scale(${1+(1-l.scale)*m*i})`:`scale(${1-(1-l.scale)*m*i})`,T=m<0?1+(1-l.opacity)*m*i:1-(1-l.opacity)*m*i,C=`translate3d(${P}) ${z} ${L}`;if(y&&l.shadow||!y){let u=d.querySelector(".swiper-slide-shadow");if(!u&&l.shadow&&(u=D("creative",d)),u){const h=o.shadowPerProgress?p*(1/o.limitProgress):p;u.style.opacity=Math.min(Math.max(Math.abs(h),0),1)}}const S=A(o,d);S.style.transform=C,S.style.opacity=T,l.origin&&(S.style.transformOrigin=l.origin)}},setTransition:a=>{const s=t.slides.map(n=>G(n));s.forEach(n=>{n.style.transitionDuration=`${a}ms`,n.querySelectorAll(".swiper-slide-shadow").forEach(o=>{o.style.transitionDuration=`${a}ms`})}),X({swiper:t,duration:a,transformElements:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}function Q(){const[t,f]=N.useState(0),c=N.useRef(null),x=[[{colSpan:"col-span-2",rowSpan:"row-span-2"},{colSpan:"col-span-1",rowSpan:"row-span-1"},{colSpan:"col-span-1",rowSpan:"row-span-1"},{colSpan:"col-span-2",rowSpan:"row-span-1"}],[{colSpan:"col-span-1",rowSpan:"row-span-2"},{colSpan:"col-span-2",rowSpan:"row-span-1"},{colSpan:"col-span-2",rowSpan:"row-span-1"},{colSpan:"col-span-1",rowSpan:"row-span-2"}],[{colSpan:"col-span-1",rowSpan:"row-span-1"},{colSpan:"col-span-2",rowSpan:"row-span-2"},{colSpan:"col-span-1",rowSpan:"row-span-1"},{colSpan:"col-span-2",rowSpan:"row-span-1"}]],b=x[t%x.length];return N.useEffect(()=>{const r=s=>{if(!(s.target.closest(".swiper")||s.target.closest(".custom-prev")||s.target.closest(".custom-next")))return s.preventDefault(),s.stopPropagation(),!1},a={passive:!1};return document.addEventListener("wheel",r,a),document.addEventListener("touchmove",r,a),()=>{document.removeEventListener("wheel",r),document.removeEventListener("touchmove",r)}},[]),e.jsxs("div",{className:"relative w-full h-full overflow-hidden",children:[e.jsx(V,{ref:c,modules:[Y,H,W,q],effect:"creative",creativeEffect:{prev:{shadow:!0,translate:["-120%",0,-500],rotate:[0,0,-15]},next:{shadow:!0,translate:["120%",0,-500],rotate:[0,0,15]}},speed:800,parallax:!0,pagination:{clickable:!0,type:"bullets",dynamicBullets:!0},navigation:{nextEl:".custom-next",prevEl:".custom-prev"},autoplay:{delay:4e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,onSlideChange:r=>f(r.realIndex),className:"h-full w-full",style:{overflow:"hidden"},children:M.map((r,a)=>e.jsx(F,{className:"!h-full !flex items-center justify-center",children:e.jsxs("div",{className:"relative w-full max-w-6xl h-[85vh] mx-auto flex flex-col lg:flex-row gap-6 p-4 md:p-8",children:[e.jsx("div",{className:"lg:w-1/3 flex flex-col",children:e.jsxs("div",{className:"space-y-4 lg:space-y-6 flex-grow overflow-y-auto pr-2 lg:pr-4 custom-scrollbar",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"inline-flex items-center gap-2",children:e.jsx("span",{className:"text-xs font-medium text-gray-600 uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full",children:r.category})}),e.jsx("h2",{className:"text-2xl lg:text-3xl font-bold text-gray-900 leading-tight",children:r.title}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsxs("p",{className:"text-gray-700 leading-relaxed text-sm lg:text-base",children:[e.jsx("span",{className:"font-semibold text-gray-900",children:"Эксклюзивные работ"}),", демонстрирующие высочайший уровень мастерства"]})]})]}),e.jsxs("div",{className:"pt-2 lg:pt-4",children:[e.jsx("div",{className:"flex items-center gap-2 mb-3 lg:mb-4",children:e.jsx("svg",{className:"w-5 h-5 text-gray-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})})}),e.jsx("div",{className:"grid grid-cols-2 gap-2 lg:gap-3 mx-auto w-full max-w-[200px]",children:b.map((s,n)=>{const o=r.images[n],i=s.colSpan.includes("col-span-2")||s.rowSpan.includes("row-span-2");return e.jsxs("div",{className:`relative group overflow-hidden rounded-md lg:rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 ${i?"col-span-2":"col-span-1"}`,style:{aspectRatio:s.rowSpan.includes("row-span-2")?"2/1":"1/1"},children:[o?e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("img",{src:o.src,alt:o.alt,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"})]}):e.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${r.bgGradient}`}),e.jsx("div",{className:"relative p-1.5",children:e.jsx("div",{className:"w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm",children:e.jsx("span",{className:"text-xs font-bold text-gray-900",children:n+1})})})]},n)})})]})]})}),e.jsx("div",{className:"lg:w-2/3 h-full min-h-0",children:e.jsx("div",{className:`bg-gradient-to-br ${r.colorGradient} rounded-2xl p-4 md:p-6 h-full shadow-xl overflow-hidden`,children:e.jsx("div",{className:"grid grid-cols-3 grid-rows-2 gap-3 h-full auto-rows-fr",children:r.images.map((s,n)=>{const o=b[n];return e.jsxs("div",{className:`
              relative overflow-hidden rounded-lg md:rounded-xl
              ${o?.colSpan||""} 
              ${o?.rowSpan||""}
            `,children:[e.jsxs("div",{className:"w-full h-full relative bg-gray-200",children:[e.jsx("img",{src:s.src,alt:s.alt,className:"w-full h-full object-cover",loading:"lazy",onDragStart:i=>i.preventDefault(),decoding:"async"}),e.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"})]}),e.jsxs("div",{className:"absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-full",children:["#",n+1]}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx("p",{className:"text-sm text-white font-medium truncate",children:s.description})})]},s.id)})})})})]})},r.id))}),e.jsx("div",{className:"absolute top-1/2 left-4 transform -translate-y-1/2 z-30",children:e.jsx("button",{onClick:()=>c.current?.swiper.slidePrev(),className:"custom-prev w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer group active:scale-95",children:e.jsx("svg",{className:"w-6 h-6 text-gray-800 group-hover:text-purple-600 transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})})}),e.jsx("div",{className:"absolute top-1/2 right-4 transform -translate-y-1/2 z-30",children:e.jsx("button",{onClick:()=>c.current?.swiper.slideNext(),className:"custom-next w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer group active:scale-95",children:e.jsx("svg",{className:"w-6 h-6 text-gray-800 group-hover:text-purple-600 transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})}),e.jsx("div",{className:"absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30",children:e.jsx("div",{className:"flex space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg",children:M.map((r,a)=>e.jsx("button",{onClick:()=>c.current?.swiper.slideTo(a),className:`w-3 h-3 rounded-full transition-all duration-300 ${a===t?"bg-gradient-to-r from-purple-500 to-pink-500 w-8":"bg-gray-300 hover:bg-gray-400"}`,"aria-label":`Перейти к слайду ${a+1}`},a))})})]})}const Z=`
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
`;if(typeof document<"u"&&!document.getElementById("grid-slider-styles")){const t=document.createElement("style");t.id="grid-slider-styles",t.textContent=Z,document.head.appendChild(t)}export{Q as default};
