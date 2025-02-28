import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../components/services/firebase';
import { toast } from 'sonner';
import TripInfo from '../components/TripInfo';
import Hotels from '../components/Hotels';
import DailyPlan from '../components/DailyPlan';
import Footer from '../components/Footer';

const ViewTrip = () => {
  const [trips, seTrips] = useState([])
  const { tripId } = useParams();
  useEffect(() => {
    tripId && getTripData();
  }, [tripId])
  const getTripData = async () => {
    const docRef = doc(db, "Trips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data())
      seTrips(docSnap.data())
    } else {
      console.log("No such document!");
      toast("No trip found")
    }
  
  }
  return (
    <div className="flex flex-col mx-auto max-w-full xl:px-40 lg:px-36 md:px-20 sm:px-16 px-12 mt-12">
      {/* Info Section */}
      <TripInfo trips={trips}/>

      {/* Hotels */}
      <Hotels trips={trips}/>

      {/* Daily Plans */}
      <DailyPlan itinerary={trips?.TripData?.itinerary}/>

      {/* Footer */}
      <Footer trips={trips}/>
    </div>
  )
}

export default ViewTrip