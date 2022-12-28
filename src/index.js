import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import {KEY_YOUTUBE} from "./components/keys.js"


//create new component. Should produce HTML
class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos: []};
        YTSearch(
            {key: KEY_YOUTUBE, term: 'surfboards'}, 
            //(videos)=>{this.setState({videos:videos});}
            (videos)=>{this.setState({videos});}
        );
    }

    render() {
        
        //Passing props from parent to child via jsx tag
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

//take component html and add to DOM
ReactDOM.render(<App />, document.querySelector('.container'));