import { EmployeesService } from 'services/employees-service';
import {
  FETCH_LOAD,
  FETCH_SUCCESS,
  FETCH_ERROR,
  ADD_SELECTED_ITEM,
  REMOVE_SELECTED_ITEM,
} from 'store/action-types';
import { Employee } from 'interfaces/Employees';

const { getEmployees } = new EmployeesService();

export const fetchEmployeesLoad = () => ({
  type: FETCH_LOAD,
});

export const fetchEmployeesSuccess = (employees: []) => ({
  type: FETCH_SUCCESS,
  payload: employees,
});

export const fetchEmployeesError = (error: string) => ({
  type: FETCH_ERROR,
  payload: error,
});

export const fetchEmployees = () => (dispatch: any) => {
  dispatch(fetchEmployeesLoad());

  getEmployees()
    .then(data => {
      dispatch(fetchEmployeesSuccess(data));
    })
    .catch(err => {
      dispatch(fetchEmployeesError(err));
    });
};

export const addSelectedItem = (employee: Employee) => ({
  type: ADD_SELECTED_ITEM,
  payload: employee,
});

export const removeSelectedItem = (id: string) => ({
  type: REMOVE_SELECTED_ITEM,
  payload: id,
});
