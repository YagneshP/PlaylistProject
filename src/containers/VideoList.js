import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentVideo } from '../store/actions/videos';
import VideoItem from '../components/VideoItem';

class VideoList extends Component {
	render() {
		const { currentPlaylist, setCurrentVideo } = this.props;
		if (currentPlaylist) {
			let videos = currentPlaylist.videos;
			var videoList = videos.map((v) => (
				<VideoItem
					key={v._id}
					date={v.createAt}
					url={v.url}
					description={v.description}
					thumbnail={v.thumbnail}
					setCurrentVideo={setCurrentVideo.bind(this, v)}
				/>
			));
		}
		// selectedVideo={this.state.selectedVideo}
		return (
			<div className="col-8">
				<div className="col-4">
					<ul className="list-group">{videoList}</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentPlaylist: state.playlists.currentPlaylist,
		currentUser: state.currentUser.user.id
	};
}

export default connect(mapStateToProps, { setCurrentVideo })(VideoList);
