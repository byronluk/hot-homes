const initialState = {
  signUp: {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  },

  homePage: {
    toggleLogIn: false,
  },

  searchBar: {
    input: '',
    results: [],
  },

  logIn: {
    email: '',
    password: '',
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
  },
};

export default initialState;
