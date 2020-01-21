const initialState = {
  Brastlewark: [],
};

export const filteredGnomes = (state = initialState, action) => {
  const {
    data,
    type,
  } = action;

  switch (type) {
    case 'FILL_FILTERED_GNOME': {
      return {
        ...data,
      };
    }
   
    default:
      return state;
  }
};

