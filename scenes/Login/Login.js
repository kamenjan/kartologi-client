import React, { Component } from "react"

import axios from "axios/index"
import cookieClient from 'react-cookie'

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
    axios.post(`/api/user/login`, data)
    .then( response => {
      console.log('--------')
      console.log('response:')
      console.log(response)
      console.log('--------')

      if (response.data.loggedIn) {
        // user was successfully logged in, show admin panel
      }
    })
    .catch( error => {
      console.log('--------')
      console.log('error:')
      console.log(error)
      console.log('--------')
    })
  }

  handleLogout = event => {
    event.preventDefault()
    axios.get(`api/user/logout`)
    .then( response => {
      console.log('--------')
      console.log('response:')
      console.log(response)
      console.log('--------')
    })
    .catch( error => {
      console.log('--------')
      console.log('error:')
      console.log(error)
      console.log('--------')
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
        <div>
          <button className={"btn"} onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    )
  }
}