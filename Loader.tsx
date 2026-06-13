"use client"
import { motion } from "framer-motion"
export default function Loader() {


     const item = {
      show: { opacity: 1, y: 0 },
      hidden: {
        opacity: 0,
        y: -20,
      
      },
    }
  return (
    <motion.section 
    variants={item}
     initial="show"
  animate="hidden"
    className="grid ml-1  w-8 h-8  flex flex-row mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 p-1">
      
      <section className="col-span-2 h-4 bg-gray-900 animate-pulse rounded-4xl"></section>
      <section className="col-span-2 h-4 bg-gray-900 animate-pulse rounded-4xl"></section>
     
      <section className="col-span-2 h-4 bg-gray-900 animate-pulse rounded-4xl"></section>
      

    </motion.section>
  )
}