import { mediaQueries } from "./../../../commons/libraries/MediaQueries";
import styled from "@emotion/styled";
export const Container = styled.div`
  width: 100vw;
  padding: 1% 10% 0px 10%;
  color: #3f4b3b;
`;

export const Title = styled.h1`
  padding-bottom: 40px;
  font-size: 50px;

  ${mediaQueries("tablet")} {
    font-size: 1.8rem;
    padding-bottom: 20px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 2px solid #f5f5f5;

  ${mediaQueries("tablet")} {
    flex-direction: column;
    align-items: center;
  }
`;
export const Left = styled.div`
  width: 18%;

  ${mediaQueries("tablet")} {
    width: 40vw;
    margin: 5vh 0px 3vh 0px;
  }
`;
export const Img = styled.img`
  width: 100%;
  object-fit: contain;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const Middle = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQueries("tablet")} {
    align-items: center;
  }
`;

export const Middle_Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  ${mediaQueries("tablet")} {
    align-items: center;
  }
`;
export const Name = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: black;
`;
export const Artist = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: red;
`;
export const Genre_Date = styled.span`
  color: #bfbfbf;
  font-weight: 500;
  font-size: 13px;

  ${mediaQueries("tablet")} {
    margin: 15px 0px 15px 0px;
  }
`;
export const Date = styled.span``;
export const Genre = styled.span``;

export const Middle_Bottom = styled.div`
  width: 100%;

  ${mediaQueries("tablet")} {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
export const Play = styled.div`
  width: 100px;
  padding: 5px 0px 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  background-color: red;
  border-radius: 5px;
  border: 1px solid red;
  cursor: pointer;
  ${mediaQueries("tablet")} {
    margin-bottom: 10px;
  }
`;

export const Right = styled.div`
  font-weight: 500;
  color: #bfbfbf;
  cursor: pointer;
`;
