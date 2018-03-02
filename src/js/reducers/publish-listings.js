import initalState from './initial-state';

function publishListingsReducer(state = initalState.publishlistings, action) {
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
