import { styled } from "@mui/system";
import { Button } from "@mui/material";
const grey = {
  200: "#DAE2ED",
  300: "#C7D0DD",
  700: "#434D5B",
  900: "#1C2025",
};
const blue = {
  400: "#3399FF",
};

export const StyledFindButton = styled(Button)`
  margin-left: 20px;
`;

export const FilterSection = styled("div")`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;
export const StyledInputRoot = styled("div")(
  ({ theme }) => `
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 400;
      border-radius: 8px;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[700] : grey[200]
      };
      box-shadow: 0px 2px 4px ${
        theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
      };
      display: grid;
      grid-template-columns: 1fr 19px;
      grid-template-rows: 1fr 1fr;
      overflow: hidden;
      column-gap: 8px;
      padding: 4px;
    
      &:hover {
        border-color: ${blue[400]};
      }
    
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `
);
export const StyledButton = styled("button")(
  () => `
      display: none;
    `
);
export const StyledInputElement = styled("input")(
  ({ theme }) => `
      font-size: 0.875rem;
      font-family: inherit;
      font-weight: 400;
      line-height: 1.5;
      grid-column: 1/2;
      grid-row: 1/3;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: inherit;
      border: none;
      border-radius: inherit;
      padding: 8px 12px;
      outline: 0;
    `
);
