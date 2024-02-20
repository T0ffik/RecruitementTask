import { useSelector } from "@xstate/react";
import { productsActor } from "@customXstate/products/productsActor";
import { StyledPagination, StyledPaginationItem } from "./styles";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { pageRoute } from "@utils/consts";

export const CustomPagination = () => {
  const state = useSelector(productsActor, (state) => state.context);
  const navigate = useNavigate();
  const handleChange = (_e: ChangeEvent<unknown>, value: number) => {
    navigate(`${pageRoute}${value}`);
  };
  return (
    <StyledPagination
      page={state.page}
      count={state.total_pages}
      color="primary"
      onChange={handleChange}
      renderItem={(item) => <StyledPaginationItem {...item} />}
    />
  );
};
