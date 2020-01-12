export type ActionType =
  | 'SET_ORDER_GNOME_DATA'
  | 'REQUEST_ORDER_GNOME_DATA'
  | 'RECEIVED_ORDER_GNOME_DATA'
  | 'ERROR_ORDER_GNOME_DATA';


interface ActionProps {
  type: ActionType,
  isFetching?: boolean,
  data?: {} | any,
  error?: any,
  payload?: {} | any,
}

const initialGnomeData = {
  isFetching: true,
  data: {},
  error: {},
}

const gnomeReducer = (state = initialGnomeData, action: Partial<ActionProps>) => {
  switch (action.type) {
    case 'REQUEST_ORDER_GNOME_DATA': {
      return {
        ...state,
      };
    }

    case 'RECEIVED_ORDER_GNOME_DATA': {
      const { payload = {} } = action;
      return {
        ...state,
        isFetching: false,
        data: {...payload},
      };
    }

    case 'ERROR_ORDER_GNOME_DATA': {
      const { error = {} } = action;
      return {
        ...state,
        isFetching: false,
        error: { ...error },
      };
    }

    default:
      return state;
  }
}

export default gnomeReducer;