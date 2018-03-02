import axios from 'axios';

export function updatePublishListings(action) {
    return {
        type: 'UPDATE_PUBLISH_LISTINGS_FORM',
        payload: action,
    }
}

export function updateDatabaseProperty(action) {
    return {
        type: 'UPDATE_DATABASE_PROPERTY',
        payload: axios.post('/api/property', action),
    }
}