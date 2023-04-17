/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { PlayCircleOutlined } from "@ant-design/icons";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { IDataLabel } from "../../commons/types";
import * as S from "./index.styled";

interface IListProps {
  resultList: any;
  musicData: IDataLabel[];
}

export default function ChartList(props: IListProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container>
      {props.resultList.length !== 0
        ? props.resultList.map((el: any) => (
            <S.Wrapper
              key={el.id.label}
              onClick={onClickMoveToPage(
                `/musicChart/detail/${el.id.attributes["im:id"]}`
              )}
            >
              <S.Left>
                <S.Img src={el["im:image"][0].label} />
                <S.Art>
                  <S.Name>{el["im:name"].label}</S.Name>
                  <S.Artist>{el["im:artist"].label}</S.Artist>
                </S.Art>
              </S.Left>
              <S.Right>
                <PlayCircleOutlined />
              </S.Right>
            </S.Wrapper>
          ))
        : props.musicData.map((el: any) => (
            <S.Wrapper
              key={el.id.label}
              onClick={onClickMoveToPage(
                `/musicChart/detail/${el.id.attributes["im:id"]}`
              )}
            >
              <S.Left>
                <S.Img src={el["im:image"][0].label} />
                <S.Art>
                  <S.Name>{el["im:name"].label}</S.Name>
                  <S.Artist>{el["im:artist"].label}</S.Artist>
                </S.Art>
              </S.Left>
              <S.Right>
                <PlayCircleOutlined />
              </S.Right>
            </S.Wrapper>
          ))}
    </S.Container>
  );
}
