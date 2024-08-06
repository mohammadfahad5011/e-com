import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-32 bg-[#eee] flex justify-center items-center">
      <Link href="/">Home</Link>
      <Link href="/cart">
        Cart <span>0</span>
      </Link>
    </div>
  );
};

export default Navbar;
