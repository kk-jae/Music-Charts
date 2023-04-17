import styled from "@emotion/styled";
import { mediaQueries } from "../../../../commons/libraries/MediaQueries";

interface IProps {
  width?: number;
}
export const Input = styled.input<IProps>`
  padding: 5px 0px 5px 5px;
  width: ${(props) => (props.width ? "props.width" : "30vw")};
  border: none;
  outline: none;
  border-bottom: 2px solid #3f4b3b;
  font-weight: 500;

  ::placeholder {
    color: #3f4b3b;
    font-weight: 500;
  }

  ${mediaQueries("phone")} {
    font-size: 11px;

    ::placeholder {
    }
  }
  ${mediaQueries("tablet")} {
    width: 40vw;
    border-bottom: 1px solid #3f4b3b;
  }
`;
