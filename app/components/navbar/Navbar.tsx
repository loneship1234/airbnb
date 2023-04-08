'use client'
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: string | null;
}

 const Navbar:React.FC<NavbarProps>=() => {
    return ( 
        <div className="fixed w-full bg-white z-10 shadow-sm">
          <div className="py-4 border-b-2 ">
          <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          <Logo/>
          <Search/>
          <UserMenu/>
          </div>
          </Container>
          </div>
        </div>
    );
}
export default Navbar