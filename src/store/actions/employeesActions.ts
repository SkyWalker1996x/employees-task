import { EmployeesService } from '../../services/employees-service';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

const { getEmployees } = new EmployeesService();

export const fetchEmployeesLoad = () => ({
  type: 'FETCH_LOAD',
});

export const fetchEmployeesSuccess = (employees: []) => ({
  type: 'FETCH_SUCCESS',
  payload: employees,
});

export const fetchEmployeesError = (error: string) => ({
  type: 'FETCH_ERROR',
  payload: error,
});

export const fetchEmployees = () => (dispatch: any) => {
  dispatch(fetchEmployeesLoad());

  getEmployees()
    .then(data => {
      dispatch(fetchEmployeesSuccess(data));
    })
    .catch(err => {
      console.log('err', err);
      dispatch(fetchEmployeesError(err));
    });
};
