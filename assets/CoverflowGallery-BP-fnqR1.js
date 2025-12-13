import{r as D,j as e}from"./index-BH3blAka.js";import{g as F,a as G,S as H,P as I,N as X,A as Y,b as R}from"./pagination-Cid8eVdW.js";import{e as B,a as V,c as z}from"./create-shadow-D3iNSmI_.js";function W({swiper:c,extendParams:k,on:m}){k({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),B({effect:"coverflow",swiper:c,on:m,setTranslate:()=>{const{width:a,height:h,slides:r,slidesSizesGrid:t}=c,s=c.params.coverflowEffect,i=c.isHorizontal(),S=c.translate,T=i?-S+a/2:-S+h/2,E=i?s.rotate:-s.rotate,C=s.depth,M=F(c);for(let p=0,q=r.length;p<q;p+=1){const n=r[p],w=t[p],A=n.swiperSlideOffset,$=(T-A-w/2)/w,o=typeof s.modifier=="function"?s.modifier($):$*s.modifier;let u=i?E*o:0,b=i?0:E*o,y=-C*Math.abs(o),d=s.stretch;typeof d=="string"&&d.indexOf("%")!==-1&&(d=parseFloat(s.stretch)/100*w);let v=i?0:d*o,j=i?d*o:0,N=1-(1-s.scale)*Math.abs(o);Math.abs(j)<.001&&(j=0),Math.abs(v)<.001&&(v=0),Math.abs(y)<.001&&(y=0),Math.abs(u)<.001&&(u=0),Math.abs(b)<.001&&(b=0),Math.abs(N)<.001&&(N=0);const O=`translate3d(${j}px,${v}px,${y}px)  rotateX(${M(b)}deg) rotateY(${M(u)}deg) scale(${N})`,P=V(s,n);if(P.style.transform=O,n.style.zIndex=-Math.abs(Math.round(o))+1,s.slideShadows){let f=i?n.querySelector(".swiper-slide-shadow-left"):n.querySelector(".swiper-slide-shadow-top"),g=i?n.querySelector(".swiper-slide-shadow-right"):n.querySelector(".swiper-slide-shadow-bottom");f||(f=z("coverflow",n,i?"left":"top")),g||(g=z("coverflow",n,i?"right":"bottom")),f&&(f.style.opacity=o>0?o:0),g&&(g.style.opacity=-o>0?-o:0)}}},setTransition:a=>{c.slides.map(r=>G(r)).forEach(r=>{r.style.transitionDuration=`${a}ms`,r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(t=>{t.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const L=({title:c="Портфолио работ",description:k="Мои лучшие работы. Панорамная галерея позволяет рассмотреть каждую деталь.",initialFilter:m="all"})=>{const[l,x]=D.useState(m),a=[{id:1,image:"https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=1000&fit=crop&crop=face",title:"Классическое каре",category:"women"},{id:2,image:"https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=1000&fit=crop&crop=face",title:"Градуированный боб",category:"women"},{id:3,image:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=1000&fit=crop&crop=face",title:"Асимметричная стрижка",category:"women"},{id:11,image:"https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=1000&fit=crop&crop=face",title:"Стрижка пикси",category:"women"},{id:4,image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face",title:"Классический фейд",category:"men"},{id:5,image:"https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800&h=1000&fit=crop&crop=face",title:"Короткая бокс",category:"men"},{id:6,image:"https://images.unsplash.com/photo-1556228574442-60811d7c57e8?w=800&h=1000&fit=crop&crop=face",title:"Окрашивание балаяж",category:"coloring"},{id:7,image:"https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=800&h=1000&fit=crop&crop=face",title:"Омбре на темных волосах",category:"coloring"},{id:8,image:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=1000&fit=crop&crop=face",title:"Объемные локоны",category:"styling"},{id:9,image:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop&crop=face",title:"Идеально гладкие",category:"styling"},{id:10,image:"https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=800&h=1000&fit=crop&crop=face",title:"Свадебная укладка",category:"styling"},{id:12,image:"https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&h=1000&fit=crop&crop=face",title:"Пляжные волны",category:"styling"}],h=[{key:"all",label:"Все работы",count:a.length},{key:"women",label:"Женские стрижки",count:a.filter(t=>t.category==="women").length},{key:"men",label:"Мужские стрижки",count:a.filter(t=>t.category==="men").length},{key:"coloring",label:"Окрашивание",count:a.filter(t=>t.category==="coloring").length},{key:"styling",label:"Укладки",count:a.filter(t=>t.category==="styling").length}],r=l==="all"?a:a.filter(t=>t.category===l);return e.jsxs("div",{className:"h-screen flex flex-col bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden",children:[e.jsx("div",{className:"flex-shrink-0 pt-4 pb-2 px-4",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("span",{className:"inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-600 text-xs font-semibold rounded-full mb-2",children:"Coverflow Галерея"}),e.jsxs("h2",{className:"text-xl font-bold text-gray-900 mb-1",children:["Эффект ",e.jsx("span",{className:"text-orange-500",children:"3D перелистывания"})]}),e.jsx("p",{className:"text-xs text-gray-600 max-w-xl mx-auto",children:"Панорамная галерея с фильтрацией по категориям"})]}),e.jsx("div",{className:"mb-2",children:e.jsxs("div",{className:"flex flex-wrap justify-center gap-1",children:[e.jsxs("button",{onClick:()=>x("all"),className:`px-2 py-1 text-xs rounded-lg font-medium transition-all duration-300 flex items-center ${l==="all"?"bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"}`,children:[e.jsx("span",{children:"Все"}),e.jsx("span",{className:"ml-1 text-xs bg-white/20 px-1 rounded",children:a.length})]}),h.slice(1).map(t=>e.jsxs("button",{onClick:()=>x(t.key),className:`px-2 py-1 text-xs rounded-lg font-medium transition-all duration-300 flex items-center ${l===t.key?"bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"}`,children:[e.jsx("span",{children:t.label}),e.jsx("span",{className:"ml-1 text-xs bg-white/20 px-1 rounded",children:t.count})]},t.key))]})}),e.jsx("div",{className:"bg-white/50 backdrop-blur-sm rounded-lg p-2 border border-white/80 shadow-sm mb-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-900",children:l==="all"?"Все работы":l==="women"?"Женские стрижки":l==="men"?"Мужские стрижки":l==="coloring"?"Окрашивание":"Укладки"}),e.jsxs("p",{className:"text-xs text-gray-600",children:[r.length," работ"]})]}),e.jsx("div",{className:"text-xs text-gray-500",children:"Листайте влево/вправо"})]})})]})}),e.jsx("div",{className:"flex-1 overflow-hidden px-2 pb-2",children:e.jsx("div",{className:"h-full flex items-center",children:e.jsx(H,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:!0,coverflowEffect:{rotate:20,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{clickable:!0},navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!1},modules:[W,I,X,Y],className:"h-full",children:r.map(t=>e.jsx(R,{className:"!w-48 !h-64 sm:!w-56 sm:!h-72 md:!w-64 md:!h-80 lg:!w-72 lg:!h-96",children:e.jsxs("div",{className:"relative w-full h-full group rounded-xl overflow-hidden shadow-xl",children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",loading:"lazy"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsxs("div",{className:"absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium shadow-sm",children:[t.category==="women"&&"👩‍🦰",t.category==="men"&&"👨‍🦰",t.category==="coloring"&&"🎨",t.category==="styling"&&"💇‍♀️"]}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent",children:[e.jsx("h3",{className:"text-sm font-bold text-white truncate",children:t.title}),e.jsxs("div",{className:"text-xs text-white/80 mt-0.5",children:[t.category==="women"&&"Женская стрижка",t.category==="men"&&"Мужская стрижка",t.category==="coloring"&&"Окрашивание",t.category==="styling"&&"Укладка"]})]})]})},t.id))})})}),e.jsx("style",{jsx:!0,global:!0,children:`
        .swiper {
          width: 100%;
          height: 100%;
        }
        
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.4s ease;
        }
        
        .swiper-slide-active {
          transform: scale(1.05);
        }
        
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
        }
        
        .swiper-pagination-bullet-active {
          width: 24px;
          background: linear-gradient(to right, #f97316, #f59e0b);
          border-radius: 4px;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          color: #f97316;
          font-weight: bold;
        }
        
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `})]})};export{L as default};
