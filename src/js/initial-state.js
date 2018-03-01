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
    toggleHidden: true
  },

  currentSession: {
    currentUser: '',
    currentProperty: '',
  },
};

export default initialState;
