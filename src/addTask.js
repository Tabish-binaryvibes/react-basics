import { useState } from "react";
function AddTask({ onAdd }) {
  const submitRecord = (e) => {
    e.preventDefault();
    if (!name) return;
    let obj = {
      userId: 20,
      id: 21,
      title: name,
      completed: false,
    };
    onAdd(obj);
  };
  const [name, setName] = useState("");
  return (
    <>
      <form>
        <label>Task</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="please Enter Your Name here"
        />
        <br />
        <br />
        <input
          type="button"
          value="Add Record"
          onClick={(e) => submitRecord(e)}
        />
      </form>
    </>
  );
}
export default AddTask;
