import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import * as S from "./index.styled";

export const TopBarItem = () => {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container>
      <S.Item>로그인</S.Item>
      <S.Item>My-PlayList</S.Item>
      <S.Item onClick={onClickMoveToPage("http://elpark.kr/")}>ELGrop</S.Item>
    </S.Container>
  );
};
