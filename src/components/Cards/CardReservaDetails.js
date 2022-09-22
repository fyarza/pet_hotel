import React from "react";
import PropTypes from "prop-types";

export default function CardReservaDetails({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="px-4 py-3 mb-0 border-0 rounded-t">
          <div className="flex flex-wrap items-center">
            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Reservacion
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <div className="px-6 py-3 ">
            <div className="border px-2 py-1 rounded-lg my-2">
              <label htmlFor="" className="text-black text-base font-bold">
                Pets
              </label>
              <p>3</p>
            </div>
            <div className="border px-2 py-1 rounded-lg my-2">
              <label htmlFor="" className="text-black text-base font-bold">
                Type
              </label>
              <p>Dog</p>
            </div>
            <div className="border px-2 py-1 rounded-lg my-2">
              <label htmlFor="" className="text-black text-base font-bold">
                Breed
              </label>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                velit obcaecati soluta, esse doloribus voluptatibus harum sequi
                cumque vel, sed recusandae itaque, dolorum quibusdam quis nemo
                ipsam voluptatem earum officiis.
              </p>
            </div>
            <div className="border px-2 py-1 rounded-lg my-2">
              <label htmlFor="" className="text-black text-base font-bold">
                Size
              </label>
              <p>20-30kg</p>
            </div>
            <div className="border px-2 py-1 rounded-lg my-2">
              <label htmlFor="" className="text-black text-base font-bold">
                Date Pick
              </label>
              <p>September 22, 2022 9:57 AM</p>
            </div>
            <div className="border px-2 py-1 rounded-lg my-2">
              <label htmlFor="" className="text-black text-base font-bold">
                Number Nights
              </label>
              <p>10</p>
            </div>
            <div className="border px-2 py-1 rounded-lg my-2">
              <label htmlFor="" className="text-black text-base font-bold">
                Location Service
              </label>
              <p>Bogotá, Bogota, Colombia</p>
            </div>
            <div className="border px-2 py-1 rounded-lg my-2">
              <label htmlFor="" className="text-black text-base font-bold">
                Pick Up
              </label>
              <p>Yes</p>
            </div>
            <div className="border px-2 py-1 rounded-lg my-2">
              <label htmlFor="" className="text-black text-base font-bold">
                Status
              </label>
              <p>
                <i className="fas fa-circle text-orange-500 mr-2"></i> pending
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CardReservaDetails.defaultProps = {
  color: "light",
};

CardReservaDetails.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
