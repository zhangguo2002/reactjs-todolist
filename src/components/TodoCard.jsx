import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          type=""
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          type=""
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
