import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route path="/">HOME</Route>
//           <Route path="/about">About</Route>
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/tabish">
            HOME
            <Header title={"Tabish Zaman"} />
          </Route>

          <Route path="/about">About</Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
