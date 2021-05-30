import { EmployeesState } from 'interfaces/Employees';
import { FETCH_LOAD, FETCH_SUCCESS, FETCH_ERROR } from 'store/action-types';

const initialState: EmployeesState = {
  loading: false,
  error: false,
  items: [],
};

export const employeesReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_LOAD:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
