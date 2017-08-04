import React from "react";

export default class SongTitle extends React.Component{
	render(){
		return(
			    <div id="song_title">
			      <h1 id="song_heading">{this.props.title}</h1><span class="subtitle">- Could have been by {this.props.artist}</span>
			    </div>
			);
	}
}