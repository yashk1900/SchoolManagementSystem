import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./component/navbar";

import display from "./component/displayList";
import addStudent from "./component/studentForm";
import addTeacher from "./component/teacherForm";
import updateStudent from "./component/updateStudent";
import updateTeacher from "./component/updateTeacher";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        {/* <Switch> */}
        <Route exact path="/" component={display}>
          {/* <Home /> */}
        </Route>
        <Route exact path="/addStudent" component={addStudent} />
        <Route exact path="/updateStudent" component={updateStudent} />
        <Route exact path="/addTeacher" component={addTeacher} />
        <Route exact path="/updateTeacher" component={updateTeacher} />
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
