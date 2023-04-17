import type { ChangeEvent } from "react";
import { Input } from "./index.styled";

interface IProps {
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  width?: number;
}

export const Input01 = (props: IProps) => {
  return (
    <Input
      placeholder={props.placeholder}
      onChange={props.onChange}
      width={props.width}
    />
  );
};
