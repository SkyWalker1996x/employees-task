export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
}

export type Employees = Array<Employee>;

export interface EmployeesState {
  loading: boolean;
  error: boolean | string;
  items: Employees;
}

export type AlphabetEmployeesList = Array<{ letter: string; items: Employees }>;

export type TransformToAlphabetList = (
  list: Employees,
  sortField: string
) => AlphabetEmployeesList;
