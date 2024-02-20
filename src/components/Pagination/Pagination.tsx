import { Pagination } from "@mui/material";
import { useSelector } from "@xstate/react";
import { productsActor } from "../../xstate/products/productsActor";
import { StyledPaginationItem } from "./styles";

export const CustomPagination = () => {
  const state = useSelector(productsActor, (state) => state.context);
  return (
    <Pagination
      page={state.page}
      count={state.total_pages}
      color="primary"
      onChange={(_e, value) =>
        productsActor.send({ type: "ChangePage", page: value })
      }
      renderItem={(item) => <StyledPaginationItem {...item} />}
    />
  );
};
