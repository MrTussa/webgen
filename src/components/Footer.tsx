import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" py-6 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white text-sm !text-gray-900">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 ">
          <Link href="/">
            <Image
              loading="eager"
              src="/logo.svg"
              alt="logo"
              width={300}
              height={150}
            />
          </Link>
          <p className="font-semibold">+998(90)101-18-74 / webgen@gmail.com</p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/webgen_uz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                loading="eager"
                src="/instagram.png"
                alt="instagram"
                width={16}
                height={16}
              />
            </a>
            {/* <Image
              loading="eager"
              src="/x.png"
              alt="x"
              width={16}
              height={16}
            /> */}
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h4 className="font-medium text-lg mb-7">О Проекте</h4>
            <div className="flex flex-col gap-6 text-gray-600">
              <Link href="#aboutUs" scroll={true}>
                О нас
              </Link>
              <Link href="#services" scroll={true}>
                Услуги
              </Link>
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1ED6Rtfmj4FdHneWn0zEJ3yCnfF4xuE02/edit?usp=sharing&ouid=109348180616144411058&rtpof=true&sd=true"
                rel="noopener noreferrer"
                className="cursor-pointer "
              >
                Пользовательское Соглашение
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        {/* <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <span className="font-semibold">Безопасные переводы</span>
          <div className="flex justify-between">
            <Image
              loading="eager"
              src="/visa.png"
              alt="visa"
              width={40}
              height={20}
            />
            <Image
              loading="eager"
              src="/skrill.png"
              alt="skrill"
              width={40}
              height={20}
            />
            <Image
              loading="eager"
              src="/paypal.png"
              alt="paypal"
              width={40}
              height={20}
            />
            <Image
              loading="eager"
              src="/visa.png"
              alt="visa"
              width={40}
              height={20}
            />
            <Image
              loading="eager"
              src="/visa.png"
              alt="visa"
              width={40}
              height={20}
            />
          </div>
        </div> */}
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-16">
        <div>© 2024 WebGen</div>
      </div>
    </div>
  );
};

export default Footer;
