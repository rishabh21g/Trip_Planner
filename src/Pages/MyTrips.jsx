import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../components/services/firebase';
import image from "../assets/trip.webp";
import Header from '../components/Header/Header';

const MyTrips = () => {
  const [UserTrips, setUserTrips] = useState([])
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const GetUserDetails = async () => {
    if (!user) {
      navigate("/")
      return;
    }
    setUserTrips([])
    const q = query(collection(db, "Trips"), where("userEmail", "==", user?.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      setUserTrips((prevTrips) => {
        return [...prevTrips, doc.data()]
      })
    });



  }
  useEffect(() => {
    user && GetUserDetails()
  }, [])
  return (
    <>
    <Header/>
    <div className="flex flex-col mx-auto max-w-full xl:px-40 lg:px-36 md:px-20 sm:px-16 px-12 mt-12">
      <h2 className='font-bold text-3xl'>My Trips</h2>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-6 md:gap-20 lg:gap-16'>
        {
          UserTrips.map((trip, idx) => {
            return (
              <div key={idx} className="rounded-lg shadow-md hover:scale-105 w-[250px] h-[200px] p-5 gap-5 bg-gray-200 flex-col">
                <img src={image} alt="place image" className='w-full rounded-md' />
                  
              </div>
            )
          })
        }

      </div>
    </div>
    </>
  )
}

export default MyTrips