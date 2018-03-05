import initalState from '../initial-state';

function publishListingsReducer(state = initalState.publishListings, action) {
    switch (action.type) {
        case 'UPDATE_PUBLISH_LISTINGS_FORM': {
                const { name, value } = action;
                console.log(name, value);
                return {
                  [[name]]: value,
                };
        }

        case 'CANCEL_PUBLISH_LISTINGS': {
            return initalState.auth;
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

