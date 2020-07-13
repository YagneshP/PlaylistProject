import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import comments from './comments';
import playlists from './playlists';
import videos from './videos';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	currentUser,
	errors,
	comments,
	playlists,
	videos,
	form: formReducer
});

export default rootReducer;
