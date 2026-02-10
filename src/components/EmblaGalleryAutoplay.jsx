// eslint-disable-react-hooks/exhaustive-deps
import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { emblaGalleryAutoplayImages } from '../constants';

const smoothEase = (t) => {
  return 1 - Math.pow(1 - t, 3);
};

function EmblaGalleryAutoplay() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    duration: 50, 
    easing: smoothEase, 
  });
  
  const autoplayRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const goToNextSlide = useCallback(() => {
    if (!emblaApi) return;
    
    const currentIndex = emblaApi.selectedScrollSnap();
    
    if (currentIndex === emblaGalleryAutoplayImages.length - 1) {
    
      setShowOverlay(true);
      
      setTimeout(() => {
        emblaApi.scrollTo(0);
        setTimeout(() => {
          setShowOverlay(false);
        }, 2800); 
      }, 0);
      
    } else {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    if (!emblaApi || showOverlay) return;

    // eslint-disable-next-line react-hooks/immutability
    stopAutoplay();

    autoplayRef.current = setInterval(() => {
      goToNextSlide();
    }, 3500);
  }, [emblaApi, showOverlay, goToNextSlide]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const toggleAutoplay = () => {
    if (isPlaying) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
    setIsPlaying(!isPlaying);
  };

  const scrollNext = useCallback(() => {
    if (showOverlay) return;
    
    stopAutoplay();
    goToNextSlide();
    
    if (isPlaying) {
      setTimeout(startAutoplay, 100);
    }
  }, [showOverlay, stopAutoplay, goToNextSlide, isPlaying, startAutoplay]);

  const scrollPrev = useCallback(() => {
    if (showOverlay) return;
    
    stopAutoplay();
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
    if (isPlaying) {
      setTimeout(startAutoplay, 100);
    }
  }, [emblaApi, isPlaying, startAutoplay, stopAutoplay, showOverlay]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);

    if (isPlaying) {
      startAutoplay();
    }

    return () => {
      stopAutoplay();
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, isPlaying, startAutoplay, stopAutoplay, onSelect]);

  const Overlay = () => (
    <div className="absolute inset-0 z-50 bg-gray-900/70 backdrop-blur-md text-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-white text-4xl mb-4 animate-spin">⟳</div>
        <p className="text-white text-lg">Переходим к началу...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-start justify-center px-4 pt-10">
      <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl w-full">
        
        {showOverlay && <Overlay />}

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {emblaGalleryAutoplayImages.map((image, index) => (
              <div 
                className="flex-[0_0_100%] min-w-0 relative" 
                key={image.id}
              >
                <div className="relative h-[60vh] max-h-[600px] min-h-[300px]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                  <div className="absolute left-4 sm:left-8 md:left-16 top-1/2 transform -translate-y-1/2 text-white max-w-xs sm:max-w-md md:max-w-lg px-2 sm:px-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4">
                      {image.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-4 sm:mb-8 opacity-90">
                      {image.subtitle}
                    </p>
                    <button className="bg-white text-black text-sm sm:text-base font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition-colors">
                      Записаться
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!showOverlay && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-40"
              aria-label="Предыдущий слайд"
            >
              ←
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-40"
              aria-label="Следующий слайд"
            >
              →
            </button>

            <button
              onClick={toggleAutoplay}
              className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-all z-40"
              aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-40">
              {emblaGalleryAutoplayImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    stopAutoplay();
                    emblaApi && emblaApi.scrollTo(index);
                    if (isPlaying) {
                      setTimeout(startAutoplay, 100);
                    }
                  }}
                  className={`w-8 sm:w-12 md:w-16 h-1 rounded overflow-hidden transition-all ${index === selectedIndex ? 'bg-white/80' : 'bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                >
                  <div
                    className={`h-full ${index === selectedIndex ? 'bg-white' : 'bg-transparent'} ${isPlaying && index === selectedIndex ? 'animate-progress' : ''}`}
                    style={{ animationDuration: '3.5s' }}
                  />
                </button>
              ))}
            </div>

            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-40">
              {selectedIndex + 1} / {emblaGalleryAutoplayImages.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default EmblaGalleryAutoplay;