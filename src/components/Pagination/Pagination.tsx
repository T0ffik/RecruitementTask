import { Pagination, PaginationItem } from "@mui/material";

export const CustomPagination = () => {
  return (
    <Pagination
      count={2}
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} sx={{ color: "white" }} />
      )}
    />
  );
};
