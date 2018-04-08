const initialState = {
  auth: {
    status: 'ANONYMOUS',
    accessToken: '',
    email: '',
    firstName: '',
    lastName: '',
    isLandlord: false,
    properties: [],
    rentals: [],
    id: ''
  },
  searchBar: {
    input: '',
    results: [],
    currentSearch: ''
  },
  rentListings: {
    startDate: '',
    endDate: ''
  },
  navBar: {
    toggleSignUp: false,
    toggleLogIn: false
  },
  currentSession: {
    currentUser: '',
    currentProperty: '',
    properties: [],
    reservations: [],
    propertyDetails: []
  },
  publishListings: {
    street: '',
    zipCode: '',
    city: '',
    state: '',
    latitude: '',
    longitude: '',
    propertyDescription: '',
    bedrooms: '',
    bathrooms: '',
    amenities: [],
    photoUrl: [],
    price: '',
    userId: ''
  }
};

export default initialState;
