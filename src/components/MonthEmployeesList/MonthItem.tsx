import React from 'react';
import { MonthEmployeeItem } from './MonthEmployeeItem';

export const MonthItem = ({ item }: any) => {
  const { month, items } = item;

  return (
    <>
      <h2>{month}</h2>
      {items.map((item: any) => {
        return <MonthEmployeeItem item={item}/>;
      })}
    </>
  );
};
