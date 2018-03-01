import initialState from '../initial-state';

export default function RentListingReducer(state = initialState.rentListings, action) {

    switch (action.type) {

        case 'UPDATE_RESERVATION_DATES': {
            return {
                ...state,
                [[action.payload.name]]: action.payload.value,
            }
        }

        case 'UPDATE_DATABASE_RESERVATION_FULFILLED': {
            return state;
        }

        case 'UPDATE_DATABASE_RESERVATION_REJECTED': {
            console.log('Database addition was not successful');
            return state;
        }

        default: {
            return state;
        }
    }
}