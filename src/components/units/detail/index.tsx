import { PlayCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IDataLabel } from "../../../../src/components/commons/types";
import { getDate } from "../../../commons/libraries/utils";
import * as S from "./index.styled";

export default function DetailUI() {
  const router = useRouter();
  const [detailMusic, setDetailMusic] = useState<IDataLabel[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );
    setDetailMusic(result?.data?.feed.entry);
  };

  let result = detailMusic.filter(
    (el) => el.id.attributes["im:id"] === router.query.musicid
  );

  return (
    <S.Container>
      <S.Title>ELpark_Top100 차트</S.Title>
      <S.Wrapper>
        <S.Left>
          <S.Img src={result?.[0]?.["im:image"][0].label} />
        </S.Left>
        <S.Middle>
          <S.Middle_Top>
            <S.Name>{result?.[0]?.["im:name"].label}</S.Name>
            <S.Artist>{result?.[0]?.["im:artist"].label}</S.Artist>
            <S.Genre_Date>
              <S.Genre>
                {result?.[0]?.category.attributes.term.toUpperCase()}
              </S.Genre>{" "}
              .{" "}
              <S.Date>{getDate(result?.[0]?.["im:releaseDate"].label)}</S.Date>
            </S.Genre_Date>
          </S.Middle_Top>
          <S.Middle_Bottom>
            <S.Play>
              <PlayCircleOutlined />
              재생하기
            </S.Play>
          </S.Middle_Bottom>
        </S.Middle>
        <S.Right>앨범 구매하기</S.Right>
      </S.Wrapper>
    </S.Container>
  );
}
