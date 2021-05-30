import { Employee, AlphabetListItem, MonthListItem } from './Employees';

export interface LetterItemProps {
  item: AlphabetListItem;
}

export interface LetterEmployeeItemProps {
  employee: Employee;
}

export interface MonthItemProps {
  item: MonthListItem;
}

export interface MonthEmployeeItemProps {
    item: Employee;
}
