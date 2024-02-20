import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { ChangeEvent } from "react";
import { productsActor } from "../../xstate/products/productsActor";
import {
  FilterSection,
  StyledButton,
  StyledInputElement,
  StyledInputRoot,
} from "./styles";
import debounce from "@mui/utils/debounce";

export const Filter = () => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value)) {
      productsActor.send({
        type: "GetProductById",
        id: Number(event.target.value),
      });
    }
  };
  const debouncedOnChange = debounce(onChange, 500);
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
        onInputChange={debouncedOnChange}
        min={0}
      />
    </FilterSection>
  );
};
