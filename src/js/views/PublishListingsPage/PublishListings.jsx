import React from 'react';
import PropTypes from 'prop-types';
import { updateDatabaseProperty } from '../../actions/publish-listings';

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
    const { description, bedrooms, bathrooms, street, city, state, zipCode, amentities, photoUrl, price } = publishListings;

    return (

      <div>
        <h1>What kind of place are you listing?</h1>
        <form onSubmit={e => e.preventDefault()}>>
          <div className='field'>
            <label for='description-input'>Could you please describe your property?</label>
            <input 
              type='text'
              value= {description}
              onChange= {updateForm}
              name='description' />
          </div>
          <div className='field'>
            <label for='guests-number-input'>How many bedrooms?</label>
            <input
              type='number'
              value={bedrooms}
              onChange={updateForm}
              name='bedrooms' />
          </div>
          <div className='field'>
            <label for='roomNumber'>How many bathrooms?</label>
            <input
              type='number'
              value={bathrooms}
              onChange={updateForm}
              name='bathrooms' />
          </div>
          <div className='field'>
            <h3>Where's your place located?</h3>
            <label for='street'>Street Address</label>
            <input
              type='text'
              value={street}
              onChange={updateForm}
              name='street' />
            <label for='city'>City</label>
            <input
              type='text'
              value={city}
              onChange={updateForm}
              name='city' />
            <label for='state'>State</label>
            <input
              type='text'
              value={state}
              onChange={updateForm}
              name='state' />
            <label for='zipCode'>Zip Code</label>
            <input
              type='number'
              value={zipCode}
              onChange={updateForm}
              name='zipCode' />
          </div>
          <div className='field'>
            <label className='label'>Amentities</label>
            <input
              type='text'
              value={amentities}
              onChange={updateForm}
              name='amentities' />
          </div>
          <div className='field'>
            <label for='price'>Price</label>
            <input
              type='number'
              value={price}
              onChange={updateForm}
              name='price' />
          </div>
          <div className='field'>
            <label for='url'>Put your photo url here:</label>
            <input
              type='url'
              value= {photoUrl}
              onChange= {updateForm}
              name='photoUrl' />
          </div>
          <button type='submit' onClick={ handleSubmit }>Submit</button>
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
