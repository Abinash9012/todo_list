import React from "react";
import "../App.css";

const Todoitem = ({ todos, onDelete }) => {
  return (
    <>
      <div className="my-2 todoItem">
        <h4>{todos.title}</h4>
        <p>{todos.desc}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(todos);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Todoitem;
