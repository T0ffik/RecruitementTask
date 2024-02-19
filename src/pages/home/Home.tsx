import { ProductsTable } from "../../components/Table";
import { Filter } from "../../components/Filter";
import "./styles.scss";

export const Home = () => {
  return (
    <div className="AppWrapper">
      <Filter />
      <ProductsTable />
    </div>
  );
};
