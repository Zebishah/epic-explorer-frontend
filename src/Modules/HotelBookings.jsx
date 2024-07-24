import Footer from "./Footer";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import image1 from "../images/vecteezy_blue-trendy-background-design-template-for-banner-poster_.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userHotelBookings } from "../Redux/Slices/UserBookingSlice";
import { useNavigate } from "react-router";
const HotelBookings = () => {
  const [hotels, setHotels] = useState([]);
  const dispatch = useDispatch();
  const { hotelBooking } = useSelector((state) => state.userBookings);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(userHotelBookings());
  }, [dispatch]);

  useEffect(() => {
    if (hotelBooking && hotelBooking.HotelBookings) {
      setHotels(hotelBooking.HotelBookings);
    }
  }, [hotelBooking]);
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(
      new Date(dateString)
    );
  };
  let showDetails = (id) => {
    navigate(`/HotelBookingDet?id=${encodeURIComponent(id)}`);
  };
  return (
    <div
      className="flex flex-col min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <Navbar />
      <div className="flex flex-row gap-x-6 h-full w-full overflow-hidden bg-opacity-0 bg-[#3654ff] smd:mt-40 mt-20">
        <SideBar />
        <div className=" flex flex-col justify-center gap-y-10 p-6 items-center w-[80%]">
          <h1 className="text-white text-4xl font-bold my-10 bg-[#3654ff] p-4 rounded-xl">
            Hotel Bookings
          </h1>
          <div className="flex flex-col items-center justify-center w-full space-y-4">
            {hotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-[#3654ff] shadow-lg text-white p-4 rounded-lg flex justify-between items-center space-x-4 w-[70%]"
              >
                <div className="flex flex-col items-center justify-between flex-1 md:flex-row md:space-x-4">
                  <span className="font-bold text-white">
                    # {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-radios ">{hotel.roomName}</span>
                  <span className="font-radios ">{hotel.bookerName}</span>
                  <span className="font-radios ">{hotel.bookerEmail}</span>
                  <span className="font-radios ">
                    {formatDate(hotel.bookingDate)}
                  </span>
                </div>
                <button
                  className="bg-white text-[#3654ff] px-4 py-2 rounded-lg"
                  onClick={() => showDetails(hotel.roomId)}
                >
                  Details
                </button>
              </div>
            ))}
          </div>
          <button className="mt-10 bg-[#3654ff] text-white px-6 py-2 rounded-lg">
            See More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelBookings;
