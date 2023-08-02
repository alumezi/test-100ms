import { styled } from "styled-components";

export const Logo = styled.a`
  display: inline-block;
  font-family: Monoline, "Helvetica Neue", Helvetica, Arial, sans-serif;

  &:before {
    ${({ fontColor, isTranslucent, hasCustomLogo }) =>
      isTranslucent && hasCustomLogo && `color: ${fontColor || "#fff"};`}
  }

  &:after {
    content: "mindbodygreen";
    font-size: 1.8rem;
    font-family: Monoline, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;
