import { Badge, Modal } from 'antd';
import axios from 'axios';

import { useRouter } from 'next/router';
import { CurrencyFormater } from '../../utils/utilities';
import ReactPlayer from 'react-player';
import { useContext, useEffect, useState } from 'react';
import SingleCourseJumbotron from '../../components/cards/singlecoursejumbotron';
import ModalCoursePreview from '../../components/modals/previewModal';
import SingleCourseLessons from '../../components/cards/lessonsList'
import { Context } from '../../context/'

const SingleCourse = ({ course }) => {


    const [visible, setVisible] = useState(false);
    const [preview, setPreview] = useState("");
    const [enrolled, setEnrolled] = useState(false)
    const { loading, setLoading } = useState(false);

    const router = useRouter();
    const { slug } = router.query;


    //context
    const { state, dispatch } = useContext(Context);

    const handlePaidEnrollement = async () => {

    }

    useEffect(() => {

        const fetch_course_payement_status = async () => {
            const response = await axios.get(`/api/course/check-enrollement/${course._id}`)
            console.log(response)
            setEnrolled(response.data.ok)
        }
        if (state.user) {
            fetch_course_payement_status();

        }
    }, [state.user, course])



    const handleFreeEnrollement = async () => {

        /* go to the course     */
        if(state.user && enrolled) {
            router.push(`/user/course/${course.slug}`)
        }
        try {
            const res = await axios.get(`/api/course/enroll-freecourse/${course._id}`)
            setEnrolled(true)

            console.log(res)
        } catch (error) { console.log(error) }
    }
    return (
        <>
            <SingleCourseJumbotron
                course={course}
                setPreview={setPreview}
                preview={preview}
                setVisible={setVisible}
                visible={visible}
                user={state.user}
                setLoading={setLoading}
                loading={loading}
                handlePaidEnrollement={handlePaidEnrollement}
                handleFreeEnrollement={handleFreeEnrollement}
                enrolled={enrolled}
            />

            <ModalCoursePreview
                course={course}
                setVisible={setVisible}
                preview={preview}
                visible={visible}
                setPreview={setPreview}
            />

            {course.lessons &&
                <SingleCourseLessons
                    lessons={course.lessons}
                    setPreview={setPreview}
                    visible={visible}
                    setVisible={setVisible}
                >

                </SingleCourseLessons>
            }

            {/*JSON.stringify(course, null, 4)*/}

        </>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query
    const { data } = await axios.get(`http://localhost:9090/api/course/${slug}`)

    return (
        {
            props: {
                course: data,
            },
        }
    )
}

export default SingleCourse