"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface IListItem {
  title: string;
  href: string;
}

const listItems: IListItem[] = [
  {
    title: "schienieder",
    href: "https://github.com/schienieder",
  },
];

const NavigationMenuDemo = () => {
  return (
    <div className="fixed w-full flex justify-between items-center px-10 py-5 border-b border-slate-300 bg-white/40 backdrop-blur-sm">
      <h1 className="text-xl font-bold">cleverDevs</h1>
      <NavigationMenu>
        <NavigationMenuList>
          {listItems.map((li: IListItem, index: number) => {
            return (
              <NavigationMenuItem key={`${li.title}-${index}`}>
                <Link href={li.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} gap-x-1`}
                    target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      ></path>
                    </svg>
                    {li.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationMenuDemo;
