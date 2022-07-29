import { L } from "./Label.style";
import { LabelProps } from "./Label.type";

const Label = ({ label }: LabelProps) => {
  return <L>{label}</L>;
};

export default Label;
