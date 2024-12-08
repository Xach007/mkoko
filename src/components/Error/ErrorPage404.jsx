import { useRouteError } from 'react-router-dom'; 
// Импортирует хуки (функции) для работы с ошибками роутинга из библиотеки react-router-dom.

export function ErrorPage404() { 
    // Объявляет и экспортирует компонент ErrorPage404, который будет отображать страницу ошибки 404.
    const error = useRouteError();
     // Получает информацию об ошибке, используя хук useRouteError, которая возникает при навигации.
    console.error(error);
     // Выводит информацию об ошибке в консоль для отладки.

    return ( 
        // Начинает рендеринг JSX, который будет возвращен компонентом.
        <div>
            <h1>Hi! It is an Error Page</h1>
            <h2>404 Not Found Error</h2> 
            <p><i>{error.statusText}</i></p>
            <p><i>{error.data}</i></p> 
      </div>
  );
}
