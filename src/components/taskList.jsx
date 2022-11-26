import AddTask from "./addTask";
// import { useContext } from "react";
// import { Context} from '../index'

export default function TaskList({ items }) {

  // get context firebase



  return (
    <>
    <AddTask />
    <ul>
      {/* {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))} */}
    </ul>
    </>
  );
}



