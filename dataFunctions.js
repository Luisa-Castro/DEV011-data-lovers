export const filterData = (data, filterBy, value) => {
  const filter = data.filter(element => element[filterBy][0] === value);
  return filter;
};

export const filterGeneration = (data, filterBy, value) => {
  const filter = data.filter(element => element[filterBy]['name'] === value);
  return filter;
};

export const sortData = (data, sortBy, sortOrder) => {
  const dataSort = [...data];
  dataSort.sort((a, b) => {
    if (sortBy === 'weaknesses') {
      const valueA = a[sortBy].length;
      const valueB = b[sortBy].length;
      if (sortOrder === "asc") {
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
      } else if (sortOrder === "desc") {
        if (valueA < valueB) return 1;
        if (valueA > valueB) return -1;
        return 0;
      }
    } else {
      const valueA = Number(a['stats'][sortBy]);
      const valueB = Number(b['stats'][sortBy]);
      if (sortOrder === "asc") {
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
      } else if (sortOrder === "desc") {
        if (valueA < valueB) return 1;
        if (valueA > valueB) return -1;
        return 0;
      }
    }
  });

  return dataSort;
};

export const computeStats = (data) => {
  const sumWeight = data.reduce(function (a, b) {
    const weight = Number(b.size.weight.slice(0, -3));
    a += weight;
    return a;
  }, 0);
  return (sumWeight / data.length).toFixed(2);
};
