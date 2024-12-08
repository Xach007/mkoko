import { useState } from "react" 
// Импортирует хук useState из библиотеки React для управления состоянием компонента.
import { nanoid } from "nanoid" 
// Импортирует функцию nanoid для генерации уникальных идентификаторов.
import { List } from "../List2/List2" 
// Импортирует компонент List для отображения списка заметок из другого файла.
import inputStyle from "./Input.module.css" 
// Импортирует стили из файла CSS для данного компонента ввода.
import { Link, useLoaderData } from "react-router-dom"; 
// Импортирует Link для создания навигационных ссылок и useLoaderData для получения загружаемых данных.

export async function loader() { 
// Объявляет асинхронную функцию loader для загрузки данных перед рендерингом компонента.
    let arr 

    if (localStorage.getItem("ToDo")) { 
    // Проверяет, есть ли данные в localStorage по ключу "ToDo".
        arr = JSON.parse(localStorage.getItem("ToDo")) 
        // Если данные есть, парсит их из JSON в JavaScript объект (массив).
    } else { 
    // Если данных нет,
        arr = [] 
        // Инициализирует пустой массив.
    }
    return { arr } 
    // Возвращает объект с массивом arr для использования в компоненте.
}

export const Input = () => { 
// Объявляет и экспортирует компонент Input.
    let { arr } = useLoaderData() 
    // Извлекает массив arr из загруженных данных с помощью useLoaderData.
    const [notes, setNotes] = useState(arr) 
    // Создает состояние notes с начальным значением из arr и функцию setNotes для его обновления.
    const [value, setValue] = useState("") 
    // Создает состояние value для хранения значения ввода и функцию setValue для его обновления.

    const handleClickAdd = () => { 
    // Определяет функцию handleClickAdd для обработки добавления новой заметки.
        if (value.trim() === "") { 
        // Проверяет, является ли значение ввода пустым (только пробелы).
            alert("Введите что то в поле") 
            // Если пустое, показывает предупреждение.
        } else { 
        // Если есть введенное значение,
            const newNote = { 
            // Создает новый объект заметки.
                id: nanoid(), 
                // Генерирует уникальный id для заметки.
                isChecked: false, 
                // Устанавливает начальное состояние isChecked как false.
                title: value, 
                // Устанавливает заголовок заметки равным введенному значению.
                isEdit: false, 
                // Устанавливает значение isEdit как false (не в режиме редактирования).
            }

            let copy = [...notes, newNote] 
            // Создает новый массив заметок, добавляя новую заметку к существующим.
            setNotes(copy) 
            // Обновляет состояние notes новым массивом заметок.
            setValue("") 
            // Очищает значение ввода после добавления заметки.

            localStorage.setItem("ToDo", JSON.stringify(copy)) 
            // Сохраняет обновленный массив заметок в localStorage в формате JSON.
        }
    }

    return ( 
    // Начинает возвращаемый JSX для рендеринга компонента.
        <div className={inputStyle.container}> 
            <Link to={"/Notebook"}><button className={inputStyle.btnRouter}>NOTEBOOK</button></Link> 
            <h1>TODO LIST</h1> 
            <div className={inputStyle.inputBtn}> 
                <div className={inputStyle.inputAndBtn}> 
                    <input className={inputStyle.glavInput} placeholder="Создать новую заметку..." type="text" value={value} onChange={e => setValue(e.target.value)} /> 

                    <button className={inputStyle.btn} onClick={() => handleClickAdd()}>добавить</button> 
                </div>
                <div> 
                    <List notes={notes} isSetNotes={setNotes} /> 
                </div>
            </div>
        </div>
    ) 
    // Закрывает возвращаемый JSX.
}
