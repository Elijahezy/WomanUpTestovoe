export default function AddTask({ onAddTask }) {
    return (
        <form onSubmit={onAddTask}>
            <label htmlFor="heading">Добавьте заголовок</label>
            <input type="text" name="heading" id="heading" />
            <label htmlFor="description">Добавьте описание</label>
            <input type="text" name="description" id="description" />
            <label htmlFor="file">Добавьте файл</label>
            <input type="file" name="file" id="file" />

            <button type="submit">Добавить задачу</button>
        </form>
        
    )

}