import React, {type ReactNode} from 'react';
import {
  NavbarProvider, 
  ScrollControllerProvider, 
  ColorModeProvider,
  composeProviders
} from '@docusaurus/theme-common/internal';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';

const NavbarProviders = composeProviders([
  ColorModeProvider,
  ScrollControllerProvider,
  NavbarProvider,
]);

export default function Navbar(): ReactNode {
  return (
    <NavbarProviders>
      <NavbarLayout>
        <NavbarContent />
      </NavbarLayout>
    </NavbarProviders>
  );
}
