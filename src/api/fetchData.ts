export const fetchData = async () => {
  return new Promise((resolve, reject) => {
    let response;
    fetch("https://reqres.in/api/products").then((res) => {
      if (res.ok) {
        response = res.json();
        resolve(response);
      }
      reject(`something Went wrong with error:${res.status}`);
    });
  });
};
