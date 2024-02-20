import { useSelector } from "@xstate/react";
import { productsActor } from "../../xstate/products/productsActor";
import { StyledPagination, StyledPaginationItem } from "./styles";
import { ChangeEvent } from "react";

export const CustomPagination = () => {
  const state = useSelector(productsActor, (state) => state.context);
  const handleChange = (_e: ChangeEvent<unknown>, value: number) => {
    productsActor.send({ type: "GetProductsByPage", page: value });
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
