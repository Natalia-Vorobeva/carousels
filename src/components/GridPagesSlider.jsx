import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { pages } from '../constants';

function GridPagesSlider() {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef(null);


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
														className={`relative group overflow-hidden rounded-md lg:rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 ${isLarge ? 'col-span-2' : 'col-span-1'
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



							<div className="lg:w-2/3 h-full min-h-0">
								<div className={`bg-gradient-to-br ${page.colorGradient} rounded-2xl p-4 md:p-6 h-full shadow-xl overflow-hidden`}>
									<div className="grid grid-cols-3 grid-rows-2 gap-3 h-full auto-rows-fr">
										{page.images.map((image, imgIndex) => {
											const layout = currentLayout[imgIndex];

											return (
												<div
													key={image.id}
													className={`
              relative overflow-hidden rounded-lg md:rounded-xl
              ${layout?.colSpan || ''} 
              ${layout?.rowSpan || ''}
            `}
												>
													{/* Простой контейнер для фото */}
													<div className="w-full h-full relative bg-gray-200">
														<img
															src={image.src}
															alt={image.alt}
															className="w-full h-full object-cover"
															loading="lazy"
															onDragStart={(e) => e.preventDefault()}
															decoding="async"
														/>

														{/* Простое затемнение при наведении */}
														<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
													</div>

													{/* Упрощенный индикатор */}
													<div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-full">
														#{imgIndex + 1}
													</div>

													{/* Простое описание */}
													<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
														<p className="text-sm text-white font-medium truncate">{image.description}</p>
													</div>
												</div>
											);
										})}
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