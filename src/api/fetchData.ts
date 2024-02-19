export const fetchData = async (id?: number, page?: number) => {
  let params: string;
  if (page) {
    params = `?page=${page}`;
  }
  if (id) {
    params = `/${id}`;
  }
  return new Promise((resolve, reject) => {
    let response;
    fetch(`https://reqres.in/api/products${params}`).then((res) => {
      if (res.ok) {
        response = res.json();
        resolve(response);
      }
      reject(`something Went wrong with error:${res.status}`);
    });
  });
};
