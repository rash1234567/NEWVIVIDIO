import React from "react";
import { useUserAuth } from "../utilities/UserAuthContextProvider";

export default function Alert() {
  const {showAlert, setShowAlert,errorMessage} = useUserAuth()
  return (
    <>
      {showAlert ? (
        <>
          <div
            className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-red-800 outline-none focus:outline-none">
                {/*header*/}
                {/*body*/}
                <div className="relative flex flex-row px-2">
                  <p className="my-4 text-white text-lg pl-4 leading-relaxed">
                   {errorMessage}
                  </p>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowAlert(false)}
                  >
                    x
                  </button>
                </div>
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}