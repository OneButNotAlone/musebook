import styled from 'styled-components';

export const FooterGrid = styled.div`
  height: 325px;
  width: 100vw;
  background-color: #2F2951;
  margin-top: 100px;
  right: 0;
  bottom: 0;
  left: 0;
  color: #ffffff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: ". title ."
                       "contact help about"
                       ". copyright logo";
  text-align: center;
  justify-items: center;
`;

const commonColumnStyles = `
  font-size: 20px;
  justify-self: center;
  text-align: left;
  align-self: center;
  margin-top: 38px;
`;

export const AppLogo = styled.div`
  margin-top: 32px;
  grid-area: title;
  justify-self: center;
`;

export const Contact = styled.div`
  ${commonColumnStyles};
  grid-area: contact;
`;

export const Help = styled.div`
  ${commonColumnStyles};
  grid-area: help;
`;

export const About = styled.div`
  ${commonColumnStyles};
  grid-area: about;
`;

export const Copyright = styled.div`
  opacity: 0.6;
  font-size: 12px;
  margin-top: 35px;
  margin-bottom: 32px;
  grid-area: copyright;
  justify-self: center;
`;

export const LabsLogo = styled.div`
  margin-top: 35px;
  margin-bottom: 32px;
  grid-area: logo;
`;

export const ColumnTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Bogle', sans-serif;
  font-style: normal;
`;

export const ColumnLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  font-family: 'Bogle', sans-serif;
  font-style: normal;
  font-weight: normal;
  margin: 12px 0 12px 0;
  align-items: center;
  cursor: pointer;
  display: block;
  color: #fff;
  &:visited {
    color: #fff;
  }
  &:hover {
    color: #da52d5;
  }
`;
