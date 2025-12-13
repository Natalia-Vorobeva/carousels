// Установите: npm install swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ClassicSwiper({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img.src} alt={img.alt} className="w-full h-96 object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ClassicSwiper