import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

import { Button } from "./ui/button";

import { Menu } from "lucide-react";

import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" type="button">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div className="space-y-10">
          <Logo />
          <Nav
            containerStyles="flex flex-col items-center gap-5"
            linkStyles="text-xl font-medium transition-colors hover:text-primary"
          />
        </div>
        <Socials
          containerStyles="flex justify-center items-center gap-5"
          iconStyles="transition-colors hover:text-primary"
        />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
