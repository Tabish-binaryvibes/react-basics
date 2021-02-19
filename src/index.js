// import React, { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// const element = (
//   <>
//     <h1>Hello world 1</h1>
//     <h1>Hello world2 </h1>
//     <p>Lorium ipsomaksjdkasdjkl</p>
//   </>
// );
// function WebPage() {
//   const name = "tabish";
//   return (
//     <>
//       <h1>Hello {name}</h1>
//       <h1>Hello world2 </h1>
//       <p>Lorium ipsomaksjdkasdjkl</p>
//       <DateComponent />
//     </>
//   );
// }
// function DateComponent() {
//   const [time, setMyTime] = useState(new Date().toTimeString("PK"));
//   setInterval(() => setMyTime(new Date().toLocaleTimeString("PK")), 1000);
//   return (
//     <>
//       <label>The new date is : {time} </label>
//     </>
//   );
// }

ReactDOM.render(<App />, document.getElementById("root"));

// function component and class component
