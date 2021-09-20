import axios from "axios";
import { useRouter } from "next/router";
import { createElement, useEffect, useState } from "react";
import { useAlert } from 'react-alert';
import LearnerRoute from '../../../components/routes/LearnerRoute';
import { Button, Menu, Avatar } from 'antd';
import ReactPlayer from 'react-player'
const { Item } = Menu
import { MenuFoldOutlined, MenuUnfoldOutlined, PlayCircleOutlined } from "@ant-design/icons";
const BenutzerGekauftKurs = () => {
    const alert = useAlert()
    const [clicked, setClicked] = useState(-1)
    const [course, setCourse] = useState();
    const [loading, setLoading] = useState(false)
    const [lesson, setLesson] = useState("")
    const [collapsed, setCollapsed] = useState(false)
    const router = useRouter()
    const { slug } = router.query;


    useEffect(() => {
        const loadCourse = async () => {
            if (!router.isReady) return;

            try {
                alert.info("fetching enrolled course ...")
                const response = await axios.get(`https://tpbackend01.azurewebsites.net/api/user/course/${slug}/`)
                setCourse(response.data)
                console.log(response)
                //alert.success('Courses are succefully loaded')
            } catch (error) {
                console.log(error)
                alert.error("couldn't fetch the courses, try later")
            }

        }
        loadCourse()
    }, [router.isReady])
    return (
        <>
            <LearnerRoute>
                <div className="row">
                    <div className="col-md-3  col">
                        <Button
                            style={{width: "100%"}}
                            onClick={() => setCollapsed(!collapsed)}
                            className="text-primary mt-1 btn-block mb-2"
                        >
                            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                            {!collapsed && "Lessons"}

                        </Button>
                        <Menu
                            defaultSelectedKeys={[clicked]}
                            inlineCollapsed={collapsed}
                            style={{ height: '80vh' }}>
                            {course?.lessons.map((item, index) => {
                                return (
                                    <Item
                                        onClick={() => setClicked(item)}
                                        key={index}
                                        icon={<Avatar>{index + 1}</Avatar>}
                                    >
                                        {item.title.substring(0, 30)}
                                    </Item>
                                )
                            })}
                        </Menu>
                    </div>
                    <div className="col">
                        {clicked !== -1 ? (clicked.video?.videoUrl ?
                            <>
                                <div className="wrapper" style={{ maxHeight: "80vh" }}>
                                    <ReactPlayer
                                        className="player"
                                        url={clicked.video.videoUrl}
                                        width="100%"
                                        height="50%"
                                        controls
                                        plying={true}
                                    ></ReactPlayer>
                                    <div className="single-post content">
                                        {clicked.content}
                                    </div>
                                </div>

                            </>
                            :
                            "No video") :
                            <div className="d-flex justify-content-center bg-info align-items-center p-5">
                                <div
                                    className="text-center p-5">
                                    <PlayCircleOutlined className="text-primary display-1 p-5" />

                                    <p className="lead text-center">
                                        click on the lesson to start learnin
                                    </p>
                                </div>
                            </div>}
                    </div>
                </div>


            </LearnerRoute>

        </>
    )
}


export default BenutzerGekauftKurs