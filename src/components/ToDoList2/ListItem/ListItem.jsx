import ListStyle from "./ListItem.module.css" 
// Импортирует стили для компонента ListItem из CSS-модуля.

export const ListItem = ({ isSetNotes, notes, id, title, isChecked, isEdit }) => { 
// Объявляет и экспортирует компонент ListItem, принимающий свойства isSetNotes, notes, id, title, isChecked и isEdit.
    
    const handleClickDel = (id) => { 
    // Объявляет функцию для обработки удаления заметки по заданному id.
        let copy = notes.filter(el => el.id !== id) 
        // Создает копию массива notes, исключая элемент с совпадающим id.
        isSetNotes(copy) 
        // Обновляет состояние notes с помощью функции isSetNotes.
        localStorage.setItem("ToDo", JSON.stringify(copy)) 
        // Сохраняет обновленный массив заметок в localStorage.
    }

    const handleClickCheck = (id) => { 
    // Объявляет функцию для обработки изменения состояния checkbox для заметки с указанным id.
        let copy = notes.map(el => { 
        // Создает копию массива notes, изменяя значение isChecked для заметки с заданным id.
            if (el.id === id) {
                el.isChecked = !el.isChecked 
                // Переключает состояние isChecked для найденной заметки.
            }
            return el 
            // Возвращает элемент (или измененный элемент) в новом массиве.
        })
        isSetNotes(copy) 
        // Обновляет состояние notes.
        localStorage.setItem("ToDo", JSON.stringify(copy)) 
        // Сохраняет обновленный массив заметок в localStorage.
    }

    const handleClickEdit = (id) => { 
    // Объявляет функцию для обработки переключения режима редактирования заметки по id.
        let copy = notes.map(el => { 
        // Создает копию массива notes.
            if (el.id === id) {
                el.isEdit = !el.isEdit 
                // Переключает состояние isEdit для найденной заметки.
            }
            return el 
            // Возвращает элемент (или измененный элемент) в новом массиве.
        })
        isSetNotes(copy) 
        // Обновляет состояние notes.
        localStorage.setItem("ToDo", JSON.stringify(copy)) 
        // Сохраняет обновленный массив заметок в localStorage.
    }

    const handleEditInputClick = (id, e) => { 
    // Объявляет функцию для обновления значения заметки при редактировании.
        let copy = notes.map(el => { 
        // Создает копию массива notes.
            if (el.id === id) {
                el.title = e.target.value 
                // Обновляет значение title для найденной заметки, основываясь на вводе пользователя.
            }
            return el 
            // Возвращает элемент (или измененный элемент) в новом массиве.
        })
        isSetNotes(copy) 
        // Обновляет состояние notes.
        localStorage.setItem("ToDo", JSON.stringify(copy)) 
        // Сохраняет обновленный массив заметок в localStorage.
    }

    return ( 
    // Начинает возвращаемый JSX для рендеринга компонента.
        <li className={ListStyle.liContainer}> 
            <div className={ListStyle.containerFlex}> 
                <div> 
                    <label className={ListStyle.customСheckbox}> 
                        <input type="checkbox" checked={isChecked} onChange={() => handleClickCheck(id)} /> 
                        <span className={ListStyle.checkmark}></span> 
                    </label>
                    {isEdit ?
                    // Условно рендерит input для редактирования или span для отображения title.

                    <input className={isChecked ? ListStyle.spanText : ListStyle.spanTextNone} type="text" value={title} onChange={e => handleEditInputClick(id, e)} /> 
                    // Позволяет редактировать title заметки, если isEdit равно true.
                    : <span className={isChecked ? ListStyle.spanText : ListStyle.spanTextNone}>{title}</span>}
            </div>
            <div> 
                <button className={ListStyle.btnEdit} onClick={() => handleClickEdit(id)}></button> 
                <button className={ListStyle.btnDel} onClick={() => handleClickDel(id)}></button> 
            </div>
        </div>
    </li>
) 
// Закрывает компонент, возвращая элемент списка с содержимым заметки и кнопками.
}
