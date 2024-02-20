import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  Paper,
} from "@mui/material";
import { useSelector } from "@xstate/react";
import { productsActor } from "../../xstate/products/productsActor";
import { modalsActor } from "../../xstate/modals/modalsActor";

export const ProductsTable = () => {
  const products = useSelector(productsActor, (state) => state.context.data);
  if (products.length <= 0) {
    return null;
  }
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow
                onClick={() =>
                  modalsActor.send({ type: "openModal", data: product })
                }
                key={product.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: product.color,
                  cursor: "pointer",
                }}
              >
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.year}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
