import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Card({ w, start, para ,hover="false"}) {
    
    return (
        <>
            <motion.div whileHover={{background:hover==="true"?"#7443ff":null , padding:" 25px "}} className={` bg-zinc-700 p-5 rounded-xl ${w} min-h-[40vh] flex flex-col justify-between items-center hover:${hover}`}>
                <div className=' w-full'>
                    <div className=' w-full flex justify-between items-center'>
                        <h3>one heading</h3>
                        <MdOutlineArrowRightAlt />
                    </div>
                    <h1 className=' text-3xl font-medium mt-5'>Who we are</h1>
                </div>

                <div className="down w-full">
                    {
                        start && (<>
                            <h1 className=' text-6xl font-semibold tracking-tight leading-none '>Start a Project</h1>
                            <button className=' border-[1px] border-zinc-50 rounded-full py-2 px-5 mt-5'>Contact US</button>
                        </>)

                    }
                    {
                        para && (
                            <p className=' text-sm text-zinc-500 font-medium '>Lorem ipsum dolor sit amet consectetur Sed.</p>
                        )
                    }


                </div>
            </motion.div>                
        </>
    )
}

export default Card