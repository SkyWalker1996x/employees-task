import moment from 'moment';
import { TransformToAlphabetList, TransformToMonthList } from 'interfaces/Employees';

export const transformToAlphabetList: TransformToAlphabetList = (list, sortField) => {
  const alphabetArray = Array.from(Array(26)).map((item, idx) => idx + 65);

  const transformList = alphabetArray.map(item => {
    const letter = String.fromCharCode(item);

    const filterItems = list.filter(item => {
      // @ts-ignore
      return letter.toUpperCase() === item[sortField][0].toUpperCase();
    });

    const sortItems = filterItems.sort((a, b) => {
      // @ts-ignore
      const sortFieldA = a[sortField];
      // @ts-ignore
      const sortFieldB = b[sortField];

      if (sortFieldA < sortFieldB) return -1;
      if (sortFieldA > sortFieldB) return 1;
      return 0;
    });

    return {
      letter,
      items: sortItems,
    };
  });

  return transformList;
};

export const transformToMonthList: TransformToMonthList = (list, sortField) => {
  const monthsArray = Array.from({ length: 12 }, (e, i) => {
    // @ts-ignore
    return new Date(null, i + 1, null).toLocaleDateString('en', { month: 'long' });
  });

  const completeTaskMonthIndex = 4;
  const firstPart = monthsArray.slice(0, completeTaskMonthIndex);
  const secondPart = monthsArray.slice(completeTaskMonthIndex);

  const transformList = [...secondPart, ...firstPart].map(month => {
    const filterItems = list.filter(item => {
      return moment(item.dob).format('MMMM') === month;
    });

    const sortItems = filterItems.sort((a, b) => {
      // @ts-ignore
      const sortFieldA = a[sortField];
      // @ts-ignore
      const sortFieldB = b[sortField];

      if (sortFieldA < sortFieldB) return -1;
      if (sortFieldA > sortFieldB) return 1;
      return 0;
    });

    return {
      month: month,
      items: sortItems,
    };
  });

  return transformList;
};
