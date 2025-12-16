import React from 'react';

const TitleSlide = () => {
	const handleStartPresentation = () => {
		const rightArrowEvent = new KeyboardEvent('keydown', {
			key: 'ArrowRight',
			code: 'ArrowRight',
			keyCode: 39,
			bubbles: true,
		});
		window.dispatchEvent(rightArrowEvent);
	};

	return (
		<div className="h-full flex flex-col justify-center p-3 sm:p-4 md:p-6 bg-white relative overflow-hidden">

			{/* Геометрические фигуры на фоне - адаптированные размеры */}
			<div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-orange-100 rounded-full -translate-y-24 sm:-translate-y-32 translate-x-24 sm:translate-x-32"></div>
			<div className="absolute bottom-8 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-50 rounded-full translate-y-32 sm:translate-y-48 -translate-x-24 sm:-translate-x-48"></div>
			<div className="absolute top-1/3 left-4 sm:left-1/4 w-16 h-16 sm:w-32 sm:h-32 border border-orange-200 rounded-lg rotate-45"></div>

			<div className="max-w-5xl w-full mx-auto relative z-10">
				<div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">

					{/* Левый блок: Описание */}
					<div className="lg:col-span-2">
						<div className="mb-4 sm:mb-6">
							<div className="text-xs sm:text-sm font-semibold text-orange-600 uppercase tracking-wider mb-1 sm:mb-2">
								Презентация интерфейсов
							</div>
							<h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-2 sm:mb-4 leading-snug sm:leading-tight">
								Искусство<br /><span className="text-orange-500">навигации</span>
							</h1>
						</div>
						<div className="max-w-xl">
							<p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-8">
								Изучаем интерактивные элементы, которые превращают статичный контент в увлекательное путешествие для пользователя.
							</p>
							<div className="flex items-center space-x-4 sm:space-x-6">
								<div className="flex items-center space-x-2 sm:space-x-3">
									<div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow">
										<span className="text-white font-bold text-sm sm:text-base md:text-lg">{"<"}</span>
									</div>
									<div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow">
										<span className="text-white font-bold text-sm sm:text-base md:text-lg">{">"}</span>
									</div>
									<div className="text-gray-700 text-sm sm:text-base">
										Навигация<br /><span className="text-xs sm:text-sm">в слайдерах</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Правый блок: Кнопка */}
					<div className="lg:col-span-1 mt-4 sm:mt-0">
						<div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-orange-100 shadow-lg sm:shadow-xl">
							<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Начать просмотр</h3>
							<button
								onClick={handleStartPresentation}
								className="w-full py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 
                     text-white font-bold rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 
                     flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base"
							>
								<span>Запустить презентацию</span>
								<span className="text-base sm:text-xl animate-pulse">→</span>
							</button>
							{/* Блок с кнопками навигации - скрываем на экранах меньше 770px */}
							<div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg hidden sm:block">
								<div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Используйте для навигации:</div>
								<div className="flex items-center justify-center space-x-3 sm:space-x-4">
									<div className="px-2 sm:px-3 py-1 bg-white border border-gray-300 rounded-lg text-xs sm:text-sm">
										← Пред.
									</div>
									<div className="px-2 sm:px-3 py-1 bg-orange-500 text-white rounded-lg text-xs sm:text-sm">
										След. →
									</div>
								</div>
							</div>

							{/* Альтернативная подсказка для мобильных */}
							<div className="mt-3 sm:hidden text-center">
								<div className="text-xs text-gray-500 mb-1">Используйте кнопки ниже</div>
								<div className="flex justify-center space-x-1">
									<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
										<span className="text-orange-500 text-xs">←</span>
									</div>
									<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
										<span className="text-orange-500 text-xs">→</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Дополнительный отступ снизу для очень маленьких экранов */}
			<div className="h-8 sm:hidden"></div>

		</div>
	);
};

export default TitleSlide;