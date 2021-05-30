import { EmployeesState } from './Employees';

export type LoadFromLocalStorage = () => EmployeesState;
export type SaveToLocalStorage = (state: EmployeesState) => void;
