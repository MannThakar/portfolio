"use client";

import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Nav from "./Nav";
import Socials from "./Socials";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" type="button">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div className="space-y-10">
          <Nav
            containerStyles="flex flex-col items-center gap-5 mt-10"
            linkStyles="text-xl font-semibold transition-colors hover:text-primary"
            onLinkClick={() => setOpen(false)} // ✅ closes on link click
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
