import axios from 'axios';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export function updatePublishListings(name, value) {
    return {
        type: 'UPDATE_PUBLISH_LISTINGS_FORM',
        name, value
    }
}

export const cancelForm = () => {
    return {
        type: 'CANCEL_PUBLISH_LISTINGS',
    };
}

export function updateDatabaseProperty(action) {
    return (dispatch, getState) => {
        const { auth, publishListings } = getState();
        const property = {
            address: {
                street: publishListings.street,
                zipCode: publishListings.zipCode,
                city: publishListings.city,
                state: publishListings.state,
            },
            userId: auth.id,
            description: {
                description: publishListings.description,
                bedrooms: publishListings.bedrooms,
                bathrooms: publishListings.bathrooms,
                amenities: publishListings.amenities,
                photoUrl: publishListings.photoUrl,
                price: publishListings.price
            },
        };
        geocodeByAddress(`${publishListings.street} ${publishListings.city}, ${publishingListings.state}`)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                property.address.latitude = latLng.lat,
                property.address.longitude = latLng.lng,
                axios.post('/api/property', property).then(reponse => {
                    dispatch({
                        type: 'UPDATE_DATABASE_PROPERTY',
                        payload: response,
                    });
                })
                .catch(error => console.log(error));
            })
    }
}