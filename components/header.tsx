import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { SearchBar } from "@/components/search-bar";

export const Header = () => {
  return (
    <header className="xl:absolute left-0 right-0 max-w-360 mx-auto bg-grey-50">
      <div className="container mx-auto">
        <div className="py-10 flex items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto gap-8">
            <Logo width={200} height={48} />
            <MobileNav className="xl:hidden" />
          </div>
          <Nav
            stylesContainer="hidden xl:block pl-24"
            stylesList="flex items-center gap-6 text-primary"
          />
          <div className="hidden md:flex items-center justify-end gap-4 w-90">
            <SearchBar />
            <button type="button" className="group btn-icon btn-outline">
              <FaHeart className="text-primary group-hover:text-primary/90" />
            </button>
            <button type="button" className="group btn-icon btn-accent">
              <FaCartShopping className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
