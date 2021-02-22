import SingleTask from "./singleTask";
function Task({ taskObj, deleteMethod }) {
  return (
    <>
      {taskObj &&
        taskObj.map((data) => (
          <SingleTask taskObj={data} onDelete={deleteMethod} />
        ))}
    </>
  );
}

export default Task;
