import { Box, Modal } from "@mui/material";
import { useSelector } from "@xstate/react";
import { modalsActor } from "../../xstate/modals/modalsActor";
import CloseIcon from "@mui/icons-material/Close";

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
};

const closeIconStyle = {
  position: "absolute",
  top: "5px",
  right: "5px",
  color: "black",
  cursor: "pointer",
};

export const BasicModal = () => {
  const state = useSelector(modalsActor, (state) => state.context);
  const handleClose = () => modalsActor.send({ type: "closeModal" });

  return (
    <Modal
      open={state.isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <CloseIcon sx={closeIconStyle} onClick={handleClose} />
        {state.data &&
          Object.entries(state.data).map((entry) => (
            <div key={entry[0]} style={{ color: "black" }}>
              {entry[0]}: {entry[1]}
            </div>
          ))}
      </Box>
    </Modal>
  );
};
