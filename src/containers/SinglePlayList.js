import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postNewComment } from '../store/actions/comment';
// import CommentAll from './CommentAll';
import CommentsTimeline from '../components/CommentsTimeline';
// import { Field, reduxForm } from 'redux-form';
import CommentForm from './CommentForm';
import VideoList from './VideoList';
import { fetchComments } from '../store/actions/comment';
import VideoPlayer from './VideoPlayer';
class SinglePlayList extends Component {
	handleSubmit = (e) => {
		e.preventDeafult();
		this.props.postNewComment();
		this.props.history.push('/');
	};

	render() {
		// const { _id, name, detail, uploadBy } = this.state;

		return (
			<div className="container">
				<div className="row">
					<div className="col-8">
						<VideoPlayer />
						{/* Comment Form */}
						<div className="row" style={{ marginTop: '16px' }}>
							<CommentForm />
						</div>

						{/* Comments Section */}
						<div className="row" style={{ marginTop: '10px' }}>
							<CommentsTimeline />
						</div>
					</div>
					{/* Video list */}
					<div className="col-4">
						<VideoList />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		errors: state.errors,
		playlists: state.playlists,
		currentPlaylist: state.playlists.currentPlaylist
		// selectedVideo: state.videos.currentVideo
	};
}

export default connect(mapStateToProps, { postNewComment, fetchComments })(SinglePlayList);
