import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists, removePlaylist, updatePlaylist, setCurrent } from '../store/actions/playlist';
import { loadVideo } from '../store/actions/videos';
import PlayListItem from '../components/PlayListItem';

class PlayListAll extends Component {
	componentDidMount() {
		this.props.fetchPlaylists();
	}

	render() {
		const { playlists, removePlaylist, currentUser, updatePlaylist, setCurrent, loadVideo } = this.props;
		if (playlists === null) {
			return <h4>Loading...</h4>;
		}

		let playListAll = playlists.map((p, index) => (
			<PlayListItem
				index={index}
				key={p._id}
				date={p.createAt}
				name={p.name}
				thumbnail={p.thumbnail}
				firstName={p.uploadBy.firstName}
				profileImageUrl={p.uploadBy.profilePhotoUrl}
				removePlaylist={removePlaylist.bind(this, p.uploadBy._id, p._id)}
				// editPlaylist={editPlaylist.bind(this, p.uploadBy._id, p._id)}
				setCurrent={setCurrent.bind(this, p)}
				loadVideo={loadVideo.bind(this, p)}
				updatePlaylist={updatePlaylist.bind(this, p.uploadBy._id, p._id)}
				isCorrectUser={currentUser === p.uploadBy._id}
				playListId={p._id}
				userId={p.uploadBy._id}
				detail={p.detail}
			/>
		));
		return (
			// Before carousel
			<div className="row">{playListAll}</div>

			// <div className="row col-sm-8">
			// 	<div className="offset-1 col-sm-10">
			// 		<ul id="playlists" className="list-group">
			//
			// 		</ul>
			// 	</div>
			// </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		playlists: state.playlists.playlists,
		currentUser: state.currentUser.user.id
	};
}

export default connect(mapStateToProps, { fetchPlaylists, removePlaylist, updatePlaylist, setCurrent, loadVideo })(
	PlayListAll
);
