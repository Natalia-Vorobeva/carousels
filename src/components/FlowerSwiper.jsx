// eslint-disable react-hooks/exhaustive-deps

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

function FlowerSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const flowerImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=1000&fit=crop&crop=face",
      petalColor: "bg-gradient-to-br from-blue-400 to-indigo-600",
      centerColor: "bg-yellow-400",
      name: "Голубой лотос"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1556228574442-60811d7c57e8?w=800&h=1000&fit=crop&crop=face",
      petalColor: "bg-gradient-to-br from-pink-400 to-rose-600",
      centerColor: "bg-amber-400",
      name: "Розовая роза"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=1000&fit=crop&crop=face",
      petalColor: "bg-gradient-to-br from-purple-400 to-violet-600",
      centerColor: "bg-orange-400",
      name: "Фиолетовая орхидея"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=1000&fit=crop&crop=face",
      petalColor: "bg-gradient-to-br from-green-400 to-emerald-600",
      centerColor: "bg-red-400",
      name: "Изумрудный бутон"
    }
  ];

  // Создаем лепестки для цветка
  const petals = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    return {
      angle,
      x: Math.cos(angle) * 100,
      y: Math.sin(angle) * 100,
      rotation: angle * (180 / Math.PI)
    };
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-emerald-50 to-cyan-50 overflow-hidden">
      {/* Анимированные листья на заднем плане */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
												// eslint-disable-next-line react-hooks/purity
          const size = 20 + Math.random() * 40;
          return (
            <div
              key={i}
              className="absolute animate-float-leaf"
              style={{
                width: `${size}px`,
                height: `${size}px`,
															// eslint-disable-next-line react-hooks/purity
                left: `${Math.random() * 100}%`,
															// eslint-disable-next-line react-hooks/purity
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(135deg, #10B981${20 + i * 2}%, transparent)`,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
															// eslint-disable-next-line react-hooks/purity
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${i * 0.5}s`,
															// eslint-disable-next-line react-hooks/purity
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 py-20">
        <Swiper
          modules={[EffectCreative, Mousewheel, Pagination]}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: false,
              translate: [0, 0, -400],
              opacity: 0
            },
            next: {
              shadow: false,
              translate: ['100%', 0, 0]
            }
          }}
          mousewheel={{ forceToAxis: true }}
          pagination={{ clickable: true, type: 'progressbar' }}
          speed={1000}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-[600px]"
        >
          {flowerImages.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div className="relative h-full flex items-center justify-center">
                {/* Цветок - лепестки */}
                <div className="relative w-96 h-96">
                  {petals.map((petal, i) => {
                    const isActive = index === activeIndex;
                    const scale = isActive ? 1 : 0.3;
                    const opacity = isActive ? 1 : 0.2;
                    
                    return (
                      <div
                        key={i}
                        className={`absolute top-1/2 left-1/2 w-40 h-40 transition-all duration-1000 ${image.petalColor} rounded-full`}
                        style={{
                          transform: `
                            translate(-50%, -50%)
                            translate(${petal.x * scale}px, ${petal.y * scale}px)
                            rotate(${petal.rotation}deg)
                            scale(${scale})
                          `,
                          opacity,
                          clipPath: 'ellipse(25% 40% at 50% 50%)',
                          transformOrigin: 'center'
                        }}
                      />
                    );
                  })}
                  
                  {/* Центр цветка */}
                  <div className={`absolute top-1/2 left-1/2 w-32 h-32 ${image.centerColor} rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                    index === activeIndex ? 'scale-100' : 'scale-50'
                  }`}>
                    {/* Тычинки */}
                    {[...Array(12)].map((_, i) => {
                      const angle = (i / 12) * Math.PI * 2;
                      const length = index === activeIndex ? 60 : 20;
                      
                      return (
                        <div
                          key={i}
                          className="absolute top-1/2 left-1/2 w-1 bg-amber-700 rounded-full"
                          style={{
                            height: `${length}px`,
                            transform: `
                              translate(-50%, -50%)
                              rotate(${angle * (180 / Math.PI)}deg)
                              translateY(-${length / 2}px)
                            `,
                            transformOrigin: 'center bottom',
                            opacity: index === activeIndex ? 0.8 : 0.2
                          }}
                        />
                      );
                    })}
                  </div>
                  
                  {/* Изображение в центре */}
                  <div className={`absolute top-1/2 left-1/2 w-40 h-40 rounded-full overflow-hidden transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                    index === activeIndex ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    <img
                      src={image.src}
                      alt={image.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Стебель */}
                <div className={`absolute bottom-0 w-2 h-64 bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-full transition-all duration-700 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-20'
                }`} />
                
                {/* Название цветка */}
                <div className={`absolute bottom-20 text-center transition-all duration-700 ${
                  index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <h3 className="text-3xl font-bold text-emerald-800">{image.name}</h3>
                  <p className="text-emerald-600 mt-2">Прическа вдохновленная природой</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Анимированные частицы пыльцы */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pollen"
            style={{
														// eslint-disable-next-line react-hooks/purity
              left: `${Math.random() * 100}%`,
														// eslint-disable-next-line react-hooks/purity
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
														// eslint-disable-next-line react-hooks/purity
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-leaf {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 0.6; }
        }
        @keyframes pollen {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
				
          // eslint-disable-next-line react-hooks/purity, react-hooks/purity
          100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0); opacity: 0; }
        }
        .animate-float-leaf {
          animation: float-leaf ease-in-out infinite;
        }
        .animate-pollen {
          animation: pollen linear infinite;
        }
        .swiper-pagination-progressbar {
          background: rgba(16, 185, 129, 0.2);
          height: 4px !important;
        }
        .swiper-pagination-progressbar-fill {
          background: linear-gradient(to right, #10B981, #3B82F6) !important;
        }
      `}</style>
    </div>
  );
}

export default FlowerSwiper