import SidebarContainer from './Sidebar.Container';
import SidebarToggle from './Sidebar.Toggle';

export * from './Sidebar';
export * from './Sidebar.Container';
export * from './Sidebar.Toggle';

export default Object.assign(SidebarContainer, {
    Toggle: SidebarToggle
});
