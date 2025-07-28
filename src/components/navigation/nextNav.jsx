"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Todo List", href: "/todo-list" },
  { label: "Kata", href: "/kata" },
  { label: "Hello", href: "/hello" },
  { label: "Form", href: "/form" },
  { label: "Bubling", href: "/bubling" },
];

export default function Nextnav() {
  const pathName = usePathname();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow">
      <ul className="flex gap-6">
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-blue-400 transition-colors ${
                pathName === href && "text-blue-500 font-semibold"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
