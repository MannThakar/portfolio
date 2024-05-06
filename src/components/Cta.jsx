import Link from "next/link";

import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="bg-primary/5 py-16 dark:bg-accent">
      <div className="container mx-auto">
        <div className="max-w-[500px] flex flex-col items-center gap-5 mx-auto">
          <h2 className="h2 text-center">
            Prepared to turn tour ideas into reality? I'm here to help you
          </h2>
          <Link href="/contact">
            <Button className="text-xl font-semibold py-6 px-8" type="button">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
