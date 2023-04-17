import styled from "@emotion/styled";
export const Container = styled.div`
  width: 100vw;
  padding: 1% 10% 0px 10%;
  color: #3f4b3b;
`;

export const Title = styled.h1`
  padding-bottom: 40px;
  font-size: 50px;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 2px solid #f5f5f5;
`;
export const Left = styled.div`
  width: 18%;
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
`;

export const Middle_Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
`;
export const Date = styled.span``;
export const Genre = styled.span``;

export const Middle_Bottom = styled.div`
  width: 100%;
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
`;

export const Right = styled.div`
  font-weight: 500;
  color: #bfbfbf;
`;
