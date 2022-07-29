import { StyledInput } from "./Input.style";
import { InputProps } from "./Input.type";

const Input = ({ onChange, value, type }: InputProps) => {
  return <StyledInput value={value} onChange={onChange} type={type} />;
};

export default Input;
