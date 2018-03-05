import React from 'react';
import axios from 'axios';
import { updateReservationDates, updateDatabaseReservation } from '../../actions/rent-listings';

class RentListings extends React.Component {

    constructor(props) {
        super(props);
        this.updateDates = this.updateDates.bind(this);
        this.sendDates = this.sendDates.bind(this);

    }

    updateDates(e) {

        const name = e.target.name;
        const value = e.target.value;
        this.props.dispatch(updateReservationDates({ name: name, value: value }));

    }

    sendDates(e) {
        e.preventDefault();
        console.log('submit button clicked');
        const { startDate, endDate, user, property, auth} = this.props;
        if(!auth.status == 'ANONYMOUS') {
            document.getElementById('book-listing-error').innerHTML = 'Please log in before booking';
            return false;
        }
        axios.get('/api/reservations').then(response => {

            response.data.forEach(reservation => {
                if (reservation.userId == user && reservation.propertyID == property &&
                    ((startDate > reservation.startDate && startDate < reservation.endDate) ||
                        (endDate < reservation.endDate && endDate > reservation.startDate))) {
                    console.log('Reservation start and end dates overlap with another reservation at this location');
                    document.getElementById('book-listing-error').innerHTML = "This property is already booked for that time!";
                    return false;
                }
            })

            this.props.dispatch(updateDatabaseReservation({
                user: user,
                property: property,
                startDate: startDate,
                endDate: endDate,
            }))
        });
    }

    render() {
        return (
            <div>

                <form>

                    <input type='date' value={this.props.startDate} onChange={this.updateDates} name='startDate' />
                    <input type='date' value={this.props.endDate} onChange={this.updateDates} name='endDate' />

                    <button type='submit' onClick={this.sendDates}>Rent Now</button>
                    <p id='book-listing-error'></p>
                </form>


            </div>
        );
    }



}


export default RentListings;