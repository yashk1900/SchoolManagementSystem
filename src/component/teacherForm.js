import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { withRouter } from "react-router-dom";

class inputForm extends React.Component {
  state = {
    response: "",
    name: "",
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
    console.log(this.state);
    e.preventDefault();
    var { REACT_APP_API_TOKEN } = process.env;
    console.log(REACT_APP_API_TOKEN);
    const response = await fetch("/api/teacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie: REACT_APP_API_TOKEN,
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
export default withRouter(inputForm);
