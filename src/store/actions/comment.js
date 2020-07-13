import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_COMMENTS, REMOVE_COMMENT, ADD_NEWCOMMENT } from '../actionTypes';

export const loadComments = (comments) => ({
	type: LOAD_COMMENTS,
	comments
});

export const remove = (id) => ({
	type: REMOVE_COMMENT,
	id
});

export const addComment = (newComment) => ({
	type: ADD_NEWCOMMENT,
	newComment
});

export const removeComment = (user_id, playlist_id, comment_id) => {
	return (dispatch) => {
		return apiCall('delete', `/api/users/${user_id}/playlists/${playlist_id}/comments/${comment_id}`)
			.then(() => dispatch(remove(comment_id)))
			.catch((err) => {
				addError(err.message);
			});
	};
};

export const fetchComments = () => (dispatch, getState) => {
	let { currentUser, playlists } = getState();
	let playlist_id = playlists.currentPlaylist._id;
	const id = currentUser.user.id;

	return apiCall('get', `/api/users/${id}/playlists/${playlist_id}/comments/`)
		.then((res) => {
			console.log('comments fetching', res);
			dispatch(loadComments(res));
		})
		.catch((err) => {
			dispatch(addError(err.message));
		});
};

export const postNewComment = (values) => (dispatch, getState) => {
	let { currentUser, playlists } = getState();
	console.log('values:', values);
	const id = currentUser.user.id;
	let playlist_id = playlists.currentPlaylist._id;

	return apiCall('post', `/api/users/${id}/playlists/${playlist_id}/comments`, values)
		.then((res) => {
			dispatch(addComment(res));
		})
		.catch((err) => dispatch(addError(err.message)));
};
