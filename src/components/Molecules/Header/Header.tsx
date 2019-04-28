import * as React from 'react';

import { Nav, SmallNav } from '../../Atoms/Navs';

import { FullHeader, CompactHeader, SiteTitle, HeaderLink, Menu } from './styles';

interface HeaderProps {
    maxHeight: number;
    minHeight: number;
    siteTitle: React.ReactNode;
    navLinks?: React.ReactNode[];
}

interface HeaderState {
    collapsed: boolean;
    scrollY: number;
}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);

        this.state = {
            collapsed: false,
            scrollY: 0
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.tryToggle = this.tryToggle.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }

    tryToggle() {
        const { maxHeight } = this.props;
        const { collapsed, scrollY } = this.state;

        if (!collapsed && scrollY > maxHeight) {
            this.setState({
                collapsed: true
            });
        } else if (collapsed && scrollY <= 0) {
            this.setState({
                collapsed: false
            });
        }
    }

    handleScroll(e: any) {
        const distanceFromTop = e.target.scrollingElement.scrollTop;

        this.setState({
            scrollY: distanceFromTop
        });

        this.tryToggle();
    }

    // TODO: Fullsize Header only renders if there is content section provided
    render() {
        const { siteTitle, maxHeight, minHeight, children, navLinks } = this.props;
        const { collapsed } = this.state;

        // TODO: This will be replaced with Reakit/toolbar's right most section
        const renderNavLinks = () => (
            <>
                <SiteTitle>{siteTitle}</SiteTitle>
                <Menu>{navLinks}</Menu>
            </>
        );

        const renderNav = (isCollapsed: boolean) => (
            <Nav collapsed={isCollapsed} maxHeight={maxHeight} minHeight={minHeight}>
                {renderNavLinks()}
            </Nav>
        );

        // TODO: Calculate disatance from top of browser for animation offset

        if (!children) {
            return (
                <CompactHeader>
                    <SmallNav>{renderNavLinks()}</SmallNav>
                </CompactHeader>
            );
        } else {
            return (
                <FullHeader collapsed={collapsed} maxHeight={maxHeight} minHeight={minHeight}>
                    {renderNav(collapsed)}
                    {children}
                </FullHeader>
            );
        }
    }
}

export default Header;
