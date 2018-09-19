import React, { Component } from "react"

import FileUpload from "../../components/FileUpload/FileUpload"

export default class Upload extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={"container"}>
        <FileUpload { ... this.props} />
      </div>
    )
  }
}