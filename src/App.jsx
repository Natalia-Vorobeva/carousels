import { useState, lazy, Suspense, useEffect, useRef } from 'react';
import './global.css';
import TitleSlide from './components/TitleSlide';

// Ленивая загрузка тяжелых 
const GridPagesSlider = lazy(() => import('./components/GridPagesSlider'));
// const ThumbnailGallery = lazy(() => import('./components/ThumbnailGallery'));
const EmblaGalleryCategories = lazy(() => import('./components/EmblaGalleryCategories'));
const EmblaGalleryAutoplay = lazy(() => import('./components/EmblaGalleryAutoplay'));
const EmblaGalleryBasic = lazy(() => import('./components/EmblaGalleryBasic'));
const SplideGallery = lazy(() => import('./components/SplideGallery'));
const SimpleLightbox = lazy(() => import('./components/SimpleLightbox'));
const MasonryGallery = lazy(() => import('./components/MasonryGallery'));
const CoverflowGallery = lazy(() => import('./components/CoverflowGallery'));
// const SplideGalleryWithFilters = lazy(() => import('./components/SplideGalleryWithFilters'));
const SplideGalleryAutoplay = lazy(() => import('./components/SplideGalleryAutoplay'));
// const SplideGalleryWithThumbs = lazy(() => import('./components/SplideGalleryWithThumbs'));


const LoadingSpinner = () => (
	<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
		<div className="relative">
			<div className="w-16 h-16 border-4 border-purple-500/30 rounded-full"></div>
			<div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
			<p className="mt-4 text-white/70 text-sm">Загружаем слайдер...</p>
		</div>
	</div>
)
// Основной контейнер для контента слайда
const SlideContainer = ({ children, color }) => (
	<div className="relative w-full h-full">
		{/* Фоновый градиент */}
		<div
			className="absolute inset-0 transition-all duration-700"
			style={{
				background: color || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
			}}
		/>

		{/* Контент слайда */}
		<div className="relative h-full overflow-hidden">
			{children}
		</div>
	</div>
);
// Панель навигации (внизу)
const BottomNavigation = ({
	currentIndex,
	totalSlides,
	onPrev,
	onNext
}) => {
	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-sm">
			<div className="container mx-auto px-4 py-4">
				{/* Десктопная версия (скрыта на мобильных) */}
				<div className="hidden md:grid grid-cols-3 items-center gap-4">
					{/* Левая часть - информация о слайде */}
					<div className="text-white min-w-0">
						<div className="text-sm opacity-70">Текущий слайдер</div>
						<div className="font-bold text-lg truncate">
							{slidesConfig[currentIndex]?.name}
						</div>
					</div>

					{/* Центральная часть - кнопки навигации */}
					<div className="flex items-center justify-center space-x-4">
						<button
							onClick={onPrev}
							className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all flex-shrink-0"
							aria-label="Предыдущий слайд"
						>
							←
						</button>

						<div className="text-center min-w-[80px]">
							<div className="text-white font-bold text-xl">
								{currentIndex + 1} / {totalSlides}
							</div>
						</div>

						<button
							onClick={onNext}
							className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all flex-shrink-0"
							aria-label="Следующий слайд"
						>
							→
						</button>
					</div>

					{/* Правая часть - прогресс бар */}
					<div className="flex justify-end">
						<div className="w-48">
							<div className="h-1 bg-white/20 rounded-full overflow-hidden">
								<div
									className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
									style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Мобильная версия (видна только на экранах меньше 700px) */}
				<div className="md:hidden">
					{/* Верхний ряд: информация и счетчик */}
					<div className="flex items-center justify-between mb-4">
						<div className="text-white min-w-0 flex-1 mr-4">
							<div className="text-xs opacity-70 truncate">Текущий слайдер</div>
							<div className="font-bold text-sm truncate">
								{slidesConfig[currentIndex]?.name}
							</div>
						</div>
						<div className="text-white font-bold text-lg whitespace-nowrap">
							{currentIndex + 1} / {totalSlides}
						</div>
					</div>

					{/* Средний ряд: прогресс бар */}
					<div className="mb-4">
						<div className="h-1 bg-white/20 rounded-full overflow-hidden">
							<div
								className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
								style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
							/>
						</div>
					</div>

					{/* Нижний ряд: кнопки навигации */}
					<div className="flex items-center justify-center space-x-6">
						<button
							onClick={onPrev}
							className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all flex-shrink-0"
							aria-label="Предыдущий слайд"
						>
							←
						</button>

						<button
							onClick={onNext}
							className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all flex-shrink-0"
							aria-label="Следующий слайд"
						>
							→
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
// Конфигурация слайдов
const slidesConfig = [
	{
		id: 1,
		name: "Перезентация слайдеров",
		component: TitleSlide,
		description: "Горизонтальные слайды с сеткой",
		category: "Embla",
		difficulty: "Средний",
		color: "from-indigo-500 to-blue-400"
	},
	{
		id: 2,
		name: "Сетка страниц",
		component: GridPagesSlider,
		description: "Горизонтальные слайды с сеткой",
		category: "Embla",
		difficulty: "Средний",
		color: "from-indigo-500 to-blue-400"
	},	
	{
		id: 3,
		name: "Embla - Категории",
		component: EmblaGalleryCategories,
		description: "Слайдер с фильтрацией",
		category: "Embla",
		difficulty: "Легкий",
		color: "from-amber-500 to-orange-400"
	},
	{
		id: 4,
		name: "Embla - Автопрокрутка",
		component: EmblaGalleryAutoplay,
		description: "Автоматическая смена слайдов",
		category: "Embla",
		difficulty: "Легкий",
		color: "from-lime-500 to-green-400"
	},
	{
		id: 5,
		name: "Embla - Базовый",
		component: EmblaGalleryBasic,
		description: "Простой слайдер Embla",
		category: "Embla",
		difficulty: "Легкий",
		color: "from-teal-500 to-cyan-400"
	},
	{
		id: 6,
		name: "Splide - Базовая галерея",
		component: SplideGallery,
		description: "Простой слайдер Splide",
		category: "Splide",
		difficulty: "Легкий",
		color: "from-violet-500 to-purple-400"
	},
	{
		id: 7,
		name: "Простой лайтбокс",
		component: SimpleLightbox,
		description: "Галерея с лайтбоксом",
		category: "Галереи",
		difficulty: "Легкий",
		color: "from-gray-400 to-gray-600"
	},  
	{
		id: 8,
		name: "Splide - Автопрокрутка",
		component: SplideGalleryAutoplay,
		description: "Промо-слайдер с автопрокруткой",
		category: "Splide",
		difficulty: "Средний",
		color: "from-rose-500 to-pink-400"
	}
];
	// {
	//   id: 8,
	//   name: "Кирпичная кладка",
	//   component: MasonryGallery,
	//   description: "Адаптивная сетка Pinterest",
	//   category: "Галереи",
	//   difficulty: "Средний",
	//   color: "from-yellow-500 to-amber-400"
	// },
//   id: 2,
	//   name: "Галерея с превью",
	//   component: ThumbnailGallery,
	//   description: "Основной слайдер + миниатюры",
	//   category: "Галереи",
	//   difficulty: "Средний",
	//   color: "from-pink-500 to-rose-400"
	// },
		// {
	//   id: 11,
	//   name: "Splide - Фильтры",
	//   component: SplideGalleryWithFilters,
	//   description: "Слайдер с фильтрами по категориям",
	//   category: "Splide",
	//   difficulty: "Средний",
	//   color: "from-emerald-500 to-teal-400"
	// },
		// {
	//   id: 10,
	//   name: "Splide - С миниатюрами",
	//   component: SplideGalleryWithThumbs,
	//   description: "Слайдер с превью-галереей",
	//   category: "Splide",
	//   difficulty: "Средний",
	//   color: "from-blue-400 to-indigo-400"
	// },
	// {
	//   id: 11,
	//   name: "Swiper - Coverflow с фильтрами",
	//   component: CoverflowGallery,
	//   description: "Эффект coverflow с фильтрацией по категориям",
	//   category: "Swiper",
	//   difficulty: "Средний",
	//   color: "from-emerald-500 to-teal-400"
	// }

// Компонент для меню навигации
const SlideMenu = ({ slides, currentSlide, setCurrentSlide, isMenuOpen, setIsMenuOpen }) => {
	const menuRef = useRef(null);

	return (
		<div className={`fixed top-4 left-4 z-50 transition-all duration-300 ${isMenuOpen ? 'w-64' : 'w-12'}`}>
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className="w-12 h-12 bg-black/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center mb-4 hover:bg-black transition-colors shadow-lg"
				aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
			>
				{isMenuOpen ? '✕' : '☰'}
			</button>

			{isMenuOpen && (
				<div
					ref={menuRef}
					className="bg-black/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10 overflow-y-auto"
					style={{
						maxHeight: 'calc(100vh - 140px)',
						scrollbarWidth: 'thin',
						scrollbarColor: '#8b5cf6 rgba(0, 0, 0, 0.1)'
					}}
				>
					<h3 className="text-white font-bold mb-3 px-2 sticky top-0 bg-black/90 backdrop-blur-sm py-2 -mx-4 px-4 z-10">
						Слайдеры ({slides.length})
					</h3>
					<div className="space-y-2">
						{slides.map((slide, index) => (
							<button
								key={slide.id}
								onClick={() => {
									setCurrentSlide(index);
									setIsMenuOpen(false);
								}}
								className={`w-full text-left px-4 py-3 rounded-lg transition-all group ${currentSlide === index
										? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
										: 'text-gray-300 hover:bg-white/10 hover:text-white'
									}`}
							>
								<div className="flex items-center justify-between">
									<span className="font-medium truncate">{slide.name}</span>
									<div className="flex items-center space-x-2">
										<span className={`text-xs px-2 py-0.5 rounded-full ${slide.difficulty === 'Тяжелый' ? 'bg-red-500/20 text-red-300' :
												slide.difficulty === 'Средний' ? 'bg-yellow-500/20 text-yellow-300' :
													'bg-green-500/20 text-green-300'
											}`}>
											{slide.difficulty.charAt(0)}
										</span>
										<span className="text-xs opacity-60">#{index + 1}</span>
									</div>
								</div>
								<div className="text-xs opacity-60 mt-1 truncate">{slide.description}</div>
							</button>
						))}
					</div>

					{/* Кастомный скроллбар для меню */}
					<style jsx>{`
            div::-webkit-scrollbar {
              width: 4px;
            }
            div::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 0.1);
              border-radius: 10px;
            }
            div::-webkit-scrollbar-thumb {
              background: linear-gradient(to bottom, #8b5cf6, #ec4899);
              border-radius: 10px;
            }
          `}</style>
				</div>
			)}
		</div>
	);
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const CurrentComponent = slidesConfig[currentIndex]?.component;

  const goToSlide = (index) => {
    setIsLoading(true);
    setCurrentIndex(index);
    setIsMenuOpen(false);
    setTimeout(() => setIsLoading(false), 100);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % slidesConfig.length;
    goToSlide(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + slidesConfig.length) % slidesConfig.length;
    goToSlide(prevIndex);
  };

  // Обработка клавиш клавиатуры
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }
      
      switch(e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          goToNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goToPrev();
          break;
        case 'm':
        case 'M':
          e.preventDefault();
          setIsMenuOpen(!isMenuOpen);
          break;
        case 'Escape':
          e.preventDefault();
          setIsMenuOpen(false);
          break;
        case 'Home':
          e.preventDefault();
          setCurrentIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentIndex(slidesConfig.length - 1);
          break;
        default:
          if (e.key >= '1' && e.key <= '9') {
            const num = parseInt(e.key, 10);
            if (num >= 1 && num <= 9 && num <= slidesConfig.length) {
              e.preventDefault();
              setCurrentIndex(num - 1);
              setIsMenuOpen(false);
            }
          }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isMenuOpen]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Меню навигации */}
      <SlideMenu
        slides={slidesConfig}
        currentSlide={currentIndex}
        setCurrentSlide={setCurrentIndex}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      {/* Область для слайда с учетом отступов */}
      <main className="relative w-full h-full">
        {/* Верхний отступ (можно использовать для заголовков при необходимости) */}
        <div className="absolute top-0 left-0 right-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-end space-x-2">
              <span className="text-xs text-white/60 px-2 py-1 bg-white/10 rounded">
                {slidesConfig[currentIndex]?.category}
              </span>
              <span className="text-xs text-white/60">
                Нажмите M для меню
              </span>
            </div>
          </div>
        </div>

        {/* Основной контент слайда */}
        <div className="absolute inset-0 pt-16 pb-24 px-4">
          <div className="w-full h-full">
            <Suspense fallback={<LoadingSpinner />}>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                CurrentComponent && (
                  <SlideContainer color={slidesConfig[currentIndex]?.color}>
                    <CurrentComponent />
                  </SlideContainer>
                )
              )}
            </Suspense>
          </div>
        </div>

        {/* Нижняя панель навигации */}
        <BottomNavigation
          currentIndex={currentIndex}
          totalSlides={slidesConfig.length}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      </main>  
    </div>
  );
}

export default App;