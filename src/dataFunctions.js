// estas funciones son de ejemplo

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
  if (sortBy === 'weaknesses') {
    dataSort.sort((a, b) => {
      if ((a[sortBy].length) > (b[sortBy].length)) {
        if (sortOrder === "Ascendente") {
          return 1;
        } else { return -1; }
      }
      if ((a[sortBy].length) < (b[sortBy].length)) {
        if (sortOrder === "Ascendente") {
          return -1;
        } else { return 1; }
      }
      return 0;
    });
  } else {
    dataSort.sort((a, b) => {
      if (Number(a['stats'][sortBy]) > Number(b['stats'][sortBy])) {
        if (sortOrder === "Ascendente") {
          return 1;
        } else { return -1; }
      }
      if (Number(a['stats'][sortBy]) < Number(b['stats'][sortBy])) {
        if (sortOrder === "Ascendente") {
          return -1;
        } else { return 1; }
      }
      return 0;

    });
  }
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
