import styled from 'styled-components';
import tsStyled from 'styled-components-ts';

export const Nav = tsStyled<{collapsed: boolean; maxHeight: number; minHeight: number}>(styled.div)`
  height: 64px;
  width: var(--max-width);
  display: flex;
  align-items: center;
  z-index: 9999;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto ${p => (p.collapsed ? '0px' : '64px')};

  transition-timing-function: ease;

  ${p =>
    p.collapsed
      ? `transition-duration: .3s;transform: translate(0px, ${
          p.maxHeight
        }px)`
      : `transition-duration: .5s;`};
`;

export const SmallNav = styled.div`
  height: 64px;
  width: var(--max-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto 0px;
  z-index: 9999;
`;