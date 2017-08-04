import React from "react";
import { Link } from "react-router";

import Home from "./Home";
import About from "./About";
import Nav from "../components/Nav";

export default class Layout extends React.Component{

	render(){
		const { location } = this.props;
		const body_background = location.pathname.match(/^\/about/) ? "":"grey_bg";
		return(
			<div class={body_background}>
				<Nav location={location} />
				{this.props.children}
			</div>
			);
	}
}