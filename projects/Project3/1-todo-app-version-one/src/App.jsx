/* eslint-disable no-unused-vars */
import Appname from "./components/appname"
import Addtodo from "./components/addtodo"
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {

  const todoItems = [
    {
      name: "Buy milk",
      dueDate : "4/10/23",
    },
    {
      name: "Go to College",
      dueDate : "4/10/23",
    },
    {
      name: "Like this video",
      dueDate : "right now",
    }
  ]


  return (
    <center className="todo-container">
      <Appname />
      <Addtodo />
      <TodoItems></TodoItems>
      
    </center>
  );
}

export default App
