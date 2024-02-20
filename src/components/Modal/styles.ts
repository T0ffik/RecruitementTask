import { styled } from "@mui/system";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const ModalContent = styled("div")`
  color: black;
`;

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  border: 2px solid #000;
  box-shadow: 24;
  background-color: white;
  padding: 2rem;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
  color: black;
  cursor: pointer;
`;
