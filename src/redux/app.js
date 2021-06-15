import { getAll } from '../services/httpService';

const initialState = {
  data: [],
};

export function app(state = initialState, { type, data }) {
  switch (type) {
    case 'APP_FAKE_DATA':
      return { ...state, data: data };
    case 'APP_LOADING_START':
      return { ...state, loading: true };
    case 'APP_LOADING_STOP':
      return { ...state, loading: false };
    default:
      return state;
  }
}

export function getFakeData() {
  return async (dispatch, getState) => {
    dispatch({ type: 'APP_LOADING_START' });

    const data = await getAll(
      'https://jsonplaceholder.typicode.com/todos'
    ).catch((error) => {
      // handle error
    });

    dispatch({ type: 'APP_FAKE_DATA', data });
    dispatch({ type: 'APP_LOADING_STOP' });
  };
}
