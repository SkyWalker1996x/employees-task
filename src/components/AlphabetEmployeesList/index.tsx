import React from 'react';
import { useSelector } from 'react-redux';
// components
import { LetterItem } from './LetterItem';
// utils
import { transformToAlphabetList } from 'utils/employees';
// interfaces
import { EmployeesState } from 'interfaces/Employees';
// styles
import './styles.css';

const AlphabetEmployeesList = () => {
  const { items } = useSelector((state: EmployeesState) => state);

  const alphabetEmployeesList = transformToAlphabetList(items, 'lastName');

  return (
    <div className="letters__wrapper">
      <h1>Employees</h1>

      <div className="letter__list">
        {alphabetEmployeesList.map((item, index) => {
          return <LetterItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AlphabetEmployeesList;
