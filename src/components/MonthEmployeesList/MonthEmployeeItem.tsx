import React from 'react';
import moment from "moment";

export const MonthEmployeeItem = ({ item }: any) => {
    const { firstName, lastName, dob } = item;
    const birthday = moment(dob).format('D MMMM YYYY')

    return <p>{lastName} {firstName} - {birthday} year</p>
}
