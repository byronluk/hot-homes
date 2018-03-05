import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer/Footer';

class PublishListings extends React.Component {

  render() {
    const { publishListings, updateForm, handleSubmit, handleCancel } = this.props;
    const { description, bedrooms, bathrooms, street, city, state, zipCode, amentities, photoUrl, price } = publishListings;

    return (
      <div>
        <NavigationBar />
        <div className="main-section">
          <div className='content'>
            <h3>What kind of place are you listing?</h3>
            <form onSubmit={e => e.preventDefault()}>
              <div className='field'>
                <label className='label'>Could you please describe your property?</label>
                <div className='control'>
                  <textarea
                    className='textarea'
                    value={description}
                    onChange={updateForm}
                    name='description'></textarea>
                </div>
              </div>
              <div className='field'>
                <label className='label'>How many bedrooms?</label>
                <div className='control'>
                  <input
                    type='number'
                    value={bedrooms}
                    onChange={updateForm}
                    name='bedrooms' />
                </div>
              </div>
              <div className='field'>
                <label className='label'>How many bathrooms?</label>
                <div className='control'>
                  <input
                    type='number'
                    value={bathrooms}
                    onChange={updateForm}
                    name='bathrooms' />
                </div>
              </div>
              <div className='field'>
                <h3>Where's your place located?</h3>
                <div className='field is-grouped'>
                  <label className='label'>Street Address</label>
                  <p className='control'>
                    <input
                      type='text'
                      value={street}
                      onChange={updateForm}
                      name='street' />
                  </p>
                </div>
                <div className='field is-grouped'>
                  <label className='label'>City</label>
                  <p className='control'>
                    <input
                      type='text'
                      value={city}
                      onChange={updateForm}
                      name='city' />
                  </p>
                  <label className='label'>State</label>
                  <p className='control'>
                    <input
                      type='text'
                      value={state}
                      onChange={updateForm}
                      name='state' />
                  </p>
                  <label className='label'>Zip Code</label>
                  <p className='control'>
                    <input
                      type='number'
                      value={zipCode}
                      onChange={updateForm}
                      name='zipCode' />
                  </p>
                </div>
              </div>
              <div className='field'>
                <label className='label'>Amentities</label>
                <div className='control'>
                  <textarea
                    type='text'
                    value={amentities}
                    onChange={updateForm}
                    name='amentities'></textarea>
                </div>
              </div>
              <div className='field'>
                <label className='label'>Price</label>
                <div className='control'>
                  <input
                    type='number'
                    value={price}
                    onChange={updateForm}
                    name='price' />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Select images:</label>
                <input
                  type='file'
                  value={photoUrl}
                  onChange={updateForm}
                  name='photoUrl'
                  multiple />
              </div>
              <div className='field is-grouped'>
                <div className='control'>
                  <button type='submit' onClick={handleSubmit}>Submit</button>
                </div>
                <div className='control'>
                  <button className='button is-text' onClick={handleCancel} >Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

PublishListings.propTypes = {
      publishListings: PropTypes.object,
      updateForm: PropTypes.func,
      handleSubmit: PropTypes.func,
      handleCancel: PropTypes.func,
    };
    
    export default PublishListings;
