import React, { Component } from 'react';
import { Link } from "react-router-dom";
import history from "../../services/history";
import { compose, logValue } from "services/functional"

export default class Menu extends Component {

	constructor(props) {
		super(props)
		this.state = {
			open: false
		}
	}

  toggleDropdown = () => this.setState({ open: !this.state.open });

	render() {
		return (
			<div style={{position: `absolute`, zIndex: `100`, right: `0`}}>
				<div id={`main-menu-button`} onClick={this.toggleDropdown}>MENU</div>
				<div id={`main-menu-item-container`}>
					<ul style={{listStyle: `none`, display: `${this.state.open ? `block` : `none`}`}}>
						{this.props.routes.map( ({path, title}, index) => <li key={index}><Link to={path}>{title}</Link></li> )}
					</ul>
				</div>
			</div>
		);
	}
}