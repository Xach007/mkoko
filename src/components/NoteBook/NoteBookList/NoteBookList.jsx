import { NoteBookListItem } from "../NoteBookListItem/NoteBookListItem" 
// Импортирует компонент NoteBookListItem, который будет использоваться для отображения каждой заметки в списке.
import s from "./NotebookList.module.css" 
// Импортирует стили из файла CSS для данного компонента списка заметок.

export const NotebookList = ({ notes, isSetNotes, isSetValueInput, isSetValueText }) => {
     // Объявляет и экспортирует компонент NotebookList, принимающий свойства: notes (массив заметок), 
    // isSetNotes, isSetValueInput и isSetValueText - функции для обновления состояний.
    return ( 
        // Начинает возвращать JSX для рендеринга компонента.
        <ul className={s.container}> 
            {notes.map(el => ( 
                // Использует метод map для перебора массива notes и создания элементов списка для каждой заметки.
                <NoteBookListItem
                 // Встраивает компонент NoteBookListItem для каждой заметки.
                    isSetNotes={isSetNotes} 
                    // Передает функцию isSetNotes в NoteBookListItem для управления состоянием заметок.
                    isSetValueInput={isSetValueInput}
                     // Передает функцию isSetValueInput для управления состоянием заголовка заметки.
                    isSetValueText={isSetValueText} 
                    // Передает функцию isSetValueText для управления состоянием текста заметки.
                    notes={notes} 
                    // Передает весь массив заметок в NoteBookListItem.
                    key={el.id} 
                    // Устанавливает уникальный ключ для каждого элемента списка, используя id заметки.
                    id={el.id} 
                    // Передает id текущей заметки.
                    topTitle={el.topTitle}
                     // Передает заголовок заметки (topTitle) в NoteBookListItem.
                    botTitle={el.botTitle}
                     // Передает текст заметки (botTitle) в NoteBookListItem.
                    isEditTop={el.isEditTop}
                     // Передает состояние редактирования заголовка (isEditTop) в NoteBookListItem.
                    isEditBot={el.isEditBot}
                     // Передает состояние редактирования текста (isEditBot) в NoteBookListItem.
                />
            ))}
        </ul>
    )
    // Закрывает возвращаемый JSX.
}
