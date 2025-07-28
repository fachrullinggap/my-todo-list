"use client";

import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Todo List", to: "/todo-list" },
    { label: "Kata", to: "/kata" },
    { label: "Hello", to: "/hello" },
    { label: "Form", to: "/form" },
    { label: "Bubling", to: "/bubling" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow">
      <ul className="flex gap-6">
        {navItems.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              className={`hover:text-blue-400 transition-colors ${
                location === to && "text-blue-500 font-semibold"
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
