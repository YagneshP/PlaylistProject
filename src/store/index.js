import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
function saveToLocalStorage(state) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (e) {
		console.log(e);
	}
}

function loadFromLocalStorage() {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (e) {
		console.log(e);
		return undefined;
	}
}
// export function configureStore() {
// 	const store = createStore(
// 		rootReducer,
// 		compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : (f) => f)
// 	);

// 	return store;
// }

const persistedState = loadFromLocalStorage();
const store = createStore(
	rootReducer,
	persistedState,
	compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
