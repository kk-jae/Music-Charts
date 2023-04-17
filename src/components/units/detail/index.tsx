import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IDataLabel } from "../../../../src/components/commons/types";
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

  console.log(result);
  return (
    <S.Container>
      <S.Wrapper></S.Wrapper>
    </S.Container>
  );
}
