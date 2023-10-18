import React from 'react'
import circle from '../Assets/123.png'

const Chart = () => {
  return (
    
    <div className="flex flex-wrap justify-between mt-4">
    <div className="rounded-lg  mb-8 overflow-x-auto overflow-y-hidden bg-white w-[700px]">
      <div className="rounded-t-lg bg-white flex justify-between ">
        <div className="p-2">
          <h1 className="text-xl text-center font-bold">Overview</h1>
          <h3 className="text-sm ">Monthely Earning</h3>
        </div>
        <div className="my-auto px-6">Quarterly</div>
      </div>
      <div className="flex justify-between h-80 p-1 rounded-b-lg">

        <div className="m-2  flex flex-col-reverse h-full w-10 rounded-b-lg">
          <div className="text-center  py-4">jan</div>
          <div className="bg-purple-200 rounded-lg h-40 w-full ">
          </div>
        </div>
        <div className="m-2  flex flex-col-reverse h-full w-10 rounded-b-lg">
          <div className="text-center  py-4">feb</div>
          <div className="bg-purple-200 rounded-lg h-28 w-full ">
          </div>
        </div>
        <div className="m-2  flex flex-col-reverse h-full w-10 rounded-b-lg">
          <div className="text-center  py-4">march</div>
          <div className="bg-purple-200 rounded-lg h-52 w-full ">
          </div>
        </div>
        <div className="m-2  flex flex-col-reverse h-full w-10 rounded-b-lg">
          <div className="text-center  py-4">april</div>
          <div className="bg-purple-200 rounded-lg h-[150px] w-full ">
          </div>
        </div>
        <div className="m-2  flex flex-col-reverse h-full w-10 rounded-b-lg">
          <div className="text-center  py-4">may</div>
          <div className="bg-purple-200 rounded-lg h-[170px] w-full ">
          </div>
        </div>
        <div className="m-2  flex flex-col-reverse h-full w-10 rounded-b-lg">
          <div className="text-center  py-4">june</div>
          <div className="bg-purple-200 rounded-lg h-[100px] w-full ">
          </div>
        </div>
        <div className="m-2  flex flex-col-reverse h-full w-10 rounded-b-lg">
          <div className="text-center  py-4">july</div>
          <div className="bg-purple-700 rounded-lg h-[190px] w-full ">
          </div>
        </div>
        <div className="m-2  flex flex-col-reverse h-full w-10 rounded-b-lg">
          <div className="text-center  py-4">aug</div>
          <div className="bg-purple-200 rounded-lg h-[180px] w-full ">
          </div>
        </div>
        <div className="m-2  flex flex-col-reverse h-full w-10 rounded-b-lg">
          <div className="text-center  py-4">sept</div>
          <div className="bg-purple-200 rounded-lg h-[130px] w-full ">
          </div>
        </div>
        <div className="m-2  flex flex-col-reverse h-full w-10 rounded-b-lg">
          <div className="text-center  py-4">oct</div>
          <div className="bg-purple-200 rounded-lg h-[200px] w-full ">
          </div>
        </div>
        <div className="m-2  flex flex-col-reverse h-full w-10 rounded-b-lg">
          <div className="text-center  py-4">nov</div>
          <div className="bg-purple-200 rounded-lg h-[120px] w-full ">
          </div>
        </div>
        <div className="m-2  flex flex-col-reverse h-full w-10 rounded-b-lg">
          <div className="text-center  py-4">dec</div>
          <div className="bg-purple-200 rounded-lg h-[80px] w-full ">
          </div>
        </div>
      </div>
    </div>


    <div className="bg-white p-4 w-[300px] mb-8 rounded-lg ">
      <div><h1 className="text-lg">Customers </h1> <h4 className="text-sm"> Customers that buy product</h4></div>
      <img src={circle} alt="circle" className="w-full " />
    </div>
  </div>
  )
}

export default Chart