import React from 'react';
import { useSelector } from 'react-redux';
// interfaces
import { EmployeesState } from 'interfaces/Employees';

const MonthEmployeesList = () => {
  const { selectedItems } = useSelector((state: EmployeesState) => state);

  return (
    <div className="birthday__wrapper">
      <h1>Employees birthday</h1>
      <div className="month__list">{!!selectedItems.length ? 'not empty' : 'empty'}</div>
    </div>
  );
};

export default MonthEmployeesList;
