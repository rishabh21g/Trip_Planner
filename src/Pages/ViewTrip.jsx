import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../components/services/firebase";
import { toast } from "sonner";
import TripInfo from "../components/TripInfo";
import Hotels from "../components/Hotels";
import DailyPlan from "../components/DailyPlan";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ViewTrip = () => {
  const [trips, seTrips] = useState([]);
  const { tripId } = useParams();

  const getTripData = async () => {
    const docRef = doc(db, "Trips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      seTrips(docSnap.data());
    } else {
      console.log("No such document!");
      toast("No trip found");
    }
  };
  useEffect(() => {
    tripId && getTripData();
  }, [tripId]);
  return (
    <div className="relative h-full w-full bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_24px]"></div>

      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-full opacity-60 bg-[radial-gradient(circle_500px_at_30%_300px,#fbfbfb36,#000)]"></div>

      <Header />
      <div className="flex flex-col mx-auto max-w-full xl:px-40 lg:px-36 md:px-20 sm:px-16 px-12 mt-12">
        {/* Info Section */}
        <TripInfo trips={trips} />

        {/* Hotels */}
        <Hotels trips={trips} />

        {/* Daily Plans */}
        <DailyPlan trips={trips} />

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  );
};

export default ViewTrip;
