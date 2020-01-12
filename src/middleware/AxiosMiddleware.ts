import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from 'redux';
import axios from 'axios';


export type AxiosMiddleWareAction = {
   fetch: {
     actionTypes?: {
       request: string,
       success: string,
       fail: string,
     },
     url: string,
     method: 'get' | 'put' | 'post' | 'delete',
   },
}

const AxiosMiddleware: Middleware<Dispatch> = (store: MiddlewareAPI) => (
  next: Function,
) => async (action: AnyAction | AxiosMiddleWareAction) => {

    if(!action.fetch){
      return next(action);
    } else {

    const {
      actionTypes: { request, success, fail },
      url,
      method,
    } = action.fetch;

    // request
    store.dispatch({ type: request });

    // axios server (success or fail)
    try {
      const data = await axios
      .request({
        method,
        url,
      })
      store.dispatch({ type: success, payload: data.data })
      return data;

    } catch (error) {
      store.dispatch({ type: fail, error: error.response.data.error });
      return Promise.reject(error.response);
    }
  }
};

export default AxiosMiddleware;
