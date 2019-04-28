import * as React from 'react';
import Footer from '../Footer';
import * as renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import WmtLabs from '../../../Images/WmtLabs';


test('Footer should render with required fields correctly', () => {
    const tree = renderer.create(
        <Footer
            appName='some app'
            appLogo={<WmtLabs />}
            docsLink='https://sde.walmart.com/docs/index.html'
            emailDistro='test@walmartlabs.com'
            jiraLink='https://jira.walmart.com'
            orgLink='https://sde.walmart.com'
            orgName='my org'
            slackChannel='sde-gaia-core'
            teamLink='https://sde.walmart.com/docs/gaia/index.html'
            teamName='My Team'
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Optional email subject is being captured correctly', () => {
    const wrapper = shallow(
        <Footer
            appName='some app'
            appLogo={<WmtLabs />}
            docsLink='https://sde.walmart.com/docs/index.html'
            emailDistro='test@walmartlabs.com'
            emailSubject='Sample App Help1'
            jiraLink='https://jira.walmart.com'
            orgLink='https://sde.walmart.com'
            orgName='my org'
            slackChannel='sde-gaia-core'
            teamLink='https://sde.walmart.com/docs/gaia/index.html'
            teamName='My Team'
        />);
    expect(wrapper.html()).toContain('Sample App Help1')
});

