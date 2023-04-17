import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import * as S from "./index.styled";

export const TopBarUI = () => {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container>
      <S.Left>
        <S.Logo>ElMusic</S.Logo>
      </S.Left>
      <S.Right>
        <S.Right_Item onClick={onClickMoveToPage("http://elpark.kr/")}>
          ELpark Home
        </S.Right_Item>
        <S.Right_Item>My PlayList</S.Right_Item>
        <S.Right_Item>로그인</S.Right_Item>
      </S.Right>
    </S.Container>
  );
};
