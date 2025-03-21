import { useState } from 'react';
import { Button } from '../ui/button';
import axios from 'axios';
import { toast } from 'sonner';
import { FaUserCircle } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { googleLogout } from '@react-oauth/google';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router';
import svg from "../../assets/trip-x.svg"
const Header = () => {
  const [openDialogue, setOpenDialogue] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const logIn = useGoogleLogin({
    onSuccess: (response) => {
      userInfo(response);
      toast('You are Signed In successfully');
    },
    onError: (err) => {
      toast('Sign In Failed :(', err);
    }
  });

  const userInfo = (response) => {
    if (!response || !response?.access_token) {
      console.error("Invalid response object:", response);
      return null;
    }
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response?.access_token}`, {
      headers: {
        Authorization: `Bearer ${response?.access_token}`,
        Accept: "Application/json",
      },
    })
      .then((res) => {
        console.log("User Data:", res?.data);
        setOpenDialogue(false);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });
  };

  const Logout = () => {
    googleLogout();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <header className="relative max-w-full flex justify-between mx-auto items-center xl:px-6 md:px-4 px-3 my-2 p-3 shadow-sm shadow-gray-200 text-white ">
      <span className="flex justify-center items-center font-bold  md:text-4xl text-lg gap-x-1">
       <p> trip-X</p>
      <img src={svg} className='md:w-16 w-8 h-auto'/>
      </span>
      {
        user ? (
          <div className="flex gap-2 items-center justify-center">
            <Link to={'/my-trips'}>
              <Button variant="outline" className="bg-transparent rounded-none border-none">My Trips</Button>
            </Link>
            <div className="p-3 rounded-none border-none flex items-center justify-center space-x-3">
            <Popover>
              <PopoverTrigger><FaUserCircle className='size-7 cursor-pointer border-none' /></PopoverTrigger>
              <PopoverContent><h2 onClick={Logout}>Log Out</h2></PopoverContent>
            </Popover>
            
              <h2 className="text-xs cursor-pointer">{user?.name}</h2>
            </div>
          </div>
        ) : (
          <Button className = "bg-blue-500 hover:bg-blue-600 rounded-none " onClick={() => setOpenDialogue(true)}>Sign In</Button>
        )
      }
      <Dialog open={openDialogue} onOpenChange={setOpenDialogue}>
        <DialogContent>
          <DialogTitle className="text-lg font-semibold text-center">Sign In</DialogTitle>
          <DialogDescription>
            <p className="font-bold px-2 gap-x-2 hover:cursor-pointer text-xs flex justify-center items-center">
              Sign In with your Google account
            </p>
            <Button className="w-full mt-3 text-lg flex items-center gap-2 justify-center" onClick={() => logIn()}>
              Click here <FcGoogle className="text-3xl" />
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
      
    </header>
  );
};

export default Header;
