import {combineReducers} from 'redux';

import topHeaderReducer from './reducers/topHeader.reducer';
import navBarReducer from './reducers/navBar.reducer';

const rootReducer = combineReducers({
    topHeader: topHeaderReducer,
    navBar: navBarReducer
});

export default rootReducer;