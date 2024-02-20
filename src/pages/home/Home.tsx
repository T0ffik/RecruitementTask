import "./styles.scss";
import { Content } from "../../components/PageContent";
import { useEffect } from "react";
import { fetchFromParams } from "../../utils/fetchDataFromParamsInUrl";

export const Home = () => {
  useEffect(() => {
    fetchFromParams();
  }, []);
  return (
    <div className="AppWrapper">
      <Content />
    </div>
  );
};
