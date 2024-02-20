import { styled } from "@mui/system";
import { TableRow, Table } from "@mui/material";
import { TableRowProps } from "@mui/material/TableRow";

export const StyledTable = styled(Table)`
  min-width: 650px;
`;

interface StyledTableRowProps extends TableRowProps {
  productcolor: string;
}

export const StyledTableRow = styled(TableRow)<StyledTableRowProps>`
  background-color: ${(props) => props.productcolor};
  cursor: pointer;
`;
