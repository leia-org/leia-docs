import React, {type ReactNode, useState} from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  ErrorCauseBoundary,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import {motion, AnimatePresence} from 'framer-motion';
import {Menu, X} from 'lucide-react';

import styles from './styles.module.css';
import { ModernButton } from '../../../components/ModernButton';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function ModernNavbarItems({items, className}: {items: NavbarItemConfig[], className?: string}): ReactNode {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={clsx(
        'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-16',
        className
      )}>
      {items.map((item, idx) => (
        <div
          key={idx}
          onMouseEnter={() => setHovered(idx)}
          className="relative px-4 py-2 text-neutral-600">
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100" />
          )}
          <div className="relative z-20">
            <ErrorCauseBoundary
              key={idx}
              onError={(error) =>
                new Error(
                  `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
                  {cause: error},
                )
              }>
              <NavbarItem {...item} />
            </ErrorCauseBoundary>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function DesktopNavbar({visible}: {visible?: boolean}): ReactNode {
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
        backdropFilter: "blur(10px)"
      }}
      className={clsx(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex bg-white/80"
      )}>
      <NavbarLogo />
      <ModernNavbarItems items={leftItems} />
      <div className="flex items-center space-x-4">
        <ModernNavbarItems items={rightItems} />
        <NavbarColorModeToggle className={styles.colorModeToggle} />
        <ModernButton href="/docs/intro" variant="dark">
          Get Started
        </ModernButton>
      </div>
    </motion.div>
  );
}

function MobileNavbar({visible}: {visible?: boolean}): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const items = useNavbarItems();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={clsx(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80"
      )}>
      {/* Mobile Header */}
      <div className="flex w-full flex-row items-center justify-between px-4">
        <NavbarLogo />
        <button 
          onClick={toggleMobileMenu} 
          className="modern-hamburger"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
            {items.map((item, index) => (
              <div key={index} onClick={closeMobileMenu}>
                <ErrorCauseBoundary
                  key={index}
                  onError={(error) =>
                    new Error(
                      `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
                      {cause: error},
                    )
                  }>
                  <NavbarItem {...item} mobile />
                </ErrorCauseBoundary>
              </div>
            ))}
            <NavbarColorModeToggle className={styles.colorModeToggle} />
            <ModernButton href="/docs/intro" variant="dark" className="mt-4 w-full">
              Get Started
            </ModernButton>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function NavbarContent({visible}: {visible?: boolean}): ReactNode {
  return (
    <>
      <DesktopNavbar visible={visible} />
      <MobileNavbar visible={visible} />
    </>
  );
}
