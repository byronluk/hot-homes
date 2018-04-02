const axios = require('axios');
import history from '../../history';

export const onSearchBarChange = value => {
  return {
    type: 'SEARCH_BAR_CHANGE',
    input: value
  };
};

export const searchProperties = (location, currentSearch) => {
  return dispatch => {
    axios
      .get('/api/properties')
      .then(response => {
        const results = filterLocations(response, location);
        dispatch({
          type: 'SEARCH_PROPERTIES',
          results,
          currentSearch
        });
      })
      .catch(error => console.log(error));
  };
};
/* filter properties x latlng away from selected location */
function filterLocations(data, location) {
  const properties = data.data;
  const results = [];

  for (var i = 0; i < properties.length; i++) {
    const coordinates = {
      lat1: properties[i].address.latitude,
      lon1: properties[i].address.longitude,
      lat2: location.lat,
      lon2: location.lng
    };
    var distance = distanceInMilesBetweenEarthCoordinates(coordinates);
    if (distance <= 25) {
      results.push(properties[i]);
    }
  }
  history.push('/listings');
  return results;
}
//  helper functions to calculate distance
function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function distanceInMilesBetweenEarthCoordinates({ lat1, lon1, lat2, lon2 }) {
  var earthRadiusMiles = 3959;

  var dLat = degreesToRadians(lat2 - lat1);
  var dLon = degreesToRadians(lon2 - lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusMiles * c;
}
