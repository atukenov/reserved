import styled from "styled-components";

interface SvgIconProps {
  src?: string;
  width: string;
  height: string;
  shadow?: boolean;
}

const Image = styled.img<SvgIconProps>`
  /* background-color: lightgray; */
  border-radius: 10px;
  box-shadow: ${(p) => (p.shadow ? "10px 5px 5px rgba(0, 0, 0, 0.3)" : "")};
  object-fit: cover;
`;

export const SvgIcon = ({ src, width, height, shadow }: SvgIconProps) => (
  <Image
    shadow={shadow}
    src={
      src ? `/img/svg/${src}` : "https://source.unsplash.com/random/?abu+dhabi"
    }
    alt={src}
    width={width}
    height={height}
  />
);
