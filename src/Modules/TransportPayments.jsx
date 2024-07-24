import Footer from "./Footer";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import image1 from "../images/vecteezy_blue-trendy-background-design-template-for-banner-poster_.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userTransportPayment } from "../Redux/Slices/UserBookingSlice";
import { useNavigate } from "react-router";
import image2 from "../img/vecteezy_blue-and-white-curve-shape-background_11403724.jpg";
const TransportPayments = () => {
  const [transport, setTransport] = useState([]);
  const dispatch = useDispatch();
  const { transportPayment } = useSelector((state) => state.userBookings);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(userTransportPayment());
  }, [dispatch]);

  useEffect(() => {
    if (transportPayment && transportPayment.getUserTransportBill) {
      setTransport(transportPayment.getUserTransportBill);
    }
    console.log(transportPayment);
  }, [transportPayment]);
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(
      new Date(dateString)
    );
  };
  let showDetails = (id) => {
    console.log(id);
    navigate(`/TransportPaymentDet?id=${encodeURIComponent(id)}`);
  };
  return (
    <div
      className="flex flex-col min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${image2})` }}
    >
      <Navbar />
      <div className="flex flex-row w-full h-full mt-20 overflow-hidden bg-opacity-0 gap-x-6 smd:mt-40">
        <SideBar />
        <div className=" flex flex-col justify-center gap-y-10 p-6 items-center w-[80%]">
          <h1 className="text-white text-4xl font-bold my-10 bg-[#3654ff] p-4 rounded-xl">
            Transport Payments
          </h1>
          <div className="flex flex-col items-center justify-center w-full space-y-4">
            {transport.map((transport, index) => (
              <div
                key={index}
                className=" shadow-lg text-white p-4 rounded-lg flex justify-between items-center space-x-4 w-[70%]"
                style={{
                  backgroundImage: `url(${image2})`,
                }}
              >
                <div className="flex flex-col items-center justify-between flex-1 md:flex-row md:space-x-4">
                  <span className="font-bold text-white">
                    # {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-radios ">
                    {transport.transportName}
                  </span>
                  <span className="font-radios ">{transport.booker}</span>
                  <span className="font-radios ">{transport.totalPrice}</span>
                  <span className="font-radios ">
                    {formatDate(transport.date)}
                  </span>
                </div>
                <button
                  className="bg-white text-[#3654ff] px-4 py-2 rounded-lg"
                  onClick={() => showDetails(transport.booking)}
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

export default TransportPayments;
