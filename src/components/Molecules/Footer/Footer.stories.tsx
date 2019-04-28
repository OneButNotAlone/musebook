import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './Footer';
import FooterLogo from '../../Images/FooterLogo'

import * as FooterMarkdown from './Footer.md';

storiesOf('Footers', module)
    .add('standard footer', () => (
        <Footer
            appLogo={<FooterLogo />}
            appName='Sample App'
            teamLink='https://sde.walmart.com/docs/gaia/index.html'
            docsLink='https://sde.walmart.com/docs/index.html'
            emailDistro='test@walmartlabs.com'
            emailSubject='Sample App Help1'
            jiraLink='https://jira.walmart.com'
            orgLink='https://sde.walmart.com'
            orgName='My Org'
            slackChannel='sde-gaia-core'
            teamName='My Team'
        />
    ), { notes: FooterMarkdown });
