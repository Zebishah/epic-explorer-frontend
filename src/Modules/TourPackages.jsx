import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { showTourPackages } from "../Redux/Slices/TourPackagesSlice";
import { useNavigate } from "react-router";
import image2 from "../img/vecteezy_modern-background-with-blue-gradient_16623673.jpg";
const TourPackages = () => {
  const [HoneyTours, setHoneyTours] = useState([]);
  const [FamilyTours, setFamilyTours] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tourPackage } = useSelector((state) => state.TourPackage);

  useEffect(() => {
    dispatch(showTourPackages());
  }, [dispatch]);

  useEffect(() => {
    if (tourPackage) {
      if (tourPackage.honeymoonTours) {
        setHoneyTours(tourPackage.honeymoonTours.slice(0, 3));
      } else {
        console.warn("honeymoonTours not found in tourPackage");
      }
      if (tourPackage.familyTours) {
        setFamilyTours(tourPackage.familyTours.slice(0, 3));
      } else {
        console.warn("familyTours not found in tourPackage");
      }
    }
  }, [tourPackage]);
  const seeMore = () => {
    navigate(`/AllTourPackages`);
  };
  const BookTour = (id) => {
    navigate(`/BookTour?id=${encodeURIComponent(id)}`);
  };

  return (
    <div className="flex flex-col flex-wrap items-center justify-center w-full p-8 space-y-14">
      <h1 className="text-white text-lg smd:text-5xl font-joining bg-[#206eff] p-6 rounded-lg shadow-lg shadow-fade-black">
        Honey-Moon Tour Packages
      </h1>
      <div className="flex flex-row md:mt-0 sssm:mt-72 gap-y-4 flex-wrap w-[100%] md:w-[70%]">
        {HoneyTours.map((tour, index) => (
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
                <h3 className="text-xl text-white font-radios">{tour.name}</h3>
                <h3 className="text-xl text-white font-radios">
                  {tour.price} pkr
                </h3>
              </div>

              <p className="mt-4 text-sm text-white font-radios">
                {tour.description}
              </p>
              <div className="flex flex-row justify-between mt-4 ">
                <h3 className="text-xs text-white font-radios">
                  <span className="text-sm font-radios">Starting From : </span>
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
      <button
        type="button"
        onClick={seeMore}
        className="w-[20%] hover:before:bg-red rounded-xl relative h-[50px] overflow-hidden border border-[#3654ff] bg-[#206eff] px-3 text-white shadow-lg transition-all duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-[#3654ff] hover:shadow-[#3654ff] hover:before:left-0 hover:before:w-full"
      >
        <span className="relative z-10 text-lg text-radios">See More</span>
      </button>

      <h1 className="text-white text-lg smd:text-5xl font-joining bg-[#206eff] p-6 rounded-lg shadow-lg shadow-fade-black">
        Family Tour Packages
      </h1>
      <div className="flex flex-row md:mt-0 sssm:mt-72 gap-y-4 flex-wrap w-[100%] md:w-[70%]">
        {FamilyTours.map((tour, index) => (
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
                <h3 className="text-xl text-white font-radios">{tour.name}</h3>
                <h3 className="text-xl text-white font-radios">
                  {tour.price} pkr
                </h3>
              </div>

              <p className="mt-4 text-sm text-white font-radios">
                {tour.description}
              </p>
              <div className="flex flex-row justify-between mt-4 ">
                <h3 className="text-xs text-white font-radios">
                  <span className="text-sm font-radios">Starting From : </span>
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

      <button
        type="button"
        onClick={seeMore}
        className="w-[20%] hover:before:bg-red rounded-xl relative h-[50px] overflow-hidden border border-[#3654ff] bg-[#206eff] px-3 text-white shadow-lg transition-all duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-[#3654ff] hover:shadow-[#3654ff] hover:before:left-0 hover:before:w-full"
      >
        <span className="relative z-10 text-lg text-radios">See More</span>
      </button>
    </div>
  );
};

export default TourPackages;
