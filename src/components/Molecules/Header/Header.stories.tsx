import * as React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleHeader from '../../Images/SimpleLogo';

import Header from './Header';
import styled from 'styled-components';

import { HeaderTitle, LinkText, HeaderLink } from './styles';
import LargeHeader from '../../Images/LargeLogo';
import { Center } from '../../Atoms/Alignments';
import { Button } from '../../Atoms/Button';

import * as HeaderMarkdown from './Header.md'

const Sections = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
`;

storiesOf('Headers', module)
    .add('simple header', () => (
        <Sections>
            <Header siteTitle={<SimpleHeader />} maxHeight={320 - 64} minHeight={64} />
        </Sections>
    ), { notes: HeaderMarkdown })
    .add('large header', () => (
        <Sections>
            <Header
                siteTitle={<SimpleHeader />}
                maxHeight={320 - 64}
                minHeight={64}
                navLinks={[
                    <HeaderLink href="#/1">Link_1</HeaderLink>,
                    <HeaderLink href="#/2">Link_2</HeaderLink>
                ]}>
                <HeaderTitle>
                    <LargeHeader />
                </HeaderTitle>
                <Center>
                    <Button type="outlined">
                        <LinkText href="#getStarted">Get Started</LinkText>
                    </Button>
                    <Button type="outlined">
                        <LinkText href="#learnMore">Learn More</LinkText>
                    </Button>
                </Center>
            </Header>

            <div
                style={{
                    color: 'var(--wm-purple)',
                    alignSelf: 'center',
                    fontSize: 27,
                    marginTop: 25,
                    marginBottom: 2000
                }}>
                Scroll Down!
            </div>
        </Sections>
    ), { notes: HeaderMarkdown });
