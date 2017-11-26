
import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Video extends Component {
//   const _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
_onReady = (event) => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}

render() {
  const { video } = this.props;
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={video.key}
      opts={opts}
      onReady={this.onReady}
    />
  );
}
}


export default Video;

