import React from 'react'
import TableImage from '../Assets/TableImages.png'
import TableImages1 from '../Assets/TableImages1.jpg'
const Table = () => {
  return (
    <div className="bg-white w-full mt-8 rounded-lg">
        <table>
          <tr>
            <td className="w-[60%] py-3 font-bold text-lg px-2" >Product Sell</td>
            <td colSpan={3} className="w-40 text-center " >
              <div className="flex justify-evenly">
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder="Search" required />
                  </div>

                </div>
                <div>
                  <div>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" bg-white  font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center " type="button">
                      Last 30 Days
                      <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

            </td>

          </tr>
          <tr>
            <td className=" py-3 text-sm px-2" >Product Name</td>
            <td className="w-40 text-center" >Stock</td>
            <td className="w-40 text-center" >Price</td>
            <td className="w-40 text-center" >Total sales</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <hr class="h-px  bg-gray-200 border-0 " />
            </td>
          </tr>
          <tr>
            <td className=" py-3 font-bold text-lg px-2" >
              <div className="flex">
                <img src={TableImage} alt="image" className="h-14 w-28 rounded-lg mr-6" />
                <div className="my-auto">
                  <h1 className="font-bold text-lg ">Abstract 3D</h1>
                  <h3 className="text-xs font-normal ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, esse.</h3>
                </div>
              </div>
            </td>
            <td className="w-40 text-center" >32 in Stock</td>
            <td className="w-40 text-center font-bold" >$45.99</td>
            <td className="w-40 text-center" >20</td>
          </tr>


          <tr>
            <td className=" py-3 font-bold text-lg px-2" >
              <div className="flex">
                <img src={TableImages1} alt="image" className="h-14 w-28 rounded-lg mr-6" />
                <div className="my-auto">
                  <h1 className="font-bold text-lg ">Abstract 3D</h1>
                  <h3 className="text-xs font-normal ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, esse.</h3>
                </div>
              </div>
            </td>
            <td className="w-40 text-center" >32 in Stock</td>
            <td className="w-40 text-center font-bold" >$45.99</td>
            <td className="w-40 text-center" >20</td>
          </tr>
        </table>
      </div>


  )
}

export default Table