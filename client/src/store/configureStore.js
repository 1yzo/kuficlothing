import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import notesReducer from '../reducers/notesReducer';
import selectedNoteReducer from '../reducers/selectedNoteReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
           notes: notesReducer,
           selectedNote: selectedNoteReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    
    return store;
};