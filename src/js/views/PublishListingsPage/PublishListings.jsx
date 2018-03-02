import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> 0af28b1637e0efd1e3ef348fa06f390216b071e8

class PublishListings extends React.Component {
  constructor(props) {
    super(props);
    this.updateForm = this.updateForm.bind(this);
  }
  updateForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.props.dispatch(updatePublishListings({ name: name, value: value }))
  }
  render() {
    const { publishListings, updateForm, handleSubmit } = this.props;
    const { bedrooms, bathrooms, street, city, state, zipCode, latitude, longtitude, amentities, price } = publishListings;


    return (

      <div>
        <h1>What kind of place are you listing?</h1>
        <form onSubmit={e => e.preventDefault()}>>
          <div className='form-group'>
            <label for='guests-number-input'>How many bedrooms?</label>
            <input
              type='number'
              value={bedrooms}
              onChange={updateForm}
              name='bedrooms' />
          </div>
          <div className='form-group'>
            <label for='roomNumber'>How many bathrooms?</label>
            <input
              type='number'
              value={bathrooms}
              onChange={updateForm}
              name='bathrooms' />
          </div>
          <div className='form-group'>
            <h3>Where's your place located?</h3>
            <label for=''>Street Address</label>
            <input
              type='text'
              value={street}
              onChange={updateForm}
              name='street' />
            <label for=''>City</label>
            <input
              type='text'
              value={city}
              onChange={updateForm}
              name='city' />
            <label for=''>State</label>
            <input
              type='text'
              value={state}
              onChange={updateForm}
              name='state' />
            <label for=''>Zip Code</label>
            <input
              type='number'
              value={zipCode}
              onChange={updateForm}
              name='zipCode' />
            <label for=''>Latitude</label>
            <input
              type='text'
              value={latitude}
              onChange={updateForm}
              name='latitude' />
            <label for=''>Longtitude</label>
            <input
              type='text'
              value={longtitude}
              onChange={updateForm}
              name='city' />
            <label for=''>Amentities</label>
            <input
              type='text'
              value={amentities}
              onChange={updateForm}
              name='amentities' />
          </div>
          <div>
            <label for=''>Price</label>
            <input
              type='number'
              value={price}
              onChange={updateForm}
              name='price' />
          </div>
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>

      </div>
    );
  }
}

PublishListings.propTypes = {
  publishListings: PropTypes.object,
  updateForm: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default PublishListings;
