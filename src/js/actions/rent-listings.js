import axios from 'axios';

export function updateReservationDates(action) {
    return {
        type: 'UPDATE_RESERVATION_DATES',
        payload: action,
    }
}

export function updateDatabaseReservation(action) {
    return {
        type: 'UPDATE_DATABASE_RESERVATION',
        payload: axios.post('/api/reservations', action),
    }
}