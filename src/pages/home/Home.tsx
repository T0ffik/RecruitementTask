import { ProductsTable } from "../../components/Table";
import { Filter } from "../../components/Filter";
import "./styles.scss";
import { CustomPagination } from "../../components/Pagination";
import { BasicModal } from "../../components/Modal";

export const Home = () => {
  return (
    <div className="AppWrapper">
      <BasicModal />
      <Filter />
      <ProductsTable />
      <CustomPagination />
    </div>
  );
};
