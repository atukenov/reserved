import { SvgIconProps } from "../../utils/types";
import styled from "styled-components";

const Image = styled.img`
  background-color: lightgray;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
`;

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <Image src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);
