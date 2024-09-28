import React from 'react'
import Button from './Button'


function Navbar() {
    return (
        <div className=' max-w-screen-xl p-6 mx-auto flex items-center justify-between  border-b-[1px] border-zinc-700 '>
            <div className=' flex'>
                <div>
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12H8.5C7.67157 12 7 11.3284 7 10.5V5.5Z" fill="#F26207"></path><path d="M17 12H25.5C26.3284 12 27 12.6716 27 13.5V18.5C27 19.3284 26.3284 20 25.5 20H17V12Z" fill="#F26207"></path><path d="M7 21.5C7 20.6716 7.67157 20 8.5 20H17V26.5C17 27.3284 16.3284 28 15.5 28H8.5C7.67157 28 7 27.3284 7 26.5V21.5Z" fill="#F26207"></path></svg>
                </div>
                <div className='flex gap-10 ml-20 '>
                    {["home", "work", "|", "culture"].map((elem, index) => (
                        <a href="#" key={index} className="text-sm gap-2 flex  justify-center items-center capitalize">
                            {index === 1 && <span className='inline-block w-1 h-1 rounded-full bg-white'></span>}
                            {elem}
                        </a>
                    ))}
                </div>
            </div>
            <Button/>

        </div>
    )
}

export default Navbar