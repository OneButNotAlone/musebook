# Header

A `Header` contains introductory content and/or navigational links

```jsx
<Header />
```

```jsx
import styled from 'styled-components';
import Header from './molecules/Header';
import Logo from './images/logo';

const Sections = styled.div`
    display: flex;
    height: 100%; /* 1, 3 */
    flex-direction: column;
`;

<Sections>
    <Header
        siteTitle={<Logo />}
        maxHeight={320 - 64}
        minHeight={64}
    />
</Sections>


<Sections>
    <Header
        siteTitle={<Logo />}
        maxHeight={320 - 64}
        minHeight={64}
    >
        If the Header recieves children, it will render a full header.
    </Header>
</Sections>

```

## TODOs

* Remove need for maxHeight and minHeight props by autocalculating Header child height offset.
