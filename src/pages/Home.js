import React from "react";
import jsonp from "jsonp";
import Text from "markov-chains-text";

import ArtistInput from "../components/ArtistInput";
import SongTitle from "../components/SongTitle";
import Lyrics from "../components/Lyrics";
import Footer from "../components/Footer";

export default class Home extends React.Component{

	constructor(){
		super();
		this.state={
			pastArtist:"",
			artist:"chainsmokers",
			songTitle:"inside in",
			lyrics:[
			"It's in my own selfishness. So don't let me down, down, down. It's in my own selfishness. So don't let me down, down, down.",
			"Hurry up now I need you the most. it's in my head, darling I hope. Like I don't mean to stop you. And clearly I don't know what to say it, but you're not the only one on my mind. So don't let me, don't let me, don't let me, don't let me, don't let me, don't let me down, down, down.",
			"It's in my own selfishness. So don't let me down, down, down. It's in my own selfishness. So don't let me down, down, down.",
			"Will you still care in the cold you've been. And clearly I don't know what to say at all. Got caught up in my head, darling, I have to cut you off. You tell me when you're leaving.",
			"It's in my own selfishness. So don't let me down, down, down. It's in my own selfishness. So don't let me down, down, down."
			],
			nameCorpus:[],
			lyricsCorpus:"You should get this for Elizabeth nah I only buy good books 😉 You made maliha angry ik 🙂 she still hasn't read my recommendations 😉 Alex is getting that book for Elizabeth so you can come up with something else ;) JUL 6TH, 1:16PM I'm not allowed to play with it but I really want to 😭 ... is that a A drone? Yes :o hmm will you be allowed to play with it or is it gonna be the chocolate on a strict diet I'm not sure what the drone laws are in Toronto but I'm pretty sure you can't fly one in the city hmm what about the islands? Maybe. I'll have to look up the laws It's going to Madagascar for a bit :o if u do something cool, you gotta send pics 😉 I will So far I've mastered taking pictures of sapphires you mean me? cus i'm a gem Yes that's exactly what I meant JUL 7TH, 8:19AM Can you come to the escape room Sunday night? JUL 7TH, 1:14PM Probs yeah Everyone wants to go at 5:45 so we will have to wait until next week wait like next weekened? cus I'm leaving on the 12th 😞 😮 if you don't do it with me you can do noriko or syndicate 😀 It's at black creek. It's brand new. Part of it is outside and you have to use lanterns to see Ahhhhhh and I'm missing this? Is it booked for this weekend? Yeah 😕 When do you get back from Italy? Uh in 2 weeks 😞 So of u wanna wait till then 😉 I'll go agin with you Eyyy there we go 🙂 JUL 16TH, 2:24PM Is this the stuff you wanted for the secret santa? JUL 17TH, 9:26AM :o I have those! I have white and black I need the screen and special green photo paint Did u guys do escape room? JUL 17TH, 12:12PM Yes and it was so much fun! Can't wait to do it again but we should definitely do the one at 9 JUL 21ST, 10:55AM Last day in Italy U said it was fun... Did u guys win or are we gonna win next time 😉 Well we got pretty close. We were on the final task of rounding up cursed people when the time ran out Rounding up cursed people. Sounds lit! JUL 25TH, 2:07PM u still up for escape room? JUL 25TH, 3:29PM Not this week but probably next week Seems legit FRI 5:32PM There are lots of tickets for this Sunday for the escape room? you need tickets? Yes and yes You need to book a spot for yourself so they know how many people are coming and how many spots are left if its happening I'm down I'm in. We can have up to 6 people FRI 8:16PM Let me know if/when you buy a ticket howw do I buy a ticket? FRI 10:10PM https://www-1552h.bookeo.com/bookeo/b_secretcityadventures_start.html?ctlsrc=1501294175932&src=03h&type=41552Y9PJYH15C4110A133 Book Your Tickets, See Escape Games Calendar | Secret City Adventures Book your tickets! See the full calendar available for Secret City Adventures - Escape Room Games, Escape Casa Loma Series, and other amazing adventures. secretcityadventures.com SAT 8:13AM student or adult? 5:45? Student and up to you They give you lanterns to guide you around but it wasn't dark enough at 6"
		};
	this.changeArtist = this.changeArtist.bind(this);
	this.setName = this.setName.bind(this);
	this.setPastArtist = this.setPastArtist.bind(this);
	this.setLyrics = this.setLyrics.bind(this);
	this.setLyricsCorpus = this.setLyricsCorpus.bind(this);
	this.setNameCorpus = this.setNameCorpus.bind(this);
	this.getLyrics = this.getLyrics.bind(this);
	}

	changeArtist(newArtist){
		this.setState({... this.state,artist:newArtist});
	}

	setName(){
		console.log("setName");
		const index = Math.round((this.state.nameCorpus.length-1)*Math.random());
		this.setState({...this.state,songTitle:this.state.nameCorpus[index]});
	}

	setPastArtist(currentArtist){
		this.setState({...this.state,pastArtist:currentArtist});
	}

	setLyrics(){
		console.log("setLyrics");
		const fakeText = new Text(this.state.lyricsCorpus);
		var verse1="";
		var verse2="";
		var verse3="";
		var song=[];
		for(var f=0;f<2;f++){
			var fakeSong;
			do{
				fakeSong= fakeText.makeSentence();
			}while(!fakeSong.length);

			verse1=verse1.concat(fakeSong);
			verse1=verse1.concat('\n');
		}
		verse1=verse1.concat(verse1);

		for(var f=0;f<5;f++){
			var fakeSong;
			do{
				fakeSong= fakeText.makeSentence();
			}while(!fakeSong.length);

			verse2=verse2.concat(fakeSong);
			verse2=verse2.concat('\n');
		}

		for(var f=0;f<4;f++){
			var fakeSong;
			do{
				fakeSong= fakeText.makeSentence();
			}while(!fakeSong.length);

			verse3=verse3.concat(fakeSong);
			verse3=verse3.concat('\n');
		}
		verse1=verse1.concat('\n');
		verse2=verse2.concat('\n');
		verse3=verse3.concat('\n');
		song=song.concat(verse1);
		song=song.concat(verse2);
		song=song.concat(verse1);
		song=song.concat(verse3);
		song=song.concat(verse1);
		responsiveVoice.speak(song.join('\n'), "UK English Male");
		this.setState({...this.state,lyrics:song});
	}


	setLyricsCorpus(lyrics){
		this.setState({...this.state,lyricsCorpus:lyrics});
	}

	setNameCorpus(names){
		this.setState({...this.state,nameCorpus:names});
	}

	getLyrics(){
		console.log("asdf");
	if(this.state.pastArtist==this.state.artist){
		this.setLyrics();
		return;
	}
	this.setPastArtist(this.state.artist);
	var art_id;
	var album_ids=[];
	var track_ids=[];
	var lyrics="";
	var countTracks=0;
	var expect=0;
	var trackNames=[];
	const url_artist_id="http://api.musixmatch.com/ws/1.1/artist.search?apikey=4230a04148407c3a96bc21bcb1dd5595&format=jsonp&callback=callback&q_artist=".concat(this.state.artist);
	const settings = {
		"async": true,
		"crossDomain": true,
		"method": "GET",
	}
	var addCommas = function(string){
		var temp=string.replace(/\r?\n|\r/g,".\n");
		temp=temp.replace(/\!\.|\?\.|\,\./g,"?");
		return temp;
	}.bind(this);

	var removeTag = function(string){
		var temp = string.replace(/\*\*\*\*\*\*\*\sThis\sLyrics\sis\sNOT\sfor\sCommercial\suse\s\*\*\*\*\*\*\*|\.\.\.\./g,"");
		return temp;
	}.bind(this);

	var getSongLyrics = function (err, data) {
		if (err) {
			console.error(err.message);
		} else {
			//console.log(data);
			var song=data.message.body.lyrics.lyrics_body;
			song=removeTag(song);
			lyrics=lyrics.concat(song);
		}
		countTracks++;
		if(countTracks==expect){
			lyrics=addCommas(lyrics);
			 console.log(trackNames);
			this.setLyricsCorpus(lyrics);
			this.setNameCorpus(trackNames);
			this.setName();
			this.setLyrics();
		}
		//console.log("Track ",countTracks, " expect ", expect);


	}.bind(this);

	var getTracks = function (err, data) {
		if (err) {
			console.error(err.message);
		} else {
			const numTracks=data.message.body.track_list.length;
			const track_list=data.message.body.track_list;
			expect+=numTracks;
			for(var i=0;i<numTracks;i++){
				//make name corpus
				trackNames=trackNames.concat(track_list[i].track.track_name);
				track_ids=track_ids.concat(track_list[i].track.track_id);
				//getting the lyrics_________________________________________________________________________________________________________________

				const url_lyrics_id="http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=4230a04148407c3a96bc21bcb1dd5595&format=jsonp&callback=callback&track_id=".concat(track_list[i].track.track_id);
				jsonp(url_lyrics_id, settings,getSongLyrics);
			}
		}
	}.bind(this);

	var getAlbums = function (err, data) {
		if (err) {
			console.error(err.message);
		} else {
			//console.log(data);
			var listLength=data.message.body.album_list.length;
			for(var i=0;i<listLength;i++){
				album_ids=album_ids.concat(data.message.body.album_list[i].album.album_id);

				//getting tracks_________________________________________________________________________________________________________________
				const url_track_ids="http://api.musixmatch.com/ws/1.1/album.tracks.get?apikey=4230a04148407c3a96bc21bcb1dd5595&format=jsonp&callback=callback&album_id=".concat(album_ids[i]);
				jsonp(url_track_ids, settings, getTracks);
			}
		}
	}.bind(this);

	var getArtist = function (err, data) {
		console.log(2);
		if (err) {
			console.error(err.message);
		} else {
			console.log(data);
			art_id=data.message.body.artist_list[0].artist.artist_id;
			console.log(art_id);
			const url_albums_ids="http://api.musixmatch.com/ws/1.1/artist.albums.get?apikey=4230a04148407c3a96bc21bcb1dd5595&format=jsonp&callback=callback&artist_id=".concat(art_id);
			//getting albums _________________________________________________________________________________________________________________
		jsonp(url_albums_ids, settings, getAlbums);
		}
	}.bind(this);
	jsonp(url_artist_id, settings, getArtist);

}

playSong(){
	responsiveVoice.speak(this.state.lyrics.join('\n'), "UK English Male");
}

	render(){
		return(
			<div>
				<div class="container main_container">
					<ArtistInput changeArtist={this.changeArtist.bind(this)} artist={this.state.artist} generate={this.getLyrics.bind(this)} play={this.playSong.bind(this)}/>
						<div id="actual_song">
						<SongTitle title={this.state.songTitle} artist={this.state.artist}/>
						<Lyrics lyrics={this.state.lyrics}/>
						</div>
				</div>
				<div class="grey_bg">
				<div class="container footer_container">
				<Footer/>
				</div>
				</div>
			</div>
			);
	}

}