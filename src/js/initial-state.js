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
};

export default initialState;
