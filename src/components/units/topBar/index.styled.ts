import styled from "@emotion/styled";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const Container = styled.div`
  width: 100vw;
  color: #8cd790;
  padding: 1% 10% 0px 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${mediaQueries("phone")} {
    padding: 3% 10% 0px 10%;
  }
  ${mediaQueries("tablet")} {
    padding: 3% 10% 0px 10%;
  }
`;

export const Left = styled.div``;
export const Logo = styled.h1`
  ${mediaQueries("tablet")} {
    font-size: 1.5rem;
  }
`;
export const Right = styled.div`
  font-weight: 600;

  ${mediaQueries("tablet")} {
    display: none;
  }
`;

export const HamBurger = styled.div`
  display: none;

  ${mediaQueries("tablet")} {
    display: flex;
    font-size: 1.2rem;
  }
`;
export const MobileTopBar = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 50%;
  height: 100vh;
  top: 0;
  right: 0;
  background-color: rgba(140, 215, 144, 0.93);
  padding-left: 10px;
  color: white;
`;

export const MenuOut = styled.div`
  padding: 15px 0px 20px 0px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Right_Item = styled.span`
  padding-right: 20px;
  cursor: pointer;
`;
