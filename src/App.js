import './App.css';
import LeftSidebar from './Components/LeftSidebar';
import Cards from './Components/Cards'
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Chart from './Components/Chart';
import Table from './Components/Table';

function App() {
  const [hidden, show] = useState("hidden")

  function handleClick() {
    if (hidden === "hidden") show("block")
    else show("hidden")
  }

  return (
    <div className='bg-slate-100'>
      <AiOutlineMenu className='items-end absolute right-4 block sm:block md:hidden top-2' onClick={handleClick}>show</AiOutlineMenu>
      <div className='flex'>
        <div className={`sm:${hidden} ${hidden} md:block  w-[300px]`}>
          <LeftSidebar />
        </div>
            <div className="p-4 w-full">
                     <Cards />
                     <div className="p-4 w-full">      
                     <Chart/>
                     <Table/>
                     </div>
                </div>
      </div>
    </div>
  );
}

export default App;
