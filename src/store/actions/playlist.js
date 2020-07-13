import { apiCall } from '../../services/api';
import { addError } from './errors';
import {
	LOAD_PLAYLISTS,
	REMOVE_PLAYLIST,
	UPDATE_PLAYLIST,
	CURRENT_PLAYLIST,
	CLEAR_CURRENT
	// GET_PLAYLIST
} from '../actionTypes';

export const loadPlaylist = (playlists) => ({
	type: LOAD_PLAYLISTS,
	playlists
});
// export const getPlaylist = (playlist) => ({
// 	type: GET_PLAYLIST,
// 	playlist
// });
export const remove = (id) => ({
	type: REMOVE_PLAYLIST,
	id
});

export const update = (data) => ({
	type: UPDATE_PLAYLIST,
	data
});

export const setCurrent = (playlist) => ({
	type: CURRENT_PLAYLIST,
	playlist
});

export const clearCurrent = () => ({
	type: CLEAR_CURRENT
});

export const removePlaylist = (user_id, playlist_id) => {
	return (dispatch) => {
		return apiCall('delete', `/api/users/${user_id}/playlists/${playlist_id}`)
			.then(() => dispatch(remove(playlist_id)))
			.catch((err) => {
				dispatch(addError(err.message));
			});
	};
};

// export const fetchSinglePlaylist = (user_id, playlist_id) => {
// 	return (dispatch) => {
// 		return apiCall('get', `/api/users/${user_id}/playlists/${playlist_id}`)
// 			.then((res) => {
// 				console.log(res);
// 				dispatch(getPlaylist(res));
// 			})
// 			.catch((err) => {
// 				dispatch(addError(err.message));
// 			});
// 	};
// };

// =============== Updating Playlist ==================/

export const updatePlaylist = (data) => (dispatch, getState) => {
	let { currentUser } = getState();
	const user_id = currentUser.user.id;
	const playlist_id = data._id;

	return apiCall('put', `/api/users/${user_id}/playlists/${playlist_id}`, data)
		.then((res) => {
			dispatch(update(res));
		})
		.catch((err) => {
			dispatch(addError(err.message));
		});
};

export const fetchPlaylists = () => {
	return (dispatch) => {
		return apiCall('GET', '/api/playlists')
			.then((res) => {
				dispatch(loadPlaylist(res));
			})
			.catch((err) => {
				dispatch(addError(err.message));
			});
	};
};

// ======================== edit Playlist =======================//
// export const editPlaylist = (user_id, playlist_id) => {
// 	return (dispatch) => {
// 		return apiCall('get', `/api/users/${user_id}/playlists/${playlist_id}/edit`)
// 			.then((res) => {
// 				console.log(res);
// 				dispatch(setCurrent(res));
// 			})
// 			.catch((err) => {
// 				dispatch(addError(err.message));
// 			});
// 	};
// };

//================== Edit Playlist without sending request ====== //

// export const editPlaylist = (playlist) => {
// 		return{

// 		}
// 	};

export const postNewPlaylist = (values) => (dispatch, getState) => {
	let { currentUser } = getState();
	const id = currentUser.user.id;
	console.log(values);
	return apiCall('post', `/api/users/${id}/playlists`, values)
		.then((res) => {})
		.catch((err) => dispatch(addError(err.message)));
};
