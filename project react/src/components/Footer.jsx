import React from 'react'

function Footer() {
    return (
        <>
            <div className='w-full'>
                <div className=' max-w-screen-xl py-10 flex mx-auto gap-32'>
                    <div className=' basis-1/2'>
                        <h1 className=' text-[11rem] font-semibold leading-none tracking-tight'>Refokus.</h1>
                    </div>
                    <div className=' basis-1/2  flex gap-4'>
                        <div className=' basis-1/3'>
                            <h1 className=' mb-10 text-zinc-400 capitalize'>Socials</h1>
                        {["instagram","twitter (X?)","LinkedIn"].map((elem,index)=> <a key={index} className=' block mt-3 text-zinc-600 capitalize' href="">{elem}</a>)}                        
                        </div>

                        <div className=' basis-1/3'>
                            <h1 className=' mb-10 text-zinc-400 capitalize'>Socials</h1>
                        {["instagram","twitter (X?)","LinkedIn"].map((elem,index)=> <a key={index} className=' block mt-3 text-zinc-600 capitalize' href="">{elem}</a>)}                        
                        </div>

                        <div className=' basis-1/2 flex flex-col items-end'>
                            <p className=' text-right text-sm'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque libero nihil omnis incidunt porro delectus laboriosam dicta 
                            </p>
                            <img className='mt-10 w-42' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer