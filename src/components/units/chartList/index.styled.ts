import styled from "@emotion/styled";

export const Container = styled.div`
  color: black;
  padding-top: 20px;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #f5f5f5;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  :hover {
    background-color: rgba(140, 215, 144, 0.2);
  }
`;

export const Left = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const Img = styled.img`
  padding-right: 20px;
`;
export const Art = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Name = styled.div`
  font-weight: 600;
`;
export const Artist = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #bfbfbf;
`;

export const Right = styled.div`
  width: 3%;
  font-size: 30px;
  color: #bfbfbf;
  cursor: pointer;

  :hover {
    color: black;
  }
`;
