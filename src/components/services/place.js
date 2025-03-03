import axios from "axios";

export const BASE_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query={textQuery}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;

export const GetPlaceDetails = (updatedUrl) => axios.get(updatedUrl);
