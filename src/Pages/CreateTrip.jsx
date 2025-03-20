import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  PROMPT,
  SelectBudgetOptions,
  SelectTravelerOptions,
} from "../components/services/Data";
import { chatSession } from "../components/services/app";
import { FcGoogle } from "react-icons/fc";
import { doc, setDoc } from "firebase/firestore";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { db } from "../components/services/firebase";
import Header from "../components/Header/Header";
import Load from "../components/loader/Load";

const CreateTrip = () => {
  const [place, setPlace] = useState(null);
  const [openDialogue, setOpenDialogue] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

  const handleChange = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const login = useGoogleLogin({
    onSuccess: (response) => {
      // console.log(response);
      userInfo(response);
      toast("You are Signed In successfully");
    },
    onError: (err) => {
      console.log("Sign in Failed", err);
      toast("Sign In Failed :(");
    },
  });

  const userInfo = (response) => {
    if (!response || !response?.access_token) {
      console.error("Invalid response object:", response);
      return null;
    } else {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response?.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${response?.access_token}`,
              Accept: "Application/json",
            },
          }
        )
        .then((res) => {
          // console.log("User Data:", res?.data);
          const saveInfo = localStorage.setItem(
            "user",
            JSON.stringify(res.data)
          );
          setOpenDialogue(false);
          GenerateTrip();
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
          toast("Something went wrong");
        });
    }
  };

  const saveTripFromAi = async (Trip_fromAI) => {
    setLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const id = Date.now().toString();
      await setDoc(doc(db, "Trips", id), {
        userChoice: data,
        userEmail: user.email,
        TripData: JSON.parse(Trip_fromAI),
        docId: id,
      });
      navigate("/view-trip/" + id);
      toast("Your Trip has been generated successfully");
    } catch (err) {
      console.log(err);
      toast("Error while fetching and saving Trip!");
    } finally {
      setLoading(false);
    }
  };
  const GenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) return setOpenDialogue(true);
    if (!data?.budget || !data?.travelerType || !data?.noOfDays || !data?.place)
      return toast("Please fill up all the details");

    setLoading(true);
    const FINAL_PROMPT = PROMPT.replace("{location}", data?.place || "")
      .replace("{total days}", data?.noOfDays || "")
      .replace("{travelers}", data?.travelerType || "")
      .replace("{budget}", data?.budget || "")
      .replace("{total days}", data?.noOfDays || "");

    try {
      const result = await chatSession?.sendMessage(FINAL_PROMPT);
      const TripDetails = result.response.text();
      setLoading(false);
      saveTripFromAi(TripDetails);
    } catch (error) {
      console.error("Error fetching trip details:", error);
      toast("Failed to generate trip plan. Please try again.");
    }
  };

  useEffect(() => {}, [data]);

  return (
    <div className="relative h-full w-full bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_24px]"></div>

      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-full opacity-60 bg-[radial-gradient(circle_500px_at_30%_300px,#fbfbfb36,#000)]"></div>

      <div className="relative w-full h-full">
        <Header />
        <div className="flex flex-col mx-auto max-w-full xl:px-40 lg:px-36 md:px-20 sm:px-16 px-12 mt-12">
          <h2 className="font-bold text-5xl text-gray-200">
            Share your travel preferences with us
          </h2>
          <p className="text-lg text-gray-100 mt-3">
            Trip-X will craft a personalized itinerary just for you. Sit back
            and let our AI-powered planner design your perfect trip
            effortlessly!
          </p>

          {/* Destination Selection */}
          <div className="mt-2">
            <h2 className="text-lg text-gray-200 my-3">
              Where do you want to visit?
            </h2>
            <GooglePlacesAutocomplete
              apiKey={GOOGLE_API_KEY}
              selectProps={{
                value: place,
                onChange: (place) => {
                  setPlace(place);
                  handleChange("place", place?.label);
                },
              }}
            />
          </div>

          {/* Number of Days */}
          <div className="mt-2">
            <h2 className="text-lg text-gray-200 my-3">
              How many days are you looking for to travel?
            </h2>
            <Input
              type="number"
              placeholder="e.g., 4"
              min={1}
              max={5}
              onChange={(e) => handleChange("noOfDays", e.target?.value)}
            />
          </div>

          {/* Budget Selection */}
          <div className="mt-4">
            <h2 className="text-gray-200 my-3 text-2xl">
              What is your budget range for this trip?
            </h2>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
              {SelectBudgetOptions?.map((budget, index) => (
                <div
                  key={index}
                  className={`border py-2 px-4 rounded-none cursor-pointer hover:shadow-lg p-7 ${
                    data?.budget === budget?.title
                      ? "border-blue-500 shadow-lg"
                      : ""
                  }`}
                  onClick={() => handleChange("budget", budget?.title)}
                >
                  <div className="flex space-x-2 items-baseline justify-start">
                    <h2 className="text-2xl text-white">{budget?.icon}</h2>
                    <h2 className="text-2xl font-bold text-gray-200">
                      {budget?.title}
                    </h2>
                  </div>
                  <h2 className="text-sm text-gray-200 mt-1">{budget?.desc}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Traveler Type Selection */}
          <div className="mt-4">
            <h2 className="text-gray-200 my-3 text-2xl ">
              Who are you traveling with?
            </h2>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
              {SelectTravelerOptions?.map((traveler, index) => (
                <div
                  key={index}
                  className={`border py-2 px-4 rounded-none cursor-pointer hover:shadow-lg p-7 ${
                    data?.travelerType === traveler?.title
                      ? "border-blue-500 shadow-white"
                      : ""
                  }`}
                  onClick={() => handleChange("travelerType", traveler?.title)}
                >
                  <div className="flex space-x-2 items-baseline justify-start">
                    <h2 className="text-2xl text-white">{traveler?.icon}</h2>
                    <h2 className="text-2xl font-bold text-gray-200">
                      {traveler?.title}
                    </h2>
                  </div>
                  <h2 className="text-sm text-gray-200 mt-2">
                    {traveler?.desc}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center my-10">
            <Button
              onClick={GenerateTrip}
              className="bg-blue-500 rounded-none hover:bg-blue-600"
            >
              {loading ? <Load></Load> : "GenerateTrip"}
            </Button>

            <Dialog open={openDialogue} onOpenChange={setOpenDialogue}>
              <DialogContent>
                <DialogTitle className="text-lg font-semibold text-center">
                  Sign In
                </DialogTitle>
                <DialogDescription>
                  <p className="font-bold px-2 gap-x-2 hover:cursor-pointer text-xs flex justify-center items-center">
                    Sign In with your Google account
                  </p>
                  <Button
                    className="w-full mt-3 text-lg flex items-center gap-2 justify-center"
                    onClick={() => login()}
                  >
                    Click here <FcGoogle className="text-3xl" />
                  </Button>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
