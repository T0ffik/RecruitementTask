import { ProductsTable } from "../../components/Table";
import { Filter } from "../../components/Filter";
import "./styles.scss";
import { CustomPagination } from "../../components/Pagination";
import { productsActor } from "../../xstate/productsActor";
import { useSelector } from "@xstate/react";

export const Home = () => {
  const state = useSelector(productsActor, (state) => state.context);
  console.log(1, state);
  return (
    <div className="AppWrapper">
      <Filter />
      <ProductsTable />
      <CustomPagination />
    </div>
  );
};
