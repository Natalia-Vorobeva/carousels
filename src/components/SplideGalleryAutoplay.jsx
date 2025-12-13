import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function SplideGalleryAutoplay() {
	// Моковые данные для автопрокрутки
	const autoplayImages = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=600&fit=crop&crop=face",
			alt: "Стрижки",
			title: "Современные стрижки",
			description: "Любая сложность и длина",
			color: "from-blue-500/20 to-blue-700/20"
		},
		{
			id: 2,
			src: "https://50.img.avito.st/image/1/1.lAEYx7aDOOh2b9jiPL2mNgFmOu6mbOLhTGw66qB6OOKMaAIir2Q.Pt8D6MNT82AdT8sF1zekgmSZhvESPxvu7SuZAEb5f_Y",
			alt: "Окрашивание",
			title: "Профессиональное окрашивание",
			description: "Балаяж, омбре, шатуш, мелирование",
			color: "from-pink-500/20 to-rose-700/20"
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&h=600&fit=crop&crop=face",
			alt: "Укладки",
			title: "Вечерние укладки",
			description: "Для особых случаев и праздников",
			color: "from-amber-500/20 to-orange-700/20"
		},
		{
			id: 4,
			src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=face",
			alt: "Мужские стрижки",
			title: "Мужские стрижки",
			description: "Классика и современные тренды",
			color: "from-emerald-500/20 to-teal-700/20"
		},
		{
			id: 5,
			src: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=1200&h=600&fit=crop&crop=face",
			alt: "Свадебные прически",
			title: "Свадебные образы",
			description: "Незабываемый день - идеальный образ",
			color: "from-purple-500/20 to-violet-700/20"
		}
	];

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
							pagination: 'splide__pagination !bottom-2 sm:!bottom-4 md:!bottom-6',
							page: 'splide__pagination__page !bg-white/50 !w-2 !h-2 sm:!w-3 sm:!h-3',
						}
					}}
					aria-label="Промо-галерея услуг"
				>
					{autoplayImages.map((image) => (
						<SplideSlide key={image.id}>
							<div className={`relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r ${image.color}`}>
								<div className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] sm:min-h-[400px]">
									{/* Левая часть - изображение */}
									<div className="relative">
										<img
											src={image.src}
											alt={image.alt}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:hidden" />

										{/* Бейдж с номером слайда для мобильных */}
										<div className="absolute top-2 left-2 md:hidden bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-full">
											{image.id} / {autoplayImages.length}
										</div>
									</div>

									{/* Правая часть - текст */}
									<div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-r from-white to-white/95">
										<h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
											{image.title}
										</h3>
										<p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
											{image.description}
										</p>
										<div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
											<button className="bg-purple-600 text-white font-bold text-sm sm:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap">
												Записаться онлайн
											</button>
											<button className="border-2 border-gray-300 text-gray-700 font-bold text-sm sm:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:border-gray-400 transition-colors whitespace-nowrap">
												Смотреть работы
											</button>
										</div>

										{/* Дополнительная информация */}
										<div className="pt-4 sm:pt-6 border-t border-gray-200">
											<div className="flex flex-col xs:flex-row items-start xs:items-center text-gray-500 text-xs sm:text-sm">
												<div className="flex items-center mb-1 xs:mb-0">
													<svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<span>Запись на удобное время</span>
												</div>
												<span className="hidden xs:inline mx-2 sm:mx-3 md:mx-4">•</span>
												<div className="flex items-center">
													<svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<span>Гарантия качества</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Бейдж с номером слайда для десктопа */}
								<div className="absolute top-4 left-4 hidden md:block bg-black/70 text-white text-sm font-bold px-3 py-1 rounded-full">
									{image.id} / {autoplayImages.length}
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
						width: 36px !important;
						height: 36px !important;
						top: 30% !important;
					}
					@media (min-width: 640px) {
						.splide__arrow {
							width: 40px !important;
							height: 40px !important;
							top: 45% !important;
						}
					}
					@media (min-width: 768px) {
						.splide__arrow {
							width: 48px !important;
							height: 48px !important;
							top: 50% !important;
						}
					}
					.splide__arrow:hover {
						background: white !important;
					}
					.splide__arrow svg {
						fill: #333 !important;
						width: 16px !important;
						height: 16px !important;
					}
					@media (min-width: 640px) {
						.splide__arrow svg {
							width: 18px !important;
							height: 18px !important;
						}
					}
					@media (min-width: 768px) {
						.splide__arrow svg {
							width: 20px !important;
							height: 20px !important;
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