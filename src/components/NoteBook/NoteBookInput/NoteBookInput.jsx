import { useState } from "react" 
// Импортирует хук useState из библиотеки React для управления состоянием компонента.
import { nanoid } from "nanoid" 
// Импортирует функцию nanoid для генерации уникальных идентификаторов.
import { NotebookList } from "../NoteBookList/NoteBookList" 
// Импортирует компонент NotebookList, который будет отображать список заметок.
import { Link, useLoaderData } from "react-router-dom" 
// Импортирует компоненты Link (для навигации) и useLoaderData (для получения загруженных данных) из библиотеки react-router-dom.
import s from "./NoteBookInput.module.css" 
// Импортирует стили из файла CSS для данного компонента.

export async function loader() { 
    // Объявляет асинхронную функцию loader, которая загружает данные для компонента.
    let arr 
    // Объявляет переменную arr для хранения массива заметок.

    if (localStorage.getItem("Note")) { 
        // Проверяет, есть ли в localStorage сохраненные заметки.
        arr = JSON.parse(localStorage.getItem("Note")) 
        // Если да, то парсит их из JSON и сохраняет в arr.
    } else {
        arr = [] 
        // Если заметок нет, инициализирует arr как пустой массив.
    }

    return { arr } 
    // Возвращает объект с массивом заметок arr.
}

export const NoteBookInput = () => { 
// Объявляет и экспортирует компонент NoteBookInput.
    let { arr } = useLoaderData() 
    // Получает данные, загруженные с помощью loader, и сохраняет массив заметок в переменной arr.
    const [notes, setNotes] = useState(arr) 
    // Создает состояние notes и функцию setNotes для обновления этого состояния, инициализируя notes массивом arr.
    const [valueInput, setValueInput] = useState("") 
    // Создает состояние valueInput для хранения значения введенного заголовка заметки.
    const [valueText, setValueText] = useState("") 
    // Создает состояние valueText для хранения значения введенного текста заметки.

    const handleClickAdd = () => { 
        // Объявляет функцию handleClickAdd для обработки добавления новой заметки.
        if (!valueText.trim() || !valueInput.trim() === "") { 
            // Проверяет, заполнены ли текстовые поля.
            alert("Надо заполнить все текстовые поля") 
            // Если нет, показывает предупреждение.
        } else { 
            const newNote = { 
                // Создает новый объект заметки.
                id: nanoid(), 
                // Генерирует уникальный идентификатор для новой заметки.
                topTitle: valueInput, 
                // Сохраняет заголовок заметки из valueInput.
                botTitle: valueText, 
                // Сохраняет текст заметки из valueText.
                isEditTop: false, 
                // Инициализирует состояние редактирования заголовка как false.
                isEditBot: false, 
                // Инициализирует состояние редактирования текста как false.
            }

            let copy = [...notes, newNote] 
            // Создает новый массив копией текущих заметок с добавлением новой заметки.
            setNotes(copy) 
            // Обновляет состояние notes новым массивом с добавленной заметкой.
            setValueInput("")
             // Очищает поле ввода заголовка.
            setValueText("")
             // Очищает поле ввода текста заметки.

            localStorage.setItem("Note", JSON.stringify(copy))
             // Сохраняет обновленный массив заметок в localStorage.
        }
    }

    return ( 
        // Начинает возвращать JSX для рендеринга компонента.
        <div className={s.container}> 
            <Link to={"/"}><button className={s.btnLink}>ToDo List</button></Link> 
            <input placeholder="Введите заголовок..." className={s.input} value={valueInput} onChange={e => setValueInput(e.target.value)} type="text" /> 
            <textarea placeholder="Введите заметку..." className={s.textarea} value={valueText} onChange={e => setValueText(e.target.value)} name="" id="" /> 
            <button className={s.btn} onClick={() => handleClickAdd()}>Добавить заметку</button> 
            <div>
                <NotebookList notes={notes}
                 // Передает массив заметок в компонент NotebookList.
                    isSetValueInput={setValueInput} isSetValueText={setValueText} isSetNotes={setNotes} 
                    // Передает функции для обновления состояний в компонент NotebookList.
                />
            </div>
        </div> 
    ) 
    // Закрывает возвращаемый JSX.
}

