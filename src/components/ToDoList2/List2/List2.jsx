import { ListItem } from "../ListItem/ListItem" 
// Импортирует компонент ListItem для отображения отдельного элемента списка из другого файла.

export const List = ({ notes, isSetNotes }) => { 
// Объявляет и экспортирует компонент List, принимающий свойства notes и isSetNotes.
    return ( 
    // Начинает возвращаемый JSX для рендеринга компонента.
        <ul> 
            {notes.map(el => ( 
            // Проходит по массиву notes и для каждого элемента el рендерит ListItem.
                <ListItem isSetNotes={isSetNotes} notes={notes} key={el.id} 
                // Передает пропсы в компонент ListItem, включая isSetNotes, notes и уникальный ключ.
                id={el.id} title={el.title} isChecked={el.isChecked} isEdit={el.isEdit} 
                // Передает свойства id, title, isChecked и isEdit текущей заметки.
                />
            ))}
        </ul>
    ) 
    // Закрывает компонент, возвращая неупорядоченный список с элементами ListItem.
}
