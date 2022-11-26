import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [isTaskAddActive, setTaskAddActive] = useState(false);

  

  return (
    <>
      {isTaskAddActive ? (
        <form onSubmit={() => setTaskAddActive(false)}>
          <label htmlFor="heading">Добавьте заголовок</label>
          <input type="text" name="heading" id="heading" required />
          <label htmlFor="description">Добавьте описание</label>
          <input type="text" name="description" id="description" required />
          <label htmlFor="file">Добавьте файл</label>
          <input type="file" name="file" id="file" />

          <button type="submit">Добавить задачу</button>
          <button type="button" onClick={() => setTaskAddActive(false)}>Отменить</button>
        </form>
      ) : (
        <button
          type="button"
          className="btn__add_task"
          onClick={() => setTaskAddActive(true)}
        >
          Добавить задачу
        </button>
      )}

      <style jsx>{`
        .btn__add_task {
          display: grid;
          width: 300px;
          height: 400px;
          background-color: #f5f5f5;
          text-align: center;
          align-items: center;
          border-radius: 10px;
          color: #000000d4;
          border: 1px solid #eaeaea;
          font-size: 20px;
        }

        form {
          display: flex;
          width: 300px;
          height: 400px;
          justify-content: flex-start;
          flex-direction: column;
          background-color: #f5f5f5;
          padding: 10px;
          color: #000000d4;
          border: 1px solid #eaeaea;
        }

        input, button {
            border: none;
        }


      `}</style>
    </>
  );
}
