import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { LetterEmployeesList } from './LetterEmployeesList';
// utils
import { transformToAlphabetList } from 'utils/employees';
// interfaces
import { EmployeesState } from 'interfaces/Employees';
// styles
import './styles.css'

const AlphabetEmployeesList = () => {
  const employees = useSelector((state: EmployeesState) => state);

  const alphabetEmployeesList = transformToAlphabetList(employees.items, 'lastName');

  return (
    <>
      <h1>Employees</h1>

      <div className="letter__list">
        {alphabetEmployeesList.map((item, index) => {
          return <LetterEmployeesList key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default AlphabetEmployeesList;
