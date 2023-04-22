import styled from "styled-components";
import { device } from "../../../utils/types";

interface Props {
  height?: number;
  top?: number;
  left?: number;
  w?: number;
  h?: number;
}

export const Map = styled.div<Props>`
  margin: auto;
  margin-top: 20px;
  background-color: gray;
  max-width: 1200px;
  width: 100%;
  height: ${(p) => (p.height ? `${p.height}px` : "")};
  position: relative;
`;

export const Window = styled.div<Props>``;
export const Table = styled.div<Props>`
  position: absolute;
  width: ${(p) => (p.w ? `${p.w}px` : "100px")};
  height: ${(p) => (p.h ? `${p.h}px` : "50px")};
  background-color: rgba(240, 74, 204, 0.7);
  color: white;

  text-align: center;
  top: ${(p) => (p.top ? `${p.top}px` : "")};
  left: ${(p) => (p.left ? `${p.left}px` : "")};
`;
export const Enter = styled.div<Props>`
  color: red;
  font-size: 30px;
  top: ${(p) => (p.top ? `${p.top}px` : "")};
  left: ${(p) => (p.left ? `${p.left}px` : "")};
`;
