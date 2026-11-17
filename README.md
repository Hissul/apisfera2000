# Аписфера 2000

Основа сайта на React, TypeScript и Vite. Подключены React Router, Tailwind CSS и Lucide React. Маршруты открывают простые страницы-заглушки; содержимое сайта пока не реализовано.

## Команды

- `npm install` — установить зависимости.
- `npm run dev` — запустить локальный сервер.
- `npm run lint` — проверить код Oxlint.
- `npm run build` — проверить TypeScript и собрать проект.
- `npm run preview` — открыть собранную версию локально.

Маршруты: `/`, `/catalogue`, `/catalogue/:slug`, `/company`, `/contacts`, `/gde-kupit`; для остальных адресов есть страница «Не найдена».

Локальные правила работы находятся в `.project-guidance/AGENTS.md` и `.project-guidance/RULES.md`, схема модулей — в `.project-guidance/ARCHITECTURE.md`. Эти файлы исключены из Git. Короткий `AGENTS.md` в корне помогает Codex автоматически найти локальные правила.
