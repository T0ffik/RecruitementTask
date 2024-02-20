import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useSelector } from "@xstate/react";
import { productsActor } from "../../xstate/products/productsActor";
import { modalsActor } from "../../xstate/modals/modalsActor";
import { StyledTable, StyledTableRow } from "./styles";
import { TProduct } from "../../types/types";

export const ProductsTable = () => {
  const products = useSelector(productsActor, (state) => state.context.data);
  const handleClick = (product: TProduct) => {
    modalsActor.send({ type: "openModal", data: product });
  };

  if (products.length <= 0) {
    return null;
  }
  return (
    <TableContainer component={Paper}>
      <StyledTable size="small" aria-label="a dense table">
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
              <StyledTableRow
                onClick={() => handleClick(product)}
                productcolor={product.color}
                key={product.id}
              >
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.year}</TableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};
