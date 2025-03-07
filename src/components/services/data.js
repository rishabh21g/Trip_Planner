const SelectTravelerOptions = [
  {
    id: 1,
    title: "Solo Explorer",
    desc: "Discover the world on your own terms—freedom, adventure, and self-discovery await!",
    icon: "😎",
    people: "1 Person",
  },
  {
    id: 2,
    title: "Romantic Getaway",
    desc: "A dreamy escape for two—love, laughter, and unforgettable moments together.",
    icon: "💘",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family Adventure",
    desc: "Create lasting memories with your loved ones—fun, bonding, and exploration for all!",
    icon: "🏕️",
    people: "3+ People",
  },
  {
    id: 4,
    title: "Friends' Escape",
    desc: "A thrilling trip with your best buddies—epic stories, laughter, and adventure await!",
    icon: "🎉",
    people: "3+ Friends",
  },
];

const SelectBudgetOptions = [
  {
    "id": 1,
    "title": "Cheap",
    "desc": "Travel for less with ultra-budget options—hostels, street food, and free experiences!",
    "icon": "🪙"
  },
  {
    id: 2,
    title: "Budget-Friendly",
    desc: "Explore the world on a shoestring budget—smart choices, big adventures!",
    icon: "💳",
  },
  {
    id: 3,
    title: "Moderate",
    desc: "A balance between comfort and affordability—enjoy the best of both worlds.",
    icon: "💰",
  },
  {
    id: 4,
    title: "Luxury",
    desc: "Indulge in a lavish experience—premium stays, gourmet dining, and first-class travel.",
    icon: "💸",
  },
];

const PROMPT = "Generate Travel Plan for Location : {location}, for {total days} days for {travelers} with a {budget} budget Give me a Hotels options list with HotelName, Hotel addresses, Price, hotel image url, geo coordinates, rating , descriptions and suggest itinerary in array of objects so i can render each details using map function in react with placeName, Place and Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {total days} days with each day plan wth best time to visit in JSON format."



export { SelectTravelerOptions, SelectBudgetOptions , PROMPT};
