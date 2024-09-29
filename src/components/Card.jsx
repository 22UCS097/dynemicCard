import React from 'react'
import { motion } from "framer-motion"

import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";



function Card({data,reference}) {
    console.log(data.tag.tagColor);
    return (
        <motion.div  drag dragConstraints={reference} whileDrag={{scale:1.2}} className=' relative w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
          <FaFileAlt/>
          <p className="text-sm mt-5 leaning-tight font-semibold">{data.desc}</p>
             <div className="footer absolute bottom-0 w-full  left-0 ">
                 <div className="flex item-center justify-between px-8 py-3 mb-3 ">
                    <h5>{data.filesize}</h5>
                    <span className="w-7 h-7 bg-zinc-600  rounded-full flex items-center justify-center ">
                         {data.close ? <IoCloseSharp />
                           :<MdOutlineFileDownload color="#fff"/>}
                    </span>
                  </div>
                   {
                    data.tag.isOpen && (   
                   <div className={`tag w-full py-4 bg-green-400 flex item-center justify-center`}>
                    <h3 className="text-sm-semibold">{data.tag.tagTitle}</h3>
                    </div>

                    )}

            </div>
        </motion.div>
        
    )
}

export default Card
