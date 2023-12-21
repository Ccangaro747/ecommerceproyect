import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../assets/rufina.png";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h3 className="text-3xl font-semibold hover:text-orange-500 cursor-pointer duration-200">
        <Image alt="Logo" src={logo} width={120} height={50} />
      </h3>
    </Link>
  );
};

export default Logo;
