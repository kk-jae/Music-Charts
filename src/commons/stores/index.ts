import { atom, selector } from "recoil";

export const result = atom({
  key: "result", // 변수명
  default: [], // 초기값으로 들어가는 값
});
