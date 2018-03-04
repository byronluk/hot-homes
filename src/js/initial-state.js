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
    myProperties: [],
    id: '',
  },
  homePage: {
    toggleLogIn: false,
  },
  searchBar: {
    input: '',
    results: [],
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
  publishListings: {
    address: {
      street: "",
      zipCode: "",
      city: "",
      state: "",
      latitude: "",
      longitude: ""
    },
    description: {
      description: "",
      bedrooms: "",
      bathrooms: "",
      amenities: [],
      photoUrl: [],
      price: ""
    },
    userId: "",
  }
};

export default initialState;
