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
    toggleHidden: true
  }
};

export default initialState;
