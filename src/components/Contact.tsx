"use client";
import React, { FormEvent } from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import HeaderText from "./HeaderText";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_swc7crb",
        "template_bk8nkru",
        {
          from_name: `${form.firstName} ${form.lastName}`,
          to_name: "Webgen",
          from_email: form.email,
          to_emaild: "dd993736@gmail.com",
          message: form.message,
        },
        "ZJ8M7NJyXUVAygz8n"
      )

      .then(
        () => {
          setLoading(false);
          alert("Email send.");
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error: any) => {
          setLoading(false);
          console.log(error);
          alert("Что то пошло не так");
        }
      );
  };

  return (
    <section className="bg-black-secondary z-0 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-dot-black -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent)]" />
      <HeaderText text="Свяжитесь с Нами" />
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <form className="my-8" onSubmit={handleSubmit} ref={formRef}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Имя</Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                value={form.firstName}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Фамилия</Label>
              <Input
                id="lastname"
                placeholder="Durden"
                type="text"
                value={form.lastName}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email адрес</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Ваши Пожелания</Label>
            <Input
              id="message"
              type="message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {loading ? "Отправка..." : "Отправить →"}

            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </section>
    // <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    //   <motion.div
    //     variants={slideIn("left", "tween", 0.2, 1)}
    //     className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
    //   >
    //     <p className={styles.sectionSubText}>Get in touch</p>
    //     <h3 className={styles.sectionHeadText}>Contact.</h3>

    //     <form
    //       onSubmit={handleSubmit}
    //       ref={formRef}
    //       className="mt-12 flex flex-col gap-8"
    //     >
    //       <label className="flex flex-col">
    //         <span className="text-white font-medium mb-4">Your Name</span>
    //         <input
    //           type="text"
    //           name="name"
    //           value={form.name}
    //           onChange={handleChange}
    //           placeholder="What's your name?"
    //           className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    //         />
    //       </label>
    //       <label className="flex flex-col">
    //         <span className="text-white font-medium mb-4">Your Email</span>
    //         <input
    //           type="email"
    //           name="email"
    //           value={form.email}
    // onChange={handleChange}
    //           placeholder="What's your Email?"
    //           className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    //         />
    //       </label>
    //       <label className="flex flex-col">
    //         <span className="text-white font-medium mb-4">Your Message</span>
    //         <textarea
    //           rows="7"
    //           name="message"
    // value={form.message}
    // onChange={handleChange}
    //           placeholder="What do you want to say?"
    //           className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    //         />
    //       </label>
    //       <button
    //         type="submit"
    //         className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
    //       >
    //         {loading ? "Sending..." : "send"}
    //       </button>
    //     </form>
    //   </motion.div>

    //   <motion.div
    //     className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
    //     variants={slideIn("right", "tween", 0.2, 1)}
    //   >
    //     <EarthCanvas />
    //   </motion.div>
    // </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Contact;
