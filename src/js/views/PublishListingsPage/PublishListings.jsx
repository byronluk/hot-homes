import React from 'react';
import PropTypes from 'prop-types';

class PublishListings extends React.Component {
  render() {
    const {
      publishListings,
      updateForm,
      handleSubmit,
      handleCancel
    } = this.props;
    const {
      street,
      city,
      state,
      zipCode,
      propertyDescription,
      bedrooms,
      bathrooms,
      amentities,
      photoUrl,
      price
    } = publishListings;

    return (
      <div className="main-section">
        <div className="content">
          <h3>What kind of place are you listing?</h3>
          <form onSubmit={e => e.preventDefault()}>
            <div className="field">
              <label className="label">
                Could you please describe your property?
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={propertyDescription}
                  onChange={updateForm}
                  name="propertyDescription"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">How many bedrooms?</label>
              <div className="control">
                <input
                  type="number"
                  value={bedrooms}
                  onChange={updateForm}
                  name="bedrooms"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">How many bathrooms?</label>
              <div className="control">
                <input
                  type="number"
                  value={bathrooms}
                  onChange={updateForm}
                  name="bathrooms"
                />
              </div>
            </div>
            <div className="field">
              <h3>Where is your place located?</h3>
              <div className="field is-grouped">
                <label className="label">Street Address</label>
                <p className="control">
                  <input
                    type="text"
                    value={street}
                    onChange={updateForm}
                    name="street"
                  />
                </p>
              </div>
              <div className="field is-grouped">
                <label className="label">City</label>
                <p className="control">
                  <input
                    type="text"
                    value={city}
                    onChange={updateForm}
                    name="city"
                  />
                </p>
                <label className="label">State</label>
                <p className="control">
                  <input
                    type="text"
                    value={state}
                    onChange={updateForm}
                    name="state"
                  />
                </p>
                <label className="label">Zip Code</label>
                <p className="control">
                  <input
                    type="number"
                    value={zipCode}
                    onChange={updateForm}
                    name="zipCode"
                  />
                </p>
              </div>
            </div>
            <div className="field">
              <label className="label">Amentities</label>
              <div className="control">
                <textarea
                  type="text"
                  value={amentities}
                  onChange={updateForm}
                  name="amentities"
                />
              </div>
            </div>
            <div className="field is-horizontal">
              <label className="label">Price</label>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="field has-addons">
                    <p className="control">
                      <a className="button is-static">$</a>
                    </p>
                    <p className="control is-expanded">
                      <input
                        type="number"
                        value={price}
                        onChange={updateForm}
                        name="price"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Select images:</label>
              <input
                type="file"
                value={photoUrl}
                onChange={updateForm}
                name="photoUrl"
                multiple
              />
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
              <div className="control">
                <button className="button is-text" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

PublishListings.propTypes = {
  publishListings: PropTypes.object,
  updateForm: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func
};

export default PublishListings;
