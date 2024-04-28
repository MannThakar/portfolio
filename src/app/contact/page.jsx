import { Mail, Home, PhoneCall } from "lucide-react";

import Form from "@/components/Form";

export default function Contact() {
  return (
    <section className="my-12 md:my-24">
      <div className="container mx-auto">
        <div className="space-y-10 md:space-y-20">
          <div className="md:grid md:grid-cols-2 md:gap-10">
            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="w-10 h-1 bg-primary rounded-sm" />
                <span className="text-lg font-semibold text-primary">
                  Say Hello 👋
                </span>
              </div>
              <h1 className="h1">Let's Work Together.</h1>
              <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates animi ipsum sequi iusto atque error debitis enim
                neque, velit ullam.
              </p>
            </div>
            <div className="hidden md:inline-block bg-contact_illustration_light bg-no-repeat bg-contain bg-center dark:bg-contact_illustration_dark" />
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 font-semibold">
                <Mail className="text-primary" />
                youremail@email.com
              </div>
              <div className="flex items-center gap-2.5 font-semibold">
                <Home className="text-primary" />
                8420 Pine Avenue, Meadowville MC 842
              </div>
              <div className="flex items-center gap-2.5 font-semibold">
                <PhoneCall className="text-primary" />
                +44 123 546 7890
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
