import { EmployeesService } from 'services/employees-service';

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
      dispatch(fetchEmployeesError(err));
    });
};
