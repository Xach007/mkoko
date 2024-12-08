import s from "./NoteBookListItem.module.css" 
// Импортирует стили из файла CSS для данного компонента элемента списка заметок.

export const NoteBookListItem = ({ isSetNotes, isSetValueInput, isSetValueText, notes, id, topTitle, botTitle, isEditTop, isEditBot }) => { 
// Объявляет и экспортирует компонент NoteBookListItem, принимающий свойства для управления состоянием заметки и ее представлением.
    
    const onSelect = (id) => { 
    // Определяет функцию onSelect для обработки выбора заметки по ее id.
        const selectedNote = notes.find(el => el.id === id); 
        // Находит заметку по id в массиве notes.

        if (selectedNote) { 
        // Если заметка найдена,
            isSetValueInput(selectedNote.topTitle); 
            // обновляет значение заголовка заметки.
            isSetValueText(selectedNote.botTitle); 
            // обновляет значение текста заметки.
        }

        isSetNotes(notes); 
        // Обновляет состояние notes для компонента.

    }

    const handleClickDel = (id) => { 
    // Определяет функцию для обработки удаления заметки.
        let copy = notes.filter(el => el.id !== id); 
        // Создает новый массив заметок, исключая заметку с заданным id.

        isSetNotes(copy); 
        // Обновляет состояние notes с новыми заметками.
        localStorage.setItem("Note", JSON.stringify(copy)); 
        // Сохраняет обновленный массив заметок в localStorage.
    }

    const handleClickEdit = (id) => { 
    // Определяет функцию для обработки изменения состояния редактирования заметки.
        let copy = notes.map(el => { 
        // Создает новый массив заметок, изменяя состояние редактирования для выбранной заметки.
            if (el.id === id) { 
            // Если id совпадает,
                el.isEditTop = !el.isEditTop; 
                // Переключает состояние редактирования заголовка.
                el.isEditBot = !el.isEditBot; 
                // Переключает состояние редактирования текста.
            }

            return el; 
            // Возвращает (или изменяет) заметку.
        })

        isSetNotes(copy); 
        // Обновляет состояние notes с измененными заметками.
        localStorage.setItem("Note", JSON.stringify(copy)); 
        // Сохраняет обновленный массив заметок в localStorage.
    }

    const handleEditInputClick = (id, e, field) => { 
    // Определяет функцию для обработки изменения текста в поле ввода.
        let copy = notes.map(el => { 
        // Создает новый массив заметок для изменения текста.
            if (el.id === id) { 
            // Если id совпадает,
                if (field === "topTitle") { 
                // Если редактируется заголовок,
                    el.topTitle = e.target.value; 
                    // Обновляет заголовок.
                } else if (field === "botTitle") { 
                // Если редактируется текст,
                    el.botTitle = e.target.value; 
                    // Обновляет текст.
                }
            }

            return el; 
            // Возвращает (или изменяет) заметку.
        })

        isSetNotes(copy); 
        // Обновляет состояние notes с измененными заметками.
        localStorage.setItem("Note", JSON.stringify(copy)); 
        // Сохраняет обновленный массив заметок в localStorage.
    }

    const getPreviewText = (text) => { 
    // Определяет функцию для получения превью текста (первые три слова).
        return text.split(' ').slice(0, 3).join(' ') + (text.split(' ').length > 3 ? '...' : ''); 
        // Разбивает текст на слова, берет первые три и добавляет многоточие, если текст длиннее трех слов.
    };

    return ( 
    // Начинает возвращаемый JSX для рендеринга компонента.
        <li className={s.container}> 
            <div className={s.text}> 
                {isEditTop ? 
                // Если режим редактирования заголовка включен,

                <input maxLength={20} className={s.input} type="text" value={topTitle} onChange={e => handleEditInputClick(id, e, "topTitle")} /> 
                // Рендерит input для редактирования заголовка.
                : <h1 onClick={() => onSelect(id)}>{topTitle}</h1>}
                        {isEditBot ? 
            // Если режим редактирования текста включен,
                <textarea className={s.textArea} name="" id="" value={botTitle} onChange={e => handleEditInputClick(id, e, "botTitle")} /> 
                // Рендерит textarea для редактирования текста.
                : <p className={s.pText}>{getPreviewText(botTitle)}</p>}
        </div>
        <div className={s.divBtn}> 
            <button className={s.btnEdit} onClick={() => handleClickEdit(id)}></button> 
            <button className={s.btnDel} onClick={() => handleClickDel(id)}></button> 
        </div>
    </li>
) 
// Закрывает возвращаемый JSX.
}
