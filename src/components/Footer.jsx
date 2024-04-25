import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="text-secondary bg-secondary-foreground py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-5">
          <Socials
            containerStyles="flex items-center gap-5"
            iconStyles="scale-110 transition-colors hover:text-primary"
          />
          <p className="text-sm font-semibold">
            Copyright &copy;{" "}
            <span className="font-bold text-primary">Ryan Davis</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
