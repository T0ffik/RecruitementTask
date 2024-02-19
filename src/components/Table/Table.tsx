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
import { productsActor } from "../../xstate/productsActor";

export const ProductsTable = () => {
  const products = useSelector(productsActor, (state) => state.context.data);
  if (products.length <= 0) {
    return null;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: product.color,
              }}
            >
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};