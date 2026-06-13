


"use client"
import { motion } from "framer-motion"

export default function Header() {

    const item = {
      hidden: { opacity: 0, y: -100 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring"  as  const,
          stiffness: 400,
          damping: 20,
        },
      },
    }
    return (
        <>
            <motion.section
            
     whileHover={{
    scale: 1.02,
    borderColor: "#2a2b42"
  }} 
            variants={item}
            initial="hidden"
            animate="show"
            className=" bg-[url('/hero-card-image.png')] bg-cover bg-center
             h-full-2 w-full-2 lg:col-span-9 lg:ml-3 lg:mr-5  col-span-1 lg:row-span-3  row-span-3 rounded-4xl ">

                <h1 className="  text-4xl text-center mt-8 text-white"> Welcome Back , </h1>
                    
                 <h1 className="mt-3  text-center font-bold bg-gradient-to-r from-blue-400/70 via-purple-500/60 to-indigo-900/80 text-transparent bg-clip-text text-4xl">Nitesh  Kumawat !</h1>
                    <br></br>
                    <br></br> <p className="text-xl text-center mt-1 text-white"> Continue Your Learning Journey  </p> 

            </motion.section>

        </>
    )
}
