import styled from 'styled-components';
import tsStyled from 'styled-components-ts';

const SharedStyles = `
    padding-bottom: 16px;
`;

export const LeftColumn = tsStyled<{height: number}>(styled.div)`
    ${SharedStyles}
    // height: ${p => p.height }px;
    max-width: 46px;
`;

export const RightColumn = styled.div`
  ${SharedStyles}
  padding-top: 10px;
  text-align: justify;
  height: 100%;
`;

export const ColumnPad = tsStyled<{ width: number }>(styled.div)`
    margin-right: ${p => p.width / 2}px;
    margin-left: ${p => p.width / 2}px;
`;