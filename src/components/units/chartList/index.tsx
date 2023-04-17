/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { IDataLabel } from "../../commons/types";
import * as S from "./index.styled";

interface IListProps {
  resultList: any;
  musicData: IDataLabel[];
}

export default function ChartList(props: IListProps) {
  return (
    <div>
      {props.resultList.length !== 0
        ? props.resultList.map((el: any) => (
            <div key={el.id.label}>
              <img src={el["im:image"][0].label} />
              <span>{el.title.label}</span>
            </div>
          ))
        : props.musicData.map((el: any) => (
            <div key={el.id.label}>
              <img src={el["im:image"][0].label} />
              <span>{el.title.label}</span>
            </div>
          ))}
    </div>
  );
}
