import React, { FormEvent } from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    service: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };
  const handleFormChange = (value: string) => {
    setForm({ ...form, service: value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
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
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Выберите Услугу</Label>
          <Select value={form.service} onValueChange={handleFormChange}>
            <SelectTrigger className="">
              <SelectValue placeholder="Услуги" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="site">Сайт</SelectItem>
              <SelectItem value="3d">3Д</SelectItem>
              <SelectItem value="tg-bot">Телеграм бот</SelectItem>
            </SelectContent>
          </Select>
        </LabelInputContainer>
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
      </div>
      <LabelInputContainer className="mb-4">
        <Label>Ваши Пожелания</Label>
        <Input
          id="message"
          type="message"
          name="message"
          value={form.message}
          onChange={handleChange}
        />
      </LabelInputContainer>
      <label className="text-gray-400 text-sm">
        Нажимая кнопку вы соглашаетесь с <br />
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1ED6Rtfmj4FdHneWn0zEJ3yCnfF4xuE02/edit?usp=sharing&ouid=109348180616144411058&rtpof=true&sd=true"
          rel="noopener noreferrer"
          className="cursor-pointer underline"
        >
          Пользовательским Соглашением
        </a>
      </label>
      <button
        className="mt-4 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        {loading ? "Отправка..." : "Отправить →"}

        <BottomGradient />
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
    </form>
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

export default Form;
