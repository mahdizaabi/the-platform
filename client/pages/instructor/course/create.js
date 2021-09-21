import InstructorRoute from '../../../components/routes/InstructorRoute'
import CourseCreationFrom from '../../../components/forms/courseCreationForm'
import { useEffect, useState } from 'react'
import Resizer from 'react-image-file-resizer';
import { toast } from 'react-toastify';
import axios from 'axios';
import deleteBlob from '../../../utils/Azure_delete_blob'
import { useRouter } from 'next/router';
import { ControlOutlined } from '@ant-design/icons';


const CourseCreate = ({ submitUrl }) => {
    const router = useRouter();
    const { slug } = router.query;

    const [preview, setPreview] = useState("");
    const [uploadButtonText, setUploadButtonText] = useState("");
    const [image, setImage] = useState("");
    const [course, setCourse] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        uploading: '',
        paid: true,
        loading: false,
    })


    ////////////////////////////////////////////////
    ////////////////////////////////////////////////
    ///////////////////////////////////////////////
    useEffect(() => {
        const fetchCourse = async () => {
            const user = JSON.parse(window.localStorage.getItem("currentUser"));
            const header = user.jwt;
            const response = await axios.get(`https://tpbackend01.azurewebsites.net/api/course/${slug}`,{
                headers: {
                  'Authorization': `Bearer ${header}`
                }});
            console.log("==> respose with undefined", response)
            if (response.data) {
                console.log(response)
                setCourse({ ...course, ...response.data });
                setPreview(response.data.image_preview)
            }

        }
        fetchCourse();
    }, [slug])
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    const handleChange = e => {
        setCourse({ ...course, [e.target.name]: e.target.value })
    }

    const handleUploadImageClick = async (eventx) => {
        let file = eventx.target.files[0];
        let imagePreview = window.URL.createObjectURL(file);
        const imageData = new FormData();
        imageData.append('imageFile', file);
        //setImageData(imageData);
        setCourse({ ...course, loading: true })
        if (imageData.entries().next().value[1] !== null) {
            try {


                const { data } = await axios.post("https://tpbackend01.azurewebsites.net/api/course/upload-image", imageData, {
                    onUploadProgress: progressEvent => {
                        console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
                    }
                });
                setPreview(imagePreview);
                setCourse({ ...course, loading: false })
                setImage(data.imageUri);
                let imageName = file.name;
                if (imageName.length >= 10) {
                    imageName = imageName.slice(0, 10) + "..."
                }
                setUploadButtonText(imageName);
                setImage(data.imageUri);

            } catch (error) {
                console.log(error.response.data)
                setCourse({ ...course, loading: false })
                toast(error.response.data)
            }

        };
    }


    const handleImage = async(eventx) => {
        let file = eventx.target.files[0];
        let imagePreview = window.URL.createObjectURL(file);
        const imageData = new FormData();
        imageData.append('imageFile', file);
        //setImageData(imageData);
        setCourse({ ...course, loading: true })
        if (imageData.entries().next().value[1] !== null) {
            try {
                Resizer.imageFileResizer(file, 200, 150, "JPEG", 100, 0, async (imageFile) => {
                    imageData.append('imageFile', imageFile);
                    const { data } = await axios.post("https://tpbackend01.azurewebsites.net/api/course/upload-image", imageData, {
                        onUploadProgress: progressEvent => {
                            console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
                        }
                    });
                    setPreview(imagePreview);
                    setCourse({ ...course, loading: false })
                    setImage(data.imageUri);
                    let imageName = file.name;
                    if (imageName.length >= 10) {
                        imageName = imageName.slice(0, 10) + "..."
                    }
                    setUploadButtonText(imageName);
                    setImage(data.imageUri);
                }, 'file')
            } catch (error) {
                console.log(error.response.data)
                setCourse({ ...course, loading: false })
                toast(error.response.data)
            }
        }


    }
    const handleSubmit = async (e) => {
        const url = submitUrl ? submitUrl : "https://tpbackend01.azurewebsites.net/api/course"
        e.preventDefault();
        const response = await axios.post(url, {
            ...course, image_preview: `https://basicstorage1414.blob.core.windows.net/test-container/${image}`
        })
        router.push('/instructor');
        console.log(response)
    }

    const handleImageRemove = async () => {
        if (course.loading) {
            return;
        }
        try {
            const { data } = await axios.post("https://tpbackend01.azurewebsites.net/api/image/image-preview/delete", {
                blobName: image
            })
            setPreview("");
            setImage("");
        } catch (error) {
            console.log(error);
            toast("Ipage uplaoed has failed try later on!")
        }

    }
    return (<>
        <InstructorRoute>
            <h1 className="jumbotron text-center square p-5"> Create Course</h1>
            <CourseCreationFrom
                handleChange={handleChange}
                handleImage={handleImage}
                handleSubmit={handleSubmit}
                course={course}
                setCourse={setCourse}
                preview={preview}
                setPreview={setPreview}
                uploadButtonText={uploadButtonText}
                handleImageRemove={handleImageRemove}
                handleUploadImageClick={handleUploadImageClick}
            ></CourseCreationFrom>
            {image && <img src={`https://basicstorage1414.blob.core.windows.net/test-container/${image}`} alt="rc" />}
        </InstructorRoute>
    </>)

}

export default CourseCreate;