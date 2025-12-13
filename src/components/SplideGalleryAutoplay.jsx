import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { emblaGalleryAutoplayImages } from '../constants';

function SplideGalleryAutoplay() {
	return (
		<div className="min-h-screen flex items-center justify-center pt-4 py-8">
			<div className="w-full max-w-6xl">
				<Splide
					options={{
						type: 'loop',
						perPage: 1,
						autoplay: true,
						interval: 4000,
						pauseOnHover: true,
						pauseOnFocus: true,
						pagination: true,
						arrows: true,
						speed: 800,
						easing: 'ease',
						classes: {
							pagination: 'splide__pagination !bottom-2 sm:!bottom-3 md:!bottom-4',
							page: 'splide__pagination__page !bg-white/50 !w-2 !h-2 sm:!w-3 sm:!h-3',
						}
					}}
					aria-label="Промо-галерея услуг"
				>
					{emblaGalleryAutoplayImages.map((image) => (
						<SplideSlide key={image.id}>
							<div className={`relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r ${image.color}`}>
								<div className="grid grid-cols-1 md:grid-cols-2 h-[50vh] min-h-[300px] max-h-[550px]">
									{/* Левая часть - изображение */}
									<div className="relative h-full">
										<img
											src={image.src}
											alt={image.alt}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:hidden" />

										{/* Бейдж с номером слайда для мобильных */}
										<div className="absolute top-2 left-2 md:hidden bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-full">
											{image.id} / {emblaGalleryAutoplayImages.length}
										</div>
									</div>

									{/* Правая часть - текст */}
									<div className="p-4 sm:p-5 md:p-6 flex flex-col justify-center bg-gradient-to-r from-white to-white/95 overflow-y-auto">
										<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
											{image.title}
										</h3>
										<p className="text-sm text-gray-600 mb-3 sm:mb-4 md:mb-5">
											{image.description}
										</p>
										<div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5">
											<button className="bg-purple-600 text-white font-bold text-sm px-4 sm:px-5 py-2 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap">
												Записаться онлайн
											</button>
											<button className="border border-gray-300 text-gray-700 font-bold text-sm px-4 sm:px-5 py-2 rounded-full hover:border-gray-400 transition-colors whitespace-nowrap">
												Смотреть работы
											</button>
										</div>

										{/* Дополнительная информация */}
										<div className="pt-3 sm:pt-4 border-t border-gray-200">
											<div className="flex flex-col xs:flex-row items-start xs:items-center text-gray-500 text-xs">
												<div className="flex items-center mb-1 xs:mb-0">
													<svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<span className="truncate">Запись на удобное время</span>
												</div>
												<span className="hidden xs:inline mx-2">•</span>
												<div className="flex items-center">
													<svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<span className="truncate">Гарантия качества</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Бейдж с номером слайда для десктопа */}
								<div className="absolute top-2 left-2 md:top-3 md:left-3 bg-black/70 text-white text-xs md:text-sm font-bold px-2 md:px-3 py-1 rounded-full">
									{image.id} / {emblaGalleryAutoplayImages.length}
								</div>
							</div>
						</SplideSlide>
					))}
				</Splide>

				{/* Кастомные стили для Splide */}
				<style>{`
					.splide__arrow {
						background: rgba(255, 255, 255, 0.8) !important;
						backdrop-filter: blur(10px);
						border: 1px solid rgba(255, 255, 255, 0.2);
						width: 32px !important;
						height: 32px !important;
						top: 45% !important;
					}
					@media (min-width: 640px) {
						.splide__arrow {
							width: 36px !important;
							height: 36px !important;
							top: 47% !important;
						}
					}
					@media (min-width: 768px) {
						.splide__arrow {
							width: 40px !important;
							height: 40px !important;
							top: 50% !important;
						}
					}
					.splide__arrow:hover {
						background: white !important;
					}
					.splide__arrow svg {
						fill: #333 !important;
						width: 14px !important;
						height: 14px !important;
					}
					@media (min-width: 640px) {
						.splide__arrow svg {
							width: 16px !important;
							height: 16px !important;
						}
					}
					@media (min-width: 768px) {
						.splide__arrow svg {
							width: 18px !important;
							height: 18px !important;
						}
					}
					.splide__pagination__page.is-active {
						background: white !important;
						transform: scale(1.2);
					}
				`}</style>
			</div>
		</div>
	);
}

export default SplideGalleryAutoplay;