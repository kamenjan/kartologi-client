import React, { Component } from 'react';
import axios from 'axios'

export default class FileUpload extends Component {

  constructor(props) {
    super(props)
    this.state = {
      uploadStatus: false
    }
    this.uploadData = {}
    console.log(this.props);
  }

  handleUpload = (ev) =>	 {
    ev.preventDefault()
    const data = new FormData()
    data.append('file', this.uploadInput.files[0])
    data.append('filename', this.fileName.value)
    axios.post(`${this.props.apiUrl}/upload`, data)
    .then( response => {
      console.log(response)
      this.setState({
        uploadStatus: true
      })
      this.uploadData = response.data
    })
    .catch( error => {
      console.log(error)
    })
  }

  /* TODO: Somehow update view when response from upload post is received */
  generateDataTemplate = () => {

  }

  render() {
    return(
      <div className={"container"}>
        <form onSubmit={this.handleUpload}>
          <div className={"form-group"}>
            <input className={"form-control" } ref={ ref => { this.uploadInput = ref }} type={"file"} />
          </div>
          <div className={"form-group"}>
            <input className={"form-control"} ref={ ref => { this.fileName = ref }} type={"text"} placeholder={"Optional name for the file"} />
          </div>
          <button className={"btn btn-success"}>Upload</button>
        </form>
      </div>
    )
  }
}