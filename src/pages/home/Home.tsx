import { Content } from "../../components/PageContent";
import { useEffect } from "react";
import { fetchFromParams } from "../../utils/fetchDataFromParamsInUrl";
import { AppWrapper } from "./styles";

export const Home = () => {
  useEffect(() => {
    fetchFromParams();
  }, []);
  return (
    <AppWrapper>
      <Content />
    </AppWrapper>
  );
};
