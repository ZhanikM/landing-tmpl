# landing-tmpl

Современный одностраничный сайт (landing page) на React + TypeScript + Vite.

Проект ориентирован на презентацию услуг AI и custom engineering: содержит анимированные секции, интерактивные UI-блоки и 3D-графику на базе Three.js.

## Что внутри

- React 18 + TypeScript
- Vite 5 (dev/build)
- Tailwind CSS + shadcn/ui
- Framer Motion (анимации)
- Three.js + @react-three/fiber + @react-three/drei (3D-сцены)
- Vitest + Testing Library (тесты)
- ESLint 9 (статический анализ)

## Быстрый старт

### 1. Требования

- Node.js 18+
- npm 9+

### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск в режиме разработки

```bash
npm run dev
```

Локальный сервер стартует на порту 8080.

### 4. Production-сборка

```bash
npm run build
```

### 5. Локальный просмотр production-сборки

```bash
npm run preview
```

## Основные команды

```bash
npm run dev         # запуск dev-сервера
npm run build       # production-сборка
npm run build:dev   # сборка в development-режиме
npm run preview     # просмотр собранного проекта
npm run test        # запуск тестов (single run)
npm run test:watch  # тесты в watch-режиме
npm run lint        # проверка ESLint
```

## Структура проекта

```text
landing-tmpl/
	public/                # статические ресурсы
	src/
		components/          # секции лендинга и UI-компоненты
			ui/                # shadcn/ui компоненты
		hooks/               # пользовательские хуки
		lib/                 # утилиты
		pages/               # страницы роутера (Index, NotFound)
		test/                # тестовая конфигурация и тесты
		App.tsx              # корневой компонент с провайдерами и роутингом
		main.tsx             # точка входа
		index.css            # глобальные стили и дизайн-токены
	tailwind.config.ts     # Tailwind-конфигурация
	vite.config.ts         # Vite-конфигурация
	vitest.config.ts       # Vitest-конфигурация
```

## Архитектура страницы

Главная страница собирается из секций в следующем порядке:

1. Header
2. HeroSection (с 3D-сценой на фоне)
3. TrustStrip
4. ServicesSection
5. CasesSection
6. ProcessSection
7. TechStackSection
8. EngagementSection
9. FAQSection
10. CTASection
11. Footer

Также используется SmoothScroll (Lenis) и LoadingScreen для стартовой анимации.

## Настройки и важные детали

- Алиас путей: `@` указывает на `src`.
- Dev-сервер: `host: ::`, `port: 8080`.
- React Query подключен на уровне провайдера в `App.tsx`.
- Компонент `lovable-tagger` подключается только в development-режиме.

## Качество кода

- Тесты запускаются через Vitest в окружении jsdom.
- В проекте есть базовый тест-шаблон для проверки инфраструктуры тестирования.
- ESLint настроен, но при развитии проекта рекомендуется держать `npm run lint` в зеленом статусе.

## Деплой

Проект является статическим SPA и может быть развернут на:

- Vercel
- Netlify
- GitHub Pages
- любой CDN/статический хостинг

Базовый пайплайн:

1. `npm install`
2. `npm run build`
3. публикация директории `dist`

### GitHub Pages

В репозитории уже добавлен workflow для автодеплоя:

- `.github/workflows/deploy-pages.yml`

Что нужно сделать один раз в GitHub:

1. Открыть Settings -> Pages.
2. В Build and deployment выбрать Source: GitHub Actions.
3. Убедиться, что workflow успешно отработал на ветке `main`.

После успешного деплоя сайт будет доступен по адресу:

- `https://zhanikm.github.io/landing-tmpl/`

## Рекомендации для дальнейшего развития

- Заполнить SEO-метаданные в `index.html`.
- Вынести контент секций в отдельный источник (JSON/CMS), если нужен частый апдейт текста.
- Добавить e2e-тесты ключевых сценариев (навигация, CTA, формы).
- Оптимизировать размер JS-чанков при росте 3D-функционала.
