import initalState from '../initial-state';

function publishListingsReducer(state = initalState.publishListings, action) {
    switch (action.type) {
        case 'UPDATE_PUBLISH_LISTINGS_FORM': {
            return {
                ...state,
                [[action.name]]: action.value,
            }
        }
        case 'UPDATE_DATABASE_PROPERTY_FULFILLED': {
            var myProperty = {
                [[action.payload.name]]: action.payload.value,
            }
            var newMyProperties = [...state.myProperties];
            newMyProperties.push(myProperty);
            return {
                ...state,
                auth: [newMyProperties, ...auth]
            }
        }
        default: {
            return state;
        }
    }
}

export default publishListingsReducer;

