"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../../public/images/logo.png";
const Logo = () => {
  const Router = useRouter();
  return (
    <div>
      <Image
        src={logo}
        height={100}
        width={100}
        alt={"logo"}
        className="hidden md:block cursor-pointer"
      />
    </div>
  );
};

export default Logo;
