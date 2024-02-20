import { Content } from "@components/PageContent";
import { useEffect } from "react";
import { setParamsToFetch } from "@utils/setParamsToFetch";
import { HomeWrapper } from "./styles";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  useEffect(() => {
    setParamsToFetch();
  }, [location]);
  return (
    <HomeWrapper>
      <Content />
    </HomeWrapper>
  );
};
