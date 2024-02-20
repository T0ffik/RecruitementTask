import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const Text = styled("span")`
  color: black;
`;

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
