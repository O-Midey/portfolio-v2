"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import sections from "../_data/sections";
import SidebarItem from "../_components/SidebarItem";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-64 flex-shrink-0 sticky top-24">
      <nav className="space-y-1">
        {sections.map((section) => (
          <Link key={section.id} href={section.href}>
            <SidebarItem
              section={section}
              isActive={pathname === section.href}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
