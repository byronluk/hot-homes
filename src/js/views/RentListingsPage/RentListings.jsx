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
        let { startDate, endDate, user, property, auth} = this.props;
        startDate = Date.parse(startDate);
        endDate = Date.parse(endDate);
        if(!auth.status == 'ANONYMOUS') {
            document.getElementById('book-listing-error').innerHTML = 'Please log in before booking';
            return false;
        }
        axios.get('/api/reservations').then(response => {

            for (let i = 0; i < response.data.length; i++) {
                let reservation = response.data[i];
                const rStart = Date.parse(reservation.startDate);
                const rEnd = Date.parse(reservation.endDate);
                if (reservation.propertyID == property &&
                    ((startDate > rStart && startDate < rEnd) ||
                        (endDate < rEnd && endDate > rStart))) {
                    console.log('Reservation start and end dates overlap with another reservation at this location');
                    document.getElementById('book-listing-error').innerHTML = "This property is already booked for that time!";
                    return false;
                }
            }

            this.props.dispatch(updateDatabaseReservation({
                username: user,
                propertyID: property,
                startDate: startDate,
                endDate: endDate,
            }))
            document.getElementById('book-listing-success').innerHTML = 'Property successfully reserved!';
        });
    }

    render() {
        return (
            <div>

                <form onSubmit={ e => e.preventDefault() }>

                    <input type='date' value={this.props.startDate} onChange={this.updateDates} name='startDate' />
                    <input type='date' value={this.props.endDate} onChange={this.updateDates} name='endDate' />

<<<<<<< HEAD
                    <button type='submit' onClick={this.sendDates}>Rent Now</button>
                    <p id='book-listing-error'></p>
<<<<<<< HEAD
                    <p id='book-listing-success'></p>
=======
=======
                    <button type='submit' onClick={this.sendDates}>Book</button>

>>>>>>> add footer
>>>>>>> add footer
                </form>


            </div>
        );
    }



}


export default RentListings;