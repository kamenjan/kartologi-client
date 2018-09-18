import React, { Component } from "react"

import FileUpload from "../../components/FileUpload/FileUpload"
import axios from "axios/index";

export default class Login extends Component {
  constructor(props) {
    super(props)
    console.log(this.props);
  }

  handleLogin = event => {
    event.preventDefault()
    const data = new FormData()
    data.append('username', this.userNameInput.value)
    data.append('password', this.passwordInput.value)
    axios.post(`${this.props.apiUrl}/login`, data)
    .then( response => {
      console.log(response)
      this.setState({
        uploadStatus: true
      })
    })
    .catch( error => {
      console.log(error)
    })
  }

  render() {
    return(
      <div className={"container"}>
        <form onSubmit={this.handleLogin}>
          <div className={"form-group"}>
            <input className={"form-control"} ref={ ref => { this.userNameInput = ref }} type={"text"} placeholder={"user"} />
          </div>
          <div className={"form-group"}>
            <input className={"form-control"} ref={ ref => { this.passwordInput = ref }} type={"password"} placeholder={"password"} />
          </div>
          <button className={"btn btn-success"}>Login</button>
        </form>
      </div>
    )
  }
}