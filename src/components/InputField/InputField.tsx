import { StyledInputField } from "./InputField.style";
import { InputFieldProps } from "./InputField.type";

const InputField = ({ children }: InputFieldProps) => {
  return <StyledInputField>{children}</StyledInputField>;
};

export default InputField;
