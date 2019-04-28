import { default as atoms } from './components/Atoms';
import { default as molecules } from './components/Molecules';
import { default as organisms } from './components/Organisms';

import { default as _images } from './components/Images';
import * as _hooks from './hooks';

// expose image components
export const images = {
    ..._images
};

// expose react hooks
export const hooks = {
    ..._hooks
};

// Gaia's specific API aligning with specs
export const Button = atoms.Button;
export const Footer = molecules.Footer;
export const Header = molecules.Header;
export const Login = organisms.Login;
export const Popup = molecules.Popup;
export const Navigation = {
    // Menubar: null,
    Drawer: molecules.Sidebar
};
export const Stepper = organisms.Stepper;
export const Table = organisms.Table;
export const Paginator = molecules.Paginator;
