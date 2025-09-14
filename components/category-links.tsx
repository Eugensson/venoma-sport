import Link from "next/link";

import { CategoryLink } from "@/types";

interface CategoryLinksProps {
  categoryLinks: CategoryLink[];
}

export const CategoryLinks = ({ categoryLinks }: CategoryLinksProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
      {categoryLinks.map((block, index) => (
        <li key={index}>
          <h3 className="h6 pb-4 mb-6 border-b-2">{block.title}</h3>
          <ul className="flex flex-col gap-4">
            {block.items.map((item, idx) => (
              <li key={idx}>
                <Link href="#" className="link-secondary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
