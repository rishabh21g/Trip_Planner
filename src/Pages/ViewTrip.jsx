import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../components/services/firebase';
import { toast } from 'sonner';
import TripInfo from '../components/TripInfo';
import Hotels from '../components/Hotels';
import DailyPlan from '../components/DailyPlan';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const ViewTrip = () => {
  const [trips, seTrips] = useState([])
  const { tripId } = useParams();

  const getTripData = async () => {
    const docRef = doc(db, "Trips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log(docSnap.data())
      seTrips(docSnap.data())
    } else {
      console.log("No such document!");
      toast("No trip found")
    }

  }
  // console.log(trips)
  useEffect(() => {
    tripId && getTripData();
  }, [tripId])
  return (
    <>
    
    <Header/>
    <div className="flex flex-col mx-auto max-w-full xl:px-40 lg:px-36 md:px-20 sm:px-16 px-12 mt-12">
      {/* Info Section */}
      <TripInfo trips={trips} />

      {/* Hotels */}
      <Hotels trips={trips} />

      {/* Daily Plans */}
      <DailyPlan trips={trips} />

      {/* Tips and Tricks */}
      {/* <Tips trips={trips} /> */}

      {/* Footer */}
      <Footer trips={trips} />
    </div>
    </>
  )
}

export default ViewTrip