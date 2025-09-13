import Link from "next/link";

import { navLinks } from "@/lib/data";

interface NavProps {
  stylesContainer?: string;
  stylesList?: string;
}

export const Nav = ({ stylesContainer, stylesList }: NavProps) => {
  return (
    <nav className={stylesContainer}>
      <ul className={stylesList}>
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
