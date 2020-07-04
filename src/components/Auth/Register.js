import React, { Component } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      name: "",
      password: "",
    };
    this.onRegisterFomSubmit = this.onRegisterFomSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.styles = {
      bigBox: {
        display: "grid",
        // alignContent: 'center',
        height: "100vh",
      },
      registerFormBox: {
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "center",
        // margin: "30px auto",
        padding: "40px",
        border: "1px solid #CCCCCC",
        borderRadius: "5px",
      },
      pictureBox: {
        border: "1px solid #CCCCCC",
        borderRadius: "5px",
      },
      regForm: {
        display: "grid",
        gridGap: "20px",
        padding: "20px 30px",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 0.6fr))",
        justifyContent: "center",
        borderRadius: "5px",
        // border: "1px solid #CCCCCC",
      },
      cardMedia: {
        height: "100%",
      },
      content: {
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
      },
    };
  }
  onRegisterFomSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };
    console.log(newUser);
  }
  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div style={this.styles.bigBox}>
        <Card style={this.styles.registerFormBox}>
          <div style={this.styles.pictureBox}>
            <CardMedia
              image={"https://source.unsplash.com/random/800x60" +  Math.floor(Math.random()*10).toString()}
              title="Live from space album cover"
              style={this.styles.cardMedia}
            />
          </div>
          <CardContent style={this.styles.content}>
            <Typography align="center" component="h5" variant="h5">
              Join our Community
            </Typography>
            <form
              onSubmit={this.onRegisterFomSubmit}
              style={this.styles.regForm}
            >
              <TextField
                name="name"
                type="text"
                required
                label="name"
                onChange={this.handleOnChange}
              ></TextField>
              <TextField
                onChange={this.handleOnChange}
                name="email"
                type="email"
                required
                label="email"
              ></TextField>
              <TextField
                onChange={this.handleOnChange}
                name="username"
                type="text"
                required
                label="username"
              ></TextField>
              <TextField
                onChange={this.handleOnChange}
                name="password"
                type="password"
                required
                label="password"
              ></TextField>
              <Button variant="contained" type="submit" color="primary">
                Register
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}
