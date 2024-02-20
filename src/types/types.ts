import { PromiseActorLogic } from "xstate";

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
  data: TProduct[] | TProduct;
  support: TSupport;
};

export type ProductsState = {
  page: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: TProduct[];
  support?: TSupport;
  errorMessage?: string;
  id?: number;
};

export type ModalsState = {
  isOpen: boolean;
  data?: TProduct;
};

export type TEvents =
  | { type: "Filter"; id: number }
  | { type: "ChangePage"; page: number }
  | { type: "GetProducts" }
  | { type: "GetProductById"; id: number }
  | { type: "GetProductsByPage"; page: number }
  | { type: "ClearData" };

export type TActor = {
  src: "fetchData";
  logic: PromiseActorLogic<ProductsState, ProductsState>;
  id: string | undefined;
};
