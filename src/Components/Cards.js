import React from "react";
import Earning from "../Assets/Earning.png"
import Orders from "../Assets/orders.png"
import Wallet from "../Assets/wallet.png"
import totalsales from "../Assets/totalsales.png"
import up from '../Assets/up.png'
import down from '../Assets/down.png'
function Cards() {
  return (
    <div className="p-4  ">

      <div className="flex w-full mt-4 mb-8 justify-between">
        <h1 className="text-lg"> Hello Vikas  Singh👋</h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder="Search" required />
        </div>

      </div>


      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8 max-w-screen-xl mx-auto ">

        <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <div className="w-1/2 flex p-4 justify-center items-center">
            <img
              className=" object-cover rounded-full w-full"
              src={Earning}
              alt="Card image"
            />
          </div>
          <div className="w-1/2 mt-3 p-2">
          <p className="text-gray-300">Earning</p>
            <h1 className="text-xl  font-semibold">$198k</h1>
            <p><span className="text-green-400 flex text-sm"><img className="w-3 h-3 mt-1" src={up} alt=""/>11%<p className="text-black">this month</p></span></p>
            
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <div className="w-1/2 flex p-4 justify-center items-center">
            <img
              className=" object-cover rounded-full w-full"
              src={Orders}
              alt="Card image"
            />
          </div>
          <div className="w-1/2 mt-3 p-2">
          <p className="text-gray-300">Orders</p>
            <h1 className="text-xl  font-semibold">$2.4k</h1>
            <p><span className="text-red-400 flex text-sm"><img className="w-3 h-3 mt-1" src={down} alt=""/>2%<p className="text-black">this month</p></span></p>
            
            
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <div className="w-1/2 flex p-4 justify-center items-center">
            <img
              className=" object-cover rounded-full w-full"
              src={Wallet}
              alt="Card image"
            />
          </div>
          <div className="w-1/2 mt-3 p-2">
          <p className="text-gray-300">Balance</p>
            <h1 className="text-xl  font-semibold">$2.4k</h1>
            <p><span className="text-red-400 flex text-sm"><img className="w-3 h-3 mt-1" src={down} alt=""/>2%<p className="text-black">this month</p></span></p>
            
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <div className="w-1/2 flex p-4 justify-center items-center">
            <img
              className=" object-cover rounded-full w-full"
              src={totalsales}
              alt="Card image"
            />
          </div>
          <div className="w-1/2 mt-3 p-2">
          <p className="text-gray-300">Totel Sales</p>
            <h1 className="text-xl  font-semibold">$2.4k</h1>
            <p><span className="text-green-400 flex text-sm"><img className="w-3 h-3 mt-1" src={up} alt=""/>11%<p className="text-black">this month</p></span></p>
            </div>
        </div>



      </div>
       {/* <Chart/>
       <Table/> */}
</div>
  );
}

export default Cards;
