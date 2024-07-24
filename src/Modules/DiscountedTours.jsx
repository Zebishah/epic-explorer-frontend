import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import image from "../image/Family Packages (20).png";
import { useNavigate } from "react-router";
import Footer from "./Footer";
import { showDiscountedTours } from "../Redux/Slices/showAccommodationsSlice";
import image2 from "../img/vecteezy_blue-and-white-curve-shape-background_11403724.jpg";
import SingleNavbar from "./SingleNavbar";
const DiscountedTours = () => {
  const [DiscountedTours, setDiscountedTours] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { discountedTour } = useSelector((state) => state.showAccommodations);

  useEffect(() => {
    dispatch(showDiscountedTours());
  }, [dispatch]);

  useEffect(() => {
    if (discountedTour) {
      console.log(discountedTour);
      if (discountedTour.tours) {
        setDiscountedTours(discountedTour.tours);
      } else {
        console.warn("Tours not found in discountedTour");
      }
    }
  }, [discountedTour]);
  const BookTour = (id) => {
    navigate(`/BookTour?id=${encodeURIComponent(id)}`);
  };
  return (
    <div
      className="z-10 flex flex-col w-full h-full gap-y-24" /* Lower z-index for the banner */
      style={{
        backgroundImage: `url(${image2})`,
      }}
    >
      {" "}
      <SingleNavbar />
      <div className="relative font-sans pointer-events-none before:absolute before:w-full before:h-full before:inset-0 before:opacity-90 before:z-10">
        <img
          src={image}
          alt=".."
          className="absolute inset-0 object-cover w-full h-full "
        />

        <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6"></div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 overflow-hidden bg-dark lg:flex-row gap-x-6">
        <div className="container mx-auto">
          <div className="text-center bg-[#206eff] text-white py-4 rounded mb-8">
            <h1 className="text-2xl font-bold">List of All Tours</h1>
          </div>

          <div className="flex flex-row flex-wrap gap-x-10 md:mt-0 sssm:mt-72 gap-y-4">
            {DiscountedTours.map((tour, index) => (
              <div
                className="bg-white bg-cover bg-center w-full max-w-sm rounded-xl overflow-hidden mx-auto font-[sans-serif] shadow-lg shadow-fade-black p-5 hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer  "
                key={index}
                style={{
                  backgroundImage: `url(${image2})`,
                }}
              >
                <div className="relative">
                  <div className="absolute top-8 right-0 transform translate-y-[-50%]">
                    <div className="absolute p-2 text-white bg-blue-600 shadow-lg tag -top-4 right-2 w-max rounded-xl font-radios shadow-fade-black animate-blink">
                      Package
                    </div>
                  </div>
                  <img
                    alt="...."
                    src={tour.image}
                    className="w-full h-56 rounded-xl"
                  />
                </div>
                <div className="p-3 mt-2 bg-[#206eff] rounded-xl">
                  <div className="flex flex-row justify-between">
                    <h3 className="text-xl text-white font-radios">
                      {tour.name}
                    </h3>
                    <h3 className="text-xl text-white font-radios">
                      {tour.price} pkr
                    </h3>
                  </div>

                  <p className="mt-4 text-sm text-white font-radios">
                    {tour.description}
                  </p>
                  <div className="flex flex-row justify-between mt-4 ">
                    <h3 className="text-xs text-white font-radios">
                      <span className="text-sm font-radios">
                        Starting From :{" "}
                      </span>
                      {tour.startDate}
                    </h3>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      type="button"
                      onClick={() => BookTour(tour._id)}
                      className="w-[40%] hover:before:bg-red rounded-xl relative h-[50px] overflow-hidden bg-white px-3 text-[#3654ff] shadow-lg transition-all ease-in-out before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#206eff] hover:shadow-lg hover:shadow-white before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
                    >
                      <span className="relative z-10 text-lg text-radios">
                        Book Tour
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DiscountedTours;
