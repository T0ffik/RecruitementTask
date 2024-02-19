export const fetchData = () => {
  fetch("https://reqres.in/api/products").then((response) => response.json());
};
