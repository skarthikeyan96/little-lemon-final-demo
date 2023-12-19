import React from "react";


const Booking = (props) => {
    console.log(props)
  const [date, setDate] = React.useState("");
  const [occasion, setOccasion] = React.useState("birthday");
  const [guestCount, setGuestCount] = React.useState(0);
  const [time, setTime] = React.useState(props.availableTimes[0]);



  function handleDateChange(e) {
    setDate(e.target.value);
    props.dispatchOnDateChange(e.target.value);
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    props.submitData({ date, time, guestCount, occasion, });
  };



  console.log(date);
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
      <form className="max-w-sm mx-auto flex space-y-4 flex-col" onSubmit={handleFormSubmit}>
        <div>
          <label
            for="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Choose date
          </label>

          <div className="mt-2">
            <input
              type="date"
              id="res-date"
              value={date}
              required
              onChange={handleDateChange}
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            for="res-time"
            className="block text-sm font-medium leading-6 text-gray-900 mt-2"
          >
            Choose time
          </label>
          <div className="mt-2">
            <select
              id="res-time"
              value={props.time}
              onChange={(e) => setTime(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {props.availableTimes.map(times => 
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          )}
            </select>
          </div>
        </div>

        <div>
          <label
            for="res-time"
            className="block text-sm font-medium leading-6 text-gray-900 mt-2"
          >
            No of guests
          </label>
          <div className="mt-2">
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              required
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              id="guests"
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            for="occasion"
            className="block text-sm font-medium leading-6 text-gray-900 mt-2"
          >
            Occasion
          </label>
          <div className="mt-2">
            <select
              id="occasion"
              required
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>

        <input
          type="submit"
          className="cursor-pointer bg-[#f4ce15] text-gray mt-4 py-2.5 px-5  text-sm font-medium "
          value="Make Your reservation"
        />
      </form>
    </div>
  );
};

export default Booking;
