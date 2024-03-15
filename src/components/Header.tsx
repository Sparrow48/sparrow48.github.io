'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    <Link color="foreground" href="/">
      Home
    </Link>,
    <Link color="foreground" href="/experience">
      Experience
    </Link>,
    <Link color="foreground" href="/skills">
      Skills
    </Link>,
    <Link color="foreground" href="/projects">
      Projects
    </Link>,
    <Link color="foreground" href="/certifications">
      Certifications
    </Link>,
  ];

  return (
    <Navbar
      className="py-2"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p className="font-bold text-inherit">MD. ABU NASIB</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/experience">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/certifications">
            Certifications
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <div className="pt-3">
          {menuItems.map((item, index) => (
            <div className="pt-1" key={`${item}-${index}`}>
              <NavbarMenuItem
                key={`${item}-${index}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div
                  color={
                    index === 2
                      ? 'primary'
                      : index === menuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                  }
                  className="w-full"
                >
                  {item}
                </div>
              </NavbarMenuItem>
            </div>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
