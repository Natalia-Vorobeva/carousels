import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { FiCamera, FiGrid, FiImage, FiMaximize2 } from 'react-icons/fi';
import { images } from '../constants';

function SimpleLightbox() {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full h-full flex flex-col items-center justify-center p-8">
			{/* Фон с органическими формами */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
				{/* Органические волны */}
				<div className="absolute inset-0 opacity-20">
					<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
						<path d="M0,30 Q25,15 50,30 T100,30 L100,100 L0,100 Z" fill="url(#gradient1)" />
						<path d="M0,70 Q40,50 80,70 T100,70 L100,100 L0,100 Z" fill="url(#gradient2)" />
						<defs>
							<linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
								<stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
							</linearGradient>
							<linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#ec4899" stopOpacity="0.1" />
								<stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				{/* Плавающие органические точки */}
				<div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-float-slow"></div>
				<div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-2xl animate-float-medium"></div>
			</div>

			{/* Контент */}
			<div className="relative z-10 text-center max-w-2xl">
				{/* Заголовок с органическими элементами */}
				<div className="mb-12">
					<div className="flex items-center justify-center gap-4 mb-4">
						<div className="relative p-4 rounded-2xl bg-white/70 backdrop-blur-sm shadow-soft">
							{/* <FiCamera className="w-10 h-10 text-gray-700" /> */}
							{/* Органический акцент */}
							{/* <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div> */}
						</div>
						<h1 className="text-5xl font-semibold text-gray-800">
							Visual<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Flow</span>
						</h1>
					</div>
				</div>

				{/* Основная кнопка - неоморфная */}
				<button
					onClick={() => setOpen(true)}
					className="group relative px-14 py-5 rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
					style={{
						background: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
						boxShadow: '10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff'
					}}
				>
					{/* Иннер глоу эффект */}
					<div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
						background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
					}}></div>

					{/* Внутренняя часть */}
					<div className="relative flex items-center justify-center gap-6">
						{/* Органическая иконка */}
						<div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{
							background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
							boxShadow: 'inset 5px 5px 10px #e6e6e6, inset -5px -5px 10px #ffffff'
						}}>
							<FiImage className="w-7 h-7 text-gray-200 group-hover:text-blue-500 transition-colors duration-300" />
						</div>

						{/* Текст */}
						<div className="text-left">
							<div className="text-2xl font-medium text-gray-300 group-hover:text-gray-700 transition-colors duration-300 flex items-center gap-3">
								Open
								<div className="relative">
									<div className="w-6 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:w-8 transition-all duration-300"></div>
									<div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
							</div>
						</div>
					</div>
				</button>

				{/* Подсказка с органическими элементами */}
				<div className="mt-12 text-gray-600 text-sm flex items-center justify-center gap-3">
					<div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
					<span>Tap to immerse in the visual experience</span>
					<div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 animate-pulse delay-300"></div>
				</div>
			</div>
			{/* Lightbox */}
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={images}
				controller={{ closeOnBackdropClick: true }}
			/>
		</div>
	);
}

export default SimpleLightbox;