import SingleTask from "./singleTask";
function Task({ taskObj, deleteMethod }) {
  return (
    <>
      {taskObj &&
        taskObj.map((data, i) => (
          <SingleTask taskObj={data} key={i} onDelete={deleteMethod} />
        ))}
    </>
  );
}

export default Task;
