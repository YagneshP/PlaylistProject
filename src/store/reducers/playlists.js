import { LOAD_PLAYLISTS, REMOVE_PLAYLIST, UPDATE_PLAYLIST, CLEAR_CURRENT, CURRENT_PLAYLIST } from '../actionTypes';
const intialState = {
	playlists: null,
	currentPlaylist: null
};
const playlist = (state = intialState, action) => {
	switch (action.type) {
		case LOAD_PLAYLISTS:
			return {
				...state,
				playlists: [ ...action.playlists ]
			};
		case REMOVE_PLAYLIST:
			return {
				...state,
				playlists: state.playlists.filter((playlist) => playlist._id !== action.id)
			};
		case CURRENT_PLAYLIST:
			return {
				...state,
				currentPlaylist: action.playlist
			};
		case CLEAR_CURRENT:
			return {
				...state,
				currentPlaylist: null
			};
		case UPDATE_PLAYLIST:
			return {
				...state,
				playlists: state.playlists.map((playlist) => (playlist._id === action.data.id ? action.data : playlist))
			};
		// case GET_PLAYLIST:
		// return{
		// 	...state,

		// }
		default:
			return state;
	}
};

export default playlist;
