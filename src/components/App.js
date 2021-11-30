import React from 'react';
import SearchBar from './SearchaBar';
import youtube from '../apis/youtube';
import Videolist from './VideoList';
import Videoditail from './VideoDitail';


class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('f1')
    }


    onTermSubmit = async (term) => {

        const response = await youtube.get('/search', {
            params: {
                q: term


            }
        });

        this.setState({ videos: response.data.items ,
        selectedVideo: response.data.items[0]
        });
    }



    //understand that wich video is selected
    onVideoSelect = (video) => {

        this.setState({ selectedVideo: video });

    };



    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <Videoditail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <Videolist onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default App;
