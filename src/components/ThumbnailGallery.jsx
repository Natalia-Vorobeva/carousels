// eslint-disable react-hooks/exhaustive-deps
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode, Autoplay } from 'swiper/modules';
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiStar, 
  FiClock, 
  FiCamera,
  FiUser,
  FiMapPin,
  FiDollarSign,
  FiTrendingUp,
  FiGrid,
  FiFilter
} from 'react-icons/fi';

// Импортируем CSS для Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

// Иконки для категорий
const CategoryIcon = ({ category, className = "w-4 h-4" }) => {
  const icons = {
    "Портрет": <FiUser className={className} />,
    "Свадьба": "💍",
    "Природа": "🌄",
    "Коммерческая": "💼",
    "Фэшн": "👗",
    "Архитектура": "🏛️",
    "Еда": "🍽️",
    "Путешествия": "✈️",
    "Семья": "👨‍👩‍👧‍👦",
    "Документальная": "📸",
    "Красота": "💄",
    "Спорт": "⚽",
    "Искусство": "🎨",
    "Концерты": "🎤",
    "Все виды": <FiGrid className={className} />
  };
  
  return icons[category] || <FiCamera className={className} />;
};

// Моковые данные для видов фотосъемки
const photographyTypes = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=800&fit=crop&crop=center",
    alt: "Портретная съемка",
    title: "Портретная съемка",
    category: "Портрет",
    description: "Искусство передачи индивидуальности и эмоций человека",
    price: "от 5000₽",
    duration: "2 часа",
    featured: true,
    tags: ["личность", "эмоции", "студия"],
    location: "Студия/Натура",
    level: "Профессиональный"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200&h=800&fit=crop&crop=center",
    alt: "Свадебная фотосъемка",
    title: "Свадебная съемка",
    category: "Свадьба",
    description: "Захват самых важных моментов вашего особенного дня",
    price: "от 25000₽",
    duration: "8-10 часов",
    featured: true,
    tags: ["свадьба", "любовь", "праздник"],
    location: "Любое место",
    level: "Премиум"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&crop=center",
    alt: "Пейзажная фотография",
    title: "Пейзажная съемка",
    category: "Природа",
    description: "Захват величественной красоты природы в разное время суток",
    price: "от 8000₽",
    duration: "4-6 часов",
    featured: true,
    tags: ["природа", "путешествия", "горы"],
    location: "Натура",
    level: "Профессиональный"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop&crop=center",
    alt: "Предметная съемка",
    title: "Предметная съемка",
    category: "Коммерческая",
    description: "Профессиональная съемка товаров для каталогов и рекламы",
    price: "от 3000₽",
    duration: "1-3 часа",
    featured: false,
    tags: ["товары", "e-commerce", "реклама"],
    location: "Студия",
    level: "Бизнес"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop&crop=center",
    alt: "Фэшн съемка",
    title: "Фэшн съемка",
    category: "Фэшн",
    description: "Создание стильных образов для модных брендов и журналов",
    price: "от 15000₽",
    duration: "4-5 часов",
    featured: true,
    tags: ["мода", "стиль", "образы"],
    location: "Студия/Локация",
    level: "Премиум"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=1200&h=800&fit=crop&crop=center",
    alt: "Архитектурная съемка",
    title: "Архитектура",
    category: "Архитектура",
    description: "Фотография зданий, интерьеров и архитектурных деталей",
    price: "от 7000₽",
    duration: "3-4 часа",
    featured: false,
    tags: ["архитектура", "интерьер", "дизайн"],
    location: "Город/Интерьер",
    level: "Профессиональный"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&h=800&fit=crop&crop=center",
    alt: "Фуд-фотография",
    title: "Фуд-фотография",
    category: "Еда",
    description: "Искусство съемки еды для ресторанов и кулинарных блогов",
    price: "от 4000₽",
    duration: "2-3 часа",
    featured: true,
    tags: ["еда", "ресторан", "кулинария"],
    location: "Студия/Ресторан",
    level: "Профессиональный"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1200&h=800&fit=crop&crop=center",
    alt: "Трэвел съемка",
    title: "Путешествия",
    category: "Путешествия",
    description: "Запечатление уникальных мест и культур по всему миру",
    price: "от 12000₽",
    duration: "День/Проект",
    featured: true,
    tags: ["путешествия", "культура", "приключения"],
    location: "Любая страна",
    level: "Эксперт"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&h=800&fit=crop&crop=center",
    alt: "Семейная фотосессия",
    title: "Семейная съемка",
    category: "Семья",
    description: "Теплые моменты семейной жизни в естественной обстановке",
    price: "от 6000₽",
    duration: "2 часа",
    featured: false,
    tags: ["семья", "дети", "любовь"],
    location: "Дом/Парк",
    level: "Стандарт"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1518834103328-93b14566d187?w=1200&h=800&fit=crop&crop=center",
    alt: "Документальная фотография",
    title: "Документальная съемка",
    category: "Документальная",
    description: "Правдивое отображение реальных событий и социальных явлений",
    price: "от 10000₽",
    duration: "Проектная",
    featured: true,
    tags: ["репортаж", "документалистика", "социальное"],
    location: "События",
    level: "Профессиональный"
  }
];

// Данные сгруппированные по категориям
const portfolioByCategory = {
  "Все виды": photographyTypes,
  "Портрет": photographyTypes.filter(item => item.category === "Портрет"),
  "Свадьба": photographyTypes.filter(item => item.category === "Свадьба"),
  "Природа": photographyTypes.filter(item => item.category === "Природа"),
  "Коммерческая": photographyTypes.filter(item => item.category === "Коммерческая"),
  "Фэшн": photographyTypes.filter(item => item.category === "Фэшн"),
  "Архитектура": photographyTypes.filter(item => item.category === "Архитектура"),
  "Еда": photographyTypes.filter(item => item.category === "Еда"),
  "Путешествия": photographyTypes.filter(item => item.category === "Путешествия"),
  "Семья": photographyTypes.filter(item => item.category === "Семья"),
  "Документальная": photographyTypes.filter(item => item.category === "Документальная")
};

function ThumbnailGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Все виды");
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);
  
  const filteredImages = portfolioByCategory[selectedCategory];

  // Сброс активного индекса при смене категории
  useEffect(() => {
    setActiveIndex(0);
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideTo(0);
    }
    if (thumbsSwiperRef.current && thumbsSwiperRef.current.swiper) {
      thumbsSwiperRef.current.swiper.slideTo(0);
    }
  }, [selectedCategory]);

  // Эффект для синхронизации превью с главным слайдером
  useEffect(() => {
    if (thumbsSwiper && mainSwiperRef.current?.swiper) {
      thumbsSwiper.slideTo(activeIndex);
    }
  }, [activeIndex, thumbsSwiper]);

  // Принудительное обновление Swiper при изменении данных
  useEffect(() => {
    if (thumbsSwiperRef.current?.swiper) {
      thumbsSwiperRef.current.swiper.update();
      thumbsSwiperRef.current.swiper.slideTo(0);
    }
  }, [filteredImages]);

  return (
    <div className="w-full h-full flex flex-col" style={{ maxHeight: 'calc(100vh - 200px)' }}>
      {/* Фиксированное меню фильтрации */}
      <div className="flex-shrink-0 mb-4 lg:mb-6">
        <div className="flex flex-wrap justify-center gap-1.5 px-2">
          {Object.keys(portfolioByCategory).map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg
                transition-all duration-200 ease-out border flex-shrink-0
                ${selectedCategory === category 
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-sm' 
                  : 'bg-white/60 backdrop-blur-sm border-gray-100 hover:border-blue-100 hover:bg-white'
                }
                hover:-translate-y-0.5 active:translate-y-0
              `}
            >
              {selectedCategory === category && (
                <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              )}
              
              <div className={`p-1 rounded-md ${
                selectedCategory === category 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' 
                  : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500'
              }`}>
                <CategoryIcon category={category} className="w-3.5 h-3.5" />
              </div>
              
              <div className="flex flex-col items-start">
                <span className={`
                  text-xs font-medium whitespace-nowrap
                  ${selectedCategory === category 
                    ? 'text-gray-900' 
                    : 'text-gray-600 group-hover:text-gray-800'
                  }
                `}>
                  {category}
                </span>
                <span className={`
                  text-[10px] mt-0.5
                  ${selectedCategory === category 
                    ? 'text-blue-600' 
                    : 'text-gray-400 group-hover:text-blue-400'
                  }
                `}>
                  {portfolioByCategory[category].length}
                </span>
              </div>
            </button>
          ))}
        </div>
        
        <div className="flex items-center justify-center gap-2 mt-2">
          <FiFilter className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-500">
            Выбрано: <span className="font-medium text-gray-700">{selectedCategory}</span> • <span className="text-blue-500">{filteredImages.length} работ</span>
          </span>
        </div>
      </div>

      {/* Основной слайдер */}
      <div className="flex-1 min-h-0 mb-4 lg:mb-6 relative">
        <Swiper
          ref={mainSwiperRef}
          modules={[Navigation, Pagination, Thumbs, Autoplay]}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
            renderBullet: function (index, className) {
              return `<span class="${className} !w-1.5 !h-1.5 !mx-1 !bg-white/60 hover:bg-white !opacity-100"></span>`;
            }
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          speed={700}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="h-full rounded-2xl overflow-hidden shadow-2xl"
          key={selectedCategory} // Важно: ключ для пересоздания при смене категории
        >
          {filteredImages.map((image, index) => (
            <SwiperSlide key={`${image.id}-${selectedCategory}-${index}`}>
              <div className="relative h-full overflow-hidden group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/30 flex items-center gap-1.5">
                      <CategoryIcon category={image.category} className="w-3 h-3" />
                      {image.category}
                    </span>
                    
                    {image.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1">
                        <FiStar className="w-3 h-3" />
                        FEATURED
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-white text-xl lg:text-2xl font-bold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-sm lg:text-base mb-4 max-w-2xl">
                    {image.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <div className="text-2xl font-bold mb-1 flex items-center gap-2">
                        <FiDollarSign className="w-5 h-5 opacity-70" />
                        {image.price}
                      </div>
                      <div className="text-sm opacity-90 flex items-center gap-2">
                        <FiClock className="w-4 h-4" />
                        {image.duration}
                        <span className="mx-2">•</span>
                        <span className="bg-white/20 px-2 py-0.5 rounded text-xs flex items-center gap-1">
                          <FiTrendingUp className="w-3 h-3" />
                          {image.level}
                        </span>
                      </div>
                    </div>
                    
                    <div className="hidden lg:flex gap-2">
                      {image.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="bg-white/10 backdrop-blur-sm text-white/80 text-xs px-3 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full">
                  {index + 1} / {filteredImages.length}
                </div>
                
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                  <FiMapPin className="w-3 h-3" />
                  {image.location}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 z-10 pointer-events-none">
          <div className="flex justify-between">
            <button className="swiper-button-prev-custom group bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl border border-white/20 pointer-events-auto">
              <FiChevronLeft className="w-4 h-4" />
            </button>
            <button className="swiper-button-next-custom group bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl border border-white/20 pointer-events-auto">
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Слайдер превью */}
      <div className="flex-shrink-0 h-20 lg:h-24">
        <Swiper
          ref={thumbsSwiperRef}
          modules={[Thumbs, FreeMode]}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress={true}
          spaceBetween={8}
          slidesPerView={Math.min(5, filteredImages.length)} // Динамический slidesPerView
          freeMode={true}
          observer={true}
          observeParents={true}
          breakpoints={{
            320: { 
              slidesPerView: Math.min(3, filteredImages.length),
              spaceBetween: 6
            },
            640: { 
              slidesPerView: Math.min(4, filteredImages.length),
              spaceBetween: 6
            },
            768: { 
              slidesPerView: Math.min(5, filteredImages.length),
              spaceBetween: 8
            },
            1024: { 
              slidesPerView: Math.min(6, filteredImages.length),
              spaceBetween: 8
            }
          }}
          className="h-full"
          key={`thumbs-${selectedCategory}-${filteredImages.length}`} // Ключ для пересоздания
        >
          {filteredImages.map((image, index) => (
            <SwiperSlide key={`thumb-${image.id}-${index}`}>
              <button
                onClick={() => {
                  setActiveIndex(index);
                  if (mainSwiperRef.current?.swiper) {
                    mainSwiperRef.current.swiper.slideTo(index);
                  }
                }}
                className={`
                  relative h-full w-full cursor-pointer overflow-hidden rounded-lg
                  transition-all duration-300 group outline-none
                  ${index === activeIndex 
                    ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/20 scale-105' 
                    : 'ring-1 ring-gray-200 hover:ring-blue-300 hover:scale-102'
                  }
                `}
              >
                <img
                  src={image.src.replace(/(w=)(\d+)/, '$1400').replace(/(h=)(\d+)/, '$1100')}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {index !== activeIndex && (
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                )}
                
                {index === activeIndex && (
                  <>
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-lg animate-pulse" />
                    <div className="absolute inset-0 bg-blue-500/5" />
                  </>
                )}
                
                <div className={`
                  absolute bottom-1.5 left-1.5 w-5 h-5 rounded-full flex items-center justify-center
                  transition-all duration-300 text-xs font-bold
                  ${index === activeIndex 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/90 text-gray-700 group-hover:bg-white'
                  }
                `}>
                  {index + 1}
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <FiGrid className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-500">
            Кликните превью для навигации • {filteredImages.length} работ
          </span>
        </div>
      </div>
    </div>
  );
}

export default ThumbnailGallery;