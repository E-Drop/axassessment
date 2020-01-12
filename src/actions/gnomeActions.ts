import { ActionType } from '../reducers/gnomeReducer';

export const fillGnomeData = () => {
  return dispatch => {

    const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
    const method = 'get';

    const type: ActionType = 'SET_ORDER_GNOME_DATA';
    return Promise.resolve(
      dispatch({
        type,
        fetch: {
          actionTypes: {
            request: 'REQUEST_ORDER_GNOME_DATA',
            success: 'RECEIVED_ORDER_GNOME_DATA',
            fail: 'ERROR_ORDER_GNOME_DATA',
          },
          url,
          method,
        },
      }),
    );
  };
}