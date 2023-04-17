import type { MouseEvent } from "react";
import { Button } from "./index.styled";

interface IProps {
  title: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button01 = (props: IProps) => {
  return <Button onClick={props.onClick}>{props.title}</Button>;
};
