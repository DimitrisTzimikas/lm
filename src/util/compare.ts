const compareBaseOnProperty = (property: any) => {
  return (a: any, b: any) => {
    if (a[property] < b[property]) {
      return typeof a[property] === 'string' ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return typeof a[property] === 'string' ? 1 : -1;
    }
    return 0;
  };
};

export {compareBaseOnProperty};
