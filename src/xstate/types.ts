export type TProduct = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

type TSupport = {
  url: string;
  text: string;
};

export type TApiResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: TProduct[];
  support: TSupport;
};

export type ProductsState = {
  page: number;
  per_page: number | undefined;
  total: number | undefined;
  total_pages: number | undefined;
  data: TProduct[];
  support: TSupport | undefined;
  errorMessage: string | undefined;
  id: number | undefined;
};
