import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updateTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updateTitle, updatedTaskDesc);
  };

  //   console.log(task);
  return (
    <div className="task-body task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Your Mission</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Your Doing List</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button onClick={handleDeleteClick} className="task-delete">
              Delete
            </button>
            <button onClick={handleEditClick} className="task-edit">
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
