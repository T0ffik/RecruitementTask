import { Modal } from "@mui/material";
import { useSelector } from "@xstate/react";
import { modalsActor } from "../../xstate/modals/modalsActor";
import { ModalContent, StyledBox, StyledCloseIcon } from "./styles";
import { useCallback } from "react";

export const BasicModal = () => {
  const state = useSelector(modalsActor, (state) => state.context);
  const handleClose = useCallback(() => {
    modalsActor.send({ type: "closeModal" });
  }, []);

  return (
    <Modal
      open={state.isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <StyledCloseIcon onClick={handleClose} />
        {state.data &&
          Object.entries(state.data).map((entry) => (
            <ModalContent key={entry[0]}>
              {entry[0]}: {entry[1]}
            </ModalContent>
          ))}
      </StyledBox>
    </Modal>
  );
};
