"use client"
import { useState } from "react"

import {
    X, CalendarDays, LogOut, LayoutDashboard, Box,
    BookCheck, ClipboardPenLine, MessageCircleMore,
    SquareUser, Settings, Menu
} from "lucide-react"





export default function Sidebar() {

    const [isOpen, setIsOpen] = useState<boolean>(true)
    const toggleNav = () => {



        setIsOpen(!isOpen);





    }


    return (
        <>


            <nav className=" mt-2 h-20 md:h-160 lg:h-160 bg-[radial-gradient(circle_at_30%_40%,_#3b82f6,_#1e3a8a,_#020676)] text-white  rounded-lg ">
                <button
                    className="md:hidden bg-blue-400 w-14 h-14 m-4 rounded-full"
                    onClick={toggleNav}
                >
                    <Menu className="text-white mx-auto" />
                </button>
                <section className={` transition-all duration-100 w-0 hidden   md:block md:w-40
             ${isOpen ? "lg:w-70" : "lg:w-40"}  `}>
                    <section className=" flex flex-row justify-between">
                        <h1 className=" w-34 h-16 pt-7 pl-7 text-2xl">Navbar</h1>

                        <button className="w-12 btn h-10 mt-3 ml-2 mr-3" onClick={toggleNav} ><X className="ml-2 w-6 h-6 mt-2 mr-2" /></button>
                    </section>

                    <section className="mt-2  text-center  h-136 pt-4 mr-4 ml-2 pl-2">
                        <ul >
                            <li className=" flex flex-row   mt-1 bg-blue-600  h-10 pt-2 pl-8 mr-2 text-lg rounded-3xl"> <LayoutDashboard className="mr-2 ml-8" />{isOpen && <span className="hidden lg:inline">Dashboard</span>}</li>

                            <li className="mt-1 flex flex-row bg-blue-900  hover:bg-blue-600  h-10 pt-2 pl-8 mr-2 text-lg rounded-3xl">
                                <Box className="mr-2 ml-8" />{isOpen && <span className="hidden lg:inline"> My Courses </span>}</li>
                            <li className="mt-1 flex flex-row bg-blue-900  hover:bg-blue-600 h-10 pt-2 pl-8 mr-2 text-lg rounded-3xl">
                                <BookCheck className="mr-2 ml-8" />{isOpen && <span className="hidden lg:inline">Assignment </span>}</li>
                            <li className="mt-1 flex flex-row bg-blue-900  hover:bg-blue-600 h-10 pt-2 pl-8 mr-2 text-lg rounded-3xl">
                                <CalendarDays className="mr-2 ml-8" />{isOpen && <span className="hidden lg:inline">Calender </span>}</li>
                            <li className="mt-1 flex flex-row bg-blue-900  hover:bg-blue-600 h-10 pt-2 pl-8 mr-2 text-lg rounded-3xl">
                                <ClipboardPenLine className="mr-2 ml-8" /> {isOpen && <span className="hidden lg:inline">Grades </span>}</li>
                            <li className="mt-1 flex flex-row bg-blue-900  hover:bg-blue-600 h-10 pt-2 pl-8 mr-2 text-lg rounded-3xl">
                                <MessageCircleMore className="mr-2 ml-8" />{isOpen && <span className="hidden lg:inline">Messages </span>}</li>
                            <li className="mt-1 flex flex-row bg-blue-900  hover:bg-blue-600 h-10 pt-2 pl-8 mr-2 text-lg rounded-3xl">
                                <SquareUser className="mr-2 ml-8" />{isOpen && <span className="hidden lg:inline">Profile </span>}</li>

                            <li className="mt-1 flex flex-row bg-blue-900  hover:bg-blue-600 h-10 pt-2 pl-8 mr-2 text-lg rounded-3xl">
                                <Settings className="mr-2 ml-8" />{isOpen && <span className="hidden lg:inline">Settings </span>}</li>

                            <li className=" flex flex-row mt-15 bg-gradient-to-r from-red-600 to-orange-500   h-10 pt-2 pl-8 pr-4 mr-2 text-lg rounded-3xl"><LogOut />{isOpen && <span className="hidden lg:inline">Log Out </span>}</li>
                        </ul>

                    </section>

                </section>
            </nav>

           


        </>
    )
}





