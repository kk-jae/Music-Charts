/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { SearchOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Button01 } from "../../commons/hooks/button";
import { Input01 } from "../../commons/hooks/input";
import { IDataLabel } from "../../commons/types";
import ChartList from "../chartList";
import * as S from "./index.styled";

export default function MusicChartUI() {
  const [musicData, setMusicData] = useState<IDataLabel[]>([]);
  const [searchName, setSearchName] = useState("");
  const [resultList, setResultList] = useState<IDataLabel[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );
    setMusicData(result?.data?.feed.entry);
  };

  const onChangeSearchTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchName(event?.currentTarget.value);
  };

  const onClickSearchBtn = () => {
    let result = musicData.filter(
      (el: any) =>
        el["im:name"].label.toLowerCase().indexOf(searchName.toLowerCase()) !==
        -1
    );
    if (result.length === 0) {
      Modal.error({
        content: "검색 결과가 없습니다.",
      });
    }
    setResultList(result);
  };

  const onClickUp = () => {
    const sortedResult = [...musicData].sort((a, b) => {
      if (a["im:name"].label > b["im:name"].label) {
        return 1;
      }
      if (a["im:name"].label < b["im:name"].label) {
        return -1;
      }
      return 0;
    });
    setResultList(sortedResult);
  };

  const onClickDown = () => {
    const sortedResult = [...musicData].sort((a, b) => {
      if (a["im:name"].label < b["im:name"].label) {
        return 1;
      }
      if (a["im:name"].label > b["im:name"].label) {
        return -1;
      }
      return 0;
    });
    setResultList(sortedResult);
  };

  return (
    <S.Container>
      <S.Top>
        <S.Title>Top100 차트</S.Title>
        <S.Search>
          <Input01
            placeholder="제목을 검색하세요"
            onChange={onChangeSearchTitle}
          />
          <S.SearchWrapper>
            <SearchOutlined onClick={onClickSearchBtn} />
          </S.SearchWrapper>
        </S.Search>
      </S.Top>
      <Button01 title="오름정렬" onClick={onClickUp} />
      <Button01 title="내림정렬" onClick={onClickDown} />
      <ChartList resultList={resultList} musicData={musicData} />
    </S.Container>
  );
}
