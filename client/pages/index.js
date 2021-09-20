import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "../components/cards/courseCard";


const Index = ({courses}) => {
    const [allFetchedCourses, setAllFetchedCourses] = useState([])
    useEffect(() => {
        const fetchAllCourses = async() => {
            const courses = await axios.get("https://tpbackend01.azurewebsites.net/api/course/index/getallcourses");
            setAllFetchedCourses(courses.data)
        }
        fetchAllCourses();
    }, [])
    return (
        <>
            <h1 className="jumbotron text-center bg-primary square p-4">the Platform... </h1>
            <div className="latest_course container">
                <div className="row d-flex course_list">
                        {courses.length !==0 && courses?.map(course => 
                                   ( 
                                   <div key={course._id} className="col-md-3">
                                       <CourseCard
                                    className=""
                                    course={course}
                                    ></CourseCard>
                                   </div>
                                   )
                        ) }
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const {data} = await axios.get(`https://tpbackend01.azurewebsites.net/api/course/index/getallcourses`)

    return (
        {
            props: {
                courses: data,
            }
        }
    )
}
export default Index;