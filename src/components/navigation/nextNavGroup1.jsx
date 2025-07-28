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

export default function NextnavG1() {
  const pathName = usePathname();

  return (
    <nav className="bg-purple-900 text-white px-6 py-4 shadow">
      <ul className="flex gap-6">
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-orange-400 transition-colors ${
                pathName === href && "text-orange-500 font-semibold"
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
