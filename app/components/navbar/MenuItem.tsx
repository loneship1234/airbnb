'use client'
import React from "react";

interface MenuItemProps {
  onClick: () => void;
  children: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {children}
    </div>
  );
};

export default MenuItem;