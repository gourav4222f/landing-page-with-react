import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    const data = [
        { color:"bg-blue-500" ,url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg", number: 48 },
        { color:"bg-red-500" ,url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9075_63aeda082c152d7b32e74c9d_remind.svg", number: 2 },
        { color:"bg-green-500" ,url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg", number: 11 },
        { color:"bg-yellow-500" ,url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg", number: 48 },
        { color:"bg-purple-500" ,url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5b40b9966a3a112d7_663a6cbf194837f9c0affe8e_logo.svg", number: 2 },
        { color:"bg-pink-500" ,url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg", number: 11 },
    ]


    return (
        <>
            <div className=' flex items-center mt-40'>
                {data.map((elm, index) => <Stripe key={index} val={elm} />)}
            </div>
        </>
    )
}

export default Stripes