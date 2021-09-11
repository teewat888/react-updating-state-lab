// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }
    handleBitRate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => {console.log('bitrate: ',this.state)});
    }

    handleRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: "720p"
                }
                }
            }, () => {console.log('resolution: ',this.state)})

    }

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.handleBitRate}>

                </button>
                <button className="resolution" onClick={this.handleRes}>

                </button>
            </div>
        );
    }
}