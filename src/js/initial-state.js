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
    input: '',
    listProperties: [],
  },
};

export default initialState;
