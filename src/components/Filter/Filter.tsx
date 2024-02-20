import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { ChangeEvent } from "react";
import {
  FilterSection,
  StyledButton,
  StyledInputElement,
  StyledInputRoot,
} from "./styles";
import debounce from "@mui/utils/debounce";
import { useNavigate } from "react-router-dom";
import { idRoute } from "../../utils/consts";

export const Filter = () => {
  const navigate = useNavigate();
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value) {
      navigate(`${idRoute}${value}`);
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
