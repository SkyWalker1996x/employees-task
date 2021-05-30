import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from 'store/actions/employeesActions';

export const Employees = () => {
  const employees = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return <h1>Start Employees Task</h1>;
};
