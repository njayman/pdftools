"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@app/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@app/components/ui/navigation-menu";
import Dropzone from "./dropzone";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@app/components/ui/sheet";
import { Button } from "@app/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@app/components/ui/dropdown-menu";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center justify-between gap-2">
          <Link href="/" className="font-bold text-lg md:text-xl">
            Pdftools
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <nav className="flex flex-col gap-4 mt-6">
                  <Link href="/merge" className="px-2 py-1 hover:underline">
                    Merge PDF
                  </Link>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1">
                  Menu <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[180px]">
                <DropdownMenuItem asChild>
                  <Link href="/merge">Merge PDF</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Dropzone />
      </div>
    </header>
  );
};

export default Navbar;
