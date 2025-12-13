// // eslint-disable react-hooks/exhaustive-deps
// import React, { useState, useEffect } from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';

// function SplideGalleryWithThumbs() {
// 	const [activeSlide, setActiveSlide] = useState(0);
// 	const [mainSplide, setMainSplide] = useState(null);

// 	// Моковые данные с миниатюрами
// 	const galleryImages = [
// 		{
// 			id: 1,
// 			main: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=800&fit=crop&crop=center",
// 			thumb: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=200&h=150&fit=crop&crop=center",
// 			alt: "Портретная съемка",
// 			title: "Портретная съемка",
// 			details: "Искусство передачи индивидуальности и эмоций",
// 			category: "Портретная",
// 			price: "5000₽",
// 			duration: "2 часа",
// 			featured: true,
// 			level: "Профессиональный",
// 			tags: ["студия", "эмоции", "личность"]
// 		},
// 		{
// 			id: 2,
// 			main: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200&h=800&fit=crop&crop=center",
// 			thumb: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=200&h=150&fit=crop&crop=center",
// 			alt: "Свадебная фотосъемка",
// 			title: "Свадебная съемка",
// 			details: "Захват самых важных моментов вашего особенного дня",
// 			category: "Свадебная",
// 			price: "25000₽",
// 			duration: "8-10 часов",
// 			featured: true,
// 			level: "Премиум",
// 			tags: ["свадьба", "любовь", "праздник"]
// 		},
// 		{
// 			id: 3,
// 			main: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&crop=center",
// 			thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop&crop=center",
// 			alt: "Пейзажная фотография",
// 			title: "Пейзажная съемка",
// 			details: "Захват величественной красоты природы в разное время суток",
// 			category: "Пейзажная",
// 			price: "8000₽",
// 			duration: "4-6 часов",
// 			featured: true,
// 			level: "Профессиональный",
// 			tags: ["природа", "путешествия", "горы"]
// 		},
// 		{
// 			id: 4,
// 			main: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop&crop=center",
// 			thumb: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=150&fit=crop&crop=center",
// 			alt: "Предметная съемка",
// 			title: "Предметная съемка",
// 			details: "Профессиональная съемка товаров для каталогов и рекламы",
// 			category: "Предметная",
// 			price: "3000₽",
// 			duration: "1-3 часа",
// 			featured: false,
// 			level: "Бизнес",
// 			tags: ["товары", "e-commerce", "реклама"]
// 		},
// 		{
// 			id: 5,
// 			main: "https://images.unsplash.com/photo-1518834103329-356dd9c5bf3f?w=1200&h=800&fit=crop&crop=center",
// 			thumb: "https://images.unsplash.com/photo-1518834103329-356dd9c5bf3f?w=200&h=150&fit=crop&crop=center",
// 			alt: "Фуд-фотография",
// 			title: "Фуд-фотография",
// 			details: "Искусство съемки блюд для меню и кулинарных блогов",
// 			category: "Фуд",
// 			price: "4000₽",
// 			duration: "2-4 часа",
// 			featured: true,
// 			level: "Профессиональный",
// 			tags: ["еда", "ресторан", "блогинг"]
// 		},
// 		{
// 			id: 6,
// 			main: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop&crop=center",
// 			thumb: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=150&fit=crop&crop=center",
// 			alt: "Фэшн-фотография",
// 			title: "Фэшн-съемка",
// 			details: "Создание стильных образов для брендов одежды и журналов",
// 			category: "Фэшн",
// 			price: "15000₽",
// 			duration: "6-8 часов",
// 			featured: true,
// 			level: "Премиум",
// 			tags: ["мода", "стиль", "бренд"]
// 		}
// 	];

// 	// Инициализация Splide
// 	useEffect(() => {
// 		if (mainSplide) {
// 			mainSplide.on('move', (newIndex) => {
// 				setActiveSlide(newIndex);
// 			});
// 		}
// 	}, [mainSplide]);

// 	// Обработчик клика по миниатюре
// 	const handleThumbClick = (index) => {
// 		setActiveSlide(index);
// 		if (mainSplide) {
// 			mainSplide.go(index);
// 		}
// 	};

// 	// Получаем уровень стиля
// 	const getLevelStyle = (level) => {
// 		switch(level) {
// 			case 'Премиум': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
// 			case 'Профессиональный': return 'bg-gradient-to-r from-blue-500 to-purple-500 text-white';
// 			case 'Бизнес': return 'bg-gradient-to-r from-gray-600 to-gray-800 text-white';
// 			default: return 'bg-gray-200 text-gray-700';
// 		}
// 	};

// 	return (
// 		<div className="max-w-4xl mx-auto p-3">

// 			{/* Основной слайдер */}
// 			<div>
// 				<Splide
// 					options={{
// 						type: 'fade',
// 						pagination: false,
// 						arrows: true,
// 						cover: true,
// 						rewind: true,
// 						speed: 500,
// 						height: '500px',
// 						autoplay: true,
// 						interval: 3000,
// 						pauseOnHover: true,
// 					}}
// 					onMounted={(splide) => setMainSplide(splide)}
// 					aria-label="Основное изображение"
// 				>
// 					{galleryImages.map((image, index) => (
// 						<SplideSlide key={image.id}>
// 							<div className="relative rounded-xl overflow-hidden shadow-xl">
// 								<div className="relative h-[500px]">
// 									<img
// 										src={image.main}
// 										alt={image.alt}
// 										className="w-full h-full object-cover"
// 									/>
									
// 									{/* Градиентный оверлей */}
// 									<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
									
// 									{/* Иконка категории */}
// 									<div className="absolute top-4 left-4 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
// 										<div className="flex items-center gap-1.5">
// 											{categoryIcons[image.category]}
// 											<span className="text-white font-semibold">{image.category}</span>
// 										</div>
// 									</div>
									
// 									{/* Уровень */}
// 									<div className={`absolute top-4 right-4 ${getLevelStyle(image.level)} px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
// 										{image.level}
// 									</div>
									
// 									{/* Номер слайда */}
// 									<div className="absolute bottom-20 left-4 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full">
// 										{index + 1} / {galleryImages.length}
// 									</div>
									
// 									{/* Бейдж избранного */}
// 									{image.featured && (
// 										<div className="absolute top-4 right-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
// 											<Star className="w-3 h-3" />
// 											<span>Рекомендуем</span>
// 										</div>
// 									)}
// 								</div>
								
// 								{/* Информация о съемке */}
// 								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4">
// 									<div className="mb-3">
// 										<h3 className="text-white text-xl font-bold mb-1">{image.title}</h3>
// 										<p className="text-white/90 text-sm">{image.details}</p>
// 									</div>
									
// 									<div className="flex items-center justify-between">
// 										<div className="flex items-center gap-4">
// 											{/* Цена */}
// 											<div className="flex items-center gap-2">
// 												<div className="bg-white/20 p-1.5 rounded-full">
// 													<DollarSign className="w-4 h-4 text-white" />
// 												</div>
// 												<div>
// 													<div className="text-white font-bold">{image.price}</div>
// 													<div className="text-white/70 text-xs">Стоимость</div>
// 												</div>
// 											</div>
											
// 											{/* Длительность */}
// 											<div className="flex items-center gap-2">
// 												<div className="bg-white/20 p-1.5 rounded-full">
// 													<Clock className="w-4 h-4 text-white" />
// 												</div>
// 												<div>
// 													<div className="text-white font-bold">{image.duration}</div>
// 													<div className="text-white/70 text-xs">Длительность</div>
// 												</div>
// 											</div>
											
// 											{/* Теги */}
// 											<div className="hidden md:flex items-center gap-1">
// 												{image.tags.slice(0, 2).map((tag, idx) => (
// 													<span key={idx} className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
// 														#{tag}
// 													</span>
// 												))}
// 											</div>
// 										</div>
										
// 										{/* Кнопка действия */}
// 										<button className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
// 											<CheckCircle className="w-4 h-4" />
// 											<span className="text-sm">Забронировать</span>
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 						</SplideSlide>
// 					))}
// 				</Splide>
// 			</div>

// 			{/* Стилизованный ряд миниатюр */}
// 			<div className="px-1 mt-4">
// 				<div className="flex justify-center space-x-2">
// 					{galleryImages.map((image, index) => (
// 						<button
// 							key={image.id}
// 							onClick={() => handleThumbClick(index)}
// 							className={`
// 								flex-shrink-0 relative rounded-xl overflow-hidden transition-all duration-300 
// 								group hover:scale-105 transform
// 								${activeSlide === index
// 									? 'ring-3 ring-blue-500 shadow-lg scale-105'
// 									: 'ring-1 ring-gray-200/50 hover:ring-gray-300/70 opacity-90 hover:opacity-100 hover:scale-102'
// 								}
// 							`}
// 						>
// 							<div className="w-16 h-14 md:w-20 md:h-16">
// 								{/* Основное изображение миниатюры */}
// 								<img
// 									src={image.thumb}
// 									alt={image.alt}
// 									className="w-full h-full object-cover"
// 								/>
								
// 								{/* Затемнение при наведении */}
// 								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-1.5">
// 									<span className="text-white text-[10px] font-medium truncate w-full text-center">
// 										{image.title.split(' ')[0]}
// 									</span>
// 								</div>
								
// 								{/* Иконка категории в углу */}
// 								<div className="absolute top-1 left-1 bg-black/70 text-white p-0.5 rounded-md">
// 									{categoryIcons[image.category]}
// 								</div>
								
// 								{/* Индикатор активного слайда */}
// 								{activeSlide === index && (
// 									<div className="absolute bottom-1 right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
// 								)}
								
// 								{/* Бейдж избранного */}
// 								{image.featured && (
// 									<div className="absolute top-1 right-1">
// 										<Star className="w-2 h-2 text-yellow-400" />
// 									</div>
// 								)}
// 							</div>
// 						</button>
// 					))}
// 				</div>
				
// 				{/* Индикатор прогресса */}
// 				<div className="mt-3 flex justify-center items-center">
// 					<div className="w-full max-w-xs bg-gray-100 rounded-full h-1.5">
// 						<div 
// 							className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-300"
// 							style={{ width: `${((activeSlide + 1) / galleryImages.length) * 100}%` }}
// 						></div>
// 					</div>
// 					<span className="ml-3 text-xs text-gray-600 font-medium">
// 						{activeSlide + 1} / {galleryImages.length}
// 					</span>
// 				</div>
				
// 				{/* Статистика */}
// 				<div className="mt-4 grid grid-cols-3 gap-3 text-center">
// 					<div className="bg-gradient-to-r from-gray-50 to-blue-50 p-2 rounded-lg">
// 						<div className="text-lg font-bold text-gray-800">{galleryImages.length}</div>
// 						<div className="text-xs text-gray-600">Всего работ</div>
// 					</div>
// 					<div className="bg-gradient-to-r from-gray-50 to-purple-50 p-2 rounded-lg">
// 						<div className="text-lg font-bold text-gray-800">
// 							{galleryImages.filter(img => img.featured).length}
// 						</div>
// 						<div className="text-xs text-gray-600">Рекомендуемых</div>
// 					</div>
// 					<div className="bg-gradient-to-r from-gray-50 to-pink-50 p-2 rounded-lg">
// 						<div className="text-lg font-bold text-gray-800">
// 							{new Set(galleryImages.map(img => img.category)).size}
// 						</div>
// 						<div className="text-xs text-gray-600">Категорий</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default SplideGalleryWithThumbs;