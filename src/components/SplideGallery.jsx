import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { portfolioImages } from '../constants';

function SplideGallery() {


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