/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TodoItem from "./todoitem";

const TodoItems = ({ todoItems}) => {
    return (
        <div className="items-container">
    {todoItems.map( (item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
        ))}
  </div>

    );

};

export default TodoItems