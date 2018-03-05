const initialState = {
  signUp: {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  },
  logIn: {
    emailOrUsername: '',
    password: '',
  },
  auth: {
    status: 'ANONYMOUS',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    isLandlord: false,
    properties: [],
    rentals: [],
    id: '',
  },
  homePage: {
    toggleLogIn: false,
  },
  searchBar: {
    input: '',
    results: [],
    currentSearch: '',
  },
  rentListings: {
    startDate: '',
    endDate: '',
  },
  navBar: {
    toggleSignUp: false,
    toggleLogIn: false,
  },
  currentSession: {
    currentUser: '',
    currentProperty: '',
    properties: [],
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
    userId: '',
  },
};

export default initialState;
