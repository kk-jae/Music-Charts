import { MenuOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import * as S from "./index.styled";
import { TopBarItem } from "./topBarItem";

export const TopBarUI = () => {
  const { onClickMoveToPage } = useMoveToPage();
  const [openTopBar, setOpenTobBar] = useState(false);

  const onClickOpenTopBar = () => {
    setOpenTobBar((prev) => !prev);
  };

  return (
    <S.Container>
      <S.Left>
        <S.Logo onClick={onClickMoveToPage("/")}>ElMusic</S.Logo>
      </S.Left>
      <S.Right>
        <S.Right_Item>로그인</S.Right_Item>
        <S.Right_Item>My-PlayList</S.Right_Item>
        <S.Right_Item onClick={onClickMoveToPage("http://elpark.kr/")}>
          ELGrop
        </S.Right_Item>
      </S.Right>
      <S.HamBurger>
        <MenuOutlined onClick={onClickOpenTopBar} />
        {openTopBar ? (
          <>
            <S.MobileTopBar>
              <S.MenuOut>
                <MenuUnfoldOutlined onClick={onClickOpenTopBar} />
              </S.MenuOut>
              <TopBarItem />
            </S.MobileTopBar>
          </>
        ) : (
          <div></div>
        )}
      </S.HamBurger>
    </S.Container>
  );
};
