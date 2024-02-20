import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { useState } from "react";
import { productsActor } from "../../xstate/products/productsActor";
import {
  FilterSection,
  StyledButton,
  StyledFindButton,
  StyledInputElement,
  StyledInputRoot,
} from "./styles";

export const Filter = () => {
  const [value, setValue] = useState<number>();
  return (
    <FilterSection>
      <BaseNumberInput
        slots={{
          root: StyledInputRoot,
          input: StyledInputElement,
          incrementButton: StyledButton,
          decrementButton: StyledButton,
        }}
        placeholder="Type product id"
        defaultValue={null}
        value={value}
        onInputChange={(e) => setValue(Number(e.target.value))}
        min={0}
      />
      <StyledFindButton
        variant="contained"
        onClick={() => {
          if (value) {
            productsActor.send({ type: "GetProductById", id: value });
          }
        }}
      >
        Find product
      </StyledFindButton>
    </FilterSection>
  );
};
