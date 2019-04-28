import styled, { css } from 'styled-components';
import tsStyled from 'styled-components-ts';

// ! All these need to be refactored to use global css vars
// ! May be a good use of Styled-tools themes
export const sharedStyles = css`
    background-image: linear-gradient(-134deg, #084d90 0%, #8ebfee 58%, #d0eaf8 100%);
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.5);
    width: 100%;
`;

export const FullHeader = tsStyled<{
    collapsed: boolean;
    maxHeight: number;
    minHeight: number;
}>(styled.div)`
    min-height: 320px;

    transition-duration: 0.5s;
    transition-timing-function: ease;

    ${sharedStyles}

    position: sticky;
    top: -${(p) => p.maxHeight}px;
`;

export const CompactHeader = styled.div`
    position: relative;
    ${sharedStyles};
`;

export const SiteTitle = styled.div`
    margin-left: 24px;
    margin-right: 24px;
`;

export const HeaderTitle = styled.div`
    font-size: 40px;
    color: #fff;
    align-self: center;
    margin: 8px;
    font-weight: bold;
    display: block;
    width: 100%;
    text-align: center;
`;

export const HeaderLink = styled.a`
    color: #fff;
    font-size: 18px;
    padding-left: 21px;
    line-height: 25px;
    &:visited {
        color: #fff;
    }
    &:hover {
        color: #fff;
    }
`;

// TODO: Refactor to use reakit <Link />
export const LinkText = styled.a`
    color: #fff;
    &:visited {
        color: #fff;
    }
    &:hover {
        color: #fff;
    }
`;

export const Menu = styled.menu`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: 24px;
    margin-right: 24px;
`;
