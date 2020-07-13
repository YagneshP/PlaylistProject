import { LOAD_VIDEOS, REMOVE_VIDEO, CURRENT_VIDEO } from '../actionTypes';
const intialState = {
	videos: [],
	currentVideo: null
};
const video = (state = intialState, action) => {
	switch (action.type) {
		case LOAD_VIDEOS:
			return {
				...state,
				videos: [ ...action.playlist.videos ],
				currentVideo: action.playlist.videos[0]
			};

		case CURRENT_VIDEO:
			return {
				...state,
				currentVideo: action.video
				// currentVideo: state.videos.filter((video) => (video._id === action.id ? action.video : video))
			};

		case REMOVE_VIDEO:
			return state.filter((video) => video._id !== action.id);
		default:
			return state;
	}
};

export default video;
