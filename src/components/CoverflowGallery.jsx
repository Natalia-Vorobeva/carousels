import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CoverflowGallery = ({ 
  title = "Портфолио работ", 
  description = "Мои лучшие работы. Панорамная галерея позволяет рассмотреть каждую деталь.",
  initialFilter = 'all'
}) => {
  const [activeFilter, setActiveGalleryFilter] = useState(initialFilter);

  // Исправленные моковые данные с разными изображениями
  const galleryData = [
    // Женские стрижки
    { id: 1, image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=1000&fit=crop&crop=face", title: "Классическое каре", category: "women" },
    { id: 2, image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=1000&fit=crop&crop=face", title: "Градуированный боб", category: "women" },
    { id: 3, image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=1000&fit=crop&crop=face", title: "Асимметричная стрижка", category: "women" },
    { id: 11, image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=1000&fit=crop&crop=face", title: "Стрижка пикси", category: "women" },
    
    // Мужские стрижки
    { id: 4, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face", title: "Классический фейд", category: "men" },
    { id: 5, image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800&h=1000&fit=crop&crop=face", title: "Короткая бокс", category: "men" },
    
    // Окрашивание
    { id: 6, image: "https://images.unsplash.com/photo-1556228574442-60811d7c57e8?w=800&h=1000&fit=crop&crop=face", title: "Окрашивание балаяж", category: "coloring" },
    { id: 7, image: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=800&h=1000&fit=crop&crop=face", title: "Омбре на темных волосах", category: "coloring" },
    
    // Укладки
    { id: 8, image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=1000&fit=crop&crop=face", title: "Объемные локоны", category: "styling" },
    { id: 9, image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop&crop=face", title: "Идеально гладкие", category: "styling" },
    { id: 10, image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=800&h=1000&fit=crop&crop=face", title: "Свадебная укладка", category: "styling" },
    { id: 12, image: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&h=1000&fit=crop&crop=face", title: "Пляжные волны", category: "styling" }
  ];

  const filters = [
    { key: 'all', label: 'Все работы', count: galleryData.length },
    { key: 'women', label: 'Женские стрижки', count: galleryData.filter(item => item.category === 'women').length },
    { key: 'men', label: 'Мужские стрижки', count: galleryData.filter(item => item.category === 'men').length },
    { key: 'coloring', label: 'Окрашивание', count: galleryData.filter(item => item.category === 'coloring').length },
    { key: 'styling', label: 'Укладки', count: galleryData.filter(item => item.category === 'styling').length }
  ];

  // Фильтруем галерею
  const filteredGallery = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      {/* Верхняя часть - заголовок и категории */}
      <div className="flex-shrink-0 pt-4 pb-2 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-600 text-xs font-semibold rounded-full mb-2">
              Coverflow Галерея
            </span>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Эффект <span className="text-orange-500">3D перелистывания</span>
            </h2>
            <p className="text-xs text-gray-600 max-w-xl mx-auto">
              Панорамная галерея с фильтрацией по категориям
            </p>
          </div>

          {/* Фильтры галереи */}
          <div className="mb-2">
            <div className="flex flex-wrap justify-center gap-1">
              {/* Кнопка "Все" */}
              <button
                onClick={() => setActiveGalleryFilter('all')}
                className={`px-2 py-1 text-xs rounded-lg font-medium transition-all duration-300 flex items-center ${
                  activeFilter === 'all' 
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span>Все</span>
                <span className="ml-1 text-xs bg-white/20 px-1 rounded">
                  {galleryData.length}
                </span>
              </button>

              {/* Кнопки категорий */}
              {filters.slice(1).map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveGalleryFilter(filter.key)}
                  className={`px-2 py-1 text-xs rounded-lg font-medium transition-all duration-300 flex items-center ${
                    activeFilter === filter.key 
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span>{filter.label}</span>
                  <span className="ml-1 text-xs bg-white/20 px-1 rounded">
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Информация о выбранном фильтре */}
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-2 border border-white/80 shadow-sm mb-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {activeFilter === 'all' ? 'Все работы' : 
                   activeFilter === 'women' ? 'Женские стрижки' :
                   activeFilter === 'men' ? 'Мужские стрижки' :
                   activeFilter === 'coloring' ? 'Окрашивание' : 'Укладки'}
                </h3>
                <p className="text-xs text-gray-600">{filteredGallery.length} работ</p>
              </div>
              <div className="text-xs text-gray-500">
                Листайте влево/вправо
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Coverflow Gallery */}
      <div className="flex-1 overflow-hidden px-2 pb-2">
        <div className="h-full flex items-center">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="h-full"
          >
            {filteredGallery.map((item) => (
              <SwiperSlide 
                key={item.id} 
                className="!w-48 !h-64 sm:!w-56 sm:!h-72 md:!w-64 md:!h-80 lg:!w-72 lg:!h-96"
              >
                <div className="relative w-full h-full group rounded-xl overflow-hidden shadow-xl">
                  {/* Изображение */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Градиентный оверлей */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Индикатор категории */}
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                    {item.category === 'women' && '👩‍🦰'}
                    {item.category === 'men' && '👨‍🦰'}
                    {item.category === 'coloring' && '🎨'}
                    {item.category === 'styling' && '💇‍♀️'}
                  </div>
                  
                  {/* Заголовок */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-sm font-bold text-white truncate">{item.title}</h3>
                    <div className="text-xs text-white/80 mt-0.5">
                      {item.category === 'women' && 'Женская стрижка'}
                      {item.category === 'men' && 'Мужская стрижка'}
                      {item.category === 'coloring' && 'Окрашивание'}
                      {item.category === 'styling' && 'Укладка'}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Стили для Swiper */}
      <style jsx global>{`
        .swiper {
          width: 100%;
          height: 100%;
        }
        
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.4s ease;
        }
        
        .swiper-slide-active {
          transform: scale(1.05);
        }
        
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
        }
        
        .swiper-pagination-bullet-active {
          width: 24px;
          background: linear-gradient(to right, #f97316, #f59e0b);
          border-radius: 4px;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          color: #f97316;
          font-weight: bold;
        }
        
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CoverflowGallery;