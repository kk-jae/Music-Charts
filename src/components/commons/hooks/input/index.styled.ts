import styled from "@emotion/styled";

interface IProps {
  width?: number;
}
export const Input = styled.input<IProps>`
  padding: 5px 0px 5px 5px;
  width: ${(props) => (props.width ? "props.width" : "100%")};
  border: none;
  outline: none;
  border-bottom: 3px solid #3f4b3b;
  font-weight: 500;

  ::placeholder {
    color: #3f4b3b;
    font-weight: 500;
  }
`;
