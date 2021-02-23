import { PropTypes } from "prop-types";
import { useState } from "react";
import Button from "./Button";
import Task from "./tasks";
import AddTask from "./addTask";
function Header(props) {
  const [task, taskFunction] = useState(dataArray);
  const clickFunction = (id) => {
    console.log(id, "event handling ...");
  };
  const deleteTask = (id) => {
    taskFunction(task.filter((data) => data.id !== id));
  };
  const addTask = (obj) => {
    taskFunction([...task, obj]);
  };
  return (
    <>
      <h1 style={{ backgroundColor: "red" }}>This is {props.title}</h1>
      <h1 className="sec">This is Second Line</h1>
      <Button clickFunction={clickFunction} />
      <AddTask onAdd={addTask} />
      <Task taskObj={task} deleteMethod={deleteTask} />
    </>
  );
}
Header.defaultProps = {
  title: "Header 1",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
let dataArray = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
];
export default Header;
