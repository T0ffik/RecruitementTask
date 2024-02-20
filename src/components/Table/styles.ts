import { styled } from "@mui/system";
import { TableRow } from "@mui/material";
import { TableRowProps } from "@mui/material/TableRow";

type StyledTableRowProps = TableRowProps & {
  productcolor: string;
};

export const StyledTableRow = styled(TableRow)<StyledTableRowProps>`
  background-color: ${(props) => props.productcolor};
  cursor: pointer;
`;
