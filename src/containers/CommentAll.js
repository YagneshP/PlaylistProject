import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrent } from '../store/actions/playlist';
import CommentItem from '../components/CommentItem';
import { removeComment, fetchComments } from '../store/actions/comment';

class CommentAll extends Component {
	componentDidMount() {
		this.props.fetchComments();
	}

	render() {
		const { comments } = this.props;
		if (comments === null) {
			return <h2> Loading....</h2>;
		}
		let commentsAll = comments.map((c, index) => (
			<CommentItem
				index={index}
				key={c._id}
				date={c.createAt}
				detail={c.detail}
				firstName={c.createdBy.firstName}
				// profileImageUrl={c.createdBy.profilePhotoUrl}
			/>
		));

		return (
			// Before carousel
			<div className="row">{commentsAll}</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentplaylist: state.playlists.currentPlaylist,
		comments: state.comments,
		currentUser: state.currentUser.user.id
	};
}

export default connect(mapStateToProps, { fetchComments, setCurrent, removeComment })(CommentAll);
