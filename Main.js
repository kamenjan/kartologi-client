import React, { Component } from "react"

import Menu from "./components/Menu/Menu"
import FileUpload from "./components/FileUpload/FileUpload"

export default class Main extends Component {
	constructor() {
    super()
    this.state = {
      fromTop: 0,
      width: window.innerWidth,
			height: window.innerHeight
    }
  }

	render() {
		return (
			<div>
				<h2>File Upload</h2>
        <FileUpload />
			</div>
		)
	}
}