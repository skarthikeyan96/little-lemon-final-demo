import React from "react";
import Logo from "../images/Logo.png";
import { Routes, Route, Link } from "react-router-dom";
import Booking from "./Booking";
import { fetchAPI, submitAPI } from "../bookingApi";
import { useNavigate } from "react-router-dom";
import Landing from '../components/Landing'
const Navbar = () => {
  const [isVisible, setVisibility] = React.useState(false);

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const navigate = useNavigate();

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const submitData = (formData) => {
    const response = submitAPI(formData);
    console.log(response);
    if (response) navigate("/confirmed-booking");
  };

  const [availableTimes, dispatchOnDateChange] = React.useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <>
      <nav className="bg-white-800 text-black shadow-none lg:shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-sm md:shadow-none">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img className="h-8 w-auto" src={Logo} alt="Logo" />
                <span className="text-white text-xl font-semibold ml-2">
                  Your Brand
                </span>
              </Link>
            </div>

            <div className="flex items-center -mr-2 sm:hidden">
              <button
                type="button"
                className="text-gray-900"
                aria-expanded="false"
                onClick={() => setVisibility(!isVisible)}
              >
                <span className="sr-only">Toggle navigation</span>
                <svg
                  className="h-6 w-6"
                  fill="purple"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <ul className="flex space-x-4 items-center">
                <li>
                  <Link
                    to="/Landing"
                    className="text-gray-900  px-3 py-2 rounded-md font-medium"
                  >
                    Home
                  </Link>
                </li>
            
                <li>
                  <Link
                    to="/booking"
                    className="text-gray-900  block px-3 py-2 rounded-md font-medium"
                  >
                    Reservations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {isVisible && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/Landing"
                className="text-gray-900  px-3 py-2 rounded-md font-medium"
              >
                Home
              </Link>
             

              <Link
                to="/booking"
                className="text-gray-900  block px-3 py-2 rounded-md font-medium"
              >
                Reservations
              </Link>
            </div>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/Landing" element={<Landing/>} />

        <Route
          path="/confirmed-booking"
          element={
            <div className="max-w-7xl text-center pt-4 mx-auto">
              <h2>Your reservation has been confirmed.</h2>
            </div>
          }
        />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={availableTimes}
              submitData={submitData}
              dispatchOnDateChange={dispatchOnDateChange}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Navbar;
