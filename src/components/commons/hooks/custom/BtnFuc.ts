import { Modal } from "antd";
import { useState } from "react";
import { IDataLabel } from "../../types";
export const BtnFuc = () => {
  const [musicData, setMusicData] = useState<IDataLabel[]>([]);
  const [searchName, setSearchName] = useState("");
  const [result, setResult] = useState<IDataLabel[]>([]);

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
    setResult(result);
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
    setResult(sortedResult);
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
    setResult(sortedResult);
  };

  return {};
};
