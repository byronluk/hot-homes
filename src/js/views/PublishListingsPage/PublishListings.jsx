import React from 'react';

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
    return (
      <div>
        <h1>What kind of place are you listing?</h1>
        <form>
          <div className='form-group'>
            <label for='guests-number-input'>How many bedrooms?</label>
            <input
              type='number'
              value={publishlistings.bedrooms}
              onChange={this.updateForm}
              name='bedrooms' />
          </div>
          <div className='form-group'>
            <label for='roomNumber'>How many bathrooms?</label>
            <input
              type='number'
              value={publishlistings.bathrooms}
              onChange={this.updateForm}
              name='bathrooms' />
          </div>
          <div className='form-group'>
            <h3>Where's your place located?</h3>
            <label for=''>Street Address</label>
            <input
              type='text'
              value={publishlistings.street}
              onChange={this.updateForm}
              name='street' />
            <label for=''>City</label>
            <input
              type='text'
              value={publishlistings.city}
              onChange={this.updateForm}
              name='city' />
            <label for=''>State</label>
            <input
              type='text'
              value={publishlistings.state}
              onChange={this.updateForm}
              name='state' />
            <label for=''>Zip Code</label>
            <input
              type='number'
              value={publishlistings.zipCode}
              onChange={this.updateForm}
              name='zipCode' />
            <label for=''>Latitude</label>
            <input
              type='text'
              value={publishlistings.latitude}
              onChange={this.updateForm}
              name='latitude' />
            <label for=''>Longtitude</label>
            <input
              type='text'
              value={publishlistings.longtitude}
              onChange={this.updateForm}
              name='city' />
            <label for=''>Amentities</label>
            <input
              type='text'
              value={publishlistings.amentities}
              onChange={this.updateForm}
              name='amentities' />
          </div>
          <div>
            <label for=''>Price</label>
            <input
              type='number'
              value={publishlistings.price}
              onChange={this.updateForm}
              name='price' />
          </div>

        </form>

      </div>
    );
  }
}

export default PublishListings;
