"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "@app/components/ui/navigation-menu";
import Dropzone from "./dropzone";

const Navbar = () => {
  return (
    <header className="mx-auto container">
      <nav className="flex justify-between p-4">
        <Link href="/">
          <h1 className="text-center">Pdftools</h1>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row gap-4">
            <NavigationMenuItem>
              <Link href="/merge" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Merge PDF
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Dropzone />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default Navbar;
