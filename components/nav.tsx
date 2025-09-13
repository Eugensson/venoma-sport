import Link from "next/link";

import { navLinks } from "@/lib/data";

interface NavProps {
  className?: string;
}

export const Nav = ({ className }: NavProps) => {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-6 text-primary">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="link-primary hover:text-accent2">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
