import React from "react";

export default class ArtistInput extends React.Component{

	handleChangeInput(e){
		const artist=e.target.value;
		this.props.changeArtist(artist);
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.generate();
	}

    handleClick(e){
        this.props.play();
    }

	render(){
		return(
        <form id="input" onSubmit={this.handleSubmit.bind(this)}>
            <div class="v_bar">
                <div class="row">
                    <div class="col-md-12"><span id="literally">Literally </span><span id="every">Every </span></div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <input type="text" id="song_input" value={this.props.artist} onChange={this.handleChangeInput.bind(this)}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12"><span id="song">song. </span></div>
                </div>
            </div>
            <button class="btn btn-primary outline" type="submit" id="generate_button">Generate </button>
            <i class="glyphicon glyphicon-music audio_icon" onClick={this.handleClick.bind(this)}></i>
        </form>
			);
	}
}