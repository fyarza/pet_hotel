import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function WizardFormSixPage({ previousPage, handleSubmit }) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Please pick starting date of the service
      </h3>
      <div className="relative w-full mb-3">
        <DatePicker
          className="w-full"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          // timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
      <div className="flex items-center justify-between mt-6 ">
        <div className="text-center ">
          <button
            className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
            type="bottom"
            onClick={previousPage}
          >
            Previus
          </button>
        </div>
        <div className="text-center">
          <button
            className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default WizardFormSixPage;
