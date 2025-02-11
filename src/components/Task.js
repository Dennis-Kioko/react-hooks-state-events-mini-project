import React from "react";

function Task({ task, onDelete }) {
  if (!task) {
    return null; // Return null if task is undefined
  }

  const { text, category } = task;
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>
        delete
      </button>
    </div>
  );
}

export default Task;
