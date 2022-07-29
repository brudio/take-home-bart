import styled from "styled-components";
import { colors } from "utils/theme";

export const StyledInput = styled.input`
  height: 3.125rem;
  border-radius: 0.25rem;
  border: 0.125rem solid transparent;
  outline: none;
  padding: 0.625rem;
  box-shadow: 0px 0px 0.25rem rgba(0, 0, 0, 0.1);
  font-family: "Lato", sans-serif;
  transition: 0.2s ease-in-out;

  &:focus {
    transition: 0.2s ease-in-out;
    border-color: ${colors.BLUE};
  }
`;
