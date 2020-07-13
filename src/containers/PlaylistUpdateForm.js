// ================================================== ///
//             Updating form                          //
// ================================================== //
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
import { updatePlaylist, clearCurrent } from '../store/actions/playlist';

class PlaylistUpdateForm extends Component {
	constructor(props) {
		super(props);

		// State;
		this.state = {
			_id: '',
			name: '',
			detail: '',
			uploadBy: ''
		};
	}

	componentDidMount() {
		if (this.props.currentPlaylist) {
			const { _id, name, detail, uploadBy } = this.props.currentPlaylist;
			this.setState({
				_id,
				name,
				detail,
				uploadBy
			});
		}
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const playlistObject = {
			name: this.state.name,
			detail: this.state.detail,
			_id: this.state._id,
			uploadBy: this.state.uploadBy
		};

		this.props
			.updatePlaylist(playlistObject)
			.then(() => {
				this.props.history.push('/');
			})
			.catch(() => {
				return;
			});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.props.errors.message && <div className="alert alert-danger">{this.props.errors.message}</div>}
				<label htmlFor="name"> Playlist Name: </label>
				<input
					type="text"
					className="form-control"
					value={this.state.name}
					// defaultValue={name}
					name="name"
					onChange={this.handleChange}
				/>
				<label htmlFor="detail"> Detail : </label>
				<input
					type="text"
					className="form-control"
					name="detail"
					value={this.state.detail}
					// defaultValue={detail}
					onChange={this.handleChange}
				/>

				<button type="submit" className="btn btn-success">
					Update My Playlist
				</button>
			</form>
		);
	}
}

//=========================== redux form ======================//

function mapStateToProps(state) {
	return {
		errors: state.errors,
		playlists: state.playlists,
		currentPlaylist: state.playlists.currentPlaylist
		// initialValues: { ...state.playlists.currentPlaylist }
	};
}

export default connect(mapStateToProps, { updatePlaylist, clearCurrent })(PlaylistUpdateForm);
