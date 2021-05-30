import React from 'react';
import { useSelector } from 'react-redux';
// components
import { MonthItem } from './MonthItem';
// interfaces
import { EmployeesState } from 'interfaces/Employees';
// utils
import { transformToMonthList } from 'utils/employees';
// styles
import './styles.css';

const MonthEmployeesList = () => {
  const { selectedItems } = useSelector((state: EmployeesState) => state);

  const monthEmployeesList = transformToMonthList(selectedItems, 'lastName');

  const monthList = monthEmployeesList.map(month => {
    if (month.items.length > 0) {
      return <MonthItem item={month} />;
    }
  });

  return (
    <div className="birthday__wrapper">
      <h1>Employees birthday</h1>
      <div className="month__list">
        {!!selectedItems.length ? monthList : 'Employees List is empty'}
      </div>
    </div>
  );
};

export default MonthEmployeesList;
