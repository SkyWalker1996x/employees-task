import React from 'react';
// components
import { LetterEmployeeItem } from './LetterEmployeeItem';

export const LetterEmployeesList = ({ item }: any) => {
  const { letter, items } = item;

  return (
    <div className="letter__wrapper">
      <h2>{letter}</h2>
      <div className="employees__list">
        {items.length === 0
          ? '______'
          : items.map((employee: any) => {
              return <LetterEmployeeItem key={employee.id} employee={employee} />;
            })}
      </div>
    </div>
  );
};
