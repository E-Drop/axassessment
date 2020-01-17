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
    case 'FILTER_GNOMES': {
      return {
        Brastlewark: state.Brastlewark.filter(x => x.name.includes(data))
      };
    }
    default:
      return state;
  }
};

