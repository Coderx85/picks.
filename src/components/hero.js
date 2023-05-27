import React from 'react';
import { Link } from "react-router-dom";


function hero() {
  return (
    <div className='grid grid-cols-3 p-1 gap-4'>

    <div className='drop-shadow-lg h-screen sticky top-0 text-black bg-stone-300 w-full border border-zinc-300 rounded-lg m-2 row-span-2'>
        
        <div className=' p-4 font-bold text-green-700'>
            <p>POPULAR</p>
        </div>

        <Link to={""}>
            <p className="mx-4 p-1">Soccer</p>
        </Link>
        <Link to={""}>
            <p className="mx-4 p-1" >Basketball</p>
        </Link>
        <Link to={""}>
            <p className="mx-4 p-1" >Hockey</p>
        </Link>
        <Link to={""}>
            <p className="mx-4 p-1" >Boxing</p>
        </Link>
        <Link to={""}>
            <p className="mx-4 p-1" >MMA</p>
        </Link>
        <Link to={""}>
            <p className="mx-4 p-1" >UFC</p>
        </Link>
        
        <div className=' px-4 py-4 font-bold text-green-700'>
            <p className='p-1'>OTHER</p>
        </div>
        
        <Link to={""}>
            <p className="mx-4 p-1" >Tennis</p>
        </Link>
        <Link to={""}>
            <p className="mx-4 p-1" >Volleyball</p>
        </Link>
        <Link to={""}>
            <p className="mx-4 p-1" >Table Tennis</p>
        </Link>
        <Link to={""}>
            <p className="mx-4 p-1" >Esports</p>
        </Link>
        
    </div>

    <div>
        <div className='drop-shadow-2xl top-0 text-black bg-stone-300 border border-zinc-300 rounded-lg mx-1 my-2 row-span-2'>

            <div className='px-4 py-4 font-bold text-zinc-700'>
                <p className='text-4xl p-1'>Join the winner's club:  <span className='text-green-700'>picks.</span>top betting picks!</p>
            </div>
        </div>

        {/* Search Bar */}

     </div>
        <div className='drop-shadow-2xl w-full top-0 text-black bg-stone-300 border border-zinc-300 rounded-lg mx-1 my-2 row-span-2'>

                <div className='px-4 py-4 font-bold text-zinc-700'>
                    <p className='text-4xl p-1'>THis is my right sidebar </p>
                </div>
        </div>

     <div>
        <div className='drop-shadow-2xl w-full top-0 text-black bg-green-300 border border-zinc-300 rounded-lg mx-1 my-2 '>

            <div className='px-4 py-4 font-bold text-zinc-700'>
                <p className='text-4xl p-1'>home  </p>
            </div>
        </div>


     </div>

        
</div>
    
  )
}

export default hero