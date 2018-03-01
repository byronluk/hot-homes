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
  },

  logIn: {
    email: '',
    password:''
  },

  rentListings: {
    startDate: '',
    endDate: '',
  },

  navBar: {
    toggleLogIn: true,
    toggleSignUp: true,
  },

  currentSession: {
    currentUser: '',
    currentProperty: '',
  }
};

export default initialState;
