import mainReducer from './pages/main/mainReducer'
import { combineReducers } from 'redux';

export const reducer = combineReducers({
    main: mainReducer
});
