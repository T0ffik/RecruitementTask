import { useSelector } from "@xstate/react";
import { productsActor } from "@customXstate/products/productsActor";
import { Modal } from "@mui/material";
import { Button } from "@mui/base";
import { BasicModal } from "../Modal";
import { Filter } from "../Filter";
import { ProductsTable } from "../Table";
import { CustomPagination } from "../Pagination";
import { StyledBox, Text } from "./styles";
import { useCallback } from "react";

export const Content = () => {
  const state = useSelector(productsActor, (state) => state.context);
  const handleRefresh = useCallback(() => {
    window.history.replaceState("refresh", "", `/`);
    productsActor.send({ type: "ClearData" });
  }, []);
  if (state.errorMessage) {
    return (
      <Modal
        open
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Text>{state.errorMessage}</Text>
          <Text>Please refresh page and try again</Text>
          <Button onClick={handleRefresh}>Refresh</Button>
        </StyledBox>
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
