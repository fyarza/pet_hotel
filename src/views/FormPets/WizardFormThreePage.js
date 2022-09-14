import React from "react";

function WizardFormThreePage({ previousPage, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        What breed is it?
      </h3>
      <div className="relative w-full mb-3">
        <input
          type="text"
          className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
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

export default WizardFormThreePage;
