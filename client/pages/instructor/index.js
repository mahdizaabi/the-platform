import axios from 'axios';
import { useEffect, useState } from 'react';
import InstructorRoute from '../../components/routes/InstructorRoute'
import Avatar from "antd/lib/avatar/avatar";
import { Tooltip } from 'antd';
import Link from 'next/link';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import CourseCard from '../../components/cards/courseCard';
const InstructorIndex = () => {
    const [courses, setCourses] = useState();
    useEffect(() => {
        loadCourses();
    }, [])

    const myStyle = { marginTop: "-15px", fontSize: "10px" }
    const loadCourses = async () => {
        const { data } = await axios.get("/api/instructor/courses");
        console.log(data)
        setCourses(data);
    }
    return (<>
        <InstructorRoute>
            <h1 className="jumbotron text-center square p-4"> Instructorc Dashboard</h1>
            {/*<pre> {JSON.stringify(courses, null, 4)} </pre>*/}

            <div className="row instructor_courses">
                <div className="row">
                    {courses && courses.map((course, index) => (
                        <div key={index} className="shadow-sm p-3 bg-light rounded media mt-2 d-flex col-12 align-items-center flex-row pt-2">
                            <div className="align-self-start">
                                <Avatar
                                    src={course.image_preview ? course.image_preview : '/course.png'}
                                    size={80}
                                ></Avatar>
                            </div>
                            <div className="media-body d-flex col-8 pl-5">
                                <div className="row d-flex w-100">
                                    <div className="d-flex pl-5">
                                        <div className="bodyticket col-8">
                                            <Link
                                                href={`/instructor/course/view/${course.slug}`}
                                                className="pointer"
                                            >
                                                <a className="h5 text-primary">

                                                    <h5>{course.name}</h5>
                                                </a>
                                            </Link>
                                            <p>
                                                {course?.description}
                                            </p>

                                            <p style={{}}>
                                                {course.lessons.length} Lessons
                                            </p>
                                            {course.lessons.length < 5 ? (
                                                <p style={myStyle}>At least 5 lessosn are required to publish a course</p>
                                            ) : course.published ? <p style={myStyle}>"your course is published"</p> :
                                                <p stye={myStyle}>   you course is ready to be published</p>
                                            }
                                        </div>
                                        <div className="checkbox col-3 d-flex justify-content-center">
                                            <div className="col-md-2 mt-3 text-center">
                                                {course.published ? (
                                                    <Tooltip title="published">
                                                        <CheckCircleOutlined className="h5 pointer text-success" />
                                                    </Tooltip>) :

                                                    (<Tooltip title="unpublished">
                                                        <CloseCircleOutlined className="pointer h5 text-warning"></CloseCircleOutlined>
                                                    </Tooltip>)}
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </InstructorRoute>
    </>)

}

export default InstructorIndex;