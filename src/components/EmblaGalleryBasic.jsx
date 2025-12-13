// eslint-disable react-hooks/exhaustive-deps

import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { portfolioImages } from '../constants';

function EmblaGalleryBasic() {

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: 'center',
		draggable: true,
		dragFree: false,
		containScroll: 'trimSnaps'
	});

	const [selectedIndex, setSelectedIndex] = useState(0);
	const containerRef = useRef(null);
	const [containerHeight, setContainerHeight] = useState(400);

	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	// Автоматически рассчитываем высоту контейнера
	useEffect(() => {
		const calculateHeight = () => {
			const container = containerRef.current;
			if (!container) return;

			// Получаем высоту доступного пространства
			const containerRect = container.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			// Учитываем верхний и нижний отступы из App (h-16 сверху, h-20 снизу)
			const availableHeight = windowHeight - 90 - 80; // 64px сверху, 80px снизу

			// Ограничиваем максимальную высоту
			const maxHeight = Math.min(600, availableHeight);
			const minHeight = 300;

			setContainerHeight(Math.max(minHeight, maxHeight));
		};

		calculateHeight();
		window.addEventListener('resize', calculateHeight);

		return () => window.removeEventListener('resize', calculateHeight);
	}, []);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on('select', onSelect);
		return () => emblaApi.off('select', onSelect);
	}, [emblaApi, onSelect]);

	return (
		<div className="min-h-screen flex items-start justify-center p-4">
			<div
				ref={containerRef}
				className="w-full max-w-6xl mx-auto bg-white rounded-xl overflow-hidden flex flex-col shadow-2xl"
				style={{ height: `${containerHeight}px` }}
			>
				{/* Основной слайдер - гибкая часть */}
				<div className="relative flex-grow min-h-0">
					<div
						className="embla overflow-hidden rounded-lg h-full"
						ref={emblaRef}
					>
						<div className="embla__container flex h-full">
							{portfolioImages.map((image) => (
								<div className="embla__slide flex-[0_0_100%] min-w-0 h-full" key={image.id}>
									<div className="relative h-full w-full">
										<img
											src={image.src}
											alt={image.alt}
											className="w-full h-full object-cover"
											loading="lazy"
										/>
										<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
											<div className="flex items-center justify-between">
												<div>
													<span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full mb-2">
														{image.category}
													</span>
													<h3 className="text-white font-bold text-lg">{image.title}</h3>
												</div>
												{image.featured && (
													<span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
														★ Избранное
													</span>
												)}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Кнопки навигации */}
					<button
						onClick={scrollPrev}
						className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-10"
						aria-label="Предыдущий слайд"
					>
						<svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>

					<button
						onClick={scrollNext}
						className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-10"
						aria-label="Следующий слайд"
					>
						<svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>

					{/* Индикатор текущего слайда */}
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
						{selectedIndex + 1} / {portfolioImages.length}
					</div>
				</div>

				{/* Миниатюры - фиксированная высота */}
				<div className="mt-2 px-2 pb-2 flex-shrink-0">
					<div className="flex space-x-2 overflow-x-auto py-2 px-1 no-scrollbar">
						{portfolioImages.map((image, index) => (
							<button
								key={`${image.id}-${index}`}
								onClick={() => emblaApi && emblaApi.scrollTo(index)}
								className="relative flex-shrink-0 transition-all duration-300 group"
							>
								{/* Эффектный градиентный border для активного слайда */}
								<div className={`absolute -inset-0.5 rounded-lg ${index === selectedIndex
									? 'bg-gradient-to-r from-blue-500 to-purple-500 opacity-100 shadow-md'
									: 'opacity-0 group-hover:opacity-30 group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300'
									} transition-all duration-300`}></div>

								{/* Внутренняя рамка */}
								<div className={`relative w-16 h-16 rounded-md overflow-hidden ${index === selectedIndex
									? 'border-2 border-white shadow-lg scale-105'
									: 'border border-gray-200 group-hover:border-blue-300'
									} transition-all duration-300`}>
									<img
										src={image.src}
										alt={image.alt}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>

									{/* Индикатор активного слайда */}
									{index === selectedIndex && (
										<div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-t from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
											<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
										</div>
									)}

									{/* Затемнение для неактивных */}
									{index !== selectedIndex && (
										<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
									)}
								</div>
							</button>
						))}
					</div>

					{/* Прогресс бар */}
					<div className="mt-3">
						<div className="relative pt-1">
							<div className="overflow-hidden h-1 mb-2 text-xs flex rounded bg-gray-100">
								<div
									className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
									style={{ width: `${((selectedIndex + 1) / portfolioImages.length) * 100}%` }}
								></div>
							</div>
							<div className="flex justify-between text-xs text-gray-500">
								<span>Слайд {selectedIndex + 1}</span>
								<span>Всего: {portfolioImages.length}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmblaGalleryBasic;