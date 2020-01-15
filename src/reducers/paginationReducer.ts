const initialState = {
  currentPage: 1,
  prev: undefined,
  next: 2,
  totalPages: undefined,
};

const paginationReducer = (state = initialState, action) => {
  const {
    data,
    type,
  } = action;

  switch (type) {
    case 'SET_PAGE': {
      return {
        ...state,
        prev: data - 1,
        currentPage: data,
        next: data + 1,
      };
    }
    case 'SET_TOTAL_PAGES': {
      return {
        ...state,
        totalPages: data
      };
    }
    default:
      return state;
  }
};

export default paginationReducer;
