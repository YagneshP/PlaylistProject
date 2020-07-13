import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

class VideoPlayer extends Component {
	render(props) {
		const { selectedVideo } = this.props;
		if (selectedVideo === null) {
			return <h2>Loading....</h2>;
		}
		const url = selectedVideo.url;
		const description = selectedVideo.description;
		return (
			// <div className="embed-responsive embed-responsive-16by9">
			// 	<iframe title={description} src={url} allowFullScreen width="100%" />
			// </div>
			<Fragment>
				<ReactPlayer url={url} controls={true} />
			</Fragment>

			// <div>
			// 	<video controls width="100%">
			// 		{/* <source src="/media/examples/flower.webm" type="video/webm" /> */}
			// 		<source src={url} />
			// 		Sorry, your browser doesn't support embedded videos.
			// 	</video>
			// </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		selectedVideo: state.videos.currentVideo
	};
}

export default connect(mapStateToProps)(VideoPlayer);
