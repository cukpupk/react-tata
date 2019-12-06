import {toggleItems} from '../utils/navBar.utils';
import navItems from '../data';

const INITIAL_STATE = {
    navItems
};

const navBarReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_NAVBAR_ITEMS':
            return {
                ...state,
                navItems: toggleItems(state.navItems, action.payload)
            }
        default:
            return state
    }
}

export default navBarReducer;