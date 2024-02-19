import { Pagination, PaginationItem } from "@mui/material";
import { useSelector } from "@xstate/react";
import { productsActor } from "../../xstate/productsActor";

export const CustomPagination = () => {
  const state = useSelector(productsActor, (state) => state.context);
  return (
    <Pagination
      page={state.page}
      count={2}
      color="primary"
      onChange={(e, value) =>
        productsActor.send({ type: "ChangePage", page: value })
      }
      renderItem={(item) => (
        <PaginationItem {...item} sx={{ color: "white" }} />
      )}
    />
  );
};
