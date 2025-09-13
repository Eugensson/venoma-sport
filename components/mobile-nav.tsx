import { MdOutlineMenu } from "react-icons/md";

import {
  SheetTitle,
  SheetHeader,
  SheetTrigger,
  SheetContent,
  SheetDescription,
  Sheet,
} from "@/components/ui/sheet";
import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  className?: string;
}

export const MobileNav = ({ className }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          "flex items-center justify-center cursor-pointer",
          className
        )}
      >
        <MdOutlineMenu size={30} className="text-primary" />
      </SheetTrigger>
      <SheetContent>
        <div className="h-full flex flex-col pt-16">
          <SheetHeader>
            <SheetTitle className="max-w-max mx-auto mb-48">
              <Logo width={200} height={200} white />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Mobile navigation menu
            </SheetDescription>
          </SheetHeader>
          <Nav
            stylesContainer=""
            stylesList="flex flex-col items-center gap-12 text-white"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
