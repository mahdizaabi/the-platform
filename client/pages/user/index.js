import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context';
import UserRoute from '../../components/routes/UserRoute';
import { useAlert } from 'react-alert'
import axios from 'axios';
import { Avatar } from 'antd'
import Link from 'next/link'
import { SyncOutlined, PlayCircleOutlined } from '@ant-design/icons'
const UserIndex = () => {
    const { state: { user } } = useContext(Context);
    const [fetchedCourses, setFetchedCourses] = useState([]);
    const alert = useAlert();
    useEffect(() => {
        const loadCourses = async () => {
            try {
                alert.info("fetching enrolled courses ...")
                const response = await axios.get(`/api/user/course/listall/`)
                setFetchedCourses(response.data)
                console.log(response)
                //alert.success('Courses are succefully loaded')
            } catch (error) {
                console.log(error)
                alert.error("couldn't fetch the courses, try later")
            }

        }
        loadCourses()
    }, [])

    return (
        <UserRoute>
            <h1 className="jumbotron text-center p-3 square">
                User Dashboard
            </h1>

            <div className="container-fluid">
                {fetchedCourses?.map(course => (
                    <div
                        key={course._id}
                        className="media d-flex  shadow p-3 mt-2 mb-5 bg-white rounded"
                    >
                        <Avatar
                            size={80}
                            shape="square"
                            src={course.image ? course.image.imageUrl : "/course.png"}

                        >
                            no preview
                        </Avatar>

                        <div className="media-body col-10 pl-2">
                            <div className="pl-3 d-flex align-items-center row">
                                <div style={{ marginLeft: "12px" }} className="col-8">

                                    <Link
                                        href={`/user/course/${course.slug}`}
                                        className="pointer"
                                    >
                                        <a>
                                            <h5 className="text-primary ">{course.name}</h5>
                                        </a>
                                    </Link>
                                    <p style={{ marginTop: '-10px' }}> {course.lessons.length} </p>
                                    <p style={{ marginTop: '-10px' }} className="text-muted">Author: {course.instructor.name}</p>
                                </div>

                                <div className="col-md-2 mt-3 text-center">
                                    <Link
                                        href={`/user/course/${course.slug}`}
                                        className="pointer"
                                    >
                                        <a>
                                            <PlayCircleOutlined className="h2 pointer text-primary"></PlayCircleOutlined>>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>



        </UserRoute>
    )
}

export default UserIndex;