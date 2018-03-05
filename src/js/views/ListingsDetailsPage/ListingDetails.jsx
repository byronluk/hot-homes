import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import RentListings from '../RentListingsPage';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer/Footer';

export default class ListingDetails extends React.Component {

  constructor(props) {
    super(props);

    this.loading = 'loading...';

    this.state = {
      description: this.loading,
      address: this.loading,
    };
  }

  componentDidMount() {
    const id = this.props.location.pathname.substr(10);
    axios.get(`/api/properties/${id}`)
      .then(response => {
        this.setState({ ...response.data, error: null });
      })
      .catch(err => {
        console.log('Something went wrong: ' + err);
        this.setState({
          error: err,
        });
      });
  }

  render() {
    const { description, address } = this.state;
    console.log(description, address);
    if (!this.state.error) {
      return (
        <div>
          <NavigationBar />
          <div className="main-section">
            {!!description.photoUrl &&
              <Carousel>
                {!!description.photoUrl.length &&
                  description.photoUrl.map((photo, index) => {
                    return (
                      <div key={index}>
                        <img src={photo} alt="property images" />
                      </div>);
                  })
                }
              </Carousel>}
            <div className="grid">
              <div className="property-details">
                <p
                  className="is-size-4 address-title"
                >
                  {`${address.street}, ${address.city} ${address.state}`}
                </p>
                <p>{`${description.description}`}</p>
                <div className="tags main-info-tags">
                  <span className="tag">{`${description.bedrooms} bedrooms`}</span>
                  <span className="tag">{`${description.bathrooms} bathrooms`}</span>
                  <span className="tag">{`$${description.price} per month`}</span>
                </div>
                <hr />
                <p className="amenities-title">Amenities</p>
                {!!description.amenities &&
                  <div>
                    {!!description.amenities.length &&
                      <div className="tags amenity-tags">
                        {description.amenities.map((amenity, index) => {
                          return (
                            <span className="tag is-primary" key={index}>{amenity}</span>
                          );
                        })}
                      </div>
                    }
                  </div>
                }
              </div>
              <RentListings />
            </div>
          </div>
        </div >
      );
    }
    return (
      <div>
        <h3>Error! Something went wrong on our end. More details below</h3>
        <p>{this.state.error}</p>
      </div>
    );
  }
}
