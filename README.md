# Test UI-kit

Исходник пакета ui-kit, содержащий в себе компоненты Button, Input, Spinner и FormInput

## Установка и запуск

После скачивания:

```bash
npm install
```

Для запуска:

```bash
npm run dev
```

## Дополнительные функции

Запуск vitest:

```bash
npm run test
```

Если playwright не запускается:

```bash
npx playwright install chromium
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

Функция withRHF.tsx позволяет легко обернуть компоненты RHF в декоратор Storybook

```ts
decorators: [
    (Story, context) => withRHF(Story, context.parameters.showSubmitButton),
  ],
```

## Сборка

Сборка осуществляется через

```bash
npm run build
```

Настроена через tsup, который берет файлы из src/index.ts. Можно импортировать файлы как

```js
import { Button } from "ui-kit-cybersec";
```

так и

```js
import Button from "ui-kit-cybersec/button";
```

Т.к. настроены пути файлов в package.json
