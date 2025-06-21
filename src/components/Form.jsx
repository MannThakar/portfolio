"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { User, Mail, Loader2 } from "lucide-react";
import validateForm from "@/validation/index";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors, isValid } = validateForm(formData);
    if (!isValid) {
      setErrors(errors);
      return;
    } else {
      setIsLoading(true);
      setErrors({});
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formData,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )

        .then(
          () => {
            setIsLoading(false);
            setFormData({ name: "", email: "", message: "" });

            toast.success("Message Sent!");
          },
          (error) => {
            setIsLoading(false);
            console.error("Email send error:", error.text);
            toast.error("Something went wrong!");
          }
        );
    }
  };

  return (
    <form className="space-y-5 max-w-md w-full mx-auto" onSubmit={handleSubmit}>
      <div className="relative">
        <Input
          className="rounded-full"
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <User className="absolute top-5 right-3 transform -translate-y-1/2 text-gray-400" />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1 pl-2">{errors.name}</p>
        )}
      </div>

      <div className="relative">
        <Input
          className="rounded-full"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Mail className="absolute top-5 right-3 transform -translate-y-1/2 text-gray-400" />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 pl-2">{errors.email}</p>
        )}
      </div>

      <div>
        <Textarea
          className="min-h-[100px] rounded-xl"
          id="message"
          name="message"
          placeholder="Type your Message Here"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1 pl-2">{errors.message}</p>
        )}
      </div>

      <Button
        className="w-full font-semibold rounded-full"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="animate-spin w-5 h-5" />
        ) : (
          "Let’s Work"
        )}
      </Button>
    </form>
  );
};

export default Form;
