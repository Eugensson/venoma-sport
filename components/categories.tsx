import Link from "next/link";
import Image from "next/image";

import { categoryImages, categoryLinks } from "@/lib/data";

export const Categories = () => {
  return (
    <section className="mt-24">
      <div className="container mx-auto">
        <div className="mb-18 flex items-end justify-between">
          <h2 className="h4 w-max border-b-2">Shop by Category</h2>
          <Link
            href="/"
            className="link-primary text-accent2 hover:text-primary"
          >
            View all
          </Link>
        </div>

        <ul className="mb-10 grid grid-cols-3 gap-4 xl:gap-10">
          {categoryImages.map((cat) => (
            <li
              key={cat.id}
              className="relative w-full h-36.5 sm:h-104 xl:h-124"
            >
              <Image
                src={cat.src}
                fill
                quality={100}
                alt={cat.alt}
                className="object-contain"
              />
            </li>
          ))}
        </ul>

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
      </div>
    </section>
  );
};
