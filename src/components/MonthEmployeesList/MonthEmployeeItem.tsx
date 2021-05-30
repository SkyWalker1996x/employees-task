import React from 'react';
import moment from 'moment';
// interfaces
import { MonthEmployeeItemProps } from 'interfaces/Props';

export const MonthEmployeeItem = ({ item }: MonthEmployeeItemProps) => {
  const { firstName, lastName, dob } = item;
  const birthday = moment(dob).format('D MMMM YYYY');

  return (
    <p>
      {lastName} {firstName} - {birthday} year
    </p>
  );
};
