import { CategoryLinks } from "@/components/category-links";

import { footerCategoryLinks } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="pt-24">
      <div className="container mx-auto">
        <CategoryLinks categoryLinks={footerCategoryLinks} />
      </div>
    </footer>
  );
};
