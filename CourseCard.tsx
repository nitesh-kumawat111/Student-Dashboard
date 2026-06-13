"use client"
import { motion } from "framer-motion"



type CourseCardProps = {
  title: string;
  progress: number;
};

import {  Laptop } from "lucide-react"
export default function CourseCard({ title, progress }: CourseCardProps) {

  
    const item = {
      hidden: { opacity: 0, y: 40 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring"  as  const,
          stiffness: 200,
          damping: 20,
        },
      },
    }
  
  return (

    <motion.section
    
    >


    <motion.section
        variants={item}
     whileHover={{
    scale: 1.02,
    borderColor: "#2a2b42"
  }}
  
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20,
    
  }}
  
  className="lg:w-78 max-w-95 sm:w-115 h-40 lg:h-56 flex  flex-row  lg:flex-col m-4 text-white 
  bg-[radial-gradient(circle_at_40%_40%,_#e20ef5,_#991ad4,_#690b75)]
    
      m-1 lg:w-80 max-w-120  lg:mt-2   ml-8 lg:ml-1 lg:h-68 h-58 rounded-4xl">
         

      <h2 className="w-24 mb-1 bg-purple-400 h-24  lg:ml-28 ml-2 mt-1   rounded-xl">
        <Laptop  className="   w-26 h-26" size={90} color="#570c69" strokeWidth={1.25} />
        
      </h2>
    
       <section>
      <h2 className="w-76 mb-1  h-12 text-xl ml-1 pl-4 pt-2 rounded-xl">
        {title}
      </h2>

      <label className="mt-1 ml-5 block">
        Progress = {progress}%
      </label>


      <progress
        className="mt-1  h-2 w-65 ml-5  text-orange-500 rounded-2xl"
        max={100}
        value={progress}
      />
      <button className=" flex flex-row mt-3 bg-red-500  w-48 h-8 ml-4 
       pl-4 pb-4 pr-4 mr-2 text-lg rounded-3xl">Continue Learning</button>
       </section>
    
    </motion.section>
    </motion.section>
  );
}