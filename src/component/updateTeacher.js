import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { withRouter } from "react-router-dom";

class updateStudent extends React.Component {
  state = {
    response: "",
    name: "",
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
    const response = await fetch("/api/teacher");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  //POSTING INFO
  handleSubmit = async (e) => {
    if (this.state.name === "") {
      this.state.name = "teacher";
    }
    console.log(this.state);
    e.preventDefault();
    const response = await fetch(`/api/teacher/${this.state.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIxMjc5NjM1LCJleHAiOjE2MjEzNjYwMzV9.AXM5hJxtybnxZA6jqq4htEoycozWUWsAIdN1qsUH54Q",
      },
      body: JSON.stringify({
        name: this.state.name,
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
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}
export default updateStudent;
