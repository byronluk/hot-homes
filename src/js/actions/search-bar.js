const axios = require('axios');

export const onSearchBarChange = (value) => {
  return {
    type: 'SEARCH_BAR_CHANGE',
    input: value,
  };
};

export const searchProperties = (location) => {
  return (dispatch) => {
    axios
      .get('/api/properties')
      .then(response => {
        console.log(response);
        const results = filterLocations(response, location);
        dispatch({
          type: 'SEARCH_PROPERTIES',
          results,
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
    const latDifference = properties[i].address.latitude - location.lat;
    const longDifference = properties[i].address.longitude - location.lng;
    console.log(Math.abs(latDifference), Math.abs(longDifference));
  }
  return results;
}
