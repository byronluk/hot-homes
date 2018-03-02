export const toggleHidden = (name) => {
  return {
    type: 'TOGGLE_HIDDEN',
    name,
  };
};

export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};
