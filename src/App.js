import TaskList from "./components/taskList";

function App() {
  return (
    <>
      <TaskList />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}

export default App;
