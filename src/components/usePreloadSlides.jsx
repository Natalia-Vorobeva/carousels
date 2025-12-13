// components/PreloadManager.js
import { useEffect } from 'react';

export function usePreloadSlides(currentSlide, slides) {
  useEffect(() => {
    // Предзагружаем следующий и предыдущий слайды
    const preloadSlides = [currentSlide - 1, currentSlide + 1]
      .filter(index => index >= 0 && index < slides.length)
      .map(index => slides[index].component);
    
    // Инициируем загрузку компонентов
    preloadSlides.forEach(Component => {
      if (Component?.preload) {
        Component.preload();
      }
    });
  }, [currentSlide, slides]);
}

export default usePreloadSlides

// Использование в App.js:
// usePreloadSlides(currentSlide, slides);