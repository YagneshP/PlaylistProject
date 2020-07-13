import { LOAD_COMMENTS, REMOVE_COMMENT, ADD_NEWCOMMENT } from '../actionTypes';
const intialState = {
	comments: []
};
const comments = (state = intialState, action) => {
	switch (action.type) {
		case LOAD_COMMENTS:
			return [ ...action.comments ];
		case REMOVE_COMMENT:
			return state.filter((comment) => comment._id !== action.id);
		case ADD_NEWCOMMENT:
			return [ ...state, action.newComment ];
		default:
			return state;
	}
};

export default comments;
