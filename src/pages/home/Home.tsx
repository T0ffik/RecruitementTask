import { ProductsTable } from "../../components/Table";
import { Filter } from "../../components/Filter";
import "./styles.scss";
import { CustomPagination } from "../../components/Pagination";

export const Home = () => {
  return (
    <div className="AppWrapper">
      <Filter />
      <ProductsTable />
      <CustomPagination />
    </div>
  );
};
