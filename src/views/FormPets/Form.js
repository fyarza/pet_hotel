import React from "react";
import { useState } from "react";
import TransmisionEnVivo from "./TransmisionEnVivo";
import WizardFormEightPage from "./WizardFormEightPage";
import WizardFormFirstPage from "./WizardFormFirstPage";
import WizardFormFivePage from "./WizardFormFivePage";
import WizardFormFourPage from "./WizardFormFourPage";
import WizardFormNinePage from "./WizardFormNinePage";
import WizardFormSecondPage from "./WizardFormSecondPage";
import WizardFormSevenPage from "./WizardFormSevenPage";
import WizardFormSixPage from "./WizardFormSixPage";
import WizardFormThreePage from "./WizardFormThreePage";

export default function FormPet() {
  const [page, setPage] = useState(1);

  const next = () => {
    setPage(page + 1);
  };
  const previus = () => {
    setPage(page - 1);
  };
  return (
    <>
      <div className="container h-full px-4 mx-auto">
        <div className="flex items-center content-center justify-center h-full">
          <div className="w-full px-4 lg:w-6/12">
            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200">
              <div className="px-6 py-6 mb-0 rounded-t">
                <div className="mb-3 text-center">
                  <h6 className="text-sm font-bold text-blueGray-500">
                    Form Pet
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <div className="mb-3 font-bold text-center text-blueGray-400">
                  {/* <small>How many pets do you need to board?</small> */}
                </div>
                {page === 1 && <WizardFormFirstPage handleSubmit={next} />}
                {page === 2 && (
                  <WizardFormSecondPage
                    handleSubmit={next}
                    previousPage={previus}
                  />
                )}
                {page === 3 && (
                  <WizardFormThreePage
                    handleSubmit={next}
                    previousPage={previus}
                  />
                )}
                {page === 4 && (
                  <WizardFormFourPage
                    handleSubmit={next}
                    previousPage={previus}
                  />
                )}
                {page === 5 && (
                  <WizardFormFivePage
                    handleSubmit={next}
                    previousPage={previus}
                  />
                )}
                {page === 6 && (
                  <WizardFormSixPage
                    handleSubmit={next}
                    previousPage={previus}
                  />
                )}
                {page === 7 && (
                  <WizardFormSevenPage
                    handleSubmit={next}
                    previousPage={previus}
                  />
                )}
                {page === 8 && (
                  <WizardFormEightPage
                    handleSubmit={next}
                    previousPage={previus}
                  />
                )}
                {page === 9 && (
                  <WizardFormNinePage
                    handleSubmit={next}
                    previousPage={previus}
                  />
                )}
                {page === 10 && <TransmisionEnVivo />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
