import Link from "next/link";

import { Slider } from "@/components/slider";

export const Latest = () => {
  return (
    <section className="mt-24">
      <div className="container mx-auto">
        <div className="mb-18 flex items-end justify-between">
          <h2 className="capitalize h4 w-max border-b-2">
            Explore our latest collection
          </h2>
          <Link
            href="/"
            className="link-primary text-accent2 hover:text-primary capitalize"
          >
            View all
          </Link>
        </div>
        <Slider />
      </div>
    </section>
  );
};
