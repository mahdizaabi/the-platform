import { Button, Progress, Tooltip } from 'antd';
import { CloseCircleFilled, CloseSquareFilled } from '@ant-design/icons';
const AddLessonForm = ({
    setLessonValues,
    lessonValues,
    handleAddLesson,
    setUploading,
    uploading,
    handelVideo,
    videoTitel,
    uploadProgress,
    handleVideoRemove
}) => {
    return <div className="container addLesson-formContainer pt-3">
        <form action="" encType="multipart/form-data" onSubmit={handleAddLesson}>
            <input type="text" name="lesson-title-input"
                className="form-control square"
                id="lesson-title-input"
                autoFocus
                required
                onChange={ev => setLessonValues({
                    ...lessonValues,
                    title: ev.target.value
                })}
                value={lessonValues.title}
                placeholder="title..."
            />

            <textarea
                name=""
                className="form-control mt-3"
                cols="7"
                rows="7"
                onChange={e => setLessonValues({
                    ...lessonValues,
                    content: e.target.value
                })}
                values={lessonValues.content}
                placeholder="Content... "

            ></textarea>



            <div className="video_input col d-flex align-items-center">

                <label htmlFor="video"
                    className="btn col-4 btn-dark btn-block text-left mt-3"
                >
                    {videoTitel ? videoTitel : uploading ? "uplaoding ..." : "upload video"}
                    <input
                        type="file"
                        accept="video/*"
                        name="video"
                        hidden
                        onChange={(e) => handelVideo(e)}
                        id="video" />
                </label>
                {uploading && <div className="mt-3 col-3">
                    <Progress style={{ marginLeft: "12px" }} type="circle" percent={uploadProgress} width={40} />
                </div>}

                {!uploading && lessonValues.video && <div className="mt-3  d-flex align-items-center col-1 justify-content-center">
                    <Tooltip title="Remove">
                        <span
                            onClick={handleVideoRemove}>
                            <CloseSquareFilled className="text-danger d-flex justify-content-center  pointer" />
                        </span>

                    </Tooltip>
                </div>}
            </div>

            <Button
                onClick={(e) => {handleAddLesson(e)
                setLessonValues({content:"", title:"", video:""})
                }}
                className="col mt-3"
                size="large"
                type="primary"
                loading={uploading}
                shape="round"
                disabled={lessonValues.content && lessonValues.title ? false : true}
            >
                {uploading && lessonValues.video ? "uploading Lesson ..." :
                uploading && !lessonValues.video ?
                 "uploading video" : "add lesson"}
            </Button>
        </form>
        <pre> {JSON.stringify(lessonValues, null, 4)} </pre>*
    </div>
}

export default AddLessonForm;