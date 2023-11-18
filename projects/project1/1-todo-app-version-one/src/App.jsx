import Appname from "./components/appname"
import Addtodo from "./components/addtodo"
import TodoItem1 from "./components/todoitem1"
import TodoItem2 from "./components/todoitem2"
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Appname />
      <Addtodo />
      <div className="items-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App
