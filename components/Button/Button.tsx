import styled from "@emotion/styled";

interface ButtonProps {
  bgColor?: string;
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 32px;
  background-color: ${(props) => props.bgColor || "hotpink"};
  font-size: 24px;
  border-radius: 4px;
  color: ${(props) => props.color || "black"};
  font-weight: bold;
`;

export default Button;
