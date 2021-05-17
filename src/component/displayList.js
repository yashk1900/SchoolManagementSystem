import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { withRouter } from "react-router-dom";

class Studentcard extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle>{this.props.roll}</CardSubtitle>
            <CardText>{"id : " + this.props.id}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
class Teachercard extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardText>{"id: " + this.props.id}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

class displayList extends React.Component {
  state = {
    response: "",
    studentList: [],
    teacherList: [],
    responseToPost: "",
  };

  //   componentDidMount() {
  //     this.callApi()
  //       .then((res) => this.setState({ response: res.express }))
  //       .catch((err) => console.log(err));
  //   }

  //Calls the api, GETS INFO
  callStudents = async (e) => {
    console.log(this.state);
    e.preventDefault();
    const response = await fetch("/api/students", {
      method: "GET",
      headers: {
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIxMjUwOTk4LCJleHAiOjE2MjEzMzczOTh9.NokOaVG-ZdZYalxIe0gaC9wGItox1eSov82c1sgfy48",
      },
    });
    const body = await response.json();
    console.log(body);
    this.setState({ studentList: body });
    console.log(response);
    if (response.status !== 200 && response.status !== 201)
      throw Error(body.message);

    return body;
  };

  callTeachers = async (e) => {
    console.log(this.state);
    e.preventDefault();
    const response = await fetch("/api/teachers", {
      method: "GET",
      headers: {
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIxMjUwOTk4LCJleHAiOjE2MjEzMzczOTh9.NokOaVG-ZdZYalxIe0gaC9wGItox1eSov82c1sgfy48",
      },
    });
    const body = await response.json();
    console.log(body);
    this.setState({ studentList: body });
    console.log(response);
    if (response.status !== 200 && response.status !== 201)
      throw Error(body.message);

    return body;
  };

  //POSTING INFO
  //   handleSubmit = async (e) => {
  //     console.log(this.state);
  //     e.preventDefault();
  //     const response = await fetch("/api/student", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-access-token":
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIxMjUwOTk4LCJleHAiOjE2MjEzMzczOTh9.NokOaVG-ZdZYalxIe0gaC9wGItox1eSov82c1sgfy48",
  //       },
  //       body: JSON.stringify({
  //         name: this.state.name,
  //         roll: this.state.RollNo,
  //       }),
  //     });
  //     const body = await response.text();
  //     console.log(body);
  //     this.setState({ responseToPost: body });
  //   };

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //       <p>{this.state.response}</p>
  //       <form onSubmit={this.handleSubmit}>
  //         <p>
  //           <strong>Post to Server:</strong>
  //         </p>
  //         <input
  //           type="text"
  //           value={this.state.post}
  //           onChange={(e) => this.setState({ post: e.target.value })}
  //         />
  //         <button type="submit">Submit</button>
  //       </form>
  //       <p>{this.state.responseToPost}</p>
  //     </div>
  //   );
  // }

  render() {
    var students = [];
    var teachers = [];
    for (var i = 0; i < this.state.studentList.length; i++) {
      students.push(
        <Studentcard
          name={this.state.studentList[i].name}
          roll={this.state.studentList[i].roll}
          id={this.state.studentList[i].id}
        />
      );
    }
    for (i = 0; i < this.state.teacherList.length; i++) {
      students.push(
        <Teachercard
          name={this.state.teacherList[i].name}
          id={this.state.teacherList[i].id}
        />
      );
    }
    return (
      <div>
        <Button onClick={this.callStudents}>Show Students</Button>
        {students}
        <Button onClick={this.callTeachers}>Show Teachers</Button>
        {teachers}
      </div>
    );
  }
}
export default displayList;
