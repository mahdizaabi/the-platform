
import { Badge, Button } from 'antd';
import { CurrencyFormater } from '../../utils/utilities';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { LoadingOutlined, SafetyOutlined } from '@ant-design/icons'
const SingleCourseJumbotron = ({
    course,
    setVisible,
    setPreview,
    visible,
    preview,
    user,
    setLoading,
    loading,
    handlePaidEnrollement,
    handleFreeEnrollement,
    enrolled
}) => {

    const { name, description, instructor, lessons, updatedAt, image, price, category, paid } = course
    const [playingx, setPlayingx] = useState(false);
    const [playUrl, setPlayUrl] = useState();
    const handlePlay = () => {
        setPlayUrl("")
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="jumbotron p-4 pt-5 bg-primary square">
                    <div className="row">
                        <div className="col-md-7">
                            <h1 className="text-light font-weight-bold">{name}</h1>
                            <p className="lead">
                                {description && description.substring(0, 160)}...
                            </p>

                            <Badge count={category} style={{ backgroundColor: "#03a9f4" }} className="pb-4 mr-2">

                            </Badge>
                            <p>created by {instructor}</p>
                            <p>last updated {new Date(updatedAt).toLocaleDateString()}</p>
                            <h4 className="text-light">
                                {paid ? CurrencyFormater({
                                    amount: price,
                                    currency: "usd"
                                }) : "free"}
                            </h4>
                        </div>
                        <div className="col-md-4">
                            {course?.lessons[0]?.video?.videoUrl ?
                                <div
                                    onClick={() => {
                                        setPreview(course.lessons[0].video_preview)
                                        setVisible(!visible)
                                    }}

                                    className="react_video_player">
                                    <ReactPlayer
                                        style={{ maxWidth: "100%" }}
                                        url={course.lessons[0].video_preview}
                                        height="225px"
                                        light={course?.image_preview}
                                        playing={false}
                                    ></ReactPlayer>

                                </div> :
                                <div className="tutorial_cover col-md-3 p-4">
                                    <img
                                        src={course?.image_preview}
                                        alt={name}
                                        className="img"
                                        width="300px"
                                        height="150px"
                                    ></img>
                                </div>
                            }
                            <Button

                            ></Button>
                            {loading ?
                                <div className="d-flex justify-content-center">
                                    <LoadingOutlined className="h1 text-danger"></LoadingOutlined>
                                </div> :
                                <Button
                                    className="mb-3"
                                    type="danger"
                                    block
                                    shape="round"
                                    icon={<SafetyOutlined />}
                                    size="large"
                                    disabled={loading}
                                    onClick={handleFreeEnrollement}
                                >{user && !enrolled ? "enroll now" : user &&  enrolled ? "go to course" : "login to enroll"} </Button>

                            }
                            <p>show ernroll button</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default SingleCourseJumbotron;