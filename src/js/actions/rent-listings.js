import axios from 'axios';
import { getUserReservations } from './log-in';

export function updateReservationDates(action) {
  return {
    type: 'UPDATE_RESERVATION_DATES',
    payload: action
  };
}

export function updateDatabaseReservation(action) {
  return dispatch => {
    axios.post('/api/reservations', action).then(() => {
      dispatch(getUserReservations(action));
      return { type: 'UPDATE_DATABASE_RESERVATION' };
    });
  };
}
