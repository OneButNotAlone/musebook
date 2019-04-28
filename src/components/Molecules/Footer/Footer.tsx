import * as React from 'react';
import EmailIcon from '../../Images/EmailIcon';
import SlackIcon from '../../Images/SlackIcon';
import { FooterGrid, AppLogo, Contact, Help, About, Copyright, LabsLogo, ColumnTitle, ColumnLink } from './styles'

import WmtLabs from '../../Images/WmtLabs';
import CurrentYear from '../../Atoms/CurrentYear';

export interface FooterProps {
  appLogo: React.ReactNode;
  appName: string;
  teamLink: string;
  docsLink: string;
  emailDistro: string;
  emailSubject?: string;
  jiraLink: string;
  orgLink: string;
  orgName: string;
  slackChannel: string;
  teamName: string;
}

export const Footer: React.SFC<FooterProps> = ({ appName, orgName, appLogo, emailDistro, emailSubject, slackChannel, docsLink, jiraLink, orgLink, teamLink, teamName }) => (
  <FooterGrid>
    <AppLogo>{appLogo}</AppLogo>

    <Contact>
      <ColumnTitle>Contact</ColumnTitle>
      <ColumnLink href={`mailto:${emailDistro}?subject=${emailSubject ? emailSubject : encodeURI(`${appName} Help`)}`}><EmailIcon />{' '}Email</ColumnLink>
      <ColumnLink href={`slack://channel?team=T024GHP2K&id=${slackChannel}`}><SlackIcon />{' '}Slack</ColumnLink>
    </Contact>

    <Help>
      <ColumnTitle>Help</ColumnTitle>
      <ColumnLink href={docsLink}>Documentation</ColumnLink>
      <ColumnLink href={jiraLink}>Create a Support Ticket</ColumnLink>
    </Help>

    <About>
      <ColumnTitle>About</ColumnTitle>
      <ColumnLink href={orgLink}>{orgName}</ColumnLink>
      <ColumnLink href={teamLink}>{teamName}</ColumnLink>
    </About>

    <Copyright>2011 - <CurrentYear /> © Walmart Inc. All Rights Reserved.</Copyright>

    <LabsLogo><WmtLabs /></LabsLogo>

  </FooterGrid>
);

export default Footer;