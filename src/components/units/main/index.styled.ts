import { mediaQueries } from "./../../../commons/libraries/MediaQueries";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  color: #3f4b3b;
  padding: 1% 10% 0px 10%;
`;

export const Top = styled.div`
  font-weight: 600;
  width: 100%;
  padding-bottom: 20px;
`;
export const Title = styled.h1`
  padding-bottom: 40px;
  font-size: 50px;

  ${mediaQueries("tablet")} {
    font-size: 1.8rem;
    padding-bottom: 20px;
  }
`;

export const Search = styled.div`
  width: 30vw;
  position: relative;

  ${mediaQueries("tablet")} {
    width: 40vw;
    border-bottom: 1px solid #3f4b3b;
  }
`;

export const SearchWrapper = styled.span`
  cursor: pointer;
  color: #3f4b3b;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px;

  ${mediaQueries("tablet")} {
    font-size: 15px;
  }
`;
