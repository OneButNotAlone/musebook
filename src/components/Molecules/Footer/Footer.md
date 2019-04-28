# Footer

A `Footer` contains, but is not limited to, things like authorship information, copyright information, app logo, contact information, sitemap, org information, related documents etc..

```jsx
<Footer />
```

```jsx
import Footer from './molecules/Footer';
import FooterLogo from '../../Images/FooterLogo'

<Sections>
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
</Sections>
```