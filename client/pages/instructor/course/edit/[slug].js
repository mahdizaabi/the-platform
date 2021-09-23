
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CourseCreationFrom from "../../../../components/forms/courseCreationForm";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import CourseCreate from '../create';
import { Avatar, Button, Tooltip, Modal, List } from "antd";
import Item from "antd/lib/list/Item";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateLessonFormx from "../../../../components/forms/updateLessonForm";
import { toast } from "react-toastify";
const Edit = () => {

    const router = useRouter()
    const { slug } = router.query;
    const [lessons, setLessons] = useState([]);

    const [visible, setVisible] = useState(false)
    const [currentClickesLesson, setCurrentClickedLesson] = useState({})

    const [uploadVideoButtonText, setUploadVideoButtonText] = useState("upload video")
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [course, setCourse] = useState({})
    useEffect(() => {
        const fetchCourse = async () => {
            const user = JSON.parse(window.localStorage.getItem("currentUser"));
            const header = user.jwt;
            const response = await axios.get(process.env.NEXT_PUBLIC_API + `/course/${slug}`,{
                headers: {
                    'Authorization': `Bearer ${header}`
                }
            });
            if (response.data) {
                setLessons(response.data.lessons)
            }

        }
        fetchCourse();
    }, [slug])


    const handleDrag = (e, index) => {
        e.dataTransfer.setData('itemIndex', index);
    }

    const handleDrop = (e, index) => {
        const itemIndex = e.dataTransfer.getData("itemIndex");
        const targetItemIndex = index;
        let lessonsClone = [...lessons]

        let temp = lessonsClone[targetItemIndex]
        lessonsClone[targetItemIndex] = lessonsClone[itemIndex],
            lessonsClone[itemIndex] = temp;
        setLessons(lessonsClone);
    }
    const handleDelete = async (index, item) => {
        const popup = window.prompt("Are you sure you want to delte")
        if (!popup) return;

        const filtredLessons = lessons.filter((item, indexx) => index !== indexx)
        setLessons(filtredLessons);
        let lessonId = item._id;
        const user = JSON.parse(window.localStorage.getItem("currentUser"));
        const header = user.jwt;
        const response = await axios.delete(process.env.NEXT_PUBLIC_API + `/course/lesson/delete/${slug}/${lessonId}`,{
            headers: {
                'Authorization': `Bearer ${header}`
            }
        });

    }


    const handleVideo = async (e) => {
        if (currentClickesLesson.video && currentClickesLesson.video.videoUrl) {
            const blobName = currentClickesLesson.video.videoUrl.split("/evideos/")[1].split(".mp4")[0];
            console.log(blobName);
            try {
                setUploading(true);
                const user = JSON.parse(window.localStorage.getItem("currentUser"));
                const header = user.jwt;
                const deleteVideoResponse = await axios.get(process.env.NEXT_PUBLIC_API + `/course/video/remove/${slug}/${blobName}`,{
                    headers: {
                        'Authorization': `Bearer ${header}`
                    }
                });
                setCurrentClickedLesson({ ...currentClickesLesson, video: { videoUrl: "" } });
                setUploading(false);
            } catch (error) {
                console.log(error)
                setUploading(false)
                toast("video removing failed :( ");
            }
        }

        const file = e.target.files[0]
        setUploadVideoButtonText(file.name);
        setUploading(true);
        const videoData = new FormData();
        videoData.append("video", file);
        const user = JSON.parse(window.localStorage.getItem("currentUser"));
        const header = user.jwt;
        const videoResponseData = await axios.post(process.env.NEXT_PUBLIC_API + "/course/video/upload", videoData, {
           
            headers: {
                'Authorization': `Bearer ${header}`
            },
            onUploadProgress: (e) => {
                setUploadProgress(Math.round(100 * e.loaded) / e.total)
            }
        })

        setCurrentClickedLesson({ ...currentClickesLesson, video: videoResponseData.data })
        setUploading(false)
    }
    const handleUpdateLesson = async (e) => {
        e.preventDefault();

        try {
           
            const { data } = await axios
                .put(process.env.NEXT_PUBLIC_API + `/course/lesson/update/${slug}/${currentClickesLesson._id}`, currentClickesLesson);
            setCurrentClickedLesson(data);
            setUploadVideoButtonText("Upload Video");
            setVisible("Lesson Updated");
            setCourse(data);
            if (data.ok) {
               
                const index = lessons.findIndex((el) => el._id === currentClickesLesson._id);
                lessons[index] = currentClickesLesson;

                setLessons([...lessons])
                console.log(lessons)
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container edit_page">
            <CourseCreate
                submitUrl={process.env.NEXT_PUBLIC_API + `/course/edit/${slug}`}
            />


            <div className="row d-flex justify-content-center">
                <div className="col-8 p-3">
                    <hr />
                    <div className="lesson-list">
                        <h4>{lessons?.length} lessons</h4>
                    </div>
                    <hr />
                    <List
                        onDragOver={(e) => e.preventDefault()}
                        itemLayout="horizental"
                        dataSource={lessons}
                        renderItem={(item, index) =>
                        (<Item
                            draggable
                            onDragStart={event => handleDrag(event, index)}
                            onDrop={event => handleDrop(event, index)}
                        >
                            <Item.Meta
                                onClick={() => {
                                    setVisible(true);
                                    setCurrentClickedLesson(item);
                                }}
                                avatar={<Avatar>{index + 1}</Avatar>}
                                title={item.title}
                            >
                            </Item.Meta>
                            <DeleteOutlined
                                className="text-danger float-right"
                                onClick={() => handleDelete(index, item)}
                            ></DeleteOutlined>
                        </Item>)
                        }
                    ></List>
                </div>
            </div>

            <Modal
                title="update lesson"
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}

            >
                <UpdateLessonFormx
                    currentItem={currentClickesLesson}
                    setCurrentItem={setCurrentClickedLesson}
                    handleUpdateLesson={handleUpdateLesson}
                    handleVideo={handleVideo}
                    uploadVideoButtonText={uploadVideoButtonText}
                    progress={progress}
                    uploading={uploading}
                />
                {JSON.stringify(currentClickesLesson, null, 4)}
            </Modal>
        </div>

    )
}
export default Edit;
