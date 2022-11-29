import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { ref as dbRef, remove } from "firebase/database";
import { db, storage } from "../firebase";

export default function Task({ task, onDeleteTask }) {
  const [isEditActive, setEditActive] = useState(false);
  const [image, setImage] = useState(null);
  const pathReference = ref(storage, `images/${task.createdAt}`);

  useEffect(() => {
    getDownloadURL(pathReference)
      .then((img) => {
        setImage(img);
        console.log(img);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pathReference]);

  const onDelete = () => {
    remove(dbRef(db, `tasks/${task.createdAt}`));
    onDeleteTask(task.createdAt);
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder={task.heading}
          disabled={isEditActive ? false : true}
        />
        <input
          type="text"
          placeholder={task.description}
          disabled={isEditActive ? false : true}
        />
        <input type="file" disabled={isEditActive ? false : true} />
        <a download={true} href={image}>
          asdasd
        </a>
        {isEditActive ? (
          <button type="button" onClick={() => setEditActive(false)}>
            Сохранить
          </button>
        ) : (
          <button type="button" onClick={() => setEditActive(true)}>
            Редактировать
          </button>
        )}
        <button
          type="button"
          onClick={onDelete}
          disabled={isEditActive ? false : true}
        >
          Удалить
        </button>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
