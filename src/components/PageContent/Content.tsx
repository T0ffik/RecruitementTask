import { useSelector } from "@xstate/react";
import { productsActor } from "../../xstate/products/productsActor";
import { Box, Modal } from "@mui/material";
import { Button } from "@mui/base";
import { BasicModal } from "../Modal";
import { Filter } from "../Filter";
import { ProductsTable } from "../Table";
import { CustomPagination } from "../Pagination";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export const Content = () => {
  const state = useSelector(productsActor, (state) => state);
  const handleRefresh = () => {
    window.history.replaceState("refresh", "", `/`);
    productsActor.send({ type: "ClearData" });
  };
  if (state.context.errorMessage) {
    return (
      <Modal
        open
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <span style={{ color: "black" }}>{state.context.errorMessage}</span>
          <span style={{ color: "black" }}>
            Please refresh page and try again
          </span>
          <Button onClick={handleRefresh}>Refresh</Button>
        </Box>
      </Modal>
    );
  }
  return (
    <>
      <BasicModal />
      <Filter />
      <ProductsTable />
      <CustomPagination />
    </>
  );
};
