/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { Modal } from "antd";
import axios from "axios";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import ChartList from "../chartList";
import * as S from "./index.styled";

interface IDataLabel {
  ["im:name"]: any;
}

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
      // 원본값 변경 방지
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
      // 원본값 변경 방지
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
    <div>
      <div>
        <input onChange={onChangeSearchTitle} />
        <button onClick={onClickSearchBtn}>검색</button>
        <div>
          <button onClick={onClickUp}>오름 정렬</button>
          <button onClick={onClickDown}>내림 정렬</button>
        </div>
      </div>
      <ChartList resultList={resultList} musicData={musicData} />
    </div>
  );
}
