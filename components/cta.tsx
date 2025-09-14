import { FaArrowRight } from "react-icons/fa";

export const Cta = () => {
  return (
    <section className="mt-24 py-20 bg-accent">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <h2 className="h3 mb-6 xl:mb-0 text-center">
            Founded with a passion for exellence
          </h2>
          <button type="button" className="btn btn-primary gap-2.5">
            Browse our collection
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
