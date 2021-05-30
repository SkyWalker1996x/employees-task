import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// store
import { fetchEmployees } from 'store/actions/employeesActions';
// utils
import { transformToAlphabetList } from 'utils/employees';
// interfaces
import { EmployeesState } from 'interfaces/Employees';

export const Employees = () => {
  const employees = useSelector((state: EmployeesState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  if (employees.loading) {
    return <h1>loading...</h1>;
  }

  const alphabetEmployeesList = transformToAlphabetList(employees.items, 'lastName');

  return <h1>Start Employees Task</h1>;
};
