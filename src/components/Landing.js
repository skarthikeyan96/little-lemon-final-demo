import Salad from '../images/greek_salad.png'
import LemonDessert from '../images/lemon_dessert.jpg'
import RestFood from '../images/restauranfood.jpg'

import {Link} from 'react-router-dom'


const Landing = () => {
  return (
    <>
      <div className="bg-[#4c615a] text-white">
        <div className="max-w-5xl flex mx-auto px-8 py-8 mx-auto justify-between space-x-4">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-5xl font-normal">Little Lemon</h2>
            <p className="text-2xl font-medium">Chicago</p>

            <p className="text-xl font-medium text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button className="cursor-pointer bg-[#f4ce15] text-gray-600 mt-4 py-2.5 px-5 text-sm font-medium">
              Reserve a Table
            </button>
          </div>
          <div>
            <img className="object-cover h-48 w-96" src={Salad} />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">This weeks specials</h2>
          <button className="cursor-pointer bg-[#f4ce15] text-gray-600 mt-4 py-2.5 px-5 text-sm font-medium">
            Online Menu
          </button>
        </div>

        <div className="flex space-x-4">
          <div className="max-w-xs rounded overflow-hidden shadow-lg pt-8">
            <img
              className="w-full"
              src={LemonDessert}
              alt="Lemon Dessert"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Lemon Dessert</div>
              <p className="text-gray-700 text-base">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
              </button>
            </div>
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg pt-8">
            <img
              className="w-full"
              src={Salad}
              alt="Salad"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Greek Salad</div>
              <p className="text-gray-700 text-base">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
              </button>
            </div>
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg pt-8">
            <img
              className="w-full w-auto h-56"
              src={RestFood}
              alt="Restaurant Food"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Sushi</div>
              <p className="text-gray-700 text-base">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-4 my-4">
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla nec purus feugiat, molestie ipsum et, consequat nibh."
                </p>
              </div>
              <div className="px-6 py-4">
                <p className="font-semibold text-md">John Doe</p>
                <p className="text-gray-600 text-sm">CEO, Company ABC</p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-4 my-4">
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium."
                </p>
              </div>
              <div className="px-6 py-4">
                <p className="font-semibold text-md">Jane Smith</p>
                <p className="text-gray-600 text-sm">Designer, Company XYZ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white-800 text-gray-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <p>&copy; 2023 Little Lemon </p>
            <p className="text-sm">All rights reserved.</p>
          </div>
          <div>
            <Link to="/Landing" className="text-gray-600 hover:text-white px-3">
              Home
            </Link>
            <Link to="/booking" className="text-gray-600 hover:text-white px-3">
              About
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing
