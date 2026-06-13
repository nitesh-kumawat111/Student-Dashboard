"use client"

import { motion } from "framer-motion"
import CourseCard from "./CourseCard"
import { Course } from "@/type/course"
type CourseListProps = {
  courses: Course[] | null
}

export default function CourseList({ courses}: CourseListProps ) {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap"
    >
      {courses?.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          progress={course.progress}
        />
      ))}
    </motion.section>
  )
}