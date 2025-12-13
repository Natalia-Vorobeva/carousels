import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function GridPagesSlider() {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef(null);

	// Моковые данные - прямо в компоненте
	const pages = [
		{
			id: 1,
			title: "Стрижки",
			category: "Женские стрижки",
			colorGradient: "from-blue-50 to-indigo-50",
			bgGradient: "from-blue-500/10 to-indigo-500/10",
			images: [
				{
					id: 1,
					src: "https://avatars.mds.yandex.net/i?id=6d502578fe1f3c3a527047c7aad80cd8de8a54af-5141058-images-thumbs&n=13",
					alt: "Каре с челкой",
					description: "Классическое каре"
				},
				{
					id: 2,
					src: "https://avatars.mds.yandex.net/i?id=b2491edaf6c81baa7523ebe54a97f370abb17a1c-5888889-images-thumbs&n=13",
					alt: "Длинное каскад",
					description: "Каскад на длинные волосы"
				},
				{
					id: 3,
					src: "https://avatars.mds.yandex.net/i?id=8edcfb9f4fc822dc3901e385611ec413f8c9476f-5228234-images-thumbs&n=13",
					alt: "Боб-каре",
					description: "Градуированный боб"
				},
				{
					id: 4,
					src: "https://avatars.mds.yandex.net/i?id=59be07dc2eeaea5bd2bae7452022bd73c6ee4df6-4937453-images-thumbs&n=13",
					alt: "Асимметричная",
					description: "Асимметрия с удлинением"
				}
			]
		},
		{
			id: 2,
			title: "Окрашивание",
			category: "Сложное окрашивание",
			colorGradient: "from-rose-50 to-pink-50",
			bgGradient: "from-rose-500/10 to-pink-500/10",
			images: [
				{
					id: 5,
					src: "https://avatars.mds.yandex.net/i?id=293b52fd7cc00e93f1326c09ba26e74a2ccb8cc9-5265152-images-thumbs&n=13",
					alt: "Балаяж",
					description: "Балаяж на темные волосы"
				},
				{
					id: 6,
					src: "https://avatars.mds.yandex.net/i?id=c6f5ccc2f7f302aa5e258b04e7368d130f6c487d-5539560-images-thumbs&n=13",
					alt: "Мелирование",
					description: "Мелирование по всей длине"
				},
				{
					id: 7,
					src: "https://avatars.mds.yandex.net/i?id=e4777ceae8431b0bd738961b228293baf8c232af-12571073-images-thumbs&n=13",
					alt: "Омбре",
					description: "Плавное омбре"
				}
			]
		},
		{
			id: 3,
			title: "Укладки",
			category: "Вечерние укладки",
			colorGradient: "from-amber-50 to-orange-50",
			bgGradient: "from-amber-500/10 to-orange-500/10",
			images: [
				{
					id: 9,
					src: "https://avatars.mds.yandex.net/i?id=89d26d5289be429e03a7f4a2408a538c409ab01b-4406871-images-thumbs&n=13",
					alt: "Локоны",
					description: "Объемные локоны"
				},
				{
					id: 10,
					src: "https://avatars.mds.yandex.net/i?id=057f04e7de965a3bed170c85d4f1c59000ffb219-10906089-images-thumbs&n=13",
					alt: "Гладкие волосы",
					description: "Идеально гладкие"
				},
				{
					id: 11,
					src: "https://avatars.mds.yandex.net/i?id=424d1d70314a13d41bec3839872e2753389b58b7-3939383-images-thumbs&n=13",
					alt: "Пучок",
					description: "Вечерний пучок с косами"
				},
				{
					id: 12,
					src: "https://avatars.mds.yandex.net/i?id=045c806be0a188f21b7f3a6ec2c63303a2166356-7766812-images-thumbs&n=13",
					alt: "Волны",
					description: "Морские волны"
				}
			]
		},
		{
			id: 4,
			title: "Мужские",
			category: "Мужские стрижки",
			colorGradient: "from-emerald-50 to-teal-50",
			bgGradient: "from-emerald-500/10 to-teal-500/10",
			images: [
				{
					id: 13,
					src: "https://avatars.mds.yandex.net/i?id=3e854c05e07a9dce4faa72b51966aacaf83b20f9-5231317-images-thumbs&n=13",
					alt: "Фейд",
					description: "Классический фейд"
				},
				{
					id: 14,
					src: "https://avatars.mds.yandex.net/i?id=56c75e441718d76a9bb01b64caea0ee5a5d1b70f-5558158-images-thumbs&n=13",
					alt: "Бокс",
					description: "Короткая бокс"
				},
				{
					id: 15,
					src: "https://avatars.mds.yandex.net/i?id=445511573ffc802ce04dbe528b0c222f42ee6fbf-5219700-images-thumbs&n=13",
					alt: "Гранж",
					description: "Стрижка с текстурой"
				},
				{
					id: 16,
					src: "https://avatars.mds.yandex.net/i?id=aad93ac10b8899d6369f44e2c2978814b246df1f-12421240-images-thumbs&n=13",
					alt: "Помпадур",
					description: "Классический помпадур"
				}
			]
		}
	];

	// Упрощенная сетка - 2x2 для компактности
	const gridLayouts = [
		[
			{ colSpan: 'col-span-2', rowSpan: 'row-span-2' },
			{ colSpan: 'col-span-1', rowSpan: 'row-span-1' },
			{ colSpan: 'col-span-1', rowSpan: 'row-span-1' },
			{ colSpan: 'col-span-2', rowSpan: 'row-span-1' }
		],
		[
			{ colSpan: 'col-span-1', rowSpan: 'row-span-2' },
			{ colSpan: 'col-span-2', rowSpan: 'row-span-1' },
			{ colSpan: 'col-span-2', rowSpan: 'row-span-1' },
			{ colSpan: 'col-span-1', rowSpan: 'row-span-2' }
		],
		[
			{ colSpan: 'col-span-1', rowSpan: 'row-span-1' },
			{ colSpan: 'col-span-2', rowSpan: 'row-span-2' },
			{ colSpan: 'col-span-1', rowSpan: 'row-span-1' },
			{ colSpan: 'col-span-2', rowSpan: 'row-span-1' }
		]
	];

	const currentLayout = gridLayouts[activeIndex % gridLayouts.length];

	// Блокируем скролл на wheel событиях
	useEffect(() => {
		const preventScroll = (e) => {
			// Разрешаем скролл только внутри Swiper навигации
			if (e.target.closest('.swiper') || e.target.closest('.custom-prev') || e.target.closest('.custom-next')) {
				return;
			}
			e.preventDefault();
			e.stopPropagation();
			return false;
		};

		// Добавляем обработчики для предотвращения скролла
		const options = { passive: false };
		document.addEventListener('wheel', preventScroll, options);
		document.addEventListener('touchmove', preventScroll, options);

		return () => {
			document.removeEventListener('wheel', preventScroll);
			document.removeEventListener('touchmove', preventScroll);
		};
	}, []);

	return (
		<div className="relative w-full h-full overflow-hidden">			

			{/* Основной слайдер */}
			<Swiper
				ref={swiperRef}
				modules={[EffectCreative, Navigation, Pagination, Autoplay]}
				effect={'creative'}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: ['-120%', 0, -500],
						rotate: [0, 0, -15],
					},
					next: {
						shadow: true,
						translate: ['120%', 0, -500],
						rotate: [0, 0, 15],
					},
				}}
				speed={800}
				parallax={true}
				pagination={{
					clickable: true,
					type: 'bullets',
					dynamicBullets: true,
				}}
				navigation={{
					nextEl: '.custom-next',
					prevEl: '.custom-prev',
				}}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				loop={true}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				className="h-full w-full"
				style={{
					// Убираем любые overflow, которые могут вызвать скролл
					overflow: 'hidden',
				}}
			>
				{pages.map((page, pageIndex) => (
					<SwiperSlide key={page.id} className="!h-full !flex items-center justify-center">
						<div className="relative w-full max-w-6xl h-[85vh] mx-auto flex flex-col lg:flex-row gap-6 p-4 md:p-8">
							{/* Левый блок - информация */}



<div className="lg:w-1/3 flex flex-col">
  <div className="space-y-4 lg:space-y-6 flex-grow overflow-y-auto pr-2 lg:pr-4 custom-scrollbar">
    {/* Заголовок и категория с улучшенным дизайном */}
    <div className="space-y-3">
      <div className="inline-flex items-center gap-2">
        <span className="text-xs font-medium text-gray-600 uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full">
          {page.category}
        </span>
      </div>
      
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
        {page.title}
      </h2>
      
      <div className="flex items-start gap-2">
        <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
          <span className="font-semibold text-gray-900">{page.images.length} эксклюзивных работ</span>, демонстрирующих высочайший уровень мастерства
        </p>
      </div>
    </div>

    {/* Индикаторы сетки с превью картинок */}
    <div className="pt-2 lg:pt-4">
      <div className="flex items-center gap-2 mb-3 lg:mb-4">
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        {/* <span className="text-sm font-medium text-gray-900">Структура галереи</span> */}
      </div>
      
      <div className="grid grid-cols-2 gap-2 lg:gap-3 mx-auto w-full max-w-[200px]">
        {currentLayout.map((layout, idx) => {
          const image = page.images[idx];
          const isLarge = layout.colSpan.includes('col-span-2') || layout.rowSpan.includes('row-span-2');
          
          return (
            <div
              key={idx}
              className={`relative group overflow-hidden rounded-md lg:rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 ${
                isLarge ? 'col-span-2' : 'col-span-1'
              }`}
              style={{
                aspectRatio: layout.rowSpan.includes('row-span-2') ? '2/1' : '1/1'
              }}
            >
              {/* Превью изображения */}
              {image ? (
                <div className="absolute inset-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Градиентный оверлей */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${page.bgGradient}`}></div>
              )}
              
              {/* Номер */}
              <div className="relative p-1.5">
                <div className="w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <span className="text-xs font-bold text-gray-900">{idx + 1}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</div>



							{/* Правый блок - сетка изображений */}
							<div className="lg:w-2/3 h-full">
								<div className={`bg-gradient-to-br ${page.colorGradient} rounded-2xl p-6 h-full shadow-xl overflow-hidden`}>
									<div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
										{page.images.map((image, imgIndex) => (
											<div
												key={image.id}
												className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${currentLayout[imgIndex]?.colSpan || ''
													} ${currentLayout[imgIndex]?.rowSpan || ''}`}
												style={{
													// Гарантируем, что карточка не выходит за пределы
													contain: 'content',
												}}
											>
												<img
													src={image.src}
													alt={image.alt}
													className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
													loading="lazy"
													onDragStart={(e) => e.preventDefault()}
												/>

												{/* Наложение с описанием */}
												<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
													<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
														<p className="text-sm font-medium truncate">{image.description}</p>
														<p className="text-xs opacity-90 truncate">{image.alt}</p>
													</div>
												</div>

												{/* Индикатор номера */}
												<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-full">
													#{imgIndex + 1}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Кастомные кнопки навигации */}
			<div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
				<button 
					onClick={() => swiperRef.current?.swiper.slidePrev()}
					className="custom-prev w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer group active:scale-95"
				>
					<svg className="w-6 h-6 text-gray-800 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
					</svg>
				</button>
			</div>

			<div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
				<button 
					onClick={() => swiperRef.current?.swiper.slideNext()}
					className="custom-next w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer group active:scale-95"
				>
					<svg className="w-6 h-6 text-gray-800 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>

			{/* Пагинация */}
			<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
				<div className="flex space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg">
					{pages.map((_, idx) => (
						<button
							key={idx}
							onClick={() => swiperRef.current?.swiper.slideTo(idx)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex
								? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8'
								: 'bg-gray-300 hover:bg-gray-400'
								}`}
							aria-label={`Перейти к слайду ${idx + 1}`}
						/>
					))}
				</div>
			</div>

			{/* Текстовый индикатор снизу */}
			{/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 text-center">
				<div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg">
					<p className="text-sm text-gray-600">
						<span className="font-medium">{pages[activeIndex].title}</span> • {pages[activeIndex].images.length} работы
					</p>
				</div>
			</div> */}
		</div>
	);
}

// CSS для кастомизации Swiper
const customStyles = `
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
`;

// Добавление стилей в документ
if (typeof document !== 'undefined') {
	if (!document.getElementById('grid-slider-styles')) {
		const styleSheet = document.createElement("style");
		styleSheet.id = 'grid-slider-styles';
		styleSheet.textContent = customStyles;
		document.head.appendChild(styleSheet);
	}
}

export default GridPagesSlider;