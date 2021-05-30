import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSelectedItem, removeSelectedItem } from 'store/actions/employeesActions';
// interfaces
import { EmployeesState } from 'interfaces/Employees';
import { LetterEmployeeItemProps } from 'interfaces/Props';

export const LetterEmployeeItem = ({ employee }: LetterEmployeeItemProps) => {
  const { firstName, lastName } = employee;
  const { selectedItems } = useSelector((state: EmployeesState) => state);
  const selected = selectedItems.findIndex(item => item.id === employee.id) !== -1;
  const dispatch = useDispatch();

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value === 'add'
      ? dispatch(addSelectedItem(employee))
      : dispatch(removeSelectedItem(employee.id));
  };

  return (
    <div className="employee__wrapper">
      <p>{`${lastName} ${firstName}`}</p>

      <div className="radio__group">
        <div>
          <input
            type="radio"
            value="remove"
            onChange={onChangeValue}
            checked={!selected}
          />
          Not active
        </div>
        <div>
          <input type="radio" value="add" onChange={onChangeValue} checked={selected} />
          Active
        </div>
      </div>
    </div>
  );
};
