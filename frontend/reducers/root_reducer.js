import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers({
    entities: entitiesReducer,
    ui: "no clue what to put here yet",
    session: sessionReducer,
    errors: errorsReducer
})