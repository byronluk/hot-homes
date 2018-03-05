export const updateCurrentProperty = (id) => {
  return {
    type: 'UPDATE_CURRENT_PROPERTY',
    payload: id,
  };
};
