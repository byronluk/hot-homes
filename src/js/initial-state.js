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

  navBar: {
    toggleLogIn: true,
    toggleSingUp: true,
  }
};

export default initialState;
