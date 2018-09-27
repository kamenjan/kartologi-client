import React, { Component } from "react"

// import { MemoryRouter as Router, Route, Link } from "react-router-dom";

import { Router, Route, Switch } from 'react-router-dom'
import history from 'services/history'

import Home from "./scenes/Home/Home"
import Login from "./scenes/Login/Login"
import Upload from "./scenes/Upload/Upload"

import Menu from "./components/Menu/Menu"

export default class Main extends Component {
	constructor() {
    super()
    this.state = {
      fromTop: 0,
      width: window.innerWidth,
			height: window.innerHeight
    }

    this.routes = [
      {
        component: Home,
        title: 'home',
        exact: true,
        path: `/`,
        ownProps: {
          nekProp: 0
        }
      },
      {
        component: Login,
        title: 'login',
        exact: true,
        path: `/login`,
        ownProps: {
          nekProp: 0
        }
      },
      {
        component: Upload,
        title: 'upload',
        exact: true,
        path: `/upload`,
        ownProps: {
          nekProp: 0
        }
      }
    ]

    this.apiUrl = `http://localhost:3000/api`
    // this.apiUrl = `https://kartologi.kancelarija.tech`

  }

	render() {
		return (
			<div>
        <Router history={history}>
          <div id={"app-container"}>
            <Menu routes={this.routes} />
            <Switch>
              {this.routes.map((route, i) =>
                <Route exact path={route.path} key={i} render={ (props) => (
                  React.createElement(route.component, { ... props, apiUrl: this.apiUrl })
                )}/>
              )}
              {/*<Route path="/8" component={SvgAnimation} />*/}
              {/*<Route path="/1" component={PLPAnimation} />*/}
              {/*<Route path="/6" component={TransitionAnimation} />*/}
              {/*<Route path="/7" component={Slovenia} />*/}
            </Switch>
          </div>
        </Router>
      </div>
		)
	}
}