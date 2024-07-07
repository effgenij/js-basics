const objectToQueryString = (params) => Object.keys(params).map(key => `${key}=${params[key]}`).join('&');

console.log({ search: "Вася", take: 10 });