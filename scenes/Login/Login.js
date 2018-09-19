import React, { Component } from "react"

import axios from "axios/index";

export default class Login extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   jwt: 'nema'
    // }
  }

  handleLogin = event => {
    event.preventDefault()
    const data = new FormData()
    data.append('username', this.userNameInput.value)
    data.append('password', this.passwordInput.value)
    axios.post(`${this.props.apiUrl}/users/login`, data)
    .then( response => {
      this.setState({
        jwt: response.data.token
      })
    })
    .catch( error => {
      // console.log(error)
    })
  }

  handlePrivatePostApiCall = event => {
    event.preventDefault()
    axios.post(`${this.props.apiUrl}/users/private`, this.state.jwt, {
      headers: {
        "Authorization": `Token ${this.state.jwt}`
      }
    })
    .then( response => {
      console.log('--------')
      console.log(response)
      console.log('--------')
    })
    .catch( error => {
      console.log(error)
    })
  }

  handlePrivateGetApiCall = event => {
    event.preventDefault()
    axios.get(`${this.props.apiUrl}/users/private`, {
      headers: {
        "Authorization": `Token ${this.state.jwt}`
      }
    })
    .then( response => {
      console.log('--------')
      console.log(response)
      console.log('--------')
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
        <button className={"btn"} onClick={this.handlePrivatePostApiCall}>Private POST api call</button>
        <button className={"btn"} onClick={this.handlePrivateGetApiCall}>Private GET api call</button>
      </div>
    )
  }
}