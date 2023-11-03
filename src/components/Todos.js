import React from "react";
import "../App.css";
import Todoitem from "./Todoitem";

const Todos = ({ todos, onDelete }) => {
  return (
    <>
      <h3 className="text-center my-3">My Todo List</h3>
      <div className="container my-3 todo">
        {todos.length === 0 ? (
          <h4 className="text-center my-3 text-danger w-100">
            No todos to Display !
          </h4>
        ) : (
          todos.map((todos) => {
            return (
              <Todoitem todos={todos} key={todos.sno} onDelete={onDelete} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Todos;
