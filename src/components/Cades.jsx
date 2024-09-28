import React from 'react'
import Card from './Card'

function Cades() {
    return (
        <>
            <div className=' w-full'>
                <div className=' max-w-screen-xl mx-auto py-20 flex gap-2 '>
                    <Card w={"basis-1/3"} start={false} para={true} />
                    <Card w={"basis-2/3"} start={true} para={false} hover="true"/>
                </div>
            </div>
        </>
    )
}

export default Cades