const emblaPortfolioImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop&crop=face",
    alt: "Классическое каре с челкой",
    title: "Каре с челкой",
    category: "Стрижки",
    description: "Идеальная форма и филировка концов",
    width: 1200,
    height: 800,
    featured: true
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556228574442-60811d7c57e8?w=1000&h=1500&fit=crop&crop=face",
    alt: "Балаяж на длинные волосы",
    title: "Балаяж",
    category: "Окрашивание",
    description: "Плавный переход цвета с карамельными прядями",
    width: 1000,
    height: 1500,
    featured: true
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&h=1200&fit=crop&crop=face",
    alt: "Градуированный боб",
    title: "Боб каре",
    category: "Стрижки",
    description: "Современный градуированный боб с объемом",
    width: 1600,
    height: 1200,
    featured: false
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1400&h=2100&fit=crop&crop=face",
    alt: "Асимметричная стрижка",
    title: "Асимметрия",
    category: "Стрижки",
    description: "Смелая асимметрия с геометрическими линиями",
    width: 1400,
    height: 2100,
    featured: true
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1800&h=1350&fit=crop&crop=face",
    alt: "Стрижка пикси",
    title: "Пикси",
    category: "Стрижки",
    description: "Элегантная стрижка пикси для смелых",
    width: 1800,
    height: 1350,
    featured: false
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=2000&h=1500&fit=crop&crop=face",
    alt: "Омбре на темных волосах",
    title: "Омбре",
    category: "Окрашивание",
    description: "Естественное омбре от темного к светлому",
    width: 2000,
    height: 1500,
    featured: true
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1500&h=2250&fit=crop&crop=face",
    alt: "Мелирование шатуш",
    title: "Шатуш",
    category: "Окрашивание",
    description: "Нежное мелирование в технике шатуш",
    width: 1500,
    height: 2250,
    featured: false
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&h=2400&fit=crop&crop=face",
    alt: "Вечерняя укладка с локонами",
    title: "Локоны",
    category: "Укладки",
    description: "Романтичные локоны на вечер",
    width: 1600,
    height: 2400,
    featured: true
  }
];

// Вариант с миниатюрами для превью
const emblaWithThumbnails = emblaPortfolioImages.map(img => ({
  ...img,
  thumbnail: img.src.replace(/(w=)(\d+)/, '$1400').replace(/(h=)(\d+)/, '$1400')
}));

// Данные для вертикального слайдера
const verticalSliderImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=1200&fit=crop&crop=face",
    alt: "Вертикальное каре",
    orientation: "portrait"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556228574442-60811d7c57e8?w=600&h=900&fit=crop&crop=face",
    alt: "Вертикальный балаяж",
    orientation: "portrait"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=700&h=1050&fit=crop&crop=face",
    alt: "Вертикальный боб",
    orientation: "portrait"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=1200&fit=crop&crop=face",
    alt: "Вертикальная асимметрия",
    orientation: "portrait"
  }
];

// Данные для горизонтального слайдера (альбомная ориентация)
const horizontalSliderImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&h=900&fit=crop&crop=face",
    alt: "Горизонтальное каре",
    orientation: "landscape"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556228574442-60811d7c57e8?w=1600&h=900&fit=crop&crop=face",
    alt: "Горизонтальный балаяж",
    orientation: "landscape"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&h=900&fit=crop&crop=face",
    alt: "Горизонтальный боб",
    orientation: "landscape"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1600&h=900&fit=crop&crop=face",
    alt: "Горизонтальная асимметрия",
    orientation: "landscape"
  }
];

// Данные для слайдера с текстовым контентом
const contentSliderData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=600&fit=crop&crop=face",
    title: "Стрижки",
    description: "Современные техники стрижек для любого типа волос",
    color: "bg-gradient-to-r from-blue-50 to-indigo-100",
    count: "24 работы"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556228574442-60811d7c57e8?w=1200&h=600&fit=crop&crop=face",
    title: "Окрашивание",
    description: "Сложное окрашивание: балаяж, омбре, шатуш, мелирование",
    color: "bg-gradient-to-r from-rose-50 to-pink-100",
    count: "18 работ"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&h=600&fit=crop&crop=face",
    title: "Укладки",
    description: "Вечерние, свадебные и повседневные укладки",
    color: "bg-gradient-to-r from-amber-50 to-orange-100",
    count: "32 работы"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=face",
    title: "Мужские стрижки",
    description: "Классические и современные мужские стрижки",
    color: "bg-gradient-to-r from-emerald-50 to-teal-100",
    count: "15 работ"
  }
];

// Данные для автослайдера с автопрокруткой
const autoplaySliderImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&h=900&fit=crop&crop=face",
    alt: "Автослайд 1",
    delay: 3000
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556228574442-60811d7c57e8?w=1600&h=900&fit=crop&crop=face",
    alt: "Автослайд 2",
    delay: 3000
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&h=900&fit=crop&crop=face",
    alt: "Автослайд 3",
    delay: 3000
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1600&h=900&fit=crop&crop=face",
    alt: "Автослайд 4",
    delay: 3000
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1600&h=900&fit=crop&crop=face",
    alt: "Автослайд 5",
    delay: 3000
  }
];

// Данные для слайдера с отзывами
const testimonialSliderData = [
  {
    id: 1,
    clientName: "Анна К.",
    clientAvatar: "https://images.unsplash.com/photo-1494790108755-2616b786d4d3?w=200&h=200&fit=crop&crop=face",
    workImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop&crop=face",
    text: "Прекрасная стрижка! Мастер настоящий профессионал, учла все пожелания.",
    rating: 5,
    date: "15.12.2023"
  },
  {
    id: 2,
    clientName: "Марина С.",
    clientAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    workImage: "https://images.unsplash.com/photo-1556228574442-60811d7c57e8?w=400&h=400&fit=crop&crop=face",
    text: "Балаяж получился именно таким, как я хотела. Цвет плавный и естественный.",
    rating: 5,
    date: "10.12.2023"
  },
  {
    id: 3,
    clientName: "Елена П.",
    clientAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    workImage: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=400&fit=crop&crop=face",
    text: "Стрижка боб превзошла все ожидания. Волосы лежат идеально.",
    rating: 4,
    date: "05.12.2023"
  },
  {
    id: 4,
    clientName: "Ирина М.",
    clientAvatar: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=200&h=200&fit=crop&crop=face",
    workImage: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop&crop=face",
    text: "Асимметричная стрижка - это то, что нужно для смены имиджа!",
    rating: 5,
    date: "01.12.2023"
  }
];

// Данные для слайдера "до/после"
const beforeAfterSliderData = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
    title: "Каре с челкой",
    description: "Убраны секущиеся концы, добавлен объем"
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1556228574442-60811d7c57e8?w=800&h=600&fit=crop",
    title: "Окрашивание балаяж",
    description: "Темные волосы превратились в карамельное мелирование"
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop",
    title: "Стрижка боб",
    description: "Длинные волосы превращены в стильный градуированный боб"
  },
  {
    id: 4,
    before: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop",
    title: "Асимметричная стрижка",
    description: "Созданы четкие геометрические линии"
  }
];

// Экспорт всех наборов данных
export {
  emblaPortfolioImages,
  emblaWithThumbnails,
  verticalSliderImages,
  horizontalSliderImages,
  contentSliderData,
  autoplaySliderImages,
  testimonialSliderData,
  beforeAfterSliderData
};
