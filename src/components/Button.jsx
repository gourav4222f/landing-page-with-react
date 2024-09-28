import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title="GET start"}) {
  return (
    <button className=' px-10 py-2 bg-zinc-100 text-black rounded-full hover:bg-zinc-200 hover:shadow-glow justify-center items-center flex gap-4'>
        <span>{title}</span>
        <IoIosReturnRight/>
    </button>
  )
}

export default Button