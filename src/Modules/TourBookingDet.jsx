import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { tourBookingDetail } from "../Redux/Slices/UserBookingSlice";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import image1 from "../images/vecteezy_blue-trendy-background-design-template-for-banner-poster_.jpg";

const TourBookingDet = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { tourBookingDet } = useSelector((state) => state.userBookings);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");

    if (id) {
      dispatch(tourBookingDetail(id));
    }
  }, [location.search, dispatch]);

  const [bookedTourNo, setBookedTourNo] = useState(0);

  const [tourName, setTourName] = useState("");
  const [tourPrice, setTourPrice] = useState(0);
  const [tourImage, setTourImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [travelers, setTravelers] = useState([]);
  const [bookerName, setBookerName] = useState("");
  const [bookerEmail, setBookerEmail] = useState("");
  const [bookerPhone, setBookerPhone] = useState("");
  const [bookerAddress, setBookerAddress] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [members, setMembers] = useState("");
  const [booksCount, setBooksCount] = useState(0);
  const resetState = () => {
    setBookedTourNo(0);
    setTourName("");
    setTourPrice(0);
    setTourImage("");
    setStartDate("");
    setEndDate("");
    setCheckInDate("");
    setTravelers([]);
    setBookerName("");
    setBookerEmail("");
    setBookerPhone("");
    setBookerAddress("");
    setSuggestion("");
    setMembers("");
    setBooksCount(0);
  };
  useEffect(() => {
    if (
      tourBookingDet &&
      tourBookingDet.tours &&
      tourBookingDet.tours.length > 0
    ) {
      const tour = tourBookingDet.tours[0];
      resetState();
      setBookedTourNo(tour.bookedTourNo);

      setTourName(tour.name);
      setTourPrice(tour.price);
      setTourImage(tour.image);
      setStartDate(tour.startDate);
      setEndDate(tour.endDate);
      setCheckInDate(tour.checkInDate);
      setTravelers(tour.travelers);
      setBookerName(tour.bookerName);
      setBookerEmail(tour.bookerEmail);
      setBookerPhone(tour.bookerPhone);
      setBookerAddress(tour.bookerAddress);
      setSuggestion(tour.suggestion);
      setMembers(tour.members);
      setBooksCount(tour.BooksCount);
    }
  }, [tourBookingDet]);

  return (
    <div
      className="flex flex-col min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <Navbar />
      <div className="flex flex-row w-full h-full mt-20 overflow-hidden bg-opacity-0 gap-x-6 smd:mt-40">
        <SideBar />
        <div className="flex flex-col justify-center gap-y-10 p-6 items-center w-[80%]">
          <h1 className="p-4 my-10 text-4xl font-bold text-white bg-fade-black rounded-xl">
            Tour Bookings
          </h1>
          <div className="bg-blue-600 shadow-yellows rounded-lg shadow overflow-hidden sm:rounded-lg w-[80%]">
            <div className="w-full px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-white">
                User Database
              </h3>
              <p className="mt-1 text-sm text-white">
                Details and information about user.
              </p>
            </div>
            <div className="flex items-center justify-center w-full border-t border-gray-200">
              <dl className="flex flex-col">
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Image
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    <img
                      src={tourImage !== " " ? tourImage : image1}
                      alt="Tour"
                      className="object-cover w-8 h-8 rounded-full md:h-14 md:w-14"
                    />
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Booked-Tour No
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {bookedTourNo || "Not Provided"}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Tour Name
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {tourName || "Not Provided"}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Tour Price
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {tourPrice || "Not Provided"}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Start Date
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {startDate || "Not Provided"}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    End Date
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {endDate || "Not Provided"}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Check-In Date
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {checkInDate || "Not Provided"}
                  </dd>
                </div>

                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Booker Name
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {bookerName || "Not Provided"}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Booker Email
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {bookerEmail || "Not Provided"}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Booker Phone
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {bookerPhone || "Not Provided"}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Booker Address
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {bookerAddress || "Not Provided"}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Suggestion
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {suggestion || "Not Provided"}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Members
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {members || "Not Provided"}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white font-radios">
                    Books Count
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                    {booksCount}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TourBookingDet;
