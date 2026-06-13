


import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import CourseList from "@/components/CourseList"
import Loader from "@/components/Loader"
import { supabase } from "@/lib/supabaseClient"

import { BookOpen, Flame, Bell, EllipsisVertical, CircleUser } from "lucide-react"



export default async function Home() {

   


  // RSC fetching

  const { data: courses, error } = await supabase
    .from("courses table")
    .select("*")

  if (error) {
    return <p>error loading </p>
  }




  return (
    <>
      {/*  web Page Starting  */}

      <main className="flex flex-col  h-340">

        {/*  Top NavBar  */}
        <nav className="flex flex-row  justify-between  
         bg-[radial-gradient(circle_at_60%_30%,_#3b82f6,_#1e3a8a,_#020676)] text-white 
          rounded-b-3xl min-w-40 lg:h-20 h-40">


          <h1 className="lg:w-68  w-50 flex flex-row justify-between mt-5 lg:ml-12 ml-4">
            <BookOpen className="mt-2 text-xl" />
            <section className=" text-xl lg:text-3xl">Student Dasboard </section>
          </h1>

          <input className="lg:w-140 w-60 h-10 mr-8 ml-12 lg:mt-5 mt-2 pl-4 pl-4   bg-blue-500 rounded-3xl" type="text" placeholder="search your query"></input>

          <section className="flex flex-row mr-12 justify-evenly">
            <Bell className=" lg:w-10 w-6 h-8 mt-5 mr-2" />
            <EllipsisVertical className=" lg:w-10 w-6 h-7 mt-5 mr-2" />
            <CircleUser className=" lg:w-10  w-6 h-7 mt-5 mr-2 ml-4" />

          </section>

          {/*  Collapsible SideNav Bar   */}
        </nav>

        <main className="flex flex-row  h-340">

          {/*  SideNav Component  */}
          <Sidebar />



          {/*  Main Content Area  */}

          <section className=" grid gap-2 lg:grid-cols-9 grid-cols-1  
            lg:grid-rows-9 grid-rows-18 bg-[#13005A] lg:h-220 h-420  sm:w-220  lg:w-300 w-130 mt-4 mr-2 ml-1">


            {/* Welcome Tile components */}

            <Header />



            {/* Activity  Tile    */}
            <section className="  bg-[radial-gradient(circle_at_30%_40%,_#3b82f6,_#1e3a8a,_#020676)] 
              lg:col-span-6 lg:row-span-3  col-span-1 row-span-3 bg-blue-400 rounded-4xl ">


              <h1 className="  mt-2 text-3xl text-bold text-white text-center "> Activity  Tile </h1>

              <section className="w-70 h-55 ">

                <section className="flex flex-row justify-evenly w-76 lg:ml-37 sm:ml-25   h-49">


                  <section className=" h-48 w-2  mt-3 bg-gradient-to-r
                   from-indigo-800 to-indigo-400 "></section>



                  <section className="flex flex-row mr-8  lg:mr-1 justify-evenly">
                    <section className=" h-4 lg:w-4 sm:w-4 w-3 lg:ml-4 sm:ml-3 ml-2 mt-46 bg-gradient-to-r from-indigo-800 tm-indigo-400 "></section>
                    <section className=" h-4 lg:w-4 sm:w-4 w-3 lg:ml-4 sm:ml-3 ml-2 mt-46 bg-gradient-to-r from-indigo-800 tm-indigo-400 "></section>
                    <section className=" h-14 lg:w-4 sm:w-4 w-3 lg:ml-4 sm:ml-3 ml-2 mt-35 bg-gradient-to-r from-indigo-800 to-indigo-400 "></section>
                    <section className=" h-24 lg:w-4 sm:w-4 w-3 lg:ml-4 sm:ml-3 ml-2 mt-25 bg-gradient-to-r from-indigo-800 to-indigo-400 "></section>
                    <section className=" h-34 lg:w-4 sm:w-4 w-3 lg:ml-4 sm:ml-3 ml-2 mt-15 bg-gradient-to-r from-indigo-800 to-indigo-400 "></section>
                    <section className=" h-38 lg:w-4 sm:w-4 w-3 lg:ml-4 sm:ml-3 ml-2 mt-11 bg-gradient-to-r from-indigo-800 to-indigo-400 "></section>
                    <section className=" h-40 lg:w-4 sm:w-4 w-3 lg:ml-4 sm:ml-3 ml-2 mt-9 bg-gradient-to-r from-indigo-800 to-indigo-400 "></section>
                    <section className=" h-24 lg:w-4 sm:w-4 w-3 lg:ml-4 sm:ml-3 ml-2 mt-25 bg-gradient-to-r from-indigo-800 to-indigo-400 "></section>
                    <section className=" h-34 lg:w-4 sm:w-4 w-3 lg:ml-4 sm:ml-3 ml-2 mt-15 bg-gradient-to-r from-indigo-800 to-indigo-400 "></section>

                  </section>

                </section>

                <section className=" lg:w-94 sm:w-82 w-78 h-2 lg:ml-40 sm:ml-30 ml-23  border-black  bg-gradient-to-r from-indigo-700 to-indigo-400 "></section>

              </section>


            </section>


            {/* Daily Streak  */}

            <section className="bg-[radial-gradient(circle_at_50%_50%,_#6074e4,_#2a27e6,_#102eb3)]
              lg:col-span-3 lg:row-span-3  col-span-1 row-span-3  bg-blue-400 rounded-4xl ">

              <h1 className="  mt-2 text-3xl text-white text-bold text-center "> Daily Streak  </h1>
              <Flame className="ml-29" size={76} color="#020408" strokeWidth={1.25} />

              <section className="flex flex-row   h-30">
                <Flame className="ml-2 mt-4" size={40} color="#020408" strokeWidth={1.75} />
                <Flame className="ml-2 mt-4" size={40} color="#020408" strokeWidth={1.75} />
                <Flame className="ml-2 mt-4" size={40} color="#020408" strokeWidth={1.75} />
                <Flame className="ml-2 mt-4" size={40} color="#020408" strokeWidth={1.75} />
                <Flame className="ml-2 mt-4" size={40} color="#020408" strokeWidth={1.75} />
                <Flame className="ml-2 mt-4" size={40} color="#020408" strokeWidth={1.75} />
                <Flame className="ml-2 mt-4" size={40} color="#020408" strokeWidth={1.75} />
              </section>

            </section>




            {/* Course Card */}

            <section
              className=" bg-gradient-to-r from-indigo-800 to-purple-900
                 lg:col-span-9 lg:row-span-3 col-span-1 row-span-9 bg-blue-400  flex 
                  lg:flex-row flex-col lg:justify-evenly justify-evenly rounded-4xl"
            >


              {/* Loader Components */}
              <Loader />



              <CourseList courses={courses} />

             

            </section>









          </section>
        </main>

      </main>

    </>
  );
}
