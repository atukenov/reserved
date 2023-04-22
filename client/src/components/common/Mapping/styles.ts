import styled from "styled-components";
import { device } from "../../../utils/types";

interface Props {
  height?: number;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  w?: number;
  h?: number;
}

export const Map = styled.div<Props>`
  background-color: gray;
  max-width: 1200px;
  /* width: 100%;
  height: ${(p) => (p.height ? `${p.height}px` : "")}; */
  position: relative;
  display: flex;
  justify-content: center;

  .map {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .row {
    display: flex;
  }

  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 100px;
    height: 50px;
    background-color: lightgray;
    border: 1px solid gray;
  }
`;

export const Window = styled.div<Props>``;
export const Table = styled.div<Props>`
  position: absolute;
  width: ${(p) => (p.w ? `${p.w}px` : "60px")};
  height: ${(p) => (p.h ? `${p.h}px` : "30px")};
  background-color: rgba(240, 74, 204, 0.7);
  color: white;

  text-align: center;
  top: ${(p) => (p.top ? `${p.top}px` : "")};
  left: ${(p) => (p.left ? `${p.left}px` : "")};

  @media ${device.tablet} {
    width: ${(p) => (p.w ? `${p.w}px` : "80px")};
    height: ${(p) => (p.h ? `${p.h}px` : "40px")};
  }
  @media ${device.laptop} {
    width: ${(p) => (p.w ? `${p.w}px` : "100px")};
    height: ${(p) => (p.h ? `${p.h}px` : "50px")};
  }
  @media ${device.desktop} {
    width: ${(p) => (p.w ? `${p.w}px` : "100px")};
    height: ${(p) => (p.h ? `${p.h}px` : "50px")};
  }
`;
export const Enter = styled.div<Props>`
  position: absolute;
  color: red;
  font-size: 30px;
  top: ${(p) => (p.top ? `${p.top}px` : "")};
  left: ${(p) => (p.left ? `${p.left}px` : "")};
  right: ${(p) => (p.right ? `${p.right}px` : "")};
  bottom: ${(p) => (p.bottom ? `${p.bottom}px` : "")};
`;
