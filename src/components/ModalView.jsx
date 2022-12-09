import React from "react";
import { useUserAuth } from '../utilities/UserAuthContextProvider';

export default function ModalView({showModal, setShowModal,closeModal,title,img,overview,id,name}) {
  const {findYoutubeId} = useUserAuth();
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center sm:h-[90%] md:w-4/5 mx-auto items-center flex fixed inset-0 z-[1000] outline-none focus:outline-none"
          >
            <div className="relative lg:w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl text-[#171029] font-semibold">
                   {title || name}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative md:p-6 flex flex-col md:flex-row justify-between">
                    <img src={img} className="md:w-[200px] w-full h-64 " alt="" />
                    { overview.length < 500?
                      <p className=" p-2 md:p-4 ml-2 text-lg leading-relaxed text-[#171029] font-semibold">
                        {overview}
                    </p>
                    :
                    <p className="p-2 md:p-4 ml-2 text-sm leading-relaxed text-[#171029] font-semibold">
                    {overview}
                </p>
                    }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" text-white bg-[#1b1818aa] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>findYoutubeId(id)} 
                  >
                    Trailer
                  </button>
                  <button
                    className=" text-[#171029] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Watch List
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}