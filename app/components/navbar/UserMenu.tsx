"use client";
import Avatar from "../Avatar";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
// import RegisterModal from "../modals/RegisterModal";
interface userMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<userMenuProps> = ({ currentUser }) => {
  const loginModal = useLoginModal();
  // console.log(currentUser);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const registerModal = useRegisterModal();
  return (
    <div className="relative select-none">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4  bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}}>My Trips</MenuItem>
                <MenuItem onClick={() => {}}>My Favorites</MenuItem>
                <MenuItem onClick={() => {}}>My reservations</MenuItem>
                <MenuItem onClick={() => {}}>My Properties</MenuItem>
                <MenuItem onClick={() => {}}>Airbnb My Home</MenuItem>
                <hr />
                <MenuItem
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen}>login</MenuItem>
                <MenuItem onClick={registerModal.onOpen}>sign up</MenuItem>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
