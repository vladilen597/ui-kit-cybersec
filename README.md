# Test UI-kit

Исходник пакета ui-kit, содержащий в себе компоненты Button, Input, Spinner и FormInput

## Установка

После скачивания пакета:

```bash
npm install
```

## Дополнительные функции

Запуск vitest:

```bash
npm run test
```

Обновление версии:

```bash
npx changeset
npx changeset-update
```

## Storybook

Для каждой из компонент добавлены Story. Для запуска Storybook:

```bash
npm run storybook
```

Story сгруппированы - Shared папка - общая папка для переиспользуемых компонент, папка Form - для компонент, обёрнутых react-hook-form.
Тёмная и светлая темы переключаются через класс родителя .dark Также, в Storybook добавлен переключатель темы в верхнюю панель.

## Общее

В папке src/utils лежит файл createFormElement.tsx, который содержит в себе функцию-фабрику для создания компонент, обёрнутых в react-hook-forms.
Использование:

```ts
const FormInput = createFormElement < IFormInputProps > Input;
```
