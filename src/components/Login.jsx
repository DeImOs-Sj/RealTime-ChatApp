import React from 'react'

export default function Login() {
  return (
    <div className=''>
    <div className='m-[150px]'>
        <div className='bg-[#7257A8] opacity-70 h-[200px]  rounded-xl'>
           <h1 className='text-white pt-[80px] font-bold text-4xl'>Django Chat</h1> 
        </div>
        <br />
        <div className='bg-[#8DA857] opacity-70 h-[200px] rounded-xl'>
            <form action="" className='pt-[40px]'>
                <h1 className='text-black flex justify-start pb-2 font-semibold text-xl pl-[25px] hover:text-[#7257A8] cursor-pointer '>Room Name : </h1>
                <input type="text" className='w-[1000px] rounded-[5px] shadow-sm'/>
                <h1 className='text-black flex justify-start pb-2 pt-2 font-semibold text-xl pl-[25px] cursor-pointer hover:text-[#7257A8] '>Username :</h1>
                <input type="text" className='w-[1000px] rounded-[5px]'/>
            </form>
        </div>
    </div>
    </div>
  )
}
