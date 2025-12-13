// eslint-disable react-hooks/exhaustive-deps
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { serviceCategories } from '../constants';

function EmblaGalleryCategories() {
	// const serviceCategories = [
	// 	{
	// 		id: 1,
	// 		title: "Стрижки",
	// 		count: 24,
	// 		description: "Классические и современные техники",
	// 		color: "from-blue-500/20 to-indigo-500/20",
	// 		borderColor: "border-blue-200",
	// 		textColor: "text-blue-700",
	// 		image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop"
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Окрашивание",
	// 		count: 18,
	// 		description: "Сложное окрашивание любой сложности",
	// 		color: "from-purple-500/20 to-pink-500/20",
	// 		borderColor: "border-purple-200",
	// 		textColor: "text-purple-700",
	// 		image: "https://avatars.mds.yandex.net/i?id=411a704aef8dd8ef0047ff8a89af97ee1ccf478b7c35f00d-10639671-images-thumbs&n=13"
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Укладки",
	// 		count: 32,
	// 		description: "Вечерние и повседневные укладки",
	// 		color: "from-amber-500/20 to-orange-500/20",
	// 		borderColor: "border-amber-200",
	// 		textColor: "text-amber-700",
	// 		image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=300&fit=crop"
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Мужские",
	// 		count: 15,
	// 		description: "Классические и современные стрижки",
	// 		color: "from-emerald-500/20 to-teal-500/20",
	// 		borderColor: "border-emerald-200",
	// 		textColor: "text-emerald-700",
	// 		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
	// 	},
	// 	{
	// 		id: 5,
	// 		title: "Уход",
	// 		count: 12,
	// 		description: "Восстановление и лечение волос",
	// 		color: "from-violet-500/20 to-fuchsia-500/20",
	// 		borderColor: "border-violet-200",
	// 		textColor: "text-violet-700",
	// 		image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop"
	// 	},
	// 	{
	// 		id: 6,
	// 		title: "Свадебные",
	// 		count: 8,
	// 		description: "Прически для особых случаев",
	// 		color: "from-rose-500/20 to-red-500/20",
	// 		borderColor: "border-rose-200",
	// 		textColor: "text-rose-700",
	// 		image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&h=300&fit=crop"
	// 	}
	// ];


	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		slidesToScroll: 1,
		dragFree: false,
		loop: false,
		duration: 30
	});

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);
	const [slidesToShow, setSlidesToShow] = useState(1);

	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	const updateSlidesToShow = useCallback(() => {
		if (!emblaApi) return;

		const containerWidth = emblaApi.containerNode().offsetWidth;
		const slideWidth = emblaApi.slideNodes()[0]?.offsetWidth;

		if (containerWidth && slideWidth) {
			const slidesVisible = Math.floor(containerWidth / slideWidth);
			setSlidesToShow(slidesVisible);
		}
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect();
		setScrollSnaps(emblaApi.scrollSnapList());
		updateSlidesToShow();

		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', () => {
			onSelect();
			setScrollSnaps(emblaApi.scrollSnapList());
			updateSlidesToShow();
		});

		const handleResize = () => {
			updateSlidesToShow();
			setScrollSnaps(emblaApi.scrollSnapList());
		};

		window.addEventListener('resize', handleResize);

		return () => {
			emblaApi.off('select', onSelect);
			emblaApi.off('reInit', onSelect);
			window.removeEventListener('resize', handleResize);
		};
	}, [emblaApi, onSelect, updateSlidesToShow]);

	const getCategoryIcon = (categoryId) => {
		switch (categoryId) {
			case 1:
				return (
					<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
					</svg>
				);
			case 2:
				return (
					<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
					</svg>
				);
			case 3:
				return (
					<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
					</svg>
				);
			case 4:
				return (
					<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
					</svg>
				);
			case 5:
				return (
					<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
					</svg>
				);
			case 6:
				return (
					<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10zm-4-6V7m0 0V5a2 2 0 10-2 2h2zm-6 0V7a2 2 0 10-2 2h2z" />
					</svg>
				);
			default:
				return null;
		}
	};

	return (
		<div className="w-full h-full flex flex-col">
			{/* Основная карусель - занимает все пространство */}
			<div className="flex-1 min-h-0 relative">
				<div className="embla overflow-hidden h-full" ref={emblaRef}>
					<div className="embla__container flex h-full">
						{serviceCategories.map((category) => (
							<div
								className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 px-3 h-full"
								key={category.id}
							>
								<div className={`bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 h-full border ${category.borderColor} hover:border-white hover:scale-[1.02]`}>
									{/* Верхняя часть с градиентом и иконкой */}
									<div className={`relative h-32 bg-gradient-to-r ${category.color} flex items-center justify-center border-b ${category.borderColor}`}>
										<div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
										<div className={`relative bg-white/90 p-4 rounded-full ${category.textColor} shadow-lg`}>
											{getCategoryIcon(category.id)}
										</div>
									</div>

									{/* Изображение */}
									<div className="relative -mt-6 mx-4">
										<img
											src={category.image}
											alt={category.title}
											className="w-full h-48 object-cover rounded-xl shadow-lg"
										/>
										<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
											<span className={`text-sm font-bold ${category.textColor}`}>
												{category.count} работ
											</span>
										</div>
									</div>

									{/* Контент */}
									<div className="p-5 pt-6">
										<h3 className={`font-bold text-xl mb-3 ${category.textColor}`}>
											{category.title}
										</h3>
										<p className="text-gray-600 text-sm mb-5 leading-relaxed">
											{category.description}
										</p>

										<div className="flex items-center justify-between pt-4 border-t border-gray-100">
											<button className={`group relative overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} hover:shadow-lg transition-all duration-300`}>
												<span className="relative z-10 flex items-center font-medium text-gray-800 group-hover:text-white transition-colors duration-300">
													Смотреть все
													<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
													</svg>
												</span>
												<div className={`absolute inset-0 bg-gradient-to-r ${category.color.replace('/20', '')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
											</button>

											<div className="text-right">
												<span className="text-xs text-gray-500 block">от</span>
												<span className="text-sm font-semibold text-gray-800">
													{Math.floor(category.count / 3)} мастеров
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Кнопки управления - возвращаем вниз */}
				<div className="absolute bottom-6 left-0 right-0 z-10">
					<div className="max-w-6xl mx-auto px-4">
						<div className="flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-full px-4 py-3 shadow-xl">
							{/* Индикаторы */}
							<div className="flex space-x-2">
								{scrollSnaps.map((_, index) => (
									<button
										key={index}
										onClick={() => emblaApi && emblaApi.scrollTo(index)}
										className="group relative focus:outline-none"
										aria-label={`Перейти к слайду ${index + 1}`}
									>
										<div
											className={`w-0 h-1.5 rounded-full transition-all duration-300 ${selectedIndex >= index && selectedIndex < index + slidesToShow
												? 'bg-white shadow-lg shadow-white/50'
												: 'bg-white/30 group-hover:bg-white/50'
												}`}
										/>
									</button>
								))}
							</div>

							{/* Кнопки навигации */}
							<div className="flex justify-center space-x-4 max-[450px]:space-x-2 max-[390px]:space-x-1 max-[390px]:px-[-50px]">
								<button
									onClick={scrollPrev}
									className="relative w-14 h-14 
      max-[450px]:w-10 max-[450px]:h-10 
      max-[390px]:w-8 max-[390px]:h-8 
      flex-shrink-0"
									aria-label="Предыдущие категории"
								>
									<div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 rounded-full flex items-center justify-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-110 active:scale-95 overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"></div>
										<svg className="w-7 h-7 max-[450px]:w-5 max-[450px]:h-5 max-[390px]:w-4 max-[390px]:h-4 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
										</svg>
									</div>
								</button>

								<button
									onClick={scrollNext}
									className="relative w-14 h-14 
      max-[450px]:w-10 max-[450px]:h-10 
      max-[390px]:w-8 max-[390px]:h-8 
      flex-shrink-0"
									aria-label="Следующие категории"
								>
									<div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 rounded-full flex items-center justify-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-110 active:scale-95 overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"></div>
										<svg className="w-7 h-7 max-[450px]:w-5 max-[450px]:h-5 max-[390px]:w-4 max-[390px]:h-4 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmblaGalleryCategories;