import { Employees, TransformToAlphabetList } from 'interfaces/Employees';

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
