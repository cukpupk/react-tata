const INITIAL_STATE = {
    navBarToggle: true
}

const topHeaderReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_NAVBAR':
            return {
                ...state,
                navBarToggle: !state.navBarToggle
            }
        default:
            return state
    }
}

export default topHeaderReducer;