import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { withRouter } from "react-router-dom";

class updateStudent extends React.Component {
  state = {
    response: "",
    name: "",
    RollNo: "",
    grade: "",
    id: "",
    responseToPost: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  //Calls the api, GETS INFO
  callApi = async () => {
    const response = await fetch("/api/students");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  //POSTING INFO
  handleSubmit = async (e) => {
    if (this.state.name === "") {
      this.state.name = "student";
    }
    if (this.state.RollNo === "") {
      this.state.RollNo = 1;
    }
    if (this.state.grade === "") {
      this.state.grade = "1";
    }
    var { REACT_APP_API_TOKEN } = process.env;
    console.log(REACT_APP_API_TOKEN);
    console.log(this.state);
    e.preventDefault();
    const response = await fetch(`/api/student/${this.state.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        cookie: REACT_APP_API_TOKEN,
      },
      body: JSON.stringify({
        name: this.state.name,
        roll: this.state.RollNo,
        GradeId: this.state.grade,
      }),
    });
    const body = await response.text();
    console.log(body);
    this.setState({ responseToPost: body });
  };

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
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="Id">ID</Label>
          <Input
            type="number"
            value={this.state.id}
            onChange={(e) => this.setState({ id: e.target.value })}
            name="name"
            id="id"
            placeholder="Id of student to update"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input
            type="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            name="name"
            id="name"
            placeholder="Your name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="RollNo">RollNo</Label>
          <Input
            type="name"
            value={this.state.RollNo}
            onChange={(e) => this.setState({ RollNo: e.target.value })}
            name="name"
            id="rollNo"
            placeholder="Your RollNo"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Grade">Grade</Label>
          <Input
            type="number"
            value={this.state.RollNo}
            onChange={(e) => this.setState({ grade: e.target.value })}
            name="name"
            id="grade"
            placeholder="Your Grade"
          />
        </FormGroup>
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}
export default updateStudent;
