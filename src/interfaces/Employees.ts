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
  selectedItems: Employees;
}

export interface AlphabetListItem {
  letter: string;
  items: Employees;
}

export type TransformToAlphabetList = (
  list: Employees,
  sortField: string
) => Array<AlphabetListItem>;

export interface MonthListItem {
  month: string;
  items: Employees;
}

export type TransformToMonthList = (
  list: Employees,
  sortField: string
) => Array<MonthListItem>;
