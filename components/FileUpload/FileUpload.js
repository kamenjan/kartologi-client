import React, { Component } from 'react';
import axios from 'axios'

export default class FileUpload extends Component {

  constructor(props) {
    super(props)
    this.state = {
      uploadStatus: false
    }
    this.uploadData = {}
  }

  handleUpload = (ev) =>	 {
    ev.preventDefault()
    const data = new FormData()
    data.append('file', this.uploadInput.files[0])
    data.append('filename', this.fileName.value)
    axios.post('http://localhost:3000/statistic/upload', data)
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
      <div class="container">
        <form onSubmit={this.handleUpload}>
          <div className="form-group">
            <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
          </div>
          <div className="form-group">
            <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
          </div>
          <button className="btn btn-success" type>Upload</button>
        </form>
        <div>{ Object.values(this.uploadData) }</div>
      </div>
    )
  }
}