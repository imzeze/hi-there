import styled from '@emotion/styled';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

const Div = styled.div<ColorProps & SpaceProps & LayoutProps & FlexboxProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
`;

export default Div;
