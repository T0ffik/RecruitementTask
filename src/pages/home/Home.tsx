import { Content } from "../../components/PageContent";
import { useEffect } from "react";
import { fetchFromParams } from "../../utils/fetchDataFromParamsInUrl";
import { AppWrapper } from "./styles";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  useEffect(() => {
    fetchFromParams();
  }, [location]);
  return (
    <AppWrapper>
      <Content />
    </AppWrapper>
  );
};
