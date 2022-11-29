import { useState } from "react";
import { ref, set } from "firebase/database";
import dayjs from "dayjs";
import { uploadBytes, ref as storageRef } from "firebase/storage";
import { db, storage } from "../firebase";

export default function AddTask({ onAddTask }) {
  const [imageUpload, setImageUpload] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const id = dayjs().format("DDMMYYYYHHmmss").toString();

    const newTask = {
      createdAt: id,
      heading: e.target.heading.value,
      description: e.target.description.value,
      file: imageUpload,
    };

    set(ref(db, "tasks/" + `${id}`), newTask);
    onAddTask(newTask);

    if (imageUpload === null) return;

    const fileRef = storageRef(storage, `images/${id}`);
    uploadBytes(fileRef, imageUpload).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };

  return (
    <>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <label htmlFor="heading">Добавьте заголовок</label>
        <input type="text" name="heading" id="heading" required />
        <label htmlFor="description">Добавьте описание</label>
        <input type="text" name="description" id="description" required />
        <label htmlFor="file">Добавьте файл</label>
        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => setImageUpload(e.target.files[0])}
        />

        <button type="submit">Добавить задачу</button>
        <button type="button">Отменить</button>
      </form>

      <style jsx>{`
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
      `}</style>
    </>
  );
}
