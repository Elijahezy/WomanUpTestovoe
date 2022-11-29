import AddTask from "./addTask";
import { getDatabase, ref, get, child } from "firebase/database";
import { useEffect, useState } from "react";
import Task from "./task";

export default function TaskList() {
  const [tasks, setTasks] = useState();

  const dbRef = ref(getDatabase());

  useEffect(() => {
    get(child(dbRef, "tasks/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setTasks(Object.values(snapshot.val()));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.createdAt !== id));
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <div className="container">
        <AddTask onAddTask={addTask} />
        {tasks?.map((task, index) => (
          <Task key={index} task={task} onDeleteTask={deleteTask} />
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fill, 300px);
        }
      `}</style>
    </>
  );
}
