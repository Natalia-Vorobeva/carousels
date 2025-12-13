import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function SplideGallery() {
  // Базовые моковые данные для парикмахера
  const portfolioImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop&crop=face",
      alt: "Каре с челкой",
      title: "Классическое каре",
      category: "Стрижки",
      featured: true
    },
    {
      id: 2,
      src: "https://50.img.avito.st/image/1/1.lAEYx7aDOOh2b9jiPL2mNgFmOu6mbOLhTGw66qB6OOKMaAIir2Q.Pt8D6MNT82AdT8sF1zekgmSZhvESPxvu7SuZAEb5f_Y",
      alt: "Балаяж на длинные волосы",
      title: "Окрашивание балаяж",
      category: "Окрашивание",
      featured: true
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop&crop=face",
      alt: "Градуированный боб",
      title: "Боб каре",
      category: "Стрижки",
      featured: false
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop&crop=face",
      alt: "Асимметричная стрижка",
      title: "Асимметрия",
      category: "Стрижки",
      featured: true
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop&crop=face",
      alt: "Стрижка пикси",
      title: "Пикси",
      category: "Стрижки",
      featured: false
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=800&h=600&fit=crop&crop=face",
      alt: "Омбре на темных волосах",
      title: "Омбре",
      category: "Окрашивание",
      featured: true
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&h=600&fit=crop&crop=face",
      alt: "Мелирование шатуш",
      title: "Шатуш",
      category: "Окрашивание",
      featured: false
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=600&fit=crop&crop=face",
      alt: "Вечерняя укладка",
      title: "Локоны",
      category: "Укладки",
      featured: true
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-6xl">
        <Splide 
          options={{
            type: 'loop',
            perPage: 3,
            gap: '1rem',
            pagination: true,
            arrows: true,
            breakpoints: {
              640: { perPage: 1 },
              768: { perPage: 2 },
              1024: { perPage: 3 }
            }
          }}
          aria-label="Портфолио работ"
        >
          {portfolioImages.map((image) => (
            <SplideSlide key={image.id}>
              <div className="relative rounded-xl overflow-hidden shadow-lg group">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {image.category}
                      </span>
                      {image.featured && (
                        <span className="text-xs bg-yellow-500 px-2 py-1 rounded-full">★</span>
                      )}
                    </div>
                    <h3 className="font-bold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default SplideGallery;