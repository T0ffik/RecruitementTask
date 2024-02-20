import { TApiResponse } from "@customTypes/types";
import { per_page } from "@utils/consts";

export const fetchData = async (
  id?: number,
  page?: number
): Promise<TApiResponse> => {
  let params: string;
  if (page) {
    params = `?page=${page}&`;
  }
  if (id) {
    params = `?id=${id}&`;
  }
  return new Promise((resolve, reject) => {
    fetch(`https://reqres.in/api/products${params}per_page=${per_page}`).then(
      (res) => {
        if (res.ok) {
          const response = res.json();
          resolve(response);
        }
        reject(`Something went wrong with error:${res.status}`);
      }
    );
  });
};
