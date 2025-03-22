import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { FaUserCircle } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout } from "@react-oauth/google";
import svg from "../../assets/trip-x.svg";
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const Logout = () => {
    googleLogout();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <header className="relative max-w-full flex justify-between mx-auto items-center xl:px-6 md:px-4 px-3 my-2 p-3 shadow-sm shadow-gray-200 text-white ">
      <span className="flex justify-center items-center font-bold  md:text-4xl text-lg gap-x-1">
        <p> trip-X</p>
        <img src={svg} className="md:w-16 w-8 h-auto" />
      </span>
      {user ? (
        <div className="flex gap-2 items-center justify-center">
          <div className="p-3 rounded-none border-none flex items-center justify-center space-x-3">
            <Popover>
              <PopoverTrigger>
                <FaUserCircle className="size-7 cursor-pointer border-none" />
              </PopoverTrigger>
              <PopoverContent>
                <h2 onClick={Logout}>Log Out</h2>
              </PopoverContent>
            </Popover>

            <h2 className="text-sm cursor-pointer">{user?.name}</h2>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
