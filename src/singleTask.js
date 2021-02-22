function SingleTask({ taskObj, onDelete }) {
  return (
    <>
      <h1 id={taskObj.id}>{taskObj.title}</h1>
      <span onClick={() => onDelete(taskObj.id)}>X</span>
    </>
  );
}
export default SingleTask;
