import React from 'react';
// components
import { MonthEmployeeItem } from './MonthEmployeeItem';
// interfaces
import { MonthItemProps } from 'interfaces/Props';

export const MonthItem = ({ item }: MonthItemProps) => {
  const { month, items } = item;

  return (
    <>
      <h2>{month}</h2>
      {items.map((item: any) => {
        return <MonthEmployeeItem item={item} />;
      })}
    </>
  );
};
