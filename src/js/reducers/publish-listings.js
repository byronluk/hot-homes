import initalState from '../initial-state';

<<<<<<< HEAD
function publishListingsReducer(state = initalState.publishListings, action) {
=======
function publishListingsReducer(state = initalState.publishlistings, action) {
>>>>>>> add reducer in root-reducer
    switch (action.type) {
        case 'UPDATE_PUBLISH_LISTINGS_FORM': {
            var listProperty = {
                [[action.payload.name]]: action.payload.value,
            }
            var newListProperties = [...state.listProperties];
            newListProperties.push(listProperty);
            return {
                ...state,
                listProperties: newListProperties
            }
        }
        case 'UPDATE_DATABASE_PROPERTY': {
            return state;
        }
        default: {
            return state;
        }
    }
}

export default publishListingsReducer;
