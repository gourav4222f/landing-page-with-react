import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { tr } from 'framer-motion/client'

function Work() {

    const [img, setImg] = useState([
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8846629f4e91cbfc152_Cula%20-%204%203.webp", top:"45%", left: "50%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d7f33bdfd7f713ff552d_Singularity%20-%204%203.webp", top:"54%", left: "34%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203.webp", top:"79%", left: "43%", isActive: false},
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d00aad489e305be67378_ProjectName%20-%2016%209%20(B)-p-1080.webp", top:"84%", left: "30%", isActive: false},
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86ccd1552e692874437_Arqitel%20-%2016%209%20(B)-p-1080.webp", top:"98%", left: "55%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d000c5875a51723e197f_Brightwave%20-%204%203.webp", top:"68%", left: "66%", isActive: false },
    ])



    const { scrollYProgress } = useScroll()

    function showimg(arr) {
        setImg(prev => (
            prev.map((item, index) => (
                arr.includes(index) ? { ...item, isActive: true } : { ...item, isActive: false }
            ))
        ))
}


scrollYProgress.on("change", (data) => {
    switch (Math.floor(data * 100)) {
        case 0:
            showimg([])
            break;
        case 1:
            showimg([0])
            break;
        case 2:
            showimg([0, 1])
            break;
        case 3:
            showimg([0, 1, 2])
            break;
        case 4:
            showimg([0, 1, 2, 4])
            break;
        case 5:
            showimg([0, 1, 2, 4, 5])
            break;
        case 6:
            showimg([0, 1, 2, 4, 5, 3])
            break;

        default:
            break;
    }
})



return (
    <div className=' w-full mt-10'>
        <div className=' relative max-w-screen-xl mx-auto text-center'>
            <h1 className=' text-[50vh] leading-none font-medium select-none tracking-tighter'>work</h1>
            <div className=' absolute top-0 w-full h-full'>
                {img.map((elm, index) => elm.isActive && (<img key={index} className=' absolute w-72 rounded-lg -translate-y-1/2 -translate-x-1/2' style={{ top: elm.top, left: elm.left }} src={elm.url} alt={`Image ${index + 1}`} />))}

            </div>
        </div>
    </div>
)
}

export default Work