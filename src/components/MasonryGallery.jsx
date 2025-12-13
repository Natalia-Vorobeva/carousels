import { useState, useRef, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCamera, FiGrid, FiImage, FiMaximize2 } from 'react-icons/fi';

function MasonryGallery() {
	const [index, setIndex] = useState(-1);
	const [activeCategory, setActiveCategory] = useState('all');
	const [showScrollHint, setShowScrollHint] = useState(true);
	const galleryRef = useRef(null);
	const containerRef = useRef(null);


	// Убираем подсказку скролла после первого скролла
	useEffect(() => {
		const handleScroll = () => {
			if (showScrollHint) {
				setShowScrollHint(false);
			}
		};

		const gallery = galleryRef.current;
		if (gallery) {
			gallery.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (gallery) {
				gallery.removeEventListener('scroll', handleScroll);
			}
		};
	}, [showScrollHint]);

	// Отключаем скролл на всем документе, кроме галереи
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	// Категории с мета-информацией
	const categories = [
		{
			id: 1,
			key: 'haircuts',
			title: "Стрижки",
			description: "Женские стрижки",
			color: "blue",
			gradient: "from-blue-500/10 to-indigo-500/10",
			borderColor: "border-blue-200",
			textColor: "text-blue-700",
			bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
			icon: "✂️",
			count: 6
		},
		{
			id: 2,
			key: 'coloring',
			title: "Окрашивание",
			description: "Сложное окрашивание",
			color: "pink",
			gradient: "from-rose-500/10 to-pink-500/10",
			borderColor: "border-rose-200",
			textColor: "text-rose-700",
			bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
			icon: "🎨",
			count: 6
		},
		{
			id: 3,
			key: 'styling',
			title: "Укладки",
			description: "Вечерние укладки",
			color: "amber",
			gradient: "from-amber-500/10 to-orange-500/10",
			borderColor: "border-amber-200",
			textColor: "text-amber-700",
			bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
			icon: "💇‍♀️",
			count: 6
		},
		{
			id: 4,
			key: 'mens',
			title: "Мужские",
			description: "Мужские стрижки",
			color: "emerald",
			gradient: "from-emerald-500/10 to-teal-500/10",
			borderColor: "border-emerald-200",
			textColor: "text-emerald-700",
			bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
			icon: "💈",
			count: 6
		}
	];

	// Все изображения с категориями
	const allImages = [
		// Стрижки
		{
			src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=600&fit=crop",
			width: 400,
			height: 600,
			alt: "Классическое каре",
			category: "haircuts",
			title: "Классическое каре",
			description: "Аккуратная стрижка каре с челкой"
		},
		{
			src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=500&fit=crop",
			width: 400,
			height: 500,
			alt: "Боб каре",
			category: "haircuts",
			title: "Градуированный боб",
			description: "Многослойная стрижка с текстурой"
		},
		{
			src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=600&fit=crop",
			width: 400,
			height: 600,
			alt: "Асимметрия",
			category: "haircuts",
			title: "Асимметричная стрижка",
			description: "Современная асимметрия с удлинением"
		},
		{
			src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=500&fit=crop",
			width: 400,
			height: 500,
			alt: "Пикси",
			category: "haircuts",
			title: "Стрижка пикси",
			description: "Короткая дерзкая стрижка"
		},
		{
			src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=600&fit=crop",
			width: 400,
			height: 600,
			alt: "Каскад",
			category: "haircuts",
			title: "Каскад на длинные волосы",
			description: "Многоуровневая стрижка с волнами"
		},
		{
			src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop&crop=face",
			width: 400,
			height: 500,
			alt: "Шэгги",
			category: "haircuts",
			title: "Шэгги стрижка",
			description: "Рваные концы с текстурой"
		},
		{
			src: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=400&h=500&fit=crop",
			width: 400,
			height: 500,
			alt: "Омбре",
			category: "coloring",
			title: "Омбре на темных волосах",
			description: "Градиент от темного к светлому"
		},
		{
			src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=600&fit=crop",
			width: 400,
			height: 600,
			alt: "Мелирование",
			category: "coloring",
			title: "Мелирование по всей длине",
			description: "Тонкие светлые прядки"
		},
		{
			src: "https://images.unsplash.com/photo-1560851248-7a2a48efb433?w=400&h=500&fit=crop",
			width: 400,
			height: 500,
			alt: "Полировка",
			category: "coloring",
			title: "Тонирование и полировка",
			description: "Насыщенный цвет с блеском"
		},
		{
			src: "https://images.unsplash.com/photo-1560857793-77db5b72c9b8?w=400&h=600&fit=crop",
			width: 400,
			height: 600,
			alt: "Пастель",
			category: "coloring",
			title: "Пастельные тона",
			description: "Нежные розовые и персиковые оттенки"
		},
		{
			src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop",
			width: 400,
			height: 500,
			alt: "Колорирование",
			category: "coloring",
			title: "Яркое колорирование",
			description: "Сочные цвета и контрасты"
		},

		// Укладки
		{
			src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=600&fit=crop",
			width: 400,
			height: 600,
			alt: "Локоны",
			category: "styling",
			title: "Объемные локоны",
			description: "Романтичные завитки"
		},
		{
			src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop",
			width: 400,
			height: 500,
			alt: "Гладкие",
			category: "styling",
			title: "Идеально гладкие",
			description: "Блестящие прямые волосы"
		},
		{
			src: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&h=600&fit=crop",
			width: 400,
			height: 600,
			alt: "Вечерняя",
			category: "styling",
			title: "Вечерняя укладка",
			description: "Элегантно уложенные волосы"
		},
		{
			src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=500&fit=crop",
			width: 400,
			height: 500,
			alt: "Пучок",
			category: "styling",
			title: "Свадебный пучок",
			description: "Аккуратный пучок с декором"
		},
		{
			src: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=400&h=600&fit=crop",
			width: 400,
			height: 600,
			alt: "Волны",
			category: "styling",
			title: "Пляжные волны",
			description: "Естественные свободные волны"
		},
		{
			src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
			width: 400,
			height: 500,
			alt: "Косы",
			category: "styling",
			title: "Африканские косы",
			description: "Традиционное плетение"
		},

		// Мужские
		{
			src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
			width: 400,
			height: 600,
			alt: "Фейд",
			category: "mens",
			title: "Классический фейд",
			description: "Плавный переход длины"
		},
		{
			src: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=400&h=500&fit=crop",
			width: 400,
			height: 500,
			alt: "Бокс",
			category: "mens",
			title: "Короткая бокс",
			description: "Классическая мужская стрижка"
		},
		{
			src: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&h=600&fit=crop",
			width: 400,
			height: 600,
			alt: "Гранж",
			category: "mens",
			title: "Стрижка с текстурой",
			description: "Современный гранж стиль"
		},
		{
			src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
			width: 400,
			height: 500,
			alt: "Помпадур",
			category: "mens",
			title: "Классический помпадур",
			description: "Объемная укладка с гелем"
		},
		{
			src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
			width: 400,
			height: 600,
			alt: "Ирокез",
			category: "mens",
			title: "Стильный ирокез",
			description: "Смелая современная стрижка"
		},
		{
			src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
			width: 400,
			height: 500,
			alt: "Борода",
			category: "mens",
			title: "Стрижка с оформлением бороды",
			description: "Комплексный мужской уход"
		}
	];

	// Фильтруем изображения по активной категории
	const filteredImages = activeCategory === 'all'
		? allImages
		: allImages.filter(img => img.category === activeCategory);

	// Получаем активную категорию объект
	const activeCategoryObj = categories.find(cat => cat.key === activeCategory) || {
		title: "Все работы",
		description: "Портфолио мастеров",
		count: allImages.length
	};

	// Получаем изображения для Lightbox из текущей категории
	const getLightboxImages = () => {
		if (activeCategory === 'all') {
			return allImages;
		}
		return allImages.filter(img => img.category === activeCategory);
	};

	return (
		<div
			ref={containerRef}
			className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden"
		>
			{/* Основной контейнер с вертикальным скроллом */}
			<div className="h-screen flex flex-col overflow-hidden">
				{/* Верхняя часть - заголовок и категории */}
				<div className="flex-shrink-0 pt-6 pb-4 px-4">
					<div className="max-w-7xl mx-auto">
						{/* Заголовок */}
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-center mb-6"
						>
							<h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
								Галерея <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">работ</span>
							</h1>
						</motion.div>



					</div>
				</div>

				{/* Информация о выбранной категории */}
				<div className="flex-shrink-0 px-4 mb-4">
					<div className="max-w-7xl mx-auto">
						<div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/80 shadow-sm">
							<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
							</div>
						</div>
					</div>
				</div>

				{/* Галерея с кастомным скроллом */}
				<div className="flex-1 overflow-hidden px-4 pb-6">
					<div className="max-w-7xl mx-auto h-full">
						<div
							ref={galleryRef}
							className="bg-white rounded-2xl shadow-xl h-full overflow-y-auto custom-scrollbar p-4"
						>
							{/* Подсказка скролла */}
							<AnimatePresence>
								{showScrollHint && (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="flex justify-center items-center mb-6"
									>
										
									</motion.div>
								)}
							</AnimatePresence>

							{/* Masonry галерея */}
							<PhotoAlbum
								photos={filteredImages.map(img => ({
									src: img.src,
									width: img.width,
									height: img.height,
									alt: img.alt,
									title: img.title,
									description: img.description,
									category: img.category
								}))}
								layout="masonry"
								columns={(containerWidth) => {
									if (containerWidth < 640) return 2;
									if (containerWidth < 1024) return 3;
									return 4;
								}}
								spacing={12}
								onClick={({ index }) => {
									// Находим индекс в общем массиве всех изображений
									const clickedImage = filteredImages[index];
									const globalIndex = allImages.findIndex(img =>
										img.src === clickedImage.src && img.alt === clickedImage.alt
									);
									setIndex(globalIndex);
								}}
								componentsProps={{
									containerProps: {
										style: {
											padding: '8px 0',
										},
									},
								}}
								renderPhoto={({ photo, imageProps: { alt, style, ...restImageProps }, wrapperStyle }) => {
									const category = categories.find(cat => cat.key === photo.category);
									return (
										<motion.div
											style={wrapperStyle}
											className="group relative overflow-hidden rounded-xl"
											whileHover={{ scale: 1.02 }}
											transition={{ duration: 0.3 }}
										>
											{/* Кадр фотографии */}
											<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

											<div className="relative">
												<img
													alt={alt}
													style={{ ...style, borderRadius: '12px' }}
													{...restImageProps}
													className="shadow-md group-hover:shadow-xl transition-all duration-300 w-full h-auto"
												/>

												{/* Индикатор категории */}
												<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium shadow-sm flex items-center">
													<span className="mr-1">{category?.icon}</span>
													<span className={`${category?.textColor || 'text-gray-800'}`}>
														{category?.title || photo.category}
													</span>
												</div>

												{/* Подпись фотографии */}
												<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
													<div className="text-white">
														<div className="text-sm font-semibold">{photo.title}</div>
														<div className="text-xs text-white/80 mt-1">{photo.description}</div>
														<div className="text-xs text-white/60 mt-2 flex items-center">
															<span className="mr-2">{category?.icon}</span>
															Нажмите для увеличения
														</div>
													</div>
												</div>
											</div>
										</motion.div>
									);
								}}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Lightbox */}
			<Lightbox
				open={index >= 0}
				close={() => setIndex(-1)}
				slides={allImages.map(img => ({
					src: img.src,
					alt: img.alt,
					title: img.title,
					description: img.description
				}))}
				index={index}
				styles={{
					container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
					navigationPrev: { color: '#f97316', backgroundColor: 'rgba(255,255,255,0.1)' },
					navigationNext: { color: '#f97316', backgroundColor: 'rgba(255,255,255,0.1)' },
					button: { backgroundColor: 'rgba(255,255,255,0.1)' },
				}}
			/>
		</div>
	);
}

export default MasonryGallery;