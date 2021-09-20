import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import { Avatar, Button, Tooltip, Modal, List } from "antd";
import { CheckOutlined, CloseOutlined, EditOutlined, QuestionOutlined, UploadOutlined } from "@ant-design/icons";
import AddLessonForm from "../../../../components/forms/AddLessonForm";
import { toast } from "react-toastify";
import Item from "antd/lib/list/Item";
import Link from "next/link";
/* Single course view  */
const CourseView = () => {
    const [fetchedCouse, setFetchedCourse] = useState({});
    const [lessonValues, setLessonValues] = useState({
        title: "",
        content: "",
        video: "",
    });
    const [uploading, setUploading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [videoTitel, setVideoTitel] = useState("");
    const [uploadProgress, setUploadProgress] = useState(0);
    const router = useRouter();

    /*  course name */
    const { slug } = router.query;
    useEffect(() => {
        const fetchCourse = async () => {
            const response = await axios.get(`https://tpbackend01.azurewebsites.net/api/course/${slug}`);
            setFetchedCourse(response.data);
        }
        fetchCourse();
    }, [slug])
    /*  form submission    */
    const handleAddLesson = async (e) => {
        e.preventDefault();
        setUploading(true);
        try {
            const { data } = await axios
                .post(`https://tpbackend01.azurewebsites.net/api/course/lesson/addlesson/${slug}`, { ...lessonValues })
            setUploading(false);

            toast(`${lessonValues.title} lesson was succefully added`);
            setFetchedCourse({ ...data });
            setLessonValues({ ...lessonValues, content: "", title: "", video: "" });
            setVideoTitel("")
            setVisible(false)
        } catch (error) {
            console.log(error);
            setUploading(false);
            toast(error.response.data)
        }
    }
    const handelVideo = async (e) => {
        try {
            let videoFile = e.target.files[0];
            setUploading(true);
            const videoData = new FormData();
            videoData.append('video', videoFile);
            const videoResponseData = await axios.post("https://tpbackend01.azurewebsites.net/api/video/upload", videoData, {
                onUploadProgress: (e) => {
                    setUploadProgress(Math.round(100 * e.loaded) / e.total)
                }
            })
            setUploading(false);
            setLessonValues({ ...lessonValues, video: videoResponseData.data });
            // setFetchedCourse(data)
            setVideoTitel(videoFile.name.length >= 10 ? videoFile.name.slice(0, 10) + "..." : videoFile.name);

        } catch (error) {
            console.log(error.response.data);
            setUploading(false);
            toast(error.response.data);
        }
    }
    /*    Delete video from Azure !
    */
    const handleVideoRemove = async () => {
        const blobName = lessonValues.video.split("/evideos/")[1].split(".mp4")[0];
        try {
            setUploading(true);
            const deleteVideoResponse = await axios.get(`https://tpbackend01.azurewebsites.net/api/course/video/remove/${slug}/${blobName}`);
            setLessonValues({ ...lessonValues, video: { videoUrl: "" } });
            setVideoTitel("");
            setUploading(false);
        } catch (error) {
            console.log(error);
            setUploading(false);
            toast("video removing failed :( ");
        }
    }

    const handlePublish = async (e, courseId) => {

        try {
            const { data } = await axios.put(`https://tpbackend01.azurewebsites.net/api/course/publish/${slug}/${courseId}`)
            setFetchedCourse({ ...fetchedCouse, published: true })

            console.log(data)
        } catch (error) {
            console.log(error)
            toast(`publish has failed because this error: ${error.message}`)
        }
    }


    const handleUnpublish = async (e, courseId) => {

        try {
            const { data } = await axios.put(`https://tpbackend01.azurewebsites.net/api/course/unpublish/${slug}/${courseId}`)
            setFetchedCourse({ ...fetchedCouse, published: false })
        } catch (error) {
            console.log(error)
            toast(`unpublish has failed because this error: ${error.message}`)
        }
    }
    return (
        <InstructorRoute>
            <div className="container-fluid pt-3">
                {/*<pre>{JSON.stringify(fetchedCouse, null, 4)}</pre>*/}
                {fetchedCouse &&
                    <>
                        <div className="media d-flex pb-2 pt-2 shadow-lg p-3 mb-2 rounded"
                        style={{backgroundColor:"#f5f5f5"}}
                        >
                            <Avatar
                                size={80}
                                src={fetchedCouse.image_preview ? fetchedCouse.image_preview : "./course.png"}
                            ></Avatar>
                            <div className="body-container w-50">
                                <div className="media-body">
                                    <div className="row">
                                        <div className="">
                                            <h5
                                                style={{ "marginTop": "-10px", "marginLeft": "10px" }}
                                                className="mt-2 ml-5 text-primary">{fetchedCouse.name}</h5>
                                            <p
                                                style={{ "marginTop": "-10px", "marginLeft": "10px" }}
                                            >{fetchedCouse.lessons && fetchedCouse.lessons.length}  lesson</p>
                                            <p
                                                style={{ "marginTop": "-10px", "marginLeft": "10px" }}
                                            >{fetchedCouse.lessons && fetchedCouse.category} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-control d-flex">
                                <div className="control-left" onClick={() => router.push(`/instructor/course/edit/${slug}`)} style={{ paddingTop: "6px" }}>
                                    <Tooltip
                                        title="Edit"
                                        className="ml-4">
                                        <EditOutlined className="h5 pointer text-warning "></EditOutlined>
                                    </Tooltip>

                                </div>
                                <div className="control-right" style={{ marginLeft: "19px", paddingTop: "6px" }}>
                                    {fetchedCouse.lessons && fetchedCouse.lessons.length < 5 ?
                                        <Tooltip
                                            title='Min 5 lessons required to publish'
                                        >
                                            <QuestionOutlined
                                                className="h5 pointer text-danger"
                                            ></QuestionOutlined>

                                        </Tooltip> : fetchedCouse.published ?
                                            <Tooltip
                                                onClick={(event) => handleUnpublish(event, fetchedCouse._id)}
                                                title="unpublish"
                                                className="h5 pointer text-danger"

                                            >   <CloseOutlined />   </Tooltip> :

                                            <Tooltip
                                                onClick={(event) => handlePublish(event, fetchedCouse._id)}
                                                title="Publish">

                                                <CheckOutlined className="h5 pointer text-success"></CheckOutlined>
                                            </Tooltip>
                                    }
                                </div>
                            </div>
                        </div>
                        {/*  Course description */}
                        <div className="description-box pl-5">
                            <p 
                            className="pb-2 pt-2 shadow-lg p-3 mb-2 rounded"
                            >
                                <b
                                    style={{}}>Description: </b>
                                {fetchedCouse.description}</p>
                        </div>
                        <div className="row">
                            <Button
                                onClick={() => setVisible(true)}
                                className="col-md-2 offset-md-3 text-center"
                                type="primary"
                                shape="round"
                                icon={<UploadOutlined />}
                            >
                                Add lesson
                            </Button>

                            <Modal
                                title="+ Add Lesson"
                                centered
                                visible={visible}
                                onCancel={() => setVisible(false)}
                                footer={null}
                            >
                                <AddLessonForm
                                    setLessonValues={setLessonValues}
                                    lessonValues={lessonValues}
                                    setUploading={setUploading}
                                    uploading={uploading}
                                    handleAddLesson={handleAddLesson}
                                    visible={visible}
                                    handelVideo={handelVideo}
                                    setVideoTitel={setVideoTitel}
                                    videoTitel={videoTitel}
                                    uploadProgress={uploadProgress}
                                    handleVideoRemove={handleVideoRemove}
                                ></AddLessonForm>
                            </Modal>
                            <div className="row pl-5">
                                <div className="col  lesson-list">
                                    <h4>{fetchedCouse.lessons?.length || 0} lessons</h4>
                                </div>
                                <List
                                    itemLayout="horizental"
                                    dataSource={fetchedCouse?.lessons}
                                    renderItem={(item, index) =>
                                    (<Item className="shadow-sm p-3 mb-5 bg-white rounded">
                                        <Item.Meta
                                            avatar={<Avatar>{index + 1}</Avatar>}
                                            title={item.title}
                                        >
                                        </Item.Meta>
                                    </Item>)
                                    }
                                ></List>
                            </div>
                        </div>
                    </>
                }
            </div>
        </InstructorRoute>
    )
}
export default CourseView;
