import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import axios from 'axios';
import { toast } from 'sonner';
import { FaUserCircle } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { googleLogout } from '@react-oauth/google';
import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog"
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  const [openDialogue, setOpenDialogue] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  const logIn = useGoogleLogin({
    onSuccess: (response) => {
      console.log(response)
      userInfo(response)
      toast('You are Sign In successfully')
    },
    onError: (err) => {
      console.log("Sign in Failed")
      toast('Sign In Failed :(')
    }
  })
  const userInfo = (response) => {
    if (!response || !response?.access_token) {
      console.error("Invalid response object:", response);
      return;
    }

    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response?.access_token}`, {
        headers: {
          Authorization: `Bearer ${response?.access_token}`,
          Accept: "Application/json",
        },
      })
      .then((res) => {
        console.log("User Data:", res?.data);
        const saveInfo = localStorage.setItem('user', JSON.stringify(res.data))
        setOpenDialogue(false);

      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
        toast("Something went wrong")
      });
  };

  const Logout = () => {
    googleLogout()
    localStorage.clear()
    window.location.reload()
  }
  // useEffect(() => {
  //   if (user) console.log(user)

  // }, [user])
  return (
    <header className='max-w-full flex justify-between mx-auto items-center xl:px-6 md:px-4 px-8 my-2 p-3 shadow-md'>
      <span className='flex justify-center items-center font-bold  xl:text-4xl md:text-3xl text-2xl text-fuchsia-700'>TRIP-X <lord-icon
        src="https://cdn.lordicon.com/onmwuuox.json"
        trigger="loop"
        delay="500"
        stroke="bold"
        state="in-jump-dynamic"
        colors="primary:#a800b7,secondary:#a800b7"
      >
      </lord-icon></span>
      {
        user ? <div className='flex gap-2 items-center justify-center'>
          <a href="/my-trips"><Button variant="outline" className="rounded-full ">My Trips</Button></a>
          <Popover>
            <PopoverTrigger>{<FaUserCircle className='size-7 cursor-pointer' />}</PopoverTrigger>
            <PopoverContent><h2 onClick={Logout}>Log Out</h2></PopoverContent>
          </Popover>
          <div className='p-3 rounded-full border '>
            <h2 className='text-xs cursor-pointer'>{user?.name}</h2>
          </div>


        </div> :
          <Button onClick={() => setOpenDialogue(true)}>Sign In</Button>


      }
      <Dialog open={openDialogue}>
        <DialogContent>
          <DialogDescription>
            <p className="font-bold px-2 gap-x-2 hover:cursor-pointer text-xs flex justify-center items-center">
              Sign In with your Google account
            </p>
            <Button className="w-full mt-3 text-lg flex items-center gap-2 justify-center" onClick={logIn}>
              Click here <FcGoogle className="text-3xl" />
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </header>
  )
}

export default Header