import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

import { User, Mail } from "lucide-react";

const Form = () => {
  return (
    <form className="space-y-5">
      <div className="relative">
        <Input
          className="rounded-full"
          id="name"
          type="text"
          name="name"
          placeholder="Name"
        />
        <User className="absolute top-1/2 right-2.5 -translate-y-1/2" />
      </div>
      <div className="relative">
        <Input
          className="rounded-full"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <Mail className="absolute top-1/2 right-2.5 -translate-y-1/2" />
      </div>
      <Textarea
        className="min-h-[100px]"
        id="message"
        type="text"
        name="message"
        placeholder="Type your Message Here"
      />
      <Button className="w-full font-semibold" type="submit">
        Let&apos;s Work
      </Button>
    </form>
  );
};

export default Form;
