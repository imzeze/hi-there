import styled from '@emotion/styled';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

const Div = styled.div<ColorProps & SpaceProps & LayoutProps>`
  ${color}
  ${space}
  ${layout}
`;

export default Div;
