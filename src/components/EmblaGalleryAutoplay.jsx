import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

function EmblaGalleryAutoplay() {
	// Моковые данные для автопрокрутки
	const autoplayImages = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&h=900&fit=crop&crop=face",
			alt: "Каре с челкой",
			title: "Стрижки любой сложности",
			subtitle: "Классические и современные техники"
		},
		{
			id: 2,
			src: "https://50.img.avito.st/image/1/1.lAEYx7aDOOh2b9jiPL2mNgFmOu6mbOLhTGw66qB6OOKMaAIir2Q.Pt8D6MNT82AdT8sF1zekgmSZhvESPxvu7SuZAEb5f_Y",
			alt: "Балаяж",
			title: "Сложное окрашивание",
			subtitle: "Балаяж, омбре, шатуш"
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&h=900&fit=crop&crop=face",
			alt: "Укладка",
			title: "Вечерние укладки",
			subtitle: "Для особых случаев"
		},
		{
			id: 4,
			src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=900&fit=crop&crop=face",
			alt: "Мужская стрижка",
			title: "Мужские стрижки",
			subtitle: "Современный подход"
		}
	];

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const autoplayRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(true);

	// Автопрокрутка
	const startAutoplay = useCallback(() => {
		if (!emblaApi) return;

		autoplayRef.current = setInterval(() => {
			if (emblaApi.canScrollNext()) {
				emblaApi.scrollNext();
			} else {
				emblaApi.scrollTo(0);
			}
		}, 3000);
	}, [emblaApi]);

	const stopAutoplay = useCallback(() => {
		if (autoplayRef.current) {
			clearInterval(autoplayRef.current);
			autoplayRef.current = null;
		}
	}, []);

	// Управление автопрокруткой
	const toggleAutoplay = () => {
		if (isPlaying) {
			stopAutoplay();
		} else {
			startAutoplay();
		}
		setIsPlaying(!isPlaying);
	};

	// Запуск и остановка при наведении
	const handleMouseEnter = () => {
		if (isPlaying) stopAutoplay();
	};

	const handleMouseLeave = () => {
		if (isPlaying) startAutoplay();
	};

	useEffect(() => {
		if (emblaApi) {
			startAutoplay();
		}

		return () => {
			stopAutoplay();
		};
	}, [emblaApi, startAutoplay, stopAutoplay]);

	const scrollPrev = useCallback(() => {
		stopAutoplay();
		emblaApi && emblaApi.scrollPrev();
		startAutoplay();
	}, [emblaApi, startAutoplay, stopAutoplay]);

	const scrollNext = useCallback(() => {
		stopAutoplay();
		emblaApi && emblaApi.scrollNext();
		startAutoplay();
	}, [emblaApi, startAutoplay, stopAutoplay]);

	return (
		<div className="min-h-screen flex items-start justify-center px-4 pt-10">
			<div
				className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl w-full"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className="embla overflow-hidden" ref={emblaRef}>
					<div className="embla__container flex">
						{autoplayImages.map((image) => (
							<div className="embla__slide flex-[0_0_100%] min-w-0 relative" key={image.id}>
								<div className="relative h-[60vh] max-h-[600px] min-h-[300px]">
									<img
										src={image.src}
										alt={image.alt}
										className="w-full h-full object-cover"
										loading="lazy"
									/>

									{/* Градиентный оверлей */}
									<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

									{/* Текст поверх изображения */}
									<div className="absolute left-4 sm:left-8 md:left-16 top-1/2 transform -translate-y-1/2 text-white max-w-xs sm:max-w-md md:max-w-lg px-2 sm:px-0">
										<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4">
											{image.title}
										</h2>
										<p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-4 sm:mb-8 opacity-90">
											{image.subtitle}
										</p>
										<button className="bg-white text-black text-sm sm:text-base font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
											Записаться
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Кнопки навигации */}
				<button
					onClick={scrollPrev}
					className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all text-sm sm:text-base md:text-lg"
					aria-label="Предыдущий слайд"
				>
					←
				</button>

				<button
					onClick={scrollNext}
					className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all text-sm sm:text-base md:text-lg"
					aria-label="Следующий слайд"
				>
					→
				</button>

				{/* Кнопка паузы/воспроизведения */}
				<button
					onClick={toggleAutoplay}
					className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-all text-sm sm:text-base"
					aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
				>
					{isPlaying ? "⏸" : "▶"}
				</button>

				{/* Индикаторы прогресса */}
				<div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
					{autoplayImages.map((_, index) => (
						<div
							key={index}
							className="w-8 sm:w-12 md:w-16 h-1 bg-white/30 rounded overflow-hidden"
						>
							<div
								className={`h-full bg-white transition-all duration-300 ${isPlaying ? 'animate-progress' : ''
									}`}
								style={{ animationDuration: '3s' }}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default EmblaGalleryAutoplay;