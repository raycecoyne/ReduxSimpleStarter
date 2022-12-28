import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import {KEY_YOUTUBE} from "./components/keys"


//create new component. Should produce HTML
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [], 
            selectedVideo: null
        };
        this.videoSearch('Phantom of the Opera');
    }

    videoSearch(term){
        YTSearch(
            {key: KEY_YOUTUBE, term: term}, 
            //(videos)=>{this.setState({videos:videos});}
            (videos)=>{this.setState({
                videos: videos,
                selectedVideo: videos[0]}
            );}
        );
    }

    render() {
        const videoSearch = _.debounce((term)=> {this.videoSearch(term)},300);
        
        //Passing props from parent to child via jsx tag
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo=> this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

//take component html and add to DOM
ReactDOM.render(<App />, document.querySelector('.container'));