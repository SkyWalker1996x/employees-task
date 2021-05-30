import React from 'react';
// components
import { LetterEmployeeItem } from './LetterEmployeeItem';
//interfaces
import { LetterItemProps } from 'interfaces/Props';

export const LetterItem = ({ item }: LetterItemProps) => {
  const { letter, items } = item;

  return (
    <div className="letter__wrapper">
      <h2>{letter}</h2>
      <div className="employees__list">
        {items.length === 0
          ? '______'
          : items.map((employee) => {
              return <LetterEmployeeItem key={employee.id} employee={employee} />;
            })}
      </div>
    </div>
  );
};
