import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// store
import { fetchEmployees } from 'store/actions/employeesActions';
// components
import AlphabetEmployeesList from 'components/AlphabetEmployeesList';
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

  return (
    <>
      <AlphabetEmployeesList />
    </>
  );
};
