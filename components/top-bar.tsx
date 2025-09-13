import { FaTruck } from "react-icons/fa";

export const TopBar = () => {
  return (
    <section className="h-10 text-center text-white bg-primary">
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="flex items-center gap-2">
          <FaTruck />
          <p className="text-sm">Complimentary global shipping</p>
        </div>
      </div>
    </section>
  );
};
