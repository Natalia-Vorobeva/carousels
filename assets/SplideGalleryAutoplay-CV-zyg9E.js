import{j as e}from"./index-DFgfqgbd.js";import{S as r,a as i}from"./splide.min-Dq7WEP6D.js";import{e as s}from"./constants-1iJL8PVr.js";function d(){return e.jsx("div",{className:"min-h-screen flex items-center justify-center pt-4 py-8",children:e.jsxs("div",{className:"w-full max-w-6xl",children:[e.jsx(r,{options:{type:"loop",perPage:1,autoplay:!0,interval:4e3,pauseOnHover:!0,pauseOnFocus:!0,pagination:!0,arrows:!0,speed:800,easing:"ease",classes:{pagination:"splide__pagination !bottom-2 sm:!bottom-3 md:!bottom-4",page:"splide__pagination__page !bg-white/50 !w-2 !h-2 sm:!w-3 sm:!h-3"}},"aria-label":"Промо-галерея услуг",children:s.map(t=>e.jsx(i,{children:e.jsxs("div",{className:`relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r ${t.color}`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 h-[50vh] min-h-[300px] max-h-[550px]",children:[e.jsxs("div",{className:"relative h-full",children:[e.jsx("img",{src:t.src,alt:t.alt,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:hidden"}),e.jsxs("div",{className:"absolute top-2 left-2 md:hidden bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-full",children:[t.id," / ",s.length]})]}),e.jsxs("div",{className:"p-4 sm:p-5 md:p-6 flex flex-col justify-center bg-gradient-to-r from-white to-white/95 overflow-y-auto",children:[e.jsx("h3",{className:"text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 mb-3 sm:mb-4 md:mb-5",children:t.description}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5",children:[e.jsx("button",{className:"bg-purple-600 text-white font-bold text-sm px-4 sm:px-5 py-2 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap",children:"Записаться онлайн"}),e.jsx("button",{className:"border border-gray-300 text-gray-700 font-bold text-sm px-4 sm:px-5 py-2 rounded-full hover:border-gray-400 transition-colors whitespace-nowrap",children:"Смотреть работы"})]}),e.jsx("div",{className:"pt-3 sm:pt-4 border-t border-gray-200",children:e.jsxs("div",{className:"flex flex-col xs:flex-row items-start xs:items-center text-gray-500 text-xs",children:[e.jsxs("div",{className:"flex items-center mb-1 xs:mb-0",children:[e.jsx("svg",{className:"w-3 h-3 sm:w-4 sm:h-4 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("span",{className:"truncate",children:"Запись на удобное время"})]}),e.jsx("span",{className:"hidden xs:inline mx-2",children:"•"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-3 h-3 sm:w-4 sm:h-4 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("span",{className:"truncate",children:"Гарантия качества"})]})]})})]})]}),e.jsxs("div",{className:"absolute top-2 left-2 md:top-3 md:left-3 bg-black/70 text-white text-xs md:text-sm font-bold px-2 md:px-3 py-1 rounded-full",children:[t.id," / ",s.length]})]})},t.id))}),e.jsx("style",{children:`
					.splide__arrow {
						background: rgba(255, 255, 255, 0.8) !important;
						backdrop-filter: blur(10px);
						border: 1px solid rgba(255, 255, 255, 0.2);
						width: 32px !important;
						height: 32px !important;
						top: 45% !important;
					}
					@media (min-width: 640px) {
						.splide__arrow {
							width: 36px !important;
							height: 36px !important;
							top: 47% !important;
						}
					}
					@media (min-width: 768px) {
						.splide__arrow {
							width: 40px !important;
							height: 40px !important;
							top: 50% !important;
						}
					}
					.splide__arrow:hover {
						background: white !important;
					}
					.splide__arrow svg {
						fill: #333 !important;
						width: 14px !important;
						height: 14px !important;
					}
					@media (min-width: 640px) {
						.splide__arrow svg {
							width: 16px !important;
							height: 16px !important;
						}
					}
					@media (min-width: 768px) {
						.splide__arrow svg {
							width: 18px !important;
							height: 18px !important;
						}
					}
					.splide__pagination__page.is-active {
						background: white !important;
						transform: scale(1.2);
					}
				`})]})})}export{d as default};
