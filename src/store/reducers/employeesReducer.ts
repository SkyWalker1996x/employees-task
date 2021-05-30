import { EmployeesState } from 'interfaces/Employees';
import {
  FETCH_LOAD,
  FETCH_SUCCESS,
  FETCH_ERROR,
  ADD_SELECTED_ITEM,
  REMOVE_SELECTED_ITEM,
} from 'store/action-types';

const initialState: EmployeesState = {
  loading: false,
  error: false,
  items: [],
  selectedItems: [],
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
    case ADD_SELECTED_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, payload],
      };
    case REMOVE_SELECTED_ITEM:
      return {
        ...state,
        selectedItems: state.selectedItems.filter(item => item.id !== payload),
      };
    default:
      return state;
  }
};
