import initialState from '../initial-state';


export default function currentSessionReducer(state=initialState.currentSession, action) {

    switch (action.type){

        case 'UPDATE_CURRENT_USER': {
            return {
                ...state,
                currentUser: action.payload,
            }
        }

        case 'UPDATE_CURRENT_PROPERTY': {
            return {
                ...state,
                currentProperty: action.payload,
            }
        }

        default: {
            return state;
        }

    }

}