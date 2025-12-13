import hall from './assets/images/hall.webp'
import dev from './assets/images/dev.webp'
import man from './assets/images/man.webp'
import ehod from './assets/images/ehod.webp'
import svad from './assets/images/svad.webp'
import svad2 from './assets/images/svad2.webp'
import acc from './assets/images/acc.webp'
import ander from './assets/images/ander.webp'
import bob from './assets/images/bob.webp'
import purpleHair from './assets/images/purple-hair.webp'
import feid from './assets/images/feid.webp'
import ombre from './assets/images/ombre.webp'
import vech from './assets/images/vech.webp'
import pikse from './assets/images/pikse.webp'
import pomp from './assets/images/pomp.webp'
import tekst from './assets/images/tekst.webp'
import boks from './assets/images/boks.webp'



export const images = [
	{
		src: dev,
		alt: 'Портретная фотография с естественным светом',
		width: 1200,
		height: 800,
	},
	{
		src: feid,
		alt: 'Городской пейзаж в золотой час',
		width: 1000,
		height: 1500,
	},
	{
		src: pomp,
		alt: 'Макросъемка деталей природы',
		width: 1000,
		height: 1500,
	},
	{
		src: boks,
		alt: 'Черно-белая архитектурная фотография',
		width: 1000,
		height: 1500,
	},
	{
		src: purpleHair,
		alt: 'Вечерняя уличная фотография',
		width: 1000,
		height: 1500,
	},
];

export const pages = [
	{
		id: 1,
		title: "Стрижки",
		category: "Женские стрижки",
		colorGradient: "from-blue-50 to-indigo-50",
		bgGradient: "from-blue-500/10 to-indigo-500/10",
		images: [
			{
				id: 1,
				src: bob,
				alt: "Каре с челкой",
				description: "Классическое каре"
			},
			{
				id: 2,
				src: ombre,
				alt: "Длинное каскад",
				description: "Каскад на длинные волосы"
			},
			{
				id: 3,
				src: ander,
				alt: "Боб-каре",
				description: "Градуированный боб"
			},
			{
				id: 4,
				src: acc,
				alt: "Асимметричная",
				description: "Асимметрия с удлинением"
			}
		]
	},
	{
		id: 2,
		title: "Окрашивание",
		category: "Сложное окрашивание",
		colorGradient: "from-rose-50 to-pink-50",
		bgGradient: "from-rose-500/10 to-pink-500/10",
		images: [
			{
				id: 5,
				src: svad,
				alt: "Балаяж",
				description: "Балаяж на темные волосы"
			},
			{
				id: 6,
				src: svad2,
				alt: "Мелирование",
				description: "Мелирование по всей длине"
			},
			{
				id: 7,
				src: ombre,
				alt: "Омбре",
				description: "Плавное омбре"
			}
		]
	},
	{
		id: 3,
		title: "Укладки",
		category: "Вечерние укладки",
		colorGradient: "from-amber-50 to-orange-50",
		bgGradient: "from-amber-500/10 to-orange-500/10",
		images: [
			{
				id: 9,
				src: pikse,
				alt: "Локоны",
				description: "Объемные локоны"
			},
			{
				id: 10,
				src: acc,
				alt: "Гладкие волосы",
				description: "Идеально гладкие"
			},
			{
				id: 11,
				src: vech,
				alt: "Пучок",
				description: "Вечерний пучок с косами"
			},
			{
				id: 12,
				src: pikse,
				alt: "Волны",
				description: "Морские волны"
			}
		]
	},
	{
		id: 4,
		title: "Мужские",
		category: "Мужские стрижки",
		colorGradient: "from-emerald-50 to-teal-50",
		bgGradient: "from-emerald-500/10 to-teal-500/10",
		images: [
			{
				id: 13,
				src: feid,
				alt: "Фейд",
				description: "Классический фейд"
			},
			{
				id: 14,
				src: boks,
				alt: "Бокс",
				description: "Короткая бокс"
			},
			{
				id: 15,
				src: tekst,
				alt: "Гранж",
				description: "Стрижка с текстурой"
			},
			{
				id: 16,
				src: pomp,
				alt: "Помпадур",
				description: "Классический помпадур"
			}
		]
	}
]
export const emblaGalleryAutoplayImages = [
	{
		id: 1,
		src: hall,
		alt: "Каре с челкой",
		title: "Стрижки любой сложности",
		description: "Любая сложность и длина",
		subtitle: "Классические и современные техники"
	},
	{
		id: 2,
		src: purpleHair,
		alt: "Балаяж",
		title: "Сложное окрашивание",
		description: "Балаяж, омбре, шатуш, мелирование",
		subtitle: "Балаяж, омбре, шатуш"
	},
	{
		id: 3,
		src: dev,
		alt: "Укладка",
		title: "Вечерние укладки",
		description: "Для особых случаев и праздников",
		subtitle: "Для особых случаев"
	},
	{
		id: 4,
		src: man,
		alt: "Мужская стрижка",
		title: "Мужские стрижки",
		description: "Классика и современные тренды",
		subtitle: "Современный подход"
	},
	{
		id: 5,
		src: ombre,
		alt: "Свадебные прически",
		title: "Свадебные образы",
		description: "Незабываемый день - идеальный образ",
		color: "from-purple-500/20 to-violet-700/20"
	}
]
export const serviceCategories = [
	{

		id: 1,
		title: "Стрижки",
		count: 24,
		description: "Классические и современные техники",
		color: "from-blue-500/20 to-indigo-500/20",
		borderColor: "border-blue-200",
		textColor: "text-blue-700",
		image: hall
	},
	{
		id: 2,
		title: "Окрашивание",
		count: 18,
		description: "Сложное окрашивание любой сложности",
		color: "from-purple-500/20 to-pink-500/20",
		borderColor: "border-purple-200",
		textColor: "text-purple-700",
		image: purpleHair
	},
	{
		id: 3,
		title: "Укладки",
		count: 32,
		description: "Вечерние и повседневные укладки",
		color: "from-amber-500/20 to-orange-500/20",
		borderColor: "border-amber-200",
		textColor: "text-amber-700",
		image: dev
	},
	{
		id: 4,
		title: "Мужские",
		count: 15,
		description: "Классические и современные стрижки",
		color: "from-emerald-500/20 to-teal-500/20",
		borderColor: "border-emerald-200",
		textColor: "text-emerald-700",
		image: man
	},
	{
		id: 5,
		title: "Уход",
		count: 12,
		description: "Восстановление и лечение волос",
		color: "from-violet-500/20 to-fuchsia-500/20",
		borderColor: "border-violet-200",
		textColor: "text-violet-700",
		image: ehod
	},
	{
		id: 6,
		title: "Свадебные",
		count: 8,
		description: "Прически для особых случаев",
		color: "from-rose-500/20 to-red-500/20",
		borderColor: "border-rose-200",
		textColor: "text-rose-700",
		image: svad
	}
]
export const portfolioImages = [
	{
		id: 1,
		src: dev,
		alt: "Каре с челкой",
		title: "Классическое каре",
		category: "Стрижки",
		featured: true
	},
	{
		id: 2,
		src: purpleHair,
		alt: "Балаяж",
		title: "Окрашивание балаяж",
		category: "Окрашивание",
		featured: true
	},
	{
		id: 3,
		src: bob,
		alt: "Боб каре",
		title: "Градуированный боб",
		category: "Стрижки",
		featured: false
	},
	{
		id: 4,
		src: acc,
		alt: "Асимметрия",
		title: "Асимметричная стрижка",
		category: "Стрижки",
		featured: true
	},
	{
		// piksi
		id: 5,
		src: pikse,
		alt: "Пикси",
		title: "Стрижка пикси",
		category: "Стрижки",
		featured: false
	},
	{
		id: 6,
		src: ombre,
		alt: "Омбре",
		title: "Омбре на темных волосах",
		category: "Окрашивание",
		featured: true
	},
	{
		id: 7,
		src: vech,
		alt: "Укладка",
		title: "Вечерняя укладка",
		category: "Укладки",
		featured: true
	},
	{
		id: 8,
		src: svad2,
		alt: "Свадебная",
		title: "Свадебная прическа",
		category: "Укладки",
		featured: false
	},
	{
		id: 9,
		src: ander,
		alt: "Мужская стрижка",
		title: "Мужская стрижка андеркат",
		category: "Мужские стрижки",
		featured: true
	},
	{
		id: 10,
		src: feid,
		alt: "Мужская стрижка 2",
		title: "Мужская стрижка фейд",
		category: "Мужские стрижки",
		featured: false
	}
]



