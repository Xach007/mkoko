import './App.css'; 
// Импортирует стили из файла App.css для применения к компонентам приложения.

import React from 'react'; 
// Импортирует библиотеку React, необходимую для создания компонентов.

import ReactDOM from 'react-dom/client'; 
// Импортирует ReactDOM для рендеринга React-компонентов в DOM.

import { 
  createBrowserRouter, 
  RouterProvider, 
} from 'react-router-dom'; 
// Импортирует функции для создания роутера и провайдера маршрутов из библиотеки react-router-dom.

import { ErrorPage404 } from './components/Error/ErrorPage404'; 
// Импортирует компонент для отображения страницы ошибки 404.

import { Input, loader as inputLoader } from './components/ToDoList2/Input/Input'; 
// Импортирует компонент Input и его загрузчик из соответствующего файла.

import { NoteBookInput, loader as noteLoader } from './components/NoteBook/NoteBookInput/NoteBookInput'; 
// Импортирует компонент NoteBookInput и его загрузчик, чтобы использовать их в маршрутах.

const router = createBrowserRouter([ 
// Создает роутер для управления маршрутизацией в приложении.
  {
    path: "/", 
    // Определяет корневой маршрут.
    element: <Input />, 
    // Указывает, что при переходе на корневой маршрут должен отображаться компонент Input.
    errorElement: <ErrorPage404 />, 
    // Указывает компонент, который будет отображаться в случае ошибки.
    loader: inputLoader, 
    // Определяет загрузчик для этого маршрута, который может загружать данные перед рендерингом компонента.
  },
  {
    path: "Notebook", 
    // Определяет маршрут для страницы блокнота.
    element: <NoteBookInput />, 
    // Указывает, что при переходе на маршрут "Notebook" будет отображаться компонент NoteBookInput.
    errorElement: <ErrorPage404 />, 
    // Указывает компонент для отображения в случае ошибки, аналогично корневому маршруту.
    loader: noteLoader, 
    // Определяет загрузчик для этого маршрута, который может загружать данные перед рендерингом компонента.
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render( 
// Ищет элемент с ID 'root' в DOM и рендерит в него приложение.
  <React.StrictMode> 
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
