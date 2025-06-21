import { Mail, Home, PhoneCall } from "lucide-react";

import Form from "@/components/Form";

export default function Contact() {
  return (
    <section className="my-10 md:my-20">
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
              <h1 className="h1">Let&apos;s Work Together.</h1>
              <p className="description">
                Have a project in mind, need a frontend expert <br /> or just
                want to say hello?
              </p>
            </div>
            <div className="hidden md:inline-block bg-contact_illustration_light bg-no-repeat bg-contain bg-center dark:bg-contact_illustration_dark" />
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 font-semibold">
                <Mail className="text-primary" />
                mannthakar505@gmail.com
              </div>
              <div className="flex items-center gap-2.5 font-semibold">
                <Home className="text-primary" />
                Ahmedabad, India
              </div>
              <div className="flex items-center gap-2.5 font-semibold">
                <PhoneCall className="text-primary" />
                +91 82008 73635
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
